# Install dependencies only when needed
FROM node:18-alpine AS deps

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json ./
RUN yarn install

# Run Prisma generate here
COPY . .
RUN npx prisma generate
RUN npx prisma db push

# Rebuild the source code only when needed
FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN yarn build && yarn install --production --ignore-scripts --prefer-offline

# Production image, copy all the files and run next
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

# Set build argument and environment variable
ARG NEXT_PUBLIC_IP_REGISTRY_API_KEY
ARG DATABASE_URL
ARG NEXT_PUBLIC_GA_KEY
ARG SLACK_WEBHOOK_URL

ENV NEXT_PUBLIC_IP_REGISTRY_API_KEY=$NEXT_PUBLIC_IP_REGISTRY_API_KEY
ENV DATABASE_URL=$DATABASE_URL
ENV NEXT_PUBLIC_GA_KEY=$NEXT_PUBLIC_GA_KEY
ENV SLACK_WEBHOOK_URL=$SLACK_WEBHOOK_URL

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/src ./src

USER nextjs

ENV PORT=3000
EXPOSE 3000

CMD ["yarn", "start"]
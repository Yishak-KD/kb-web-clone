import { Prisma } from "@prisma/client";
import prisma from "./client";

export async function createContact({
    fullName,
    email,
    message,
}: {
    fullName: string
    email: string
    message: string
}) {
    try {
        const contactUs = await prisma.contactUs.create({
            data: {
                fullName,
                email,
                message
            },
        })
        return contactUs
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            throw error
        }
    }
}
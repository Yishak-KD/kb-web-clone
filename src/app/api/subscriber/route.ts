import prisma from '../../../../lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(
    req: NextRequest
) {
    const { email } = await req.json()

    try {
        const emailExist = await prisma.subscriber.findUnique({
            where: { email: email }
        })
            .then(data => data)

        if (Boolean(emailExist)) {
            return NextResponse.json({
                status: false,
                error: 'Email already exist'
            })
        } else {
            await prisma.subscriber.create({
                data: { email }
            })

            return NextResponse.json({
                success: true,
                value: 'success'
            }, { status: 200 })
        }

    } catch (error: any) {
        console.error(error)

        return NextResponse.json({
            success: false,
            error: 'Failed to save donation intent'
        }, { status: 500 })
    }
}

import prisma from '../../../../lib/prisma';
import { Subscriber } from '@prisma/client'
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
                error: 'Email Already Exist' })
        } else {
            const subscriber: Subscriber = await prisma.subscriber.create({
                data: { email }
            })

            // Return the success response as JSON
            return NextResponse.json({ 
                success: true,
                value: subscriber
             }, { status: 200 })
        }

    } catch (error: any) {
        console.error(error)

        // Return the error response as JSON
        return NextResponse.json({ 
            success: false,
            error: 'Failed to save donation intent' 
        }, { status: 500 })
    }
}

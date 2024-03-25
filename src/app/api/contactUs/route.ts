import prisma from '../../../../lib/prisma';
import { ContactUs } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server';

export async function POST(
    req: NextRequest
) {
    const {
        fullName,
        email,
        message
    } = await req.json()

    try {
        const contactUs: ContactUs = await prisma.contactUs.create({
            data: {
                fullName,
                email,
                message
            },
        })

        // Return the success response as JSON
        return NextResponse.json({ contactUs }, { status: 200 })
    } catch (error: any) {
        console.error(error)

        // Return the error response as JSON
        return NextResponse.json({ error: 'An error occurred while processing' }, { status: 500 })
    }
}

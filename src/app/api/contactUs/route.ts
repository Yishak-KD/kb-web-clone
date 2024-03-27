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

    if (!fullName || !email || !message) {
        return NextResponse.json({ 
            success: false,
            error: 'Full Name, Email, and Message are required fields' 
        }, { status: 400 })
    }

    try {
        const contactUs: ContactUs = await prisma.contactUs.create({
            data: {
                fullName,
                email,
                message
            },
        })

        // Return the success response as JSON
        return NextResponse.json({ 
            success: true,
            value: contactUs
         }, { status: 200 })
    } catch (error: any) {
        console.error(error)

        // Return the error response as JSON
        return NextResponse.json({ 
            success: false,
            error: 'Failed to submit contact us message' 
        }, { status: 500 })
    }
}

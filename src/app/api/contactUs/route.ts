import prisma from '../../../../lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import Result from '../../../../util/Result';
import axios from 'axios';

export type ContactUsResponse = Result<string>

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
        await prisma.contactUs.create({
            data: {
                fullName,
                email,
                message
            },
        })

        const slackMessage = {
            text: `*New Contact Form Submission*
            • *Full Name:* ${fullName}
            • *Email Address:* ${email}
            • *Message:* ${message}`
        };

        await axios.post(process.env.SLACK_WEBHOOK_URL ?? "", slackMessage)


        return NextResponse.json({ 
            success: true,
            value: 'success'
         }, { status: 200 })
    } catch (error: any) {
        console.error(error)

        return NextResponse.json({ 
            success: false,
            error: 'Failed to submit contact us message' 
        }, { status: 500 })
    }
}

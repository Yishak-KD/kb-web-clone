import prisma from '../../../../lib/prisma';
import { Donations } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server';

export async function POST(
    req: NextRequest
) {
    const {
        donationAmount,
        donationFrequency,
        paymentMethod,
        fullName,
        email
    } = await req.json()

    try {
        const donations: Donations = await prisma.donations.create({
            data: {
                donationAmount,
                donationFrequency,
                paymentMethod,
                fullName,
                email
            },
        })

        // Return the success response as JSON
        return NextResponse.json({ donations }, { status: 200 })
    } catch (error: any) {
        console.error(error)

        // Return the error response as JSON
        return NextResponse.json({ error: 'An error occurred while processing' }, { status: 500 })
    }
}

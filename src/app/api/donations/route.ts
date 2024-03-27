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
        return NextResponse.json({ 
            success: true,
            value: donations
         }, { status: 200 })
    } catch (error: any) {
        console.error(error)

        // Return the error response as JSON
        return NextResponse.json({ 
            success: false,
            error: 'Failed to save donation intent' 
        }, { status: 500 })
    }
}

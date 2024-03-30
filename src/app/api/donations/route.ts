import prisma from '../../../../lib/prisma';
import { Donation } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server';

export async function POST(
    req: NextRequest
) {
    const {
        amount,
        frequency,
        paymentMethod,
        fullName,
        email
    } = await req.json()

    try {
        const donations: Donation = await prisma.donation.create({
            data: {
                amount,
                frequency,
                paymentMethod,
                fullName,
                email
            },
        })

        return NextResponse.json({ 
            success: true,
            value: donations
         }, { status: 200 })
    } catch (error: any) {
        console.error(error)

        return NextResponse.json({ 
            success: false,
            error: 'Failed to save donation intent' 
        }, { status: 500 })
    }
}

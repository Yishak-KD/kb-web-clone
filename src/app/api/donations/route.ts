import prisma from '../../../../lib/prisma';
import { Donation } from '@prisma/client';
import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { amount, frequency, paymentMethod, fullName, email, phoneNumber } =
    await req.json();

  try {
    const donations: Donation = await prisma.donation.create({
      data: {
        amount,
        frequency,
        paymentMethod,
        fullName,
        email,
        phoneNumber,
      },
    });

    const slackMessage = {
      text: `*Donation submission form*
            • *Full Name:* ${fullName}
            • *Email:* ${email}
            • *Phone Number:* ${phoneNumber}
            • *Donation Amount:* ${amount}
            • *Payment Method:* ${paymentMethod}
            • *Donation Frequency:* ${frequency}`,
    };

    axios.post(process.env.SLACK_WEBHOOK_URL ?? '', slackMessage);

    return NextResponse.json(
      {
        success: true,
        value: donations,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to save donation intent',
      },
      { status: 500 }
    );
  }
}

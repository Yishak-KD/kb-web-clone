import prisma from '../../../../lib/prisma';
import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(
    req: NextRequest
) {
    const {
        fullName,
        email,
    } = await req.json()

    if (!fullName || !email) {
        return NextResponse.json({ message: 'Full name and email are required' }, { status: 400 });
    }

    try {
        const response = await axios.post('https://us-central1-kedus-bible-20.cloudfunctions.net/deleteUserData', {
            email: email,
            fullName: fullName
        });

        if (response.data.success) {
            await prisma.appDeletionRequest.create({
                data: {
                    fullName,
                    email
                },
            })

            return NextResponse.json({
                success: true,
                value: 'success'
            }, { status: 200 })
        }

        return NextResponse.json({ message: response.data.message }, { status: response.status })


    } catch (error: any) {
        console.error({ error })

        return NextResponse.json(error.response.data, { status: error.response.status })
    }
}
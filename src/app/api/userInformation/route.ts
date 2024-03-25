import prisma from '../../../../lib/prisma';
import { UserInformation } from '@prisma/client'
import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(
    req: NextRequest
) {
    const {
        fullName,
        email,
    } = await req.json()


    try {
        const response = await axios.post('https://us-central1-kedus-bible-20.cloudfunctions.net/lib-api/deleteUserData', {
            email: email,
            fullName: fullName
        });
        if (response.data.success) {
            const userInformation: UserInformation = await prisma.userInformation.create({
                data: {
                    fullName,
                    email
                },
            })

            // Return the success response as JSON
            return NextResponse.json({ userInformation }, { status: 200 })
        }

        return NextResponse.json({ message: response.data.message }, { status: response.status })

    } catch (error: any) {
        console.error({ error })

        // Return the error response as JSON
        return NextResponse.json(error.response.data, { status: error.response.status })
    }
}
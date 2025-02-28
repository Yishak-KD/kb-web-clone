import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';
import { put } from '@vercel/blob';
import axios from 'axios';

// Helper function to format date for filename
function getFormattedDate() {
  const date = new Date();
  return date.toISOString().split('T')[0];
}

export async function GET(req: NextRequest) {
  try {
    const authHeader = req.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.CRON_SECRET_KEY}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const backupData = {
      timestamp: new Date().toISOString(),
      data: {
        contactUs: await prisma.contactUs.findMany(),
        donations: await prisma.donation.findMany(),
        subscribers: await prisma.subscriber.findMany(),
      }
    };

    const backupJson = JSON.stringify(backupData, null, 2);

    const filename = `backup-${getFormattedDate()}.json`;
    const blob = await put(filename, backupJson, {
      contentType: 'application/json',
      access: 'private'
    });

    const successMessage = {
      text: `✅ Database Backup Completed Successfully\n` +
           `• Date: ${getFormattedDate()}\n` +
           `• File: ${filename}\n` +
           `• Size: ${(backupJson.length / 1024).toFixed(2)} KB\n` +
           `• URL: ${blob.url}\n` +
           `• Tables Backed Up: ${Object.keys(backupData.data).join(', ')}`
    };

    await axios.post(process.env.SLACK_WEBHOOK_URL ?? '', successMessage);

    return NextResponse.json({
      success: true,
      message: 'Backup completed successfully',
      url: blob.url
    });

  } catch (error: any) {
    console.error('Backup failed:', error);
    
    return NextResponse.json({
      success: false,
      error: 'Backup failed',
      details: error.message
    }, { status: 500 });
  }
}
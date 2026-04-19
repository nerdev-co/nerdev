import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const budgetLabels: Record<string, string> = {
  'under-75k': '< ₹75,000',
  '75k-2.5l': '₹75,000 – ₹2.5L',
  '2.5l-8l': '₹2.5L – ₹8L',
  '8l-plus': '₹8L+',
};

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, budget, details } = body;

    if (!name || !email || !budget || !details) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const resend = getResend();

    if (!resend) {
      console.log('=== NEW PROJECT INQUIRY ===');
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Budget:', budgetLabels[budget] || budget);
      console.log('Details:', details);
      return NextResponse.json(
        { message: 'Inquiry received (RESEND_API_KEY not set)' },
        { status: 200 }
      );
    }

    await resend.emails.send({
      from: 'nerdev <onboarding@resend.dev>',
      to: 'admin@nerdev.in',
      subject: `New Project: ${name}`,
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Budget:</strong> ${budgetLabels[budget] || budget}</p>
        <p><strong>Details:</strong></p>
        <p>${details.replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json(
      { message: 'Inquiry sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
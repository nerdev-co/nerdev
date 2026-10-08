import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { company } from '@/lib/company';
import { budgetOptions } from '@/lib/pricing';

const MAX_LENGTHS = { name: 120, email: 200, details: 5000 } as const;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function budgetLabel(value: string): string {
  return budgetOptions.find(option => option.value === value)?.label ?? value;
}

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, budget, details, company: honeypot } = body ?? {};

    // Honeypot: real users never fill a field they cannot see.
    if (honeypot) {
      return NextResponse.json({ message: 'Inquiry received' }, { status: 200 });
    }

    if (typeof name !== 'string' || typeof email !== 'string' ||
        typeof budget !== 'string' || typeof details !== 'string' ||
        !name || !email || !budget || !details) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (name.length > MAX_LENGTHS.name ||
        email.length > MAX_LENGTHS.email ||
        details.length > MAX_LENGTHS.details) {
      return NextResponse.json(
        { error: 'Field too long' },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    const resend = getResend();
    const label = budgetLabel(budget);

    if (!resend) {
      console.log('=== NEW PROJECT INQUIRY ===');
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Budget:', label);
      console.log('Details:', details);
      return NextResponse.json(
        { message: 'Inquiry received (RESEND_API_KEY not set)' },
        { status: 200 }
      );
    }

    await resend.emails.send({
      from: `${company.brand} <onboarding@resend.dev>`,
      to: [company.email],
      subject: `New Project: ${escapeHtml(name)}`,
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Budget:</strong> ${escapeHtml(label)}</p>
        <p><strong>Details:</strong></p>
        <p>${escapeHtml(details).replace(/\n/g, '<br>')}</p>
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

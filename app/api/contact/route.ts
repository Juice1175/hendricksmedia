import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, business, email, phone, message } = body

  // Using Resend — add RESEND_API_KEY to .env.local
  const RESEND_API_KEY = process.env.RESEND_API_KEY
  const TO_EMAIL = process.env.TO_EMAIL || 'josh@hendricksads.com'

  if (!RESEND_API_KEY) {
    // Fallback: log and return success in dev
    console.log('Contact form submission:', { name, business, email, phone, message })
    return NextResponse.json({ ok: true })
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: 'HendricksMedia <onboarding@resend.dev>',
      to: [TO_EMAIL],
      subject: `New inquiry from ${name} — ${business}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Business:</strong> ${business}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    }),
  })

  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}

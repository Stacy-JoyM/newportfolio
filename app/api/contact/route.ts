import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    if (
      !name ||
      !email ||
      !message ||
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof message !== 'string'
    ) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: 'Missing email configuration' }, { status: 500 })
    }

    await resend.emails.send({
      from: 'Portfolio Contact <portfolio@resend.dev>',
      to: 'jstacymuthoka@gmail.com',
      replyTo: email,
      subject: `New message from ${name}`,
      text: `${message}\n\nReply to: ${email}`,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Contact form error', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}


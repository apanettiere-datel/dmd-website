import { NextResponse } from 'next/server'

const TURNSTILE_VERIFY_URL =
  'https://challenges.cloudflare.com/turnstile/v0/siteverify'
const RESEND_SEND_URL = 'https://api.resend.com/emails'

function clean(value) {
  return typeof value === 'string' ? value.trim() : ''
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

async function verifyTurnstile({ token, ip }) {
  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret) {
    return { ok: true, skipped: true }
  }

  if (!token) {
    return { ok: false, message: 'Missing verification token.' }
  }

  try {
    const body = new URLSearchParams({
      secret,
      response: token,
    })
    if (ip) {
      body.set('remoteip', ip)
    }

    const response = await fetch(TURNSTILE_VERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    })
    if (!response.ok) {
      return { ok: false, message: 'Failed to verify anti-spam challenge.' }
    }

    const data = await response.json()
    if (!data.success) {
      return { ok: false, message: 'Anti-spam verification failed.' }
    }

    return { ok: true, skipped: false }
  } catch {
    return { ok: false, message: 'Unable to verify anti-spam challenge.' }
  }
}

async function sendWithResend({
  firstName,
  lastName,
  email,
  phone,
  serviceType,
  vehicleType,
  preferredDay,
  message,
}) {
  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.CONTACT_FROM_EMAIL
  const to = process.env.CONTACT_TO_EMAIL

  if (!apiKey || !from || !to) {
    console.info(
      'Contact submission received, but Resend is not configured. Add RESEND_API_KEY, CONTACT_FROM_EMAIL, and CONTACT_TO_EMAIL to enable email delivery.',
      {
        firstName,
        lastName,
        email,
        phone,
        serviceType,
        vehicleType,
      },
    )
    return {
      ok: true,
      message:
        'Quote request received. Email delivery will activate when Resend env variables are configured.',
    }
  }

  const fullName = `${firstName} ${lastName}`.trim()
  const subject = `New Quote Request: ${fullName || 'Website Lead'}`

  const text = [
    'New quote request from Drews Mobile Detailing website',
    '',
    `Name: ${fullName}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Service Type: ${serviceType}`,
    `Vehicle Type: ${vehicleType || 'Not provided'}`,
    `Preferred Day: ${preferredDay || 'Not provided'}`,
    '',
    'Message:',
    message,
  ].join('\n')

  const html = `
    <h2>New Quote Request</h2>
    <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Service Type:</strong> ${escapeHtml(serviceType)}</p>
    <p><strong>Vehicle Type:</strong> ${escapeHtml(vehicleType || 'Not provided')}</p>
    <p><strong>Preferred Day:</strong> ${escapeHtml(preferredDay || 'Not provided')}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replaceAll('\n', '<br />')}</p>
  `

  const response = await fetch(RESEND_SEND_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject,
      text,
      html,
    }),
  })

  if (!response.ok) {
    return { ok: false, message: 'Unable to send quote request email.' }
  }

  return {
    ok: true,
    message:
      'Thanks for reaching out. Your quote request was sent successfully.',
  }
}

export async function POST(request) {
  try {
    const body = await request.json()
    const firstName = clean(body.firstName)
    const lastName = clean(body.lastName)
    const email = clean(body.email)
    const phone = clean(body.phone)
    const serviceType = clean(body.serviceType)
    const vehicleType = clean(body.vehicleType)
    const preferredDay = clean(body.preferredDay)
    const message = clean(body.message)
    const website = clean(body.website)
    const turnstileToken = clean(body.turnstileToken)

    if (website) {
      return NextResponse.json({
        ok: true,
        message:
          'Thanks for reaching out. We received your request and will follow up soon.',
      })
    }

    if (!firstName || !lastName || !email || !phone || !serviceType || !message) {
      return NextResponse.json(
        {
          ok: false,
          message: 'Please fill out all required fields.',
        },
        { status: 400 },
      )
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        {
          ok: false,
          message: 'Please provide a valid email address.',
        },
        { status: 400 },
      )
    }

    if (message.length < 10) {
      return NextResponse.json(
        {
          ok: false,
          message: 'Please include a bit more detail in your message.',
        },
        { status: 400 },
      )
    }

    const ipAddress =
      request.headers.get('cf-connecting-ip') ||
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      ''

    const verification = await verifyTurnstile({
      token: turnstileToken,
      ip: ipAddress,
    })
    if (!verification.ok) {
      return NextResponse.json(
        {
          ok: false,
          message: verification.message,
        },
        { status: 400 },
      )
    }

    const delivery = await sendWithResend({
      firstName,
      lastName,
      email,
      phone,
      serviceType,
      vehicleType,
      preferredDay,
      message,
    })

    if (!delivery.ok) {
      return NextResponse.json(
        {
          ok: false,
          message: delivery.message,
        },
        { status: 502 },
      )
    }

    return NextResponse.json({
      ok: true,
      message: delivery.message,
    })
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message:
          'Unexpected server error. Please call or text us directly at (239) 300-1782.',
      },
      { status: 500 },
    )
  }
}

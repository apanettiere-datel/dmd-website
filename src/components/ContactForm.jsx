'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'

import { QuoteCalendar } from '@/components/QuoteCalendar'

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

const initialStatus = { type: 'idle', message: '' }

export function ContactForm({ preferredDay, onPreferredDayChange }) {
  const [status, setStatus] = useState(initialStatus)
  const [turnstileToken, setTurnstileToken] = useState('')
  const [internalPreferredDay, setInternalPreferredDay] = useState('')
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)
  const [draftPreferredDay, setDraftPreferredDay] = useState('')

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY) {
      return
    }

    window.dmdTurnstileSuccess = (token) => {
      setTurnstileToken(token)
    }
    window.dmdTurnstileExpired = () => {
      setTurnstileToken('')
    }
    window.dmdTurnstileError = () => {
      setTurnstileToken('')
    }

    return () => {
      delete window.dmdTurnstileSuccess
      delete window.dmdTurnstileExpired
      delete window.dmdTurnstileError
    }
  }, [])

  useEffect(() => {
    if (preferredDay === undefined) {
      return
    }
    setInternalPreferredDay(preferredDay)
  }, [preferredDay])

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    if (TURNSTILE_SITE_KEY && !turnstileToken) {
      setStatus({
        type: 'error',
        message:
          'Please complete the anti-spam check, then submit your quote request again.',
      })
      return
    }

    setStatus({ type: 'loading', message: 'Sending your quote request...' })

    const preferredDayValue = preferredDay ?? internalPreferredDay

    const payload = {
      firstName: String(formData.get('firstName') || ''),
      lastName: String(formData.get('lastName') || ''),
      email: String(formData.get('email') || ''),
      phone: String(formData.get('phone') || ''),
      serviceType: String(formData.get('serviceType') || ''),
      vehicleType: String(formData.get('vehicleType') || ''),
      preferredDay: preferredDayValue,
      message: String(formData.get('message') || ''),
      website: String(formData.get('website') || ''),
      turnstileToken,
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const result = await response.json()

      if (!response.ok || !result.ok) {
        setStatus({
          type: 'error',
          message:
            result.message ||
            'We could not submit your request right now. Please call or text us at (239) 300-1782.',
        })
        return
      }

      setStatus({
        type: 'success',
        message:
          result.message ||
          'Thanks for reaching out. We received your quote request and will contact you shortly.',
      })
      form.reset()
      setTurnstileToken('')
      if (onPreferredDayChange) {
        onPreferredDayChange('')
      } else {
        setInternalPreferredDay('')
      }
      if (window.turnstile) {
        window.turnstile.reset()
      }
    } catch {
      setStatus({
        type: 'error',
        message:
          'Network error while submitting. Please call or text us at (239) 300-1782.',
      })
    }
  }

  const selectedPreferredDay = preferredDay ?? internalPreferredDay

  function openCalendar() {
    setDraftPreferredDay(selectedPreferredDay || formatYmd(new Date()))
    setIsCalendarOpen(true)
  }

  function applyCalendarSelection() {
    if (onPreferredDayChange) {
      onPreferredDayChange(draftPreferredDay)
    } else {
      setInternalPreferredDay(draftPreferredDay)
    }
    setIsCalendarOpen(false)
  }

  return (
    <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      {TURNSTILE_SITE_KEY ? (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="afterInteractive"
        />
      ) : null}
      <h3 className="font-display text-2xl tracking-tight text-slate-900">
        Request a Free Quote
      </h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        This form is prepared for Cloudflare Turnstile anti-spam checks and
        Resend email delivery.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />
        <input type="hidden" name="preferredDay" value={selectedPreferredDay} />

        <div className="grid gap-4 sm:grid-cols-2">
          <FormField label="First name" name="firstName" autoComplete="given-name" />
          <FormField label="Last name" name="lastName" autoComplete="family-name" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <FormField
            label="Email"
            name="email"
            type="email"
            autoComplete="email"
          />
          <FormField
            label="Phone number"
            name="phone"
            type="tel"
            autoComplete="tel"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-semibold text-slate-700">Service type</span>
            <select
              name="serviceType"
              className="mt-2 block w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-800 outline-none transition focus:border-sky-500"
              required
            >
              <option value="">Select a service</option>
              <option>Car Detailing</option>
              <option>Boat Detailing</option>
              <option>Ceramic Coating</option>
              <option>Custom Quote</option>
            </select>
          </label>
          <FormField
            label="Vehicle type"
            name="vehicleType"
            placeholder="Sedan, SUV, truck, boat..."
          />
        </div>

        <div>
          <span className="text-sm font-semibold text-slate-700">Preferred day</span>
          <button
            type="button"
            onClick={openCalendar}
            className="mt-2 block w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-left text-sm text-slate-800 outline-none transition hover:border-sky-300 focus:border-sky-500"
          >
            {selectedPreferredDay ? formatDisplayDate(selectedPreferredDay) : 'Choose a preferred day'}
          </button>
        </div>

        <label className="block">
          <span className="text-sm font-semibold text-slate-700">Project details</span>
          <textarea
            name="message"
            rows={5}
            required
            placeholder="Tell us what you need, your vehicle condition, and preferred appointment timing."
            className="mt-2 block w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-sky-500"
          />
        </label>

        {TURNSTILE_SITE_KEY ? (
          <div
            className="cf-turnstile"
            data-sitekey={TURNSTILE_SITE_KEY}
            data-theme="light"
            data-callback="dmdTurnstileSuccess"
            data-expired-callback="dmdTurnstileExpired"
            data-error-callback="dmdTurnstileError"
          />
        ) : (
          <p className="rounded-xl border border-sky-200 bg-sky-50 p-3 text-xs text-sky-700">
            Turnstile preview mode: add NEXT_PUBLIC_TURNSTILE_SITE_KEY to enable
            Cloudflare verification.
          </p>
        )}

        <button
          type="submit"
          disabled={status.type === 'loading'}
          className="w-full rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status.type === 'loading' ? 'Sending...' : 'Send Quote Request'}
        </button>

        {status.type !== 'idle' ? (
          <p
            className={`text-sm ${
              status.type === 'success' ? 'text-emerald-600' : 'text-rose-600'
            }`}
          >
            {status.message}
          </p>
        ) : null}
      </form>

      {isCalendarOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4">
          <div className="w-full max-w-2xl rounded-3xl bg-white p-5 shadow-xl ring-1 ring-slate-200 sm:p-6">
            <QuoteCalendar value={draftPreferredDay} onChange={setDraftPreferredDay} />
            <div className="mt-5 flex flex-wrap justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsCalendarOpen(false)}
                className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 hover:border-slate-400"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={applyCalendarSelection}
                className="rounded-full bg-sky-500 px-5 py-2 text-sm font-semibold text-white hover:bg-sky-600"
              >
                Use Selected Date
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

function FormField({
  label,
  name,
  type = 'text',
  autoComplete,
  placeholder,
  required = true,
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-slate-700">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        required={required}
        className="mt-2 block w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-sky-500"
      />
    </label>
  )
}

function formatYmd(date) {
  const year = date.getFullYear()
  const month = `${date.getMonth() + 1}`.padStart(2, '0')
  const day = `${date.getDate()}`.padStart(2, '0')
  return `${year}-${month}-${day}`
}

function formatDisplayDate(value) {
  const [year, month, day] = value.split('-').map(Number)
  if (!year || !month || !day) {
    return value
  }
  return new Date(year, month - 1, day).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

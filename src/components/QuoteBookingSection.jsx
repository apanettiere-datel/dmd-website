'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

import { ContactForm } from '@/components/ContactForm'

const instagramUrl = 'https://www.instagram.com/drews.mobile.detailing/'
const facebookUrl = 'https://www.facebook.com/DrewsMobileDetailing8/'
const serviceAreaMapsUrl =
  'https://www.google.com/maps/search/?api=1&query=Naples+Estero+Lehigh+Acres+Ave+Maria+Fort+Myers'
const serviceAreaEmbedUrl =
  'https://maps.google.com/maps?hl=en&q=Naples%2C%20Florida&t=&z=9&ie=UTF8&iwloc=B&output=embed'

export function QuoteBookingSection() {
  return (
    <>
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200"
        >
          <div className="flex items-center justify-between gap-4 p-5">
            <div>
              <p className="text-sm font-semibold tracking-[0.12em] text-sky-600 uppercase">
                Service Area Map
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Naples, Estero, Lehigh Acres, Ave Maria, and Fort Myers.
              </p>
            </div>
            <Link
              href={serviceAreaMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 hover:border-sky-300 hover:text-sky-700"
            >
              Open in Maps
            </Link>
          </div>
          <iframe
            title="Drew's Mobile Detailing service area map"
            src={serviceAreaEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-72 w-full border-0"
          />
        </motion.article>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center gap-4 rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-200"
        >
          <ActionLink href={instagramUrl} label="Instagram" value="@drews.mobile.detailing" external>
            <InstagramIcon className="h-5 w-5" />
          </ActionLink>
          <ActionLink href="tel:+12393001782" label="Call or Text" value="(239) 300-1782">
            <PhoneIcon className="h-5 w-5" />
          </ActionLink>
          <ActionLink href={facebookUrl} label="Facebook" value="Drew's Mobile Detailing" external>
            <FacebookIcon className="h-5 w-5" />
          </ActionLink>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="mt-12 w-full"
      >
        <ContactForm />
      </motion.div>
    </>
  )
}

function ActionLink({ href, label, value, children, external = false }) {
  return (
    <motion.div whileHover={{ y: -1, scale: 1.01 }} whileTap={{ scale: 0.985 }}>
      <Link
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
        className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 px-4 py-3 text-slate-700 transition hover:border-sky-300 hover:text-sky-700"
      >
        <span className="text-sky-600">{children}</span>
        <span className="text-left">
          <span className="block text-xs font-semibold tracking-[0.12em] text-sky-600 uppercase">
            {label}
          </span>
          <span className="block text-sm font-semibold text-slate-900">{value}</span>
        </span>
      </Link>
    </motion.div>
  )
}

function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M2.25 5.25A3 3 0 0 1 5.25 2.25h2.2a2.25 2.25 0 0 1 2.2 1.76l.55 2.46a2.25 2.25 0 0 1-.64 2.12l-1.2 1.17a15.8 15.8 0 0 0 5.88 5.88l1.17-1.2a2.25 2.25 0 0 1 2.12-.64l2.46.55a2.25 2.25 0 0 1 1.76 2.2v2.2a3 3 0 0 1-3 3H18c-8.7 0-15.75-7.05-15.75-15.75V5.25Z" />
    </svg>
  )
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm8.5 1.75h-8.5A4 4 0 0 0 3.75 7.75v8.5a4 4 0 0 0 4 4h8.5a4 4 0 0 0 4-4v-8.5a4 4 0 0 0-4-4Z" />
      <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5Z" />
      <circle cx="17.25" cy="6.75" r="1.25" />
    </svg>
  )
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2C6.486 2 2 6.486 2 12a10 10 0 0 0 8.438 9.876v-6.99H7.9v-2.89h2.538V9.795c0-2.505 1.492-3.89 3.777-3.89 1.094 0 2.24.195 2.24.195v2.46h-1.262c-1.243 0-1.631.77-1.631 1.56v1.876h2.774l-.443 2.89h-2.33v6.99A10 10 0 0 0 22 12c0-5.514-4.486-10-10-10Z" />
    </svg>
  )
}

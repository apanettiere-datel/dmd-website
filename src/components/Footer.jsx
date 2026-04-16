import Link from 'next/link'

import { Container } from '@/components/Container'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-700">
      <Container>
        <div className="py-14">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="font-display text-2xl font-semibold text-slate-900">
                Drew&apos;s Mobile Detailing
              </p>
              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
                Offering mobile detailing services in Naples, Florida. We provide
                top-quality and professional mobile detailing for your
                convenience.
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <Link
                  href="https://www.instagram.com/drews.mobile.detailing/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 font-semibold text-sky-700 ring-1 ring-slate-200 transition hover:bg-sky-50"
                >
                  <InstagramIcon className="h-4 w-4" />
                  <span>Instagram</span>
                </Link>
                <Link
                  href="https://www.facebook.com/DrewsMobileDetailing8/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 font-semibold text-sky-700 ring-1 ring-slate-200 transition hover:bg-sky-50"
                >
                  <FacebookIcon className="h-4 w-4" />
                  <span>Facebook</span>
                </Link>
              </div>
            </div>
            <nav
              className="flex flex-wrap gap-3 text-sm"
              aria-label="Footer navigation"
            >
              <Link
                href="/#about"
                className="rounded-full px-3 py-1.5 hover:bg-white"
              >
                About
              </Link>
              <Link
                href="/pricing/cars"
                className="rounded-full px-3 py-1.5 hover:bg-white"
              >
                Car Pricing
              </Link>
              <Link
                href="/pricing/boats"
                className="rounded-full px-3 py-1.5 hover:bg-white"
              >
                Boat Pricing
              </Link>
              <Link
                href="/system-x"
                className="rounded-full px-3 py-1.5 hover:bg-white"
              >
                System X
              </Link>
              <Link
                href="/gallery"
                className="rounded-full px-3 py-1.5 hover:bg-white"
              >
                Gallery
              </Link>
              <Link
                href="/quote"
                className="rounded-full px-3 py-1.5 hover:bg-white"
              >
                Free Quote
              </Link>
            </nav>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-slate-200 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            <Link href="tel:+12393001782" className="font-semibold text-slate-900">
              (239)-300-1782
            </Link>{' '}
            <span className="mx-2 text-slate-400">|</span> Naples, FL
          </p>
          <p>&copy; 2026 Drew&apos;s Mobile Detailing. All rights reserved.</p>
        </div>
      </Container>
    </footer>
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

'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

import { Container } from '@/components/Container'

const navItems = [
  { name: 'About', href: '/#about' },
  { name: 'System X', href: '/system-x' },
  { name: 'Gallery', href: '/gallery' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const hoverTransition = { type: 'spring', stiffness: 320, damping: 24, mass: 0.7 }
  const mobileMenuTransition = { duration: 0.25, ease: [0.22, 1, 0.36, 1] }

  function closeMobileMenu() {
    setMobileMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md"
    >
      <Container className="py-2 sm:py-3">
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          <Link
            href="/"
            aria-label="Drew's Mobile Detailing Home"
            className="flex min-w-0 items-center gap-3"
            onClick={closeMobileMenu}
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.985 }}
              transition={hoverTransition}
              className="flex min-w-0 items-center gap-3"
            >
              <Image
                src="/site-media/header-logo.avif"
                alt="Drew's Mobile Detailing logo"
                width={140}
                height={65}
                className="h-16 w-auto shrink-0 object-contain"
                priority
              />
              <span className="hidden font-display text-lg font-semibold text-slate-900 sm:inline">
                Drew&apos;s Mobile Detailing
              </span>
            </motion.div>
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-2 lg:flex xl:gap-3"
          >
            <div className="group relative">
              <motion.div
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.985 }}
                transition={hoverTransition}
              >
                <Link
                  href="/pricing/cars"
                  className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-sky-50 hover:text-slate-900"
                >
                  Pricing
                </Link>
              </motion.div>
              <div className="pointer-events-none invisible absolute left-1/2 top-full mt-2 w-48 -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-2 opacity-0 shadow-lg transition group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100">
                <Link
                  href="/pricing/cars"
                  className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-sky-50 hover:text-slate-900"
                >
                  Car Pricing
                </Link>
                <Link
                  href="/pricing/boats"
                  className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-sky-50 hover:text-slate-900"
                >
                  Boat Pricing
                </Link>
              </div>
            </div>
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.985 }}
                transition={hoverTransition}
              >
                <Link
                  href={item.href}
                  className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-sky-50 hover:text-slate-900"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <motion.div
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.985 }}
              transition={hoverTransition}
            >
              <Link
                href="tel:+12393001782"
                className="hidden rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900 lg:inline"
              >
                (239)-300-1782
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ y: -1, scale: 1.02 }}
              whileTap={{ scale: 0.985 }}
              transition={hoverTransition}
            >
              <Link
                href="/quote"
                className="rounded-full bg-sky-500 px-3 py-2 text-xs font-semibold text-white transition hover:bg-sky-600 sm:px-4 sm:text-sm"
                onClick={closeMobileMenu}
              >
                Free Quote
              </Link>
            </motion.div>
            <button
              type="button"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu-panel"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 text-slate-700 transition hover:border-slate-400 hover:text-slate-900 lg:hidden"
            >
              {mobileMenuOpen ? (
                <CloseIcon className="h-5 w-5" />
              ) : (
                <MenuIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {mobileMenuOpen ? (
            <motion.nav
              id="mobile-menu-panel"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, y: -8, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -8, height: 0 }}
              transition={mobileMenuTransition}
              className="mt-3 overflow-hidden rounded-2xl border border-slate-200 bg-white lg:hidden"
            >
              <div className="grid gap-1 p-2">
                <p className="px-3 py-1 text-xs font-semibold tracking-[0.12em] text-sky-600 uppercase">
                  Pricing
                </p>
                <MobileMenuLink href="/pricing/cars" onClick={closeMobileMenu}>
                  Car Pricing
                </MobileMenuLink>
                <MobileMenuLink href="/pricing/boats" onClick={closeMobileMenu}>
                  Boat Pricing
                </MobileMenuLink>
                <p className="mt-1 px-3 py-1 text-xs font-semibold tracking-[0.12em] text-sky-600 uppercase">
                  Navigation
                </p>
                {navItems.map((item) => (
                  <MobileMenuLink key={item.name} href={item.href} onClick={closeMobileMenu}>
                    {item.name}
                  </MobileMenuLink>
                ))}
                <MobileMenuLink href="tel:+12393001782" onClick={closeMobileMenu}>
                  Call (239)-300-1782
                </MobileMenuLink>
              </div>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </Container>
    </motion.header>
  )
}

function MobileMenuLink({ href, onClick, children }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-sky-50 hover:text-slate-900"
    >
      {children}
    </Link>
  )
}

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <path d="M3 5h14M3 10h14M3 15h14" strokeLinecap="round" />
    </svg>
  )
}

function CloseIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <path d="M5 5l10 10M15 5 5 15" strokeLinecap="round" />
    </svg>
  )
}

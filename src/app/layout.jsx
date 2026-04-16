import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: "%s | Drew's Mobile Detailing Naples",
    default:
      "Drew's Mobile Detailing | Mobile Car & Boat Detailing in Naples, FL",
  },
  description:
    "Licensed and insured mobile detailing in Naples, Florida. Professional car detailing, boat detailing, interior restoration, and System X ceramic coating services at your home, office, or marina.",
  keywords: [
    'mobile detailing Naples FL',
    'car detailing Naples',
    'boat detailing Naples',
    'ceramic coating Naples Florida',
    "Drew's Mobile Detailing",
    'interior detailing Naples',
  ],
  openGraph: {
    title:
      "Drew's Mobile Detailing | Mobile Car & Boat Detailing in Naples, FL",
    description:
      'Professional mobile detailing services in Naples, FL for cars, trucks, SUVs, and boats. Washes, full details, and ceramic protection available.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Drew's Mobile Detailing Naples",
    description:
      'Mobile detailing in Naples, FL. Car and boat detailing with ceramic protection options.',
  },
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}

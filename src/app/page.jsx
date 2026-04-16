import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { BrandLogoCloud } from '@/components/BrandLogoCloud'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { AnimatedSection, FadeIn } from '@/components/Motion'
import { carCorePackages } from '@/lib/pricingData'

export const metadata = {
  title: 'Mobile Car and Boat Detailing in Naples, FL',
  description:
    "Drew's Mobile Detailing provides licensed and insured mobile detailing in Naples, Florida for cars and boats. Book washes, full details, and System X ceramic protection.",
  alternates: {
    canonical: '/',
  },
}

const googleReviewsUrl =
  'https://www.google.com/search?q=Drew%27s+Mobile+Detailing+Reviews'
const instagramUrl = 'https://www.instagram.com/drews.mobile.detailing/'
const facebookUrl = 'https://www.facebook.com/DrewsMobileDetailing8/'

const testimonials = [
  {
    quote:
      'Fast scheduling and strong communication. My truck looked showroom ready after one visit.',
    source: 'Google Review',
  },
  {
    quote:
      'Interior came out spotless and fresh. Professional service with great attention to detail.',
    source: 'Google Review',
  },
  {
    quote:
      'Boat finish looked glossy and protected. Reliable team and great results.',
    source: 'Google Review',
  },
]

const faqs = [
  {
    question: 'Do you bring your own water and equipment?',
    answer:
      "Yes. Drew's Mobile Detailing is self-efficient with its own water and professional equipment. We only need access to a common electrical outlet within 200 feet.",
  },
  {
    question: 'What areas do you service?',
    answer:
      'We service 30+ miles from Naples, including Naples, Bonita, Marco Island, Estero, Ave Maria, Fort Myers, and Lehigh Acres.',
  },
  {
    question: 'Are you licensed and insured?',
    answer:
      "Yes. Drew's Mobile Detailing is fully licensed and insured for your confidence and protection.",
  },
  {
    question: 'How do I get an exact price?',
    answer:
      'Use the quote page or call or text us at (239) 300-1782. We confirm final recommendations and pricing on arrival based on vehicle condition and size.',
  },
]

const vehiclesWorkedOnLogos = [
  { src: '/site-media/brands/logo1.avif', alt: 'Vehicle brand logo 1' },
  { src: '/site-media/brands/logo2.avif', alt: 'Vehicle brand logo 2' },
  { src: '/site-media/brands/logo3.avif', alt: 'Vehicle brand logo 3' },
  { src: '/site-media/brands/logo4.avif', alt: 'Vehicle brand logo 4' },
  { src: '/site-media/brands/logo5.avif', alt: 'Vehicle brand logo 5' },
  { src: '/site-media/brands/logo6.avif', alt: 'Vehicle brand logo 6' },
]

const packageImages = {
  'tier-wash-wax': {
    src: '/site-media/cars-pricing-01.png',
    alt: 'Exterior wash and wax detailing package',
    label: 'Exterior',
  },
  'tier-full-interior': {
    src: '/site-media/cars-pricing-03.png',
    alt: 'Full interior detailing package',
    label: 'Full Interior',
  },
  'tier-full-detail': {
    src: '/site-media/ferrari.jpg',
    alt: 'Full interior and exterior detail package',
    label: 'Interior + Exterior',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutoDetailing',
  name: "Drew's Mobile Detailing",
  areaServed: [
    'Naples, FL',
    'Bonita Springs, FL',
    'Marco Island, FL',
    'Estero, FL',
    'Ave Maria, FL',
    'Fort Myers, FL',
    'Lehigh Acres, FL',
  ],
  telephone: '+1-239-300-1782',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Naples',
    addressRegion: 'FL',
    addressCountry: 'US',
  },
  sameAs: [
    'https://www.instagram.com/drews.mobile.detailing/',
    'https://www.facebook.com/DrewsMobileDetailing8/',
  ],
  priceRange: '$$',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-white text-slate-800">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <AnimatedSection className="relative isolate overflow-hidden py-24 sm:py-32">
          <Image
            src="/site-media/home-hero.png"
            alt="Drew's Mobile Detailing hero background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950/75 via-slate-900/55 to-slate-900/45" />
          <Container className="relative z-10">
            <FadeIn className="max-w-4xl">
              <p className="text-sm font-semibold tracking-[0.16em] text-sky-300 uppercase">
                Mobile Detailing in Naples, Florida
              </p>
              <h1 className="mt-5 font-display text-5xl tracking-tight text-white sm:text-7xl">
                Premium car and boat detailing from the comfort of your home
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-100">
                Drew&apos;s Mobile Detailing delivers licensed and insured
                detailing services at your home, office, or marina. From
                maintenance washes to full detail restoration and ceramic
                protection, we help keep your vehicle looking its best year
                round.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="tel:+12393001782"
                  className="rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
                >
                  Call or Text (239) 300-1782
                </Link>
                <Link
                  href="/quote"
                  className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Get Free Quote
                </Link>
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
                <Link
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/35 px-4 py-2 font-semibold text-white/95 hover:bg-white/10"
                >
                  <InstagramIcon className="h-4 w-4" />
                  Instagram
                </Link>
                <Link
                  href={facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/35 px-4 py-2 font-semibold text-white/95 hover:bg-white/10"
                >
                  <FacebookIcon className="h-4 w-4" />
                  Facebook
                </Link>
              </div>
            </FadeIn>
          </Container>
        </AnimatedSection>

        <AnimatedSection id="about" className="py-20 sm:py-24">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <Image
                  src="/site-media/about-section.png"
                  alt="Drew from Drew's Mobile Detailing"
                  width={1200}
                  height={1500}
                  className="mx-auto h-full max-h-[560px] w-full rounded-3xl object-contain"
                />
              </div>

              <div>
                <h2 className="font-display text-4xl tracking-tight text-slate-900 sm:text-5xl">
                  About Drew&apos;s Mobile Detailing
                </h2>
                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Here at Drew&apos;s Mobile Detailing, we offer the best services
                  to make your vehicle look new again. A company you can trust
                  that is fully insured. We do everything from basic washes to
                  ceramic coatings. If you want your car or boat done, we are
                  the company for you.
                </p>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  If you want the best customer care and services, call or text
                  today to set up an appointment at (239) 300-1782.
                </p>
              </div>
            </div>

            <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
              <InfoCard
                title="We Come To You"
                body="Drew's Mobile Detailing is self-efficient with our own water making it easy to go to any location. All we need is a common electrical outlet within 200 feet."
              />
              <InfoCard
                title="Licensed & Insured"
                body="For your confidence and your protection, Drew's Mobile Detailing is fully licensed and insured."
              />
            </div>

            <div className="mt-14 rounded-3xl border border-slate-200 bg-white px-6 py-10 sm:px-10">
              <div className="mx-auto max-w-2xl text-center lg:max-w-none">
                <h3 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
                  Brands We <span className="text-sky-500">Detail</span>
                </h3>
                <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600">
                  Our versatile services cater to a wide range of vehicles, ensuring
                  that we meet the needs of all our clients. Whether you own a
                  vintage muscle car, a sleek sports car, or a family SUV, we have
                  the expertise and equipment to provide top-quality detailing services.
                </p>
                <BrandLogoCloud logos={vehiclesWorkedOnLogos} />
              </div>
            </div>
          </Container>
        </AnimatedSection>

        <AnimatedSection id="cars" className="bg-slate-50 py-20 sm:py-24">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2 className="font-display text-4xl tracking-tight text-slate-900 sm:text-5xl">
                  Core Car Packages
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                  Home page shows the most requested packages. Full package
                  comparisons and every line item are on dedicated pricing pages.
                </p>
              </div>
              <div className="flex gap-3">
                <Link
                  href="/pricing/cars"
                  className="rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-600"
                >
                  Full Car Pricing
                </Link>
                <Link
                  href="/pricing/boats"
                  className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-slate-400"
                >
                  Boat Pricing
                </Link>
              </div>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {carCorePackages.map((tier) => {
                const packageImage = packageImages[tier.id]
                return (
                  <article
                    key={tier.id}
                    className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200"
                  >
                    <div className="relative">
                      <Image
                        src={packageImage.src}
                        alt={packageImage.alt}
                        width={1600}
                        height={1200}
                        className="h-52 w-full object-cover"
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold tracking-[0.1em] text-slate-700 uppercase">
                        {packageImage.label}
                      </span>
                    </div>
                    <div className="p-7">
                      <h3 className="text-xl font-semibold text-slate-900">{tier.name}</h3>
                      <p className="mt-3 text-4xl font-semibold text-sky-600">{tier.price}</p>
                      <p className="mt-4 text-sm leading-6 text-slate-600">{tier.description}</p>
                      <ul className="mt-5 space-y-2 text-sm text-slate-600">
                        {tier.highlights.map((item) => (
                          <li key={item}>- {item}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                )
              })}
            </div>
          </Container>
        </AnimatedSection>

        <AnimatedSection id="boats" className="py-20 sm:py-24">
          <Container>
            <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-sm font-semibold tracking-[0.14em] text-sky-500 uppercase">
                  Marine Services
                </p>
                <h2 className="mt-3 font-display text-4xl tracking-tight text-slate-900 sm:text-5xl">
                  Boat detailing and System X protection
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  We detail from waterline up and help protect marine surfaces
                  against UV, salt spray, and weather exposure. Visit the boat
                  pricing page for complete package breakdowns.
                </p>
                <Link
                  href="/pricing/boats"
                  className="mt-6 inline-flex rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-600"
                >
                  View Boat Pricing
                </Link>
              </div>
              <Image
                src="/site-media/systemx-marine-hero.png"
                alt="Boat detailing service in Naples Florida"
                width={1600}
                height={1200}
                className="aspect-[4/3] w-full rounded-3xl object-contain"
              />
            </div>
          </Container>
        </AnimatedSection>

        <AnimatedSection className="bg-slate-50 py-20 sm:py-24">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-display text-4xl tracking-tight text-slate-900 sm:text-5xl">
                Customer Reviews
              </h2>
              <Link
                href={googleReviewsUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-slate-400"
              >
                View Google Reviews
              </Link>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {testimonials.map((item) => (
                <article
                  key={item.quote}
                  className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
                >
                  <p className="text-sky-500">★★★★★</p>
                  <p className="mt-4 text-base leading-7 text-slate-700">&ldquo;{item.quote}&rdquo;</p>
                  <p className="mt-4 text-sm font-medium text-slate-500">{item.source}</p>
                </article>
              ))}
            </div>
          </Container>
        </AnimatedSection>

        <AnimatedSection className="py-20 sm:py-24">
          <Container>
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-5">
                <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  Frequently Asked Questions
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  Need a custom answer? Call or text{' '}
                  <Link href="tel:+12393001782" className="font-semibold text-sky-600">
                    (239) 300-1782
                  </Link>
                  .
                </p>
              </div>
              <div className="mt-10 lg:col-span-7 lg:mt-0">
                <dl className="space-y-8">
                  {faqs.map((faq) => (
                    <div key={faq.question}>
                      <dt className="text-base font-semibold text-slate-900">{faq.question}</dt>
                      <dd className="mt-2 text-base leading-7 text-slate-600">{faq.answer}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </Container>
        </AnimatedSection>

        <AnimatedSection className="pb-20 sm:pb-24">
          <Container>
            <div className="relative isolate overflow-hidden rounded-4xl border border-sky-100 bg-linear-to-br from-sky-50 via-white to-cyan-50 px-8 py-14 sm:px-12">
              <Image
                src="/site-media/ferrari.jpg"
                alt="Detailed sports car"
                fill
                className="object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-white/75" />
              <div className="relative z-10 text-center">
                <h2 className="font-display text-4xl tracking-tight text-slate-900 sm:text-5xl">
                  Ready to book your detail?
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-700">
                  Visit the quote page to choose your service, preferred day, and
                  send your request in a few steps.
                </p>
                <Link
                  href="/quote"
                  className="mt-8 inline-flex rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-600"
                >
                  Go to Free Quote Page
                </Link>
              </div>
            </div>
          </Container>
        </AnimatedSection>
      </main>
      <Footer />
    </>
  )
}

function InfoCard({ title, body }) {
  return (
    <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
    </article>
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

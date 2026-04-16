import Link from 'next/link'

import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { AnimatedSection, FadeIn } from '@/components/Motion'

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="bg-white text-slate-800">
        <AnimatedSection className="bg-slate-50 py-24 sm:py-32">
          <Container>
            <FadeIn className="mx-auto max-w-3xl rounded-4xl bg-white px-8 py-14 text-center shadow-sm ring-1 ring-slate-200 sm:px-12">
              <p className="text-sm font-semibold tracking-[0.14em] text-sky-500 uppercase">
                404
              </p>
              <h1 className="mt-4 font-display text-4xl tracking-tight text-slate-900 sm:text-5xl">
                Page not found
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                The page you are looking for is not available. Use the links
                below to get back to the main site or request a quote.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href="/"
                  className="rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-600"
                >
                  Back to Home
                </Link>
                <Link
                  href="/quote"
                  className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:border-slate-400"
                >
                  Request a Quote
                </Link>
              </div>
            </FadeIn>
          </Container>
        </AnimatedSection>
      </main>
      <Footer />
    </>
  )
}

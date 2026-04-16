import Image from 'next/image'

import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { AnimatedSection, FadeIn } from '@/components/Motion'
import { galleryItems } from '@/data/gallery'

export const metadata = {
  title: 'Gallery',
  description:
    'Recent car and boat detailing results from Drew\'s Mobile Detailing in Naples, FL.',
}

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="bg-white text-slate-800">
        <AnimatedSection className="bg-slate-50 py-20 sm:py-24">
          <Container>
            <FadeIn>
              <p className="text-sm font-semibold tracking-[0.14em] text-sky-500 uppercase">
                Gallery
              </p>
              <h1 className="mt-3 font-display text-5xl tracking-tight text-slate-900 sm:text-6xl">
                Recent detailing work
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                Car and marine projects completed across Naples and surrounding
                areas.
              </p>
            </FadeIn>
          </Container>
        </AnimatedSection>

        <AnimatedSection className="py-20 sm:py-24">
          <Container>
            {galleryItems.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
                <p className="text-lg font-semibold text-slate-900">Gallery update in progress</p>
                <p className="mt-3 text-slate-600">
                  New detailing photos will be published here soon.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {galleryItems.map((item) => (
                  <article
                    key={item.id}
                    className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200"
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={item.width ?? 1600}
                      height={item.height ?? 1200}
                      className="aspect-[4/3] w-full object-cover"
                    />
                    <div className="p-4">
                      <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                      <p className="mt-1 text-xs text-slate-500">
                        {item.category} • {item.location}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </Container>
        </AnimatedSection>
      </main>
      <Footer />
    </>
  )
}

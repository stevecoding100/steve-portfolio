import { type Metadata } from 'next'
import Image from 'next/image'
import { Container } from '@/components/Container'

export const metadata: Metadata = {
  title: 'Photography',
  description:
    'I’m Steve De La Rosa - Software Engineer and Photographer based in Florida, I build thoughtful, high-performance web experiences that blend design, technology, and creativity.',
}

const photos = [
  { src: '/pictures/photo1.jpg', alt: 'Photo 1' },
  { src: '/pictures/photo2.jpg', alt: 'Photo 2' },
  { src: '/pictures/photo3.jpg', alt: 'Photo 3' },
  { src: '/pictures/photo4.jpg', alt: 'Photo 4' },
  { src: '/pictures/photo5.jpg', alt: 'Photo 5' },
  { src: '/pictures/photo6.jpg', alt: 'Photo 6' },
  { src: '/pictures/photo7.jpg', alt: 'Photo 7' },
  { src: '/pictures/photo8.jpg', alt: 'Photo 8' },
  { src: '/pictures/photo9.jpg', alt: 'Photo 9' },
]

export default function Photography() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20"></div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Photography
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            A collection of my photography work — capturing creativity through
            the lens, from landscapes to candid moments.
          </p>
        </div>
      </div>
      {/* Photo Grid */}
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={500}
              height={500}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </Container>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const galleryImages = [
  { src: "/images/store-interior.jpg", alt: "Inside the Balika Vadhu clothing store", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/fabric-closeup.jpg", alt: "Close-up of premium embroidered fabric", span: "" },
  { src: "/images/product-display.jpg", alt: "Elegant product display at the store", span: "" },
  { src: "/images/gallery-1.jpg", alt: "Colorful sarees arranged on shelves", span: "" },
  { src: "/images/gallery-2.jpg", alt: "Detailed embroidery on festive lehenga", span: "" },
  { src: "/images/gallery-3.jpg", alt: "Beautiful dupattas and scarves on display", span: "md:col-span-2" },
]

export default function Gallery() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    itemRefs.current.forEach((ref, index) => {
      if (!ref) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, index]))
          }
        },
        { threshold: 0.1 }
      )
      observer.observe(ref)
      observers.push(observer)
    })

    return () => observers.forEach((obs) => obs.disconnect())
  }, [])

  return (
    <section id="gallery" className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-sm font-medium tracking-[0.2em] text-accent">
            GALLERY
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">A Glimpse Inside Our Store</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Explore the warmth, fabrics, and craftsmanship that define the Balika Vadhu experience.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              ref={(el) => { itemRefs.current[index] = el }}
              className={`group relative overflow-hidden rounded-xl ${image.span} ${
                visibleItems.has(index)
                  ? "scale-100 opacity-100"
                  : "scale-95 opacity-0"
              } transition-all duration-700`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`relative ${index === 0 ? "aspect-square" : "aspect-[4/3]"} overflow-hidden`}>
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/0 transition-all duration-500 group-hover:bg-primary/20" />
                <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-foreground/70 to-transparent p-4 transition-transform duration-500 group-hover:translate-y-0">
                  <p className="text-sm text-background">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const collections = [
  {
    title: "Ethnic Wear",
    description: "Timeless sarees, lehengas, and suits woven with tradition and grace.",
    image: "/images/ethnic-wear.jpg",
  },
  {
    title: "Formal & Office Wear",
    description: "Sophisticated styles for the modern professional woman.",
    image: "/images/formal-wear.jpg",
  },
  {
    title: "Premium Fabric Pants",
    description: "Comfortable, durable, and elegantly designed for everyday style.",
    image: "/images/fabric-pants.jpg",
  },
  {
    title: "Festive Collections",
    description: "Celebrate every occasion with our stunning festive and wedding wear.",
    image: "/images/festive-collection.jpg",
  },
]

export default function Collections() {
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
        { threshold: 0.15 }
      )
      observer.observe(ref)
      observers.push(observer)
    })

    return () => observers.forEach((obs) => obs.disconnect())
  }, [])

  return (
    <section id="collections" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-sm font-medium tracking-[0.2em] text-accent">
            OUR COLLECTIONS
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">Curated for Elegance</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Explore our carefully curated collections, each reflecting our dedication to quality fabrics and thoughtful design.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {collections.map((collection, index) => (
            <div
              key={collection.title}
              ref={(el) => { itemRefs.current[index] = el }}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-700 ${
                visibleItems.has(index)
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent transition-opacity duration-500 group-hover:from-foreground/90" />
                
                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <h3 className="font-serif text-2xl font-bold text-background transition-transform duration-500 group-hover:-translate-y-1">
                    {collection.title}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-background/80 opacity-0 transition-all duration-500 group-hover:opacity-100">
                    {collection.description}
                  </p>
                  <div className="mt-4 h-0.5 w-0 bg-accent transition-all duration-700 group-hover:w-20" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

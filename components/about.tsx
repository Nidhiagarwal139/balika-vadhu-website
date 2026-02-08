"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )
    observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Image Side */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/images/about.jpg"
                alt="Warm and welcoming interior of Balika Vadhu clothing store in Jaipur"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-2xl border-2 border-primary/20" />
          </div>

          {/* Content Side */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            <span className="text-sm font-medium tracking-[0.2em] text-accent">
              OUR STORY
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              <span className="text-balance">Where Tradition Meets Elegance</span>
            </h2>
            <div className="mt-8 space-y-5">
              <p className="text-base leading-relaxed text-muted-foreground">
                Nestled in the heart of Jaipur&apos;s historic Pink City, Balika Vadhu has been
                a trusted name in women&apos;s fashion. Our store in Tripolia Bazar is more than
                just a clothing shop &mdash; it&apos;s a destination where quality meets craftsmanship.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                We believe every woman deserves access to beautifully crafted clothing that
                reflects her personality and style. Our collection is handpicked to offer
                the finest fabrics, elegant designs, and comfortable fits that stand the
                test of time.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                From daily wear essentials to stunning festive outfits, we are committed to
                offering fair pricing, warm hospitality, and a shopping experience that
                keeps our customers coming back.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-8">
              <div className="group cursor-default">
                <div className="font-serif text-3xl font-bold text-primary transition-transform duration-300 group-hover:scale-110">
                  4.0
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Google Rating
                </div>
              </div>
              <div className="group cursor-default">
                <div className="font-serif text-3xl font-bold text-primary transition-transform duration-300 group-hover:scale-110">
                  16+
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Happy Reviews
                </div>
              </div>
              <div className="group cursor-default">
                <div className="font-serif text-3xl font-bold text-primary transition-transform duration-300 group-hover:scale-110">
                  9:30
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  PM Closing
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

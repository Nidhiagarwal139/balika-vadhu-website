"use client"

import { useEffect, useRef, useState } from "react"
import { Star, Quote } from "lucide-react"

const reviews = [
  {
    text: "Always serve quality. Best place to visit!",
    rating: 5,
    initial: "R",
  },
  {
    text: "They have the best collection and the service is great.",
    rating: 5,
    initial: "A",
  },
  {
    text: "Nice collection, fabulous fabrics and amazing behaviour from the staff and owner.",
    rating: 5,
    initial: "S",
  },
]

export default function Reviews() {
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
    <section id="reviews" ref={sectionRef} className="bg-primary py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-sm font-medium tracking-[0.2em] text-accent">
            CUSTOMER LOVE
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">What Our Customers Say</span>
          </h2>
          <div className="mx-auto mt-4 flex items-center justify-center gap-1">
            {[1, 2, 3, 4].map((i) => (
              <Star key={i} className="h-5 w-5 fill-accent text-accent" />
            ))}
            <Star className="h-5 w-5 fill-accent/40 text-accent" />
            <span className="ml-2 text-sm text-primary-foreground/80">4.0 on Google</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`group rounded-2xl bg-primary-foreground/10 p-8 backdrop-blur-sm transition-all duration-700 hover:-translate-y-2 hover:bg-primary-foreground/15 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Quote className="mb-4 h-8 w-8 text-accent/60" />
              <p className="mb-6 font-serif text-lg italic leading-relaxed text-primary-foreground">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-foreground">
                  {review.initial}
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Supporting line */}
        <div className="mt-12 text-center">
          <p className="mb-4 text-sm italic text-primary-foreground/70">
            Customer feedback helps us continually refine our collections and service.
          </p>
          <a
            href="https://google.com/maps/place/Balika+Vadhu/@26.9328861,75.8179724,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex text-sm font-medium text-accent underline-offset-4 transition-colors duration-300 hover:text-accent/80 hover:underline"
          >
            Read Reviews on Google
          </a>
        </div>
      </div>
    </section>
  )
}

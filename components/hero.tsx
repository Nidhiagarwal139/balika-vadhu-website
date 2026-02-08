"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { MapPin, Star, Clock } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Balika Vadhu store showcasing elegant women's ethnic wear"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl py-32">
          {/* Trust Badges */}
          <div
            className={`mb-8 flex flex-wrap items-center gap-4 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <div className="flex items-center gap-1.5 rounded-full bg-background/20 px-4 py-2 backdrop-blur-sm">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span className="text-sm font-medium text-background">4.0 Google Rating</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-background/20 px-4 py-2 backdrop-blur-sm">
              <MapPin className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-background">Pink City, Jaipur</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-background/20 px-4 py-2 backdrop-blur-sm">
              <Clock className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-background">Open till 9:30 PM</span>
            </div>
          </div>

          {/* Headline */}
          <h1
            className={`font-serif text-4xl font-bold leading-tight tracking-tight text-background sm:text-5xl md:text-6xl lg:text-7xl ${
              isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"
            }`}
          >
            <span className="text-balance">Timeless Style for the Modern Woman</span>
          </h1>

          {/* Subheadline */}
          <p
            className={`mt-6 max-w-xl text-lg leading-relaxed text-background/85 ${
              isVisible ? "animate-fade-in-up animation-delay-400" : "opacity-0"
            }`}
          >
            A trusted women&apos;s clothing store in Jaipur offering carefully
            curated collections with premium fabrics and elegant designs.
          </p>

          {/* Actions */}
          <div
            className={`mt-10 flex flex-wrap items-center gap-4 ${
              isVisible ? "animate-fade-in-up animation-delay-600" : "opacity-0"
            }`}
          >
            <a
              href="https://google.com/maps/place/Balika+Vadhu/@26.9328861,75.8179724,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <MapPin className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
              Get Directions
            </a>
            <a
              href="#collections"
              className="rounded-full border-2 border-background/40 px-8 py-4 text-base font-semibold text-background backdrop-blur-sm transition-all duration-300 hover:border-background hover:bg-background/10"
            >
              View Collections
            </a>
          </div>

          {/* Decorative line */}
          <div
            className={`mt-16 flex items-center gap-4 ${
              isVisible ? "animate-fade-in-up animation-delay-800" : "opacity-0"
            }`}
          >
            <div className="h-px w-16 bg-accent" />
            <span className="text-sm tracking-[0.2em] text-background/60">
              TRIPOLIA BAZAR, PINK CITY
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest text-background/50">SCROLL</span>
          <div className="h-12 w-px animate-pulse bg-background/30" />
        </div>
      </div>
    </section>
  )
}

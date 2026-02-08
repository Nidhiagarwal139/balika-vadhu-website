"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, Phone, Clock, Navigation } from "lucide-react"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.15 }
    )
    observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-sm font-medium tracking-[0.2em] text-accent">
            VISIT US
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">Find Us in Pink City</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            We&apos;d love to welcome you to our store. Come explore our collection in person.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Map */}
          <div
            className={`overflow-hidden rounded-2xl shadow-lg transition-all duration-700 ${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.5!2d75.8179724!3d26.9328861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU1JzU4LjQiTiA3NcKwNDknMDQuNyJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Balika Vadhu store location on Google Maps"
            />
          </div>

          {/* Contact Info */}
          <div
            className={`flex flex-col justify-center transition-all duration-700 ${
              isVisible ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            <div className="space-y-8">
              {/* Address */}
              <div className="group flex gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">Store Address</h3>
                  <p className="mt-1 leading-relaxed text-muted-foreground">
                    Shop No. 5, Near PNB Bank,<br />
                    Brahmpuri Khurra, Rajhans Colony,<br />
                    Tripolia Bazar, Pink City,<br />
                    Jaipur, Rajasthan &ndash; 302001
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="group flex gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">Phone</h3>
                  <p className="mt-1 text-lg text-muted-foreground">8674949733</p>
                </div>
              </div>

              {/* Timings */}
              <div className="group flex gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">Store Hours</h3>
                  <p className="mt-1 text-muted-foreground">
                    Open Daily &middot; Closes at 9:30 PM
                  </p>
                </div>
              </div>

              {/* Directions Link */}
              <a
                href="https://google.com/maps/place/Balika+Vadhu/@26.9328861,75.8179724,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <Navigation className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                Get Directions on Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

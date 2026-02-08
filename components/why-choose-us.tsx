"use client"

import { useEffect, useRef, useState } from "react"
import { Gem, Shirt, CalendarHeart, Users, MapPinned, Truck, ShieldCheck } from "lucide-react"

const features = [
  {
    icon: Gem,
    title: "Premium Fabrics",
    description: "Handpicked collections crafted from the finest fabrics for lasting comfort and quality.",
  },
  {
    icon: Shirt,
    title: "Elegant Designs",
    description: "Beautiful ethnic and formal wear curated with modern elegance and timeless grace.",
  },
  {
    icon: CalendarHeart,
    title: "Every Occasion",
    description: "From daily comfort to festive grandeur, find styles for every moment that matters.",
  },
  {
    icon: Users,
    title: "Friendly Staff",
    description: "Warm and supportive team dedicated to helping you find your perfect outfit.",
  },
  {
    icon: MapPinned,
    title: "Heart of Pink City",
    description: "Conveniently located in Jaipur's iconic Tripolia Bazar, easily accessible to all.",
  },
  {
    icon: Truck,
    title: "Pickup & Delivery",
    description: "Enjoy in-store pickup and delivery services for a seamless shopping experience.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Locally",
    description: "Earning the confidence of Jaipur's women through consistent quality and care.",
  },
]

export default function WhyChooseUs() {
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
        { threshold: 0.2 }
      )
      observer.observe(ref)
      observers.push(observer)
    })

    return () => observers.forEach((obs) => obs.disconnect())
  }, [])

  return (
    <section id="why-us" className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-sm font-medium tracking-[0.2em] text-accent">
            WHY CHOOSE US
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">Crafted with Care, Worn with Confidence</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Every piece in our collection reflects our commitment to quality, elegance, and the women who wear them.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                ref={(el) => { itemRefs.current[index] = el }}
                className={`group cursor-default rounded-2xl bg-background p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                  visibleItems.has(index)
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-3 transition-colors duration-300 group-hover:bg-primary/20">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-serif text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

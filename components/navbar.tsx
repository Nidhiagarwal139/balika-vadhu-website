"use client"

import { useState, useEffect } from "react"
import { Menu, X, MapPin, Phone } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Why Us", href: "#why-us" },
  { label: "Collections", href: "#collections" },
  { label: "Reviews", href: "#reviews" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="group flex flex-col">
            <span className="font-serif text-2xl font-bold tracking-wide text-primary transition-colors duration-300 group-hover:text-accent">
              Balika Vadhu
            </span>
            <span className="text-xs tracking-[0.3em] text-muted-foreground">
              WOMEN&apos;S CLOTHING
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative text-sm font-medium tracking-wide text-foreground/80 transition-colors duration-300 hover:text-primary"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="tel:8674949733"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
            >
              <Phone className="h-4 w-4" />
              <span>8674949733</span>
            </a>
            <a
              href="https://google.com/maps/place/Balika+Vadhu/@26.9328861,75.8179724,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <MapPin className="h-4 w-4" />
              Get Directions
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-foreground transition-colors hover:bg-secondary lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          className={`overflow-hidden transition-all duration-500 lg:hidden ${
            isOpen ? "mt-4 max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-1 rounded-2xl bg-card p-4 shadow-xl">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-foreground/80 transition-all duration-300 hover:bg-secondary hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <hr className="my-2 border-border" />
            <a
              href="tel:8674949733"
              className="flex items-center gap-2 rounded-lg px-4 py-3 text-sm text-muted-foreground"
            >
              <Phone className="h-4 w-4" />
              8674949733
            </a>
            <a
              href="https://google.com/maps/place/Balika+Vadhu/@26.9328861,75.8179724,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
            >
              <MapPin className="h-4 w-4" />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

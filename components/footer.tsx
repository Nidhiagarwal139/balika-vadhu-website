import { MapPin, Phone, Star } from "lucide-react"

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Collections", href: "#collections" },
  { label: "About Us", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
]

export default function Footer() {
  return (
    <footer className="bg-foreground py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-background">
              Balika Vadhu
            </h3>
            <p className="mb-4 text-xs tracking-[0.25em] text-background/50">
              WOMEN&apos;S CLOTHING
            </p>
            <p className="max-w-xs text-sm leading-relaxed text-background/70">
              Elegance woven into every thread. A trusted women&apos;s clothing
              destination in Jaipur&apos;s Pink City, offering curated collections
              with premium fabrics and timeless designs.
            </p>
            <div className="mt-4 flex items-center gap-1">
              {[1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
              <Star className="h-4 w-4 fill-accent/40 text-accent" />
              <span className="ml-2 text-xs text-background/60">4.0 Google Rating</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-sm font-semibold tracking-[0.15em] text-background">
              QUICK LINKS
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/60 transition-colors duration-300 hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-6 text-sm font-semibold tracking-[0.15em] text-background">
              CONTACT
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <p className="text-sm leading-relaxed text-background/60">
                  Shop No. 5, Near PNB Bank,<br />
                  Brahmpuri Khurra, Tripolia Bazar,<br />
                  Jaipur, Rajasthan &ndash; 302001
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-sm text-background/60">8674949733</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-background/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-background/40">
              &copy; {new Date().getFullYear()} Balika Vadhu. All rights reserved.
            </p>
            <p className="text-xs italic text-background/40">
              Elegance in Every Thread, Trust in Every Stitch.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

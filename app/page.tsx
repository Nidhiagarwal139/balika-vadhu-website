import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import WhyChooseUs from "@/components/why-choose-us"
import Collections from "@/components/collections"
import Reviews from "@/components/reviews"
import About from "@/components/about"
import Gallery from "@/components/gallery"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Collections />
      <Reviews />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}

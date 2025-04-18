import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Categories from "@/components/categories"
import Sponsors from "@/components/sponsors"
import HowItWorks from "@/components/how-it-works"
import PlatformFeatures from "@/components/platform-features"
import CallToAction from "@/components/call-to-action"
import FeaturedProfessionalsFiltered from "@/components/featured-professionals-filtered"
import Testimonials from "@/components/testimonials"
import Stats from "@/components/stats"
import Pricing from "@/components/pricing"
import FAQ from "@/components/faq"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Sponsors />
        <Categories />
        <HowItWorks />
        <PlatformFeatures />
        <CallToAction />
        <FeaturedProfessionalsFiltered />
        <Testimonials />
        <Stats />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

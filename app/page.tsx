import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Philosophy } from "@/components/philosophy"
import { Process } from "@/components/process"
import { Work } from "@/components/work"
import { Testimonials } from "@/components/testimonials"
import { Results } from "@/components/results"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { FloatingCTA } from "@/components/floating-cta"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Philosophy />
      <Process />
      <Work />
      <Testimonials />
      <Results />
      <About />
      <Contact />
      <FloatingCTA />
    </main>
  )
}

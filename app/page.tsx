import { TopBar } from "@/components/landing/top-bar"
import { Hero } from "@/components/landing/hero"
import { CapabilityStrip } from "@/components/landing/capability-strip"
import { Services } from "@/components/landing/services"
import { Coverage } from "@/components/landing/coverage"
import { HowItWorks } from "@/components/landing/how-it-works"
import { Faq } from "@/components/landing/faq"
import { FinalCta } from "@/components/landing/final-cta"
import { Footer } from "@/components/landing/footer"

export default function LandingPage() {
  return (
    <div className="min-h-dvh">
      <TopBar />
      <main>
        <Hero />
        <CapabilityStrip />
        <Services />
        <Coverage />
        <HowItWorks />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}

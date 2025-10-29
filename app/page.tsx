import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { TrustSection } from "@/components/trust-section"
import { PainPointsSection } from "@/components/pain-points-section"
import { SolutionSection } from "@/components/solution-section"
import { TestimonialBlock } from "@/components/testimonial-block"
import { ProcessSection } from "@/components/process-section"
import { CaseStudySection } from "@/components/case-study-section"
import { TestimonialGrid } from "@/components/testimonial-grid"
import { FounderSection } from "@/components/founder-section"
import { CalendlySection } from "@/components/calendly-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <HeroSection />
        <TrustSection />
        <PainPointsSection />
        <SolutionSection />
        <TestimonialBlock />
        <ProcessSection />
        <CaseStudySection />
        <TestimonialGrid />
        <FounderSection />
        <CalendlySection />
        <FAQSection />
        <Footer />
      </main>
    </>
  )
}

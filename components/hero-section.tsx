import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-8 lg:px-20 xl:px-32 py-20 text-center">
      <div className="max-w-5xl mx-auto space-y-3">
        <h1 className="font-[family-name:var(--font-bebas)] text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight text-balance">
          From Influencer to Empire Builder<br/>
          <span className="text-primary">Launch & Scale</span> Your Own Brand Successfully
        </h1>

        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
          Because looking polished isn't enough. Your brand should sell, convert, and dominate your niche —
          consistently.
        </p>

        <div className="pt-4">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm md:text-base px-6 py-5 rounded-full"
          >
            Book Your Free Growth Strategy Call
          </Button>
        </div>

        <div className="pt-12">
          <div className="bg-muted/30 rounded-2xl aspect-video max-w-4xl mx-auto flex items-center justify-center border border-border/50">
            <span className="text-muted-foreground text-sm">Founder Intro Video</span>
          </div>
        </div>
      </div>
    </section>
  )
}

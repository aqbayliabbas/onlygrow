import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-12 md:py-20 text-center">
      <div className="w-full max-w-5xl mx-auto space-y-4 sm:space-y-5 md:space-y-6">
        <h1 className="font-[family-name:var(--font-bebas)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-balance">
          From Influencer to Empire Builder<br className="hidden sm:block"/>
          <span className="text-primary">Launch & Scale</span> Your Own Brand Successfully
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed px-2 sm:px-0">
          Because looking polished isn't enough. Your brand should sell, convert, and dominate your niche —
          consistently.
        </p>

        <div className="pt-4 sm:pt-6">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm sm:text-base px-5 sm:px-6 py-4 sm:py-5 rounded-full w-full sm:w-auto"
          >
            Book Free Strategy Call
          </Button>
        </div>

        <div className="pt-8 sm:pt-12 px-2 sm:px-0">
          <div className="bg-muted/30 rounded-xl sm:rounded-2xl aspect-video w-full max-w-4xl mx-auto flex items-center justify-center border border-border/50">
            <span className="text-muted-foreground text-xs sm:text-sm">Founder Intro Video</span>
          </div>
        </div>
      </div>
    </section>
  )
}

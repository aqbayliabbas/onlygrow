import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 lg:px-12 py-20 text-center">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="font-[family-name:var(--font-bebas)] text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-balance">
          We Help Ambitious Founders Build Brands That Don't Just Look Good — They Grow.
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
          Because looking polished isn't enough. Your brand should sell, convert, and dominate your niche —
          consistently.
        </p>

        <div className="pt-4">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-base md:text-lg px-8 py-6 rounded-full"
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

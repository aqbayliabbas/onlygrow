import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function FinalCTA() {
  return (
    <section className="py-32 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto space-y-16 text-center">
        <h2 className="font-[family-name:var(--font-bebas)] text-5xl md:text-7xl lg:text-8xl text-balance leading-tight">
          Let's Build a Brand That Grows With You.
        </h2>

        <Button
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 text-base md:text-lg px-8 py-6 rounded-full"
        >
          Book Your Free Growth Discovery Call
        </Button>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto pt-8">
          <Card className="p-8 space-y-4 text-left border-border/50">
            <h3 className="text-2xl font-semibold">30-Min Strategy Call</h3>
            <p className="text-muted-foreground leading-relaxed">
              Quick audit of your current brand and growth opportunities. Walk away with actionable insights.
            </p>
          </Card>

          <Card className="p-8 space-y-4 text-left border-border/50">
            <h3 className="text-2xl font-semibold">Full Brand Audit</h3>
            <p className="text-muted-foreground leading-relaxed">
              Deep dive into your brand positioning, messaging, and visual identity with a custom roadmap.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}

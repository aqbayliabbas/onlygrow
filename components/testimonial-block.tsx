import { Star } from "lucide-react"

export function TestimonialBlock() {
  return (
    <section className="py-5 px-8 lg:px-20 xl:px-32">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-muted/20 rounded-2xl aspect-video flex items-center justify-center border border-border/30">
            <span className="text-xs text-muted-foreground">Testimonial Video</span>
          </div>

          <div className="space-y-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>

            <blockquote className="text-lg md:text-xl leading-relaxed text-balance">
              "OnlyGrow helped us go from random campaigns to a unified system that converts. We scaled from $50K/mo to
              $200K/mo in 90 days."
            </blockquote>

            <div className="text-muted-foreground">
              <p className="font-semibold text-foreground">Client Name</p>
              <p className="text-sm">Founder @ Startup X</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

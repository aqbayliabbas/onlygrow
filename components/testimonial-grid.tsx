"use client"

import { Star } from "lucide-react"
import { useEffect, useRef } from "react"

export function TestimonialGrid() {
  const testimonials = [
    {
      quote:
        "Working with OnlyGrow transformed our entire approach to branding. We finally have clarity and direction.",
      author: "Antoine luc",
      role: "CEO @ Bliss",
    },
    {
      quote:
        "The ROI was immediate. Our conversion rates doubled within the first month of implementing their strategy.",
      author: "Mohamed Larbi",
      role: "Founder @ auroraLabs",
    },
    {
      quote: "OnlyGrow doesn't just design — they build systems that actually drive business results. Game changer.",
      author: "Sebbai Meriem",
      role: "CMO @ PrimeRose",
    },
    {
      quote:
        "Finally, a branding agency that understands growth. They don't just make things pretty, they make things sell.",
      author: "Ilham sihmed",
      role: "Founder @ CleanSi",
    },
  ]

  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollAmount = 0
    const scrollSpeed = 0.3

    const scroll = () => {
      scrollAmount += scrollSpeed
      if (scrollContainer) {
        scrollContainer.scrollLeft = scrollAmount
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0
        }
      }
    }

    const intervalId = setInterval(scroll, 20)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <section className="py-32 px-6 lg:px-12 bg-card/30 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        <h2 className="font-[family-name:var(--font-bebas)] text-4xl md:text-6xl text-center text-balance leading-tight">
          What Our Clients Have to Say.
        </h2>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-card/30 via-card/30 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-card/30 via-card/30 to-transparent z-10 pointer-events-none" />

          <div ref={scrollRef} className="flex gap-8 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
            {[...testimonials, ...testimonials].map((testimonial, i) => (
              <div key={i} className="bg-card border border-border/50 rounded-2xl p-8 space-y-6 flex-shrink-0 w-96">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-lg leading-relaxed text-balance">"{testimonial.quote}"</p>

                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

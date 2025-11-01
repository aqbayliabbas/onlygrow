"use client"

import { useEffect, useRef } from "react"

export function TrustSection() {
  const logos = [
    "Client Logo 1",
    "Client Logo 2",
    "Client Logo 3",
    "Client Logo 4",
    "Client Logo 5",
    "Client Logo 6",
    "Client Logo 7",
    "Client Logo 8",
  ]
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollAmount = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollAmount += scrollSpeed
      if (scrollContainer) {
        scrollContainer.scrollLeft = scrollAmount
        // Reset when reaching halfway (seamless loop)
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0
        }
      }
    }

    const intervalId = setInterval(scroll, 20)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <section className="py-4 px-8 lg:px-20 xl:px-32 border-t border-border/30 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <p className="text-sm uppercase tracking-wider text-muted-foreground">Trusted by teams who scale fast.</p>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div ref={scrollRef} className="flex gap-8 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
            {/* Duplicate logos for seamless loop */}
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="bg-muted/20 rounded-lg aspect-[3/2] flex items-center justify-center border border-border/30 flex-shrink-0 w-48"
              >
                <span className="text-xs text-muted-foreground">{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

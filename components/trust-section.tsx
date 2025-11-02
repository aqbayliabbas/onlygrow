"use client"

import { useEffect, useRef } from "react"

export function TrustSection() {
  const logos = [
    "/SVG/logo1.svg",
    "/SVG/logo2.svg",
    "/SVG/logo3.svg",
    "/SVG/logo4.svg",
    "/SVG/logo5.svg",
  ]
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollAmount = 0
    const scrollSpeed = 2.0

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
    <div className="border-t border-border/30 overflow-hidden bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="py-3 sm:py-4 md:py-6">
            <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3 md:mb-4 text-center">
              Trusted by innovative brands worldwide
            </p>
            <div 
              ref={scrollRef} 
              className="flex gap-8 sm:gap-12 md:gap-16 lg:gap-20 overflow-x-hidden py-2 sm:py-3 md:py-4" 
              style={{ scrollBehavior: "smooth" }}
            >
              {[...logos, ...logos].map((logo, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center flex-shrink-0 w-24 sm:w-28 md:w-32 h-12 sm:h-16 md:h-20"
                >
                  <img
                    src={logo}
                    alt="Trusted Company Logo"
                    className="h-6 sm:h-8 md:h-10 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

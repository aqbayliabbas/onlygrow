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
    <div className="border-t border-border/30 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div ref={scrollRef} className="flex gap-20 overflow-x-hidden py-4" style={{ scrollBehavior: "auto" }}>
            {/* Duplicate logos for seamless loop */}
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center flex-shrink-0 w-32 h-20"
              >
                <img
                  src={logo}
                  alt={`Client logo ${(i % logos.length) + 1}`}
                  className="w-full h-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

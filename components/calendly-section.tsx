"use client"

import { useEffect } from "react"

export function CalendlySection() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section id="calendly" className="py-0 px-0">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-6">
          <h2 className="font-[family-name:var(--font-bebas)] text-5xl md:text-7xl text-balance leading-tight">
            Ready to Grow?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Book a free strategy call and let's build a brand that converts.
          </p>
        </div>
        <div
          className="calendly-inline-widget w-full rounded-2xl overflow-hidden border border-border/50 shadow-lg"
          data-url="https://calendly.com/lwennasebbas/onlygrowcall"
          style={{ minWidth: "320px", width: "100%", height: "820px" }}
        />
      </div>
    </section>
  )
}

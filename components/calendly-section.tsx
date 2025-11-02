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
    <section id="calendly" className="py-0 px-8 lg:px-20 xl:px-32">
      <div className="max-w-5xl mx-auto space-y-1">
        <div className="text-center space-y-2">
          <h2 className="font-[family-name:var(--font-bebas)] text-4xl md:text-5xl text-balance leading-tight">
            Ready to Grow?
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            Book a free strategy call and let's build a brand that converts.
          </p>
        </div>
        <div
          className="calendly-inline-widget w-full overflow-hidden"
          data-url="https://calendly.com/lwennasebbas/onlygrowcall"
          style={{ minWidth: "320px", width: "100%", height: "1000px" }}
        />
      </div>
    </section>
  )
}

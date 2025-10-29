"use client"

import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <span className="font-[family-name:var(--font-bebas)] text-2xl md:text-3xl text-foreground">OnlyGrow</span>
          </div>

          <Button
            size="lg"
            type="button"
            onClick={() => {
              const el = document.getElementById("calendly")
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
            }}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
          >
            Book a Call
          </Button>
        </div>
      </div>
    </nav>
  )
}

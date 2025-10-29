export function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-12 border-t border-border/30">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        <div className="font-[family-name:var(--font-bebas)] text-4xl tracking-tight">OnlyGrow</div>

        <p className="text-sm text-muted-foreground">© OnlyGrow Agency 2025 — All rights reserved.</p>

        <div className="flex justify-center gap-6">
          {["Social 1", "Social 2", "Social 3"].map((social, i) => (
            <div
              key={i}
              className="w-10 h-10 rounded-full bg-muted/20 flex items-center justify-center border border-border/30"
            >
              <span className="text-xs text-muted-foreground sr-only">{social}</span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

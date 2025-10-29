export function FounderSection() {
  return (
    <section className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-muted/20 rounded-2xl aspect-[3/4] flex items-center justify-center border border-border/30">
            <img src="1.png" alt="founder portrait" />
          </div>

          <div className="space-y-6">
            <h2 className="font-[family-name:var(--font-bebas)] text-4xl md:text-5xl text-balance leading-tight">
              Meet Louenes — Growth Strategist, Creator, & Founder of OnlyGrow.
            </h2>

            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
              I’m bored of the minimalist world we’re stuck in. With the tools we have today, design should be everywhere, loud, bold, and telling stories that stick with people. That’s why I started this agency: to design brands that break the “rules”, stand out, and make you impossible to ignore. From making football edits as a teenager to working with brands like Zara and Formula One, my mission has stayed the same, to design in a way that people can’t help but notice and talk about.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function SolutionSection() {
  const solutions = [
    {
      title: "You STEAL Attention",
      highlight: "STEAL",
      description:
        "Bland brands get skipped. Ours break the pattern and hijack attention in under a second, where it matters most: online.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XTBagsCvZi974sRsXEEiIgRhTwpqTN.png",
    },
    {
      title: "You ATTRACT Buyers",
      highlight: "ATTRACT",
      description: "Forget likes. You'll attract people who get it and want it.",
      image: "/person-on-phone-with-dramatic-lighting.jpg",
    },
    {
      title: "You DOMINATE Perception",
      highlight: "DOMINATE",
      description: "We don't just make you look premium. We make you feel like the only option in your space.",
      image: "/premium-branded-products.jpg",
    },
  ]

  return (
    <section className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-16">
        <h2 className="font-[family-name:var(--font-bebas)] text-4xl md:text-6xl lg:text-7xl text-center text-balance leading-tight">
          Why Winners Choose OnlyGrow
        </h2>

        <div className="space-y-8">
          {/* First card - full width */}
          <div className="bg-[#1c4734] text-[#fbf2d3] rounded-2xl p-8 md:p-12 border border-[#dda81e]/30 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="font-[family-name:var(--font-bebas)] text-4xl md:text-5xl leading-tight">
                YOU <span className="text-[#dda81e]">{solutions[0].highlight}</span> ATTENTION
              </h3>
              <p className="text-[#fbf2d3]/90 leading-relaxed text-lg">{solutions[0].description}</p>
            </div>
            <div className="bg-[#fbf2d3] rounded-xl overflow-hidden aspect-video flex items-center justify-center">
              <img
                src={solutions[0].image || "/placeholder.svg"}
                alt="Steal Attention"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bottom two cards - side by side */}
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.slice(1).map((solution, i) => (
              <div key={i} className="bg-[#1c4734] text-[#fbf2d3] rounded-2xl p-8 border border-[#dda81e]/30 space-y-6">
                <h3 className="font-[family-name:var(--font-bebas)] text-3xl md:text-4xl leading-tight">
                  YOU <span className="text-[#dda81e]">{solution.highlight}</span>{" "}
                  {solution.title.split(solution.highlight)[1]}
                </h3>
                <p className="text-[#fbf2d3]/90 leading-relaxed">{solution.description}</p>
                <div className="bg-[#fbf2d3]/10 rounded-xl aspect-square flex items-center justify-center border border-[#dda81e]/30 overflow-hidden">
                  <img
                    src={solution.image || "/placeholder.svg"}
                    alt={solution.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

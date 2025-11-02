export function SolutionSection() {
  const solutions = [
    {
      title: "Build a Powerful Brand Identity",
      highlight: "Brand Identity",
      description: "Stand out in crowded markets with a distinctive brand that converts followers into loyal customers.",
      image: "/1x/imgGrid1.png",
    },
    {
      title: "Monetize Your Following",
      highlight: "Monetize",
      description: "Turn engagement into revenue with products and messaging your audience loves.",
      image: "/1x/imgGrid2.jpg",
    },
    {
      title: "Scale Your Business",
      highlight: "Scale",
      description: "Build systems that grow your business beyond your personal reach.",
      image: "/1x/imgGrid3.jpg",
    },
  ]

  return (
    <section className="py-5 px-8 lg:px-20 xl:px-32">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="font-[family-name:var(--font-bebas)] text-3xl md:text-4xl lg:text-5xl text-center text-balance leading-tight">
          From Creator to Business Owner
        </h2>

        <div className="space-y-8">
          {/* First card - full width */}
          <div className="bg-[#1c4734] text-[#fbf2d3] rounded-2xl p-6 md:p-8 border border-[#dda81e]/30 grid md:grid-cols-2 gap-6 items-center">
            <div className="space-y-3">
              <h3 className="font-[family-name:var(--font-bebas)] text-3xl md:text-4xl leading-tight">
                {solutions[0].title.split(solutions[0].highlight)[0]}
                <span className="text-[#dda81e]">{solutions[0].highlight}</span>
                {solutions[0].title.split(solutions[0].highlight)[1]}
              </h3>
              <p className="text-sm text-[#fbf2d3]/90 leading-relaxed">{solutions[0].description}</p>
            </div>
            <div className="bg-[#fbf2d3] rounded-xl overflow-hidden aspect-video flex items-center justify-center">
              <img
                src={solutions[0].image}
                alt="Steal Attention"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bottom two cards - side by side */}
          <div className="grid md:grid-cols-2 gap-6">
            {solutions.slice(1).map((solution, i) => (
              <div key={i} className="bg-[#1c4734] text-[#fbf2d3] rounded-2xl p-6 border border-[#dda81e]/30 space-y-4">
                <h3 className="font-[family-name:var(--font-bebas)] text-2xl md:text-3xl leading-tight">
                  {solution.title.split(solution.highlight)[0]}
                  <span className="text-[#dda81e]">{solution.highlight}</span>{" "}
                  {solution.title.split(solution.highlight)[1]}
                </h3>
                <p className="text-sm text-[#fbf2d3]/90 leading-relaxed">{solution.description}</p>
                <div className="bg-[#fbf2d3]/10 rounded-xl aspect-square flex items-center justify-center border border-[#dda81e]/30 overflow-hidden">
                  <img
                    src={solution.image}
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

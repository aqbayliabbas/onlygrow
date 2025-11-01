export function PainPointsSection() {
  const painPoints = [
    {
      title: 'You look "nice," but nobody remembers you.',
      description: "Your brand blends in with everyone else in your space.",
    },
    {
      title: "Your ads feel disconnected from your identity.",
      description: "Marketing campaigns don't align with your brand story.",
    },
    {
      title: "You keep changing strategies — but sales stay flat.",
      description: "Nothing seems to stick or drive consistent growth.",
    },
  ]

  return (
    <section className="py-5 px-8 lg:px-20 xl:px-32">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="font-[family-name:var(--font-bebas)] text-3xl md:text-4xl lg:text-5xl text-center text-balance leading-tight">
          Is Your Brand Silently Killing Your Growth?
        </h2>

        <div className="grid md:grid-cols-3 gap-3">
          {painPoints.map((point, i) => (
            <div key={i} className="bg-[#1c4734] text-[#fbf2d3] rounded-2xl p-6 space-y-4 border border-[#dda81e]/20">
              <div className="space-y-2">
                <h3 className="text-lg md:text-xl font-semibold text-balance leading-tight">{point.title}</h3>
                <p className="text-sm text-[#fbf2d3]/80 leading-relaxed">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

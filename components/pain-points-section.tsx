export function PainPointsSection() {
  const painPoints = [
    {
      title: 'You have the audience, but not the brand to match.',
      description: "Your influence is growing, but your personal brand isn't translating into a scalable business yet.",
    },
    {
      title: "Your content gets likes, but not enough sales.",
      description: "Engagement is high, but you're struggling to convert followers into paying customers.",
    },
    {
      title: "You're tired of just promoting other people's products.",
      description: "You're ready to be the brand that others want to promote, but don't know where to start.",
    },
  ]

  return (
    <section className="py-5 px-8 lg:px-20 xl:px-32">
      <div className="max-w-6x mx-auto space-y-12">
        <h2 className="font-[family-name:var(--font-bebas)] text-3xl md:text-4xl lg:text-5xl text-center text-balance leading-tight">
          Are You Ready to Turn Your Influence Into a Business That Lasts?
        </h2>

        <div className="grid md:grid-cols-3 gap-15">
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

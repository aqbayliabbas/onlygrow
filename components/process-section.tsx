export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Growth Strategy Workshop",
      description: "We dive deep into your business, audience, and goals to create a custom growth roadmap.",
      image: "/step 01.png",
    },
    {
      number: "02",
      title: "Brand System & Identity",
      description: "We build a cohesive visual and messaging system that resonates with your target market.",
      image: "/step 02.png",
    },
    {
      number: "03",
      title: "Growth Execution",
      description: "We implement and optimize campaigns that drive measurable results and scale your business.",
      image: "/step 03.png",
    },
  ]

  return (
    <section className="py-32 px-6 lg:px-12 bg-card/30">
      <div className="max-w-7xl mx-auto space-y-16">
        <h2 className="font-[family-name:var(--font-bebas)] text-4xl md:text-6xl lg:text-7xl text-center text-balance leading-tight">
          Our Process
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-[var(--dark-card)] text-[var(--dark-card-foreground)] rounded-2xl p-8 space-y-6 border border-secondary/20"
            >
              <div className="space-y-4">
                <div className="w-[200px] h-[200px] mx-auto overflow-hidden rounded-xl bg-transparent">
                  <img
                    src={step.image}
                    alt={`${step.title} illustration`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="text-sm text-secondary font-semibold">{step.number}</div>
                <h3 className="text-2xl md:text-3xl font-semibold text-balance leading-tight">{step.title}</h3>
                <p className="text-[var(--dark-card-foreground)]/80 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

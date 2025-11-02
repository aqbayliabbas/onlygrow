import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Minus, Plus } from "lucide-react"

export function FAQSection() {
  const faqs = [
    {
      question: "How can you help me improve my personal brand as an influencer?",
      answer: "We specialize in crafting distinctive brand identities that make you stand out. We'll develop your visual identity, brand voice, and messaging framework that authentically represents you and resonates with your target audience.",
    },
    {
      question: "What's included in your branding services?",
      answer: "Our branding services include brand strategy, visual identity design (logo, color palette, typography), brand guidelines, and key messaging. We focus on creating a cohesive brand that works across all your platforms and touchpoints.",
    },
    {
      question: "How do you ensure the brand reflects my unique personality?",
      answer: "We start with an in-depth discovery process to understand your values, style, and goals. Through workshops and interviews, we capture your essence and translate it into a visual and verbal identity that's uniquely you.",
    },
    {
      question: "What makes your communication strategy different?",
      answer: "We don't believe in one-size-fits-all messaging. Our communication strategies are tailored to your voice and audience, ensuring consistency across all platforms while maintaining authenticity and engagement.",
    },
    {
      question: "How long does the branding process take?",
      answer: "Our brand development process typically takes 4-6 weeks from initial consultation to final delivery. This includes research, strategy, design iterations, and finalizing all brand assets and guidelines.",
    },
  ]

  return (
    <section className="py-5 px-8 lg:px-20 xl:px-32">
      <div className="max-w-2xl mx-auto space-y-12">
        <h2 className="font-[family-name:var(--font-bebas)] text-3xl md:text-4xl text-center text-balance leading-tight">
          Branding & Communication FAQs
        </h2>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger
                className="group text-left text-base md:text-lg px-6 py-4 rounded-2xl border border-primary/30 bg-card/5 hover:bg-card/10 transition [&>svg]:hidden"
              >
                <div className="flex items-center gap-4 w-full">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-primary/40">
                    <Plus className="h-4 w-4 group-data-[state=open]:hidden" />
                    <Minus className="h-4 w-4 hidden group-data-[state=open]:block" />
                  </span>
                  <span className="flex-1">{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-base text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

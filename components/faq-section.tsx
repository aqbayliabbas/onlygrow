import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Minus, Plus } from "lucide-react"

export function FAQSection() {
  const faqs = [
    {
      question: "What makes OnlyGrow different?",
      answer:
        "We don't just make things look pretty. Every design decision is backed by growth strategy and conversion optimization. We focus on building brands that actually drive revenue, not just win design awards.",
    },
    {
      question: "Who do you work with?",
      answer:
        "We work with ambitious founders and growing companies who are serious about scaling. Our ideal clients are in the $100K-$5M revenue range and ready to invest in their brand as a growth engine.",
    },
    {
      question: "Do you guarantee results?",
      answer:
        "While we can't guarantee specific numbers (anyone who does is lying), we do guarantee a strategic, data-driven approach that has consistently delivered results for our clients. We measure success through clear KPIs and optimize continuously.",
    },
  ]

  return (
    <section className="py-5 px-8 lg:px-20 xl:px-32">
      <div className="max-w-2xl mx-auto space-y-12">
        <h2 className="font-[family-name:var(--font-bebas)] text-3xl md:text-4xl text-center text-balance leading-tight">
          FAQs
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

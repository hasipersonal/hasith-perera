import { useState } from 'react'
import { AccordionItem } from '../components/Accordion'
import { faqs } from '../data/content'
import { useScrollReveal } from '../lib/useScrollReveal'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const ref = useScrollReveal('.faq-copy', { y: 30 })

  return (
    <section className="container-page py-20 md:py-28">
      <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <div ref={ref} className="faq-copy">
          <p className="eyebrow mb-3">Faq</p>
          <h2 className="h-display text-4xl leading-[0.95] md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-5 max-w-sm text-sm text-ink-soft">
            Here are answers to some of the most common questions I receive. If you don&apos;t see
            your question here, feel free to reach out. I&apos;m happy to help.
          </p>
        </div>

        <div>
          {faqs.map((faq, i) => (
            <AccordionItem
              key={faq.question}
              index={i + 1}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex((cur) => (cur === i ? null : i))}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

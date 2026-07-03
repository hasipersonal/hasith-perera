import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../lib/useScrollReveal'

export default function CTASection() {
  const ref = useScrollReveal('.cta-el', { y: 30 })

  return (
    <section ref={ref} className="container-page pb-24 pt-4 md:pb-32">
      <div className="rounded-[2.5rem] bg-paper border border-mist px-8 py-16 text-center md:py-24 shadow-xl transition-colors duration-500">

        <p className="cta-el eyebrow mb-4 tracking-[0.25em]">
          Have a project in mind?
        </p>

        <h2 className="cta-el h-display mx-auto max-w-4xl text-4xl leading-[0.95] text-ink sm:text-6xl tracking-tight">
          Let&apos;s turn complex ideas into seamless products
        </h2>

        <p className="cta-el mx-auto mt-6 max-w-xl text-sm leading-relaxed text-ink-soft md:text-base">
          Looking for a balance of intuitive UI/UX design and clean, architectural frontend code? Let&apos;s collaborate to build something performant, scalable, and exceptionally designed.
        </p>

        <Link
          to="/contact"
          data-cursor="grow"
          className="cta-el group mt-8 inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20 hover:scale-[1.03]"
        >
          Get In Touch
          <ArrowUpRight
            size={16}
            className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>
    </section>
  )
}
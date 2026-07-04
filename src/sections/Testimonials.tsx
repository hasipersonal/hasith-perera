import { Star } from 'lucide-react'
import Counter from '../components/Counter'
import { stats, testimonials } from '../data/content'
import { useScrollReveal } from '../lib/useScrollReveal'

export default function Testimonials() {
  const ref = useScrollReveal('.tst-card', { y: 40, stagger: 0.1 })

  return (
    <section className="container-page py-20 md:py-28">
      <div className="mb-12">
        <p className="eyebrow mb-3">Kind words</p>
        <h2 className="h-display text-4xl md:text-5xl">Trusted By People I&apos;ve Worked With</h2>
      </div>

      <div ref={ref} className="grid gap-5 md:grid-cols-3">
        <div className="tst-card flex flex-col justify-between rounded-3xl bg-[#0b0b0d] p-7 text-white">
          <div>
            <p className="h-display text-5xl">
              <Counter to={stats[0].value} suffix={stats[0].suffix} />
            </p>
            <p className="mt-2 text-sm text-white/70">{stats[0].label}</p>
          </div>
        </div>

        <div className="tst-card flex flex-col justify-between rounded-3xl bg-accent p-7 text-white">
          <div>
            <p className="h-display text-5xl">
              <Counter to={stats[1].value} suffix={stats[1].suffix} />
            </p>
            <p className="mt-2 text-sm text-white/80">{stats[1].label}</p>
          </div>
        </div>

        {testimonials.slice(0, 1).map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}

        {testimonials.slice(1).map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}

        <div className="tst-card flex flex-col justify-center rounded-3xl border border-mist bg-cloud p-7">
          <p className="h-display text-4xl">
            <Counter to={stats[2].value} suffix={stats[2].suffix} />
          </p>
          <p className="mt-2 text-sm text-ink-soft">{stats[2].label}</p>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ name, role, quote, avatar }: (typeof testimonials)[number]) {
  return (
    <div className="tst-card rounded-3xl border border-mist bg-cloud p-7">
      <div className="mb-4 flex gap-0.5 text-accent">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
        ))}
      </div>
      <p className="text-sm leading-relaxed text-ink-soft">{quote}</p>
      <div className="mt-5 flex items-center gap-3">
        <img src={avatar} alt={name} loading="lazy" decoding="async" className="h-9 w-9 rounded-full object-cover" />
        <div>
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-xs text-ink-soft">{role}</p>
        </div>
      </div>
    </div>
  )
}

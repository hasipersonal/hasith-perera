import { useMemo, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '../lib/useGSAP'
import { projects } from '../data/projects'
import CTASection from '../sections/CTASection'

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const gridRef = useRef<HTMLDivElement | null>(null)

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(projects.map((p) => p.category)))],
    [],
  )

  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  )

  useGSAP(() => {
    gsap.fromTo(
      '.project-page-card',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out' },
    )
  }, [filter])

  return (
    <>
      <section className="container-page pb-10 pt-40 md:pt-48">
        <p className="eyebrow mb-3">Portfolio</p>
        <h1 className="h-display text-5xl leading-[0.92] sm:text-6xl md:text-7xl">
          Selected Projects
        </h1>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-soft">
          A curated collection of enterprise tools and web applications engineered with modular design systems, clean architecture, and optimized user experiences.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              data-cursor="grow"
              className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${filter === cat
                ? 'border-ink bg-ink text-paper'
                : 'border-mist bg-transparent text-ink-soft hover:border-ink hover:text-ink'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="container-page py-12 md:py-16">
        <div ref={gridRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <div
              key={project.slug}
              data-cursor="grow"
              className="project-page-card group block overflow-hidden rounded-3xl border border-mist bg-cloud"
            >
              <div className="aspect-[4/5] overflow-hidden bg-cloud relative">
                {project.type === 'video' ? (
                  <video
                    src={project.cover}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls={false}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    aria-label={`Video showcase for ${project.title}`}
                  />
                ) : (
                  <img
                    src={project.cover}
                    alt={project.title}
                    loading="lazy"
                    decoding='async'
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                )}
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-ink-soft">
                      {project.category}
                    </p>
                    <p className="mt-1 font-semibold">{project.title}</p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="flex-none transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
                <p className="mt-3 text-sm text-ink-soft">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  )
}

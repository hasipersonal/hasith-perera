import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { useScrollReveal } from '../lib/useScrollReveal'
import LazyVideo from '../components/LazyVideo'

export default function FeaturedProjects() {
  const ref = useScrollReveal('.project-card', { y: 50, stagger: 0.12 })

  return (
    <section className="container-page py-20 md:py-28">
      <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="eyebrow mb-3">Selected work</p>
          <h2 className="h-display text-4xl md:text-5xl">Featured Projects</h2>
        </div>
        <p className="max-w-sm text-sm text-ink-soft">
          A curated look at digital products built from the ground up combining user psychology, rigorous UI/UX systems, and clean frontend engineering to solve real world problems.
        </p>
      </div>

      <div ref={ref} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.slice(0, 6).map((project) => (
          <Link
            key={project.slug}
            to={`/projects`}
            data-cursor="grow"
            className="project-card group block overflow-hidden rounded-3xl border border-mist bg-cloud"
          >
            <div className="aspect-[4/5] overflow-hidden bg-cloud relative">
              {project.type === 'video' ? (
                <LazyVideo
                  src={project.cover}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  aria-label={`Video preview of ${project.title}`}
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

            <div className="flex items-center justify-between gap-3 p-5">
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
          </Link>
        ))}
      </div>
    </section>
  )
}
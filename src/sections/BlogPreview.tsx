import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { blogs } from '../data/blogs'
import { useScrollReveal } from '../lib/useScrollReveal'

export default function BlogPreview() {
  const ref = useScrollReveal('.blog-card', { y: 40, stagger: 0.1 })

  return (
    <section className="container-page py-20 md:py-28">
      <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="eyebrow mb-3">From the journal</p>
          <h2 className="h-display text-4xl md:text-5xl">Latest Articles</h2>
        </div>
        <Link to="/blogs" className="btn-pill" data-cursor="grow">
          View all articles
        </Link>
      </div>

      <div ref={ref} className="grid gap-6 md:grid-cols-2">
        {blogs.slice(0, 4).map((post) => (
          <Link
            key={post.slug}
            to="/blogs"
            data-cursor="grow"
            className="blog-card group flex gap-5 rounded-3xl border border-mist bg-cloud p-4"
          >
            <div className="h-28 w-28 flex-none overflow-hidden rounded-2xl sm:h-32 sm:w-32">
              <img
                src={post.cover}
                alt={post.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center">
              <p className="text-xs font-medium uppercase tracking-wide text-accent">
                {post.category}
              </p>
              <p className="mt-1 font-semibold leading-snug">{post.title}</p>
              <div className="mt-3 flex items-center justify-between text-xs text-ink-soft">
                <span>
                  {post.date} · {post.readTime}
                </span>
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

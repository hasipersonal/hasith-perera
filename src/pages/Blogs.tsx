import { ArrowUpRight } from 'lucide-react'
import { blogs } from '../data/blogs'
import { useScrollReveal } from '../lib/useScrollReveal'
import CTASection from '../sections/CTASection'

export default function Blogs() {
  const ref = useScrollReveal('.blog-page-card', { y: 40, stagger: 0.1 })

  return (
    <>
      <section className="container-page pb-12 pt-40 md:pt-48">
        <p className="eyebrow mb-3">The journal</p>
        <h1 className="h-display text-5xl leading-[0.92] sm:text-6xl md:text-7xl">
          Ideas &amp; Insights
        </h1>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-soft">
          From design trends to creative processes — articles to help you elevate your craft and
          spark new ideas for your projects.
        </p>
      </section>

      <section className="container-page py-12 md:py-16">
        <div ref={ref} className="grid gap-6 md:grid-cols-2">
          {blogs.map((post) => (
            <article
              key={post.slug}
              data-cursor="grow"
              className="blog-page-card group overflow-hidden rounded-3xl border border-mist bg-cloud"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={post.cover}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-medium uppercase tracking-wide text-accent">
                  {post.category}
                </p>
                <h2 className="mt-2 h-display text-2xl leading-tight">{post.title}</h2>
                <p className="mt-3 text-sm text-ink-soft">{post.excerpt}</p>
                <div className="mt-5 flex items-center justify-between text-xs text-ink-soft">
                  <span>
                    {post.date} &middot; {post.readTime}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  )
}

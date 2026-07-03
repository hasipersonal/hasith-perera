import Hero from '../sections/Hero'
import Services from '../sections/Services'
import FeaturedProjects from '../sections/FeaturedProjects'
import Testimonials from '../sections/Testimonials'
import FAQSection from '../sections/FAQSection'
import BlogPreview from '../sections/BlogPreview'
import CTASection from '../sections/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <FeaturedProjects />
      <Testimonials />
      <FAQSection />
      <BlogPreview />
      <CTASection />
    </>
  )
}

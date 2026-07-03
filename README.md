# Duncan Robert — Portfolio (Portavia-inspired)

A React + TypeScript + Vite portfolio site styled with Tailwind CSS v4 and animated with GSAP
(ScrollTrigger), rebuilt in the spirit of the Framer "Portavia" template: same layout rhythm,
same interaction ideas (hero image tilt, scroll reveals, animated counters, accordion FAQ,
theme toggle, custom cursor), your own stack.

## Stack

- **Vite + React 19 + TypeScript**
- **Tailwind CSS v4** (CSS-first config in `src/index.css`, class-based dark mode)
- **GSAP + ScrollTrigger** for all motion
- **React Router** for the 5 pages (Home, About, Projects, Blogs, Contact)
- **lucide-react** for icons

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build to /dist
npm run preview   # preview the production build
```

## Project structure

```
src/
  components/     Reusable UI: Navbar, Footer, Accordion, Counter, CursorDot, ThemeToggle...
  sections/       Page sections composed on Home: Hero, Services, FeaturedProjects...
  pages/          Route-level pages: Home, About, Projects, Blogs, Contact
  data/           Placeholder content — projects, blog posts, testimonials, FAQs, services
  lib/            ThemeContext + GSAP hooks (useScrollReveal, useGSAP)
```

## Swapping in your own content

1. **Text & copy** — edit `src/data/*.ts` and the hero/about copy directly inside
   `src/sections/Hero.tsx` and `src/pages/About.tsx`.
2. **Images** — everything currently points at `picsum.photos` / `i.pravatar.cc` placeholders.
   Swap the `src` values for your own images (drop files in `src/assets` and import them, or
   point at your own URLs).
3. **Colors & type** — all design tokens live at the top of `src/index.css` under `:root` /
   `.dark` and the `@theme` block: accent color, ink/paper colors, and the two font families
   (Anton for display headings, Inter for body copy).
4. **Contact form** — `src/pages/Contact.tsx` currently just shows a success state on submit.
   Wire the `handleSubmit` function up to your form backend of choice (Formspree, Resend, your
   own API route, etc).

## Motion notes

- `src/lib/useScrollReveal.ts` — generic fade+slide-up-on-scroll hook, used across sections.
- `src/components/Counter.tsx` — animated count-up for stats, triggers once when scrolled into view.
- `src/components/Accordion.tsx` — GSAP height animation for the services list and FAQ.
- `src/components/CursorDot.tsx` — trailing cursor dot (desktop only) that scales up over links/buttons.
- `src/components/ThemeToggle.tsx` — fixed bottom dark/light toggle, persisted to `localStorage`.
- Respect for `prefers-reduced-motion` is baked into `src/index.css`.

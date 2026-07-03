import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from './lib/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'
import CursorDot from './components/CursorDot'
import AvailabilityBadge from './components/AvailabilityBadge'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'

export default function App() {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
    }

    document.addEventListener('contextmenu', handleContextMenu)

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
    }
  }, [])

  return (
    <ThemeProvider>
      <ScrollToTop />
      <CursorDot />
      <Navbar />
      <AvailabilityBadge />
      <main className="min-h-screen overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <ThemeToggle />
      <Analytics />
    </ThemeProvider>
  )
}
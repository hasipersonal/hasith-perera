import { Route, Routes } from 'react-router-dom'
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
    </ThemeProvider>
  )
}

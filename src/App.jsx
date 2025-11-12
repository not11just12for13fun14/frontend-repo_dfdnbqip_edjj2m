import React from 'react'
import Hero from './Hero'
import NeonNavbar from './components/NeonNavbar'
import About from './components/About'
import Work from './components/Work'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      <NeonNavbar />
      <Hero />
      <About />
      <Work />
      <Testimonials />
      <Contact />
      <footer className="border-t border-white/5 bg-[#0D0D0D] py-8 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Kashu Digital 2 — Jaipur
      </footer>
    </div>
  )
}

export default App

import React from 'react'

export default function NeonNavbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#0D0D0D]/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-white text-lg font-semibold tracking-wide" style={{textShadow:'0 0 12px rgba(0,255,209,0.45)'}}>
          Kashu Digital 2
        </a>
        <nav className="hidden gap-6 text-sm text-white/70 md:flex">
          <a href="#about" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(0,255,209,0.65)] transition">About</a>
          <a href="#work" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(0,255,209,0.65)] transition">Work</a>
          <a href="#testimonials" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(0,255,209,0.65)] transition">Clients</a>
          <a href="#contact" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(0,255,209,0.65)] transition">Contact</a>
        </nav>
      </div>
    </header>
  )
}

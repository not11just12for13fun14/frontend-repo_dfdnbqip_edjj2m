import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  { id: 1, name: 'Aarav Sharma', role: 'Founder, NeoBrand', quote: 'They delivered a cinematic website that boosted our leads instantly.' },
  { id: 2, name: 'Siya Kapoor', role: 'Marketing Head, Vanta', quote: 'Minimal, futuristic and fast. Exactly what we wanted.' },
  { id: 3, name: 'Rohit Mehta', role: 'Product Lead, Flux', quote: 'Their neon aesthetic made our launch unforgettable.' }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-[#0D0D0D] py-24 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_250px_at_20%_80%,rgba(0,255,209,0.06),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="mb-8 text-3xl font-bold">Clients</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div key={t.id} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1,duration:0.6}} className="rounded-xl border border-[#00FFD1]/20 bg-white/5 p-6 shadow-[0_0_24px_rgba(0,255,209,0.05)]">
              <p className="mb-4 text-white/80">“{t.quote}”</p>
              <div className="text-sm text-white/60">{t.name} • {t.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const items = [
  { id: 1, title: 'Neon Web Landing', cat: 'Web Design', img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, title: 'Bold Social Grid', cat: 'Social Media', img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, title: 'Premium Branding Kit', cat: 'Branding', img: 'https://images.unsplash.com/photo-1551281044-8d8d0d8d0d8d?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, title: 'Product Promo Edit', cat: 'Social Media', img: 'https://images.unsplash.com/photo-1555696958-c5049ca2fdb5?q=80&w=1200&auto=format&fit=crop' },
  { id: 5, title: '3D Visual Tiles', cat: 'Web Design', img: 'https://images.unsplash.com/photo-1581276879432-15e50529f34b?q=80&w=1200&auto=format&fit=crop' },
]

const filters = ['All', 'Web Design', 'Branding', 'Social Media']

export default function Work() {
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? items : items.filter(i => i.cat === filter)

  return (
    <section id="work" className="relative bg-[#0D0D0D] py-24 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(500px_200px_at_80%_10%,rgba(0,255,209,0.06),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-center justify-between gap-4">
          <h2 className="text-3xl font-bold">Work</h2>
          <div className="flex flex-wrap gap-2">
            {filters.map(f => (
              <button key={f} onClick={() => setFilter(f)} className={`rounded-full border px-3 py-1 text-sm transition ${filter===f ? 'border-[#00FFD1] text-[#00FFD1] bg-[#00FFD1]/10' : 'border-white/10 text-white/70 hover:border-white/20'}`}>
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filtered.map(card => (
              <motion.div
                key={card.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group overflow-hidden rounded-xl border border-white/10 bg-white/5"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={card.img} alt={card.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100" style={{boxShadow:'inset 0 0 120px rgba(0,255,209,0.25)'}} />
                </div>
                <div className="flex items-center justify-between p-4">
                  <div>
                    <div className="text-sm text-[#00FFD1]">{card.cat}</div>
                    <div className="font-medium">{card.title}</div>
                  </div>
                  <div className="h-2 w-2 rounded-full bg-[#00FFD1] shadow-[0_0_12px_2px_rgba(0,255,209,0.8)]" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

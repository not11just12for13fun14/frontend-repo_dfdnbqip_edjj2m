import React from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageCircle } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative bg-[#0D0D0D] py-24 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_300px_at_90%_20%,rgba(0,255,209,0.06),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="mb-8 text-3xl font-bold">Contact</h2>
        <div className="grid gap-10 md:grid-cols-2">
          <form className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="grid gap-4">
              <input className="rounded-md border border-white/10 bg-[#0D0D0D] p-3 text-sm outline-none placeholder:text-white/40 focus:border-[#00FFD1]" placeholder="Name" />
              <input className="rounded-md border border-white/10 bg-[#0D0D0D] p-3 text-sm outline-none placeholder:text-white/40 focus:border-[#00FFD1]" placeholder="Email" />
              <textarea rows={4} className="rounded-md border border-white/10 bg-[#0D0D0D] p-3 text-sm outline-none placeholder:text-white/40 focus:border-[#00FFD1]" placeholder="Tell us about your project" />
              <button type="button" className="rounded-md border border-[#00FFD1]/40 bg-[#00FFD1]/10 px-4 py-2 text-[#00FFD1] transition hover:border-[#00FFD1] hover:bg-[#00FFD1]/20">Send</button>
            </div>
          </form>
          <div className="space-y-6">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 text-white/70">Let’s create something cinematic. Reach out via:</div>
              <div className="flex flex-wrap gap-3">
                <a href="https://wa.me/917300472358" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#00FFD1]/40 bg-[#00FFD1]/10 px-4 py-2 text-[#00FFD1] transition hover:border-[#00FFD1] hover:bg-[#00FFD1]/20"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
                <a href="mailto:kashishchoudhary218@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white transition hover:border-white/20 hover:bg-white/10"><Mail className="h-4 w-4" /> Email</a>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-0 overflow-hidden">
              <iframe title="Jaipur" width="100%" height="260" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=jaipur&output=embed"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

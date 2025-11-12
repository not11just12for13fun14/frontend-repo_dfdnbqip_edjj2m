import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Mail, MessageCircle } from 'lucide-react'

const whatsappLink = 'https://wa.me/917300472358?text=Hi%20Kashu%20Digital%202%2C%20I%27d%20love%20to%20talk%20about%20a%20project.'
const emailLink = 'mailto:kashishchoudhary218@gmail.com?subject=Project%20Inquiry%20-%20Kashu%20Digital%202'

export default function Hero() {
  return (
    <section id="home" className="relative h-[100svh] w-full overflow-hidden bg-[#0D0D0D]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,209,0.10),transparent_35%),radial-gradient(circle_at_70%_80%,rgba(0,255,209,0.08),transparent_30%)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-widest text-white/70 backdrop-blur-sm"
        >
          FUTURISTIC • MINIMAL • CINEMATIC
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9 }}
          className="mb-4 text-5xl font-extrabold text-white sm:text-6xl md:text-7xl font-display"
          style={{ textShadow: '0 0 20px rgba(0,255,209,0.45), 0 0 48px rgba(0,255,209,0.25)' }}
        >
          Kashu Digital 2
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          className="mx-auto max-w-2xl text-base text-white/70 sm:text-lg font-body"
        >
          Digital brand and creative studio based in Jaipur. We craft cinematic, modern experiences with neon precision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.9 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="group">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#00FFD1]/40 bg-[#00FFD1]/10 px-6 py-3 text-[#00FFD1] transition-all duration-300 hover:border-[#00FFD1] hover:bg-[#00FFD1]/20 hover:shadow-[0_0_30px_rgba(0,255,209,0.35)]">
              <MessageCircle className="h-5 w-5" /> WhatsApp
            </span>
          </a>
          <a href={emailLink} className="group">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]">
              <Mail className="h-5 w-5" /> Email Us
            </span>
          </a>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-0 right-0 mx-auto flex w-full max-w-7xl justify-center px-6">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/50">
          <span className="h-2 w-2 rounded-full bg-[#00FFD1] shadow-[0_0_12px_2px_rgba(0,255,209,0.8)]" />
          Scroll
        </div>
      </div>
    </section>
  )
}

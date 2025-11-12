import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative bg-[#0D0D0D] py-24 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_300px_at_10%_20%,rgba(0,255,209,0.08),transparent),radial-gradient(600px_300px_at_90%_80%,rgba(0,255,209,0.06),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="mb-6 text-3xl font-bold">About</motion.h2>
        <div className="grid gap-10 md:grid-cols-2">
          <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.1,duration:0.6}} className="text-white/70 leading-relaxed">
            We are a Jaipur-based digital brand crafting immersive experiences that feel cinematic yet minimal. From brand strategy and design to web experiences and social campaigns, we deliver with neon precision.
          </motion.p>
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.2,duration:0.6}} className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-white/50">Location</div>
                <div className="font-medium">Jaipur, India</div>
              </div>
              <div>
                <div className="text-white/50">Email</div>
                <a href="mailto:kashishchoudhary218@gmail.com" className="font-medium hover:underline">kashishchoudhary218@gmail.com</a>
              </div>
              <div>
                <div className="text-white/50">WhatsApp</div>
                <a href="https://wa.me/917300472358" className="font-medium hover:underline">+91 73004 72358</a>
              </div>
              <div>
                <div className="text-white/50">Available for</div>
                <div className="font-medium">Web, Branding, Social</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

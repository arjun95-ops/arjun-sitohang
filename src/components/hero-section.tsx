'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail, Coffee } from 'lucide-react' 
import { useAdmin } from '@/context/admin-context'

const HeroSection = () => {
  const { hero } = useAdmin()

  // 5. DEBUGGING: Log untuk memeriksa sumber gambar dari context
  // Fallback image logic
  const profileImage = hero?.image || "https://i.imgur.com/uMwYkju.jpeg";

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-purple-950/20" />
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-pink-500/20 rounded-full blur-xl floating" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-xl floating" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-500/20 rounded-full blur-xl floating" style={{ animationDelay: '4s' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 h-full w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-8 items-center h-full min-h-[80vh]"
        >
          {/* Left Column - Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Name */}
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Arjun Sitohang
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl font-medium neon-text leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {hero.tagline}
            </motion.p>

            {/* Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a
                href="https://saweria.co/nivkash"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Coffee size={18} />
                  Support My Work
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>

              <motion.button
                className="px-8 py-4 border-2 border-white/20 text-white font-medium rounded-full glassmorphism hover:border-white/40 transition-all duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector('#contact')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                <span className="flex items-center gap-2">
                  <Mail size={18} />
                  Contact Me
                </span>
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column - Profile Image */}
          <motion.div
            className="relative w-64 h-64 md:w-80 md:h-80 mx-auto lg:mx-0 lg:flex lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {/* Neon Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-1 neon-glow">
              <div className="w-full h-full rounded-full bg-black p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  {/* Menggunakan <img> standar dengan 'key' untuk memaksa re-render */}
                  <img
                    key={profileImage}
                    src={profileImage}
                    alt="Arjun Sitohang"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Orbital Dots */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-pink-500 rounded-full orbital" />
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-500 rounded-full orbital" style={{ animationDelay: '5s' }} />
            <div className="absolute top-1/2 -left-4 w-2 h-2 bg-purple-500 rounded-full orbital" style={{ animationDelay: '10s' }} />
            <div className="absolute top-1/3 -right-3 w-3 h-3 bg-cyan-500 rounded-full orbital" style={{ animationDelay: '15s' }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
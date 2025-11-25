'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { useAdmin } from '@/context/admin-context'

const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const { about } = useAdmin()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Portrait Image */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-md aspect-[4/5]">
              {/* Neon Border */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 p-1 rounded-2xl neon-glow">
                <div className="w-full h-full bg-black p-2 rounded-xl">
                  <div className="w-full h-full overflow-hidden rounded-lg">
                    <Image
                      src={about.image}
                      alt="Arjun Sitohang Portrait"
                      width={500}
                      height={625}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full opacity-20 blur-xl floating" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-20 blur-xl floating" style={{ animationDelay: '2s' }} />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <div className="space-y-4">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-white"
                variants={itemVariants}
              >
                Behind the <span className="neon-text">Code</span> & <span className="neon-text">Lens</span>
              </motion.h2>
              
              <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
                variants={itemVariants}
              />
            </div>

            <motion.p 
              className="text-gray-300 text-lg leading-relaxed"
              variants={itemVariants}
            >
              {about.text}
            </motion.p>

            <motion.div 
              className="grid grid-cols-2 gap-4 pt-4"
              variants={itemVariants}
            >
              <div className="glassmorphism p-4 rounded-lg">
                <div className="text-2xl font-bold neon-text">5+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="glassmorphism p-4 rounded-lg">
                <div className="text-2xl font-bold neon-text">50+</div>
                <div className="text-sm text-gray-400">Projects Delivered</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
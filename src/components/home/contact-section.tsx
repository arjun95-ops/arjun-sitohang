'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Mail, 
  Youtube, 
  Github, 
  Facebook, 
  Instagram, 
  Coffee 
} from 'lucide-react'

const ContactSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const socialLinks = [
    {
      name: 'Email',
      id: 'arjunsitohang5@gmail.com',
      href: 'mailto:arjunsitohang5@gmail.com',
      icon: Mail,
      color: 'group-hover:shadow-white/50 group-hover:border-white/50'
    },
    {
      name: 'YouTube',
      id: '@arjun_nivkash',
      href: 'https://www.youtube.com/@arjun_nivkash',
      icon: Youtube,
      color: 'group-hover:shadow-red-600/50 group-hover:border-red-600/50'
    },
    {
      name: 'GitHub',
      id: '@arjun95-ops',
      href: 'https://github.com/arjun95-ops',
      icon: Github,
      color: 'group-hover:shadow-gray-500/50 group-hover:border-gray-500/50'
    },
    {
      name: 'Facebook',
      id: 'arjun.k.sitohang',
      href: 'https://www.facebook.com/arjun.k.sitohang',
      icon: Facebook,
      color: 'group-hover:shadow-blue-600/50 group-hover:border-blue-600/50'
    },
    {
      name: 'Instagram',
      id: '@arjunsitohang',
      href: 'https://www.instagram.com/arjunsitohang/',
      icon: Instagram,
      color: 'group-hover:shadow-pink-600/50 group-hover:border-pink-600/50'
    },
    {
      name: 'Saweria',
      id: 'Support my work',
      href: 'https://saweria.co/nivkash',
      icon: Coffee,
      color: 'group-hover:shadow-yellow-500/50 group-hover:border-yellow-500/50'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
    <section id="contact" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="neon-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mx-auto" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate?
          </p>
        </motion.div>

        {/* Social Links Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {socialLinks.map((link, index) => {
            const IconComponent = link.icon
            return (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`group bg-[#09090B] border border-white/10 rounded-2xl p-8 transition-all duration-300 ${link.color} hover:scale-105 hover:shadow-lg`}
              >
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 p-0.5 group-hover:rotate-12 transition-transform duration-300">
                    <div className="w-full h-full bg-black rounded-lg flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Label */}
                  <h3 className="text-white font-semibold text-lg">
                    {link.name}
                  </h3>

                  {/* ID/Handle */}
                  <p className="text-gray-400 text-sm">
                    {link.id}
                  </p>
                </div>
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
'use client'

import { motion } from 'framer-motion'
import { 
  Youtube, 
  Instagram, 
  Github, 
  Facebook, 
  Mail,
  Coffee
} from 'lucide-react'

const Dock = () => {
  const socialLinks = [
    {
      name: 'YouTube',
      icon: Youtube,
      href: 'https://www.youtube.com/@arjun_nivkash',
      color: 'hover:text-red-500'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://www.instagram.com/arjunsitohang/',
      color: 'hover:text-pink-500'
    },
    {
      name: 'Saweria',
      icon: Coffee,
      href: 'https://saweria.co/nivkash',
      color: 'hover:text-yellow-500'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/arjun95-ops',
      color: 'hover:text-gray-400'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      href: 'https://www.facebook.com/arjun.k.sitohang',
      color: 'hover:text-blue-500'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:arjunsitohang5@gmail.com',
      color: 'hover:text-green-500'
    }
  ]

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40"
    >
      <div className="glassmorphism px-6 py-3 rounded-full border border-white/20">
        <div className="flex items-center space-x-6">
          {socialLinks.map((link, index) => {
            const IconComponent = link.icon
            return (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 ${link.color} transition-colors duration-200`}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                title={link.name}
              >
                <IconComponent size={20} />
              </motion.a>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}

export default Dock
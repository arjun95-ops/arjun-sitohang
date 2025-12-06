'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Youtube, Instagram, Github, Facebook, Mail, Coffee } from 'lucide-react';
import { useState } from 'react';

const socialLinks = [
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@arjun_nivkash',
    icon: Youtube,
    color: '#FF0000' // YouTube red
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/arjunsitohang/',
    icon: Instagram,
    color: '#E4405F' // Instagram pink
  },
  {
    name: 'GitHub',
    url: 'https://github.com/arjun95-ops',
    icon: Github,
    color: '#333333' // GitHub dark gray
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/arjun.k.sitohang',
    icon: Facebook,
    color: '#1877F2' // Facebook blue
  },
  {
    name: 'Email',
    url: 'mailto:arjunsitohang95@gmail.com',
    icon: Mail,
    color: '#EA4335' // Gmail red
  },
  {
    name: 'Saweria',
    url: 'https://saweria.co/nivkash',
    icon: Coffee,
    color: '#FF6B35' // Orange for coffee/donation
  }
];

const FloatingDock = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40">
      <div className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-black/20 backdrop-blur-xl border border-white/10 rounded-full shadow-lg">
        {socialLinks.map((link, index) => {
          const Icon = link.icon;
          const isHovered = hoveredIndex === index;
          
          return (
            <div key={link.name} className="relative">
              {/* Tooltip */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 text-white text-xs rounded-md whitespace-nowrap z-50"
                  >
                    {link.name}
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Icon Container */}
              <motion.a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-zinc-400 transition-colors duration-300"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  color: isHovered ? '#FFFFFF' : '#A1A1AA'
                }}
              >
                {/* Glow Effect */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      className="absolute inset-0 rounded-full blur-md"
                      style={{
                        backgroundColor: link.color,
                        opacity: 0.4
                      }}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1.3, opacity: 0.4 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </AnimatePresence>
                
                <Icon size={14} className="sm:hidden" />
                <Icon size={16} className="hidden sm:block md:hidden" />
                <Icon size={18} className="hidden md:block lg:hidden" />
                <Icon size={20} className="hidden lg:block" />
              </motion.a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FloatingDock;
'use client';

import { motion } from 'framer-motion';
import { Youtube, Instagram, Github, Facebook, Mail, Coffee, ArrowRight, ExternalLink } from 'lucide-react';

const ConnectSection = () => {
  const socialLinks = [
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@arjun_nivkash',
      icon: Youtube,
      brandColor: '#FF0000', // YouTube red
      glowColor: 'rgba(255, 0, 0, 0.4)'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/arjunsitohang/',
      icon: Instagram,
      brandColor: '#E1306C', // Instagram pink-purple gradient
      glowColor: 'rgba(225, 48, 108, 0.4)'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/arjun95-ops',
      icon: Github,
      brandColor: '#FFFFFF', // GitHub white
      glowColor: 'rgba(255, 255, 255, 0.4)'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/arjun.k.sitohang',
      icon: Facebook,
      brandColor: '#1877F2', // Facebook blue
      glowColor: 'rgba(24, 119, 242, 0.4)'
    },
    {
      name: 'Email',
      url: 'mailto:arjunsitohang95@gmail.com',
      icon: Mail,
      brandColor: '#00FFFF', // Cyan
      glowColor: 'rgba(0, 255, 255, 0.4)'
    },
    {
      name: 'Saweria',
      url: 'https://saweria.co/nivkash',
      icon: Coffee,
      brandColor: '#FAAE2B', // Yellow/Orange
      glowColor: 'rgba(250, 174, 43, 0.4)'
    }
  ];

  return (
    <section id="connect" className="py-16 lg:py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 neon-text">
            Get In Touch
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" 
            style={{ background: 'linear-gradient(135deg, #FF0072, #9B60F5, #3EA6FF)' }} />
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Let's collaborate on your next project! Whether you need a stunning website, a user-friendly application, or creative digital solutions, I'm here to help bring your vision to life.
          </p>
        </motion.div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="group relative flex flex-col items-center justify-center p-6 bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl transition-all duration-300 hover:shadow-xl"
                style={{
                  boxShadow: `0 4px 20px ${link.glowColor}`,
                  borderColor: `${link.brandColor}20`
                }}
              >
                {/* Icon Container */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${link.brandColor}20, ${link.brandColor}40)`,
                    color: link.brandColor
                  }}
                >
                  <Icon size={32} className="sm:hidden" />
                  <Icon size={40} className="hidden sm:block lg:hidden" />
                  <Icon size={48} className="hidden lg:block" />
                </div>
                
                {/* Label */}
                <h3 className="text-white font-semibold text-sm sm:text-base lg:text-lg mb-3 group-hover:text-opacity-100 transition-opacity duration-300"
                  style={{ textShadow: `0 0 10px ${link.glowColor}` }}
                >
                  {link.name}
                </h3>
                
                {/* Connect Button */}
                <div className="flex items-center justify-center">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-0.5 rounded-full"
                    style={{ background: link.brandColor }}
                  />
                </div>
                
                {/* Hover Arrow Indicator */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute -bottom-2 text-white"
                  style={{ color: link.brandColor }}
                >
                  <ArrowRight size={20} className="sm:hidden" />
                  <ArrowRight size={24} className="hidden sm:block" />
                </motion.div>
              </motion.a>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-card rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Let's Create Something Amazing Together</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm always excited to work on new projects and collaborate with creative minds. 
              Reach out through any of the platforms above, and let's discuss how we can bring your ideas to life.
            </p>
            <motion.a
              href="mailto:arjunsitohang95@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-white neon-glow hover-glow transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #FF0072, #9B60F5, #3EA6FF)'
              }}
            >
              <Mail className="mr-2 h-5 w-5" />
              Send Me a Message
              <ExternalLink className="ml-2 h-5 w-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConnectSection;
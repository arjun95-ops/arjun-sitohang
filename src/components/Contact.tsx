'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Youtube, Instagram, Facebook, ExternalLink } from 'lucide-react';
import portfolioData from '@/constants';

const Contact = () => {
  const { contact, socialLinks } = portfolioData;

  const socialItems = [
    {
      name: 'Email',
      href: socialLinks.email,
      icon: Mail,
      color: 'from-blue-500 to-purple-500',
      description: 'Get in touch directly'
    },
    {
      name: 'GitHub',
      href: socialLinks.github,
      icon: Github,
      color: 'from-gray-600 to-gray-800',
      description: 'Check out my code'
    },
    {
      name: 'YouTube',
      href: socialLinks.youtube,
      icon: Youtube,
      color: 'from-red-500 to-pink-500',
      description: 'Watch my content'
    },
    {
      name: 'Instagram',
      href: socialLinks.instagram,
      icon: Instagram,
      color: 'from-purple-500 to-pink-500',
      description: 'Follow my journey'
    },
    {
      name: 'Facebook',
      href: socialLinks.facebook,
      icon: Facebook,
      color: 'from-blue-600 to-blue-800',
      description: 'Connect with me'
    },
    {
      name: 'Saweria',
      href: socialLinks.saweria,
      icon: ExternalLink,
      color: 'from-green-500 to-teal-500',
      description: 'Support my work'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-black" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 neon-text">
            {contact.title}
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" 
            style={{ background: 'linear-gradient(135deg, #FF0072, #9B60F5, #3EA6FF)' }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {contact.description}
          </p>
        </motion.div>

        {/* Social Links Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {socialItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5
                }}
                className="glass-card rounded-xl p-6 hover-glow transition-all duration-300 group"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${item.color} group-hover:animate-pulse transition-all duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Name */}
                  <h3 className="text-white font-semibold text-lg mb-2">{item.name}</h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                  
                  {/* External link indicator */}
                  <ExternalLink className="h-4 w-4 text-gray-500 group-hover:text-white transition-colors duration-300" />
                </div>
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
          className="text-center"
        >
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto neon-border">
            <h3 className="text-2xl font-bold text-white mb-4">Let's Create Something Amazing</h3>
            <p className="text-gray-300 mb-6">
              I'm always excited to work on new projects and collaborate with creative minds. 
              Whether you have a specific project in mind or just want to chat about technology and design, feel free to reach out!
            </p>
            <motion.a
              href={socialLinks.email}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 rounded-full font-semibold text-white neon-glow hover-glow transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #FF0072, #9B60F5, #3EA6FF)'
              }}
            >
              <Mail className="mr-2 h-5 w-5" />
              Send Me a Message
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="mt-20 py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Arjun Sitohang. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Built with React, Next.js & lots of ☕
            </p>
          </motion.div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
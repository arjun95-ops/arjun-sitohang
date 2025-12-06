'use client';

import { motion } from 'framer-motion';
import { Code, Palette, Zap } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';

const About = () => {
  const { about, hero } = usePortfolio();

  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices"
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "Crafting beautiful, intuitive user interfaces"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed and seamless user experience"
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 neon-text">
            {about.title}
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 mx-auto rounded-full"
            style={{ background: 'linear-gradient(135deg, #FF0072, #9B60F5, #3EA6FF)' }} />
        </motion.div>

        {/* Mobile: Stacked Layout */}
        <div className="flex flex-col lg:hidden gap-8 items-center">
          {/* Image - Top on Mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-1 w-full max-w-sm"
          >
            <div className="relative rounded-2xl overflow-hidden neon-glow">
              <img
                src={about.image}
                alt={hero.name}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-2 -left-2 glass-card rounded-lg px-2 py-1 text-xs neon-border"
            >
              <span className="text-white font-semibold">5+ Years</span>
            </motion.div>

            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-2 -right-2 glass-card rounded-lg px-2 py-1 text-xs neon-border"
            >
              <span className="text-white font-semibold">50+ Projects</span>
            </motion.div>
          </motion.div>

          {/* Content - Bottom on Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-2 text-center space-y-6"
          >
            <p className="text-gray-300 text-base leading-relaxed">
              {about.description}
            </p>

            {/* Features Grid - Mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-xl p-4 hover-glow transition-all duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-3"
                    style={{ background: 'linear-gradient(135deg, #FF0072, #9B60F5)' }}
                  >
                    <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-sm sm:text-base mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Desktop: Side-by-Side Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden neon-glow">
              <img
                src={about.image}
                alt={hero.name}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 glass-card rounded-lg px-4 py-2 neon-border"
            >
              <span className="text-white font-semibold text-sm">5+ Years</span>
            </motion.div>

            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -right-4 glass-card rounded-lg px-4 py-2 neon-border"
            >
              <span className="text-white font-semibold text-sm">50+ Projects</span>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {about.description}
            </p>

            {/* Features Grid - Desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-xl p-6 hover-glow transition-all duration-300"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: 'linear-gradient(135deg, #FF0072, #9B60F5)' }}
                  >
                    <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-sm sm:text-base lg:text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
'use client';

import { motion } from 'framer-motion';
import { ArrowRight, FolderOpen } from 'lucide-react';
import Link from 'next/link';
import portfolioData from '@/constants';
import { usePortfolio } from '@/context/PortfolioContext';

const MotionLink = motion(Link);

const Hero = () => {
  const { hero } = usePortfolio();
  const { socialLinks } = portfolioData;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-purple-950/20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Mobile: Stacked Layout */}
        <div className="flex flex-col lg:hidden gap-8 items-center justify-center text-center">
          {/* Profile Image - Top on Mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative order-1"
          >
            {/* Glowing ring animation */}
            <div className="absolute inset-0 rounded-full animate-glow pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, #FF0072, #9B60F5, #3EA6FF)',
                filter: 'blur(20px)',
                opacity: 0.6
              }}
            />

            {/* Profile image */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden neon-border">
              <img
                src={hero.image}
                alt={hero.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating animation */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 rounded-full neon-glow flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #FF0072, #9B60F5)'
              }}
            >
              <span className="text-white font-bold text-sm sm:text-lg">AS</span>
            </motion.div>
          </motion.div>

          {/* Text Content - Bottom on Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 space-y-4 sm:space-y-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              {hero.name}
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold neon-text">
              {hero.role}
            </h2>

            <p className="text-gray-300 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
              Bridging the gap between code and creativity to create stunning digital experiences that inspire and engage.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4">
              <motion.a
                href={socialLinks.saweria}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-white neon-glow hover-glow transition-all duration-300 text-sm sm:text-base"
                style={{
                  background: 'linear-gradient(135deg, #FF0072, #9B60F5, #3EA6FF)'
                }}
              >
                Support My Work
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </motion.a>

              <MotionLink
                href="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-white neon-border hover-glow transition-all duration-300 text-sm sm:text-base cursor-pointer"
              >
                <FolderOpen className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                View My Projects
              </MotionLink>
            </div>
          </motion.div>
        </div>

        {/* Desktop: Side-by-Side Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h1 className="text-5xl xl:text-6xl font-bold text-white mb-4">
              <span className="block">{hero.name}</span>
            </h1>
            <h2 className="text-2xl xl:text-3xl font-semibold mb-8 neon-text">
              {hero.role}
            </h2>

            <p className="text-gray-300 text-lg mb-8 max-w-2xl leading-relaxed">
              Bridging the gap between code and creativity to create stunning digital experiences that inspire and engage.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <motion.a
                href={socialLinks.saweria}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-white neon-glow hover-glow transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #FF0072, #9B60F5, #3EA6FF)'
                }}
              >
                Support My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.a>

              <MotionLink
                href="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-white neon-border hover-glow transition-all duration-300 cursor-pointer"
              >
                <FolderOpen className="mr-2 h-5 w-5" />
                View My Projects
              </MotionLink>
            </div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-end"
          >
            <div className="relative">
              {/* Glowing ring animation */}
              <div className="absolute inset-0 rounded-full animate-glow pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, #FF0072, #9B60F5, #3EA6FF)',
                  filter: 'blur(20px)',
                  opacity: 0.6
                }}
              />

              {/* Profile image */}
              <div className="relative w-80 h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden neon-border">
                <img
                  src={hero.image}
                  alt={hero.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating animation */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full neon-glow flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #FF0072, #9B60F5)'
                }}
              >
                <span className="text-white font-bold text-lg">AS</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - Hidden on mobile, visible on desktop */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="hidden lg:block absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full neon-border p-1">
          <div className="w-1 h-3 bg-gradient-to-b from-neon-pink to-neon-purple rounded-full mx-auto animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
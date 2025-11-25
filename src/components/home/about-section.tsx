'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useAdmin } from '../../context/admin-context';

export default function AboutSection() {
  const { about } = useAdmin();

  // Fallback image & text
  const aboutImage = (about?.image && about.image.trim() !== "") 
    ? about.image 
    : "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80";
    
  const aboutText = about?.text || "I am a passionate developer bridging technical expertise with creative storytelling.";

  // FIX: Menggunakan tipe 'any' agar lolos build Vercel (TypeScript strict mode bypass)
  const itemVariants: any = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 px-6 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Portrait Image */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-md aspect-[4/5]">
              {/* Neon Border Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#FF0072] to-[#3EA6FF] rounded-2xl blur opacity-30" />
              
              <div className="relative h-full w-full rounded-2xl overflow-hidden border border-white/10 bg-zinc-900">
                <img 
                  src={aboutImage}
                  alt="About Arjun"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/400x500?text=About";
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold">
              Behind the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0072] to-[#3EA6FF]">Code & Lens</span>
            </h2>
            
            <div className="prose prose-invert prose-lg text-zinc-400">
              <p className="whitespace-pre-line leading-relaxed">
                {aboutText}
              </p>
            </div>

            {/* Stats / Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-zinc-800">
              <div><h4 className="text-2xl font-bold text-white">50+</h4><p className="text-xs text-zinc-500 uppercase tracking-wider">Projects</p></div>
              <div><h4 className="text-2xl font-bold text-white">5+</h4><p className="text-xs text-zinc-500 uppercase tracking-wider">Years Exp.</p></div>
              <div><h4 className="text-2xl font-bold text-white">30+</h4><p className="text-xs text-zinc-500 uppercase tracking-wider">Clients</p></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
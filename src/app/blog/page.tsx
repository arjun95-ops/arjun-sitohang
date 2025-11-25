'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useAdmin } from '../../context/admin-context';
import { Search, ArrowRight, Calendar } from 'lucide-react';

export default function BlogPage() {
  const { posts } = useAdmin();

  // Menggunakan 'any' untuk menghindari error TypeScript strict saat build
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold">
            Writing & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0072] to-[#3EA6FF]">Thoughts</span>
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Insights, tutorials, and stories from my journey in development, creative media, and technology.
          </p>
          <div className="max-w-md mx-auto mt-8 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-zinc-500" />
            </div>
            <input type="text" placeholder="Search articles..." className="block w-full pl-10 pr-3 py-3 border border-zinc-800 rounded-full leading-5 bg-zinc-900/50 text-zinc-300 placeholder-zinc-500 focus:outline-none focus:border-[#FF0072] focus:ring-1 focus:ring-[#FF0072] sm:text-sm transition-colors" />
          </div>
        </div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts && posts.length > 0 ? (
            posts.map((post) => (
              <motion.article key={post.id} variants={itemVariants} className="group relative flex flex-col h-full bg-[#09090B] border border-white/10 rounded-2xl overflow-hidden hover:border-[#FF0072]/50 transition-colors duration-300">
                <div className="relative aspect-video overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] to-transparent z-10 opacity-60" />
                  <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80"; }} />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white">{post.category}</span>
                  </div>
                </div>
                <div className="flex-1 p-6 flex flex-col">
                  <div className="flex items-center gap-2 text-xs text-zinc-500 mb-3">
                    <Calendar size={14} /><span>{post.date}</span>
                  </div>
                  <h2 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-[#3EA6FF] transition-colors">{post.title}</h2>
                  <p className="text-zinc-400 text-sm line-clamp-3 mb-6 flex-1">{post.excerpt}</p>
                  <a href={`/blog/${post.id}`} className="inline-flex items-center text-sm font-bold text-[#FF0072] hover:text-white transition-colors group/link cursor-pointer">Read Article <ArrowRight size={16} className="ml-2 transform group-hover/link:translate-x-1 transition-transform" /></a>
                </div>
              </motion.article>
            ))
          ) : (
            <div className="col-span-full text-center py-20"><p className="text-zinc-500">No posts found. Add some from the Admin Dashboard.</p></div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Download, ExternalLink, Code, Palette, Globe, Smartphone, Folder, Zap } from 'lucide-react';
import { projects } from '@/lib/projectData';

const ProjectDownloads = () => {
  const navigateToHome = () => {
    window.history.back();
  };





  const getCategoryColor = (index: number) => {
    const colors = [
      'from-pink-500 to-purple-500',
      'from-purple-500 to-blue-500',
      'from-blue-500 to-cyan-500',
      'from-cyan-500 to-green-500',
      'from-green-500 to-yellow-500',
      'from-yellow-500 to-orange-500',
      'from-orange-500 to-red-500'
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 glass-card border-b border-white/10 backdrop-blur-lg"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl sm:text-2xl font-bold neon-text">
              Project Archives
            </h1>
            <button
              onClick={navigateToHome}
              className="inline-flex items-center px-4 py-2 rounded-lg glass-card hover-glow transition-all duration-300 text-white text-sm sm:text-base"
            >
              <ArrowLeft className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Back to Home
            </button>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Download Source Code
            </h2>
            <div className="w-24 h-1 mx-auto rounded-full"
              style={{ background: 'linear-gradient(135deg, #FF0072, #9B60F5, #3EA6FF)' }} />
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {projects.map((project, index) => {
              const Icon = project.icon;
              const colorClass = getCategoryColor(index);

              return (
                <motion.a
                  key={project.id}
                  href={project.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  className="group relative block bg-[#09090B] border border-white/5 rounded-xl p-6 hover:border-white/20 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 0, 114, 0.1), rgba(62, 166, 255, 0.1))',
                      border: '1px solid rgba(255, 0, 114, 0.3)'
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        {project.image ? (
                          <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-white/10">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                        ) : (
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br ${colorClass} shrink-0`}>
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                        )}
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                            {project.title}
                          </h3>
                          <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-white/10 text-gray-300">
                            {project.category}
                          </span>
                        </div>
                      </div>

                      {/* Download Button */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-300 text-white"
                      >
                        <Download className="h-4 w-4 sm:h-5 sm:w-5" />
                      </motion.button>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Action Footer */}
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xs text-gray-500">
                        Click anywhere to download
                      </span>
                      <ExternalLink className="h-4 w-4 text-gray-500" />
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12"
          >
            <div className="glass-card rounded-2xl p-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-white">
                    {projects.length}
                  </div>
                  <div className="text-sm text-gray-400">
                    Projects Available
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-3xl font-bold text-white">
                    10+
                  </div>
                  <div className="text-sm text-gray-400">
                    Categories
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-3xl font-bold text-white">
                    100%
                  </div>
                  <div className="text-sm text-gray-400">
                    Open Source
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-3xl font-bold text-white">
                    <Zap className="h-8 w-8 mx-auto text-neon-pink" />
                  </div>
                  <div className="text-sm text-gray-400">
                    High Performance
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDownloads;
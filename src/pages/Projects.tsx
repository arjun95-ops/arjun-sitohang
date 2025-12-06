'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Download, ExternalLink, Code } from 'lucide-react';
import { PROJECTS } from '@/constants';

const Projects = () => {
  const navigateToHome = () => {
    if ((window as any).navigate) {
      (window as any).navigate('/');
    }
  };

  const handleDownload = (downloadLink: string, projectTitle: string) => {
    // Simulate download - in a real app, this would trigger an actual file download
    console.log(`Downloading ${projectTitle} from ${downloadLink}`);
    // For demo purposes, we'll create a simple alert
    alert(`Download started for ${projectTitle}! (This is a demo - no actual file will be downloaded)`);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Sticky Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 glass-card border-b border-white/10 backdrop-blur-lg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold neon-text">
              My Code Archives
            </h1>
            <button 
              onClick={navigateToHome}
              className="inline-flex items-center px-3 sm:px-4 py-2 sm:py-3 rounded-lg glass-card hover-glow transition-all duration-300 text-white text-sm sm:text-base"
            >
              <ArrowLeft className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Back to Home
            </button>
          </div>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="glass-card rounded-2xl overflow-hidden hover-glow transition-all duration-300 bg-[#09090B] border-white/10"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Project type badge */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 glass-card rounded-lg px-2 sm:px-3 py-1">
                  <div className="flex items-center text-white">
                    <Code className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                    <span className="text-xs font-medium">Project</span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 sm:px-3 py-1 rounded-full text-xs font-medium neon-border"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 0, 114, 0.1), rgba(155, 96, 245, 0.1))',
                        borderColor: 'rgba(255, 0, 114, 0.3)',
                        color: '#fff'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleDownload(project.downloadLink, project.title)}
                    className="flex-1 inline-flex items-center justify-center px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-semibold text-white transition-all duration-300 text-sm sm:text-base"
                    style={{
                      background: 'linear-gradient(135deg, #FF0072, #9B60F5, #3EA6FF)'
                    }}
                  >
                    <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Download Source
                  </motion.button>
                  
                  <motion.a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 inline-flex items-center justify-center px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-semibold text-white neon-border hover-glow transition-all duration-300 text-sm sm:text-base"
                  >
                    <ExternalLink className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    View Repository
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="glass-card rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">More Projects Coming Soon!</h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              I'm constantly working on new and exciting projects. Check back often for updates or follow me on social media to stay in touch with my latest work.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
'use client';

import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { useState } from 'react';
import portfolioData from '@/constants';

const Gallery = () => {
  const { gallery } = portfolioData;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="gallery" className="py-12 sm:py-16 lg:py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 neon-text">
            Featured Gallery
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 mx-auto rounded-full" 
            style={{ background: 'linear-gradient(135deg, #FF0072, #9B60F5, #3EA6FF)' }} />
        </motion.div>

        {/* Main Gallery Carousel - Hidden on small mobile, visible on md+ */}
        <div className="hidden md:block">
          <div className="relative max-w-2xl lg:max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Main Image */}
              <div className="relative aspect-[4/5] sm:aspect-[16/9] rounded-2xl overflow-hidden neon-glow">
                <img
                  src={gallery[currentIndex]}
                  alt={`Gallery image ${currentIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Image counter */}
                <div className="absolute top-4 right-4 glass-card rounded-lg px-3 py-1">
                  <span className="text-white text-sm font-medium">
                    {currentIndex + 1} / {gallery.length}
                  </span>
                </div>
              </div>

              {/* Navigation buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-card flex items-center justify-center hover-glow transition-all duration-300 text-white"
              >
                <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-card flex items-center justify-center hover-glow transition-all duration-300 text-white"
              >
                <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </motion.div>

            {/* Thumbnail navigation */}
            <div className="flex justify-center items-center gap-2 mt-6 sm:mt-8">
              {gallery.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-6 sm:w-8' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  style={{
                    background: index === currentIndex 
                      ? 'linear-gradient(135deg, #FF0072, #9B60F5, #3EA6FF)' 
                      : undefined
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Gallery Grid - Visible only on small screens */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="md:hidden"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="relative aspect-[4/5] rounded-xl overflow-hidden neon-border cursor-pointer"
                onClick={() => goToSlide(index)}
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex items-center text-white">
                    <Camera className="h-4 w-4 mr-2" />
                    <span className="text-xs sm:text-sm">View</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
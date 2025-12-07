'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Camera, ExternalLink, Hand } from 'lucide-react';

// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const FeaturedGallery = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const galleryImages = [
    {
      id: 1,
      title: "Modern Dashboard",
      category: "Death kid",
      url: "https://res.cloudinary.com/duhroj2yb/image/upload/v1764977609/webfoto1_mrequd.png"
    },
    {
      id: 2,
      title: "Mobile Application",
      category: "App Development",
      url: "https://res.cloudinary.com/duhroj2yb/image/upload/v1764990315/arjun22_isptux.png"
    },
    {
      id: 3,
      title: "Brand Identity",
      category: "Visual Design",
      url: "https://res.cloudinary.com/duhroj2yb/image/upload/v1764992005/arjunfriends_p92o2r.png"
    },
    {
      id: 4,
      title: "Web Experience",
      category: "Frontend Development",
      url: "https://res.cloudinary.com/duhroj2yb/image/upload/v1764991447/arjun13_yy4zah.png"
    }
     {
      id: 5,
      title: "Web Experience",
      category: "Death kid",
      url: "https://res.cloudinary.com/duhroj2yb/image/upload/v1765081671/deathkid_bqaoyk.png"
    }
  ];

  // Swiper configuration
  const swiperConfig = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
      dynamicBullets: true,
    },
    navigation: true,
    modules: [Pagination, Autoplay, Navigation],
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  };

  if (!isClient) {
    // Return a simple placeholder while Swiper loads
    return (
      <section id="gallery" className="py-12 sm:py-16 lg:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 neon-text">
              Selected Works
            </h2>
            <div className="w-16 sm:w-20 lg:w-24 h-1 mx-auto rounded-full"
              style={{ background: 'linear-gradient(135deg, #FF0072, #9B60F5, #3EA6FF)' }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div key={image.id} className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

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
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 neon-text">
            Selected Works
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 mx-auto rounded-full"
            style={{ background: 'linear-gradient(135deg, #FF0072, #9B60F5, #3EA6FF)' }} />
        </motion.div>

        {/* Swiper Container */}
        <div className="relative group/swiper">
          <Swiper
            {...swiperConfig}
            className="featured-gallery-swiper !pb-12"
          >
            {galleryImages.map((image) => (
              <SwiperSlide key={image.id}>
                <div className="group relative h-full">
                  {/* Card Container */}
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:shadow-2xl">
                    {/* Image */}
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      {/* Category Badge */}
                      <div className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 glass-card"
                        style={{
                          background: 'linear-gradient(135deg, rgba(255, 0, 114, 0.2), rgba(62, 166, 255, 0.2))',
                          color: '#FFFFFF'
                        }}
                      >
                        {image.category}
                      </div>

                      {/* Title */}
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-white font-bold text-lg lg:text-xl mb-2"
                      >
                        {image.title}
                      </motion.h3>

                      {/* View Button */}
                      <motion.button
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="inline-flex items-center px-4 py-2 rounded-lg glass-card hover-glow transition-all duration-300 text-white text-sm"
                      >
                        <Camera className="mr-2 h-4 w-4" />
                        View Project
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Hover Border Glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      border: '2px solid transparent',
                      background: 'linear-gradient(#000000, #000000) padding-box, linear-gradient(135deg, #FF0072, #9B60F5, #3EA6FF) border-box',
                      boxShadow: '0 0 20px rgba(255, 0, 114, 0.1)'
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Mobile Swipe Hint */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex md:hidden items-center justify-center gap-2 mt-4 text-gray-400 text-sm"
          >
            <Hand className="w-4 h-4 animate-pulse" />
            <span className="animate-pulse">Swipe to explore</span>
          </motion.div>
        </div>

        {/* Custom Pagination & Navigation Styles */}
        <style jsx global>{`
          .featured-gallery-swiper .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
            background: rgba(255, 255, 255, 0.3);
            opacity: 1;
            border-radius: 50%;
            transition: all 0.3s ease;
          }
        
          .featured-gallery-swiper .swiper-pagination-bullet-active {
            background: linear-gradient(135deg, #FF0072, #9B60F5, #3EA6FF);
            transform: scale(1.5);
            box-shadow: 0 0 10px rgba(255, 0, 114, 0.5);
            width: 10px;
            height: 10px;
          }

          .featured-gallery-swiper .swiper-button-next,
          .featured-gallery-swiper .swiper-button-prev {
            color: rgba(255, 255, 255, 0.7);
            width: 40px;
            height: 40px;
            background: rgba(0, 0, 0, 0.3);
            border-radius: 50%;
            backdrop-filter: blur(4px);
            transition: all 0.3s ease;
          }

          .featured-gallery-swiper .swiper-button-next::after,
          .featured-gallery-swiper .swiper-button-prev::after {
            font-size: 18px;
            font-weight: bold;
          }

          .featured-gallery-swiper .swiper-button-next:hover,
          .featured-gallery-swiper .swiper-button-prev:hover {
             color: #fff;
             background: rgba(0, 0, 0, 0.6);
             box-shadow: 0 0 15px rgba(255, 0, 114, 0.3);
          }
        
          @media (min-width: 640px) {
            .featured-gallery-swiper .swiper-pagination-bullet {
              width: 10px;
              height: 10px;
            }
             .featured-gallery-swiper .swiper-pagination-bullet-active {
              width: 12px;
              height: 12px;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default FeaturedGallery;
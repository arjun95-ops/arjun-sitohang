'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { useAdmin } from '@/context/admin-context'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const FeaturedGallery = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const { gallery } = useAdmin()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <section id="gallery" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="neon-text">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mx-auto" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A curated collection of moments captured through the lens, showcasing the beauty in everyday life and extraordinary experiences.
          </p>
        </motion.div>

        {/* Swiper Gallery */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet !bg-white/50 !w-2 !h-2',
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-gradient-to-r !from-pink-500 !to-purple-500 !w-8 !h-2 !rounded-full',
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                centeredSlides: false,
              },
              768: {
                slidesPerView: 2,
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 3,
                centeredSlides: false,
              },
              1280: {
                slidesPerView: 3,
                centeredSlides: false,
                spaceBetween: 40,
              }
            }}
            className="featured-swiper !pb-16"
          >
            {gallery.map((item, index) => (
              <SwiperSlide key={item.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-2xl glassmorphism p-1 h-full">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-black/50">
                      {/* Image */}
                      <Image
                        src={item.url}
                        alt={item.title}
                        width={400}
                        height={500}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <div className="space-y-2">
                          <span className="inline-block px-3 py-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-medium rounded-full">
                            {item.category}
                          </span>
                          <h3 className="text-white font-bold text-lg">{item.title}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev !left-4 !top-1/2 !-translate-y-1/2 !w-12 !h-12 !bg-white/10 !backdrop-blur-md !border !border-white/20 !rounded-full after:!text-white after:!text-sm hover:!bg-white/20 transition-all duration-300" />
          <div className="swiper-button-next !right-4 !top-1/2 !-translate-y-1/2 !w-12 !h-12 !bg-white/10 !backdrop-blur-md !border !border-white/20 !rounded-full after:!text-white after:!text-sm hover:!bg-white/20 transition-all duration-300" />
        </motion.div>
      </div>

      <style jsx>{`
        .featured-swiper .swiper-pagination {
          bottom: 0 !important;
        }
        
        .featured-swiper .swiper-pagination-bullet {
          transition: all 0.3s ease;
        }
        
        .featured-swiper .swiper-pagination-bullet-active {
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  )
}

export default FeaturedGallery
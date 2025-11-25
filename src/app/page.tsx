import Navbar from '@/components/layout/navbar'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/home/about-section'
import FeaturedGallery from '@/components/home/featured-gallery'
import Skills from '@/components/home/skills'
import ContactSection from '@/components/home/contact-section'
import Footer from '@/components/layout/footer'
import Dock from '@/components/ui/dock'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturedGallery />
        <Skills />
        <ContactSection />
      </main>
      
      <Footer />
      <Dock />
    </div>
  )
}
import Hero from '@/components/Hero';
import About from '@/components/About';
import FeaturedGallery from '@/components/FeaturedGallery';
import Skills from '@/components/home/Skills';
import ConnectSection from '@/components/ConnectSection';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <FeaturedGallery />
      <Skills />
      <ConnectSection />
      <Footer />
    </>
  );
};

export default Home;
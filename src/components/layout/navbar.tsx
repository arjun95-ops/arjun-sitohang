'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Skills', href: '#skills' },
    { name: 'Show My Projects', href: '/projects' },
    { name: 'Connect', href: '#connect' }
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const handleNavClick = (href: string) => {
    if (!href.startsWith('/')) {
      // It's a section, scroll to it
      scrollToSection(href);
    }
    setIsOpen(false);
  };

  // Check if a link is active
  const isActive = (href: string) => {
    if (href.startsWith('/')) {
      return pathname === href;
    }
    return false; // Section links are not "active" in the same way
  };

  // Animation variants for mobile menu items
  const mobileMenuVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const mobileItemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-card py-3' : 'bg-transparent py-5'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavClick('/')}
              className="text-xl font-bold neon-text"
            >
              AS
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="glass rounded-full px-6 py-3 relative">
              <div className="flex items-center space-x-8">
                {navItems.map((item) => {
                  const isRoute = item.href.startsWith('/');
                  const active = isActive(item.href);

                  const commonClasses = `relative px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${active
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white hover:shadow-[0_0_10px_rgba(255,0,114,0.3)]'
                    }`;

                  return isRoute ? (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={commonClasses}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                      {active && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 rounded-full"
                          style={{
                            background: 'linear-gradient(135deg, rgba(255, 0, 114, 0.2), rgba(62, 166, 255, 0.2))',
                            boxShadow: '0 0 15px rgba(255, 0, 114, 0.4)'
                          }}
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                      )}
                    </Link>
                  ) : (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      className={commonClasses}
                    >
                      {item.name}

                      {/* Active indicator with layout animation */}
                      {active && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 rounded-full"
                          style={{
                            background: 'linear-gradient(135deg, rgba(255, 0, 114, 0.2), rgba(62, 166, 255, 0.2))',
                            boxShadow: '0 0 15px rgba(255, 0, 114, 0.4)'
                          }}
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 glass-card rounded-2xl overflow-hidden"
            >
              <motion.div
                variants={mobileMenuVariants}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="flex flex-col space-y-2 p-4"
              >
                {navItems.map((item) => {
                  const isRoute = item.href.startsWith('/');
                  const active = isActive(item.href);
                  const commonClasses = `relative block w-full text-left py-3 px-4 rounded-lg transition-all duration-300 overflow-hidden ${active
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`;

                  return (
                    <motion.div key={item.name} variants={mobileItemVariants}>
                      {isRoute ? (
                        <Link
                          href={item.href}
                          className={commonClasses}
                          onClick={() => setIsOpen(false)}
                        >
                          {active && (
                            <motion.div
                              layoutId="activeMobileTab"
                              className="absolute inset-0 rounded-lg"
                              style={{
                                background: 'linear-gradient(135deg, rgba(255, 0, 114, 0.2), rgba(62, 166, 255, 0.2))',
                                border: '1px solid rgba(255, 0, 114, 0.3)'
                              }}
                            />
                          )}
                          <span className="relative z-10 text-sm sm:text-base">{item.name}</span>
                        </Link>
                      ) : (
                        <button
                          onClick={() => handleNavClick(item.href)}
                          className={commonClasses}
                        >
                          {active && (
                            <motion.div
                              layoutId="activeMobileTab"
                              className="absolute inset-0 rounded-lg"
                              style={{
                                background: 'linear-gradient(135deg, rgba(255, 0, 114, 0.2), rgba(62, 166, 255, 0.2))',
                                border: '1px solid rgba(255, 0, 114, 0.3)'
                              }}
                            />
                          )}
                          <span className="relative z-10 text-sm sm:text-base">{item.name}</span>
                        </button>
                      )}
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
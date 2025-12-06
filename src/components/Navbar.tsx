'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handlePathChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('popstate', handlePathChange);
    
    // Set initial path
    setCurrentPath(window.location.pathname);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handlePathChange);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Skills', href: '#skills' },
    { name: 'Show My Projects', href: '/projects' }
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
    if (href.startsWith('/')) {
      // It's a route, use custom navigation
      if ((window as any).navigate) {
        (window as any).navigate(href);
      }
      setIsOpen(false);
    } else {
      // It's a section, scroll to it
      scrollToSection(href);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-card py-3' : 'bg-transparent py-5'
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
            <div className="glass rounded-full px-6 py-3">
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={`text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium ${
                      item.href.startsWith('/') && currentPath === item.href ? 'text-white' : ''
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
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
        {isOpen && (
          <div className="md:hidden mt-4 glass-card rounded-2xl p-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium py-2 px-4 rounded-lg hover:bg-white/10 text-left ${
                    item.href.startsWith('/') && currentPath === item.href ? 'text-white bg-white/10' : ''
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
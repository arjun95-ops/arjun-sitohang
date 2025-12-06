'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Home from '@/pages/Home';
import Projects from '@/pages/Projects';
import FloatingDock from '@/components/ui/dock';
import Navbar from '@/components/layout/navbar';

const App = () => {
  const pathname = usePathname();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      {pathname === '/' ? <Home /> : <Projects />}
      <FloatingDock />
    </div>
  )
}

export default App;
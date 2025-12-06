'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-8 mt-20 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="font-mono text-xs text-zinc-600 tracking-wider uppercase">
            © 2025 Arjun Sitohang. All Rights Reserved.
          </p>
          <p className="font-mono text-[10px] text-zinc-800">
            Senior UI/UX Developer • Jakarta, Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
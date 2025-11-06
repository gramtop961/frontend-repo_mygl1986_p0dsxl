import React from 'react';

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gray-950/70 backdrop-blur border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-white font-semibold tracking-tight">Dani Ramdani</a>
        <nav className="hidden gap-6 text-sm text-white/80 md:flex">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#education" className="hover:text-white">Education</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <a href="#contact" className="hidden md:inline-flex items-center rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-gray-900 hover:bg-white/90">Let’s talk</a>
      </div>
    </header>
  );
};

export default Header;

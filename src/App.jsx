import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-inter text-gray-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-gray-600">
          © {new Date().getFullYear()} Dani Ramdani — Responsive & modern fullstack developer.
        </div>
      </footer>
    </div>
  );
}

export default App;

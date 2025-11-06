import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[85vh] md:min-h-[92vh] overflow-hidden bg-gray-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* overlay gradient - won't block interaction with 3D */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-gray-950/70 via-gray-950/30 to-gray-950"></div>

      <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-36">
        <div className="max-w-3xl">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
            Available for Freelance & Remote Roles
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Dani Ramdani
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/85">
            Responsive and modern fullstack developer crafting interactive, playful and high‑performance web apps — from polished UIs to robust backends.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 transition hover:bg-white/90"
            >
              View Projects
            </a>
            <a
              href="#education"
              className="inline-flex items-center rounded-md border border-white/20 bg-transparent px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Education
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

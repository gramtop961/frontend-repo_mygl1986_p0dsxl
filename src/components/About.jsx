import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              I'm a fullstack developer focused on building responsive, modern, and accessible experiences. I love combining delightful interfaces with scalable backend services and clean DevOps workflows. My toolkit includes React, TypeScript, Node.js, Python, and cloud-native tooling.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-gray-700">
              <div className="rounded-lg border border-gray-200 p-4">
                <p className="font-semibold">Frontend</p>
                <p className="mt-1 text-gray-600">React, Vite, Tailwind, Framer Motion</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-4">
                <p className="font-semibold">Backend</p>
                <p className="mt-1 text-gray-600">Node, FastAPI, MongoDB, REST</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-4">
                <p className="font-semibold">Testing</p>
                <p className="mt-1 text-gray-600">Playwright, Vitest, Pytest</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-4">
                <p className="font-semibold">Ops</p>
                <p className="mt-1 text-gray-600">Docker, CI/CD, Cloud</p>
              </div>
            </div>
          </div>
          <div className="md:pl-10">
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-indigo-50 via-white to-emerald-50 p-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Experience</p>
                  <p className="font-semibold text-gray-900">3+ years</p>
                </div>
                <div>
                  <p className="text-gray-500">Projects</p>
                  <p className="font-semibold text-gray-900">25+ delivered</p>
                </div>
                <div>
                  <p className="text-gray-500">Focus</p>
                  <p className="font-semibold text-gray-900">Performance & DX</p>
                </div>
                <div>
                  <p className="text-gray-500">Location</p>
                  <p className="font-semibold text-gray-900">Remote-first</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

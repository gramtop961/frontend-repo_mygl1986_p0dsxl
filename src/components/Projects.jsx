import React from 'react';

const projects = [
  {
    title: 'Realtime Dashboard',
    description: 'Data-rich dashboard with live updates, custom charts and role-based access.',
    tech: ['React', 'Tailwind', 'Socket.io', 'Node'],
    link: '#',
  },
  {
    title: 'E-commerce API',
    description: 'Headless commerce backend with FastAPI, MongoDB, and JWT auth.',
    tech: ['FastAPI', 'MongoDB', 'Python'],
    link: '#',
  },
  {
    title: '3D Product Showcase',
    description: 'Interactive 3D product viewer using Spline + performant WebGL techniques.',
    tech: ['Spline', 'Three.js', 'Vite'],
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Projects</h2>
            <p className="mt-2 text-gray-600">A selection of work that highlights product sense and engineering depth.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800">Work with me</a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-2xl border border-gray-200 bg-white p-6 transition hover:shadow-lg">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700">{p.title}</h3>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">Case</span>
              </div>
              <p className="mt-3 text-sm text-gray-600">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-md bg-gray-100 px-2.5 py-1 text-xs text-gray-700">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React from 'react';

const education = [
  {
    school: 'Bandung Institute of Technology (ITB)',
    degree: 'B.Sc. in Computer Science',
    period: '2017 – 2021',
    highlights: [
      'Specialized in web technologies and distributed systems',
      'Led a developer community and organized meetups',
      'Graduated with honors'
    ],
  },
  {
    school: 'Online Certifications',
    degree: 'Fullstack Web Development',
    period: 'Ongoing',
    highlights: [
      'Advanced React patterns, performance and accessibility',
      'Backend architectures with FastAPI and Node',
      'Cloud fundamentals & DevOps best practices'
    ],
  },
];

const Education = () => {
  return (
    <section id="education" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Education</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {education.map((ed) => (
            <div key={ed.school} className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold text-gray-900">{ed.school}</p>
                  <p className="text-gray-600">{ed.degree}</p>
                </div>
                <span className="text-sm text-gray-500">{ed.period}</span>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-700">
                {ed.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-2xl border border-gray-200 bg-white p-8">
          <div className="mb-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Get in Touch</h2>
            <p className="mt-2 text-gray-600">Have a project in mind or want to collaborate? Let's connect.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-gray-900 focus:outline-none focus:ring-0" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-gray-900 focus:outline-none focus:ring-0" placeholder="you@example.com" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea rows="4" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-gray-900 focus:outline-none focus:ring-0" placeholder="Tell me about your project" />
              </div>
              <button type="button" className="rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800">Send Message</button>
            </form>
            <div className="space-y-4 text-sm text-gray-700">
              <div className="rounded-lg border border-gray-200 p-4">
                <p className="font-semibold text-gray-900">Email</p>
                <a href="mailto:hello@danirm.dev" className="text-gray-700 hover:underline">hello@danirm.dev</a>
              </div>
              <div className="rounded-lg border border-gray-200 p-4">
                <p className="font-semibold text-gray-900">LinkedIn</p>
                <a href="#" className="text-gray-700 hover:underline">linkedin.com/in/danirm</a>
              </div>
              <div className="rounded-lg border border-gray-200 p-4">
                <p className="font-semibold text-gray-900">GitHub</p>
                <a href="#" className="text-gray-700 hover:underline">github.com/danirm</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

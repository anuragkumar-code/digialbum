import React from 'react';
import Navbar from '../components/Shared/Navbar';
import Footer from '../components/Shared/Footer';
import HeaderNav from '../components/Shared/HeaderNav';

const JoinUs = () => {
  return (
    <div className="min-h-screen bg-secondary-light-mint flex flex-col">
      <Navbar />
      <div className="pt-[4rem]">
        <HeaderNav />
      </div>

      <main className="flex-grow pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        <section className="bg-white p-8 shadow-lg rounded-lg">
          <h1 className="text-3xl font-merriweather text-primary-sea-green mb-2">Join the Revolution 🚀</h1>
          <p className="text-sm text-text-dark-teal font-poppins mb-6">Yes, we reply if you submit 😄</p>

          <p className="text-base font-poppins text-text-dark-teal mb-8 leading-relaxed">
            🧠💥 <strong>This is for the builders. Not the by-the-bookers.</strong><br /><br />
            Tired of "just coding" what's written in a doc? Same.<br />
            We’re building <strong>MemoryLane</strong> — a place for memories and for <strong>makers</strong>.<br /><br />
            If you think in systems, sketch ideas in your sleep, and <strong>care more about solving problems than sounding smart</strong> — you're one of us.<br /><br />
            No buzzwords. No gatekeeping. Just pure product engineering.<br />
            Come write code that <strong>actually matters</strong>.<br /><br />
            ⚡ Let’s build stuff people remember.
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your full name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-sea-green focus:border-primary-sea-green sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-sea-green focus:border-primary-sea-green sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Why do you want to join?</label>
              <textarea
                id="message"
                rows="4"
                placeholder="Tell us what drives you, what you've built, or what you're dreaming of building..."
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-sea-green focus:border-primary-sea-green sm:text-sm"
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-primary-sea-green hover:bg-hover-forest-green text-white font-semibold px-6 py-2 rounded-md shadow-md transition-all"
              >
                Submit
              </button>
            </div>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default JoinUs;

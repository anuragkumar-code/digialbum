import React from 'react';
import Navbar from '../components/Shared/Navbar';
import Footer from '../components/Shared/Footer';
import HeaderNav from '../components/Shared/HeaderNav';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-secondary-light-mint flex flex-col">
      <Navbar />
      <div className="pt-[4rem]">
        <HeaderNav />
      </div>

      <main className="flex-grow pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        <section className="bg-white p-8 shadow-lg rounded-lg">
          <h1 className="text-3xl sm:text-4xl font-merriweather text-primary-sea-green mb-6">
            About MemoryLane
          </h1>

          <div className="text-base font-poppins text-text-dark-teal space-y-6 leading-relaxed">
            <p>📸 <strong>We don’t just save photos. We save feelings.</strong></p>

            <p>
              MemoryLane isn’t just a digital album — it’s your personal time machine.  
              It's where your vacations, your first bike, your late-night drives, and your dog’s weird smile all live forever — beautifully.
            </p>

            <p>
              We believe memories shouldn’t be buried in phone storage or lost in cloud clutter.  
              They deserve to be seen, shared, and felt — again and again.
            </p>

            <p>
              <strong>Curate your life. Create your vibe. Share your world.</strong><br />
              From private albums to social storytelling, MemoryLane is where your moments turn into magic.
            </p>

            <p>
              Because your memories aren’t just pixels.  
              <strong>They’re proof you lived. Loudly. Fully. Beautifully.</strong>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;

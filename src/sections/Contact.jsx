import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ContactCard from '../components/ContactCard';
import ContactForm from '../components/ContactForm';
import { contactData } from '../data/portfolioData';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative border-t border-slate-800/60 bg-[#080d1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="06 // Contact"
          title={contactData.heading}
          subtitle={contactData.supportingText}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Links & Reachability Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider mb-2">
              Direct Communication Channels
            </h3>

            {/* Email Card */}
            <ContactCard
              type="email"
              label="Email Address"
              value={contactData.email}
              href={`mailto:${contactData.email}`}
            />

            {/* LinkedIn Card */}
            <ContactCard
              type="linkedin"
              label="Professional Profile"
              value="linkedin.com/in/vinay-bansal"
              href={contactData.linkedin}
            />

            {/* GitHub Card */}
            <ContactCard
              type="github"
              label="Code Repositories"
              value="github.com/vinaybansal893"
              href={contactData.github}
            />

            {/* Student Availability Card */}
            <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/20 text-xs text-slate-400 space-y-2 mt-4">
              <div className="flex items-center gap-2 text-sky-400 font-mono font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Open for Collaboration</span>
              </div>
              <p className="leading-relaxed">
                Currently open to student hackathons, open-source beginner contributions, and tech discussions with fellow engineers and builders.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <h3 className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider mb-2">
              Send a Direct Note
            </h3>
            <ContactForm />
          </div>

        </div>

      </div>
    </section>
  );
}

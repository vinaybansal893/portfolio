import React from 'react';
import SectionHeading from '../components/SectionHeading';
import EducationCard from '../components/EducationCard';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative border-t border-slate-800/60 bg-[#080d1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="02 // Education"
          title="Academic Foundation"
          subtitle="Developing a rigorous understanding of computer science principles, software architecture, and modern intelligent technologies at JECRC University."
        />

        <EducationCard education={educationData} />
      </div>
    </section>
  );
}

import React from 'react';
import SectionHeading from '../components/SectionHeading';
import AchievementCard from '../components/AchievementCard';
import { achievementsData } from '../data/portfolioData';
import { Info } from 'lucide-react';

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative border-t border-slate-800/60 bg-[#070b16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="05 // Achievements &amp; Learning"
          title={achievementsData.sectionTitle}
          subtitle={achievementsData.sectionSubtitle}
        />

        {/* Note Card */}
        <div className="mb-10 p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex items-start gap-3.5 text-xs text-slate-300 leading-relaxed max-w-3xl">
          <Info className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
          <span>{achievementsData.note}</span>
        </div>

        {/* Milestone Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievementsData.placeholders.map((item, idx) => (
            <AchievementCard key={idx} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}

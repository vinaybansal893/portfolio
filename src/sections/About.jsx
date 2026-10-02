import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { aboutData, personalInfo } from '../data/portfolioData';
import { BookOpen, Compass, Hammer, Sparkles, UserCheck } from 'lucide-react';

const cardIcons = {
  '01': BookOpen,
  '02': Compass,
  '03': Hammer,
};

export default function About() {
  return (
    <section id="about" className="py-24 relative border-t border-slate-800/60 bg-[#070b16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="01 // About Me"
          title="Curious Mind, Active Learner"
          subtitle="An authentic snapshot of who I am, my philosophy as a first-year engineering student, and what drives my technical pursuits."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Authentic Student Story */}
          <div className="lg:col-span-6 space-y-5">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 backdrop-blur-sm relative">
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />

              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    {personalInfo.name}
                  </h3>
                  <p className="text-xs font-mono text-sky-400">
                    {personalInfo.academicYear} • {personalInfo.college}
                  </p>
                </div>
              </div>

              {aboutData.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4 last:mb-0"
                >
                  {p}
                </p>
              ))}

              {/* Student ethos note */}
              <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-center gap-2 text-xs font-mono text-slate-400">
                <Sparkles className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Focus: Consistency, curiosity, and code quality.</span>
              </div>
            </div>
          </div>

          {/* Right Column: 01, 02, 03 Pillars / Cards */}
          <div className="lg:col-span-6 space-y-4">
            {aboutData.focusCards.map((card) => {
              const Icon = cardIcons[card.number] || Sparkles;
              return (
                <div
                  key={card.number}
                  className="group relative rounded-xl border border-slate-800 bg-slate-900/30 p-6 transition-all duration-300 hover:border-sky-500/40 hover:bg-slate-900/60 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/5"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/30">
                        {card.number} — {card.tag}
                      </span>
                      <h4 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                        {card.title}
                      </h4>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-400 group-hover:text-sky-400 transition-colors shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed pl-1">
                    {card.description}
                  </p>

                  <div className="mt-3 pl-1 flex items-center gap-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700/60">
                      {card.badge}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import SkillCard from '../components/SkillCard';
import { skillsData } from '../data/portfolioData';

const categories = ['All', 'Web Core', 'Programming', 'AI & Emerging', 'Workflow'];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSkills = skillsData.filter((skill) => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Web Core') {
      return skill.category === 'Web Core' || skill.category === 'Styling & UI' || skill.category === 'Frontend Dev';
    }
    if (selectedCategory === 'Programming') {
      return skill.category === 'Programming' || skill.category === 'Core Language';
    }
    if (selectedCategory === 'AI & Emerging') {
      return skill.category === 'Emerging Tech' || skill.category === 'AI Technologies';
    }
    if (selectedCategory === 'Workflow') {
      return skill.category === 'Workflow';
    }
    return true;
  });

  return (
    <section id="skills" className="py-24 relative border-t border-slate-800/60 bg-[#070b16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="03 // Skills & Toolkit"
            title="Technical Competencies"
            subtitle="An authentic representation of core technologies and concepts I am actively studying, practicing, and building projects with."
            className="mb-0 md:mb-0"
          />

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-slate-900/80 border border-slate-800 rounded-xl self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-sky-500 text-slate-950 font-semibold shadow-md shadow-sky-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              category={skill.category}
              description={skill.description}
              iconName={skill.iconName}
            />
          ))}
        </div>

        {/* Learning Ethos Note */}
        <div className="mt-10 p-4 rounded-xl bg-slate-900/30 border border-slate-800/80 text-center max-w-2xl mx-auto">
          <p className="text-xs font-mono text-slate-400">
            💡 <span className="text-sky-300 font-semibold">Honest Learning Standard:</span> Skills are represented as continuous areas of practical implementation rather than inflated static percentages.
          </p>
        </div>

      </div>
    </section>
  );
}

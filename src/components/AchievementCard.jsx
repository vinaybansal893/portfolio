import React from 'react';
import { Award, Trophy, GraduationCap, Medal, Compass, PlusCircle } from 'lucide-react';

const iconMap = {
  Award,
  Trophy,
  GraduationCap,
  Medal,
  Compass,
};

export default function AchievementCard({ item }) {
  const IconComponent = iconMap[item.icon] || Award;

  return (
    <div className="group relative rounded-xl border border-dashed border-slate-800 bg-slate-900/30 p-6 transition-all duration-300 hover:border-sky-500/50 hover:bg-slate-900/60 hover:shadow-lg hover:shadow-sky-500/5">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="w-10 h-10 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-sky-400 group-hover:border-sky-500/40 group-hover:text-sky-300 transition-colors">
          <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
        </div>
        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700/50">
          {item.status}
        </span>
      </div>

      <span className="text-xs font-mono uppercase text-sky-400 tracking-wider font-semibold block mb-1">
        {item.category}
      </span>

      <h3 className="text-base font-bold text-white mb-2 transition-colors group-hover:text-sky-300">
        {item.title}
      </h3>

      <p className="text-xs text-slate-400 leading-relaxed mb-4">
        {item.description}
      </p>

      <div className="pt-3 border-t border-slate-800/60 flex items-center gap-1.5 text-xs text-slate-500 font-mono group-hover:text-slate-400 transition-colors">
        <PlusCircle className="w-3.5 h-3.5 text-sky-500/60" />
        <span>Slot ready for update</span>
      </div>
    </div>
  );
}

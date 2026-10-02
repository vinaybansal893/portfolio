import React from 'react';
import {
  FileCode,
  Palette,
  Code,
  Terminal,
  Cpu,
  Sparkles,
  Layout,
  Zap,
  CheckCircle2,
} from 'lucide-react';

const iconMap = {
  FileCode,
  Palette,
  Code,
  Terminal,
  Cpu,
  Sparkles,
  Layout,
  Zap,
};

export default function SkillCard({ name, category, description, iconName }) {
  const IconComponent = iconMap[iconName] || Code;

  return (
    <div className="group relative rounded-xl border border-slate-800 bg-slate-900/40 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-500/40 hover:bg-slate-900/80 hover:shadow-xl hover:shadow-sky-500/5">
      {/* Subtle top accent highlight on hover */}
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-sky-500/0 to-transparent transition-opacity duration-300 group-hover:via-sky-500/50" />

      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="w-12 h-12 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 transition-colors duration-300 group-hover:bg-sky-500/20 group-hover:text-sky-300 group-hover:border-sky-500/40">
          <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
        </div>
        <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700/60">
          {category}
        </span>
      </div>

      <h3 className="text-lg font-bold text-white mb-2 transition-colors duration-200 group-hover:text-sky-300">
        {name}
      </h3>

      <p className="text-sm text-slate-400 leading-relaxed">
        {description}
      </p>

      <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center gap-1.5 text-xs text-slate-500 font-medium group-hover:text-sky-400/80 transition-colors">
        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
        <span>Active Focus Area</span>
      </div>
    </div>
  );
}

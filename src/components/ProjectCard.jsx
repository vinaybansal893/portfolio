import React from 'react';
import { ArrowUpRight, Code, Layers, Sparkles } from 'lucide-react';

export default function ProjectCard({
  project,
  onOpenDetails,
}) {
  const {
    id,
    title,
    category,
    description,
    technologies,
    status,
    statusType,
    actionLabel,
  } = project;

  const isLive = statusType === 'active';

  return (
    <div className="group relative flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/50 p-6 md:p-8 transition-all duration-300 hover:-translate-y-2 hover:border-sky-500/40 hover:bg-slate-900/80 hover:shadow-2xl hover:shadow-sky-500/10">
      {/* Subtle top glow line */}
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-sky-500/0 to-transparent transition-opacity duration-300 group-hover:via-sky-400/60" />

      <div>
        {/* Top Header: Number and Status Badge */}
        <div className="flex items-center justify-between gap-2 mb-6">
          <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-slate-800/80 text-sky-400 border border-slate-700/60">
            PROJ_{id}
          </span>
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${
              isLive
                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                : statusType === 'in-progress'
                ? 'bg-sky-500/10 text-sky-400 border-sky-500/30'
                : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                isLive
                  ? 'bg-emerald-400 animate-pulse'
                  : statusType === 'in-progress'
                  ? 'bg-sky-400 animate-pulse'
                  : 'bg-amber-400'
              }`}
            />
            {status}
          </span>
        </div>

        {/* Category & Title */}
        <span className="text-xs font-mono tracking-wider uppercase text-slate-500 mb-1 block">
          {category}
        </span>
        <h3 className="text-2xl font-bold text-white mb-3 transition-colors duration-200 group-hover:text-sky-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-300/90 text-sm leading-relaxed mb-6">
          {description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {technologies.map((tech, idx) => (
            <span
              key={idx}
              className="text-xs font-medium px-2.5 py-1 rounded bg-slate-800/60 text-slate-300 border border-slate-700/50 transition-colors group-hover:border-slate-600"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
        <button
          type="button"
          onClick={() => onOpenDetails(project)}
          className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors cursor-pointer group/btn"
          aria-label={`View details for ${title}`}
        >
          <span>{actionLabel || 'View Details'}</span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </button>

        <span className="text-xs font-mono text-slate-500">
          {isLive ? 'Deployed' : 'In Dev'}
        </span>
      </div>
    </div>
  );
}

import React from 'react';
import {
  GraduationCap,
  MapPin,
  Calendar,
  BookOpen,
  CheckCircle2,
} from 'lucide-react';

export default function EducationCard({ education }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:border-sky-500/30 hover:bg-slate-900/60 hover:shadow-xl hover:shadow-sky-500/5">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
              {education.degree}
            </h3>
            <p className="text-base font-medium text-sky-400">
              {education.institution}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs font-mono text-slate-400">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/20 font-sans font-semibold">
            <Calendar className="w-3.5 h-3.5" />
            <span>{education.timeline}</span>
          </div>
          <div className="inline-flex items-center gap-1 text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-slate-500" />
            <span>{education.location}</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-slate-300/90 text-sm leading-relaxed my-6">
        {education.description}
      </p>

      {/* Relevant Areas Grid */}
      <div>
        <h4 className="text-xs font-mono uppercase font-semibold text-slate-400 tracking-wider mb-4 flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-sky-400" />
          <span>Curricular Focus &amp; Learning Areas</span>
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {education.relevantAreas.map((area, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-slate-800/40 border border-slate-800 hover:border-slate-700 transition-colors group"
            >
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 group-hover:scale-110 transition-transform" />
                <h5 className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors">
                  {area.name}
                </h5>
              </div>
              <p className="text-xs text-slate-400 leading-normal pl-5">
                {area.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

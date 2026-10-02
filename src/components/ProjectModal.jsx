import React, { useEffect } from 'react';
import { X, CheckCircle, ExternalLink, Sparkles, Layers } from 'lucide-react';
import { Github } from './Icons';
import Button from './Button';

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Click outside backdrop */}
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-xl rounded-2xl border border-slate-700/80 bg-slate-900/95 p-6 sm:p-8 shadow-2xl shadow-sky-500/10 z-10 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-xs px-2.5 py-1 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
            PROJ_{project.id}
          </span>
          <span className="text-xs font-mono uppercase text-slate-400 tracking-wider">
            {project.category}
          </span>
        </div>

        <h3 id="modal-title" className="text-2xl font-bold text-white mb-3">
          {project.title}
        </h3>

        <p className="text-slate-300 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Architecture & Highlights */}
        {project.modalDetails && (
          <div className="mb-6 p-4 rounded-xl bg-slate-800/40 border border-slate-700/50">
            <h4 className="text-xs font-mono font-semibold uppercase text-sky-400 tracking-wider mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Project Key Highlights</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {project.modalDetails.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack */}
        <div className="mb-6">
          <h4 className="text-xs font-mono font-semibold uppercase text-slate-400 tracking-wider mb-2.5">
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-200 border border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Project Status Note */}
        <div className="p-3 rounded-lg bg-sky-500/5 border border-sky-500/20 text-xs text-sky-300 mb-6 flex items-center justify-between">
          <span className="font-medium">Status: {project.status}</span>
          <span className="text-slate-400 font-mono text-[11px]">
            {project.modalDetails?.stage || 'Active'}
          </span>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-slate-800">
          <Button variant="ghost" size="sm" onClick={onClose}>
            Close
          </Button>
          {project.id === '01' ? (
            <Button
              variant="primary"
              size="sm"
              onClick={onClose}
              icon={CheckCircle}
            >
              Viewing Live Portfolio
            </Button>
          ) : (
            <Button
              variant="secondary"
              size="sm"
              href="https://github.com/vinaybansal893"
              external
              icon={Github}
            >
              GitHub Profile
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

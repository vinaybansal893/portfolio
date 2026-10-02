import React, { useState } from 'react';
import { Mail, Copy, Check, ExternalLink } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function ContactCard({ type, label, value, href }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getIcon = () => {
    switch (type) {
      case 'email':
        return Mail;
      case 'linkedin':
        return Linkedin;
      case 'github':
        return Github;
      default:
        return Mail;
    }
  };

  const Icon = getIcon();

  return (
    <a
      href={href}
      target={type !== 'email' ? '_blank' : undefined}
      rel={type !== 'email' ? 'noopener noreferrer' : undefined}
      className="group relative flex items-center justify-between p-4 sm:p-5 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-sky-500/40 hover:bg-slate-900/80 hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-300"
    >
      <div className="flex items-center gap-4 min-w-0">
        <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:bg-sky-500/20 group-hover:text-sky-300 transition-colors shrink-0">
          <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
        </div>

        <div className="min-w-0">
          <span className="text-xs font-mono uppercase text-slate-400 block mb-0.5">
            {label}
          </span>
          <p className="text-sm sm:text-base font-semibold text-white group-hover:text-sky-300 transition-colors truncate">
            {value}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 pl-3 shrink-0">
        {type === 'email' ? (
          <button
            type="button"
            onClick={handleCopy}
            title="Copy email to clipboard"
            className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Copy email address"
          >
            {copied ? (
              <Check className="w-4 h-4 text-emerald-400" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        ) : (
          <div className="p-2 rounded-lg text-slate-500 group-hover:text-sky-400 transition-colors">
            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        )}
      </div>
    </a>
  );
}

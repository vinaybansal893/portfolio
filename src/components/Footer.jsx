import React from 'react';
import { Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo, navLinks } from '../data/portfolioData';

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#060a14] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/60">
          {/* Identity & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-slate-800 border border-sky-500/40 flex items-center justify-center text-sky-400 font-extrabold text-sm font-mono">
                {personalInfo.monogram}
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {personalInfo.role} at {personalInfo.college}, {personalInfo.location}. Focused on computer science foundations, artificial intelligence and web technologies.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-sky-500/10 text-sky-300 border border-sky-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Actively Learning &amp; Building</span>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase text-slate-300 tracking-wider font-semibold mb-4">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-slate-400 hover:text-sky-300 transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links & Contact */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase text-slate-300 tracking-wider font-semibold mb-4">
              Connect Directly
            </h4>
            <div className="flex flex-col space-y-2.5">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-sky-300 transition-colors"
              >
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="truncate">{personalInfo.email}</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-sky-300 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-sky-400 shrink-0" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-sky-300 transition-colors"
              >
                <Github className="w-4 h-4 text-sky-400 shrink-0" />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© 2026 Vinay Bansal. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Built with React &amp; Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

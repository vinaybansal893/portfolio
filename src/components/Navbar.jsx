import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { navLinks, personalInfo } from '../data/portfolioData';

export default function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Background solidness threshold
      setIsScrolled(window.scrollY > 20);

      // Scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080d1a]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        {/* Scroll Progress Indicator Bar */}
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-sky-500 via-cyan-400 to-sky-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Monogram / Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2.5 group focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg p-1"
              aria-label="Vinay Bansal Home"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-sky-500/40 flex items-center justify-center text-sky-400 font-extrabold text-base font-mono tracking-tighter shadow-md group-hover:border-sky-400 group-hover:shadow-sky-500/20 group-hover:scale-105 transition-all duration-200">
                {personalInfo.monogram}
              </div>
              <div className="hidden sm:block text-left">
                <span className="text-sm font-bold text-white block leading-tight group-hover:text-sky-300 transition-colors">
                  {personalInfo.name}
                </span>
                <span className="text-[11px] font-mono text-slate-400 block leading-tight">
                  CSE Student
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 px-3 py-1.5 rounded-full backdrop-blur-sm">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 relative ${
                      isActive
                        ? 'text-sky-300 bg-sky-500/10 font-semibold'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-sky-400 rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right Action / Status Pill */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300 hover:text-white bg-slate-800/60 hover:bg-slate-700/60 border border-slate-700/60 transition-all hover:border-sky-500/40"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-sky-400" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80 focus:outline-none focus:ring-2 focus:ring-sky-400 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-sky-400" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-800 bg-[#080d1a]/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-1 shadow-2xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-sky-300 bg-sky-500/10 font-semibold'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-sky-400" />
                    )}
                  </a>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-800/80 mt-2 flex items-center justify-between px-2">
              <span className="text-xs font-mono text-slate-400">
                JECRC University • Jaipur
              </span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-sky-400 hover:underline flex items-center gap-1"
              >
                GitHub Profile <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

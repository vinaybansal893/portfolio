import React from 'react';
import { ArrowDown, Code2, Sparkles, Terminal, Cpu, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import { heroData, personalInfo } from '../data/portfolioData';

export default function Hero() {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const elem = document.querySelector(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-radial-gradient"
    >
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-60" />

      {/* Subtle Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-2/3 right-10 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Bio, CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-wider text-sky-300 bg-sky-500/10 border border-sky-500/25 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span>{heroData.eyebrow}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              <span className="block">{heroData.headingLine1}</span>
              <span className="block mt-1 bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-200 bg-clip-text text-transparent">
                {heroData.headingLine2}
              </span>
            </h1>

            {/* Concise Authentic Intro */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {heroData.intro}
            </p>

            {/* Student Quick Facts */}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-mono text-slate-400">
              <span className="px-3 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-slate-300">
                📍 {personalInfo.location}
              </span>
              <span className="px-3 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-slate-300">
                🎓 {personalInfo.college}
              </span>
              <span className="px-3 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-slate-300">
                ⚡ 1st Year CSE
              </span>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={(e) => handleScrollTo(e, heroData.primaryCTA.href)}
                icon={ArrowRight}
              >
                {heroData.primaryCTA.label}
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={(e) => handleScrollTo(e, heroData.secondaryCTA.href)}
              >
                {heroData.secondaryCTA.label}
              </Button>
            </div>
          </div>

          {/* Right Column: High-tech Visual System Card (CSS & SVG, no stock photo!) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md w-full">
              
              {/* Outer decorative ambient glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-sky-500/20 to-cyan-500/20 blur-xl opacity-70 group-hover:opacity-100 transition duration-1000 animate-pulse-subtle" />

              {/* Terminal / Code Visual Window */}
              <div className="relative rounded-2xl border border-slate-700/80 bg-slate-900/90 shadow-2xl backdrop-blur-xl overflow-hidden">
                
                {/* Window Bar */}
                <div className="px-4 py-3 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 font-medium">
                    vinay@jecrc:~/portfolio
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-sky-400">
                    <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
                    <span>v1.0</span>
                  </div>
                </div>

                {/* Code Content */}
                <div className="p-5 font-mono text-xs leading-relaxed text-slate-300">
                  <div className="text-slate-500 mb-2">
                    // Student Developer Profile
                  </div>
                  <div>
                    <span className="text-pink-400">const</span>{' '}
                    <span className="text-sky-300">student</span> = {'{'}
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">name:</span>{' '}
                    <span className="text-emerald-300">"Vinay Bansal"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">degree:</span>{' '}
                    <span className="text-emerald-300">"B.Tech CSE (First Year)"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">institution:</span>{' '}
                    <span className="text-emerald-300">"JECRC University"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">focus:</span> [
                    <span className="text-sky-300">"AI"</span>,{' '}
                    <span className="text-sky-300">"Web Dev"</span>,{' '}
                    <span className="text-sky-300">"Algorithms"</span>
                    ],
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">status:</span>{' '}
                    <span className="text-amber-300">"Actively Building &amp; Learning"</span>
                  </div>
                  <div>{'}'};</div>

                  <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px]">
                    <span className="text-sky-400 font-mono flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Ready to collaborate
                    </span>
                    <span className="text-slate-500">Jaipur, IN</span>
                  </div>
                </div>
              </div>

              {/* Floating Tech Badges around visual */}
              <div className="hidden sm:flex absolute -bottom-4 -left-6 rounded-xl border border-slate-700 bg-slate-900/90 p-3 shadow-xl backdrop-blur-md items-center gap-2.5 animate-float-slow">
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Focus Area</span>
                  <span className="text-xs font-bold text-white">AI &amp; Generative Tech</span>
                </div>
              </div>

              <div className="hidden sm:flex absolute -top-5 -right-4 rounded-xl border border-slate-700 bg-slate-900/90 p-3 shadow-xl backdrop-blur-md items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Foundation</span>
                  <span className="text-xs font-bold text-white">Computer Science Core</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Scroll Prompt */}
        <div className="mt-16 text-center">
          <a
            href="#about"
            onClick={(e) => handleScrollTo(e, '#about')}
            className="inline-flex flex-col items-center gap-1.5 text-xs font-mono text-slate-500 hover:text-sky-400 transition-colors"
            aria-label="Scroll to About section"
          >
            <span>DISCOVER MORE</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}

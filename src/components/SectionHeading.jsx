import React from 'react';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
  className = '',
}) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider text-sky-400 bg-sky-500/10 border border-sky-500/20 mb-3.5 ${
            centered ? 'mx-auto' : ''
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
          <span>{eyebrow.toUpperCase()}</span>
        </div>
      )}
      
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
        {title}
      </h2>

      {subtitle && (
        <p
          className={`text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed ${
            centered ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

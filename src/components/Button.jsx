import React from 'react';

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'ghost'
  size = 'md', // 'sm' | 'md' | 'lg'
  icon: Icon,
  iconPosition = 'right',
  className = '',
  external = false,
  disabled = false,
  type = 'button',
  ariaLabel,
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none select-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-2 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3 gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 hover:-translate-y-0.5 active:translate-y-0',
    secondary:
      'bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border border-slate-700/80 hover:border-slate-600 hover:text-white shadow-sm hover:-translate-y-0.5 active:translate-y-0 backdrop-blur-sm',
    outline:
      'bg-transparent hover:bg-sky-500/10 text-sky-400 border border-sky-500/40 hover:border-sky-400 hover:-translate-y-0.5 active:translate-y-0',
    ghost:
      'bg-transparent hover:bg-slate-800/60 text-slate-300 hover:text-white',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5" />}
        <span>{children}</span>
        {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0 transition-transform duration-200" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0 transition-transform duration-200" />}
    </button>
  );
}

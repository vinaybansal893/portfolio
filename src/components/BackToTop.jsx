import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-slate-900/90 text-sky-400 border border-slate-700/80 hover:border-sky-500 hover:text-white hover:bg-sky-500 shadow-xl shadow-black/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-sky-400 cursor-pointer"
      aria-label="Scroll to top of page"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}

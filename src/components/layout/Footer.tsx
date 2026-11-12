import React from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';

export const Footer: React.FC = () => {
  const { language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121215] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 space-y-10">
        {/* Indexed Navigation */}
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap items-center justify-center md:justify-between gap-x-8 gap-y-4 pb-10 border-b border-white/10"
        >
          {portfolioData.navLinks.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="group font-display text-lg md:text-xl font-bold text-white hover:text-accent-lime transition-colors"
            >
              <span>{item.label[language]}</span>
              <sup className="font-mono text-xs text-accent-lime ml-1 align-top">
                {item.index}
              </sup>
            </a>
          ))}
        </nav>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text-secondary">
          <p className="text-center sm:text-left">{portfolioData.footer.copyright[language]}</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-white hover:text-accent-lime transition-colors"
          >
            <span>{portfolioData.footer.backToTop[language]}</span>
            <span className="w-8 h-8 rounded-full border border-white/15 group-hover:border-accent-lime group-hover:bg-accent-lime group-hover:text-accent-dark flex items-center justify-center transition-colors">
              <ArrowUp className="w-4 h-4" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

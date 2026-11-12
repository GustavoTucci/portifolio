import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';

export const TextTicker: React.FC = () => {
  const { language } = useLanguage();
  const items = portfolioData.textTicker[language];
  const duplicated = [...items, ...items];

  return (
    <section
      aria-hidden="true"
      className="w-full overflow-hidden py-8 border-y border-white/10 bg-[#0A0A0B]"
    >
      <div className="animate-marquee-slow items-center">
        {duplicated.map((item, idx) => (
          <div key={`${item.text}-${idx}`} className="flex items-center shrink-0">
            <span
              className={`font-display text-4xl sm:text-5xl md:text-7xl font-extrabold uppercase tracking-wider px-4 ${
                item.outline ? 'text-outline' : 'text-white'
              }`}
            >
              {item.text}
            </span>
            <span className="text-accent-lime text-3xl md:text-5xl px-2">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { fadeUpVariant, staggerContainer, viewportConfig } from '../../lib/animations';
import { CountUpNumber } from '../ui/CountUpNumber';

export const AboutSection: React.FC = () => {
  const { language } = useLanguage();
  const { about, profile } = portfolioData;
  const headline = about.headlineParts[language];

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start"
        >
          {/* Left Column (4 cols): Highlight Stat Card */}
          <motion.div
            variants={fadeUpVariant}
            className="lg:col-span-4 rounded-3xl bg-[#121215] border border-white/10 p-8 relative overflow-hidden"
          >
            <div
              aria-hidden="true"
              className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-accent-lime/10 blur-2xl"
            />
            <span className="font-mono text-xs uppercase tracking-widest text-text-secondary block mb-4">
              {about.tag[language]}
            </span>

            <CountUpNumber
              end={about.stats[0].value}
              prefix={about.stats[0].prefix}
              suffix={about.stats[0].suffix}
              className="font-display text-6xl md:text-7xl font-extrabold text-accent-lime block leading-none"
            />

            <p className="text-white font-semibold text-lg mt-4">
              {about.stats[0].label[language]}
            </p>
            <p className="text-sm text-text-secondary mt-2 leading-relaxed">
              {about.experienceCardLabel[language]}
            </p>

            {/* Secondary Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/10">
              {about.stats.slice(1).map((stat, idx) => (
                <div key={idx}>
                  <CountUpNumber
                    end={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    className="font-display text-3xl font-extrabold text-white block"
                  />
                  <span className="text-xs text-text-secondary mt-1 block">
                    {stat.label[language]}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column (8 cols): Narrative & Quick Info */}
          <motion.div variants={fadeUpVariant} className="lg:col-span-8 space-y-8">
            <span className="font-mono text-xs uppercase tracking-widest text-accent-lime block">
              {about.tag[language]}
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug text-white">
              {headline.before}
              <span className="text-accent-lime">{headline.highlight1}</span>
              {headline.middle}
              <span className="text-accent-lime">{headline.highlight2}</span>
              {headline.after}
            </h2>

            <p className="text-text-secondary text-base md:text-lg leading-relaxed">
              {about.description[language]}
            </p>

            {/* Quick Info Sub-grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-6 border-t border-white/10">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-text-muted block mb-1">
                  {about.quickInfo.emailLabel[language]}
                </span>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-sm md:text-base font-medium text-white hover:text-accent-lime transition-colors break-all"
                >
                  {profile.email}
                </a>
              </div>

              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-text-muted block mb-1">
                  {about.quickInfo.locationLabel[language]}
                </span>
                <span className="text-sm md:text-base font-medium text-white">
                  {profile.location}
                </span>
              </div>

              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-text-muted block mb-1">
                  {about.quickInfo.languageLabel[language]}
                </span>
                <span className="text-sm md:text-base font-medium text-white">
                  {profile.languagesSpoken[language]}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

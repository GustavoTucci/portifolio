import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { fadeUpVariant } from '../../lib/animations';
import { MagneticButton } from '../ui/MagneticButton';
import { RotatingBadge } from '../ui/RotatingBadge';

export const HeroSection: React.FC = () => {
  const { language } = useLanguage();
  const { hero, profile } = portfolioData;
  const [imageError, setImageError] = useState(false);

  const showPhoto = Boolean(profile.avatarUrl) && !imageError;

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-24 min-h-[90vh] flex items-center"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Content (7 cols) */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 min-w-0 space-y-7"
        >
          {/* Greeting Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#121215] border border-accent-lime/35 font-mono text-xs uppercase tracking-widest text-accent-lime">
            <span className="w-2 h-2 rounded-full bg-accent-lime animate-pulse" />
            <span>{hero.greeting[language]}</span>
          </div>

          {/* Massive Display Headline */}
          <h1 className="font-display text-[clamp(2.05rem,3.95vw,4.125rem)] font-extrabold uppercase tracking-tight leading-[1.02]">
            <span className="block text-white whitespace-nowrap">{hero.headlineLine1[language]}</span>
            <span className="block text-accent-lime whitespace-nowrap">{hero.headlineLine2[language]}</span>
            {hero.headlineLine3[language] && (
              <span className="block text-outline whitespace-nowrap">{hero.headlineLine3[language]}</span>
            )}
          </h1>

          {/* Subtitle */}
          <p className="max-w-xl text-text-secondary text-base md:text-lg leading-relaxed">
            {hero.subtitle[language]}
          </p>

          {/* CTA Group */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <MagneticButton href="#contact" variant="primary">
              {hero.ctaPrimary[language]}
            </MagneticButton>
          </div>
        </motion.div>

        {/* Right Visual (5 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative flex justify-center lg:justify-end"
        >
          {/* Subtle lime radial glow */}
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-full blur-3xl opacity-15 pointer-events-none"
            style={{
              background: 'radial-gradient(circle, #C9F31D 0%, transparent 70%)',
            }}
          />

          <div className="relative w-full max-w-[400px]">
            {/* Photo / Placeholder Frame */}
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-[#121215] border border-white/15 shadow-2xl">
              {showPhoto ? (
                <img
                  src={profile.avatarUrl}
                  alt={profile.avatarAlt[language]}
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#18181C] via-[#121215] to-[#0A0A0B]">
                  <div className="w-24 h-24 rounded-full bg-[#1F1F25] border border-accent-lime/40 flex items-center justify-center mb-5 text-accent-lime">
                    <User className="w-11 h-11" />
                  </div>
                  <p className="font-display text-2xl font-extrabold text-white tracking-tight">
                    {profile.shortName}
                  </p>
                  <p className="font-mono text-xs text-accent-lime mt-1 uppercase tracking-wider">
                    {hero.photoBadgeLabel[language]}
                  </p>
                  <p className="mt-5 text-xs text-text-secondary max-w-[230px] leading-relaxed border border-dashed border-white/15 rounded-xl px-3.5 py-2.5">
                    {hero.photoPlaceholderHint[language]}
                  </p>
                </div>
              )}

              {/* Bottom gradient overlay */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0A0A0B]/90 to-transparent" />
            </div>

            {/* Floating Rotating Badge */}
            <div className="absolute -bottom-6 -left-4 md:-left-8 z-10">
              <RotatingBadge text={hero.rotatingBadgeText[language]} href="#contact" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

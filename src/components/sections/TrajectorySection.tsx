import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2, GraduationCap } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { fadeUpVariant, staggerContainer, viewportConfig } from '../../lib/animations';

export const TrajectorySection: React.FC = () => {
  const { language } = useLanguage();
  const { trajectory } = portfolioData;

  return (
    <section id="trajectory" className="py-20 md:py-28 bg-[#121215]/40">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-12"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-accent-lime block mb-3">
            {trajectory.tag[language]}
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
            {trajectory.title[language]}
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {trajectory.items.map((item) => {
            const isEducation = item.id === 'senai-ads';
            return (
              <motion.article
                key={item.id}
                variants={fadeUpVariant}
                className={`rounded-3xl p-7 md:p-8 border transition-colors flex flex-col justify-between ${
                  item.current
                    ? 'bg-[#18181C] border-accent-lime/60'
                    : 'bg-[#141417] border-white/10 hover:border-white/25'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-2 font-mono text-xs px-3 py-1 rounded-full bg-[#0A0A0B] border border-white/10 text-accent-lime">
                      {isEducation ? (
                        <GraduationCap className="w-3.5 h-3.5" />
                      ) : (
                        <Briefcase className="w-3.5 h-3.5" />
                      )}
                      {item.type[language]}
                    </span>
                    <span className="font-mono text-xs text-text-secondary">
                      {item.period}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-white">
                      {item.role[language]}
                    </h3>
                    <p className="text-sm font-medium text-accent-lime mt-1">
                      {item.organization}
                    </p>
                  </div>

                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.description[language]}
                  </p>
                </div>

                <ul className="mt-6 pt-5 border-t border-white/10 space-y-2.5">
                  {item.highlights[language].map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent-lime shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

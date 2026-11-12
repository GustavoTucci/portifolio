import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { fadeUpVariant, staggerContainer, viewportConfig } from '../../lib/animations';

export const ServicesSection: React.FC = () => {
  const { language } = useLanguage();
  const { services } = portfolioData;

  return (
    <section id="services" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-12"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-accent-lime block mb-3">
            {services.tag[language]}
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
            {services.title[language]}
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="divide-y divide-white/10 border-y border-white/10"
        >
          {services.items.map((service) => (
            <motion.a
              key={service.index}
              href={service.targetSection}
              variants={fadeUpVariant}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-6 items-center py-8 md:py-10 hover:bg-[#141418] md:hover:pl-4 px-2 md:px-4 transition-all duration-300"
            >
              {/* Left: Index + Title */}
              <div className="lg:col-span-5 flex items-baseline gap-4 md:gap-6">
                <span className="font-mono text-base md:text-lg text-text-muted group-hover:text-accent-lime transition-colors">
                  {service.index}
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white group-hover:text-accent-lime transition-colors">
                  {service.title[language]}
                </h3>
              </div>

              {/* Center: Deliverables */}
              <ul className="lg:col-span-5 space-y-1.5 text-sm md:text-base text-text-secondary">
                {service.deliverables[language].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-accent-lime font-mono">+</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Right: Circular Arrow */}
              <div className="lg:col-span-2 flex lg:justify-end">
                <span className="w-14 h-14 rounded-full border border-white/20 group-hover:bg-accent-lime group-hover:border-accent-lime group-hover:text-accent-dark text-white flex items-center justify-center transition-all duration-300">
                  <ArrowUpRight className="w-6 h-6 transition-transform duration-300 group-hover:rotate-45" />
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

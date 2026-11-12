import React, { useMemo, useState } from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { ProjectCategory, ProjectItem, portfolioData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { fadeUpVariant, viewportConfig } from '../../lib/animations';
import { ProjectModal } from '../ui/ProjectModal';

export const PortfolioSection: React.FC = () => {
  const { language } = useLanguage();
  const { portfolio } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return portfolio.projects;
    return portfolio.projects.filter((p) => p.category === activeCategory);
  }, [activeCategory, portfolio.projects]);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-[#121215]/50 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Section Header + Filter Tabs */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-accent-lime block mb-3">
              {portfolio.tag[language]}
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
              {portfolio.title[language]}
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Project categories"
            className="flex flex-wrap items-center gap-2 shrink-0"
          >
            {portfolio.categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all duration-300 border ${
                    isActive
                      ? 'bg-accent-lime text-accent-dark font-bold border-accent-lime'
                      : 'bg-[#18181C] text-text-secondary border-white/10 hover:border-white/30 hover:text-white'
                  }`}
                >
                  {cat.label[language]}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Animated Project Grid */}
        <LayoutGroup>
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer flex flex-col"
                >
                  {/* Image Container */}
                  <div className="overflow-hidden rounded-2xl relative aspect-[16/11] bg-[#18181C] border border-white/10 group-hover:border-accent-lime/50 transition-colors">
                    <img
                      src={project.imageUrl}
                      alt={project.imageAlt[language]}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Circular Floating "View" Button */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="w-20 h-20 rounded-full bg-accent-lime text-accent-dark font-bold flex items-center justify-center scale-50 group-hover:scale-100 transition-transform duration-300 shadow-xl">
                        {portfolio.viewLabel[language]}
                      </span>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="mt-5 space-y-2.5">
                    <div className="flex items-center gap-3 text-xs font-mono">
                      <span className="px-3 py-1 rounded-full bg-[#18181C] border border-white/10 text-accent-lime">
                        {project.categoryLabel[language]}
                      </span>
                      <span className="text-text-secondary">{project.year}</span>
                      <span className="text-text-muted">• {project.role[language]}</span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-accent-lime transition-colors">
                      {project.title[language]}
                    </h3>

                    <p className="text-sm text-text-secondary line-clamp-2">
                      {project.summary[language]}
                    </p>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

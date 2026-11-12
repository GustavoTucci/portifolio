import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, ExternalLink, Github, X } from 'lucide-react';
import { ProjectItem, portfolioData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { language } = useLanguage();
  const labels = portfolioData.portfolio.modalLabels;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#121215] border border-white/15 shadow-2xl"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label={labels.close[language]}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 border border-white/15 hover:border-accent-lime hover:text-accent-lime text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/9] w-full overflow-hidden bg-[#18181C]">
              <img
                src={project.imageUrl}
                alt={project.imageAlt[language]}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 md:p-10 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-accent-lime/15 text-accent-lime border border-accent-lime/30">
                  {project.categoryLabel[language]}
                </span>
                <span className="font-mono text-xs text-text-secondary">
                  {project.year}
                </span>
                <span className="font-mono text-xs text-text-secondary">
                  • {labels.role[language]}: <strong className="text-white">{project.role[language]}</strong>
                </span>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
                  {project.title[language]}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {project.summary[language]}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-accent-lime mb-3">
                  {labels.highlights[language]}
                </h4>
                <ul className="space-y-2.5">
                  {project.highlights[language].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm md:text-base text-zinc-200">
                      <CheckCircle2 className="w-5 h-5 text-accent-lime shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-text-secondary mb-3">
                  {labels.stack[language]}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-3 py-1.5 rounded-full bg-[#18181C] border border-white/10 text-zinc-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2 rounded-full bg-accent-lime hover:bg-accent-lime-hover text-accent-dark font-bold px-6 py-3 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>{labels.viewDeploy[language]}</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
                    </a>
                  )}

                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={`group inline-flex items-center gap-2 rounded-full font-bold px-6 py-3 transition-colors ${
                        project.liveUrl
                          ? 'border border-white/20 hover:border-accent-lime text-white hover:text-accent-lime bg-transparent'
                          : 'bg-accent-lime hover:bg-accent-lime-hover text-accent-dark'
                      }`}
                    >
                      <Github className="w-4 h-4" />
                      <span>{labels.viewRepo[language]}</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
                    </a>
                  )}

                  {!project.liveUrl && !project.repoUrl && (
                    <span className="font-mono text-xs text-text-secondary">
                      {labels.privateOrPending[language]}
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-full border border-white/15 hover:border-white/40 px-5 py-2.5 text-sm text-text-secondary hover:text-white transition-colors"
                >
                  {labels.close[language]}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone, X } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';

interface OffCanvasDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OffCanvasDrawer: React.FC<OffCanvasDrawerProps> = ({ isOpen, onClose }) => {
  const { language, setLanguage } = useLanguage();
  const { profile, navLinks } = portfolioData;

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          />

          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-[#121215] border-l border-white/10 z-50 p-7 md:p-9 flex flex-col justify-between overflow-y-auto"
          >
            <div className="space-y-8">
              {/* Top row */}
              <div className="flex items-center justify-between">
                <span className="font-display text-2xl font-extrabold text-white">
                  {profile.brandName}
                  <span className="text-accent-lime">.</span>
                </span>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close drawer"
                  className="w-10 h-10 rounded-full border border-white/15 hover:border-accent-lime hover:text-accent-lime flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Bio */}
              <div className="space-y-3">
                <p className="font-mono text-xs uppercase tracking-widest text-accent-lime">
                  {profile.role[language]}
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {profile.drawerBio[language]}
                </p>
              </div>

              {/* Mobile Navigation */}
              <nav className="lg:hidden space-y-2 border-y border-white/10 py-5">
                {navLinks.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={onClose}
                    className="flex items-center justify-between py-2 text-lg font-display font-bold text-white hover:text-accent-lime transition-colors"
                  >
                    <span>{item.label[language]}</span>
                    <span className="font-mono text-xs text-accent-lime">{item.index}</span>
                  </a>
                ))}
              </nav>

              {/* Language selector inside drawer */}
              <div className="flex items-center justify-between bg-[#18181C] border border-white/10 rounded-2xl px-4 py-3">
                <span className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                  {language === 'pt' ? 'Idioma' : 'Language'}
                </span>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setLanguage('pt')}
                    className={`font-mono text-xs px-3 py-1 rounded-full transition-colors ${
                      language === 'pt'
                        ? 'bg-accent-lime text-accent-dark font-bold'
                        : 'text-text-secondary hover:text-white'
                    }`}
                  >
                    Português
                  </button>
                  <button
                    type="button"
                    onClick={() => setLanguage('en')}
                    className={`font-mono text-xs px-3 py-1 rounded-full transition-colors ${
                      language === 'en'
                        ? 'bg-accent-lime text-accent-dark font-bold'
                        : 'text-text-secondary hover:text-white'
                    }`}
                  >
                    English
                  </button>
                </div>
              </div>

              {/* Direct Info */}
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-sm text-text-secondary">
                  <MapPin className="w-4 h-4 text-accent-lime shrink-0 mt-0.5" />
                  <span>{profile.location}</span>
                </div>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 text-sm text-white hover:text-accent-lime transition-colors"
                >
                  <Mail className="w-4 h-4 text-accent-lime shrink-0" />
                  <span>{profile.email}</span>
                </a>
                <a
                  href={profile.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-sm text-white hover:text-accent-lime transition-colors"
                >
                  <Phone className="w-4 h-4 text-accent-lime shrink-0" />
                  <span>{profile.phone}</span>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="w-11 h-11 rounded-full bg-[#18181C] border border-white/10 hover:border-accent-lime hover:text-accent-lime flex items-center justify-center transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 rounded-full bg-[#18181C] border border-white/10 hover:border-accent-lime hover:text-accent-lime flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
              <span className="font-mono text-xs text-text-muted">
                {profile.languagesSpoken[language]}
              </span>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

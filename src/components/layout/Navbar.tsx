import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Globe, LayoutGrid } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';

interface NavbarProps {
  onOpenDrawer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDrawer }) => {
  const { language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = portfolioData.navLinks
        .map((link) => document.getElementById(link.id))
        .filter(Boolean) as HTMLElement[];

      const scrollPos = window.scrollY + 140;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= scrollPos) {
          setActiveId(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md bg-[#0A0A0B]/85 border-b border-white/10 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between gap-4">
        {/* Logo */}
        <a
          href="#home"
          className="font-display text-2xl font-extrabold tracking-tight text-white flex items-center"
        >
          <span>{portfolioData.profile.brandName}</span>
          <span className="text-accent-lime">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
          {portfolioData.navLinks.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-sm font-medium transition-colors relative py-1 ${
                  isActive ? 'text-accent-lime' : 'text-text-secondary hover:text-white'
                }`}
              >
                {item.label[language]}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent-lime rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div
            role="group"
            aria-label="Language switcher"
            className="flex items-center bg-[#18181C] border border-white/10 rounded-full p-1"
          >
            <Globe className="w-3.5 h-3.5 text-text-secondary ml-2 mr-1 hidden sm:block" />
            <button
              type="button"
              onClick={() => setLanguage('pt')}
              className={`font-mono text-xs px-2.5 py-1 rounded-full transition-colors ${
                language === 'pt'
                  ? 'bg-accent-lime text-accent-dark font-bold'
                  : 'text-text-secondary hover:text-white'
              }`}
            >
              PT
            </button>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`font-mono text-xs px-2.5 py-1 rounded-full transition-colors ${
                language === 'en'
                  ? 'bg-accent-lime text-accent-dark font-bold'
                  : 'text-text-secondary hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          <a
            href="#contact"
            className="hidden sm:inline-flex group items-center gap-1.5 bg-accent-lime hover:bg-accent-lime-hover text-accent-dark font-bold text-sm rounded-full px-5 py-2.5 transition-colors"
          >
            <span>{portfolioData.hero.ctaPrimary[language]}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
          </a>

          <button
            type="button"
            onClick={onOpenDrawer}
            aria-label="Open menu drawer"
            className="w-10 h-10 rounded-full bg-[#18181C] border border-white/15 hover:border-accent-lime hover:text-accent-lime text-white flex items-center justify-center transition-colors"
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};

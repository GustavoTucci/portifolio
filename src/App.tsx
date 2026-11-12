import React, { useState } from 'react';
import { MotionConfig } from 'framer-motion';
import { LanguageProvider } from './context/LanguageContext';
import { CustomCursor } from './components/layout/CustomCursor';
import { Navbar } from './components/layout/Navbar';
import { OffCanvasDrawer } from './components/layout/OffCanvasDrawer';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { SkillsMarquee } from './components/sections/SkillsMarquee';
import { AboutSection } from './components/sections/AboutSection';
import { PortfolioSection } from './components/sections/PortfolioSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { TextTicker } from './components/sections/TextTicker';
import { TrajectorySection } from './components/sections/TrajectorySection';
import { ContactSection } from './components/sections/ContactSection';

export const App: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <MotionConfig reducedMotion="user">
      <LanguageProvider>
        <div className="min-h-screen bg-[#0A0A0B] text-white selection:bg-[#C9F31D] selection:text-[#09090B]">
          <CustomCursor />
          <Navbar onOpenDrawer={() => setDrawerOpen(true)} />
          <OffCanvasDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />

          <main>
            <HeroSection />
            <SkillsMarquee />
            <AboutSection />
            <TrajectorySection />
            <ServicesSection />
            <TextTicker />
            <PortfolioSection />
            <ContactSection />
          </main>

          <Footer />
        </div>
      </LanguageProvider>
    </MotionConfig>
  );
};

export default App;

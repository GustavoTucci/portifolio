import React from 'react';
import {
  Bot,
  Box,
  Braces,
  Cloud,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Layers,
  ShieldCheck,
  Terminal,
  Zap,
} from 'lucide-react';
import { SkillItem, portfolioData } from '../../data/portfolioData';

const iconMap: Record<SkillItem['iconKey'], React.ReactNode> = {
  bot: <Bot className="w-6 h-6 text-accent-lime" />,
  code: <Code2 className="w-6 h-6 text-accent-lime" />,
  cpu: <Cpu className="w-6 h-6 text-accent-lime" />,
  shield: <ShieldCheck className="w-6 h-6 text-accent-lime" />,
  zap: <Zap className="w-6 h-6 text-accent-lime" />,
  cloud: <Cloud className="w-6 h-6 text-accent-lime" />,
  database: <Database className="w-6 h-6 text-accent-lime" />,
  layers: <Layers className="w-6 h-6 text-accent-lime" />,
  braces: <Braces className="w-6 h-6 text-accent-lime" />,
  box: <Box className="w-6 h-6 text-accent-lime" />,
  terminal: <Terminal className="w-6 h-6 text-accent-lime" />,
  git: <GitBranch className="w-6 h-6 text-accent-lime" />,
};

export const SkillsMarquee: React.FC = () => {
  const skills = portfolioData.skills;
  // Duplicate array for seamless infinite marquee
  const duplicated = [...skills, ...skills];

  return (
    <section
      aria-label="Technical skills"
      className="py-10 border-y border-white/10 bg-[#0E0E11] overflow-hidden"
    >
      <div className="animate-marquee">
        {duplicated.map((skill, idx) => (
          <div
            key={`${skill.name}-${idx}`}
            className="flex items-center gap-4 bg-[#18181C] border border-white/10 hover:border-accent-lime rounded-2xl px-6 py-4 mx-3 transition-colors duration-300 shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-[#121215] border border-white/10 flex items-center justify-center">
              {iconMap[skill.iconKey]}
            </div>
            <div className="flex items-center gap-3">
              <span className="font-bold text-white whitespace-nowrap">{skill.name}</span>
              <span className="font-mono text-sm text-accent-lime bg-accent-lime/10 px-2.5 py-0.5 rounded-full">
                {skill.proficiency}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

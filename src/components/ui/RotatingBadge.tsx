import React from 'react';
import { ArrowDownRight } from 'lucide-react';

interface RotatingBadgeProps {
  text: string;
  href?: string;
}

export const RotatingBadge: React.FC<RotatingBadgeProps> = ({ text, href = '#contact' }) => {
  return (
    <a
      href={href}
      aria-label={text}
      className="group relative flex items-center justify-center w-32 h-32 md:w-36 md:h-36 rounded-full bg-[#121215]/95 border border-white/15 hover:border-accent-lime backdrop-blur-md transition-colors duration-300 shadow-2xl"
    >
      <svg
        viewBox="0 0 120 120"
        className="w-full h-full animate-spin-slow p-2"
        aria-hidden="true"
      >
        <defs>
          <path
            id="rotatingBadgeCircle"
            d="M 60, 60 m -42, 0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0"
          />
        </defs>
        <text className="fill-white/85 group-hover:fill-accent-lime transition-colors font-mono text-[10.2px] uppercase tracking-[0.22em]">
          <textPath href="#rotatingBadgeCircle" startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>

      <span className="absolute inset-0 flex items-center justify-center">
        <span className="w-11 h-11 rounded-full bg-accent-lime text-accent-dark flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          <ArrowDownRight className="w-5 h-5" />
        </span>
      </span>
    </a>
  );
};

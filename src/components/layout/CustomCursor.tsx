import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [enabled, setEnabled] = useState(false);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { stiffness: 420, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 420, damping: 28 });

  useEffect(() => {
    const isPointerFine = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isPointerFine || prefersReducedMotion) return;

    setEnabled(true);

    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement | null;
      const interactive = target?.closest('a, button, [role="button"], input, textarea');
      setIsHoveringInteractive(Boolean(interactive));
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        scale: isHoveringInteractive ? 2 : 1,
        opacity: isHoveringInteractive ? 0.55 : 0.85,
      }}
      transition={{ duration: 0.2 }}
      className="pointer-events-none fixed top-0 left-0 z-[100] w-5 h-5 rounded-full border border-accent-lime bg-accent-lime/20 mix-blend-difference"
    />
  );
};

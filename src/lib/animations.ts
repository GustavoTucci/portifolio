import { Variants } from 'framer-motion';

// 1. Fade Up padrão para entrada de seções e títulos
export const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

// 2. Container Stagger para listas (Skills, Cards de Projeto, Linhas de Serviço)
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export const viewportConfig = {
  once: true,
  amount: 0.2,
} as const;

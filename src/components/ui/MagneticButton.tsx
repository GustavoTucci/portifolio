import React, { useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  download?: boolean | string;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  showArrow?: boolean;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  download,
  target,
  rel,
  type = 'button',
  disabled = false,
  showArrow = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || disabled) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.2;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.2;
    setOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  const baseStyles =
    'group inline-flex items-center justify-center gap-2.5 rounded-full font-semibold transition-all duration-300 cursor-pointer select-none';

  const variantStyles =
    variant === 'primary'
      ? 'bg-accent-lime hover:bg-accent-lime-hover text-accent-dark px-7 py-3.5 font-bold shadow-[0_0_24px_rgba(201,243,29,0.18)]'
      : 'border border-white/20 hover:border-accent-lime text-white hover:text-accent-lime px-7 py-3.5 bg-transparent';

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
      )}
    </>
  );

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
        transition: 'transform 0.2s cubic-bezier(0.22, 1, 0.36, 1)',
      }}
      className="inline-block"
    >
      {href ? (
        <a
          href={href}
          onClick={onClick}
          download={download}
          target={target}
          rel={rel}
          className={`${baseStyles} ${variantStyles} ${className}`}
        >
          {content}
        </a>
      ) : (
        <button
          type={type}
          onClick={onClick}
          disabled={disabled}
          className={`${baseStyles} ${variantStyles} ${disabled ? 'opacity-60 cursor-not-allowed' : ''} ${className}`}
        >
          {content}
        </button>
      )}
    </div>
  );
};

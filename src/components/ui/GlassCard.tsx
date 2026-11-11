import type { HTMLAttributes, ReactNode } from 'react';

type GlassCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

function GlassCard({ children, className = '', ...props }: GlassCardProps) {
  return (
    <div
      className={`glass-card glass-border rounded-2xl bg-white/[0.035] shadow-[0_12px_36px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-colors duration-300 hover:border-cyan-200/25 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default GlassCard;

import type { HTMLAttributes, ReactNode } from 'react';

type GlassCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

function GlassCard({ children, className = '', ...props }: GlassCardProps) {
  return (
    <div
      className={`glass-border rounded-3xl bg-white/5 shadow-[0_24px_90px_rgba(6,182,212,0.12),0_12px_42px_rgba(109,40,217,0.1)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.075] hover:shadow-[0_28px_110px_rgba(34,211,238,0.18),0_16px_54px_rgba(168,85,247,0.14)] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default GlassCard;

import type { AnchorHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    'border-cyan-300/40 bg-cyan-300 text-slate-950 shadow-[0_0_32px_rgba(34,211,238,0.22)] hover:bg-cyan-200',
  secondary:
    'border-white/15 bg-white/10 text-slate-100 hover:border-emerald-300/40 hover:bg-emerald-300/15',
  ghost:
    'border-white/10 bg-transparent text-slate-300 hover:border-white/25 hover:bg-white/10 hover:text-white',
};

function ButtonLink({
  children,
  className = '',
  variant = 'secondary',
  target,
  rel,
  ...props
}: ButtonLinkProps) {
  const externalRel = target === '_blank' ? (rel ?? 'noopener noreferrer') : rel;

  return (
    <a
      className={`inline-flex min-h-11 items-center justify-center rounded-full border px-5 py-2.5 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-300/60 focus:ring-offset-2 focus:ring-offset-slate-950 ${variants[variant]} ${className}`}
      target={target}
      rel={externalRel}
      {...props}
    >
      {children}
    </a>
  );
}

export default ButtonLink;

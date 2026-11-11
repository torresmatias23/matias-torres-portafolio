import { useRef, useState, type KeyboardEvent } from 'react';

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Formación', href: '#formacion-tecnica' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Tecnologías', href: '#tecnologias' },
  { label: 'CV', href: '#cv' },
  { label: 'Contacto', href: '#contacto' },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const handleMenuKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
      menuButtonRef.current?.focus({ preventScroll: true });
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <nav aria-label="Navegación principal" className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="text-base font-bold tracking-wide text-white">
          Matías Torres
        </a>

        <div className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white lg:px-4"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-slate-100 transition hover:bg-white/15 xl:hidden"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-controls="menu-mobile"
          aria-expanded={isOpen}
          onKeyDown={handleMenuKeyDown}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="relative block h-4 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 h-0.5 w-5 rounded-full bg-current transition ${isOpen ? 'top-2 rotate-45' : 'top-0'}`}
            />
            <span
              className={`absolute left-0 top-2 h-0.5 w-5 rounded-full bg-current transition ${isOpen ? 'opacity-0' : 'opacity-100'}`}
            />
            <span
              className={`absolute left-0 h-0.5 w-5 rounded-full bg-current transition ${isOpen ? 'top-2 -rotate-45' : 'top-4'}`}
            />
          </span>
        </button>
      </nav>

      {isOpen ? (
        <div id="menu-mobile" className="border-t border-white/10 bg-slate-950/85 px-5 py-4 backdrop-blur-xl xl:hidden" onKeyDown={handleMenuKeyDown}>
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Header;

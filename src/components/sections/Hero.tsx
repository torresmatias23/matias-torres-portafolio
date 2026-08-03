import ButtonLink from '../ui/ButtonLink';
import GlassCard from '../ui/GlassCard';

const links = {
  github: 'https://github.com/torresmatias23',
  linkedin: 'https://www.linkedin.com/in/matias-torres-b312b8412/',
};

function Hero() {
  return (
    <section id="inicio" className="section-shell pb-8 pt-10 lg:pb-10 lg:pt-14">
      <div className="grid min-h-[calc(76vh-80px)] items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100 backdrop-blur">
            Disponible desde julio
          </p>
          <h1 className="text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
            Matías Torres
          </h1>
          <p className="mt-5 max-w-2xl text-xl font-medium text-cyan-100 sm:text-2xl">
            Estudiante de Ingeniería en Informática | Desarrollador en formación
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Estudiante de Ingeniería en Informática en Duoc UC, con experiencia en
            proyectos web, mobile, backend, bases de datos, datos e IA aplicada.
            Disponible desde julio para integrarme a equipos tecnológicos y aportar en
            soluciones reales.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="#proyectos" variant="primary">
              Ver proyectos
            </ButtonLink>
            <ButtonLink
              href="/cv/Matias_Torres_CV.pdf?v=2026-08"
              variant="secondary"
              download="Matias_Torres_CV.pdf"
            >
              Descargar CV
            </ButtonLink>
            <ButtonLink
              href={links.github}
              variant="ghost"
              target="_blank"
              aria-label="Abrir GitHub de Matías Torres"
            >
              GitHub
            </ButtonLink>
            <ButtonLink
              href={links.linkedin}
              variant="ghost"
              target="_blank"
              aria-label="Abrir LinkedIn de Matías Torres"
            >
              LinkedIn
            </ButtonLink>
          </div>
        </div>

        <GlassCard className="relative min-h-[360px] overflow-hidden p-3 sm:min-h-[430px] lg:min-h-[480px]">
          <img
            src="/images/hero/portfolio-hero.png"
            alt="Workspace tecnológico oscuro con paneles digitales"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/5 via-slate-950/20 to-slate-950/80" />
          <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/15 bg-slate-950/45 p-5 backdrop-blur-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-200">
              Portfolio profesional
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-200">
              Desarrollo web · Mobile · Backend · Datos
            </p>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

export default Hero;

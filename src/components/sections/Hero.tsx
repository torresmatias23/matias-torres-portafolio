import ButtonLink from '../ui/ButtonLink';
import GlassCard from '../ui/GlassCard';
import { cvUrl } from '../../data/profile';

const links = {
  github: 'https://github.com/torresmatias23',
  linkedin: 'https://www.linkedin.com/in/matias-torres-b312b8412/',
};

function Hero() {
  return (
    <section id="inicio" className="section-shell pb-8 pt-10 lg:pb-10 lg:pt-14">
      <div className="hero-layout">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100 backdrop-blur">
            Disponible para oportunidades laborales
          </p>
          <h1 className="text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
            Matías Torres
          </h1>
          <p className="mt-5 max-w-2xl text-xl font-medium text-cyan-100 sm:text-2xl">
            Estudiante de Ingeniería en Informática | Desarrollo de Software
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Estudiante de Ingeniería en Informática en Duoc UC, con experiencia práctica en desarrollo web y móvil, backend, bases de datos y soluciones empresariales. Durante mi práctica profesional participé en el desarrollo de aplicaciones y sistemas para procesos industriales y comerciales.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="#proyectos" variant="primary">
              Ver proyectos
            </ButtonLink>
            <ButtonLink
              href={cvUrl}
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

        <GlassCard className="hero-visual relative overflow-hidden">
          <img
            src="/images/hero/portfolio-hero.png"
            alt="Workspace tecnológico oscuro con paneles digitales"
            width={1536}
            height={1024}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/5 via-slate-950/20 to-slate-950/80" />
          <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/15 bg-slate-950/45 p-5 backdrop-blur-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-200">
              Desarrollo con experiencia real
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-200">
              Aplicaciones industriales, sistemas comerciales y productos digitales.
            </p>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

export default Hero;

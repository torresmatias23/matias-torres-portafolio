import { projects } from '../../data/projects';
import ButtonLink from '../ui/ButtonLink';
import GlassCard from '../ui/GlassCard';
import SectionTitle from '../ui/SectionTitle';
import ScreenshotCarousel from '../ui/ScreenshotCarousel';

type ProjectActionProps = {
  href: string;
  projectName: string;
  availableLabel: string;
  unavailableLabel: string;
  variant: 'secondary' | 'ghost';
};

function hasProjectUrl(href: string) {
  return href.trim().length > 0 && href !== '#';
}

function ProjectAction({
  href,
  projectName,
  availableLabel,
  unavailableLabel,
  variant,
}: ProjectActionProps) {
  if (hasProjectUrl(href)) {
    return (
      <ButtonLink
        href={href}
        variant={variant}
        target="_blank"
        aria-label={`${availableLabel} de ${projectName}`}
      >
        {availableLabel}
      </ButtonLink>
    );
  }

  return (
    <span
      aria-disabled="true"
      aria-label={`${unavailableLabel} para ${projectName}`}
      className="inline-flex min-h-11 cursor-not-allowed items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-slate-500"
    >
      {unavailableLabel}
    </span>
  );
}

function Projects() {
  return (
    <section id="proyectos" className="section-shell pt-12 lg:pt-16">
      <SectionTitle
        eyebrow="Trabajo"
        title="Proyectos destacados"
        description="Proyectos reales y prototipos funcionales enfocados en desarrollo web, mobile, backend, experiencia de usuario e IA aplicada."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <GlassCard key={project.name} className="flex h-full flex-col overflow-hidden">
            <ScreenshotCarousel
              images={project.screenshots}
              projectName={project.name}
              previewFit={project.previewFit}
              previewFrame={project.previewFrame}
            />

            <div className="flex flex-1 flex-col p-6 pt-2">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                <span className="rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-100">
                  {project.status}
                </span>
              </div>

              <p className="mt-4 leading-7 text-slate-300">{project.description}</p>

              <div className="mt-5 grid gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100/80">
                    Problema
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {project.problemSolved}
                  </p>
                </div>
                <div className="grid gap-3 lg:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-100/80">
                      Rol
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{project.role}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-100/80">
                      Aprendizaje
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {project.learning}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <ProjectAction
                  href={project.demoUrl}
                  projectName={project.name}
                  availableLabel="Demo"
                  unavailableLabel="Demo próximamente"
                  variant="secondary"
                />
                <ProjectAction
                  href={project.repositoryUrl}
                  projectName={project.name}
                  availableLabel="Repositorio"
                  unavailableLabel="Repositorio privado"
                  variant="ghost"
                />
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}

export default Projects;

import { projects, type Project } from '../../data/projects';
import ButtonLink from '../ui/ButtonLink';
import GlassCard from '../ui/GlassCard';
import SectionTitle from '../ui/SectionTitle';
import ScreenshotCarousel from '../ui/ScreenshotCarousel';
import SolutionGalleryPreview from '../ui/SolutionGalleryPreview';

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
        rel="noopener noreferrer"
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

function ProjectCard({ project, className = '' }: { project: Project; className?: string }) {
  const isFeatured = project.featured === true;

  return (
    <GlassCard
      className={`flex h-full flex-col overflow-hidden ${
        isFeatured
          ? 'ring-1 ring-inset ring-cyan-300/20'
          : ''
      } ${className}`}
    >
      <div className="min-w-0">
        {project.solutionGallery ? <SolutionGalleryPreview images={project.solutionGallery} /> : <ScreenshotCarousel
          images={project.screenshots}
          labels={project.screenshotLabels}
          projectName={project.name}
          previewFit={project.previewFit}
          previewFrame={project.previewFrame}
        />}
      </div>

      <div className="flex flex-1 flex-col p-6 pt-2">
        {project.type ? (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100/75">
            {project.type}
          </p>
        ) : null}

        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-2xl font-bold text-white">{project.name}</h3>
            {isFeatured ? (
              <span className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                Proyecto destacado
              </span>
            ) : null}
          </div>
          <span className="rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-100">
            {project.status}
          </span>
        </div>

        <p className="mt-4 leading-7 text-slate-300">{project.description}</p>

        <details className="project-details mt-5">
          <summary className="cursor-pointer py-3 font-medium text-cyan-100">Explorar el proyecto</summary>
        <div className="grid gap-4 pb-5 pt-3">
          {project.solutions?.map((solution) => (
            <div key={solution.name} className="border-l border-cyan-200/30 pl-4">
              <h4 className="font-semibold text-white">{solution.name}</h4>
              <p className="mt-2 text-sm leading-6 text-slate-300">{solution.description}</p>
            </div>
          ))}
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100/80">
              Problema
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-300">{project.problemSolved}</p>
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
              <p className="mt-2 text-sm leading-6 text-slate-300">{project.learning}</p>
            </div>
          </div>
        </div>
        </details>

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

        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          <ProjectAction
            href={project.demoUrl}
            projectName={project.name}
            availableLabel="Ver demo"
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
        {projects.map((project, index) => (
          <ProjectCard
            key={project.name}
            project={project}
            className={
              projects.length % 2 === 1 && index === projects.length - 1
                ? 'md:col-span-2 md:mx-auto md:w-[calc(50%_-_0.75rem)]'
                : ''
            }
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;

import ButtonLink from '../ui/ButtonLink';
import GlassCard from '../ui/GlassCard';
import SectionTitle from '../ui/SectionTitle';

function CVSection() {
  return (
    <section id="cv" className="section-shell">
      <SectionTitle
        eyebrow="Curriculum"
        title="CV"
        description="CV profesional disponible para descarga."
      />

      <GlassCard className="mx-auto max-w-3xl p-6 text-center sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-100/80">
          Matías Andrés Torres Troncoso
        </p>
        <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
          Puedes descargar mi curriculum profesional en formato PDF para revisar mi
          formación, habilidades técnicas, experiencia y proyectos destacados.
        </p>
        <div className="mt-7">
          <ButtonLink
            href="/cv/Matias_Torres_CV.pdf?v=2026-08"
            variant="primary"
            download="Matias_Torres_CV.pdf"
            aria-label="Descargar CV profesional de Matías Andrés Torres Troncoso"
          >
            Descargar CV
          </ButtonLink>
        </div>
      </GlassCard>
    </section>
  );
}

export default CVSection;

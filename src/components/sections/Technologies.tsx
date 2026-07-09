import { technologyCategories } from '../../data/technologies';
import GlassCard from '../ui/GlassCard';
import SectionTitle from '../ui/SectionTitle';

function Technologies() {
  return (
    <section id="tecnologias" className="section-shell">
      <SectionTitle
        eyebrow="Stack"
        title="Tecnologías"
        description="Herramientas, lenguajes y áreas técnicas trabajadas en proyectos académicos, personales y de aprendizaje aplicado."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {technologyCategories.map((group) => (
          <GlassCard key={group.category} className="p-6">
            <h3 className="text-lg font-bold text-white">{group.category}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan-200/10 bg-cyan-200/[0.07] px-3 py-1.5 text-sm text-cyan-50"
                >
                  {item}
                </span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}

export default Technologies;

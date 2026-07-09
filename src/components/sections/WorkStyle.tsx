import GlassCard from '../ui/GlassCard';
import SectionTitle from '../ui/SectionTitle';

const workStyleItems = [
  {
    title: 'Aprendizaje constante',
    description:
      'Me adapto a nuevas tecnologías, herramientas y contextos de trabajo, buscando mejorar en cada proyecto y aprender de la experiencia del equipo.',
  },
  {
    title: 'Resolución de problemas',
    description:
      'Analizo requerimientos, divido problemas grandes en partes manejables y busco soluciones prácticas, claras y mantenibles.',
  },
  {
    title: 'Trabajo en equipo',
    description:
      'Valoro la comunicación clara, la responsabilidad y la coordinación para avanzar en objetivos comunes dentro de un equipo de desarrollo.',
  },
  {
    title: 'Enfoque en mejora',
    description:
      'Me interesa construir soluciones útiles, ordenadas y pensadas para usuarios reales, aportando a la mejora de procesos mediante tecnología.',
  },
];

function WorkStyle() {
  return (
    <section id="como-trabajo" className="section-shell pt-10 lg:pt-14">
      <SectionTitle
        eyebrow="Forma de trabajo"
        title="Cómo trabajo"
        description="Además de la base técnica, me enfoco en trabajar con orden, comunicación y disposición para aprender en contextos reales."
      />

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {workStyleItems.map((item) => (
          <GlassCard key={item.title} className="p-6">
            <h3 className="text-lg font-bold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}

export default WorkStyle;

import GlassCard from '../ui/GlassCard';
import SectionTitle from '../ui/SectionTitle';

const contributions = [
  {
    title: 'Desarrollo web y mobile',
    description:
      'Construcción de interfaces modernas, responsivas y orientadas a usuario, aplicando React, TypeScript, Flutter y buenas prácticas de diseño.',
  },
  {
    title: 'Backend y bases de datos',
    description:
      'Integración de APIs, autenticación, lógica de negocio, consultas SQL y conexión entre aplicaciones, servicios y bases de datos.',
  },
  {
    title: 'Datos e inteligencia de negocios',
    description:
      'Apoyo en procesos de carga, limpieza, análisis y visualización de datos para transformar información en reportes útiles.',
  },
  {
    title: 'Aprendizaje y trabajo en equipo',
    description:
      'Capacidad de adaptación, comunicación, responsabilidad, documentación y disposición para aprender nuevas tecnologías en contextos reales.',
  },
];

function Contribution() {
  return (
    <section id="aporte" className="section-shell pt-10 lg:pt-14">
      <SectionTitle
        eyebrow="Aporte"
        title="Qué puedo aportar"
        description="Áreas donde puedo contribuir desde mi formación, proyectos y experiencia práctica."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {contributions.map((item, index) => (
          <GlassCard key={item.title} className="p-6 sm:p-7">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-2xl border border-violet-200/20 bg-violet-200/10 text-xs font-bold text-violet-100">
                {index + 1}
              </span>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
            </div>
            <p className="leading-7 text-slate-300">{item.description}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}

export default Contribution;

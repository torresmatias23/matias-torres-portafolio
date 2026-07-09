import GlassCard from '../ui/GlassCard';
import SectionTitle from '../ui/SectionTitle';

type TrainingArea = {
  title: string;
  description: string;
  concepts: string[];
};

const trainingAreas: TrainingArea[] = [
  {
    title: 'Desarrollo de software',
    description:
      'He trabajado en programación web, móvil y de escritorio, aplicando lógica de programación, arquitectura de software, diseño de prototipos, ingeniería de software y construcción de soluciones digitales.',
    concepts: [
      'Java',
      'JavaScript',
      'TypeScript',
      'React',
      'Django',
      'HTML',
      'CSS',
      'Tailwind CSS',
      'Programación web',
      'Programación móvil',
    ],
  },
  {
    title: 'Bases de datos',
    description:
      'He desarrollado conocimientos en modelamiento de bases de datos, consultas SQL, diseño de estructuras relacionales e integración de datos con aplicaciones backend y sistemas web.',
    concepts: [
      'SQL',
      'PostgreSQL',
      'MySQL',
      'Modelamiento de datos',
      'Consultas SQL',
      'Bases de datos relacionales',
    ],
  },
  {
    title: 'Backend y APIs',
    description:
      'He trabajado con lógica backend, autenticación, rutas protegidas, APIs, manejo de usuarios, roles e integración entre frontend, servidor y base de datos.',
    concepts: ['Python', 'FastAPI', 'Django', 'Node.js', 'APIs REST', 'WebSockets', 'JWT'],
  },
  {
    title: 'Datos e inteligencia de negocios',
    description:
      'He aplicado análisis de datos, inteligencia de negocios, minería de datos, big data e ingesta de información, trabajando procesos de carga, limpieza, transformación y visualización de datos.',
    concepts: [
      'Big Data',
      'Minería de datos',
      'Análisis de datos',
      'Power BI',
      'Looker Studio',
      'BigQuery',
      'Alteryx',
      'Excel',
      'CSV',
      'Parquet',
    ],
  },
  {
    title: 'Cloud y ciberseguridad',
    description:
      'Mi formación también incluye conocimientos en seguridad de sistemas computacionales, gestión de riesgos, ciberseguridad aplicada a cloud y conceptos asociados a contenedores.',
    concepts: [
      'Google Cloud',
      'Cloud Run',
      'Pub/Sub',
      'Storage',
      'Ciberseguridad en cloud',
      'Contenedores',
      'Gestión de riesgos',
    ],
  },
  {
    title: 'Gestión y calidad',
    description:
      'He trabajado conceptos de calidad de software, técnicas de calidad, BPM, evaluación de proyectos y gestión de proyectos informáticos, orientados a desarrollar soluciones ordenadas y mantenibles.',
    concepts: [
      'Calidad de software',
      'BPM',
      'Evaluación de proyectos',
      'Gestión de proyectos informáticos',
      'Técnicas de calidad',
    ],
  },
];

function TechnicalTraining() {
  return (
    <section id="formacion-tecnica" className="section-shell pt-12 lg:pt-16">
      <SectionTitle
        eyebrow="Formación"
        title="Formación técnica"
        description="Áreas trabajadas durante mi formación en Ingeniería en Informática, aplicadas en proyectos académicos y personales."
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {trainingAreas.map((area, index) => (
          <GlassCard key={area.title} className="flex h-full flex-col p-6">
            <div className="mb-5 flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyan-200/20 bg-cyan-200/10 text-sm font-bold text-cyan-100 shadow-[0_0_28px_rgba(34,211,238,0.16)]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="pt-1 text-xl font-bold text-white">{area.title}</h3>
            </div>

            <p className="flex-1 text-sm leading-7 text-slate-300">{area.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {area.concepts.map((concept) => (
                <span
                  key={concept}
                  className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-1.5 text-xs font-medium text-slate-200"
                >
                  {concept}
                </span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}

export default TechnicalTraining;

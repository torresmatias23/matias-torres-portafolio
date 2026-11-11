import SectionTitle from '../ui/SectionTitle';

const skills = ['Flutter y Dart', 'WordPress y PHP', 'JavaScript', 'MySQL y SQLite', 'Supabase', 'APIs e integración', 'Autenticación y permisos', 'QA y pruebas funcionales', 'Documentación técnica'];
const outcomes = [
  { value: '7', label: 'Migraciones en Supabase DEV' },
  { value: '2.370', label: 'Ejecuciones SQL satisfactorias' },
  { value: '415', label: 'Pruebas Flutter satisfactorias' },
];

export default function Experience() {
  return (
    <section id="experiencia" className="section-shell">
      <SectionTitle title="Experiencia profesional" description="Desarrollo de software aplicado a procesos industriales y comerciales." />
      <div className="experience-layout">
        <div className="experience-period">
          <p className="text-sm font-medium text-cyan-200">Agosto 2026 - Octubre 2026</p>
          <p className="mt-3 text-sm text-slate-300">Práctica finalizada</p>
        </div>
        <div className="min-w-0">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">EnergyACS SpA / IMPOFUSION</h3>
          <p className="mt-3 text-lg text-cyan-100">Práctica Profesional - Desarrollo de Software</p>
          <p className="mt-5 max-w-3xl leading-7 text-slate-300">Desarrollo y validación de soluciones digitales para procesos industriales y comerciales, incluyendo aplicaciones móviles, portales web, sistemas de gestión, integración de datos, pruebas y documentación técnica.</p>
          <ul className="mt-6 grid gap-3 text-slate-200 sm:grid-cols-2">
            {['Funcionalidades en IMPUS FUSION', 'Portal de Créditos de siete etapas', 'CRM para gestión de clientes', 'Formularios y captación QR'].map((item) => <li key={item} className="border-l-2 border-cyan-300/40 pl-3 leading-6">{item}</li>)}
          </ul>
          <dl className="mt-8 grid grid-cols-1 gap-5 border-y border-white/10 py-6 sm:grid-cols-3">
            {outcomes.map((item) => <div key={item.label}><dt className="text-sm leading-6 text-slate-300">{item.label}</dt><dd className="mt-2 text-3xl font-semibold tabular-nums text-white">{item.value}</dd></div>)}
          </dl>
          <div className="mt-6 flex flex-wrap gap-2">{skills.map((skill) => <span className="tech-tag" key={skill}>{skill}</span>)}</div>
          <a className="mt-6 inline-flex py-2 font-medium text-cyan-200 hover:text-white" href="#proyectos">Ver soluciones desarrolladas</a>
        </div>
      </div>
    </section>
  );
}

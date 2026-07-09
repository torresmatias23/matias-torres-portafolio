import GlassCard from '../ui/GlassCard';

const summaryItems = [
  {
    value: '4',
    label: 'Proyectos destacados',
  },
  {
    value: '+10',
    label: 'Tecnologías aplicadas',
  },
  {
    value: 'Web · Mobile · Backend',
    label: 'Áreas de desarrollo',
  },
  {
    value: 'Datos · Cloud · IA',
    label: 'Áreas complementarias',
  },
];

function ProfessionalSummary() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 pb-10 sm:px-6 lg:px-8 lg:pb-14">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {summaryItems.map((item) => (
          <GlassCard key={item.label} className="p-5">
            <p className="text-2xl font-black leading-tight text-white sm:text-3xl">
              {item.value}
            </p>
            <p className="mt-2 text-sm font-medium text-slate-300">{item.label}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}

export default ProfessionalSummary;

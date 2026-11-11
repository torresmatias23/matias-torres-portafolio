import { useState } from 'react';
import GlassCard from '../ui/GlassCard';
import SectionTitle from '../ui/SectionTitle';

const profileImage = '/images/profile/matias-torres-perfil.webp';
const hasProfileImage = Object.keys(import.meta.glob('/public/images/profile/*')).some((path) => path.endsWith('/matias-torres-perfil.webp'));

function ProfilePreview() {
  const [showPhoto, setShowPhoto] = useState(hasProfileImage);

  return (
    <GlassCard className="mx-auto flex w-full max-w-sm flex-col items-center justify-center p-6 text-center lg:mx-0">
      <div className="flex h-36 w-36 shrink-0 items-center justify-center overflow-hidden rounded-full border border-cyan-200/20 bg-cyan-200/5 sm:h-40 sm:w-40">
        {showPhoto ? (
          <img
            src={profileImage}
            alt="Fotografía de Matías Torres"
            width={1000}
            height={1177}
            loading="lazy"
            className="h-full w-full origin-top scale-150 object-cover object-[50%_20%]"
            onError={() => setShowPhoto(false)}
          />
        ) : (
          <span className="text-4xl font-black tracking-wide text-cyan-100">MT</span>
        )}
      </div>
      <p className="mt-5 text-lg font-bold text-white">Matías Torres</p>
      <p className="mt-1 text-sm leading-6 text-slate-300">
        Estudiante de Ingeniería en Informática
      </p>
    </GlassCard>
  );
}

function About() {
  return (
    <section id="sobre-mi" className="section-shell pt-10 lg:pt-14">
      <SectionTitle
        eyebrow="Perfil"
        title="Sobre mí"
        description="Perfil profesional orientado a desarrollo, tecnología y resolución de problemas reales."
      />

      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.5fr] lg:items-stretch">
        <ProfilePreview />

        <GlassCard className="p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-100/80">
            Matías Andrés Torres Troncoso
          </p>
          <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
            Soy estudiante de Ingeniería en Informática en Duoc UC, con interés en el desarrollo de software, aplicaciones web y móviles, bases de datos y nuevas tecnologías.
          </p>
          <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
            Durante mi formación he trabajado en proyectos académicos, personales y profesionales, utilizando diferentes lenguajes, frameworks y herramientas para construir soluciones digitales. Me interesa comprender los problemas, diseñar alternativas y desarrollar aplicaciones que sean funcionales, claras y fáciles de utilizar.
          </p>
          <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
            Me considero una persona responsable, comprometida con el aprendizaje continuo y capaz de adaptarme a nuevos desafíos. Disfruto trabajar en equipo, compartir conocimientos y seguir desarrollando mis habilidades como profesional del área informática.
          </p>
        </GlassCard>
      </div>
    </section>
  );
}

export default About;

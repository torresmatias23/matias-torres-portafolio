import { useState } from 'react';
import GlassCard from '../ui/GlassCard';
import SectionTitle from '../ui/SectionTitle';

const profileImage = '/images/profile/matias-torres.png';

function ProfilePreview() {
  const [showPhoto, setShowPhoto] = useState(true);

  return (
    <GlassCard className="mx-auto flex max-w-sm flex-col items-center p-6 text-center lg:mx-0">
      <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border border-cyan-200/25 bg-cyan-200/10 shadow-[0_0_42px_rgba(34,211,238,0.16)]">
        {showPhoto ? (
          <img
            src={profileImage}
            alt="Foto de perfil de Matías Andrés Torres Troncoso"
            className="h-full w-full object-cover"
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
            Soy estudiante de Ingeniería en Informática en Duoc UC, actualmente enfocado
            en fortalecer mi perfil como desarrollador a través de proyectos web,
            mobile y backend. Me interesa crear soluciones digitales útiles, ordenadas
            y escalables, combinando desarrollo de software, bases de datos,
            experiencia de usuario e inteligencia artificial aplicada.
          </p>
          <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
            Durante mi formación he trabajado en proyectos personales y académicos que
            integran tecnologías como React, TypeScript, Flutter, FastAPI, PostgreSQL y
            herramientas de análisis de datos. Me interesa aportar con compromiso,
            aprendizaje rápido, trabajo en equipo y una mirada orientada a resolver
            problemas reales mediante tecnología.
          </p>
        </GlassCard>
      </div>
    </section>
  );
}

export default About;

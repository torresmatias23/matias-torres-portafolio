import ButtonLink from '../ui/ButtonLink';
import GlassCard from '../ui/GlassCard';
import SectionTitle from '../ui/SectionTitle';

const contact = {
  fullName: 'Matías Andrés Torres Troncoso',
  email: 'matiastorres2623@gmail.com',
  phone: '+56 9 9977 5734',
  emailHref: 'mailto:matiastorres2623@gmail.com',
  phoneHref: 'tel:+56999775734',
  whatsAppHref: 'https://wa.me/56999775734',
  githubHref: 'https://github.com/torresmatias23',
  linkedinHref: 'https://www.linkedin.com/in/matias-torres-b312b8412/',
};

function Contact() {
  return (
    <section id="contacto" className="section-shell">
      <SectionTitle
        eyebrow="Contacto"
        title="Hablemos"
        description="Disponible para oportunidades laborales en desarrollo de software y equipos tecnológicos."
      />

      <GlassCard className="mx-auto max-w-4xl p-6 sm:p-8">
        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-100/80">
              {contact.fullName}
            </p>
            <a
              href={contact.emailHref}
              className="break-all text-lg font-semibold text-white transition hover:text-cyan-100"
              aria-label="Enviar correo a Matías Andrés Torres Troncoso"
            >
              {contact.email}
            </a>
            <a
              href={contact.phoneHref}
              className="mt-2 block text-base font-medium text-cyan-100 transition hover:text-white"
              aria-label="Llamar a Matías Andrés Torres Troncoso"
            >
              {contact.phone}
            </a>
            <p className="mt-3 leading-7 text-slate-300">
              Me interesa aportar en soluciones web, móviles y empresariales. Conversemos sobre tu equipo y sus próximos desafíos.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 md:justify-end">
            <ButtonLink
              href={contact.emailHref}
              variant="primary"
              aria-label="Enviar correo a Matías Andrés Torres Troncoso"
            >
              Enviar correo
            </ButtonLink>
            <ButtonLink
              href={contact.whatsAppHref}
              variant="secondary"
              target="_blank"
              aria-label="Contactar a Matías Andrés Torres Troncoso por WhatsApp"
            >
              WhatsApp
            </ButtonLink>
            <ButtonLink
              href={contact.githubHref}
              variant="ghost"
              target="_blank"
              aria-label="Abrir GitHub de Matías Torres"
            >
              GitHub
            </ButtonLink>
            <ButtonLink
              href={contact.linkedinHref}
              variant="ghost"
              target="_blank"
              aria-label="Abrir LinkedIn de Matías Torres"
            >
              LinkedIn
            </ButtonLink>
          </div>
        </div>
      </GlassCard>
    </section>
  );
}

export default Contact;

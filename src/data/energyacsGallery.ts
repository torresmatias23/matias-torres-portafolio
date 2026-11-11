export type SolutionScreenshot = {
  src: string;
  category: string;
  title: string;
  description: string;
};

type PlannedScreenshot = Omit<SolutionScreenshot, 'src'> & {
  file: string;
  fallback?: string;
};

const plannedScreenshots: PlannedScreenshot[] = [
  { category: 'IMPUS FUSION', title: 'Inicio', file: '01-impus-fusion-inicio.webp', description: 'Vista de inicio de la aplicación industrial y acceso a sus operaciones.' },
  { category: 'IMPUS FUSION', title: 'Proceso técnico', file: '02-impus-fusion-proceso.webp', description: 'Interfaz del flujo de trabajo y registro del proceso técnico.' },
  { category: 'Portal de Créditos', title: 'Formulario de solicitud', file: '03-portal-creditos-formulario.webp', fallback: '03-portal-creditos-formulario.png', description: 'Solicitud de crédito comercial organizada en siete etapas.' },
  { category: 'Portal de Créditos', title: 'Gestión de créditos', file: '04-portal-creditos-gestion.webp', description: 'Vista de gestión y seguimiento de solicitudes de crédito.' },
  { category: 'CRM Comercial', title: 'Registro de clientes', file: '05-crm-registro-cliente.webp', fallback: '06-crm-registro-lead.png', description: 'Formulario de registro de contactos e intereses comerciales.' },
  { category: 'CRM Comercial', title: 'Panel administrativo', file: '06-crm-panel-administrativo.webp', description: 'Vista administrativa del sistema de gestión comercial.' },
  { category: 'CRM Comercial', title: 'Centro de Campañas', file: '08-crm-centro-campanas.webp', description: 'Planificación y seguimiento de campañas. Los envíos comerciales reales no se presentan como habilitados.' },
  { category: 'CRM Comercial', title: 'Registro QR y consentimiento', file: '09-registro-qr-consentimiento.webp', fallback: '09-registro-qr.jpg', description: 'Captación mediante QR, selección de intereses y consentimiento de contacto.' },
  { category: 'E-IMPUS y privacidad', title: 'Enlaces corporativos', file: '07-e-impus-enlaces.webp', description: 'Acceso a los canales digitales corporativos desde una página de enlaces.' },
  { category: 'E-IMPUS y privacidad', title: 'Política de Privacidad', file: '10-politica-privacidad.webp', description: 'Información sobre el tratamiento de datos personales en los servicios digitales.' },
];

// Only explicitly listed files already present in the public folder are eligible.
const publicFiles = new Set(Object.keys(import.meta.glob('/public/images/projects/energyacs/*', { query: '?url', import: 'default' })));
const publicPrefix = '/public/images/projects/energyacs/';

export const energyacsGallery: SolutionScreenshot[] = plannedScreenshots.flatMap(({ file, fallback, ...details }) => {
  const availableFile = publicFiles.has(publicPrefix + file) ? file : fallback && publicFiles.has(publicPrefix + fallback) ? fallback : undefined;
  return availableFile ? [{ ...details, src: `/images/projects/energyacs/${availableFile}` }] : [];
});

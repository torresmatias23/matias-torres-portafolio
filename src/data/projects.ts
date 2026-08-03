export type Project = {
  name: string;
  type?: string;
  description: string;
  problemSolved: string;
  technologies: string[];
  status: string;
  role: string;
  learning: string;
  screenshots: string[];
  previewFit?: 'cover' | 'contain';
  previewFrame?: 'phone';
  featured?: boolean;
  demoUrl: string;
  repositoryUrl: string;
};

export const projects: Project[] = [
  {
    name: 'BYV.STOREEE',
    type: 'E-commerce streetwear para negocio real',
    description:
      'Plataforma de comercio electrónico desarrollada para un emprendimiento real de streetwear en Chile. Permite presentar productos en stock inmediato, artículos disponibles a pedido, próximos lanzamientos y selecciones destacadas, facilitando la consulta y compra mediante WhatsApp.',
    problemSolved:
      'Centraliza el catálogo del negocio, diferencia claramente la disponibilidad y modalidad de compra de cada producto, mejora la presentación comercial y permite administrar productos, variantes, imágenes y próximos drops desde un panel protegido.',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Supabase',
      'PostgreSQL',
      'Supabase Auth',
      'Supabase Storage',
      'Vercel',
    ],
    status: 'Proyecto real funcional en desarrollo',
    role:
      'Desarrollo full stack, diseño de interfaz, experiencia de usuario, modelamiento de datos, integración con Supabase, autenticación, administración de productos, variantes, imágenes, drops y despliegue en Vercel.',
    learning:
      'Demuestra desarrollo de una plataforma comercial completa, uso de Next.js App Router, autenticación y roles, CRUD administrativo, almacenamiento de imágenes, modelamiento relacional, validaciones, diseño responsive, SEO y despliegue continuo.',
    screenshots: [
      '/images/projects/byv-storeee/home.png',
      '/images/projects/byv-storeee/featured.png',
      '/images/projects/byv-storeee/stock.png',
      '/images/projects/byv-storeee/made-to-order.png',
      '/images/projects/byv-storeee/drops.png',
      '/images/projects/byv-storeee/categories.png',
      '/images/projects/byv-storeee/purchase-options.png',
      '/images/projects/byv-storeee/contact.png',
    ],
    previewFit: 'contain',
    featured: true,
    demoUrl: 'https://byv-storeee.vercel.app',
    repositoryUrl: '#',
  },
  {
    name: 'Habita360',
    description:
      'Sistema de gestión inteligente para condominios, orientado a centralizar la administración de unidades, pagos, comunicados, reservas, mantenimiento, usuarios y roles.',
    problemSolved:
      'Ayuda a mejorar la organización administrativa de condominios mediante una plataforma web con vistas diferenciadas, autenticación y módulos internos.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'JWT', 'API REST'],
    status: 'En desarrollo',
    role:
      'Desarrollo de interfaz, estructura de vistas, módulos administrativos, integración con backend, autenticación JWT y organización de rutas del frontend.',
    learning:
      'Demuestra desarrollo de un sistema web completo, consumo de API, manejo de autenticación, roles, vistas administrativas y solución de problemas reales.',
    screenshots: [
      '/images/projects/habita360/dashboard.png',
      '/images/projects/habita360/login.png',
      '/images/projects/habita360/units.png',
      '/images/projects/habita360/profile.png',
    ],
    demoUrl: '#',
    repositoryUrl: '#',
  },
  {
    name: 'VoxIA',
    description:
      'Sistema personal orientado a la gestión digital de pedidos para negocios, permitiendo configurar catálogo, recibir pedidos por texto o voz, visualizar pedidos en cocina, entrenar términos de IA y revisar métricas operativas.',
    problemSolved:
      'Busca agilizar la operación de pequeños negocios mediante una solución digital que centraliza pedidos, productos, estados de preparación, historial y análisis de datos.',
    technologies: ['React Native', 'Expo', 'TypeScript', 'Python', 'FastAPI', 'WebSockets'],
    status: 'Prototipo funcional en desarrollo',
    role:
      'Desarrollo de interfaz, lógica de pedidos, catálogo, flujo de cocina, entrenamiento de términos, backend e integración en tiempo real.',
    learning:
      'Demuestra integración entre aplicación, backend, APIs, WebSockets, lógica de negocio, automatización e IA aplicada a pedidos.',
    screenshots: [
      '/images/projects/voxia/dashboard.png',
      '/images/projects/voxia/onboarding.png',
      '/images/projects/voxia/kitchen.png',
      '/images/projects/voxia/training.png',
      '/images/projects/voxia/analytics.png',
    ],
    previewFit: 'contain',
    demoUrl: '#',
    repositoryUrl: '#',
  },
  {
    name: 'MiCloset',
    description:
      'Aplicación móvil enfocada en la organización de prendas, creación de outfits, gestión de closet digital y generación de sugerencias de looks según ocasión, clima y estilo.',
    problemSolved:
      'Ayuda a los usuarios a organizar su ropa, visualizar prendas disponibles, guardar outfits y planificar combinaciones desde una aplicación móvil.',
    technologies: ['Flutter', 'Dart'],
    status: 'Base funcional en desarrollo',
    role:
      'Diseño de pantallas, navegación mobile, estructura de vistas, gestión de prendas, creación de outfits, filtros, favoritos y experiencia de usuario.',
    learning:
      'Demuestra desarrollo mobile, diseño de interfaces, navegación entre pantallas, organización de información, formularios y lógica aplicada a una app de uso cotidiano.',
    screenshots: [
      '/images/projects/micloset/closet.png',
      '/images/projects/micloset/suggestions.png',
      '/images/projects/micloset/outfits.png',
      '/images/projects/micloset/outfit-detail.png',
      '/images/projects/micloset/add-clothing.png',
      '/images/projects/micloset/home.png',
    ],
    previewFit: 'contain',
    previewFrame: 'phone',
    demoUrl: '#',
    repositoryUrl: '#',
  },
  {
    name: 'Caprichos de Luna',
    description:
      'Sitio web desarrollado para un emprendimiento real de venta de ropa, orientado a fortalecer su presencia digital, presentar productos, comunicar contenido útil, destacar una línea premium y facilitar el contacto con clientas.',
    problemSolved:
      'Ayuda a un negocio real a mejorar su imagen digital, ordenar su contenido comercial y ofrecer una experiencia más clara, atractiva y cercana para potenciales clientas.',
    technologies: ['React', 'Vite', 'HTML', 'CSS', 'JavaScript/TypeScript'],
    status: 'Proyecto aplicado a negocio real',
    role:
      'Diseño web, organización de contenido, estructura visual, enfoque comercial, experiencia de usuario y adaptación responsive.',
    learning:
      'Demuestra capacidad para aplicar desarrollo web a una necesidad real, considerando identidad de marca, contenido comercial, presentación visual, comunicación con clientas y experiencia responsive.',
    screenshots: [
      '/images/projects/caprichos-luna/home.png',
      '/images/projects/caprichos-luna/products.png',
      '/images/projects/caprichos-luna/luxury.png',
      '/images/projects/caprichos-luna/features.png',
      '/images/projects/caprichos-luna/about.png',
      '/images/projects/caprichos-luna/community.png',
      '/images/projects/caprichos-luna/mobile.png',
    ],
    previewFit: 'contain',
    demoUrl: '#',
    repositoryUrl: '#',
  },
];

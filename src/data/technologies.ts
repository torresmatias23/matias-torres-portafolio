export type TechnologyCategory = {
  category: string;
  items: string[];
};

export const technologyCategories: TechnologyCategory[] = [
  {
    category: 'Frontend',
    items: [
      'Next.js',
      'React',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'Tailwind CSS',
      'Vite',
      'WordPress',
    ],
  },
  {
    category: 'Mobile',
    items: ['Flutter', 'Dart', 'React Native', 'Expo', 'Diseño responsive'],
  },
  {
    category: 'Backend y bases de datos',
    items: [
      'Python',
      'FastAPI',
      'Django',
      'Node.js',
      'PHP',
      'NestJS',
      'Prisma',
      'Java',
      'Supabase',
      'APIs REST',
      'WebSockets',
      'JWT',
      'Autenticación',
      'Storage',
      'SQL',
      'PostgreSQL',
      'MySQL',
      'SQLite',
      'Drift',
      'Firebase',
      'MongoDB',
      'Modelamiento de datos',
    ],
  },
  {
    category: 'Datos y BI',
    items: [
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
    category: 'Cloud y seguridad',
    items: [
      'Google Cloud',
      'Cloud Run',
      'Pub/Sub',
      'Ciberseguridad en cloud',
      'Contenedores',
      'Gestión de riesgos',
    ],
  },
  {
    category: 'Herramientas',
    items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Netlify', 'Vercel', 'npm'],
  },
];

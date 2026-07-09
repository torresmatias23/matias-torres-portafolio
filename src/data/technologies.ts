export type TechnologyCategory = {
  category: string;
  items: string[];
};

export const technologyCategories: TechnologyCategory[] = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Vite'],
  },
  {
    category: 'Mobile',
    items: ['Flutter', 'Dart', 'React Native', 'Expo', 'Diseño responsive'],
  },
  {
    category: 'Backend',
    items: ['Python', 'FastAPI', 'Django', 'Node.js', 'Java', 'APIs REST', 'WebSockets', 'JWT'],
  },
  {
    category: 'Bases de datos',
    items: ['SQL', 'PostgreSQL', 'MySQL', 'Firebase', 'MongoDB', 'Modelamiento de datos'],
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
      'Storage',
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

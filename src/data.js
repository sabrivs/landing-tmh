export const contactEmail = 'contacto@transparentmentalhealth.com';

export const nav = [
  { to: '/', label: 'Inicio' },
  { to: '/quienes-somos', label: 'Quiénes somos' },
  { to: '/software-clinico', label: 'Software clínico' },
  { to: '/contacto', label: 'Contacto' }
];

export const homeCards = [
  {
    to: '/quienes-somos',
    label: 'Quiénes somos',
    title: 'Misión, visión y equipo',
    body: 'StartUp de desarrollo tecnológico especializada en salud mental de habla hispana.'
  },
  {
    to: '/software-clinico',
    label: 'Software clínico',
    title: 'Ficha Clínica Inteligente',
    body: 'Registro clínico, visión integrada del caso y apoyo al razonamiento con IA.'
  },
  {
    to: '/contacto',
    label: 'Contacto',
    title: 'Suscripción y demo',
    body: 'Escríbenos y te enviamos las condiciones de contratación vigentes.'
  }
];

export const trust = [
  { icon: 'shield', title: 'Seguridad y confidencialidad', body: 'Protegemos tus datos y los de tus pacientes con los más altos estándares.' },
  { icon: 'brain', title: 'Inteligencia clínica', body: 'IA que apoya tu juicio profesional, sin reemplazarlo.' },
  { icon: 'layers', title: 'Todo en un solo lugar', body: 'Diagnóstico, tratamiento y seguimiento en una sola plataforma.' }
];

export const aiLayers = [
  { icon: 'database', title: 'Datos estructurados', body: 'Registro clínico ordenado y consultable.' },
  { icon: 'cpu', title: 'Análisis con IA', body: 'Insumos para la formulación de hipótesis.' },
  { icon: 'usercheck', title: 'Decisión profesional', body: 'El criterio clínico siempre al final.' }
];

export const pillars = [
  { icon: 'target', title: 'Nuestra misión', body: 'Desarrollar el software más innovador de habla hispana para el análisis de casos de psicólogos y psiquiatras.' },
  { icon: 'telescope', title: 'Nuestra visión', body: 'Conectar innovación, evidencia científica y práctica profesional, con las personas y el juicio clínico en el centro.' },
  { icon: 'hands', title: 'Nuestro propósito', body: 'Potenciar las capacidades de los profesionales en procesos que hoy exigen mucho tiempo, organización y análisis.' }
];

// TODO: reemplazar por el equipo real + fotos en public/assets/team-*.jpg
export const team = [
  { photo: '/assets/team-1.jpg', name: 'CEO y fundadora', role: 'Por completar', bio: 'Texto con la reseña curricular de la CEO.' },
  { photo: '/assets/team-2.jpg', name: 'Socio fundador', role: 'Por completar', bio: 'Texto con la reseña curricular del socio fundador.' },
  { photo: '/assets/team-3.jpg', name: 'Socia fundadora', role: 'Por completar', bio: 'Texto con la reseña curricular de la socia fundadora.' }
];

export const features = [
  { icon: 'folder', title: 'Registra y organiza tus sesiones',
    body: 'Mantén la información clínica de cada paciente organizada y disponible a lo largo del proceso terapéutico.',
    detail: 'Facilita la continuidad y el seguimiento de las intervenciones a lo largo de todo el tratamiento.' },
  { icon: 'layers', title: 'Construye una visión integrada del caso',
    body: 'TMH ayuda a organizar antecedentes, síntomas, evolución e información relevante de cada consultante.',
    detail: 'El objetivo es facilitar la comprensión global del paciente en un solo entorno de trabajo.' },
  { icon: 'brain', title: 'Apoya tu razonamiento clínico',
    body: 'Herramientas de inteligencia artificial que analizan la información registrada de cada caso.',
    detail: 'Generan insumos que apoyan la formulación de hipótesis y el razonamiento clínico, desde el diagnóstico y durante todo el tratamiento. Las sugerencias funcionan como apoyo a la reflexión profesional y no reemplazan la evaluación ni el juicio clínico del psicólogo.' },
  { icon: 'checklist', title: 'Planifica tus intervenciones',
    body: 'Organiza objetivos terapéuticos, estrategias e intervenciones en un plan estructurado.',
    detail: 'El plan se revisa y actualiza a medida que avanza el proceso, en base al análisis biopsicosocial de cada consultante.' },
  { icon: 'pulse', title: 'Sigue la evolución de cada paciente',
    body: 'Visualiza el proceso terapéutico de forma longitudinal y personalizada.',
    detail: 'Revisa de manera sencilla los principales antecedentes, intervenciones y cambios registrados.' },
  { icon: 'search', title: 'Analiza tus casos',
    body: 'Accede a herramientas que facilitan la revisión estructurada de casos.',
    detail: 'Permiten integrar la información acumulada durante el tratamiento para apoyar la toma de decisiones clínicas.' }
];

export const principles = [
  { icon: 'lock', label: 'Privacidad' },
  { icon: 'shield', label: 'Seguridad de la información' },
  { icon: 'eye', label: 'Transparencia' },
  { icon: 'usercheck', label: 'Supervisión profesional' },
  { icon: 'cpu', label: 'Uso responsable de IA' }
];

export const planIncludes = [
  'Ficha clínica inteligente y registro de sesiones',
  'Visión integrada del caso y seguimiento longitudinal',
  'Apoyo al razonamiento clínico con inteligencia artificial',
  'Planificación de objetivos e intervenciones terapéuticas'
];

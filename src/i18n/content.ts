export type Locale = 'es' | 'en';

export const locales = ['es', 'en'] as const;

const copy = {
  es: {
    hero: {
      title: 'Software que entiende',
      accent: 'tu negocio.',
      description:
        'Diseñamos y construimos software a la medida para resolver necesidades reales. Desde una web hasta una plataforma empresarial, te acompañamos desde la primera idea hasta el mantenimiento.',
      primary: 'Cuéntanos tu proyecto',
      secondary: 'Conoce nuestros servicios',
    },
    services: {
      title: 'La solución adecuada para lo que necesitas',
      intro:
        'Primero entendemos el reto completo; después elegimos la tecnología y el alcance que mejor responden a él.',
      items: [
        {
          title: 'Desarrollo web',
          description:
            'Sitios y aplicaciones web rápidos, claros y preparados para crecer con tu negocio.',
          icon: 'globe',
        },
        {
          title: 'Apps para Android y iOS',
          description:
            'Aplicaciones móviles prácticas que conectan a tus clientes y equipos con lo que necesitan hacer.',
          icon: 'smartphone',
        },
        {
          title: 'Productos SaaS',
          description:
            'Plataformas digitales para convertir una buena idea en un producto útil, seguro y fácil de mantener.',
          icon: 'layers',
        },
        {
          title: 'Software empresarial',
          description:
            'Sistemas e integraciones que se adaptan a tus procesos y ayudan a tus equipos a trabajar mejor.',
          icon: 'building',
        },
        {
          title: 'Inteligencia artificial',
          description:
            'Funciones de IA aplicadas a tareas concretas, con una utilidad clara para las personas que las usarán.',
          icon: 'brain',
        },
      ],
    },
    about: {
      title: 'Un equipo que ve el panorama completo',
      body: 'Llevamos más de ocho años creando software y colaborando con empresas de distintos países. Nos tomamos el tiempo para entender tus objetivos, tus procesos y las necesidades de quienes usarán el producto antes de definir cómo construirlo.',
      points: [
        'Experiencia trabajando con compañías internacionales.',
        'Revisiones continuas para cuidar la calidad durante el desarrollo.',
        'Mantenimiento y garantías definidos de acuerdo con el alcance de cada proyecto.',
        'Precios competitivos y transparentes, explicados desde el inicio.',
      ],
    },
    process: {
      title: 'Un proceso claro, de principio a evolución',
      intro:
        'Cada proyecto tiene su propio alcance. Mantenemos las decisiones y prioridades visibles para avanzar con confianza.',
      steps: [
        {
          title: 'Entendemos la necesidad',
          description:
            'Conversamos sobre tus objetivos, usuarios, procesos y restricciones para comprender el problema completo.',
        },
        {
          title: 'Definimos el alcance',
          description:
            'Acordamos una solución, etapas y presupuesto claros antes de comenzar a construir.',
        },
        {
          title: 'Construimos y revisamos',
          description:
            'Desarrollamos por etapas, compartimos avances y revisamos la calidad de forma continua.',
        },
        {
          title: 'Lanzamos y acompañamos',
          description:
            'Preparamos la salida y acordamos el soporte, mantenimiento y garantías según el alcance.',
        },
      ],
    },
    cases: {
      title: 'Formas en que el software puede ayudar',
      intro:
        'Estos ejemplos ilustrativos muestran algunos retos que podemos abordar junto contigo.',
      items: [
        {
          title: 'Operaciones logísticas más visibles',
          description:
            'Una plataforma para reunir información de entregas, facilitar el seguimiento y dar a cada equipo una vista más clara de la operación.',
          category: 'Ejemplo ilustrativo · Logística',
        },
        {
          title: 'Un SaaS pensado para crecer',
          description:
            'Un producto web con cuentas, suscripciones y herramientas de administración, diseñado alrededor de las necesidades de sus usuarios.',
          category: 'Ejemplo ilustrativo · SaaS',
        },
        {
          title: 'Una app que acerca el servicio',
          description:
            'Una experiencia móvil para que las personas puedan consultar información y completar tareas cotidianas desde Android o iOS.',
          category: 'Ejemplo ilustrativo · Móvil',
        },
      ],
    },
    technology: {
      title: 'La tecnología sigue a la necesidad',
      description:
        'Elegimos herramientas según el problema, el equipo y la evolución esperada del producto. Así cada decisión técnica tiene un propósito claro y ayuda a construir algo que se pueda mantener.',
    },
    blog: {
      title: 'Ideas y aprendizajes sobre software',
      description:
        'Compartimos perspectivas prácticas sobre desarrollo, productos digitales y decisiones tecnológicas.',
      link: 'Visita el blog',
    },
    contact: {
      title: 'Hablemos de lo que quieres construir',
      description:
        'Cuéntanos qué necesitas resolver. Te ayudaremos a entender las opciones y definir un alcance adecuado para tu proyecto.',
      name: 'Nombre',
      email: 'Correo electrónico',
      service: '¿Qué tipo de proyecto tienes en mente?',
      message: 'Cuéntanos un poco más',
      button: 'Probar formulario',
      note: 'Demostración: este formulario no envía mensajes.',
      success: 'Demostración local: no se envió ningún mensaje.',
      services: [
        'Desarrollo web',
        'App para Android o iOS',
        'Producto SaaS',
        'Software empresarial',
        'Inteligencia artificial',
        'Otro proyecto',
      ],
    },
    footer: {
      tagline: 'Software hecho con atención a lo que importa.',
      rights: 'Todos los derechos reservados.',
    },
    common: {
      skip: 'Saltar al contenido',
      menu: 'Abrir menú',
      close: 'Cerrar',
      read: 'Leer artículo',
      back: 'Volver',
      allArticles: 'Todos los artículos',
      minutes: 'min de lectura',
      example: 'Ejemplo ilustrativo',
    },
  },
  en: {
    hero: {
      title: 'Software that understands',
      accent: 'your business.',
      description:
        'We design and build custom software to solve real needs. From a website to an enterprise platform, we work with you from the first idea through ongoing maintenance.',
      primary: 'Tell us about your project',
      secondary: 'Explore our services',
    },
    services: {
      title: 'The right solution for what you need',
      intro:
        'We start by understanding the whole challenge, then choose the technology and scope that fit it best.',
      items: [
        {
          title: 'Web development',
          description:
            'Fast, clear websites and web applications built to grow with your business.',
          icon: 'globe',
        },
        {
          title: 'Android and iOS apps',
          description:
            'Practical mobile apps that connect your customers and teams with what they need to do.',
          icon: 'smartphone',
        },
        {
          title: 'SaaS products',
          description:
            'Digital platforms that turn a good idea into a useful product that is secure and easy to maintain.',
          icon: 'layers',
        },
        {
          title: 'Enterprise software',
          description:
            'Systems and integrations shaped around your processes to help your teams work better.',
          icon: 'building',
        },
        {
          title: 'Artificial intelligence',
          description:
            'AI features applied to specific tasks, with clear value for the people who will use them.',
          icon: 'brain',
        },
      ],
    },
    about: {
      title: 'A team that sees the whole picture',
      body: 'We have more than eight years of experience building software and working with companies in different countries. Before deciding how to build, we take time to understand your goals, processes, and the needs of the people who will use the product.',
      points: [
        'Experience working with international companies.',
        'Ongoing reviews to care for quality throughout development.',
        'Maintenance and guarantees defined according to each project’s scope.',
        'Competitive, transparent pricing explained from the start.',
      ],
    },
    process: {
      title: 'A clear process, from first step to what comes next',
      intro:
        'Every project has its own scope. We keep decisions and priorities visible so we can move forward with confidence.',
      steps: [
        {
          title: 'Understand the need',
          description:
            'We discuss your goals, users, processes, and constraints to understand the whole problem.',
        },
        {
          title: 'Define the scope',
          description:
            'We agree on a solution, stages, and a clear budget before development begins.',
        },
        {
          title: 'Build and review',
          description:
            'We develop in stages, share progress, and review quality continuously.',
        },
        {
          title: 'Launch and support',
          description:
            'We prepare for launch and agree on support, maintenance, and guarantees based on the scope.',
        },
      ],
    },
    cases: {
      title: 'Ways software can help',
      intro:
        'These illustrative examples show some of the challenges we can take on together.',
      items: [
        {
          title: 'Clearer logistics operations',
          description:
            'A platform that brings delivery information together, makes tracking easier, and gives each team a clearer view of operations.',
          category: 'Illustrative example · Logistics',
        },
        {
          title: 'A SaaS product ready to grow',
          description:
            'A web product with accounts, subscriptions, and admin tools, designed around the needs of its users.',
          category: 'Illustrative example · SaaS',
        },
        {
          title: 'An app that brings the service closer',
          description:
            'A mobile experience that lets people check information and complete everyday tasks on Android or iOS.',
          category: 'Illustrative example · Mobile',
        },
      ],
    },
    technology: {
      title: 'Technology follows the need',
      description:
        'We choose tools based on the problem, the team, and how the product is expected to evolve. Each technical decision has a clear purpose and helps us build something that can be maintained.',
    },
    blog: {
      title: 'Ideas and lessons about software',
      description:
        'We share practical perspectives on development, digital products, and technology decisions.',
      link: 'Visit the blog',
    },
    contact: {
      title: 'Let’s talk about what you want to build',
      description:
        'Tell us what you need to solve. We’ll help you understand the options and define a scope that fits your project.',
      name: 'Name',
      email: 'Email address',
      service: 'What kind of project do you have in mind?',
      message: 'Tell us a little more',
      button: 'Try demo form',
      note: 'Demo: this form does not send messages.',
      success: 'Local demo: no message was sent.',
      services: [
        'Web development',
        'Android or iOS app',
        'SaaS product',
        'Enterprise software',
        'Artificial intelligence',
        'Another project',
      ],
    },
    footer: {
      tagline: 'Software built with care for what matters.',
      rights: 'All rights reserved.',
    },
    common: {
      skip: 'Skip to content',
      menu: 'Open menu',
      close: 'Close',
      read: 'Read article',
      back: 'Back',
      allArticles: 'All articles',
      minutes: 'min read',
      example: 'Illustrative example',
    },
  },
} as const;

const navLabels = {
  es: ['Servicios', 'Nosotros', 'Proceso', 'Blog', 'Contacto'],
  en: ['Services', 'About', 'Process', 'Blog', 'Contact'],
} as const;

export function getCopy(locale: Locale) {
  const labels = navLabels[locale];

  return {
    ...copy[locale],
    nav: [
      { label: labels[0], href: '#servicios' },
      { label: labels[1], href: '#nosotros' },
      { label: labels[2], href: '#proceso' },
      { label: labels[3], href: `/${locale}/blog/` },
      { label: labels[4], href: '#contacto' },
    ],
  };
}

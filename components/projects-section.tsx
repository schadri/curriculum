import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, MonitorPlay } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";

const projectsData = [
  {
    id: 0,
    image: "https://api.microlink.io/?url=https://vibe-pass-seven.vercel.app/&screenshot=true&meta=false&embed=screenshot.url",
    links: {
      demo: "https://vibe-pass-seven.vercel.app/",
      github: "https://github.com/schadri/VibePass"
    },
    es: {
      title: "VibePass",
      description: "VibePass – Gestión de Eventos & Promociones 2x1\n\nArquitectura: Plataforma robusta para la gestión integral de eventos, optimizada para flujos de registro 2x1.\n\nTecnologías: Next.js 15+, Supabase (Base de datos y Auth), Tailwind CSS 4.\n\nFuncionalidades Clave: Generación automática de QRs, escáner integrado para control de acceso, dashboard administrativo con métricas en tiempo real y automatización de envío de entradas vía email.",
      tags: ["Eventos", "QR System", "Dashboard"],
    },
    en: {
      title: "VibePass",
      description: "VibePass – Event Management & 2x1 Promotions\n\nArchitecture: Robust platform for comprehensive event management, optimized for 2x1 registration flows.\n\nTechnologies: Next.js 15+, Supabase (Database and Auth), Tailwind CSS 4.\n\nKey Features: Automatic QR generation, integrated scanner for access control, administrative dashboard with real-time metrics, and automated email ticketing system.",
      tags: ["Events", "QR System", "Dashboard"],
    }
  },
  {
    id: 1,
    image: "https://api.microlink.io/?url=https://www.goscentral.online/&screenshot=true&meta=false&embed=screenshot.url",
    links: {
      demo: "https://www.goscentral.online/",
      github: "https://github.com/schadri/gos_new"
    },
    es: {
      title: "GOS Central Online",
      description: "GOS (Gastronomic Organization Service) – WebApp de Empleo Sectorial\n\nArquitectura: Desarrollo Full Stack de punta a punta (End-to-End) utilizando Next.js para el frontend y SSR.\n\nBackend & Datos: Integración híbrida de Supabase (Base de datos relacional y Auth) y Firebase (para notificaciones o almacenamiento en tiempo real), garantizando escalabilidad y seguridad de los datos.\n\nRol: Desarrollador Único. Responsable del diseño de UI, lógica de negocio, modelado de base de datos y despliegue.",
      tags: ["Web App", "Dashboard", "Gestión"],
    },
    en: {
      title: "GOS Central Online",
      description: "GOS (Gastronomic Organization Service) – Sectoral Employment WebApp\n\nArchitecture: End-to-End Full Stack development using Next.js for the frontend and SSR.\n\nBackend & Data: Hybrid integration of Supabase (Relational Database and Auth) and Firebase (for real-time notifications or storage), ensuring scalability and data security.\n\nRole: Sole Developer. Responsible for UI design, business logic, database modeling, and deployment.",
      tags: ["Web App", "Dashboard", "Management"],
    }
  },
  {
    id: 2,
    image: "https://api.microlink.io/?url=https://new-impostor.vercel.app/&screenshot=true&meta=false&embed=screenshot.url",
    links: {
      demo: "https://new-impostor.vercel.app/",
      github: "https://github.com/schadri/new_impostor"
    },
    es: {
      title: "Juego del Impostor",
      description: "Juego del Impostor – Aplicación Web de Lógica y Deducción\n\nArquitectura: WebApp interactiva multijugador con enfoque en alto rendimiento y baja latencia.\n\nTecnologías: React, Node.js, Socket.io (para comunicación en tiempo real).\n\nFuncionalidades Clave: Diseño de lógica de roles dinámicos, manejo avanzado de WebSockets (Socket.io) para comunicación bidireccional cliente-servidor, y optimización responsive para garantizar una experiencia de juego fluida.",
      tags: ["React", "Juegos", "Entretenimiento"],
    },
    en: {
      title: "Impostor Game",
      description: "Impostor Game – Logic and Deduction Web Application\n\nArchitecture: Multiplayer interactive WebApp focused on high performance and low latency.\n\nTechnologies: React, Node.js, Socket.io (for real-time communication).\n\nKey Features: Design of dynamic role logic, advanced handling of WebSockets (Socket.io) for bidirectional client-server communication, and responsive optimization to ensure a fluid gaming experience.",
      tags: ["React", "Gaming", "Entertainment"],
    }
  },
  {
    id: 3,
    image: "https://api.microlink.io/?url=https://smoke-control-app.vercel.app/login&screenshot=true&meta=false&embed=screenshot.url&waitFor=3000",
    links: {
      demo: "https://smoke-control-app.vercel.app/",
      github: "https://github.com/schadri/smoke-control-app"
    },
    es: {
      title: "Controla los Puchos",
      description: "Controla los Puchos – Progressive Web App (PWA) de Salud y Hábitos\n\nArquitectura: Desarrollo de una PWA enfocada en la reducción del consumo de tabaco mediante un sistema de seguimiento progresivo.\n\nTecnologías: Next.js, Supabase (Base de datos y Auth).\n\nFuncionalidades Clave: Implementación de lógica de reducción automática de consumo, visualización de métricas de salud mediante gráficos dinámicos, persistencia de datos en tiempo real y configuración PWA para acceso offline.",
      tags: ["Tracker", "Salud", "Web App"],
    },
    en: {
      title: "Smoke Control App",
      description: "Smoke Control – Health and Habits Progressive Web App (PWA)\n\nArchitecture: Development of a PWA focused on reducing tobacco consumption through a progressive tracking system.\n\nTechnologies: Next.js, Supabase (Database and Auth).\n\nKey Features: Implementation of automatic consumption reduction logic, visualization of health metrics via dynamic charts, real-time data persistence, and PWA configuration for offline access.",
      tags: ["Tracker", "Health", "Web App"],
    }
  },
  {
    id: 4,
    image: "https://api.microlink.io/?url=https://www.zonex.com.ar/&screenshot=true&meta=false&embed=screenshot.url",
    links: {
      demo: "https://www.zonex.com.ar/",
      github: "https://github.com/schadri/zonex-landigpage"
    },
    es: {
      title: "Zonex Alarma Inteligente",
      description: "Zonex Alarma Inteligente – Landing Page Corporativa\n\nArquitectura: Sitio web de alto impacto visual orientado a la conversión y presentación de servicios de seguridad.\n\nTecnologías: Next.js, Tailwind CSS, Framer Motion (y librerías de animación similares).\n\nFuncionalidades Clave: Desarrollo de interfaces modernas con animaciones fluidas, optimización de SEO técnico y arquitectura de componentes reutilizables para garantizar tiempos de carga mínimos.",
      tags: ["Landing Page", "Corporativo", "Diseño UI"],
    },
    en: {
      title: "Zonex Smart Alarm",
      description: "Zonex Smart Alarm – Corporate Landing Page\n\nArchitecture: High visual impact website aimed at conversion and presentation of security services.\n\nTechnologies: Next.js, Tailwind CSS, Framer Motion (and similar animation libraries).\n\nKey Features: Development of modern interfaces with fluid animations, technical SEO optimization, and reusable component architecture to ensure minimal load times.",
      tags: ["Landing Page", "Corporate", "UI Design"],
    }
  }
];

export function ProjectsSection() {
  const { language } = useLanguage();

  return (
    <div className="space-y-8 pb-32">
      <div className="flex items-center gap-2 mb-8">
        <MonitorPlay className="h-6 w-6 text-cyan-400" />
        <h2 className="text-2xl font-bold tracking-tight text-white">
          {language === 'en' ? 'Featured Projects' : 'Proyectos Destacados'}
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project) => {
          const content = project[language];
          return (
            <Card key={project.id} className="group overflow-hidden bg-card/50 border-cyan-500/10 hover:border-cyan-500/50 transition-all duration-500 flex flex-col">
              <div className="relative h-48 w-full overflow-hidden">
                {/* Overlay gradient para que el texto sea siempre legible */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent z-10" />
                <img
                  src={project.image}
                  alt={content.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>

              <CardHeader className="relative z-20 -mt-12">
                <CardTitle className="text-xl text-cyan-300 group-hover:text-cyan-400 transition-colors">
                  {content.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground mb-6 whitespace-pre-line">
                  {content.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {content.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-cyan-500/10 text-cyan-500 hover:bg-cyan-500/20 border-0"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex justify-between border-t border-white/5 pt-4">
                <Link
                  href={project.links.github}
                  className="text-muted-foreground hover:text-white flex items-center gap-2 text-sm transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>{language === 'en' ? 'Code' : 'Código'}</span>
                </Link>
                <Link
                  href={project.links.demo}
                  className="text-cyan-500 hover:text-cyan-400 flex items-center gap-2 text-sm transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{language === 'en' ? 'Live Demo' : 'Visitar Demo'}</span>
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

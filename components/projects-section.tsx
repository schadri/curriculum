import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, MonitorPlay } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "GOS Central Online",
    description: "GOS (Gastronomic Organization Service) – WebApp de Empleo Sectorial\n\nArquitectura: Desarrollo Full Stack de punta a punta (End-to-End) utilizando Next.js para el frontend y SSR.\n\nBackend & Datos: Integración híbrida de Supabase (Base de datos relacional y Auth) y Firebase (posiblemente para notificaciones o almacenamiento en tiempo real), garantizando escalabilidad y seguridad de los datos.\n\nRol: Desarrollador Único. Responsable del diseño de UI, lógica de negocio, modelado de base de datos y despliegue.",
    image: "https://api.microlink.io/?url=https://www.goscentral.online/&screenshot=true&meta=false&embed=screenshot.url",
    tags: ["Web App", "Dashboard", "Gestión"],
    links: {
      demo: "https://www.goscentral.online/",
      github: "https://github.com/schadri/gos_new"
    }
  },
  {
    id: 2,
    title: "Juego del Impostor",
    description: "Juego del Impostor – Aplicación Web de Lógica y Deducción\n\nArquitectura: WebApp interactiva multijugador con enfoque en alto rendimiento y baja latencia.\n\nTecnologías: React, Node.js, Socket.io (para comunicación en tiempo real).\n\nFuncionalidades Clave: Diseño de lógica de roles dinámicos, manejo avanzado de WebSockets (Socket.io) para comunicación bidireccional cliente-servidor, y optimización responsive para garantizar una experiencia de juego fluida.",
    image: "https://api.microlink.io/?url=https://new-impostor.vercel.app/&screenshot=true&meta=false&embed=screenshot.url",
    tags: ["React", "Juegos", "Entretenimiento"],
    links: {
      demo: "https://new-impostor.vercel.app/",
      github: "https://github.com/schadri/new_impostor"
    }
  },
  {
    id: 3,
    title: "Controla los Puchos",
    description: "Controla los Puchos – Progressive Web App (PWA) de Salud y Hábitos\n\nArquitectura: Desarrollo de una PWA enfocada en la reducción del consumo de tabaco mediante un sistema de seguimiento progresivo.\n\nTecnologías: Next.js, Supabase (Base de datos y Auth).\n\nFuncionalidades Clave: Implementación de lógica de reducción automática de consumo, visualización de métricas de salud mediante gráficos dinámicos, persistencia de datos en tiempo real y configuración PWA para acceso offline.",
    image: "https://api.microlink.io/?url=https://smoke-control-app.vercel.app/login&screenshot=true&meta=false&embed=screenshot.url&waitFor=3000",
    tags: ["Tracker", "Salud", "Web App"],
    links: {
      demo: "https://smoke-control-app.vercel.app/",
      github: "https://github.com/schadri/smoke-control-app"
    }
  },
  {
    id: 4,
    title: "Zonex Alarma Inteligente",
    description: "Zonex Alarma Inteligente – Landing Page Corporativa\n\nArquitectura: Sitio web de alto impacto visual orientado a la conversión y presentación de servicios de seguridad.\n\nTecnologías: Next.js, Tailwind CSS, Framer Motion (y librerías de animación similares).\n\nFuncionalidades Clave: Desarrollo de interfaces modernas con animaciones fluidas, optimización de SEO técnico y arquitectura de componentes reutilizables para garantizar tiempos de carga mínimos.",
    image: "https://api.microlink.io/?url=https://www.zonex.com.ar/&screenshot=true&meta=false&embed=screenshot.url",
    tags: ["Landing Page", "Corporativo", "Diseño UI"],
    links: {
      demo: "https://www.zonex.com.ar/",
      github: "https://github.com/schadri/zonex-landigpage"
    }
  }
];

export function ProjectsSection() {
  return (
    <div className="space-y-8 pb-32">
      <div className="flex items-center gap-2 mb-8">
        <MonitorPlay className="h-6 w-6 text-cyan-400" />
        <h2 className="text-2xl font-bold tracking-tight text-white">Proyectos Destacados</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id} className="group overflow-hidden bg-card/50 border-cyan-500/10 hover:border-cyan-500/50 transition-all duration-500 flex flex-col">
            <div className="relative h-48 w-full overflow-hidden">
              {/* Overlay gradient para que el texto sea siempre legible */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent z-10" />
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
            </div>

            <CardHeader className="relative z-20 -mt-12">
              <CardTitle className="text-xl text-cyan-300 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground mb-6 whitespace-pre-line">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
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
                <span>Código</span>
              </Link>
              <Link
                href={project.links.demo}
                className="text-cyan-500 hover:text-cyan-400 flex items-center gap-2 text-sm transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Visitar Demo</span>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

/*
  Contenido original comentado por solicitud del usuario.
  -- Inicio del contenido comentado -------------------------------------------------
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export function PortfolioSection() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Full-stack e-commerce application with payment integration, user authentication, and admin dashboard. Built with modern technologies and best practices.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "Stripe",
      ],
      image: "/modern-ecommerce-dashboard.jpg",
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Security Audit Tool",
      description:
        "Automated security scanning and vulnerability assessment tool for web applications. Includes comprehensive reporting and remediation suggestions.",
      technologies: [
        "Python",
        "Node.js",
        "React",
        "PostgreSQL",
        "Docker",
        "AWS",
      ],
      image: "/cybersecurity-dashboard-interface.jpg",
      githubUrl: "#",
      liveUrl: "#",
    },
  ];

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {projects.map((project, index) => (
        <Card
          key={index}
          className="bg-card border-border overflow-hidden group"
        >
          <div className="relative overflow-hidden h-48">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
          </div>

          <CardHeader>
            <CardTitle className="text-cyan-400 text-balance">
              {project.title}
            </CardTitle>
            <CardDescription className="text-pretty">
              {project.description}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <Badge
                  key={i}
                  variant="secondary"
                  className="bg-muted text-muted-foreground"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                size="sm"
                className="flex-1 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 bg-transparent"
              >
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>
              <Button
                size="sm"
                className="flex-1 bg-cyan-400 text-black hover:bg-cyan-500"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
  -- Fin del contenido comentado ---------------------------------------------------
*/

// Componente simplificado: muestra "coming soon" con trazo cyan-300.
// El relleno parpadea (blink) y el trazo se mantiene fijo (no afectado por la animación).
export function PortfolioSection() {
  return (
    <div className="flex items-center justify-center h-64">
      <p className="relative text-3xl font-semibold leading-none">
        {/* Capa de borde/contorno fija (cyan-400) */}
        <span className="stroke-layer text-cyan-800 pointer-events-none">
          coming soon
        </span>
        {/* Capa de relleno parpadeante (cyan-300) */}
        <span className="blink text-cyan-300">coming soon</span>
      </p>

      <style jsx>{`
        @keyframes blink {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        /* La capa superior parpadea (solo el relleno) */
        .blink {
          position: relative;
          z-index: 2;
          animation: blink 1.2s steps(2, start) infinite;
        }

        /* La capa inferior dibuja el borde usando currentColor como color de stroke */
        .stroke-layer {
          position: absolute;
          left: 0;
          top: 0;
          z-index: 1;
          /* Use currentColor para que tome la clase text-cyan-400 aplicada */
          -webkit-text-stroke: 1.5px currentColor; /* borde más visible */
          -webkit-text-fill-color: transparent;
          /* Fallback: simular borde con text-shadow, usando a color similar a cyan-400 */
          text-shadow: -1px -1px 0 rgba(34, 211, 238, 0.95),
            1px -1px 0 rgba(34, 211, 238, 0.95),
            -1px 1px 0 rgba(34, 211, 238, 0.95),
            1px 1px 0 rgba(34, 211, 238, 0.95);
          display: inline-block;
        }

        /* Ensura que ambos spans se alineen y ocupen el mismo espacio */
        p > span {
          display: inline-block;
        }
      `}</style>
    </div>
  );
}

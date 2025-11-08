import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function PortfolioSection() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Full-stack e-commerce application with payment integration, user authentication, and admin dashboard. Built with modern technologies and best practices.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Stripe"],
      image: "/modern-ecommerce-dashboard.jpg",
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Security Audit Tool",
      description:
        "Automated security scanning and vulnerability assessment tool for web applications. Includes comprehensive reporting and remediation suggestions.",
      technologies: ["Python", "Node.js", "React", "PostgreSQL", "Docker", "AWS"],
      image: "/cybersecurity-dashboard-interface.jpg",
      githubUrl: "#",
      liveUrl: "#",
    },
  ]

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {projects.map((project, index) => (
        <Card key={index} className="bg-card border-border overflow-hidden group">
          <div className="relative overflow-hidden h-48">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
          </div>

          <CardHeader>
            <CardTitle className="text-cyan-400 text-balance">{project.title}</CardTitle>
            <CardDescription className="text-pretty">{project.description}</CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <Badge key={i} variant="secondary" className="bg-muted text-muted-foreground">
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
              <Button size="sm" className="flex-1 bg-cyan-400 text-black hover:bg-cyan-500">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

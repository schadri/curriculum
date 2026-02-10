import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

export function EducationSection() {
  const eitCertificates = [
    {
      name: "introduccion-ciberseguridad.jpeg",
      title: "Introduccion a Ciberseguridad",
    },
    {
      name: "introduccion-informatica-forence.jpeg",
      title: "Introduccion a informatica forense",
    },
    // Agrega más conforme vayan siendo completados
  ];

  const showCertificates = eitCertificates.length > 0;

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-cyan-400">Education</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="relative">
          <h3 className="font-semibold text-foreground">
            Cybersecurity Career Path — EducaciónIT
          </h3>
          {showCertificates && (
            <Collapsible className="absolute top-0 right-0 w-auto z-10">
              <CollapsibleTrigger className="p-0 hover:opacity-75 transition-opacity">
                <ChevronDown className="h-5 w-5 text-cyan-400" />
              </CollapsibleTrigger>
              <CollapsibleContent className="absolute right-0 mt-1 bg-card border border-border rounded-md p-2 shadow-lg min-w-max">
                <div className="space-y-2">
                  {eitCertificates.map((cert) => (
                    <a
                      key={cert.name}
                      href={`/EIT/${cert.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-cyan-400 hover:text-cyan-300 underline transition-colors whitespace-nowrap px-2 py-1"
                    >
                      {cert.title}
                    </a>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          )}
          <p className="text-sm text-muted-foreground mb-2">
            Sep 2025 — Present
          </p>
          <p className="text-sm text-muted-foreground">
            Focus: Security Operations (SOC), Networking Fundamentals, Log
            Analysis, SIEM Concepts, Blue Team Practices
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-foreground mb-1">
            Software Development — UADE
          </h3>
          <p className="text-sm text-muted-foreground mb-2">
            Mar 2023 — Sep 2025 (Studies completed partially)
          </p>
          <p className="text-sm text-muted-foreground">
            Core subjects: Programming, Web Development, Databases, Systems
            Fundamentals
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-foreground mb-1">
            High School Diploma — Escuela Nacional N°17 “Primera Junta”
          </h3>
          <p className="text-sm text-muted-foreground">2015 — 2020</p>
        </div>
      </CardContent>
    </Card>
  );
}

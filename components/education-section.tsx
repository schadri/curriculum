"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";

export function EducationSection() {
  const { language } = useLanguage();
  const [selectedCert, setSelectedCert] = React.useState<{
    name: string;
    title: string;
  } | null>(null);

  const eitCertificates = [
    {
      name: "introduccion-ciberseguridad.jpeg",
      title: language === 'en' ? "Introduction to Cybersecurity" : "Introducción a Ciberseguridad",
    },
    {
      name: "introduccion-informatica-forence.jpeg",
      title: language === 'en' ? "Introduction to Computer Forensics" : "Introducción a Informática Forense",
    },
  ];

  const showCertificates = eitCertificates.length > 0;

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-cyan-400">{language === 'en' ? 'Education' : 'Educación'}</CardTitle>
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
                    <button
                      key={cert.name}
                      type="button"
                      onClick={() => setSelectedCert(cert)}
                      className="block text-sm text-cyan-400 hover:text-cyan-300 underline transition-colors whitespace-nowrap px-2 py-1 text-left"
                    >
                      {cert.title}
                    </button>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          )}
          <p className="text-sm text-muted-foreground mb-2">
            {language === 'en' ? 'Sep 2025 — Present' : 'Sep 2025 — Presente'}
          </p>
          <p className="text-sm text-muted-foreground">
            {language === 'en' 
              ? 'Focus: Security Operations (SOC), Networking Fundamentals, Log Analysis, SIEM Concepts, Blue Team Practices'
              : 'Enfoque: Operaciones de Seguridad (SOC), Fundamentos de Redes, Análisis de Logs, Conceptos de SIEM, Prácticas Blue Team'}
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-foreground mb-1">
            {language === 'en' ? 'Software Development — UADE' : 'Desarrollo de Software — UADE'}
          </h3>
          <p className="text-sm text-muted-foreground mb-2">
            {language === 'en' ? 'Mar 2023 — Sep 2025 (Studies completed partially)' : 'Mar 2023 — Sep 2025 (Estudios incompletos/parciales)'}
          </p>
          <p className="text-sm text-muted-foreground">
            {language === 'en'
              ? 'Core subjects: Programming, Web Development, Databases, Systems Fundamentals'
              : 'Materias principales: Programación, Desarrollo Web, Bases de Datos, Fundamentos de Sistemas'}
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-foreground mb-1">
            {language === 'en' ? 'High School Diploma' : 'Bachiller'} — Escuela Nacional N°17 “Primera Junta”
          </h3>
          <p className="text-sm text-muted-foreground">2015 — 2020</p>
        </div>
      </CardContent>

      {/* Dialog modal to preview certificate */}
      <Dialog
        open={!!selectedCert}
        onOpenChange={(open) => !open && setSelectedCert(null)}
      >
        <DialogContent className="w-[92%] max-w-md sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-cyan-400">
              {selectedCert?.title}
            </DialogTitle>
          </DialogHeader>

          <div className="py-2">
            {selectedCert && (
              <img
                src={`/EIT/${selectedCert.name}`}
                alt={selectedCert.title}
                className="mx-auto max-h-[70vh] w-auto max-w-full object-contain"
              />
            )}
          </div>

          <DialogFooter className="items-center sm:justify-end">
            <a
              href={selectedCert ? `/EIT/${selectedCert.name}` : "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="text-cyan-400" variant="outline" size="sm">
                {language === 'en' ? 'Open in new tab' : 'Abrir en nueva pestaña'}
              </Button>
            </a>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  );
}

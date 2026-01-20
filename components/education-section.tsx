import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function EducationSection() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-cyan-400">Education</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <div>
          <h3 className="font-semibold text-foreground mb-1">
            Cybersecurity Career Path — EducaciónIT
          </h3>
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

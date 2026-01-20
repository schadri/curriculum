import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ProfessionalSummary() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-cyan-400">Professional Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-foreground leading-relaxed text-center">
          Self-motivated cybersecurity student focused on Security Operations
          (SOC) and Blue Team fundamentals. Hands-on practice in home lab
          environments with log analysis, network traffic inspection, and
          security monitoring. Familiar with Linux systems, networking concepts
          (TCP/IP, DNS), and SIEM fundamentals. Actively building skills in
          incident detection, alert triage, and continuous learning to grow into
          a SOC Analyst role.
        </p>
      </CardContent>
    </Card>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/components/language-provider";

export function ProfessionalSummary() {
  const { language } = useLanguage();

  const title = language === 'en' ? "Professional Summary" : "Resumen Profesional";
  const content = language === 'en' 
    ? "Self-motivated cybersecurity student focused on Security Operations (SOC) and Blue Team fundamentals. Hands-on practice in home lab environments with log analysis, network traffic inspection, and security monitoring. Familiar with Linux systems, networking concepts (TCP/IP, DNS), and SIEM fundamentals. Actively building skills in incident detection, alert triage, and continuous learning to grow into a SOC Analyst role."
    : "Estudiante de ciberseguridad proactivo enfocado en Operaciones de Seguridad (SOC) y fundamentos de Blue Team. Práctica en entornos de laboratorio virtual con análisis de logs, inspección de tráfico de red y monitoreo de seguridad. Familiarizado con sistemas Linux, conceptos de redes (TCP/IP, DNS) y fundamentos de SIEM. Desarrollando activamente habilidades en detección de incidentes, triaje de alertas y aprendizaje continuo para crecer hacia un rol de Analista SOC.";

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-cyan-400">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-foreground leading-relaxed text-center">
          {content}
        </p>
      </CardContent>
    </Card>
  );
}

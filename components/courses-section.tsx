import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/components/language-provider";

export function CoursesSection() {
  const { language } = useLanguage();

  const courses = language === 'en'
    ? [
        {
          name: "SOC Fundamentals & Incident Handling (Self-Study)",
          provider: "Independent Study",
          date: "2025-2026",
        },
        {
          name: "Log Analysis & Security Monitoring (Hands-on Labs)",
          provider: "Home Lab Practice",
          date: "2025-2026",
        },
        {
          name: "Network Fundamentals for Security (TCP/IP, DNS, ARP)",
          provider: "Self-Study",
          date: "2025-2026",
        },
        {
          name: "SIEM Fundamentals & Event Correlation (Concepts)",
          provider: "Self-Study",
          date: "2025-2026",
        },
        {
          name: "Network Fundamentals & Ethical Hacking",
          provider: "Udemy",
          date: "Apr 2021",
        },
        {
          name: "Metasploit Framework (Fundamentals)",
          provider: "Udemy",
          date: "Jan 2025",
        },
        {
          name: "Java",
          provider: "Udemy",
          date: "Oct 2024",
        },
        {
          name: "JavaScript",
          provider: "Udemy",
          date: "Apr 2023",
        },
        {
          name: "React.js",
          provider: "CoderHouse",
          date: "May 2023",
        },
      ]
    : [
        {
          name: "Fundamentos SOC & Manejo de Incidentes (Autoestudio)",
          provider: "Estudio Independiente",
          date: "2025-2026",
        },
        {
          name: "Análisis de Logs & Monitoreo de Seguridad (Prácticas)",
          provider: "Práctica en Home Lab",
          date: "2025-2026",
        },
        {
          name: "Fundamentos de Redes para Seguridad (TCP/IP, DNS, ARP)",
          provider: "Autoestudio",
          date: "2025-2026",
        },
        {
          name: "Fundamentos SIEM & Correlación de Eventos (Conceptos)",
          provider: "Autoestudio",
          date: "2025-2026",
        },
        {
          name: "Fundamentos de Redes & Ethical Hacking",
          provider: "Udemy",
          date: "Apr 2021",
        },
        {
          name: "Metasploit Framework (Fundamentos)",
          provider: "Udemy",
          date: "Jan 2025",
        },
        {
          name: "Java",
          provider: "Udemy",
          date: "Oct 2024",
        },
        {
          name: "JavaScript",
          provider: "Udemy",
          date: "Apr 2023",
        },
        {
          name: "React.js",
          provider: "CoderHouse",
          date: "May 2023",
        },
      ];

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-cyan-400">
          {language === 'en' ? 'Training & Self-Study' : 'Formación y Autoestudio'}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <ul className="space-y-3">
          {courses.map((course, index) => (
            <li key={index} className="text-sm">
              <span className="font-semibold text-foreground">
                {course.name}
              </span>
              <span className="text-muted-foreground">
                {" "}
                — {course.provider} ({course.date})
              </span>
            </li>
          ))}
        </ul>

        <p className="text-xs text-muted-foreground mt-4">
          {language === 'en'
            ? 'Ongoing self-training through hands-on labs, log analysis exercises, network traffic inspection, and security monitoring practice aligned with SOC Tier 1 responsibilities.'
            : 'Autoestudio continuo mediante laboratorios prácticos, ejercicios de análisis de logs, inspección de tráfico de red y prácticas de monitoreo de seguridad alineadas con las responsabilidades de SOC Nivel 1.'}
        </p>
      </CardContent>
    </Card>
  );
}

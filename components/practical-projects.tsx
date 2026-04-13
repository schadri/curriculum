import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/components/language-provider";

export function PracticalProjects() {
  const { language } = useLanguage();

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-cyan-400">
          {language === 'en' ? 'Hands-on Labs & Practical Experience' : 'Laboratorios y Experiencia Práctica'}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <div>
          <h3 className="font-semibold text-foreground mb-2">
            {language === 'en' ? 'SOC Home Lab — Log Analysis & Incident Detection' : 'Home Lab SOC — Análisis de Logs y Detección de Incidentes'}
          </h3>
          <p className="text-sm text-foreground leading-relaxed">
            {language === 'en' 
              ? 'Built and maintained a personal SOC-focused home lab using Linux and Windows systems. Generated security-relevant events such as failed logins, suspicious network connections, and system changes. Analyzed authentication, system, and network logs to identify anomalies, correlate events, and perform initial incident triage following SOC Tier 1 workflows.'
              : 'Construcción y mantenimiento de un laboratorio SOC personal en entornos Linux y Windows. Generación de eventos de seguridad como inicios de sesión fallidos, conexiones de red sospechosas y modificaciones al sistema. Análisis de logs de red, sistema y autenticación para identificar anomalías, correlacionar eventos y realizar triaje inicial de incidentes siguiendo flujos de trabajo de SOC Nivel 1.'}
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-foreground mb-2">
            {language === 'en' ? 'Network Traffic Analysis & Monitoring' : 'Análisis y Monitoreo de Tráfico de Red'}
          </h3>
          <p className="text-sm text-foreground leading-relaxed">
            {language === 'en' ? (
              <>
                Captured and analyzed network traffic using tools such as
                <code className="text-cyan-400 mx-1">Wireshark</code>
                to identify abnormal patterns, unauthorized connections, and
                potential security incidents. Practiced analysis of TCP/IP traffic,
                DNS queries, and basic attack indicators from a defensive
                perspective.
              </>
            ) : (
              <>
                Captura y análisis de tráfico de red utilizando herramientas como
                <code className="text-cyan-400 mx-1">Wireshark</code>
                para identificar patrones anormales, conexiones no autorizadas y
                posibles incidentes de seguridad. Práctica en análisis de tráfico TCP/IP,
                consultas DNS e indicadores básicos de ataque desde una perspectiva
                defensiva.
              </>
            )}
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-foreground mb-2">
            {language === 'en' ? 'SIEM Concepts & Alert Triage (Practice)' : 'Conceptos SIEM y Triaje de Alertas (Práctica)'}
          </h3>
          <p className="text-sm text-foreground leading-relaxed">
            {language === 'en'
              ? 'Practiced SOC workflows by simulating alerts and security events to understand SIEM concepts such as event ingestion, normalization, and basic correlation. Focused on alert review, prioritization, and escalation following entry-level SOC analyst responsibilities.'
              : 'Simulación de flujos de trabajo SOC mediante la generación de alertas y eventos de seguridad para comprender conceptos SIEM como ingesta de eventos, normalización y correlación básica. Enfoque en la revisión de alertas, priorización y escalamiento, siguiendo las responsabilidades de un Analista SOC Nivel 1.'}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

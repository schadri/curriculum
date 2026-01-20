import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function PracticalProjects() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-cyan-400">
          Hands-on Labs & Practical Experience
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <div>
          <h3 className="font-semibold text-foreground mb-2">
            SOC Home Lab — Log Analysis & Incident Detection
          </h3>
          <p className="text-sm text-foreground leading-relaxed">
            Built and maintained a personal SOC-focused home lab using Linux and
            Windows systems. Generated security-relevant events such as failed
            logins, suspicious network connections, and system changes. Analyzed
            authentication, system, and network logs to identify anomalies,
            correlate events, and perform initial incident triage following SOC
            Tier 1 workflows.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-foreground mb-2">
            Network Traffic Analysis & Monitoring
          </h3>
          <p className="text-sm text-foreground leading-relaxed">
            Captured and analyzed network traffic using tools such as
            <code className="text-cyan-400 mx-1">Wireshark</code>
            to identify abnormal patterns, unauthorized connections, and
            potential security incidents. Practiced analysis of TCP/IP traffic,
            DNS queries, and basic attack indicators from a defensive
            perspective.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-foreground mb-2">
            SIEM Concepts & Alert Triage (Practice)
          </h3>
          <p className="text-sm text-foreground leading-relaxed">
            Practiced SOC workflows by simulating alerts and security events to
            understand SIEM concepts such as event ingestion, normalization, and
            basic correlation. Focused on alert review, prioritization, and
            escalation following entry-level SOC analyst responsibilities.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

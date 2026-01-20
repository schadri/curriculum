import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function TechnicalSkills() {
  const socSkills = [
    "Log Analysis",
    "Security Monitoring",
    "Incident Triage",
    "SIEM Fundamentals",
    "Network Traffic Analysis",
    "Basic Threat Detection",
  ];

  const systemsAndNetworking = [
    "Linux (RHEL, Ubuntu)",
    "Windows OS",
    "TCP/IP",
    "DNS",
    "ARP",
    "Wireshark",
  ];

  const securityTools = [
    "Nmap",
    "Kali Linux",
    "Metasploit (basic)",
    "Burp Suite",
    "Aircrack-ng",
  ];

  const devAndOther = [
    "Git / GitHub",
    "VirtualBox / VMware",
    "Linux Command Line",
    "JavaScript",
    "Java",
    "React.js",
  ];

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-cyan-400">Technical Skills</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground mb-3">
            SOC & Security Fundamentals
          </h3>
          <div className="flex flex-wrap gap-2">
            {socSkills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="bg-muted text-foreground"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-muted-foreground mb-3">
            Systems & Networking
          </h3>
          <div className="flex flex-wrap gap-2">
            {systemsAndNetworking.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="bg-muted text-foreground"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-muted-foreground mb-3">
            Security Tools (Hands-on)
          </h3>
          <div className="flex flex-wrap gap-2">
            {securityTools.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="bg-muted text-foreground"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-muted-foreground mb-3">
            Development & Other
          </h3>
          <div className="flex flex-wrap gap-2">
            {devAndOther.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="bg-muted text-foreground"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function TechnicalSkills() {
  const securityTools = ["Kali Linux", "Metasploit", "Nmap", "Burp Suite", "Aircrack-ng", "Wireshark"]

  const devTools = ["React.js", "JavaScript", "Java", "Git / GitHub", "VirtualBox / VMware", "Linux command line"]

  const softSkills = [
    "Problem solving",
    "Analytical thinking",
    "Teamwork",
    "Technical communication",
    "Continuous learning",
  ]

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-cyan-400">Technical Skills</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground mb-3">Security & Tools</h3>
          <div className="flex flex-wrap gap-2">
            {securityTools.map((skill) => (
              <Badge key={skill} variant="secondary" className="bg-muted text-foreground">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-muted-foreground mb-3">Dev & Systems</h3>
          <div className="flex flex-wrap gap-2">
            {devTools.map((skill) => (
              <Badge key={skill} variant="secondary" className="bg-muted text-foreground">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-muted-foreground mb-3">Soft Skills</h3>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((skill) => (
              <Badge key={skill} variant="secondary" className="bg-muted text-foreground">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

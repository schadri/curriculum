import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function PracticalProjects() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-cyan-400">Practical Projects</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-semibold text-foreground mb-2">Home Lab — Kali + Vulnerable VMs</h3>
          <p className="text-sm text-foreground leading-relaxed">
            Performed hands-on labs using Kali Linux as the attacker machine and Windows as the target/victim. Executed
            exploits with Metasploit using payloads such as
            <code className="text-cyan-400 mx-1">reverse_tcp</code> and tested real-world vulnerabilities including{" "}
            <span className="text-cyan-400">EternalBlue</span>. Carried out proofs-of-concept and implemented
            containment and mitigation measures in isolated test environments.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-foreground mb-2">Phishing Simulation & Password Tests</h3>
          <p className="text-sm text-foreground leading-relaxed">
            Conducted controlled phishing simulations combining cloned sites with fake access points (Evil Twin
            networks) to evaluate user awareness and attack vectors. Performed password-strength assessments using
            dictionary and brute-force methods with tools such as{" "}
            <code className="text-cyan-400 mx-1">aircrack-ng</code>,<code className="text-cyan-400 mx-1">linset</code>{" "}
            and
            <code className="text-cyan-400 mx-1">hydra</code>, all executed in isolated lab environments.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

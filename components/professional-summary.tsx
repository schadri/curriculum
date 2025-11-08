import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ProfessionalSummary() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-cyan-400">Professional Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-foreground leading-relaxed text-center">
          Self-motivated and tech-savvy student focused on cybersecurity and
          ethical hacking. Practical experience with tools like Kali Linux,
          NetHunter, WiFiSlax, and Metasploit in home lab environments. Capable
          of performing network scanning, vulnerability analysis, basic
          penetration testing, and simulated phishing. Always learning and
          seeking to grow into a cybersecurity role through hands-on practice
          and continuous improvement.
        </p>
      </CardContent>
    </Card>
  );
}

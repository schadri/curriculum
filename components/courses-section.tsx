import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function CoursesSection() {
  const courses = [
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
  ];

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-cyan-400">Training & Self-Study</CardTitle>
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
          Ongoing self-training through hands-on labs, log analysis exercises,
          network traffic inspection, and security monitoring practice aligned
          with SOC Tier 1 responsibilities.
        </p>
      </CardContent>
    </Card>
  );
}

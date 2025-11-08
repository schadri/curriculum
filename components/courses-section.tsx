import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CoursesSection() {
  const courses = [
    { name: "Metasploit Framework", provider: "Udemy", date: "Jan 2025" },
    { name: "Java", provider: "Udemy", date: "Oct 2024" },
    { name: "React.js", provider: "CoderHouse", date: "May 2023" },
    { name: "JavaScript", provider: "Udemy", date: "Apr 2023" },
    { name: "Network Ethical Hacking", provider: "Udemy", date: "Apr 2021" },
  ]

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-cyan-400">Courses & Certifications</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {courses.map((course, index) => (
            <li key={index} className="text-sm">
              <span className="font-semibold text-foreground">{course.name}</span>
              <span className="text-muted-foreground">
                {" "}
                — {course.provider} ({course.date})
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

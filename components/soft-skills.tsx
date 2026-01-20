import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function SoftSkills() {
  const softSkills = [
    "Analytical thinking",
    "Problem solving",
    "Attention to detail",
    "Teamwork",
    "Communication",
    "Continuous learning",
  ];

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-cyan-400">Soft Skills</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2">
          {softSkills.map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="bg-muted text-foreground"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

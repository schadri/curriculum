import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/components/language-provider";

export function SoftSkills() {
  const { language } = useLanguage();

  const softSkillsArray = 
    language === 'en'
    ? [
        "Analytical thinking",
        "Problem solving",
        "Attention to detail",
        "Teamwork",
        "Communication",
        "Continuous learning",
      ]
    : [
        "Pensamiento analítico",
        "Resolución de problemas",
        "Atención al detalle",
        "Trabajo en equipo",
        "Comunicación",
        "Aprendizaje continuo",
      ];

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-cyan-400">
          {language === 'en' ? 'Soft Skills' : 'Habilidades Blandas'}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2">
          {softSkillsArray.map((skill) => (
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

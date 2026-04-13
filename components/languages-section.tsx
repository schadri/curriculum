import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"

export function LanguagesSection() {
  const { language } = useLanguage();

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-cyan-400">
          {language === 'en' ? 'Languages' : 'Idiomas'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="text-foreground">
            <span className="font-semibold">{language === 'en' ? 'Spanish' : 'Español'}</span> — {language === 'en' ? 'Native' : 'Nativo'}
          </p>
          <p className="text-foreground">
            <span className="font-semibold">{language === 'en' ? 'English' : 'Inglés'}</span> — {language === 'en' ? 'Intermediate' : 'Intermedio'}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

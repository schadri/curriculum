import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function LanguagesSection() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-cyan-400">Languages</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="text-foreground">
            <span className="font-semibold">Spanish</span> — Native
          </p>
          <p className="text-foreground">
            <span className="font-semibold">English</span> — Intermediate
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

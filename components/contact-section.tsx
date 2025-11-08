import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone } from "lucide-react"

export function ContactSection() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-cyan-400">Contact & Links</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="text-sm font-semibold text-muted-foreground mb-2">Email</h4>
          <a
            href="mailto:schusteradrian2001@gmail.com"
            className="text-cyan-400 hover:underline flex items-center gap-2"
          >
            <Mail className="h-4 w-4" />
            schusteradrian2001@gmail.com
          </a>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-muted-foreground mb-2">Phone</h4>
          <p className="text-foreground flex items-center gap-2">
            <Phone className="h-4 w-4" />
            +54 9 11 2408-9201
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-muted-foreground mb-2">GitHub / LinkedIn</h4>
          <div className="space-y-1">
            <a
              href="https://github.com/schadri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline block"
            >
              github.com/schadri
            </a>
            <a
              href="https://linkedin.com/in/adrian-schuster"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline block"
            >
              linkedin.com/in/adrian-schuster
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

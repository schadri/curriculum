import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Phone } from "lucide-react";

export function ProfileHeader() {
  return (
    <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-border">
      <div className="flex items-center gap-6">
        <Avatar className="h-28 w-28 overflow-hidden">
          <AvatarImage
            src="/professional-portrait.png"
            alt="Profile"
            className="h-full w-full object-cover object-center transform scale-110"
          />
          <AvatarFallback>AS</AvatarFallback>
        </Avatar>

        <div>
          <h1 className="text-4xl font-bold text-cyan-400 mb-2">
            Adrian Schuster
          </h1>
          <h2 className="text-xl text-foreground mb-2">
            Cybersecurity & Software Development
          </h2>
          <p className="text-muted-foreground">
            Student • Ethical Hacking • Pentesting
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 text-cyan-400">
          <Mail className="h-4 w-4" />
          <a
            href="mailto:schusteradrian2001@gmail.com"
            className="underline"
            aria-label="Enviar correo a Adrian Schuster"
          >
            schusteradrian2001@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Phone className="h-4 w-4" />
          <span>+54 9 11 2408-9201</span>
        </div>
        <div className="flex items-center gap-2 text-cyan-400">
          <a
            href="https://www.linkedin.com/in/adrián-schuster-0400b5270"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            aria-label="LinkedIn - Adrian Schuster"
          >
            LinkedIn / adrian-schuster
          </a>
        </div>
        <div className="flex items-center gap-2 text-cyan-400">
          <a
            href="https://www.github.com/schadri"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            aria-label="LinkedIn - adrian schuster"
          >
            GitHub / schadri
          </a>
        </div>
      </div>
    </header>
  );
}

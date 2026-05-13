"use client"

import * as React from "react"
import { Settings, Sun, Moon, Languages } from "lucide-react"
import { useTheme } from "next-themes"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function SettingsMenu() {
  const { setTheme, resolvedTheme } = useTheme()
  const { language, setLanguage } = useLanguage()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full w-9 h-9 bg-card/80 backdrop-blur-md border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.1)] text-muted-foreground hover:text-cyan-400 transition-all duration-300"
        >
          <Settings className="h-5 w-5 animate-[spin_8s_linear_infinite]" />
          <span className="sr-only">Open settings</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent 
        align="end" 
        className="w-56 bg-card/90 backdrop-blur-lg border-cyan-500/20 p-4 rounded-2xl flex flex-col gap-4 shadow-[0_10px_40px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
      >
        <div className="flex flex-col gap-1">
          <p className="text-[10px] font-bold text-cyan-500/50 uppercase tracking-widest px-1">
            {language === 'en' ? 'Appearance' : 'Apariencia'}
          </p>
          <button
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className="flex items-center justify-between group p-2 rounded-xl hover:bg-cyan-500/5 transition-colors"
          >
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground group-hover:text-cyan-400">
              {resolvedTheme === 'dark' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              <span>{language === 'en' ? 'Theme' : 'Tema'}</span>
            </div>
            <div className="w-10 h-5 bg-cyan-500/10 rounded-full relative p-1 border border-cyan-500/20">
              <div className={cn(
                "w-3 h-3 bg-cyan-400 rounded-full transition-all duration-300 shadow-[0_0_8px_rgba(6,182,212,0.5)]",
                resolvedTheme === 'dark' ? "translate-x-5" : "translate-x-0"
              )} />
            </div>
          </button>
        </div>

        <div className="h-px bg-cyan-500/10 w-full" />

        <div className="flex flex-col gap-1">
          <p className="text-[10px] font-bold text-cyan-500/50 uppercase tracking-widest px-1">
            {language === 'en' ? 'Language' : 'Idioma'}
          </p>
          <button
            onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
            className="flex items-center justify-between group p-2 rounded-xl hover:bg-cyan-500/5 transition-colors"
          >
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground group-hover:text-cyan-400">
              <Languages className="h-4 w-4" />
              <span>{language === 'en' ? 'English' : 'Español'}</span>
            </div>
            <div className="flex items-center bg-cyan-500/10 rounded-full border border-cyan-500/20 px-1 h-5.5 min-w-[3.8rem] relative">
              <div className={cn(
                "absolute h-4 w-7 bg-cyan-500/20 rounded-full transition-all duration-300",
                language === 'en' ? "left-[1.9rem]" : "left-0.5"
              )} />
              <span className={cn("z-10 w-6 text-[10px] font-bold text-center transition-colors", language === 'es' ? "text-cyan-400" : "opacity-30")}>ES</span>
              <span className={cn("z-10 w-6 text-[10px] font-bold text-center transition-colors", language === 'en' ? "text-cyan-400" : "opacity-30")}>EN</span>
            </div>
          </button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

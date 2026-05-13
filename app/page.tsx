
"use client";
import { ProfileHeader } from "@/components/profile-header";
import { ProfessionalSummary } from "@/components/professional-summary";
import { EducationSection } from "@/components/education-section";
import { TechnicalSkills } from "@/components/technical-skills";
import { CoursesSection } from "@/components/courses-section";
import { LanguagesSection } from "@/components/languages-section";
import { ContactSection } from "@/components/contact-section";
import { PracticalProjects } from "@/components/practical-projects";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SoftSkills } from "@/components/soft-skills";
import { ProjectsSection } from "@/components/projects-section";
import { Briefcase, Code2 } from "lucide-react";
import { LanguageProvider, useLanguage } from "@/components/language-provider";
import { SettingsMenu } from "@/components/settings-menu";

function MainApp() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background relative pb-24">
      {/* Top Controls */}
      <div className="absolute top-6 right-6 z-50">
        <SettingsMenu />
      </div>

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <ProfileHeader />

        <Tabs defaultValue="cv" className="mt-8">
          <TabsContent value="cv" className="mt-0 outline-none">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-8">
                <ProfessionalSummary />
                <TechnicalSkills />
                <SoftSkills />
                <PracticalProjects />
              </div>

              <div className="space-y-8">
                <EducationSection />
                <CoursesSection />
                <LanguagesSection />
                <ContactSection />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="proyectos" className="mt-0 outline-none fade-in-0 animate-in slide-in-from-bottom-4 duration-500">
            <ProjectsSection />
          </TabsContent>

          {/* Floating Dock Navigation */}
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
            <TabsList className="bg-background/80 backdrop-blur-md border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.15)] rounded-full p-1 h-auto flex gap-1">
              <TabsTrigger 
                value="cv" 
                className="rounded-full px-6 py-2.5 data-[state=active]:bg-cyan-500/10 data-[state=active]:text-cyan-400 data-[state=active]:shadow-none flex items-center gap-2 transition-all duration-300"
              >
                <Briefcase className="w-4 h-4" />
                <span className="font-medium">{language === 'en' ? 'Resume' : 'Currículum'}</span>
              </TabsTrigger>
              <TabsTrigger 
                value="proyectos" 
                className="rounded-full px-6 py-2.5 data-[state=active]:bg-cyan-500/10 data-[state=active]:text-cyan-400 data-[state=active]:shadow-none flex items-center gap-2 transition-all duration-300"
              >
                <Code2 className="w-4 h-4" />
                <span className="font-medium">{language === 'en' ? 'Projects' : 'Proyectos'}</span>
              </TabsTrigger>
            </TabsList>
          </div>
        </Tabs>
      </main>
    </div>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}

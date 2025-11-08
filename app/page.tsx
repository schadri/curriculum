"use client";
import { ProfileHeader } from "@/components/profile-header";
import { ProfessionalSummary } from "@/components/professional-summary";
import { EducationSection } from "@/components/education-section";
import { TechnicalSkills } from "@/components/technical-skills";
import { CoursesSection } from "@/components/courses-section";
import { LanguagesSection } from "@/components/languages-section";
import { ContactSection } from "@/components/contact-section";
import { PracticalProjects } from "@/components/practical-projects";
import { PortfolioSection } from "@/components/portfolio-section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <ProfileHeader />

        <Tabs defaultValue="cv" className="mt-8">
          <TabsList className="w-full justify-start border-b border-border rounded-none bg-transparent p-0 h-auto">
            <TabsTrigger
              value="cv"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-cyan-400 data-[state=active]:bg-transparent data-[state=active]:text-cyan-400 px-6 py-3"
            >
              Curriculum Vitae
            </TabsTrigger>
            <TabsTrigger
              value="portfolio"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-cyan-400 data-[state=active]:bg-transparent data-[state=active]:text-cyan-400 px-6 py-3"
            >
              Portfolio
            </TabsTrigger>
          </TabsList>

          <TabsContent value="cv" className="mt-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-8">
                <ProfessionalSummary />
                <TechnicalSkills />
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

          <TabsContent value="portfolio" className="mt-8">
            <PortfolioSection />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

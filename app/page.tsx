"use client";

import { SiteNav } from "@/components/nav/SiteNav";
import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import ExperienceSection from "@/components/experience/ExperienceSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import SkillsSection from "@/components/skills/SkillsSection";
import UiLabSection from "@/components/animation/UiLabSection";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main id="top" className="relative min-h-screen overflow-hidden">
      <SiteNav />

      <div className="pointer-events-none fixed left-0 top-16 h-24 w-full overflow-hidden opacity-40">
        <div className="h-full w-full animate-scan bg-gradient-to-b from-transparent via-cyanVolt/10 to-transparent" />
      </div>

      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <UiLabSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

"use client";

import { HeroSection } from "./components/DeveloperProfile";
import { SkillsSection } from "./components/ToolsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";

export default function Home() {
  return (
    <div className="bg-surface-custom text-on-surface-custom font-body">
      <Navigation />
      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

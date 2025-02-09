import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Education from "@/components/sections/education";
import Experience from "@/components/sections/experience";
import Certifications from "@/components/sections/certifications";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="container mx-auto px-4 pt-16">
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Certifications />
      <Contact />
    </main>
  );
}
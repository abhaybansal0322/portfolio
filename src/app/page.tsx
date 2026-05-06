import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#07090d] min-h-screen">
      <Hero />
      <Metrics />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
    </main>
  );
}

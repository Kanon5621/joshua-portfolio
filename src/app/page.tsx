import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-dark-bg">
      <Hero />
      <About />
      <Services />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}
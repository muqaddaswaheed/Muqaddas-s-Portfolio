import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Values from "@/components/sections/Values";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import Github from "@/components/sections/Github";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Process />
        <Values />
        <Stats />
        <Testimonials />
        <Github />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

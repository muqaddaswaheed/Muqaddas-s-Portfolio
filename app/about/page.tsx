import type { Metadata } from "next";
import About from "@/components/sections/About";
import Values from "@/components/sections/Values";
import Process from "@/components/sections/Process";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Muqaddas Waheed — a Senior MERN Stack Developer focused on scalable architecture, clean code, and premium user experiences.",
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      <About />
      <Values />
      <Process />
    </div>
  );
}

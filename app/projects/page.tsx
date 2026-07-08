import type { Metadata } from "next";
import Projects from "@/components/sections/Projects";
import Github from "@/components/sections/Github";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected work by Muqaddas Waheed — production-grade applications across e-commerce, logistics, education, and real-time systems.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-16">
      <Projects />
      <Github />
    </div>
  );
}

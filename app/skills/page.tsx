import type { Metadata } from "next";
import Skills from "@/components/sections/Skills";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "The full-stack toolkit of Muqaddas Waheed — Next.js, React, TypeScript, Node, Express, MongoDB, Firebase, and more.",
};

export default function SkillsPage() {
  return (
    <div className="pt-16">
      <Skills />
    </div>
  );
}

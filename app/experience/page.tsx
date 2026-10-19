import type { Metadata } from "next";
import Experience from "@/components/sections/Experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "The career and education timeline of Muqaddas Waheed — Senior MERN Stack Developer at Deventia Tech, Node.js Developer at BXTrack Solutions, Frontend Developer at HHTechHub, and a BS in Computer Science (CGPA 3.9/4.0).",
};

export default function ExperiencePage() {
  return (
    <div className="pt-16">
      <Experience />
    </div>
  );
}

import type { Metadata } from "next";
import Experience from "@/components/sections/Experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "The career and education timeline of Muqaddas Waheed — Deventia Tech, BXTrack Solutions, certifications, and a CS degree.",
};

export default function ExperiencePage() {
  return (
    <div className="pt-16">
      <Experience />
    </div>
  );
}

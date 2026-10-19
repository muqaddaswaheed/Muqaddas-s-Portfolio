import type { Metadata } from "next";
import Projects from "@/components/sections/Projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected work by Muqaddas Waheed — AquaRide, AuraWear, Boxing Therapie Premium, Tadbeer Resource Platform, Side Quest and Digital Eve: production apps across delivery, e-commerce, booking, and NGO platforms.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-16">
      <Projects />
    </div>
  );
}

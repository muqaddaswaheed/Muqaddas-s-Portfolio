import type { Metadata } from "next";
import Resume from "@/components/sections/Resume";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "The professional résumé of Muqaddas Waheed — Full Stack MERN Developer. Experience, skills, education, and key projects.",
};

export default function ResumePage() {
  return (
    <div className="pt-16">
      <Resume />
    </div>
  );
}

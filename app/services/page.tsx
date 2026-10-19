import type { Metadata } from "next";
import Services from "@/components/sections/Services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Services offered by Muqaddas Waheed — full-stack development, APIs, dashboards, authentication, payments, real-time systems, and deployment.",
};

export default function ServicesPage() {
  return (
    <div className="pt-16">
      <Services />
    </div>
  );
}

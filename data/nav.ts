import {
  Briefcase,
  Cpu,
  FolderGit2,
  Home,
  Layers,
  Mail,
  User,
  type LucideIcon,
} from "lucide-react";

export type SubLink = { label: string; href: string; icon: LucideIcon; desc: string };
export type NavItem =
  | { label: string; href: string; icon: LucideIcon; items?: never }
  | { label: string; items: SubLink[]; href?: never; icon?: never };

/** Site navigation — shared by the navbar and the footer. */
export const nav: NavItem[] = [
  { label: "Home", href: "/", icon: Home },
  {
    label: "About",
    items: [
      { label: "About Me", href: "/about", icon: User, desc: "Who I am & my philosophy" },
      { label: "Skills", href: "/skills", icon: Cpu, desc: "My full tech stack" },
      { label: "Experience", href: "/experience", icon: Briefcase, desc: "Career & education" },
    ],
  },
  {
    label: "Work",
    items: [
      { label: "Projects", href: "/projects", icon: FolderGit2, desc: "Selected case studies" },
      { label: "Services", href: "/services", icon: Layers, desc: "What I can build for you" },
    ],
  },
  { label: "Contact", href: "/contact", icon: Mail },
];

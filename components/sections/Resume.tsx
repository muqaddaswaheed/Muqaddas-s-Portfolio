"use client";

import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Printer,
  FileDown,
  Briefcase,
  GraduationCap,
  Award,
  Cpu,
  Sparkles,
  FolderGit2,
} from "lucide-react";
import { resume } from "@/data/resume";
import { site } from "@/data/site";

function SheetHeading({ icon: Icon, children }: { icon: any; children: React.ReactNode }) {
  return (
    <h2 className="mb-3 flex items-center gap-2 border-b border-slate-200 pb-1.5 text-[13px] font-bold uppercase tracking-wider text-emerald-700">
      <Icon className="h-4 w-4 text-emerald-600" />
      {children}
    </h2>
  );
}

export default function Resume() {
  return (
    <section className="section-pad relative">
      <div className="container-max">
        {/* Actions — hidden when printing */}
        <div className="no-print mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald/20 bg-emerald/5 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-emerald">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald" /> Résumé
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gradient sm:text-4xl">
              My Resume
            </h1>
            <p className="mt-2 text-sm text-white/50">
              A clean, print-ready overview — download the PDF or print this page.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white/80 transition-colors hover:border-emerald/40 hover:text-emerald"
            >
              <Printer className="h-4 w-4" /> Print
            </button>
            <a
              href={site.resume}
              download
              className="inline-flex items-center gap-2 rounded-full bg-emerald px-5 py-2.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-emerald-soft"
            >
              <FileDown className="h-4 w-4" /> Download PDF
            </a>
          </div>
        </div>

        {/* The résumé "paper" sheet */}
        <div
          id="resume-sheet"
          className="resume-sheet mx-auto max-w-3xl rounded-2xl bg-white p-8 text-slate-700 shadow-2xl ring-1 ring-black/5 sm:p-12"
        >
          {/* Header */}
          <header className="border-b-2 border-emerald-600 pb-5">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              {resume.name}
            </h1>
            <p className="mt-1 text-base font-semibold text-emerald-700">{resume.role}</p>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-[13px] text-slate-500">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-emerald-600" /> {resume.location}
              </span>
              <a href={`mailto:${resume.email}`} className="inline-flex items-center gap-1.5 hover:text-emerald-700">
                <Mail className="h-3.5 w-3.5 text-emerald-600" /> {resume.email}
              </a>
              <span className="inline-flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5 text-emerald-600" /> {resume.phone}
              </span>
              <a href={site.socials.github} className="inline-flex items-center gap-1.5 hover:text-emerald-700">
                <Github className="h-3.5 w-3.5 text-emerald-600" /> {resume.github}
              </a>
              <a href={site.socials.linkedin} className="inline-flex items-center gap-1.5 hover:text-emerald-700">
                <Linkedin className="h-3.5 w-3.5 text-emerald-600" /> {resume.linkedin}
              </a>
            </div>
          </header>

          {/* Summary */}
          <section className="mt-6">
            <p className="text-[13.5px] leading-relaxed text-slate-600">{resume.summary}</p>
          </section>

          {/* Two-column body */}
          <div className="mt-6 grid gap-8 sm:grid-cols-[1.7fr_1fr]">
            {/* Left / main */}
            <div className="space-y-7">
              <section>
                <SheetHeading icon={Briefcase}>Experience</SheetHeading>
                <div className="space-y-5">
                  {resume.experience.map((job) => (
                    <div key={job.company}>
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="text-[15px] font-bold text-slate-900">{job.role}</h3>
                        <span className="shrink-0 font-mono text-[11px] text-slate-400">{job.period}</span>
                      </div>
                      <p className="text-[13px] font-semibold text-emerald-700">{job.company}</p>
                      <ul className="mt-2 space-y-1.5">
                        {job.points.map((pt) => (
                          <li key={pt} className="flex gap-2 text-[13px] leading-snug text-slate-600">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-500" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <SheetHeading icon={FolderGit2}>Key Projects</SheetHeading>
                <div className="space-y-3">
                  {resume.projects.map((p) => (
                    <div key={p.name}>
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="text-[14px] font-bold text-slate-900">{p.name}</h3>
                        <span className="shrink-0 font-mono text-[10px] text-slate-400">{p.tech}</span>
                      </div>
                      <p className="text-[13px] leading-snug text-slate-600">{p.note}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right / sidebar */}
            <div className="space-y-7">
              <section>
                <SheetHeading icon={Cpu}>Technical Skills</SheetHeading>
                <div className="space-y-3">
                  {resume.skills.map((group) => (
                    <div key={group.category}>
                      <p className="text-[12px] font-bold text-slate-800">{group.category}</p>
                      <div className="mt-1 flex flex-wrap gap-1">
                        {group.items.map((s) => (
                          <span
                            key={s}
                            className="rounded border border-emerald-200 bg-emerald-50 px-1.5 py-0.5 text-[10.5px] font-medium text-emerald-700"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <SheetHeading icon={GraduationCap}>Education</SheetHeading>
                {resume.education.map((e) => (
                  <div key={e.school}>
                    <h3 className="text-[13.5px] font-bold text-slate-900">{e.degree}</h3>
                    <p className="text-[12.5px] text-slate-600">{e.school}</p>
                    <p className="font-mono text-[11px] text-slate-400">{e.period}</p>
                    <p className="text-[12px] font-semibold text-emerald-700">{e.detail}</p>
                  </div>
                ))}
              </section>

              <section>
                <SheetHeading icon={Award}>Certifications</SheetHeading>
                {resume.certifications.map((c) => (
                  <div key={c.name}>
                    <h3 className="text-[13px] font-bold text-slate-900">{c.name}</h3>
                    <p className="text-[12px] text-slate-600">{c.issuer}</p>
                    <p className="font-mono text-[11px] text-slate-400">{c.period}</p>
                  </div>
                ))}
              </section>

              <section>
                <SheetHeading icon={Sparkles}>Soft Skills</SheetHeading>
                <ul className="space-y-1">
                  {resume.softSkills.map((s) => (
                    <li key={s} className="flex gap-2 text-[12.5px] leading-snug text-slate-600">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-500" />
                      {s}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

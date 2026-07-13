"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/data/site";

const contactItems = [
  { icon: Mail, label: "Email", value: site.email, href: site.socials.email },
  { icon: Github, label: "GitHub", value: "@muqaddaswaheed", href: site.socials.github },
  { icon: Linkedin, label: "LinkedIn", value: "muqaddas-waheed", href: site.socials.linkedin },
  { icon: MapPin, label: "Location", value: site.location, href: undefined },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="section-pad relative">
      <div className="container-max">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great"
          subtitle="Have a project in mind or just want to say hi? I'm currently available for new work."
        />

        <div className="glass-strong relative overflow-hidden rounded-3xl">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald/10 blur-3xl" />
          <div className="relative grid gap-0 lg:grid-cols-2">
            {/* Info side */}
            <div className="border-b border-white/10 p-8 md:p-10 lg:border-b-0 lg:border-r">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald/20 bg-emerald/5 px-4 py-1.5 text-xs text-emerald">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
                </span>
                Available for freelance & full-time
              </div>
              <h3 className="mt-5 text-2xl font-bold text-white">Get in touch</h3>
              <p className="mt-2 text-white/55">
                I usually respond within a day. Let&apos;s talk about your product.
              </p>

              <div className="mt-8 space-y-3">
                {contactItems.map((c) => {
                  const inner = (
                    <div className="glass card-hover flex items-center gap-4 rounded-2xl p-4">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-emerald/10 text-emerald">
                        <c.icon className="h-5 w-5" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-white/40">{c.label}</p>
                        <p className="truncate text-[13px] font-medium text-white">{c.value}</p>
                      </div>
                    </div>
                  );
                  return c.href ? (
                    <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="block">
                      {inner}
                    </a>
                  ) : (
                    <div key={c.label}>{inner}</div>
                  );
                })}
              </div>
            </div>

            {/* Form side */}
            <div className="p-8 md:p-10">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald/20 bg-emerald/5 px-4 py-1.5 text-xs text-emerald">
                  <Send className="h-3.5 w-3.5" />
                  Send a message
                </div>
                <h3 className="mt-5 text-2xl font-bold text-white">Let&apos;s work together</h3>
                <p className="mt-2 text-white/55">
                  Fill in the form and I&apos;ll get back to you shortly.
                </p>
              </div>
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex h-full flex-col items-center justify-center text-center"
                >
                  <CheckCircle2 className="h-14 w-14 text-emerald" />
                  <h3 className="mt-4 text-xl font-semibold text-white">Message ready!</h3>
                  <p className="mt-2 text-sm text-white/55">
                    Your email client should have opened. If not, reach me at{" "}
                    <span className="text-emerald">{site.email}</span>.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={submit} className="space-y-5">
                  <div>
                    <label className="mb-1.5 block text-sm text-white/60">Name</label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition-colors focus:border-emerald/50 placeholder:text-white/25"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm text-white/60">Email</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition-colors focus:border-emerald/50 placeholder:text-white/25"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm text-white/60">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about your project…"
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition-colors focus:border-emerald/50 placeholder:text-white/25"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2 rounded-full bg-emerald px-6 py-3.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-emerald-soft"
                  >
                    Send Message
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

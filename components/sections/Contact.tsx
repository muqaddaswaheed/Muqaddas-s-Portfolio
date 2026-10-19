"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  MapPin,
  Send,
  CheckCircle2,
  FileDown,
  ArrowUpRight,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/data/site";
import { cn, linkTarget } from "@/lib/utils";

const contactItems = [
  { icon: Mail, label: "Email", value: site.email, href: site.socials.email },
  { icon: Phone, label: "Phone", value: site.phone, href: site.phoneHref },
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
          as="h1"
          eyebrow="Contact"
          title="Let's build something great"
          subtitle="Have a project in mind or just want to say hi? I'm currently available for new work."
        />

        <div className="card overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Info side */}
            <div className="border-b border-line bg-paper-alt p-6 sm:p-8 md:p-10 lg:border-b-0 lg:border-r">
              <div className="eyebrow">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Available for freelance & full-time
              </div>
              <h2 className="mt-6 text-2xl font-bold tracking-tight text-ink">Get in touch</h2>
              <p className="mt-2 leading-relaxed text-ink-muted">
                I usually respond within a day. Let&apos;s talk about your product.
              </p>

              <div className="mt-8 space-y-2.5">
                {contactItems.map((c) => {
                  const inner = (
                    <div
                      className={cn(
                        "flex items-center gap-4 rounded-xl border border-line bg-paper p-3.5",
                        c.href &&
                          "transition-[border-color,box-shadow] duration-200 group-hover:border-accent/40 group-hover:shadow-card-hover"
                      )}
                    >
                      <span className="icon-tile">
                        <c.icon className="h-[18px] w-[18px]" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-ink-subtle">{c.label}</p>
                        <p className="truncate text-sm font-medium text-ink">{c.value}</p>
                      </div>
                      {c.href && (
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-subtle transition-[color,transform] duration-200 group-hover:text-accent motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5" />
                      )}
                    </div>
                  );
                  return c.href ? (
                    <a
                      key={c.label}
                      href={c.href}
                      {...linkTarget(c.href)}
                      className="group block rounded-xl"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={c.label}>{inner}</div>
                  );
                })}
              </div>

              <a
                href={site.resume}
                download={site.resumeFileName}
                className="btn btn-secondary mt-6 w-full"
              >
                <FileDown className="h-4 w-4 text-ink-muted" /> Download my CV
              </a>
            </div>

            {/* Form side */}
            <div className="p-6 sm:p-8 md:p-10">
              <div className="mb-8">
                <div className="eyebrow">
                  <Send className="h-3.5 w-3.5 text-accent" />
                  Send a message
                </div>
                <h2 className="mt-6 text-2xl font-bold tracking-tight text-ink">
                  Let&apos;s work together
                </h2>
                <p className="mt-2 leading-relaxed text-ink-muted">
                  Fill in the form and I&apos;ll get back to you shortly.
                </p>
              </div>
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="status"
                  className="flex flex-col items-center justify-center rounded-xl border border-accent/25 bg-accent-light/30 px-6 py-12 text-center"
                >
                  <CheckCircle2 className="h-12 w-12 text-accent" />
                  <h3 className="mt-4 text-xl font-semibold text-ink">Message ready!</h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-muted">
                    Your email client should have opened. If not, reach me at{" "}
                    <span className="font-medium text-accent-text">{site.email}</span>.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={submit} className="space-y-5">
                  <div>
                    <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-ink">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      autoComplete="name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="input"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-ink">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      autoComplete="email"
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      className="input"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-ink">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about your project…"
                      className="input resize-none"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg group w-full">
                    Send Message
                    <Send className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
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

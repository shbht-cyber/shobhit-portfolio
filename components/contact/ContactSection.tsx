import { Github, Linkedin, Mail, MapPin } from "lucide-react";

import {
  fadeUp,
  MotionDiv,
  MotionSection,
  staggerContainer,
} from "@/lib/MotionProvider";

import { contactContent } from "@/lib/portfolio-data";

const sectionViewport = { once: true, margin: "-120px" };

export default function ContactSection() {
  return (
    <MotionSection
      id="contact"
      initial="hidden"
      whileInView="show"
      viewport={sectionViewport}
      variants={staggerContainer}
      className="section-shell py-20"
    >
      <MotionDiv
        variants={fadeUp}
        className="glass-panel tech-border rounded p-7 text-center md:p-10"
      >
        <p className="font-mono text-xl uppercase tracking-[0.24em] text-cyanVolt">
          {contactContent.eyebrow}
        </p>

        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
          {contactContent.title}
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
          {contactContent.description}
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={`mailto:${contactContent.email}`}
            className="inline-flex items-center justify-center gap-2 rounded border border-cyanVolt/50 bg-cyanVolt px-5 py-3 font-semibold text-midnight shadow-glow"
          >
            <Mail size={18} />
            {contactContent.email}
          </a>

          <a
            href={contactContent.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded border border-white/12 bg-white/[0.06] px-5 py-3 font-semibold text-white"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>

          <a
            href={contactContent.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded border border-white/12 bg-white/[0.06] px-5 py-3 font-semibold text-white"
          >
            <Github size={18} />
            GitHub
          </a>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-slate-400">
          <span className="inline-flex items-center gap-2">
            <MapPin size={16} />
            {contactContent.location}
          </span>

          <span>{contactContent.footerTech}</span>
        </div>
      </MotionDiv>
    </MotionSection>
  );
}

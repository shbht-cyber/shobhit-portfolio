"use client";

import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MousePointer2,
  Sparkles,
} from "lucide-react";
import { HeroOrbital } from "@/components/hero/HeroOrbital";
import {
  fadeUp,
  MotionDiv,
  MotionSection,
  staggerContainer,
} from "@/lib/MotionProvider";
import { SectionHeading } from "@/components/common/SectionHeading";
import { SiteNav } from "@/components/nav/SiteNav";
import {
  animationCards,
  experiences,
  projects,
  skillGroups,
  stats,
  strengths,
} from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

const sectionViewport = { once: true, margin: "-120px" };

export default function Home() {
  return (
    <main id="top" className="relative min-h-screen overflow-hidden">
      <SiteNav />
      <div className="pointer-events-none fixed left-0 top-16 h-24 w-full overflow-hidden opacity-40">
        <div className="h-full w-full animate-scan bg-gradient-to-b from-transparent via-cyanVolt/10 to-transparent" />
      </div>

      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <AnimationShowcase />
      <ContactSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="section-shell relative flex min-h-screen items-center pb-20 pt-28">
      <div className="grid w-full items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <MotionDiv
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="max-w-3xl"
        >
          <MotionDiv
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded border border-cyanVolt/30 bg-cyanVolt/10 px-3 py-2 font-mono text-xs uppercase tracking-[0.22em] text-cyanVolt"
          >
            <Sparkles size={15} />
            Available for frontend roles
          </MotionDiv>
          <MotionDiv variants={fadeUp}>
            <h1 className="mt-7 text-5xl font-black leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Frontend systems with speed, polish, and recruiter-stopping
              motion.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              I build production-grade React and Next.js interfaces that feel
              sharp, load fast, and translate complex product needs into
              memorable user experiences.
            </p>
          </MotionDiv>
          <MotionDiv
            variants={fadeUp}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded border border-cyanVolt/50 bg-cyanVolt px-5 py-3 font-semibold text-midnight shadow-glow transition hover:-translate-y-0.5"
            >
              View Projects
              <ArrowUpRight
                size={18}
                className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded border border-white/12 bg-white/[0.06] px-5 py-3 font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
            >
              <Mail size={18} />
              Contact Me
            </a>
            <a
              href="mailto:arjun.mehta@example.com?subject=Resume%20request"
              className="inline-flex items-center justify-center gap-2 rounded border border-limeVolt/30 bg-limeVolt/10 px-5 py-3 font-semibold text-limeVolt transition hover:bg-limeVolt/15"
            >
              <Download size={18} />
              Resume
            </a>
          </MotionDiv>
          <MotionDiv
            variants={fadeUp}
            className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="glass-panel rounded p-4">
                <p className="font-mono text-2xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </MotionDiv>
        </MotionDiv>

        <HeroOrbital />
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <MotionSection
      id="about"
      initial="hidden"
      whileInView="show"
      viewport={sectionViewport}
      variants={staggerContainer}
      className="section-shell py-20"
    >
      <SectionHeading
        eyebrow="About"
        title="A frontend developer who thinks in systems and sweats the small states."
        copy="Recruiters see a polished portfolio. Teams get someone who can turn Figma into durable product UI, communicate tradeoffs, and keep quality high under real deadlines."
      />
      <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <MotionDiv
          variants={fadeUp}
          className="glass-panel tech-border rounded p-6 md:p-8"
        >
          <p className="font-mono text-sm uppercase tracking-[0.22em] text-magentaVolt">
            Profile
          </p>
          <h3 className="mt-4 text-2xl font-semibold text-white">
            React, Next.js, TypeScript, UI architecture
          </h3>
          <p className="mt-5 leading-8 text-slate-300">
            I have 4.5 years of experience creating frontend applications for
            SaaS, ecommerce, dashboards, and workflow-heavy products. My
            strongest work combines clean component architecture, expressive
            motion, and pragmatic delivery habits.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            {[
              "Remote friendly",
              "India based",
              "Open to product teams",
              "Fast onboarding",
            ].map((item) => (
              <span
                key={item}
                className="rounded border border-white/10 bg-white/[0.05] px-3 py-2 text-sm text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>
        </MotionDiv>
        <MotionDiv variants={fadeUp} className="grid gap-3 sm:grid-cols-2">
          {strengths.map((strength) => {
            const Icon = strength.icon;
            return (
              <div
                key={strength.label}
                className="glass-panel rounded p-5 transition hover:-translate-y-1 hover:border-cyanVolt/35"
              >
                <Icon className="text-cyanVolt" size={26} />
                <p className="mt-4 font-semibold text-white">
                  {strength.label}
                </p>
              </div>
            );
          })}
        </MotionDiv>
      </div>
    </MotionSection>
  );
}

function ExperienceSection() {
  return (
    <MotionSection
      id="experience"
      initial="hidden"
      whileInView="show"
      viewport={sectionViewport}
      variants={staggerContainer}
      className="section-shell py-20"
    >
      <SectionHeading
        eyebrow="Experience"
        title="Shipped interfaces across startups, studios, and scale-up product teams."
        copy="Sample experience data is structured so you can replace company names, outcomes, and impact bullets quickly."
      />
      <div className="relative">
        <div className="absolute left-4 top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-cyanVolt via-magentaVolt to-limeVolt md:block" />
        <div className="grid gap-5">
          {experiences.map((experience, index) => (
            <MotionDiv
              key={experience.company}
              variants={fadeUp}
              className="relative md:pl-12"
            >
              <div className="absolute left-[9px] top-8 hidden size-3 rounded-full bg-cyanVolt shadow-glow md:block" />
              <div className="glass-panel rounded p-6 transition hover:border-white/20 md:p-7">
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                  <div>
                    <p className="font-mono text-sm text-cyanVolt">
                      0{index + 1} / {experience.period}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">
                      {experience.role}
                    </h3>
                    <p className="mt-1 text-slate-400">{experience.company}</p>
                  </div>
                  <span className="inline-flex w-fit items-center gap-2 rounded border border-white/10 bg-white/[0.05] px-3 py-2 text-sm text-slate-300">
                    <CalendarDays size={16} />
                    {experience.period}
                  </span>
                </div>
                <p className="mt-5 leading-8 text-slate-300">
                  {experience.impact}
                </p>
                <div className="mt-5 grid gap-3 md:grid-cols-3">
                  {experience.points.map((point) => (
                    <span
                      key={point}
                      className="flex items-start gap-2 text-sm leading-6 text-slate-300"
                    >
                      <CheckCircle2
                        className="mt-0.5 shrink-0 text-limeVolt"
                        size={16}
                      />
                      {point}
                    </span>
                  ))}
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

function ProjectsSection() {
  return (
    <MotionSection
      id="projects"
      initial="hidden"
      whileInView="show"
      viewport={sectionViewport}
      variants={staggerContainer}
      className="section-shell py-20"
    >
      <SectionHeading
        eyebrow="Projects"
        title="Case-study cards built to make impact obvious in seconds."
        copy="Each card leads with product context, measurable outcomes, modern tooling, and interaction-ready affordances."
      />
      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((project, index) => (
          <MotionDiv
            key={project.name}
            variants={fadeUp}
            className="group glass-panel relative overflow-hidden rounded p-6 transition duration-300 hover:-translate-y-2 hover:border-white/25"
          >
            <div
              className={cn(
                "absolute inset-x-0 top-0 h-1",
                project.accent === "cyan" && "bg-cyanVolt",
                project.accent === "magenta" && "bg-magentaVolt",
                project.accent === "lime" && "bg-limeVolt",
              )}
            />
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-400">
              Project 0{index + 1}
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-white">
              {project.name}
            </h3>
            <p className="mt-2 text-sm text-cyanVolt">{project.type}</p>
            <p className="mt-5 min-h-[112px] leading-7 text-slate-300">
              {project.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-white/10 bg-white/[0.05] px-2.5 py-1.5 text-xs text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
              <span className="font-mono text-sm text-limeVolt">
                {project.metrics}
              </span>
              <button
                type="button"
                aria-label={`Open ${project.name}`}
                className="grid size-10 place-items-center rounded border border-white/10 bg-white/[0.06] text-white transition group-hover:border-cyanVolt/50 group-hover:text-cyanVolt"
              >
                <ArrowUpRight size={18} />
              </button>
            </div>
          </MotionDiv>
        ))}
      </div>
    </MotionSection>
  );
}

function SkillsSection() {
  return (
    <MotionSection
      id="skills"
      initial="hidden"
      whileInView="show"
      viewport={sectionViewport}
      variants={staggerContainer}
      className="section-shell py-20"
    >
      <SectionHeading
        eyebrow="Skills"
        title="A modern frontend stack with product-minded engineering habits."
        copy="The layout is dense enough for recruiters to scan and polished enough to communicate senior craft."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group) => {
          const Icon = group.icon;
          return (
            <MotionDiv
              key={group.title}
              variants={fadeUp}
              className="glass-panel rounded p-6"
            >
              <div className="flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded border border-cyanVolt/30 bg-cyanVolt/10 text-cyanVolt">
                  <Icon size={24} />
                </span>
                <h3 className="text-xl font-semibold text-white">
                  {group.title}
                </h3>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded border border-white/10 bg-white/[0.05] px-3 py-2 text-sm text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </MotionDiv>
          );
        })}
      </div>
    </MotionSection>
  );
}

function AnimationShowcase() {
  return (
    <MotionSection
      id="animation-lab"
      initial="hidden"
      whileInView="show"
      viewport={sectionViewport}
      variants={staggerContainer}
      className="section-shell py-20"
    >
      <SectionHeading
        eyebrow="Frontend Engineering Lab"
        title="The details recruiters notice and product teams depend on."
        copy="A portfolio should show more than visual flair. This section highlights interaction states, component thinking, accessibility, and performance-aware motion."
      />
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <MotionDiv
          variants={fadeUp}
          className="glass-panel overflow-hidden rounded p-6"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded border border-white/10 bg-ink">
            <div className="absolute inset-0 bg-grid-pattern bg-[length:32px_32px] opacity-60" />
            <div className="absolute inset-x-5 top-5 flex items-center justify-between rounded border border-white/10 bg-midnight/80 px-4 py-3 backdrop-blur">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-limeVolt" />
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-slate-300">
                  UI health
                </span>
              </div>
              <span className="font-mono text-xs text-cyanVolt">98 / 100</span>
            </div>

            <div className="absolute left-5 top-24 w-[56%] rounded border border-cyanVolt/25 bg-cyanVolt/10 p-4 shadow-glow">
              <div className="flex items-center justify-between">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyanVolt">
                  Button states
                </p>
                <MousePointer2 className="text-cyanVolt" size={18} />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {["Idle", "Hover", "Focus"].map((state, index) => (
                  <span
                    key={state}
                    className={cn(
                      "rounded border px-2 py-2 text-center text-[11px] font-semibold",
                      index === 0 &&
                        "border-white/10 bg-white/[0.05] text-slate-300",
                      index === 1 &&
                        "border-cyanVolt/40 bg-cyanVolt/15 text-cyanVolt",
                      index === 2 &&
                        "border-limeVolt/40 bg-limeVolt/15 text-limeVolt",
                    )}
                  >
                    {state}
                  </span>
                ))}
              </div>
            </div>

            <div className="absolute right-5 top-28 w-[34%] rounded border border-magentaVolt/25 bg-magentaVolt/10 p-4 shadow-magenta">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-magentaVolt">
                A11y
              </p>
              <div className="mt-4 space-y-2">
                {["Focus ring", "ARIA labels", "Contrast"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-xs text-slate-200"
                  >
                    <CheckCircle2
                      className="shrink-0 text-limeVolt"
                      size={14}
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-5 left-5 right-5 rounded border border-white/10 bg-midnight/80 p-4 backdrop-blur">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-400">
                    Component delivery
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    Design token to production UI
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {["Tokens", "Story", "Ship"].map((step) => (
                    <span
                      key={step}
                      className="rounded border border-white/10 bg-white/[0.05] px-2.5 py-1.5 text-xs text-slate-300"
                    >
                      {step}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </MotionDiv>
        <div className="grid gap-5">
          {animationCards.map((card) => {
            const Icon = card.icon;
            return (
              <MotionDiv
                key={card.title}
                variants={fadeUp}
                className="glass-panel rounded p-6 transition hover:-translate-y-1"
              >
                <div className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded border border-limeVolt/30 bg-limeVolt/10 text-limeVolt">
                    <Icon size={22} />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {card.title}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-300">{card.copy}</p>
                  </div>
                </div>
              </MotionDiv>
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
}

function ContactSection() {
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
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyanVolt">
          Contact
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
          Let&apos;s build interfaces that make product teams look inevitable.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
          Open to frontend developer roles, design-system work, Next.js apps,
          and high-polish UI engineering projects.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="mailto:arjun.mehta@example.com"
            className="inline-flex items-center justify-center gap-2 rounded border border-cyanVolt/50 bg-cyanVolt px-5 py-3 font-semibold text-midnight shadow-glow"
          >
            <Mail size={18} />
            arjun.mehta@example.com
          </a>
          <a
            href="https://www.linkedin.com"
            className="inline-flex items-center justify-center gap-2 rounded border border-white/12 bg-white/[0.06] px-5 py-3 font-semibold text-white"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a
            href="https://github.com"
            className="inline-flex items-center justify-center gap-2 rounded border border-white/12 bg-white/[0.06] px-5 py-3 font-semibold text-white"
          >
            <Github size={18} />
            GitHub
          </a>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-slate-400">
          <span className="inline-flex items-center gap-2">
            <MapPin size={16} />
            Bengaluru, India
          </span>
          <span>Next.js 14 / TypeScript / Tailwind / Framer Motion</span>
        </div>
      </MotionDiv>
    </MotionSection>
  );
}

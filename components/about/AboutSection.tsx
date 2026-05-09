import {
  fadeUp,
  MotionDiv,
  MotionSection,
  staggerContainer,
} from "@/lib/MotionProvider";
import { SectionHeading } from "@/components/common/SectionHeading";
import { strengths } from "@/lib/portfolio-data";

const sectionViewport = { once: true, margin: "-120px" };

export default function AboutSection() {
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

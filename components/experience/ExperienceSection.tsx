import { CalendarDays, CheckCircle2 } from "lucide-react";
import {
  fadeUp,
  MotionDiv,
  MotionSection,
  staggerContainer,
} from "@/lib/MotionProvider";
import { SectionHeading } from "@/components/common/SectionHeading";
import { experiences, experienceContent } from "@/lib/portfolio-data";

const sectionViewport = { once: true, margin: "-120px" };

export default function ExperienceSection() {
  return (
    <MotionSection
      id="experience"
      initial="hidden"
      whileInView="show"
      viewport={sectionViewport}
      variants={staggerContainer}
      className="section-shell pt-20"
    >
      <SectionHeading
        eyebrow={experienceContent.eyebrow}
        title={experienceContent.title}
        copy={experienceContent.copy}
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

import {
  fadeUp,
  MotionDiv,
  MotionSection,
  staggerContainer,
} from "@/lib/MotionProvider";

import { SectionHeading } from "@/components/common/SectionHeading";

import { skillGroups, skillsContent } from "@/lib/portfolio-data";

const sectionViewport = { once: true, margin: "-120px" };

export default function SkillsSection() {
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
        eyebrow={skillsContent.eyebrow}
        title={skillsContent.title}
        copy={skillsContent.copy}
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

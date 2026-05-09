import { ArrowUpRight } from "lucide-react";
import {
  fadeUp,
  MotionDiv,
  MotionSection,
  staggerContainer,
} from "@/lib/MotionProvider";
import { SectionHeading } from "@/components/common/SectionHeading";
import { projects } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

const sectionViewport = { once: true, margin: "-120px" };

export default function ProjectsSection() {
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

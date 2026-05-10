"use client";

import { ArrowUpRight, Github, Heart, Linkedin, Mail } from "lucide-react";

import { fadeUp, MotionDiv } from "@/lib/MotionProvider";

import { contactContent } from "@/lib/portfolio-data";

export default function Footer() {
  return (
    <footer className="section-shell pb-10 pt-4">
      <MotionDiv
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="
          glass-panel
          tech-border
          overflow-hidden
          rounded-2xl
          border
          border-white/10
        "
      >
        {/* Top section */}
        <div className="grid gap-10 px-6 py-8 md:grid-cols-[1fr_auto] md:px-8">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3">
              <span
                className="
                  grid
                  size-11
                  place-items-center
                  rounded-lg
                  border
                  border-cyanVolt/40
                  bg-cyanVolt/10
                  font-mono
                  text-sm
                  font-black
                  text-cyanVolt
                  shadow-glow
                "
              >
                SR
              </span>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  Shobhit Rajvanshi
                </h3>

                <p className="text-sm text-slate-400">
                  Senior Frontend Engineer
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-2xl leading-7 text-slate-300">
              Building scalable frontend systems with React.js, Next.js,
              TypeScript, and modern UI engineering practices focused on
              performance, accessibility, and polished user experiences.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Framer Motion",
                "Frontend Architecture",
              ].map((item) => (
                <span
                  key={item}
                  className="
                    rounded
                    border
                    border-white/10
                    bg-white/[0.05]
                    px-3
                    py-2
                    text-xs
                    text-slate-300
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-3">
            <a
              href={`mailto:${contactContent.email}`}
              className="
                inline-flex
                items-center
                gap-2
                rounded-lg
                border
                border-cyanVolt/30
                bg-cyanVolt/10
                px-4
                py-3
                text-sm
                font-medium
                text-cyanVolt
                transition
                hover:bg-cyanVolt/15
              "
            >
              <Mail size={16} />
              Email Me
            </a>

            <a
              href={contactContent.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-lg
                border
                border-white/10
                bg-white/[0.04]
                px-4
                py-3
                text-sm
                font-medium
                text-slate-200
                transition
                hover:border-white/20
                hover:bg-white/[0.07]
              "
            >
              <Linkedin size={16} />
              LinkedIn
              <ArrowUpRight size={15} className="ml-auto" />
            </a>

            <a
              href={contactContent.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-lg
                border
                border-white/10
                bg-white/[0.04]
                px-4
                py-3
                text-sm
                font-medium
                text-slate-200
                transition
                hover:border-white/20
                hover:bg-white/[0.07]
              "
            >
              <Github size={16} />
              GitHub
              <ArrowUpRight size={15} className="ml-auto" />
            </a>
          </div>
        </div>

        {/* Bottom section */}
        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-4
            border-t
            border-white/10
            px-6
            py-5
            text-sm
            text-slate-400
            md:flex-row
            md:px-8
          "
        >
          <p>
            © {new Date().getFullYear()} Shobhit Rajvanshi. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <span>Built with</span>

            <span className="text-cyanVolt">
              Next.js + TypeScript + Tailwind
            </span>

            <Heart size={14} className="text-magentaVolt" />
          </div>
        </div>
      </MotionDiv>
    </footer>
  );
}

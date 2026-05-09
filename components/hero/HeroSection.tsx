import { ArrowUpRight, Download, Mail, Sparkles } from "lucide-react";
import { HeroOrbital } from "@/components/hero/HeroOrbital";
import { fadeUp, MotionDiv, staggerContainer } from "@/lib/MotionProvider";

import { stats } from "@/lib/portfolio-data";
import { heroContent } from "@/lib/portfolio-data";

export default function HeroSection() {
  return (
    <section className="section-shell relative flex min-h-screen items-center pt-28">
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
            {heroContent.badge}
          </MotionDiv>

          <MotionDiv variants={fadeUp}>
            <h1 className="mt-7 text-5xl font-black leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
              {heroContent.heading}
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              {heroContent.description}
            </p>
          </MotionDiv>

          <MotionDiv
            variants={fadeUp}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href={heroContent.primaryCta.href}
              className="group inline-flex items-center justify-center gap-2 rounded border border-cyanVolt/50 bg-cyanVolt px-5 py-3 font-semibold text-midnight shadow-glow transition hover:-translate-y-0.5"
            >
              {heroContent.primaryCta.label}

              <ArrowUpRight
                size={18}
                className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <a
              href={heroContent.secondaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded border border-white/12 bg-white/[0.06] px-5 py-3 font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
            >
              <Mail size={18} />
              {heroContent.secondaryCta.label}
            </a>

            <a
              href={heroContent.resumeCta.href}
              className="inline-flex items-center justify-center gap-2 rounded border border-limeVolt/30 bg-limeVolt/10 px-5 py-3 font-semibold text-limeVolt transition hover:bg-limeVolt/15"
            >
              <Download size={18} />
              {heroContent.resumeCta.label}
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

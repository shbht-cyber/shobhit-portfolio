import { CheckCircle2, MousePointer2 } from "lucide-react";

import {
  fadeUp,
  MotionDiv,
  MotionSection,
  staggerContainer,
} from "@/lib/MotionProvider";

import { SectionHeading } from "@/components/common/SectionHeading";

import { animationCards, uiLabContent } from "@/lib/portfolio-data";

import { cn } from "@/lib/utils";

const sectionViewport = { once: true, margin: "-120px" };

export default function UiLabSection() {
  return (
    <MotionSection
      id="animation-lab"
      initial="hidden"
      whileInView="show"
      viewport={sectionViewport}
      variants={staggerContainer}
      className="section-shell pt-20"
    >
      <SectionHeading
        eyebrow={uiLabContent.eyebrow}
        title={uiLabContent.title}
        copy={uiLabContent.copy}
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
                  UI Health
                </span>
              </div>

              <span className="font-mono text-xs text-cyanVolt">
                {uiLabContent.uiHealthScore}
              </span>
            </div>

            <div className="absolute left-5 top-24 w-[56%] rounded border border-cyanVolt/25 bg-cyanVolt/10 p-4 shadow-glow">
              <div className="flex items-center justify-between">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyanVolt">
                  Interaction States
                </p>

                <MousePointer2 className="text-cyanVolt" size={18} />
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                {uiLabContent.buttonStates.map((state, index) => (
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
                Accessibility
              </p>

              <div className="mt-2 space-y-2">
                {uiLabContent.accessibilityItems.map((item) => (
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
                    {uiLabContent.deliveryTitle}
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    {uiLabContent.deliverySubtitle}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  {uiLabContent.deliverySteps.map((step) => (
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

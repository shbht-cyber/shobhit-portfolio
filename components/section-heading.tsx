import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  copy,
  className
}: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto mb-10 max-w-3xl text-center md:mb-14", className)}>
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-cyanVolt">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">{copy}</p>
    </div>
  );
}

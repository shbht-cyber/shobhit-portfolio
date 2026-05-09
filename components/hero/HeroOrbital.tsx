"use client";

import { Command } from "lucide-react";
import { MotionDiv } from "../../lib/MotionProvider";
import { basicDetails, orbitItems } from "@/lib/portfolio-data";
import Image from "next/image";

export function HeroOrbital() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[480px]">
      <MotionDiv
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-6 rounded-full border border-dashed border-cyanVolt/30"
      />

      <MotionDiv
        animate={{ rotate: -360 }}
        transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
        className="absolute inset-16 rounded-full border border-dashed border-magentaVolt/25"
      />

      <div className="absolute inset-20 rounded-full border border-white/10 bg-white/[0.035]" />

      <div className="absolute inset-28 rounded-full bg-radial-signal blur-2xl" />

      <div className="absolute left-1/2 top-1/2  size-40 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border border-cyanVolt/40 shadow-glow sm:size-80">
        <Image
          src="/profile.jpg"
          alt={basicDetails.name}
          fill
          priority
          sizes="(min-width: 640px) 176px, 144px"
          className="object-cover object-center"
        />
      </div>

      <MotionDiv
        initial={{ opacity: 0, scale: 0.86 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="glass-panel absolute left-1/2 top-1/2 grid size-44 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full text-center shadow-glow sm:size-56"
      >
        <div>
          <Command className="mx-auto text-cyanVolt" size={38} />

          <p className="mt-4 font-mono text-xs uppercase tracking-[0.22em] text-slate-400">
            {basicDetails.role}
          </p>

          <p className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">
            {basicDetails.experience} Years
          </p>

          <p className="mt-2 mb-4 text-xs text-slate-400">
            {basicDetails.mainSkills}
          </p>
        </div>
      </MotionDiv>

      {orbitItems.map((item, index) => {
        const Icon = item.icon;

        return (
          <MotionDiv
            key={item.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 + index * 0.1 }}
            className={`glass-panel absolute ${item.className} flex items-center gap-2 rounded px-3 py-2 text-sm text-slate-100`}
          >
            <Icon size={16} className="text-limeVolt" />
            {item.label}
          </MotionDiv>
        );
      })}
    </div>
  );
}

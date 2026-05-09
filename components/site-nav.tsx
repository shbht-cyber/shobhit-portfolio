"use client";

import { Menu, Send, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import { MotionDiv } from "./motion-provider";

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-midnight/72 backdrop-blur-2xl">
      <nav className="section-shell flex h-16 items-center justify-between">
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded border border-cyanVolt/45 bg-cyanVolt/10 font-mono text-sm font-black text-cyanVolt shadow-glow">
            AM
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-semibold text-white">Arjun Mehta</span>
            <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-slate-400">
              Frontend Developer
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded border border-white/10 bg-white/[0.04] p-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="mailto:arjun.mehta@example.com"
          className="hidden items-center gap-2 rounded border border-limeVolt/40 bg-limeVolt/10 px-4 py-2 text-sm font-semibold text-limeVolt transition hover:bg-limeVolt/20 lg:flex"
        >
          <Send size={16} />
          Hire Me
        </a>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
          className="grid size-10 place-items-center rounded border border-white/12 bg-white/[0.06] text-white md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <MotionDiv
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        className="overflow-hidden border-t border-white/10 bg-midnight/95 md:hidden"
      >
        <div className="section-shell grid gap-2 py-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded border border-white/10 bg-white/[0.04] px-4 py-3",
                "text-sm font-medium text-slate-200"
              )}
            >
              {item.label}
            </a>
          ))}
        </div>
      </MotionDiv>
    </header>
  );
}

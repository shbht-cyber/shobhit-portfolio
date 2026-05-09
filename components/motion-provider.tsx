"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

export function MotionDiv(props: HTMLMotionProps<"div">) {
  return <motion.div {...props} />;
}

export function MotionSection(props: HTMLMotionProps<"section">) {
  return <motion.section {...props} />;
}

export const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" }
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08
    }
  }
};

import {
  Braces,
  Cpu,
  DatabaseZap,
  Figma,
  Gauge,
  GitBranch,
  Layers3,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow
} from "lucide-react";

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Lab", href: "#animation-lab" },
  { label: "Contact", href: "#contact" }
];

export const stats = [
  { value: "4.5+", label: "Years building UI" },
  { value: "28", label: "Products shipped" },
  { value: "96", label: "Lighthouse score avg" },
  { value: "12k", label: "Daily users served" }
];

export const experiences = [
  {
    role: "Senior Frontend Developer",
    company: "NovaStack Labs",
    period: "2024 - Present",
    impact:
      "Leading frontend architecture for a SaaS analytics product with design-system primitives, dashboard performance work, and high-trust release practices.",
    points: ["Cut page interaction latency by 38%", "Built tokenized theming across 60+ screens", "Mentored 5 engineers on React patterns"]
  },
  {
    role: "Frontend Developer",
    company: "PixelForge Studio",
    period: "2021 - 2024",
    impact:
      "Delivered responsive interfaces for fintech, healthtech, and internal productivity platforms with a strong focus on accessibility and motion polish.",
    points: ["Owned Next.js migrations", "Created reusable component libraries", "Improved conversion flows with A/B variants"]
  },
  {
    role: "UI Engineer",
    company: "Orbit Digital",
    period: "2020 - 2021",
    impact:
      "Built marketing pages and product portals while developing a foundation in semantic HTML, CSS architecture, and client communication.",
    points: ["Shipped 14 client launches", "Standardized QA checklists", "Partnered closely with designers"]
  }
];

export const projects = [
  {
    name: "PulseOps Command Center",
    type: "Realtime Operations Dashboard",
    description:
      "A telemetry-rich admin console with streaming charts, role-based workflows, and precise interaction states for enterprise support teams.",
    stack: ["Next.js", "TypeScript", "Tailwind", "TanStack Query"],
    metrics: "47% faster triage",
    accent: "cyan"
  },
  {
    name: "SynthCart Studio",
    type: "Composable Commerce Builder",
    description:
      "A modular storefront editor with drag-and-drop merchandising, motion-enhanced previews, and a scalable component registry.",
    stack: ["React", "Framer Motion", "Zustand", "Stripe"],
    metrics: "3.2x editor adoption",
    accent: "magenta"
  },
  {
    name: "VertexHire Portal",
    type: "Recruitment Workflow Platform",
    description:
      "An applicant tracking experience with accessible filters, collaborative notes, interview scheduling, and performance-minded list rendering.",
    stack: ["Next.js", "Prisma", "Postgres", "Radix UI"],
    metrics: "61% fewer clicks",
    accent: "lime"
  }
];

export const skillGroups = [
  {
    title: "Core Frontend",
    icon: Braces,
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"]
  },
  {
    title: "Interface Systems",
    icon: Layers3,
    skills: ["Tailwind CSS", "Design Systems", "Radix UI", "Storybook", "Accessibility", "Responsive UI"]
  },
  {
    title: "Motion & Polish",
    icon: Sparkles,
    skills: ["Framer Motion", "Microinteractions", "Page Transitions", "SVG Animation", "Scroll Effects", "Prototyping"]
  },
  {
    title: "Engineering",
    icon: Workflow,
    skills: ["REST", "GraphQL", "Testing", "CI/CD", "Performance", "Code Review"]
  }
];

export const strengths = [
  { icon: MonitorSmartphone, label: "Responsive product surfaces" },
  { icon: Gauge, label: "Performance-focused delivery" },
  { icon: ShieldCheck, label: "Accessible interaction design" },
  { icon: GitBranch, label: "Clean release collaboration" },
  { icon: DatabaseZap, label: "API-driven UI architecture" },
  { icon: Figma, label: "Designer-friendly implementation" }
];

export const animationCards = [
  {
    title: "Microinteractions that explain state",
    copy: "Loading, hover, focus, and success states are designed to make product flows feel responsive and trustworthy.",
    icon: Rocket
  },
  {
    title: "Component systems with motion rules",
    copy: "Reusable UI primitives keep transitions consistent across dashboards, forms, cards, menus, and empty states.",
    icon: Cpu
  },
  {
    title: "Accessible animation decisions",
    copy: "Motion is purposeful, readable, and easy to adapt for reduced-motion preferences and keyboard users.",
    icon: Sparkles
  }
];

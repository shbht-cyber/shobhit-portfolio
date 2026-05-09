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
  Workflow,
  GitPullRequestArrow,
  Code2,
} from "lucide-react";

export const basicDetails = {
  prefix: "SR",
  name: "Shobhit Rajvanshi",
  dob: "01-July-1998",
  role: "Frontend Engineer",
  designation: "Senior Frontend Developer",
  mail: "shobhitraj1998@gmail.com",
  experience: "4.5+",
  mainSkills: "React • Next.js • TypeScript",
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "UI Lab", href: "#animation-lab" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "4.5+", label: "Years of frontend experience" },
  { value: "20+", label: "Enterprise features delivered" },
  { value: "30%+", label: "Performance & workflow improvements" },
  { value: "1M+", label: "Users impacted across products" },
];

export const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Josys",
    period: "Nov 2024 - Present",
    impact:
      "Building enterprise-scale SaaS admin platforms with AI-driven analytics, Micro Frontend architecture, advanced data visualization, and secure governance workflows for global IT management systems.",
    points: [
      "Built AI-driven risk analytics dashboards using React, TypeScript, and Nivo Charts",
      "Developed File Governance workflows reducing manual admin effort by 30%",
      "Implemented enterprise-grade data grids with filtering, caching, and query persistence",
    ],
  },
  {
    role: "Software Engineer",
    company: "Monster India (Foundit)",
    period: "Jan 2023 - Oct 2024",
    impact:
      "Developed high-traffic recruitment and fellowship platforms using React and Next.js with strong focus on SEO, Core Web Vitals, scalable UI systems, and conversion-driven experiences.",
    points: [
      "Migrated Laravel pages to Next.js contributing to 20% increase in job applications",
      "Built reusable npm-based global header library adopted across multiple applications",
      "Integrated CleverTap and Freshpaint analytics for conversion and event tracking",
    ],
  },
  {
    role: "Software Engineer",
    company: "InfoEdge India Ltd (99acres)",
    period: "Sept 2021 - Dec 2022",
    impact:
      "Worked on scalable real estate discovery experiences including locality pages, recommendation systems, and responsive user journeys optimized for high traffic and engagement.",
    points: [
      "Improved property discovery journeys increasing user clicks by 30%",
      "Developed reusable UI components for large-scale landing pages",
      "Optimized frontend responsiveness and rendering performance across platforms",
    ],
  },
];

export const projects = [
  {
    name: "DevMate",
    type: "Full Stack Social Networking Platform",
    description:
      "A scalable social networking platform featuring JWT authentication, real-time chat with WebSockets, responsive UI architecture, and modern state management for seamless user experiences.",
    stack: ["React.js", "Node.js", "MongoDB", "Socket.IO"],
    metrics: "Realtime messaging & scalable APIs",
    accent: "cyan",
  },
  {
    name: "Netflix GPT App",
    type: "AI-Powered Movie Recommendation Platform",
    description:
      "A Netflix-inspired streaming interface integrating Gemini AI recommendations, TMDB APIs, Firebase authentication, and dynamic search-driven movie discovery workflows.",
    stack: ["React.js", "Redux", "Gemini AI", "Firebase"],
    metrics: "AI-powered recommendation workflows",
    accent: "magenta",
  },
  {
    name: "Enterprise Analytics Dashboard",
    type: "AI Risk & Governance Platform",
    description:
      "A modern enterprise admin dashboard with analytics visualizations, governance workflows, advanced data grids, role-based access controls, and performance-focused architecture.",
    stack: ["Next.js", "TypeScript", "Redux", "Material UI"],
    metrics: "30% reduction in manual admin effort",
    accent: "lime",
  },
];

export const skillGroups = [
  {
    title: "Core Frontend",
    icon: Braces,
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "UI Engineering",
    icon: Layers3,
    skills: [
      "Tailwind CSS",
      "Material UI",
      "Responsive Design",
      "Component Libraries",
      "Micro Frontends",
      "Design Systems",
    ],
  },
  {
    title: "Performance & Architecture",
    icon: Sparkles,
    skills: [
      "SSR",
      "Code Splitting",
      "Lazy Loading",
      "Core Web Vitals",
      "Caching",
      "Performance Optimization",
    ],
  },
  {
    title: "Testing & Engineering",
    icon: Workflow,
    skills: [
      "Jest",
      "React Testing Library",
      "MSW",
      "REST APIs",
      "Git",
      "Code Reviews",
    ],
  },
];

export const strengths = [
  { icon: MonitorSmartphone, label: "Responsive enterprise applications" },
  { icon: Gauge, label: "Performance-focused frontend architecture" },
  { icon: ShieldCheck, label: "Scalable and secure UI workflows" },
  { icon: GitBranch, label: "Collaborative development & code reviews" },
  { icon: DatabaseZap, label: "API-driven dashboard systems" },
  { icon: Figma, label: "Pixel-perfect UI implementation" },
];

export const animationCards = [
  {
    title: "Smooth enterprise-grade interactions",
    copy: "Carefully designed loading states, transitions, and interaction feedback make complex admin workflows feel intuitive and responsive.",
    icon: Rocket,
  },
  {
    title: "Reusable scalable frontend systems",
    copy: "Built modular component architectures and shared UI systems that scale efficiently across dashboards, portals, and enterprise products.",
    icon: Cpu,
  },
  {
    title: "Performance-first frontend engineering",
    copy: "Focused on Core Web Vitals, rendering optimization, caching strategies, and accessibility to deliver fast and reliable user experiences.",
    icon: Sparkles,
  },
];

export const orbitItems = [
  {
    icon: Code2,
    label: "React.js",
    className: "left-1/2 top-0 -translate-x-1/2",
  },
  {
    icon: Figma,
    label: "UI Systems",
    className: "right-2 top-1/4",
  },
  {
    icon: Cpu,
    label: "Performance",
    className: "bottom-6 right-10",
  },
  {
    icon: GitPullRequestArrow,
    label: "Code Reviews",
    className: "bottom-6 left-10",
  },
  {
    icon: Layers3,
    label: "Next.js",
    className: "left-2 top-1/4",
  },
];

export const heroContent = {
  badge: "Available for Frontend Engineer roles",

  heading:
    "Building scalable frontend systems with performance, polish, and enterprise-grade user experiences.",

  description:
    "Frontend Engineer with 4.5+ years of experience building high-performance web applications using React.js, Next.js, TypeScript, and modern frontend architectures. Specialized in enterprise dashboards, scalable UI systems, responsive design, and performance optimization across large-scale products.",

  primaryCta: {
    label: "View Projects",
    href: "#projects",
  },

  secondaryCta: {
    label: "Contact Me",
    href: "#contact",
  },

  resumeCta: {
    label: "Download Resume",
    href: "/resume/Shobhit-Rajvanshi-Resume.pdf",
  },
};

export const aboutContent = {
  eyebrow: "About",

  title:
    "Frontend engineer focused on scalable systems, performance, and polished user experiences.",

  copy: "I build modern frontend applications that balance clean architecture, responsiveness, accessibility, and business impact. From enterprise dashboards to high-traffic consumer platforms, I focus on creating scalable UI systems that feel fast, intuitive, and reliable.",

  profileTitle: "React.js, Next.js, TypeScript & Enterprise UI Engineering",

  profileDescription:
    "With 4.5+ years of experience across SaaS, recruitment, and real estate platforms, I specialize in building production-grade frontend systems using React.js, Next.js, TypeScript, and modern frontend architectures. My work focuses on scalable component systems, dashboard experiences, frontend performance, and maintainable engineering practices.",

  tags: [
    "Open to Frontend Roles",
    "India Based",
    "Product Engineering",
    "Enterprise UI Systems",
  ],
};

export const experienceContent = {
  eyebrow: "Experience",

  title:
    "Built scalable frontend systems across enterprise SaaS, recruitment, and high-traffic consumer platforms.",

  copy: "4.5+ years of experience delivering performant React and Next.js applications with focus on frontend architecture, enterprise dashboards, reusable UI systems, and business-driven product experiences.",
};

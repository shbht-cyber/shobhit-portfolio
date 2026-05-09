import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shobhit Rajvanshi | Senior Frontend Engineer",
  description:
    "Frontend Engineer with 4.5+ years of experience building scalable, high-performance web applications using React.js, Next.js, TypeScript, and modern frontend architectures. Specialized in enterprise dashboards, design systems, performance optimization, and responsive user experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}

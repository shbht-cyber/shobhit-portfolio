import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arjun Mehta | Frontend Developer",
  description:
    "A futuristic frontend developer portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.",
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

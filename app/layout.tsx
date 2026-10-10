import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Svezhen Bratanov | Full-Stack Developer",
  description:
    "Portfolio of Svezhen Bratanov, a Full-Stack Developer building modern web applications with React, Next.js, Angular and Node.js.",
  keywords: ["Svezhen Bratanov", "Full-Stack Developer", "React", "Angular", "Next.js", "Node.js", "TypeScript"],
  authors: [{ name: "Svezhen Bratanov" }],
  openGraph: {
    title: "Svezhen Bratanov | Full-Stack Developer",
    description: "Full-Stack Developer building modern applications with React, Angular, Next.js and Node.js.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Svezhen Bratanov | Full-Stack Developer",
    description: "Full-Stack Developer building modern applications with React, Angular, Next.js and Node.js.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

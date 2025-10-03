import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { profile } from "@/data/profile";

import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter", // CSS variable name
  subsets: ["latin"], // Optional: you can add more subsets if necessary
});

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.title}`,
  description: profile.subtitle,
  keywords: [
    "Software Engineer",
    "Frontend Developer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Damascus",
    "Syria",
  ],
  authors: [{ name: profile.name, url: profile.links.github }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anasdurra.vercel.app",
    title: `${profile.name} — ${profile.title}`,
    description: profile.subtitle,
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description: profile.subtitle,
  },
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased flex flex-col min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

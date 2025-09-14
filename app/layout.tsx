import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Background from "@/components/Background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ritik Prajapat | Full Stack Developer Portfolio",
  description:
    "Portfolio of Ritik Prajapat, a Full Stack Developer skilled in React, Next.js, Django, Node.js, and MongoDB. Explore projects like Podcast Generator, Email Summarizer, Socially, and ReflexRush. Open-source contributor, certified in OCI AI Foundations, Java, and DBMS.",
  keywords: [
    "Ritik Prajapat",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "Django Developer",
    "Node.js Developer",
    "Portfolio",
    "Open Source Contributor",
    "Email Summarizer",
    "Podcast Generator",
    "Socially Project",
    "ReflexRush",
    "MERN Developer",
    "TailwindCSS",
    "Software Engineer",
    "AI Automation",
    "Blockchain Enthusiast",
  ],
  authors: [
    {
      name: "Ritik Prajapat",
      url: "https://ritikprajapat-portfolio.vercel.app",
    },
  ],
  creator: "Ritik Prajapat",
  openGraph: {
    title: "Ritik Prajapat | Full Stack Developer Portfolio",
    description:
      "Full Stack Developer skilled in React, Next.js, Django, Node.js, and MongoDB. Explore projects, open-source contributions, and certifications.",
    url: "https://ritikprajapat-portfolio.vercel.app",
    siteName: "Ritik Prajapat Portfolio",
    images: [
      {
        url: "https://ritikprajapat-portfolio.vercel.app/og-image.png", // Add a custom OG image
        width: 1200,
        height: 630,
        alt: "Ritik Prajapat Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ritik Prajapat | Full Stack Developer Portfolio",
    description:
      "Explore projects like Podcast Generator, Email Summarizer, and Socially. Full Stack Developer with expertise in React, Next.js, Django, and Node.js.",
    creator: "@yourTwitterHandle", // add when you have one
    images: ["https://ritikprajapat-portfolio.vercel.app/og-image.png"],
  },
  metadataBase: new URL("https://ritikprajapat-portfolio.vercel.app"),
  alternates: {
    canonical: "https://ritikprajapat-portfolio.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Background />
        <Analytics />
        {children}
      </body>
    </html>
  );
}

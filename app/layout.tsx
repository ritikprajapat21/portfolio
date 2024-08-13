import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Particle from "@/components/Particles";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Ritik Prajapat | Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Analytics />
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="fixed pt-4 left-1/2 right-1/2">
            <Navbar />
          </div>
          <Particle />
          <main className="text-4xl md:text-5xl lg:text-6xl">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

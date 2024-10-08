import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Particle from "@/components/Particles";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });
import { Analytics } from "@vercel/analytics/react";
import GoogleAnalytics from "@/components/Analytics";

export const metadata: Metadata = {
  title: {
    template: "%s | Ritik Prajapat",
    default: "Introduction | Ritik Prajapat",
  },
  description: "Portfolio created by Ritik Prajapat",
  metadataBase: new URL("https://ritikprajapat-portfolio.vercel.app/"),
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
        <GoogleAnalytics />
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

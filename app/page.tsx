import BottomNavbar from "@/components/BottomNavbar";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Summary from "@/components/Summary";

// ---------- MAIN PAGE ----------
export default function Portfolio() {
  return (
    <main className="relative min-h-screen text-neutral-900 dark:text-neutral-100">
      <Navbar />
      {/* Hero */}
      <Hero />
      {/* Summary */}
      <Summary />
      {/* Skills */}
      <Skills />
      {/* Projects */}
      <Projects />
      {/* Experience (optional for freshers but keeps your strong internship) */}
      <Experience />
      {/* Education & Certifications */}
      <Education />
      {/* Contact */}
      <Contact />
      {/* Footer */}
      <Footer />
      <BottomNavbar />
    </main>
  );
}

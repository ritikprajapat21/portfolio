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
      <Hero />
      <Summary />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
      <BottomNavbar />
    </main>
  );
}

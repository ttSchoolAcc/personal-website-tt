import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar"
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import Contact from "./components/Contact";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <meta name="robots" content="noindex"></meta>
      <Navbar/>
      <div className="container mx-auto px-12 py-4">
        <HeroSection/>
        <AchievementsSection/>
        <AboutSection/>
        <ProjectsSection/>
        <Contact/>
        <Footer/>
      </div>
      
    </main>
  );
}

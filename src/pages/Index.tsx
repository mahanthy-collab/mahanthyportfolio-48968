import Navigation from "@/components/portfolio/Navigation";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Experience from "@/components/portfolio/Experience";
import WhyIStandOut from "@/components/portfolio/WhyIStandOut";
import Skills from "@/components/portfolio/Skills";
import Internships from "@/components/portfolio/Internships";
import Projects from "@/components/portfolio/Projects";
import PositionsOfResponsibility from "@/components/portfolio/PositionsOfResponsibility";
import Achievements from "@/components/portfolio/Achievements";
import CertificationsAndLanguages from "@/components/portfolio/CertificationsAndLanguages";
import Contact from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16"> {/* Add padding for fixed navigation */}
        <Hero />
        <div id="about">
          <About />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="internships">
          <Internships />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="positions">
          <PositionsOfResponsibility />
        </div>
        <div id="achievements">
          <Achievements />
        </div>
        <div id="why-stand-out">
          <WhyIStandOut />
        </div>
        <div id="certifications">
          <CertificationsAndLanguages />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Index;

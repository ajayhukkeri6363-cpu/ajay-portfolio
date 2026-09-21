import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import SkillsMarquee from "./components/SkillsMarquee";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ProjectModal from "./components/ProjectModal";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Contact from "./components/Contact";
import ResumeModal from "./components/ResumeModal";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("ajay_theme");
    return savedTheme ? savedTheme : "dark";
  });

  const [activeSection, setActiveSection] = useState("hero");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("ajay_theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // ScrollSpy for active nav section
  useEffect(() => {
    const sectionIds = [
      "hero",
      "about",
      "skills",
      "projects",
      "certifications",
      "education",
      "contact",
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`app-root ${theme === "dark" ? "theme-dark" : "theme-light"}`}>
      {/* Scroll Progress & Back to Top */}
      <ScrollProgress theme={theme} />

      {/* Main Navbar */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        activeSection={activeSection}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      <main>
        {/* Hero Section */}
        <Hero
          theme={theme}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Seamless Skills Marquee Strip */}
        <SkillsMarquee />

        {/* About Section */}
        <About
          theme={theme}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Skills Section */}
        <Skills theme={theme} />

        {/* Projects Section */}
        <Projects
          theme={theme}
          onOpenCaseStudy={(proj) => setSelectedProject(proj)}
        />

        {/* Certifications Section */}
        <Certifications theme={theme} />

        {/* Education Section */}
        <Education theme={theme} />

        {/* Contact Section */}
        <Contact theme={theme} />
      </main>

      {/* Footer */}
      <Footer theme={theme} />

      {/* Interactive Project Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        theme={theme}
        onClose={() => setSelectedProject(null)}
      />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        theme={theme}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
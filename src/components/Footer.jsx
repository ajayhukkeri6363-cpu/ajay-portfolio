import React from "react";
import { motion } from "framer-motion";
import { ArrowUp, Mail, MapPin } from "lucide-react";
import { Github, Linkedin } from "./Icons";
import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Top Grid */}
        <div className="footer-grid">
          {/* Brand & Bio */}
          <div className="footer-col-brand">
            <div className="footer-brand-header">
              <div className="footer-logo-badge">
                <span>{personalInfo.initials}</span>
              </div>
              <span className="footer-brand-name">{personalInfo.name}</span>
            </div>
            <p className="footer-brand-bio">
              Computer Science &amp; Engineering Student at REVA University.
              Focused on responsive web development, backend engineering, and clean UX.
            </p>
            <div className="footer-location-row">
              <MapPin size={13} className="text-blue-500" />
              <span>Bangalore, Karnataka, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col-links">
            <h4 className="footer-col-heading">Navigation</h4>
            <ul className="footer-nav-list">
              <li>
                <a href="#hero" onClick={(e) => scrollToSection(e, "hero")}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => scrollToSection(e, "about")}>
                  About Story
                </a>
              </li>
              <li>
                <a href="#skills" onClick={(e) => scrollToSection(e, "skills")}>
                  Technical Skills
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => scrollToSection(e, "projects")}>
                  Featured Work
                </a>
              </li>
              <li>
                <a
                  href="#certifications"
                  onClick={(e) => scrollToSection(e, "certifications")}
                >
                  Certifications
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  onClick={(e) => scrollToSection(e, "education")}
                >
                  Education
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => scrollToSection(e, "contact")}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="footer-col-socials">
            <h4 className="footer-col-heading">Connect</h4>
            <div className="footer-social-links">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="footer-social-item"
              >
                <Github size={15} />
                <span>GitHub Profile ↗</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="footer-social-item"
              >
                <Linkedin size={15} />
                <span>LinkedIn Network ↗</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="footer-social-item"
              >
                <Mail size={15} />
                <span>{personalInfo.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-copy">
            <span>
              © {new Date().getFullYear()} {personalInfo.name}. Designed &amp; built with React + Vite.
            </span>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="footer-back-to-top"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

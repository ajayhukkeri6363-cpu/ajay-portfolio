import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Mail,
  FileText,
  Terminal,
  Copy,
  Check,
  Layers,
  Sparkles,
} from "lucide-react";
import { Github, Linkedin } from "./Icons";
import ProfileImage from "./ProfileImage";
import { personalInfo, heroHighlights } from "../data/portfolioData";

export default function Hero({ onOpenResume }) {
  const [highlightIdx, setHighlightIdx] = useState(0);
  const [codeOpen, setCodeOpen] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setHighlightIdx((prev) => (prev + 1) % heroHighlights.length);
    }, 4200);
    return () => clearInterval(timer);
  }, []);

  const manifestCode = `// Ajay Hukkeri • Developer Profile
const engineer = {
  name: "${personalInfo.name}",
  degree: "${personalInfo.degree}",
  university: "${personalInfo.university}",
  status: "🟢 ${personalInfo.status.replace("🟢 ", "")}",
  coreLanguages: ["C", "C++", "Java", "Python", "JavaScript"],
  webStack: ["HTML5", "CSS3", "JavaScript", "React", "Flask"],
  database: ["MySQL", "Relational Schema Design"],
  platforms: ["Salesforce", "Git", "GitHub", "Azure Boards"],
  featuredProject: "DreamCity (Civic Complaint Analyzer)",
  email: "${personalInfo.email}"
};`;

  const copyManifest = () => {
    navigator.clipboard.writeText(manifestCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2400);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero-section">
      {/* Background Watermark Initials */}
      <div className="hero-watermark-bg" aria-hidden="true">
        <span>{personalInfo.initials}</span>
      </div>

      <div className="hero-stage-container">
        {/* Top Hero Banner Name */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="hero-heading-top-wrap"
        >
          <h1 className="hero-top-title font-hero">
            <span>{personalInfo.firstName}</span>
            <Sparkles className="hero-top-sparkle" size={24} />
          </h1>
        </motion.div>

        {/* Center Visual Stage */}
        <div className="hero-center-stage">
          {/* Rotated decorative accent card backdrop */}
          <motion.div
            initial={{ scale: 0.8, rotate: 0 }}
            animate={{ scale: 1, rotate: 12 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="hero-rotated-backdrop"
          >
            <div className="backdrop-dashed-border" />
          </motion.div>

          {/* Ambient blur glow */}
          <div className="hero-ambient-glow" />

          {/* Main Portrait Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="hero-portrait-card"
          >
            <ProfileImage className="hero-portrait-img" />
            <div className="hero-portrait-gradient-overlay" />
            <div className="hero-location-pill">
              <span className="location-dot-ping" />
              <span className="location-label">Bangalore, India</span>
            </div>
          </motion.div>

          {/* Centered Outlined Stroke Watermark behind portrait */}
          <div className="hero-outline-watermark font-hero" aria-hidden="true">
            <span className="stroke-text">ENGINEER</span>
          </div>

          {/* Floating Interactive Chip Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ y: -6, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("skills")}
            className="hero-floating-chip chip-left"
          >
            <div className="chip-icon-wrap">
              <Terminal size={18} />
            </div>
            <div className="chip-text-wrap">
              <span className="chip-category">Backend &amp; Core</span>
              <span className="chip-title">Python &amp; C++</span>
            </div>
          </motion.div>

          {/* Floating Interactive Chip Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ y: -6, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("projects")}
            className="hero-floating-chip chip-right"
          >
            <div className="chip-icon-wrap">
              <Layers size={18} />
            </div>
            <div className="chip-text-wrap">
              <span className="chip-category">Web Applications</span>
              <span className="chip-title">React &amp; MySQL</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Hero Banner Name */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hero-heading-bottom-wrap"
        >
          <h2 className="hero-bottom-title font-hero">
            <span>{personalInfo.lastName}</span>
            <span className="hero-accent-dot">.</span>
          </h2>
        </motion.div>

        {/* Telemetry Highlight Ticker & Code Manifest Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="hero-telemetry-container"
        >
          <div className="telemetry-bar">
            <div className="telemetry-ticker">
              <span className="pulsing-live-indicator">
                <span className="indicator-ping" />
                <span className="indicator-core" />
              </span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={highlightIdx}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="ticker-message"
                  onClick={() =>
                    setHighlightIdx((prev) => (prev + 1) % heroHighlights.length)
                  }
                  title="Click to cycle highlights"
                >
                  <span className="ticker-tag">
                    {heroHighlights[highlightIdx].tag}
                  </span>
                  <span className="ticker-text">
                    {heroHighlights[highlightIdx].text}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="telemetry-actions">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCodeOpen(!codeOpen)}
                className={`code-toggle-pill ${codeOpen ? "active" : ""}`}
              >
                <Terminal size={14} />
                <span>{codeOpen ? "Hide Stack" : "Code Snapshot"}</span>
              </motion.button>
            </div>
          </div>

          {/* Expandable Code Manifest Drawer */}
          <AnimatePresence>
            {codeOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="code-manifest-drawer"
              >
                <div className="terminal-box">
                  <div className="terminal-header">
                    <div className="window-dots">
                      <span className="dot dot-red" />
                      <span className="dot dot-yellow" />
                      <span className="dot dot-green" />
                      <span className="terminal-file">
                        ajay_hukkeri_profile.ts
                      </span>
                    </div>
                    <button onClick={copyManifest} className="copy-code-btn">
                      {copiedCode ? (
                        <>
                          <Check size={13} className="text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={13} />
                          <span>Copy Manifest</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="terminal-code">
                    <code>{manifestCode}</code>
                  </pre>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Bio & Actions */}
        <div className="hero-footer-content">
          <p className="hero-bio-paragraph">{personalInfo.bio}</p>

          {/* CTA Buttons */}
          <div className="hero-action-buttons">
            <motion.button
              onClick={() => scrollToSection("projects")}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="hero-primary-btn"
            >
              <span>Explore Featured Projects</span>
              <ArrowRight size={15} />
            </motion.button>

            <motion.button
              onClick={() => scrollToSection("contact")}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="hero-secondary-btn"
            >
              <Mail size={15} />
              <span>Contact Me</span>
            </motion.button>

            <motion.button
              onClick={onOpenResume}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="hero-resume-btn"
            >
              <FileText size={15} />
              <span>Curriculum Vitae</span>
            </motion.button>
          </div>

          {/* Social Links Strip */}
          <div className="hero-social-strip">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="hero-social-link"
              title="GitHub"
            >
              <Github size={15} />
              <span>GitHub</span>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hero-social-link"
              title="LinkedIn"
            >
              <Linkedin size={15} />
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="hero-social-link"
              title="Email"
            >
              <Mail size={15} />
              <span>{personalInfo.email}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

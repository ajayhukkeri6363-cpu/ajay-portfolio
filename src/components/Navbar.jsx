import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, FileText, Menu, X, ExternalLink } from "lucide-react";
import { Github } from "./Icons";
import { personalInfo } from "../data/portfolioData";

export default function Navbar({
  theme,
  onToggleTheme,
  activeSection,
  onOpenResume,
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Certifications", href: "#certifications" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      id="main-header"
      className={`navbar-header ${isScrolled ? "scrolled" : ""} ${
        theme === "dark" ? "theme-dark" : "theme-light"
      }`}
    >
      <div className="nav-container">
        {/* Brand Logo */}
        <motion.a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="brand-logo"
        >
          <div className="logo-badge">
            <span className="dot dot-1" />
            <span className="dot dot-2" />
            <span className="dot dot-3" />
            <span className="dot dot-4" />
          </div>
          <div className="logo-text-group">
            <span className="logo-name">
              {personalInfo.firstName}
              <span className="accent-dot">.</span>
            </span>
            <span className="logo-sub">{personalInfo.initials} • Portfolio</span>
          </div>
        </motion.a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.96 }}
                className={`nav-link ${isActive ? "active" : ""}`}
              >
                <span>{item.label}</span>
                {isActive ? (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="active-indicator"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                ) : (
                  <span className="hover-indicator" />
                )}
              </motion.a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="nav-actions">
          {/* Theme Switcher */}
          <motion.button
            onClick={onToggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.88, rotate: 180 }}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="theme-toggle-btn"
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <Sun size={17} className="sun-icon" />
            ) : (
              <Moon size={17} className="moon-icon" />
            )}
          </motion.button>

          {/* GitHub Link */}
          <motion.a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="github-btn desktop-only"
            title="View Ajay's GitHub Profile"
          >
            <Github size={15} />
            <span>GitHub</span>
            <ExternalLink size={12} className="opacity-70" />
          </motion.a>

          {/* Resume CTA */}
          <motion.button
            onClick={onOpenResume}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.94 }}
            className="resume-nav-btn"
          >
            <FileText size={14} />
            <span>Resume</span>
          </motion.button>

          {/* Mobile Menu Trigger */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle mobile menu"
            className="mobile-menu-trigger"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="mobile-nav-drawer"
          >
            <div className="mobile-nav-links">
              {navItems.map((item) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <button
                    key={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`mobile-nav-item ${isActive ? "active" : ""}`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="mobile-active-dot">●</span>}
                  </button>
                );
              })}
            </div>

            <div className="mobile-drawer-footer">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="mobile-resume-btn"
              >
                <FileText size={16} />
                <span>View & Download Resume</span>
              </button>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="mobile-github-link"
              >
                <Github size={16} />
                <span>GitHub Profile ↗</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

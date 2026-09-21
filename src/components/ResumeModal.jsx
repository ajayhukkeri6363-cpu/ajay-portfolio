import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Download,
  Printer,
  Mail,
  MapPin,
  GraduationCap,
} from "lucide-react";
import {
  personalInfo,
  education,
  skillCategories,
  certifications,
  projects,
} from "../data/portfolioData";

export default function ResumeModal({ isOpen, theme, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    const printFrame = document.createElement("iframe");
    printFrame.style.position = "fixed";
    printFrame.style.right = "0";
    printFrame.style.bottom = "0";
    printFrame.style.width = "0";
    printFrame.style.height = "0";
    printFrame.style.border = "0";
    printFrame.src = personalInfo.resumeUrl;
    document.body.appendChild(printFrame);

    printFrame.onload = () => {
      try {
        printFrame.contentWindow.focus();
        printFrame.contentWindow.print();
      } catch {
        window.open(personalInfo.resumeUrl, "_blank");
      }
    };
  };

  return (
    <AnimatePresence>
      <div
        className="resume-modal-backdrop"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Ajay Hukkeri Resume"
      >
        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="resume-modal-overlay"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className={`resume-modal-card ${theme === "dark" ? "dark-resume" : "light-resume"}`}
        >
          {/* Top Bar with actions */}
          <div className="resume-modal-topbar">
            <div className="resume-topbar-title">
              <div className="resume-avatar-badge">
                <span>{personalInfo.initials}</span>
              </div>
              <div>
                <h3 className="resume-modal-heading">Curriculum Vitae</h3>
                <p className="resume-modal-sub">
                  {personalInfo.name} • Verified Engineering Profile
                </p>
              </div>
            </div>

            <div className="resume-topbar-actions">
              <button
                onClick={handlePrint}
                className="resume-action-btn"
                title="Print or Save as PDF"
              >
                <Printer size={15} />
                <span>Print / Save PDF</span>
              </button>

              <a
                href={personalInfo.resumeUrl}
                download="Ajay-Hukkeri-Resume.pdf"
                className="resume-download-cta"
                title="Download Official Uploaded Resume PDF"
              >
                <Download size={15} />
                <span>Download Resume</span>
              </a>

              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="resume-close-btn"
                aria-label="Close resume modal"
              >
                <X size={18} />
              </motion.button>
            </div>
          </div>

          {/* Printable / Viewable Resume Sheet (The preferred clean interactive view) */}
          <div className="resume-sheet">
            {/* Header / Contact Info */}
            <div className="resume-header">
              <div className="resume-name-block">
                <h1 className="resume-person-name">{personalInfo.name}</h1>
                <p className="resume-person-title">{personalInfo.title}</p>
                <p className="resume-person-role">{personalInfo.role}</p>
              </div>

              <div className="resume-contact-block">
                <div className="contact-item">
                  <MapPin size={13} className="text-amber-500" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="contact-item">
                  <Mail size={13} className="text-amber-500" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="contact-item">
                  <GraduationCap size={13} className="text-amber-500" />
                  <span>{personalInfo.university}</span>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="resume-section">
              <h2 className="resume-section-title">Professional Summary</h2>
              <p className="resume-summary-text">{personalInfo.bio}</p>
            </div>

            {/* Education */}
            <div className="resume-section">
              <h2 className="resume-section-title">Education</h2>
              <div className="resume-edu-card">
                <div className="edu-row-top">
                  <h3 className="edu-title">{education.degree}</h3>
                  <span className="edu-dates">{education.timeline}</span>
                </div>
                <div className="edu-inst-text">
                  {education.institution} • {education.location}
                </div>
                <div className="edu-coursework-summary">
                  <strong>Coursework:</strong> {education.coursework.join(" • ")}
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="resume-section">
              <h2 className="resume-section-title">Technical Skills &amp; Competencies</h2>
              <div className="resume-skills-grid">
                {skillCategories.map((cat) => (
                  <div key={cat.id} className="resume-skill-group">
                    <span className="skill-group-name">{cat.title}:</span>
                    <span className="skill-group-items">
                      {cat.skills.join(", ")}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Projects */}
            <div className="resume-section">
              <h2 className="resume-section-title">Featured Projects</h2>
              {projects.map((proj) => (
                <div key={proj.id} className="resume-project-item">
                  <div className="proj-row-top">
                    <h3 className="proj-title">{proj.title}</h3>
                    <span className="proj-category">{proj.category}</span>
                  </div>
                  <p className="proj-desc">{proj.fullDescription}</p>
                  <div className="proj-highlights">
                    {proj.highlights?.map((h, hIdx) => (
                      <div key={hIdx} className="proj-highlight-line">
                        <span>•</span> {h}
                      </div>
                    ))}
                  </div>
                  <div className="proj-tech-line">
                    <strong>Tech Stack:</strong> {proj.technologies.join(", ")}
                  </div>
                </div>
              ))}
            </div>

            {/* Verified Certifications */}
            <div className="resume-section">
              <h2 className="resume-section-title">Verified Certifications ({certifications.length})</h2>
              <div className="resume-certs-grid">
                {certifications.map((cert) => (
                  <div key={cert.id} className="resume-cert-box">
                    <div className="cert-top-line">
                      <span className="cert-box-title">{cert.title}</span>
                      <span className="cert-box-issuer">{cert.issuer}</span>
                    </div>
                    <p className="cert-box-desc">{cert.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

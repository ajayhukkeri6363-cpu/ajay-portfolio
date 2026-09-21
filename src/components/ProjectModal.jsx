import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  CheckCircle2,
  Terminal,
  Copy,
  Check,
} from "lucide-react";
import { Github } from "./Icons";

export default function ProjectModal({ project, theme, onClose }) {
  const [copiedCode, setCopiedCode] = useState(false);

  if (!project) return null;

  const copySnippet = () => {
    if (project.codeSnippet?.code) {
      navigator.clipboard.writeText(project.codeSnippet.code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2400);
    }
  };

  return (
    <AnimatePresence>
      <div className="project-modal-backdrop" onClick={onClose}>
        {/* Modal Overlay Background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="modal-overlay"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className={`project-modal-card ${theme === "dark" ? "dark-modal" : "light-modal"}`}
        >
          {/* Close Button */}
          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Close project modal"
            className="modal-close-btn"
          >
            <X size={20} />
          </motion.button>

          {/* Modal Header */}
          <div className="modal-header">
            <span className="modal-badge">{project.badge}</span>
            <h3 className="modal-title">{project.title}</h3>
            <p className="modal-subtitle">{project.subtitle}</p>
          </div>

          {/* Project Image Preview if present */}
          {project.image && (
            <div className="modal-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="modal-image-preview"
              />
            </div>
          )}

          {/* Description */}
          <div className="modal-section">
            <p className="modal-desc-text">{project.fullDescription}</p>
          </div>

          {/* Metrics Grid */}
          {project.metrics && (
            <div className="modal-metrics-grid">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="modal-metric-box">
                  <span className="modal-metric-label">{m.label}</span>
                  <span className="modal-metric-value">{m.value}</span>
                </div>
              ))}
            </div>
          )}

          {/* Key Engineering Highlights */}
          {project.highlights && (
            <div className="modal-section">
              <h4 className="modal-section-title">Key Engineering Highlights</h4>
              <div className="modal-highlights-list">
                {project.highlights.map((h, idx) => (
                  <div key={idx} className="highlight-item">
                    <CheckCircle2 size={16} className="highlight-icon" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Code Snippet Box */}
          {project.codeSnippet && (
            <div className="modal-section">
              <div className="modal-code-box">
                <div className="code-box-header">
                  <div className="code-box-title">
                    <Terminal size={14} className="terminal-icon" />
                    <span>{project.codeSnippet.filename}</span>
                  </div>
                  <button onClick={copySnippet} className="copy-snippet-btn">
                    {copiedCode ? (
                      <>
                        <Check size={13} className="text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span>Copy Snippet</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="code-box-content">
                  <code>{project.codeSnippet.code}</code>
                </pre>
              </div>
            </div>
          )}

          {/* Feature Tags & Technologies */}
          <div className="modal-section">
            <h4 className="modal-section-title">Built With</h4>
            <div className="modal-tech-pills">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="modal-tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Actions */}
          <div className="modal-footer-actions">
            <button onClick={onClose} className="modal-secondary-btn">
              Close
            </button>

            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="modal-live-btn"
              >
                <ExternalLink size={15} />
                <span>Live Demo</span>
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="modal-primary-btn"
              >
                <Github size={15} />
                <span>Source Code Repository</span>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

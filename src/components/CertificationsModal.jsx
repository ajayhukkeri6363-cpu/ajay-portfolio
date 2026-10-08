import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  ShieldCheck,
  Calendar,
  Building,
  Award,
  Search,
  Eye,
  CheckCircle2,
} from "lucide-react";
import { certifications } from "../data/portfolioData";

export default function CertificationsModal({ isOpen, theme, onClose, onSelectCertificate }) {
  const [filterCategory, setFilterCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

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

  const categories = [
    { id: "all", label: `All Certifications (${certifications.length})` },
    { id: "ai", label: "AI & ML" },
    { id: "cloud", label: "Cloud & SQL" },
    { id: "devops", label: "DevOps & Agile" },
  ];

  const filteredCerts = certifications.filter((cert) => {
    const matchesSearch =
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (cert.institution && cert.institution.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (cert.category && cert.category.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;

    if (filterCategory === "all") return true;
    if (filterCategory === "ai")
      return (
        cert.id.includes("ai") ||
        cert.id.includes("machine-learning") ||
        cert.title.toLowerCase().includes("ai") ||
        cert.title.toLowerCase().includes("machine learning") ||
        cert.title.toLowerCase().includes("llm")
      );
    if (filterCategory === "cloud")
      return (
        cert.id.includes("cloud") ||
        cert.title.toLowerCase().includes("cloud") ||
        cert.title.toLowerCase().includes("data")
      );
    if (filterCategory === "devops")
      return (
        cert.id.includes("devops") ||
        cert.id.includes("agile") ||
        cert.title.toLowerCase().includes("devops") ||
        cert.title.toLowerCase().includes("agile")
      );

    return true;
  });

  return (
    <AnimatePresence>
      <div
        className="certs-modal-backdrop"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="All Verified Certifications"
      >
        {/* Overlay Background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="certs-modal-overlay"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className={`certs-modal-window ${theme === "dark" ? "theme-dark" : "theme-light"}`}
        >
          {/* Header */}
          <div className="certs-modal-header">
            <div className="certs-header-left">
              <div className="certs-modal-badge">
                <ShieldCheck size={13} className="text-amber-500" />
                <span>Verified Credentials</span>
              </div>
              <h2 className="certs-modal-title">All Certifications</h2>
              <p className="certs-modal-subtitle">
                Complete verified portfolio of {certifications.length} industry certifications across Machine Learning, Artificial Intelligence, Cloud Infrastructure, Agile Delivery, DevOps, and Data Fundamentals.
              </p>
            </div>

            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close certifications modal"
              className="certs-modal-close-btn"
            >
              <X size={20} />
            </motion.button>
          </div>

          {/* Controls Bar: Filter Pills & Search */}
          <div className="certs-modal-controls">
            <div className="certs-filter-pills">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilterCategory(cat.id)}
                  className={`certs-filter-pill ${filterCategory === cat.id ? "active" : ""}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="certs-search-box">
              <Search size={14} className="search-icon" />
              <input
                type="text"
                placeholder="Search certificates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="certs-search-input"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="clear-search-btn">
                  <X size={12} />
                </button>
              )}
            </div>
          </div>

          {/* 9-Grid Container: 3 per row desktop, 2 per row tablet, 1 per row mobile */}
          <div className="certs-grid-container">
            {filteredCerts.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="cert-grid-card"
                onClick={() => onSelectCertificate(cert)}
              >
                {/* Thumbnail Preview Area */}
                <div
                  className="cert-thumbnail-wrapper"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectCertificate(cert);
                  }}
                  title={`View full certificate - ${cert.title}`}
                >
                  <img
                    src={cert.image}
                    alt={`Ajay Hukkeri certificate - ${cert.title}`}
                    className="cert-thumbnail-img"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      const fallback = e.currentTarget.parentElement?.querySelector(".cert-thumbnail-fallback");
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                  <div className="cert-thumbnail-fallback" style={{ display: "none" }}>
                    <Award size={36} className="text-amber-500 mb-1" />
                    <span className="fallback-badge-text">{cert.issuer}</span>
                  </div>

                  <div className="thumbnail-hover-overlay">
                    <span className="hover-inspect-pill">
                      <Eye size={13} />
                      <span>View Full Certificate</span>
                    </span>
                  </div>

                  {/* Category Pill Tag */}
                  <span className="cert-card-tag">{cert.category || cert.badge}</span>
                </div>

                {/* Card Content */}
                <div className="cert-card-body">
                  <div className="cert-card-meta">
                    <span className="cert-card-issuer">
                      <Building size={12} className="inline-icon" />
                      {cert.institution ? `${cert.issuer} • ${cert.institution}` : cert.issuer}
                    </span>
                    <span className="cert-card-date">
                      <Calendar size={12} className="inline-icon" />
                      {cert.completedDate || cert.issuedDate || cert.date}
                    </span>
                  </div>

                  <h3 className="cert-card-title">{cert.title}</h3>
                  <p className="cert-card-desc">{cert.description}</p>

                  {/* Actions */}
                  <div className="cert-card-actions">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectCertificate(cert);
                      }}
                      className="cert-view-btn"
                      title={`View certificate - ${cert.title}`}
                    >
                      <Eye size={14} />
                      <span>View Certificate</span>
                    </button>

                    {cert.verificationUrl && (
                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="cert-verify-link"
                        title="Verify online"
                      >
                        <span>Verify</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredCerts.length === 0 && (
            <div className="certs-empty-state">
              <Award size={36} className="text-muted mb-2" />
              <p>No certifications match your current filter.</p>
              <button
                onClick={() => {
                  setFilterCategory("all");
                  setSearchQuery("");
                }}
                className="reset-filter-btn"
              >
                Show All Certifications
              </button>
            </div>
          )}

          {/* Footer Note */}
          <div className="certs-modal-footer">
            <div className="certs-footer-verified-note">
              <CheckCircle2 size={15} className="text-emerald-400" />
              <span>All {certifications.length} certifications verified under Ajay Hukkeri</span>
            </div>
            <button onClick={onClose} className="certs-footer-close-btn">
              Done Viewing
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ShieldCheck, Calendar, Building, Award } from "lucide-react";

export default function CertificateLightbox({ cert, theme, onClose }) {
  const [prevCertId, setPrevCertId] = useState(cert?.id);
  const [imgError, setImgError] = useState(false);

  if (cert?.id !== prevCertId) {
    setPrevCertId(cert?.id);
    setImgError(false);
  }

  useEffect(() => {
    if (!cert) return;

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
  }, [cert, onClose]);

  if (!cert) return null;

  return (
    <AnimatePresence>
      <div
        className="lightbox-backdrop"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`Certificate: ${cert.title}`}
      >
        {/* Darkened backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="lightbox-overlay"
        />

        {/* Lightbox Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className={`lightbox-card ${theme === "dark" ? "theme-dark" : "theme-light"}`}
        >
          {/* Top Bar */}
          <div className="lightbox-header">
            <div className="lightbox-header-info">
              <div className="lightbox-badge-row">
                <span className="lightbox-category-tag">{cert.category || "Certification"}</span>
                <span className="lightbox-verified-badge">
                  <ShieldCheck size={13} className="text-emerald-400" />
                  <span>Verified Credential</span>
                </span>
              </div>
              <h3 className="lightbox-title">{cert.title}</h3>
              <div className="lightbox-meta-row">
                <span className="lightbox-issuer">
                  <Building size={13} className="inline-icon" />
                  {cert.institution ? `${cert.issuer} • ${cert.institution}` : cert.issuer}
                </span>
                <span className="meta-sep">•</span>
                <span className="lightbox-date">
                  <Calendar size={13} className="inline-icon" />
                  {cert.completedDate || cert.issuedDate || cert.date}
                </span>
                {cert.certificationId && (
                  <>
                    <span className="meta-sep">•</span>
                    <span className="lightbox-id">ID: {cert.certificationId}</span>
                  </>
                )}
              </div>
            </div>

            {/* Close Button */}
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close certificate lightbox"
              className="lightbox-close-btn"
            >
              <X size={20} />
            </motion.button>
          </div>

          {/* Certificate Image Canvas */}
          <div className="lightbox-image-wrapper">
            {!imgError ? (
              <img
                src={cert.image}
                alt={`Ajay Hukkeri certificate - ${cert.title}`}
                className="lightbox-cert-image"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="cert-preview-fallback-box">
                <div className="fallback-inner">
                  <div className="fallback-crest">
                    <Award size={48} className="text-amber-500 mb-2" />
                  </div>
                  <span className="fallback-issuer">{cert.issuer}</span>
                  {cert.institution && <span className="fallback-sub-issuer">{cert.institution}</span>}
                  <h4 className="fallback-title">{cert.title}</h4>
                  <p className="fallback-recipient">
                    Issued to: <strong>{cert.recipient || "Ajay Hukkeri"}</strong>
                  </p>
                  <span className="fallback-date">
                    {cert.completedDate || cert.issuedDate || cert.date}
                  </span>
                  <div className="fallback-seal">
                    <ShieldCheck size={16} className="text-emerald-400" />
                    <span>Official Verified Credential</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Bar Actions */}
          <div className="lightbox-footer">
            <p className="lightbox-description">{cert.description}</p>
            <div className="lightbox-actions">
              {cert.verificationUrl && (
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lightbox-verify-btn"
                >
                  <ExternalLink size={14} />
                  <span>Verify at {cert.issuer}</span>
                </a>
              )}
              <button onClick={onClose} className="lightbox-dismiss-btn">
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Building,
  Calendar,
  ArrowRight,
  Eye,
  ExternalLink,
  Award,
} from "lucide-react";
import { certifications } from "../data/portfolioData";
import CertificationsModal from "./CertificationsModal";
import CertificateLightbox from "./CertificateLightbox";

export default function Certifications({ theme }) {
  const [isAllCertsOpen, setIsAllCertsOpen] = useState(false);
  const [selectedLightboxCert, setSelectedLightboxCert] = useState(null);

  // The 3 preferred featured certifications
  const featuredIds = ["copado-ai", "generative-ai-essentials", "ai-for-healthcare-systems"];
  const featuredCerts = certifications.filter((c) => featuredIds.includes(c.id));

  // Fallback in case ids change
  const displayPreviews = featuredCerts.length === 3 ? featuredCerts : certifications.slice(0, 3);

  const handleOpenCertificate = (cert) => {
    setSelectedLightboxCert(cert);
  };

  return (
    <section id="certifications" className="section certifications-section">
      <div className="section-container">
        {/* Section Heading */}
        <div className="section-heading">
          <div className="section-tag">
            <span className="tag-number">04</span>
            <span className="tag-dash">—</span>
            <span className="tag-title">CONTINUOUS LEARNING &amp; CREDENTIALS</span>
          </div>
          <h2 className="section-title">
            Verified certifications &amp; <span className="highlight-text">technical development.</span>
          </h2>
          <p className="section-subtitle">
            Credentials and certifications that reflect my continuous learning and technical development across Artificial Intelligence, Cloud Infrastructure, Agile Delivery, DevOps, and Data Fundamentals.
          </p>
        </div>

        {/* Compact 3-Preview Grid */}
        <div className="cert-preview-grid">
          {displayPreviews.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="cert-preview-card"
            >
              {/* Card Header & Badges */}
              <div className="preview-card-header">
                <span className="preview-category-badge">{cert.category || cert.badge}</span>
                <span className="preview-verified-pill">
                  <ShieldCheck size={12} className="text-emerald-400" />
                  <span>Verified</span>
                </span>
              </div>

              {/* Title & Metadata */}
              <div className="preview-card-body">
                <div className="preview-issuer-row">
                  <Building size={13} className="inline-icon text-amber-500" />
                  <span className="preview-issuer-name">
                    {cert.institution ? `${cert.issuer} • ${cert.institution}` : cert.issuer}
                  </span>
                </div>

                <h3 className="preview-cert-title">{cert.title}</h3>
                <p className="preview-cert-desc">{cert.description}</p>

                <div className="preview-date-row">
                  <Calendar size={12} className="inline-icon text-muted" />
                  <span>{cert.completedDate || cert.issuedDate || cert.date}</span>
                </div>
              </div>

              {/* Card Bottom Actions */}
              <div className="preview-card-footer">
                <button
                  onClick={() => handleOpenCertificate(cert)}
                  className="preview-view-btn"
                  title={`View certificate for ${cert.title}`}
                >
                  <Eye size={14} />
                  <span>View Certificate</span>
                </button>

                {cert.verificationUrl && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="preview-verify-btn"
                    title={`Verify ${cert.title} online`}
                  >
                    <span>Verify</span>
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Prominent CTA Banner: View All 9 Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="all-certs-cta-banner"
        >
          <div className="cta-banner-content">
            <div className="cta-icon-box">
              <Award size={24} className="text-amber-500" />
            </div>
            <div className="cta-text-group">
              <div className="cta-badge-line">
                <span className="cta-count-pill">{certifications.length} Industry Credentials</span>
                <span className="cta-sep">•</span>
                <span className="cta-sub">IBM • Microsoft • Coursera • Infosys • Copado</span>
              </div>
              <h4 className="cta-banner-title">
                Explore the complete verified credentials portfolio.
              </h4>
              <p className="cta-banner-desc">
                Includes full completion certificates, digital badge links, and specialization verifications.
              </p>
            </div>
          </div>

          <motion.button
            onClick={() => setIsAllCertsOpen(true)}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="view-all-certs-btn"
          >
            <span>View All {certifications.length} Certifications</span>
            <ArrowRight size={16} />
          </motion.button>
        </motion.div>
      </div>

      {/* Full Modal with All 9 Certifications */}
      <CertificationsModal
        isOpen={isAllCertsOpen}
        theme={theme}
        onClose={() => setIsAllCertsOpen(false)}
        onSelectCertificate={(cert) => setSelectedLightboxCert(cert)}
      />

      {/* Full Size Certificate Image Lightbox */}
      <CertificateLightbox
        cert={selectedLightboxCert}
        theme={theme}
        onClose={() => setSelectedLightboxCert(null)}
      />
    </section>
  );
}

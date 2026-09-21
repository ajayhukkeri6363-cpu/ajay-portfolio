import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Copy,
  Check,
  Send,
  MessageSquare,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import { Github, Linkedin } from "./Icons";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("idle"); // idle | success | error
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }
    setFormStatus("success");
  };

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    personalInfo.email
  )}&su=${encodeURIComponent(
    `Portfolio Inquiry from ${formData.name || "Visitor"}`
  )}&body=${encodeURIComponent(
    `Hi Ajay,\n\n${formData.message}\n\nBest regards,\n${formData.name}\nEmail: ${formData.email}`
  )}`;

  const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
    `Portfolio Inquiry from ${formData.name || "Visitor"}`
  )}&body=${encodeURIComponent(
    `Hi Ajay,\n\n${formData.message}\n\nBest regards,\n${formData.name}\nEmail: ${formData.email}`
  )}`;

  const copyDraftMessage = () => {
    const text = `Hi Ajay,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`;
    navigator.clipboard.writeText(text);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 3000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        {/* Main Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="contact-card-box"
        >
          <div className="contact-card-header">
            <span className="contact-eyebrow">06 — GET IN TOUCH</span>
            <h2 className="contact-heading">
              Let's build something <span className="highlight-text">meaningful.</span>
            </h2>
            <p className="contact-subtext">
              I am currently open to internship opportunities, software engineering roles,
              and collaborative technical projects. Feel free to reach out directly.
            </p>
          </div>

          {/* Quick Action Button Bar */}
          <div className="contact-actions-bar">
            {/* Copy Email Button */}
            <motion.button
              onClick={copyEmail}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.94 }}
              className="contact-btn-primary"
            >
              {copiedEmail ? (
                <>
                  <Check size={16} />
                  <span>Email Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy size={16} />
                  <span>Copy: {personalInfo.email}</span>
                </>
              )}
            </motion.button>

            {/* Direct Email Link */}
            <motion.a
              href={`mailto:${personalInfo.email}`}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.94 }}
              className="contact-btn-secondary"
            >
              <Mail size={16} />
              <span>Direct Email ↗</span>
            </motion.a>

            {/* Toggle Quick Note Form */}
            <motion.button
              onClick={() => {
                setFormOpen(!formOpen);
                if (formStatus === "success") setFormStatus("idle");
              }}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.94 }}
              className={`contact-btn-outline ${formOpen ? "active" : ""}`}
            >
              <MessageSquare size={16} />
              <span>{formOpen ? "Close Fast Note" : "Send Fast Note"}</span>
            </motion.button>
          </div>

          {/* Toast Notification when Email Copied */}
          <AnimatePresence>
            {copiedEmail && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="copy-toast-badge"
              >
                <CheckCircle2 size={15} />
                <span>Address copied successfully! Ready to paste into your mail app.</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Fast Note Form Drawer */}
          <AnimatePresence>
            {formOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="contact-form-drawer"
              >
                {formStatus === "success" ? (
                  <div className="form-success-box">
                    <div className="success-header">
                      <div className="success-icon-wrap">
                        <CheckCircle2 size={24} className="text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="success-title">Message Prepared!</h4>
                        <p className="success-desc">
                          Your draft has been composed for <strong>{personalInfo.email}</strong>.
                          Click below to dispatch instantly via your preferred client:
                        </p>
                      </div>
                    </div>

                    <div className="dispatch-buttons-row">
                      <a
                        href={gmailComposeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="dispatch-gmail-btn"
                      >
                        <Mail size={15} />
                        <span>Send via Gmail Web ↗</span>
                      </a>

                      <a href={mailtoUrl} className="dispatch-mail-btn">
                        <ExternalLink size={15} />
                        <span>Open in Mail App</span>
                      </a>

                      <button onClick={copyDraftMessage} className="dispatch-copy-btn">
                        {copiedDraft ? (
                          <>
                            <Check size={14} className="text-emerald-400" />
                            <span>Draft Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy size={14} />
                            <span>Copy Draft Text</span>
                          </>
                        )}
                      </button>

                      <button
                        onClick={() => {
                          setFormStatus("idle");
                          setFormData({ name: "", email: "", message: "" });
                        }}
                        className="reset-form-btn"
                      >
                        Write Another
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="fast-note-form">
                    <div className="form-top-note">
                      <span className="note-label">
                        Direct channel to <span className="highlight-email">{personalInfo.email}</span>
                      </span>
                    </div>

                    <div className="form-inputs-grid">
                      <input
                        type="text"
                        placeholder="Your Name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="form-input"
                      />
                      <input
                        type="email"
                        placeholder="Your Email Address"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="form-input"
                      />
                    </div>

                    <textarea
                      placeholder="Brief details about your opportunity, project, or inquiry..."
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="form-textarea"
                    />

                    <div className="form-submit-row">
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.95 }}
                        className="form-submit-btn"
                      >
                        <Send size={14} />
                        <span>Prepare Message Draft</span>
                      </motion.button>
                      <span className="form-subnote">Instant dispatch via Web or Mail App</span>
                    </div>
                  </form>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Social Links Row */}
          <div className="contact-social-row">
            <div className="social-pill-group">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="social-pill"
              >
                <Github size={16} />
                <span>GitHub @ajayhukkeri6363-cpu</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="social-pill"
              >
                <Linkedin size={16} />
                <span>LinkedIn Network</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="social-pill"
              >
                <Mail size={16} />
                <span>{personalInfo.email}</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Terminal,
  Award,
} from "lucide-react";
import { Github } from "./Icons";
import { personalInfo, keyMetrics } from "../data/portfolioData";

export default function About() {
  const [activeTab, setActiveTab] = useState("inspect");
  const [copiedCli, setCopiedCli] = useState(false);

  const copyCliCommand = () => {
    navigator.clipboard.writeText("npx ajay-hukkeri");
    setCopiedCli(true);
    setTimeout(() => setCopiedCli(false), 2400);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="section about-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-heading">
          <div className="section-tag">
            <span className="tag-number">01</span>
            <span className="tag-dash">—</span>
            <span className="tag-title">ABOUT / PROFILE</span>
          </div>
          <h2 className="section-title">
            Building with purpose &amp; <span className="highlight-text">clean engineering.</span>
          </h2>
        </div>

        {/* About Grid */}
        <div className="about-main-grid">
          {/* Left Column: Narrative Story & Key Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="about-story"
          >
            <div className="story-lead">
              <p className="lead-paragraph">
                I am a Computer Science and Engineering student at{" "}
                <strong>REVA University, Bangalore</strong>, focused on
                building useful, responsive, and user-centric digital
                applications.
              </p>
            </div>

            <div className="story-details">
              <p>
                My focus lies in developing web applications that pair clean,
                intuitive interfaces with robust backend logic. I work across
                core programming languages, relational databases, web standards,
                and modern development tools.
              </p>
              <p>
                Whether designing relational schemas in MySQL, developing
                server-side logic in Python/Flask, or crafting interactive UI
                flows in JavaScript and React, I prioritize code clarity,
                usability, and continuous skill refinement.
              </p>
            </div>

            {/* Key Metric Badges */}
            <div className="about-metrics-row">
              {keyMetrics.map((metric, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className="metric-card"
                >
                  <div className="metric-top">
                    <span className="metric-value">{metric.value}</span>
                    <Award size={18} className="metric-icon" />
                  </div>
                  <span className="metric-label">{metric.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="about-actions-row">
              <motion.button
                onClick={() => scrollToSection("projects")}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.94 }}
                className="about-primary-btn"
              >
                <span>View Selected Works</span>
                <ArrowRight size={16} />
              </motion.button>

              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.94 }}
                className="about-github-btn"
              >
                <Github size={16} />
                <span>GitHub Profile</span>
              </motion.a>

              <motion.button
                onClick={copyCliCommand}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.94 }}
                className="about-cli-btn"
                title="Copy Terminal NPX command"
              >
                <Terminal size={14} />
                <span>{copiedCli ? "Copied!" : "npx ajay"}</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column: Interactive Inspect Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="about-inspector-wrapper"
          >
            <div className="inspector-card">
              {/* Terminal Window Top Bar */}
              <div className="inspector-header">
                <div className="inspector-traffic-lights">
                  <span className="light light-red" />
                  <span className="light light-yellow" />
                  <span className="light light-green" />
                </div>

                {/* Inspect Tabs */}
                <div className="inspector-tabs">
                  <button
                    onClick={() => setActiveTab("inspect")}
                    className={`inspector-tab ${
                      activeTab === "inspect" ? "active" : ""
                    }`}
                  >
                    --inspect
                  </button>
                  <span className="tab-separator">|</span>
                  <button
                    onClick={() => setActiveTab("stack")}
                    className={`inspector-tab ${
                      activeTab === "stack" ? "active" : ""
                    }`}
                  >
                    --stack
                  </button>
                  <span className="tab-separator">|</span>
                  <button
                    onClick={() => setActiveTab("status")}
                    className={`inspector-tab ${
                      activeTab === "status" ? "active" : ""
                    }`}
                  >
                    --status
                  </button>
                </div>
              </div>

              {/* Inspector Content */}
              <div className="inspector-content">
                <AnimatePresence mode="wait">
                  {activeTab === "inspect" && (
                    <motion.div
                      key="tab-inspect"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="inspector-body"
                    >
                      <div className="code-line comment">
                        // Developer Verification & Profile
                      </div>
                      <div className="code-line">
                        <span className="token-key">Candidate</span>:{" "}
                        <span className="token-str">"Ajay Hukkeri"</span>
                      </div>
                      <div className="code-line">
                        <span className="token-key">Academic</span>:{" "}
                        <span className="token-str">"B.Tech Computer Science & Engineering"</span>
                      </div>
                      <div className="code-line">
                        <span className="token-key">Institution</span>:{" "}
                        <span className="token-str">"REVA University, Bangalore"</span>
                      </div>
                      <div className="code-line">
                        <span className="token-key">Specialization</span>:{" "}
                        <span className="token-str">"Web Applications & Systems"</span>
                      </div>
                      <div className="code-line">
                        <span className="token-key">Location</span>:{" "}
                        <span className="token-str">"Bangalore, India"</span>
                      </div>
                      <div className="code-line">
                        <span className="token-key">Contact</span>:{" "}
                        <span className="token-str">"{personalInfo.email}"</span>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "stack" && (
                    <motion.div
                      key="tab-stack"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="inspector-body"
                    >
                      <div className="code-line comment">
                        // Active Toolchain & Foundations
                      </div>
                      <div className="code-line">
                        <span className="token-key">Languages</span>: [
                        <span className="token-str">"C"</span>,{" "}
                        <span className="token-str">"C++"</span>,{" "}
                        <span className="token-str">"Java"</span>,{" "}
                        <span className="token-str">"Python"</span>,{" "}
                        <span className="token-str">"JavaScript"</span>]
                      </div>
                      <div className="code-line">
                        <span className="token-key">Web</span>: [
                        <span className="token-str">"HTML5"</span>,{" "}
                        <span className="token-str">"CSS3"</span>,{" "}
                        <span className="token-str">"JavaScript"</span>,{" "}
                        <span className="token-str">"React"</span>]
                      </div>
                      <div className="code-line">
                        <span className="token-key">Database</span>: [
                        <span className="token-str">"MySQL"</span>,{" "}
                        <span className="token-str">"Relational Design"</span>]
                      </div>
                      <div className="code-line">
                        <span className="token-key">Tools</span>: [
                        <span className="token-str">"Git"</span>,{" "}
                        <span className="token-str">"GitHub"</span>,{" "}
                        <span className="token-str">"VS Code"</span>]
                      </div>
                      <div className="code-line">
                        <span className="token-key">Cloud/CRM</span>: [
                        <span className="token-str">"Salesforce"</span>,{" "}
                        <span className="token-str">"DevOps Basics"</span>,{" "}
                        <span className="token-str">"Azure Boards"</span>]
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "status" && (
                    <motion.div
                      key="tab-status"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="inspector-body"
                    >
                      <div className="code-line comment">
                        // Current Availability & Goals
                      </div>
                      <div className="code-line">
                        <span className="token-key">Status</span>:{" "}
                        <span className="token-green">"🟢 Open for Opportunities"</span>
                      </div>
                      <div className="code-line">
                        <span className="token-key">Seeking</span>:{" "}
                        <span className="token-str">"Software Engineering & Web Dev Internships"</span>
                      </div>
                      <div className="code-line">
                        <span className="token-key">ActiveProject</span>:{" "}
                        <span className="token-str">"DreamCity (Civic Complaint Analyzer)"</span>
                      </div>
                      <div className="code-line">
                        <span className="token-key">Credentials</span>:{" "}
                        <span className="token-str">"9 Verified Certifications"</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Inspector Footer */}
              <div className="inspector-footer">
                <div className="inspector-footer-user">
                  <div className="user-dot active" />
                  <span>ajay_hukkeri.config</span>
                </div>
                <span className="inspector-sys-badge">NODE_ENV: ACTIVE</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

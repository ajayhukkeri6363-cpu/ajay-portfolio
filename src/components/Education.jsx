import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, BookOpen, CheckCircle2 } from "lucide-react";
import { education } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="section-container">
        {/* Section Heading */}
        <div className="section-heading">
          <div className="section-tag">
            <span className="tag-number">05</span>
            <span className="tag-dash">—</span>
            <span className="tag-title">ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="section-title">
            Academic foundations &amp; <span className="highlight-text">engineering coursework.</span>
          </h2>
        </div>

        {/* Education Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65 }}
          className="education-hero-card"
        >
          <div className="education-top-grid">
            <div className="edu-main-info">
              <div className="edu-timeline-pill">
                <Calendar size={13} />
                <span>{education.timeline}</span>
                <span className="pill-dot">•</span>
                <span className="pill-status">{education.status}</span>
              </div>

              <h3 className="edu-degree-title">{education.degree}</h3>

              <div className="edu-institution-row">
                <GraduationCap size={18} className="edu-icon text-blue-500" />
                <span className="edu-institution-name">{education.institution}</span>
                <span className="edu-location-badge">
                  <MapPin size={12} className="inline-icon" /> {education.location}
                </span>
              </div>
            </div>

            <div className="edu-badge-circle">
              <div className="badge-inner">
                <span className="badge-text-top">B.Tech</span>
                <span className="badge-text-sub">CSE</span>
              </div>
            </div>
          </div>

          {/* Academic Highlights & Coursework */}
          <div className="edu-details-grid">
            {/* Highlights */}
            <div className="edu-column">
              <h4 className="column-title">Academic Highlights</h4>
              <ul className="edu-highlights-list">
                {education.highlights.map((item, idx) => (
                  <li key={idx} className="edu-highlight-item">
                    <CheckCircle2 size={15} className="item-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coursework */}
            <div className="edu-column">
              <h4 className="column-title">Relevant Engineering Coursework</h4>
              <div className="coursework-pills">
                {education.coursework.map((course, idx) => (
                  <span key={idx} className="coursework-pill">
                    <BookOpen size={12} className="course-icon" />
                    <span>{course}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

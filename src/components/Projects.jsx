import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  ArrowRight,
  CheckCircle2,
  FolderGit2,
  Sparkles,
} from "lucide-react";
import { Github } from "./Icons";
import { projects, personalInfo } from "../data/portfolioData";
import dreamCityPreview from "../assets/images/dreamcity-preview.jpg";

export default function Projects({ onOpenCaseStudy }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filterCategories = [
    { id: "all", label: "All Projects" },
    { id: "featured", label: "Featured" },
    { id: "codsoft", label: "CodSoft" },
    { id: "codealpha", label: "CodeAlpha" },
    { id: "sam-ai", label: "SAM AI" },
    { id: "decodelabs", label: "DecodeLabs" },
  ];

  // Calculate counts for each filter category
  const filterCounts = useMemo(() => {
    return {
      all: projects.length,
      featured: projects.filter((p) => p.filterCategory === "featured").length,
      codsoft: projects.filter((p) => p.filterCategory === "codsoft").length,
      codealpha: projects.filter((p) => p.filterCategory === "codealpha").length,
      "sam-ai": projects.filter((p) => p.filterCategory === "sam-ai").length,
      decodelabs: projects.filter((p) => p.filterCategory === "decodelabs").length,
    };
  }, []);

  // Primary featured project (DreamCity)
  const featuredProject = useMemo(() => {
    const feat = projects.find((p) => p.id === "dreamcity") || projects[0];
    return feat ? { ...feat, image: dreamCityPreview } : null;
  }, []);

  // Filtered projects for the secondary/grid display
  const displayedProjects = useMemo(() => {
    if (activeFilter === "all") {
      // Return other 12 projects (DreamCity is shown as the featured card above)
      return projects.filter((p) => p.id !== "dreamcity");
    }
    if (activeFilter === "featured") {
      // In featured tab, only dreamcity is relevant
      return [];
    }
    return projects.filter((p) => p.filterCategory === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="section projects-section">
      <div className="section-container">
        {/* Section Heading */}
        <div className="section-heading">
          <div className="section-tag">
            <span className="tag-number">03</span>
            <span className="tag-dash">—</span>
            <span className="tag-title">FEATURED WORK &amp; INTERNSHIP SYSTEMS</span>
          </div>
          <h2 className="section-title">
            Engineered projects &amp; <span className="highlight-text">software architectures.</span>
          </h2>
          <p className="section-subtitle">
            A showcase of full-stack web applications, REST APIs, real-time collaboration platforms, and civic tech systems developed through industry internships and independent engineering.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="projects-filter-bar">
          <div className="projects-filter-pills">
            {filterCategories.map((cat) => {
              const isActive = activeFilter === cat.id;
              const count = filterCounts[cat.id] || 0;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`project-filter-btn ${isActive ? "active-filter" : ""}`}
                >
                  <span className="filter-btn-text">{cat.label}</span>
                  <span className="filter-count-badge">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Primary Featured Project Card (DreamCity) - Shown on 'all' and 'featured' tabs */}
        {(activeFilter === "all" || activeFilter === "featured") && featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="featured-project-card"
          >
            <div className="featured-project-grid">
              {/* Left Column: Visual Preview */}
              <div className="featured-preview-col">
                <div className="featured-image-wrapper">
                  <img
                    src={dreamCityPreview}
                    alt={featuredProject.title}
                    className="featured-image"
                    loading="lazy"
                  />
                  <div className="preview-overlay">
                    <button
                      onClick={() => onOpenCaseStudy(featuredProject)}
                      className="preview-inspect-btn"
                    >
                      <Sparkles size={14} />
                      <span>Inspect Deep Dive</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>

                {/* Quick Status Tag */}
                <div className="featured-status-bar">
                  <span className="status-indicator-dot" />
                  <span className="status-label">{featuredProject.status}</span>
                </div>
              </div>

              {/* Right Column: Project Details */}
              <div className="featured-info-col">
                <div className="featured-meta">
                  <span className="featured-badge">{featuredProject.badge}</span>
                  <span className="featured-category">{featuredProject.category}</span>
                </div>

                <h3 className="featured-title">{featuredProject.title}</h3>
                <p className="featured-subtitle">{featuredProject.subtitle}</p>

                <p className="featured-description">
                  {featuredProject.shortDescription}
                </p>

                {/* Feature Tags */}
                <div className="featured-features-wrap">
                  {featuredProject.features.map((feature, fIdx) => (
                    <span key={fIdx} className="feature-pill">
                      <CheckCircle2 size={12} className="feature-pill-icon" />
                      <span>{feature}</span>
                    </span>
                  ))}
                </div>

                {/* Technologies List */}
                <div className="featured-tech-row">
                  <span className="tech-heading">Stack:</span>
                  <div className="tech-tags">
                    {featuredProject.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="featured-actions">
                  <motion.button
                    onClick={() => onOpenCaseStudy(featuredProject)}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="featured-primary-btn"
                  >
                    <span>View Case Study</span>
                    <ArrowRight size={15} />
                  </motion.button>

                  <motion.a
                    href={featuredProject.github}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="featured-github-btn"
                  >
                    <Github size={15} />
                    <span>GitHub Repository</span>
                    <ExternalLink size={13} className="opacity-70" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Secondary / Internship Projects Grid */}
        {displayedProjects.length > 0 && (
          <div className="secondary-projects-grid">
            <AnimatePresence mode="popLayout">
              {displayedProjects.map((proj, idx) => (
                <motion.div
                  key={proj.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.04 }}
                  whileHover={{ y: -6 }}
                  className="secondary-project-card"
                >
                  <div className="project-card-top">
                    <div className="card-top-meta">
                      <span className={`project-badge badge-${proj.badgeColor || "amber"}`}>
                        {proj.badge}
                      </span>
                      <span className="project-internship-label">
                        {proj.internship}
                      </span>
                    </div>

                    <h4 className="card-title">{proj.title}</h4>
                    <p className="card-subtitle-text">{proj.subtitle}</p>
                    <p className="card-desc">{proj.shortDescription}</p>
                  </div>

                  <div className="project-card-bottom">
                    {/* Tech Stack Chips */}
                    <div className="card-techs">
                      {proj.technologies.slice(0, 5).map((t, tIdx) => (
                        <span key={tIdx} className="tech-tag-chip">
                          {t}
                        </span>
                      ))}
                      {proj.technologies.length > 5 && (
                        <span className="tech-tag-chip-more">
                          +{proj.technologies.length - 5}
                        </span>
                      )}
                    </div>

                    {/* Card Actions */}
                    <div className="card-bottom-actions">
                      <button
                        onClick={() => onOpenCaseStudy(proj)}
                        className="card-inspect-link"
                      >
                        <span>Deep Dive</span>
                        <ArrowRight size={13} />
                      </button>

                      <div className="card-external-links">
                        {proj.liveDemo && (
                          <a
                            href={proj.liveDemo}
                            target="_blank"
                            rel="noreferrer"
                            className="card-live-link"
                            title="Open Live Application"
                          >
                            <ExternalLink size={15} />
                          </a>
                        )}
                        {proj.github && (
                          <a
                            href={proj.github}
                            target="_blank"
                            rel="noreferrer"
                            className="card-github-link"
                            title="View GitHub Repository"
                          >
                            <Github size={15} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Coming Soon & GitHub Link Teaser Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="upcoming-projects-banner"
        >
          <div className="upcoming-content">
            <div className="upcoming-icon-wrap">
              <FolderGit2 size={24} className="upcoming-icon" />
            </div>
            <div className="upcoming-text">
              <span className="upcoming-eyebrow">ACTIVE DEVELOPMENT</span>
              <h4 className="upcoming-title">
                Exploring more systems, architectures, and full-stack applications.
              </h4>
              <p className="upcoming-desc">
                Source code, database schemas, and documentation for all internship tasks and independent projects are actively maintained on GitHub.
              </p>
            </div>
          </div>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="upcoming-cta-btn"
          >
            <Github size={15} />
            <span>Explore All Repositories ↗</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

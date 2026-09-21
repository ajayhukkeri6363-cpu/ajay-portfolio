import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Layout,
  Database,
  Terminal,
  Cloud,
  Sparkles,
} from "lucide-react";
import { skillCategories } from "../data/portfolioData";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredCategories =
    selectedCategory === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === selectedCategory);

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case "Code2":
        return <Code2 size={24} />;
      case "Layout":
        return <Layout size={24} />;
      case "Database":
        return <Database size={24} />;
      case "Terminal":
        return <Terminal size={24} />;
      case "Cloud":
        return <Cloud size={24} />;
      default:
        return <Sparkles size={24} />;
    }
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-heading">
          <div className="section-tag">
            <span className="tag-number">02</span>
            <span className="tag-dash">—</span>
            <span className="tag-title">TECHNICAL SKILLS &amp; CAPABILITIES</span>
          </div>
          <h2 className="section-title">
            Tools &amp; technologies <span className="highlight-text">I work with.</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive toolbox covering programming languages, web standards,
            database architecture, and modern developer platforms.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="skills-filter-strip">
            <motion.button
              onClick={() => setSelectedCategory("all")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.94 }}
              className={`filter-pill ${selectedCategory === "all" ? "active" : ""}`}
            >
              All Capabilities
            </motion.button>
            {skillCategories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.94 }}
                className={`filter-pill ${
                  selectedCategory === cat.id ? "active" : ""
                }`}
              >
                {cat.title}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <motion.div layout className="skills-grid">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((cat, idx) => (
              <motion.div
                key={cat.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="skill-category-card"
              >
                <div className="skill-card-top">
                  <div className={`skill-category-icon ${cat.accentBg} ${cat.accentText}`}>
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <span className="skill-card-count">
                    {cat.skills.length} skills
                  </span>
                </div>

                <h3 className="skill-category-title">{cat.title}</h3>
                <p className="skill-category-desc">{cat.description}</p>

                {/* Skill Pills */}
                <div className="skill-pills-wrap">
                  {cat.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="skill-pill">
                      <span className="skill-pill-dot">●</span>
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

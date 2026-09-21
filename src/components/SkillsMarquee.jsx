import React from "react";
import { marqueeSkills } from "../data/portfolioData";

export default function SkillsMarquee() {
  return (
    <div className="marquee-wrapper" aria-label="Core Skills Marquee">
      <div className="marquee-track">
        <div className="marquee-content">
          {marqueeSkills.map((skill, index) => (
            <span key={`m1-${index}`} className="marquee-item">
              <span className="skill-text">{skill}</span>
              <span className="skill-separator">●</span>
            </span>
          ))}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {marqueeSkills.map((skill, index) => (
            <span key={`m2-${index}`} className="marquee-item">
              <span className="skill-text">{skill}</span>
              <span className="skill-separator">●</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

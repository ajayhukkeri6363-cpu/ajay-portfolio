import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollProgress({ theme }) {
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const [showButton, setShowButton] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const unsubY = scrollY.on("change", (latest) => {
      setShowButton(latest > 280);
    });
    const unsubProgress = scrollYProgress.on("change", (latest) => {
      setScrollPercent(Math.min(100, Math.max(0, Math.round(latest * 100))));
    });
    return () => {
      unsubY();
      unsubProgress();
    };
  }, [scrollY, scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const circumference = 2 * Math.PI * 18;
  const strokeDashoffset = circumference - (scrollPercent / 100) * circumference;

  return (
    <>
      {/* Top Gradient Scroll Bar */}
      <motion.div
        className="top-scroll-indicator"
        style={{ scaleX }}
      />

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showButton && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="back-to-top-container"
          >
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.92 }}
              aria-label="Scroll back to top"
              className={`back-to-top-btn ${theme === "dark" ? "dark-btn" : "light-btn"}`}
            >
              {/* SVG Ring */}
              <svg className="progress-ring" width="48" height="48" viewBox="0 0 48 48">
                <circle
                  cx="24"
                  cy="24"
                  r="18"
                  fill="transparent"
                  stroke={theme === "dark" ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.08)"}
                  strokeWidth="2.5"
                />
                <circle
                  cx="24"
                  cy="24"
                  r="18"
                  fill="transparent"
                  stroke="#2563eb"
                  strokeWidth="2.5"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  className="progress-ring-circle"
                />
              </svg>

              <div className="icon-wrapper">
                <ArrowUp className="arrow-icon" size={18} strokeWidth={2.5} />
              </div>

              <span className="percent-tooltip">{scrollPercent}%</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

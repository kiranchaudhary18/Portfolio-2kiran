"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/hero.css";

export default function Hero() {
  const parallaxRef = useRef(null); // Removed TypeScript type

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!parallaxRef.current) return;

      const x = (window.innerWidth - e.pageX * 2) / 100;
      const y = (window.innerHeight - e.pageY * 2) / 100;

      parallaxRef.current.style.transform = `translateX(${x}px) translateY(${y}px)`;
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="grid-overlay"></div>
        <div className="glow-effect"></div>
      </div>

      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1>
            <span className="line">Kiran</span>
            <span className="line">Dekaliya</span>
            
          </h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}>
            Full-Stak  Developer & UI/UX Designer
          </motion.p>

          <motion.div
            className="cta-button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#projects">View My Work</a>
          </motion.div>
        </motion.div>

        <div className="hero-visual" ref={parallaxRef}>
          <div className="geometric-shape shape-1"></div>
          <div className="geometric-shape shape-2"></div>
          <div className="geometric-shape shape-3"></div>
          <div className="neon-circle"></div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow">
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
}

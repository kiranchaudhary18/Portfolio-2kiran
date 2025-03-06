"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "../styles/navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      height: "100vh",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <motion.div className="logo" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Link href="/">PORTFOLIO</Link>
        </motion.div>

        <div className="desktop-menu">
          <motion.nav variants={navVariants} initial="hidden" animate="visible">
            <motion.a href="#home" variants={itemVariants}>
              Home
            </motion.a>
            <motion.a href="#projects" variants={itemVariants}>
              Projects
            </motion.a>
            <motion.a href="#about" variants={itemVariants}>
              About
            </motion.a>
            <motion.a href="#contact" variants={itemVariants}>
              Contact
            </motion.a>
          </motion.nav>
        </div>

        <div className="mobile-menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          <div className={`hamburger ${isOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <motion.div className="mobile-menu" variants={menuVariants} initial="closed" animate={isOpen ? "open" : "closed"}>
        <nav>
          <a href="#home" onClick={() => setIsOpen(false)}>
            Home
          </a>
          <a href="#projects" onClick={() => setIsOpen(false)}>
            Projects
          </a>
          <a href="#about" onClick={() => setIsOpen(false)}>
            About
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </nav>
      </motion.div>
    </header>
  );
}

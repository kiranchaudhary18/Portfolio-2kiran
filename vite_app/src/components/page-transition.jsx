"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/page-transition.css";

export default function PageTransition() {
  useEffect(() => {
    // Disable scrolling during the initial animation
    document.body.style.overflow = "hidden";

    // Re-enable scrolling after the animation completes
    const timer = setTimeout(() => {
      document.body.style.overflow = "";
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="page-transition">
      <motion.div
        className="transition-layer layer-1"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.645, 0.045, 0.355, 1.0] }}
      />
      <motion.div
        className="transition-layer layer-2"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.645, 0.045, 0.355, 1.0] }}
      />
      <motion.div
        className="transition-layer layer-3"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.645, 0.045, 0.355, 1.0] }}
      />
    </div>
  );
}

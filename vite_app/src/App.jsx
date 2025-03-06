"use client";

import { useEffect, useRef } from "react";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import PageTransition from "./components/page-transition";
import "./styles/globals.css";

export default function Home() {
  const scrollRef = useRef(null);

  useEffect(() => {
    // Initialize smooth scrolling
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      document.body.style.setProperty("--scroll", String(scrollPosition));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main ref={scrollRef} className="main-container">
      <PageTransition />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

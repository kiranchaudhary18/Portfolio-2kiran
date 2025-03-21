"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/projects.css";

export default function Projects() {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const projects = [
    {
      id: 1,
      title: "Tattoos website",
      description: "Designed and developed a user-friendly platform where tattoo lovers can discover styles, find artists, and learn about tattoo care. Integrated a virtual preview feature to enhance decision-making.",
      tags: ["React", "Node.js", "Express.js", "MongoDB"],
      image: "https://res.cloudinary.com/dnbayngfx/image/upload/v1741236344/tattoo_gmpiqd.png",
      liveUrl:"https://tattoos-dreamers-studio.onrender.com/",
      codeUrl: "https://github.com/kiranchaudhary18/tattoos_website",
      postmanUrl: "https://documenter.getpostman.com/view/39216531/2sAYX2P4dZ",
    },
    {
      id: 2,
      title: "React API",
      description: "A collection of React API projects, including a Meals App for browsing recipes, a Cocktails App for exploring drinks, a Harry Potter App for discovering characters and spells, and a Bank API project for managing financial transactions. 🚀",
      tags: ["React.js", "Node.js"],
      image: "https://res.cloudinary.com/dnbayngfx/image/upload/v1741240475/api_ldfwcp.png",
      liveUrl:"https://react-api-1.onrender.com/",
      codeUrl: "https://github.com/kiranchaudhary18/React-API",
    },
    {
      id: 3,
      title: "Youtube",
      description: "A dynamic video streaming app where users can search for videos and watch them seamlessly. Integrated with the YouTube API, it delivers real-time search results and smooth video playback.",
      tags: ["React.js"],
      image: "https://res.cloudinary.com/dnbayngfx/image/upload/v1741234999/youtube_mpvhik.png",
      liveUrl:"https://youtube-com-1.onrender.com/",
      codeUrl: "https://github.com/kiranchaudhary18/youtube.com",
    },
    {
      id: 4,
      title: "Countdown Timer",
      description: "A sleek and responsive countdown timer that helps users track time for events, deadlines, or special occasions. Designed with precision and a user-friendly interface for an enhanced experience.",
      tags: ["React.js"],
      image: "https://res.cloudinary.com/dnbayngfx/image/upload/v1741234458/countdown_wap8uk.png",
      liveUrl:"https://preeminent-peony-172547.netlify.app/",
      codeUrl: "https://github.com/kiranchaudhary18/countdownTimer",
    },
    {
        id: 5,
        title: "Spotify",
        description: "A sleek and responsive countdown timer that helps users track time for events, deadlines, or special occasions. Designed with precision and a user-friendly interface for an enhanced experience.",
        tags: ["HTML/CSS"],
        image: "https://res.cloudinary.com/dnbayngfx/image/upload/v1741240885/spotify_dhmyep.png",
        codeUrl: "https://github.com/kiranchaudhary18/spotify.task",
      },
      {
        id: 6,
        title: "Amazon",
        description: "A sleek and responsive countdown timer that helps users track time for events, deadlines, or special occasions. Designed with precision and a user-friendly interface for an enhanced experience.",
        tags: ["HTML/CSS"],
        image: "https://res.cloudinary.com/dnbayngfx/image/upload/v1741240740/amazon_klmzmi.png",
        liveUrl: "",
        codeUrl: "",
      },
      {
        id: 6,
        title: "Cartoon Network",
        description: "A sleek and responsive countdown timer that helps users track time for events, deadlines, or special occasions. Designed with precision and a user-friendly interface for an enhanced experience.",
        tags: ["HTML/CSS"],
        image: "https://res.cloudinary.com/dnbayngfx/image/upload/v1741242487/cartton_evgbvg.png",
        codeUrl: "https://github.com/kiranchaudhary18/cartoon-network",
      },
      {
        id: 7,
        title: "Digigold",
        description: "A sleek and responsive countdown timer that helps users track time for events, deadlines, or special occasions. Designed with precision and a user-friendly interface for an enhanced experience.",
        tags: ["HTML/CSS"],
        image: "https://res.cloudinary.com/dnbayngfx/image/upload/v1741242709/digigold_tijeho.png",
        codeUrl: "https://github.com/kiranchaudhary18/digigold",
      },
      {
        id: 8,
        title: "Codinggita",
        description: "A sleek and responsive countdown timer that helps users track time for events, deadlines, or special occasions. Designed with precision and a user-friendly interface for an enhanced experience.",
        tags: ["Figma"],
        image: "https://res.cloudinary.com/dnbayngfx/image/upload/v1741203613/codinggita-logo_urbgxt.png",
        liveUrl:"https://www.figma.com/proto/E6bEiKGItd1H4CJyOPvKkQ/Food?page-id=0%3A1&node-id=37-360&starting-point-node-id=37%3A360&t=UH6IWR19sFSCTdtW-1",
      },
      {
        id: 9,
        title: "Instagram",
        description: "A sleek and responsive countdown timer that helps users track time for events, deadlines, or special occasions. Designed with precision and a user-friendly interface for an enhanced experience.",
        tags: ["Figma"],
        image: "https://res.cloudinary.com/dnbayngfx/image/upload/v1741204550/insta_agehpy.png",
        liveUrl: "https://www.figma.com/proto/CsXrFCbuFJ80bmxZaP97ZQ/Untitled?page-id=&node-id=29-160&viewport=296%2C387%2C0.15&t=rczgVxaKEKCzOPAk-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=29%3A136",
      },
      
  ];

  const filteredProjects = selectedTag
    ? projects.filter((project) => project.tags.includes(selectedTag))
    : projects;

  return (
    <section id="projects" className="projects-section">
      <motion.div className="section-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h2>Featured Projects</h2>
        <div className="title-underline"></div>
      </motion.div>

      <motion.div className="projects-grid" ref={ref} initial="hidden" animate={controls}>
        {filteredProjects.map((project) => (
          <motion.div key={project.id} className="project-card" whileHover={{ y: -10 }} onClick={() => setSelectedId(project.id)}>
            <div className="project-image">
              <img src={project.image || "/placeholder.svg"} alt={project.title} />
              <div className="project-overlay">
                <span>View Project</span>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag" onClick={() => setSelectedTag(tag)}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedId && (
          <motion.div className="project-modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedId(null)}>
            <motion.div className="project-modal" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={() => setSelectedId(null)}>
                &times;
              </button>

              {projects.find((p) => p.id === selectedId) && (
                <>
                  <div className="modal-image">
                    <img src={projects.find((p) => p.id === selectedId)?.image || "/placeholder.svg"} alt={projects.find((p) => p.id === selectedId)?.title} />
                  </div>
                  <div className="modal-content">
                    <h2>{projects.find((p) => p.id === selectedId)?.title}</h2>
                    <p>{projects.find((p) => p.id === selectedId)?.description}</p>
                    <div className="modal-tags">
                      {projects.find((p) => p.id === selectedId)?.tags.map((tag, index) => (
                        <span key={index} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="modal-actions">
                    {projects.find((p) => p.id === selectedId)?.liveUrl && (
  <a
    href={projects.find((p) => p.id === selectedId)?.liveUrl}
    className="action-button"
    target="_blank"
    rel="noopener noreferrer"
    onClick={(e) => e.stopPropagation()}
  >
    View Live
  </a>
)}
                      {projects.find((p) => p.id === selectedId)?.codeUrl && (
                        <a href={projects.find((p) => p.id === selectedId)?.codeUrl} className="action-button secondary" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                          View Code
                        </a>
                      )}
                      {projects.find((p) => p.id === selectedId)?.postmanUrl && (
                        <a href={projects.find((p) => p.id === selectedId)?.postmanUrl} className="action-button secondary" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                          Postman Docs
                        </a>
                      )}
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
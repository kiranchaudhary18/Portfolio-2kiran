"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import "../styles/about.css"

export default function About() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  const skills = [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "MongoDB", level: 80 },
    { name: "UI/UX Design", level: 85 },
    { name: "Responsive Design", level: 90 },
    { name: "Git", level: 90 },
    { name: "GitHub", level: 90 },
  ]

  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Rai University",
      year: "2024 - Present",
      sem: "2",
      cgpa: "9.76",
      description: " Now I am Computer Science Engineering student, learning Web Development and Data Structures & Algorithms to build dynamic and efficient solutions.",
      ongoing: true,
    },
  ]

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>About Me</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="image-container">
              <img className="kiran" src="https://res.cloudinary.com/dnbayngfx/image/upload/v1741181257/passport_photo-removebg-preview_1_zsvowx.png" alt="Profile" />
              <div className="image-border"></div>
            </div>
          </motion.div>

          <motion.div className="about-text" ref={ref} variants={containerVariants} initial="hidden" animate={controls}>
            <motion.h3 variants={itemVariants}>Full-Stack Developer & UI/UX Designer</motion.h3>

            <motion.p variants={itemVariants}>
              I'm a passionate Full-Stack Developer and UI/UX Designer dedicated to crafting seamless digital 
              experiences. With a blend of creative design and robust development skills, I bring ideas to life through intuitive interfaces 
              and efficient code.
            </motion.p>

            <motion.div className="skills-container" variants={itemVariants}>
              <h4>Skills</h4>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div className="about-cta" variants={itemVariants}>
              <a href="https://www.canva.com/design/DAGiVLO1n9g/f_J_i_tty_OoG3GLvemP0Q/edit?utm_content=DAGiVLO1n9g&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" className="cta-button" target="_blank">
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.div
          className="education-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="section-subtitle">Education</h3>
          <div className="education-timeline">
            {education.map((item, index) => (
              <motion.div
                key={index}
                className="education-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              >
                <div className="education-dot"></div>
                <div className="education-content">
                  <h4>{item.degree}</h4>
                  <div className="education-meta">
                    <span className="institution">{item.institution}</span>
                    <span className="year">{item.year}</span>
                    {item.ongoing && <span className="ongoing">Ongoing</span>}
                  </div>
                  <p>{item.description}</p>
                  <div className="education-details">
                    <p><strong>CGPA:</strong> {item.cgpa}</p>
                    <p><strong>Semester:</strong> {item.sem}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
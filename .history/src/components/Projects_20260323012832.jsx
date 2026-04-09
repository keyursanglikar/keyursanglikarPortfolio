import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: "MERN Stack App",
    desc: "Full stack web app using MongoDB, Express, React, Node.js with authentication and CRUD features.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    icon: "⚛️",
    gradient: "linear-gradient(135deg, #61DAFB, #00aaff)",
    color: "#61DAFB",
    features: ["User Authentication", "CRUD Operations", "REST API", "Responsive Design"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: 2,
    title: "Java Backend System",
    desc: "Built scalable backend using Java and JDBC with optimized database queries and multi-threading.",
    tech: ["Java", "MySQL", "JDBC"],
    icon: "☕",
    gradient: "linear-gradient(135deg, #ff5500, #007396)",
    color: "#ff5500",
    features: ["Multi-threading", "Database Optimization", "REST APIs", "JWT Authentication"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: 3,
    title: "Portfolio Website",
    desc: "Personal portfolio website with 3D animations, smooth transitions, and responsive design.",
    tech: ["React", "Framer Motion", "CSS"],
    icon: "🎨",
    gradient: "linear-gradient(135deg, #E34F26, #1572B6)",
    color: "#E34F26",
    features: ["3D Animations", "Smooth Transitions", "Responsive", "Dark Mode"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: 4,
    title: "Python Automation Tool",
    desc: "Automation scripts for data processing, web scraping, and task optimization with GUI interface.",
    tech: ["Python", "Pandas", "Selenium"],
    icon: "🐍",
    gradient: "linear-gradient(135deg, #3776AB, #ffd43b)",
    color: "#3776AB",
    features: ["Web Scraping", "Data Processing", "GUI Interface", "Task Scheduling"],
    demoLink: "#",
    githubLink: "#"
  }
];

function Projects() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev
  const [showVoice, setShowVoice] = useState(true);
  
  // Voice narration for each project
  const narrations = [
    "MERN Stack Application. A full stack web app with authentication and CRUD features.",
    "Java Backend System. A scalable backend with optimized database queries.",
    "Portfolio Website. A personal portfolio with 3D animations and responsive design.",
    "Python Automation Tool. Automation scripts for data processing and task optimization."
  ];
  
  useEffect(() => {
    // Auto-play voice narration when page changes
    if (showVoice) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(narrations[currentPage]);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 0.8;
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  }, [currentPage, showVoice]);
  
  const handleNext = () => {
    if (currentPage < projects.length - 1 && !isFlipping) {
      setDirection(1);
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(prev => prev + 1);
        setTimeout(() => setIsFlipping(false), 300);
      }, 300);
    }
  };
  
  const handlePrev = () => {
    if (currentPage > 0 && !isFlipping) {
      setDirection(-1);
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(prev => prev - 1);
        setTimeout(() => setIsFlipping(false), 300);
      }, 300);
    }
  };
  
  const handleDotClick = (index) => {
    if (index !== currentPage && !isFlipping) {
      setDirection(index > currentPage ? 1 : -1);
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(index);
        setTimeout(() => setIsFlipping(false), 300);
      }, 300);
    }
  };
  
  const toggleVoice = () => {
    setShowVoice(!showVoice);
    if (showVoice) {
      window.speechSynthesis.cancel();
    }
  };
  
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      rotateY: direction > 0 ? 45 : -45,
      scale: 0.8
    }),
    center: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      rotateY: direction > 0 ? -45 : 45,
      scale: 0.8,
      transition: {
        duration: 0.4
      }
    })
  };
  
  return (
    <section className="projects-3d" id="projects">
      <div className="projects-header">
        <h2 className="projects-title">My Projects</h2>
        <button className="voice-toggle" onClick={toggleVoice}>
          {showVoice ? '🔊 Voice ON' : '🔇 Voice OFF'}
        </button>
      </div>
      
      <div className="projects-3d-container">
        {/* 3D Person Illustration */}
        <div className="person-3d-container">
          <div className="person-3d">
            <div className="person-head">
              <div className="person-face">
                <div className="person-eyes">
                  <div className="eye left"></div>
                  <div className="eye right"></div>
                </div>
                <div className="person-smile"></div>
              </div>
            </div>
            <div className="person-body">
              <div className="person-arm left-arm">
                <div className={`hand ${direction !== 0 && isFlipping ? 'pointing' : ''}`}></div>
              </div>
              <div className="person-torso"></div>
              <div className="person-arm right-arm"></div>
            </div>
            <div className="person-legs">
              <div className="leg left-leg"></div>
              <div className="leg right-leg"></div>
            </div>
          </div>
          
          {/* Floating 3D Elements */}
          <div className="floating-elements">
            <div className="floating-element code">{"</>"}</div>
            <div className="floating-element react">⚛️</div>
            <div className="floating-element java">☕</div>
          </div>
        </div>
        
        {/* Project Card with Flip Animation */}
        <div className="project-card-container">
          <div className="card-3d-wrapper">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentPage}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="project-card-3d"
                style={{
                  background: `linear-gradient(135deg, rgba(0,0,0,0.85), rgba(0,0,0,0.95))`,
                  border: `2px solid ${projects[currentPage].color}`,
                  boxShadow: `0 20px 40px ${projects[currentPage].color}20`
                }}
              >
                <div className="project-icon-large" style={{ color: projects[currentPage].color }}>
                  {projects[currentPage].icon}
                </div>
                
                <h3 className="project-title-3d" style={{ 
                  background: projects[currentPage].gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}>
                  {projects[currentPage].title}
                </h3>
                
                <p className="project-desc-3d">{projects[currentPage].desc}</p>
                
                <div className="project-tech-stack">
                  {projects[currentPage].tech.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="tech-badge-3d" 
                      style={{ 
                        borderColor: projects[currentPage].color,
                        color: projects[currentPage].color
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-features">
                  <h4>✨ Key Features</h4>
                  <ul>
                    {projects[currentPage].features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-links">
                  <motion.a
                    href={projects[currentPage].demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="demo-link"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ background: projects[currentPage].gradient }}
                  >
                    Live Demo 🚀
                  </motion.a>
                  <motion.a
                    href={projects[currentPage].githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ borderColor: projects[currentPage].color }}
                  >
                    GitHub 💻
                  </motion.a>
                </div>
                
                <div className="page-indicator">
                  <span className="current-page">{currentPage + 1}</span>
                  <span className="separator">/</span>
                  <span className="total-pages">{projects.length}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation Buttons */}
          <div className="navigation-buttons">
            <button 
              className="nav-btn prev-btn"
              onClick={handlePrev}
              disabled={currentPage === 0 || isFlipping}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Previous
            </button>
            
            <div className="project-dots">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  className={`dot ${idx === currentPage ? 'active' : ''}`}
                  onClick={() => handleDotClick(idx)}
                  disabled={isFlipping}
                  style={{ 
                    background: idx === currentPage ? projects[currentPage].color : 'rgba(255,255,255,0.3)',
                    width: idx === currentPage ? '30px' : '10px'
                  }}
                />
              ))}
            </div>
            
            <button 
              className="nav-btn next-btn"
              onClick={handleNext}
              disabled={currentPage === projects.length - 1 || isFlipping}
            >
              Next
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
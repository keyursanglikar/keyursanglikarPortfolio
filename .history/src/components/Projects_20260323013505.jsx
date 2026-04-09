import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '.Projects.css';

const projects = [
  {
    id: 1,
    title: "MERN Stack App",
    desc: "Full stack web application with authentication, CRUD operations, and real-time features.",
    longDesc: "Built a complete MERN stack application with JWT authentication, MongoDB database, and responsive UI. Features include user profiles, post creation, comments, and real-time notifications.",
    tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    icon: "⚛️",
    gradient: "linear-gradient(135deg, #61DAFB, #00aaff)",
    color: "#61DAFB",
    features: ["User Authentication", "CRUD Operations", "RESTful API", "Real-time Updates", "Responsive Design"],
    image: "📱",
    demoLink: "https://github.com/yourusername/mern-app",
    githubLink: "https://github.com/yourusername/mern-app"
  },
  {
    id: 2,
    title: "Java Backend System",
    desc: "Scalable backend system with multi-threading and optimized database queries.",
    longDesc: "Enterprise-level backend system built with Java and JDBC. Implements multi-threading for concurrent processing, connection pooling, and optimized SQL queries for high performance.",
    tech: ["Java", "MySQL", "JDBC", "Threads", "Maven"],
    icon: "☕",
    gradient: "linear-gradient(135deg, #ff5500, #007396)",
    color: "#ff5500",
    features: ["Multi-threading", "Connection Pooling", "Query Optimization", "Transaction Management", "REST APIs"],
    image: "⚙️",
    demoLink: "https://github.com/yourusername/java-backend",
    githubLink: "https://github.com/yourusername/java-backend"
  },
  {
    id: 3,
    title: "Portfolio 3D Website",
    desc: "Immersive portfolio with 3D animations and interactive elements.",
    longDesc: "Modern portfolio website featuring 3D models, smooth animations, and interactive UI components. Built with React and Three.js for an engaging user experience.",
    tech: ["React", "Three.js", "Framer Motion", "CSS3"],
    icon: "🎨",
    gradient: "linear-gradient(135deg, #E34F26, #1572B6)",
    color: "#E34F26",
    features: ["3D Animations", "Smooth Transitions", "Interactive UI", "Responsive Design", "Dark Mode"],
    image: "✨",
    demoLink: "https://your-portfolio.com",
    githubLink: "https://github.com/yourusername/portfolio"
  },
  {
    id: 4,
    title: "Python Automation Tool",
    desc: "Automation scripts with GUI for data processing and task scheduling.",
    longDesc: "Comprehensive automation tool with user-friendly GUI. Handles web scraping, data processing, file operations, and scheduled tasks automatically.",
    tech: ["Python", "Pandas", "Selenium", "PyQt5", "Schedule"],
    icon: "🐍",
    gradient: "linear-gradient(135deg, #3776AB, #ffd43b)",
    color: "#3776AB",
    features: ["Web Scraping", "Data Processing", "GUI Interface", "Task Scheduling", "Email Reports"],
    image: "🤖",
    demoLink: "https://github.com/yourusername/python-automation",
    githubLink: "https://github.com/yourusername/python-automation"
  },
  {
    id: 5,
    title: "E-Commerce Platform",
    desc: "Full-featured e-commerce platform with payment integration.",
    longDesc: "Complete e-commerce solution with product management, shopping cart, payment gateway integration, and order tracking system.",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    icon: "🛒",
    gradient: "linear-gradient(135deg, #ff6b6b, #4ecdc4)",
    color: "#ff6b6b",
    features: ["Product Management", "Shopping Cart", "Payment Integration", "Order Tracking", "Admin Panel"],
    image: "💳",
    demoLink: "https://github.com/yourusername/ecommerce",
    githubLink: "https://github.com/yourusername/ecommerce"
  }
];

function Projects() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [direction, setDirection] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Auto-speak project title on change
    if (!isSpeaking) {
      const utterance = new SpeechSynthesisUtterance(`${projects[currentPage].title}. ${projects[currentPage].desc}`);
      utterance.rate = 0.8;
      utterance.pitch = 1;
      utterance.volume = 0.6;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    }
  }, [currentPage, isSpeaking]);

  const handleNext = () => {
    if (currentPage < projects.length - 1 && !isFlipping) {
      setDirection(1);
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(prev => prev + 1);
        setShowDetails(false);
        setTimeout(() => setIsFlipping(false), 500);
      }, 300);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0 && !isFlipping) {
      setDirection(-1);
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(prev => prev - 1);
        setShowDetails(false);
        setTimeout(() => setIsFlipping(false), 500);
      }, 300);
    }
  };

  const handleDotClick = (index) => {
    if (index !== currentPage && !isFlipping) {
      setDirection(index > currentPage ? 1 : -1);
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(index);
        setShowDetails(false);
        setTimeout(() => setIsFlipping(false), 500);
      }, 300);
    }
  };

  const toggleVoice = () => {
    setIsSpeaking(!isSpeaking);
    if (!isSpeaking) {
      window.speechSynthesis.cancel();
    }
  };

  const flipVariants = {
    enter: (direction) => ({
      rotateY: direction > 0 ? -180 : 180,
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.4 }
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, type: "spring", stiffness: 200 }
    },
    exit: (direction) => ({
      rotateY: direction > 0 ? 180 : -180,
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.4 }
    })
  };

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="section-title">
          <span className="title-icon">📁</span>
          Featured Projects
          <span className="title-line"></span>
        </h2>

        <div className="projects-content">
          {/* 3D Character */}
          <div className="character-container">
            <div className="character-3d">
              <div className="character-body">
                <div className="character-head">
                  <div className="character-face">
                    <div className="character-eyes">
                      <div className={`eye-left ${direction !== 0 && isFlipping ? 'look-side' : ''}`}></div>
                      <div className={`eye-right ${direction !== 0 && isFlipping ? 'look-side' : ''}`}></div>
                    </div>
                    <div className="character-mouth">
                      <div className="mouth-smile"></div>
                    </div>
                  </div>
                  <div className="character-hair"></div>
                </div>
                
                <div className="character-neck"></div>
                
                <div className="character-torso">
                  <div className="shirt">
                    <div className="shirt-collar"></div>
                    <div className="shirt-button"></div>
                  </div>
                  
                  <div className={`character-arm left-arm ${direction !== 0 && isFlipping ? 'pointing' : ''}`}>
                    <div className="hand"></div>
                  </div>
                  
                  <div className="character-arm right-arm">
                    <div className="hand"></div>
                  </div>
                </div>
                
                <div className="character-legs">
                  <div className="leg left-leg"></div>
                  <div className="leg right-leg"></div>
                </div>
              </div>
              
              {/* Floating Orbs */}
              <div className="floating-orbs">
                <div className="orb orb1"></div>
                <div className="orb orb2"></div>
                <div className="orb orb3"></div>
              </div>
              
              {/* Thought Bubble */}
              <div className={`thought-bubble ${direction !== 0 && isFlipping ? 'active' : ''}`}>
                <div className="bubble-content">
                  <span>{projects[currentPage].icon}</span>
                  <p>{projects[currentPage].title}</p>
                </div>
              </div>
            </div>
            
            {/* Voice Control */}
            <button className="voice-control" onClick={toggleVoice}>
              {isSpeaking ? '🔇' : '🔊'}
            </button>
          </div>

          {/* Project Card with Flip Effect */}
          <div className="project-card-wrapper">
            <div className="card-flip-container">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentPage}
                  custom={direction}
                  variants={flipVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="project-card"
                  style={{
                    background: `linear-gradient(135deg, rgba(10, 10, 40, 0.95), rgba(20, 20, 60, 0.95))`,
                    borderLeft: `4px solid ${projects[currentPage].color}`
                  }}
                >
                  <div className="card-header">
                    <div className="project-badge" style={{ background: projects[currentPage].gradient }}>
                      {projects[currentPage].icon}
                    </div>
                    <div className="project-number">
                      <span className="current">{String(currentPage + 1).padStart(2, '0')}</span>
                      <span className="total">/{String(projects.length).padStart(2, '0')}</span>
                    </div>
                  </div>

                  <div className="card-body">
                    <h3 className="project-title" style={{ color: projects[currentPage].color }}>
                      {projects[currentPage].title}
                    </h3>
                    
                    <p className="project-description">
                      {showDetails ? projects[currentPage].longDesc : projects[currentPage].desc}
                    </p>
                    
                    <button 
                      className="read-more"
                      onClick={() => setShowDetails(!showDetails)}
                      style={{ color: projects[currentPage].color }}
                    >
                      {showDetails ? 'Show Less' : 'Read More'}
                      <span className="arrow">{showDetails ? '↑' : '↓'}</span>
                    </button>
                    
                    <div className="tech-stack">
                      {projects[currentPage].tech.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="tech-tag"
                          style={{ 
                            background: `${projects[currentPage].color}20`,
                            borderColor: projects[currentPage].color,
                            color: projects[currentPage].color
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="features-list">
                      {projects[currentPage].features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="feature-item">
                          <span className="feature-icon">✓</span>
                          <span className="feature-text">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="card-footer">
                    <div className="project-links">
                      <a 
                        href={projects[currentPage].demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="demo-btn"
                        style={{ background: projects[currentPage].gradient }}
                      >
                        Live Demo
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </a>
                      <a 
                        href={projects[currentPage].githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="github-btn"
                        style={{ borderColor: projects[currentPage].color }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Navigation Controls */}
            <div className="navigation-controls">
              <button 
                className="nav-btn prev-btn"
                onClick={handlePrev}
                disabled={currentPage === 0 || isFlipping}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Previous
              </button>
              
              <div className="page-dots">
                {projects.map((_, idx) => (
                  <button
                    key={idx}
                    className={`page-dot ${idx === currentPage ? 'active' : ''}`}
                    onClick={() => handleDotClick(idx)}
                    disabled={isFlipping}
                    style={{
                      background: idx === currentPage ? projects[currentPage].color : 'rgba(255,255,255,0.3)',
                      width: idx === currentPage ? '30px' : '8px'
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
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
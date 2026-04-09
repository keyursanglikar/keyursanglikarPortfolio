import React, { useState, useEffect } from 'react';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "AI Code Assistant",
      description: "Real-time code completion with GPT-4 integration. Supports 20+ languages, intelligent bug detection, and code explanation features.",
      longDescription: "Built with React and OpenAI API, this tool provides real-time suggestions as you type. Features include syntax highlighting, error detection, code explanation, and auto-completion. Used by 500+ developers daily.",
      tech: ["React 18", "OpenAI API", "Tailwind CSS", "Monaco Editor", "Vite"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600",
      github: "https://github.com",
      demo: "https://demo.com",
      category: "ai",
      featured: true,
      metrics: { stars: 345, forks: 89, usedBy: "1.2k+" },
      date: "2024"
    },
    {
      id: 2,
      title: "Web3 NFT Marketplace",
      description: "Full-featured marketplace with minting, bidding, and wallet integration. Smart contracts on Ethereum with gas optimization.",
      longDescription: "Decentralized NFT marketplace allowing users to mint, buy, sell, and auction NFTs. Features include MetaMask integration, IPFS storage, real-time bidding, and transaction history.",
      tech: ["React", "Web3.js", "Solidity", "IPFS", "Hardhat"],
      image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=600",
      github: "https://github.com",
      demo: "https://demo.com",
      category: "blockchain",
      featured: true,
      metrics: { stars: 567, forks: 123, usedBy: "2.4k+" },
      date: "2024"
    },
    {
      id: 3,
      title: "Real-time Analytics Dashboard",
      description: "Enterprise-grade dashboard with live WebSocket updates, 20+ chart types, and customizable widgets.",
      longDescription: "Analytics platform handling 1M+ data points. Features drag-drop widgets, real-time updates, export capabilities, and role-based access control.",
      tech: ["React", "D3.js", "Socket.io", "Redux Toolkit", "WebSocket"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
      github: "https://github.com",
      demo: "https://demo.com",
      category: "data",
      featured: true,
      metrics: { stars: 892, forks: 234, usedBy: "5k+" },
      date: "2023"
    },
    {
      id: 4,
      title: "Video Conferencing Platform",
      description: "Zoom alternative with screen sharing, recording, virtual backgrounds, and real-time chat.",
      longDescription: "WebRTC-based video conferencing supporting up to 50 participants. Features include screen sharing, recording, virtual backgrounds, chat, and meeting recording.",
      tech: ["React", "WebRTC", "Socket.io", "FFmpeg", "Tailwind"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600",
      github: "https://github.com",
      demo: "https://demo.com",
      category: "realtime",
      metrics: { stars: 1245, forks: 367, usedBy: "10k+" },
      date: "2024"
    },
    {
      id: 5,
      title: "E-commerce Platform",
      description: "Full-stack solution with cart, payments, admin panel, and AI recommendation engine.",
      longDescription: "Complete e-commerce solution with 1000+ products. Features include payment gateway, inventory management, order tracking, and personalized recommendations.",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600",
      github: "https://github.com",
      demo: "https://demo.com",
      category: "fullstack",
      metrics: { stars: 2341, forks: 567, usedBy: "15k+" },
      date: "2023"
    },
    {
      id: 6,
      title: "DevOps Pipeline Visualizer",
      description: "Interactive CI/CD builder with drag-drop interface, real-time logs, and deployment tracking.",
      longDescription: "Visual pipeline builder for DevOps teams. Supports GitHub Actions, Jenkins, GitLab CI. Features include drag-drop interface, real-time logs, and deployment analytics.",
      tech: ["React Flow", "Docker", "Kubernetes", "GraphQL", "Prisma"],
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600",
      github: "https://github.com",
      demo: "https://demo.com",
      category: "devops",
      metrics: { stars: 678, forks: 145, usedBy: "3.2k+" },
      date: "2024"
    },
    {
      id: 7,
      title: "AI Image Generator",
      description: "Stable Diffusion-powered image generation with prompt engineering and style transfer.",
      longDescription: "Generate stunning images from text prompts using Stable Diffusion. Features include style transfer, image upscaling, batch generation, and gallery management.",
      tech: ["React", "Stable Diffusion", "TensorFlow.js", "Canvas API"],
      image: "https://images.unsplash.com/photo-1547954575-855750c57bd3?w=600",
      github: "https://github.com",
      demo: "https://demo.com",
      category: "ai",
      metrics: { stars: 956, forks: 234, usedBy: "4.5k+" },
      date: "2024"
    },
    {
      id: 8,
      title: "Social Media Analytics",
      description: "Track and analyze social media metrics across platforms with predictive insights.",
      longDescription: "Comprehensive social media analytics tool supporting Twitter, Instagram, LinkedIn. Features include sentiment analysis, engagement tracking, and content scheduling.",
      tech: ["React", "D3.js", "Social APIs", "Python Backend"],
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600",
      github: "https://github.com",
      demo: "https://demo.com",
      category: "data",
      metrics: { stars: 745, forks: 189, usedBy: "2.8k+" },
      date: "2023"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: '🎯' },
    { id: 'ai', name: 'AI & ML', icon: '🤖' },
    { id: 'blockchain', name: 'Web3', icon: '⛓️' },
    { id: 'data', name: 'Data Analytics', icon: '📊' },
    { id: 'realtime', name: 'Real-time', icon: '⚡' },
    { id: 'fullstack', name: 'Full Stack', icon: '🏗️' },
    { id: 'devops', name: 'DevOps', icon: '🚀' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const featuredProjects = projects.filter(p => p.featured);
  const loadMore = () => setVisibleProjects(prev => prev + 6);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.project-card, .section-title, .filter-btn').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        {/* Background Decor */}
        <div className="bg-gradient"></div>
        <div className="bg-grid"></div>

        {/* Header */}
        <div className="section-header">
          <span className="section-badge">
            <span className="badge-icon">⚡</span>
            Portfolio
          </span>
          <h2 className="section-title">
            Cool Projects I've
            <span className="gradient-text"> Built</span>
          </h2>
          <p className="section-subtitle">
            Solving real-world problems with cutting-edge technology.
            Each project is production-ready and thoroughly tested.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="stats-bar">
          <div className="stat-item">
            <span className="stat-number">{projects.length}+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">
              {projects.reduce((acc, p) => acc + p.metrics.stars, 0)}+
            </span>
            <span className="stat-label">GitHub Stars</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">
              {projects.reduce((acc, p) => acc + p.metrics.forks, 0)}+
            </span>
            <span className="stat-label">Forks</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">50k+</span>
            <span className="stat-label">Live Users</span>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="filter-bar">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
            >
              <span className="filter-icon">{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Featured Projects Banner */}
        {filter === 'all' && (
          <div className="featured-banner">
            <h3>🔥 Featured Projects</h3>
            <div className="featured-grid">
              {featuredProjects.slice(0, 3).map(project => (
                <div key={project.id} className="featured-card">
                  <div className="featured-content">
                    <span className="featured-tag">⭐ Most Popular</span>
                    <h4>{project.title}</h4>
                    <p>{project.description.substring(0, 100)}...</p>
                    <div className="featured-tech">
                      {project.tech.slice(0, 3).map(tech => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.slice(0, visibleProjects).map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
              onViewDetails={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Load More Button */}
        {visibleProjects < filteredProjects.length && (
          <div className="load-more">
            <button onClick={loadMore} className="load-more-btn">
              <span>Load More Projects</span>
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
          </div>
        )}

        {/* View All GitHub CTA */}
        <div className="github-cta">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="github-link"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.21.68-.48 0-.24-.01-.88-.01-1.72-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"/>
            </svg>
            <span>View All Projects on GitHub</span>
            <svg viewBox="0 0 24 24" fill="none" className="arrow-icon">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

// Project Card Component
const ProjectCard = ({ project, index, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`project-card ${isHovered ? 'hovered' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-inner">
        {/* Image Section */}
        <div className="card-image">
          <img src={project.image} alt={project.title} loading="lazy" />
          <div className="image-overlay">
            <div className="overlay-buttons">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="overlay-btn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.21.68-.48 0-.24-.01-.88-.01-1.72-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"/>
                </svg>
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="overlay-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                </svg>
              </a>
            </div>
          </div>
          {project.featured && <span className="featured-badge">🔥 Featured</span>}
        </div>

        {/* Content Section */}
        <div className="card-content">
          <div className="card-header">
            <h3 className="project-title">{project.title}</h3>
            <span className="project-date">{project.date}</span>
          </div>

          <p className="project-description">{project.description}</p>

          {/* Tech Stack */}
          <div className="tech-stack">
            {project.tech.slice(0, 4).map((tech, i) => (
              <span key={i} className="tech-tag">{tech}</span>
            ))}
            {project.tech.length > 4 && (
              <span className="tech-tag more">+{project.tech.length - 4}</span>
            )}
          </div>

          {/* Metrics */}
          <div className="project-metrics">
            <div className="metric">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              </svg>
              <span>{project.metrics.stars}</span>
            </div>
            <div className="metric">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <span>{project.metrics.forks}</span>
            </div>
            <div className="metric">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M3 7a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4M13 3v4M9 3v4"/>
              </svg>
              <span>{project.metrics.usedBy}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="card-actions">
            <button onClick={onViewDetails} className="details-btn">
              View Details
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Project Modal Component
const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => document.body.style.overflow = 'auto';
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-image">
          <img src={project.image} alt={project.title} />
        </div>
        
        <div className="modal-body">
          <h2>{project.title}</h2>
          <div className="modal-meta">
            <span className="modal-category">{project.category}</span>
            <span className="modal-date">{project.date}</span>
          </div>
          
          <p className="modal-description">{project.longDescription}</p>
          
          <div className="modal-tech">
            <h3>Technologies Used</h3>
            <div className="tech-grid">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-pill">{tech}</span>
              ))}
            </div>
          </div>
          
          <div className="modal-actions">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="modal-btn github">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.21.68-.48 0-.24-.01-.88-.01-1.72-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"/>
              </svg>
              View Code
            </a>
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="modal-btn demo">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
              </svg>
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
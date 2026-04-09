// Projects.jsx
import React, { useState } from 'react';
import { FiGithub, FiExternalLink, FiHeart, FiStar } from 'react-icons/fi';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "AI Code Assistant",
      description: "Real-time code completion and bug detection using OpenAI API. Supports 15+ languages with syntax highlighting.",
      tech: ["React", "OpenAI API", "Tailwind", "Monaco Editor"],
      image: "/projects/code-assistant.jpg",
      github: "https://github.com/yourusername/ai-code-assistant",
      demo: "https://demo-link.com",
      category: "ai",
      featured: true,
      metrics: { stars: 245, forks: 67 }
    },
    {
      id: 2,
      title: "Web3 NFT Marketplace",
      description: "Full-featured NFT marketplace with minting, bidding, and wallet integration. Smart contracts on Ethereum.",
      tech: ["React", "Web3.js", "Solidity", "IPFS"],
      image: "/projects/nft-marketplace.jpg",
      github: "https://github.com/yourusername/nft-marketplace",
      demo: "https://demo-link.com",
      category: "blockchain",
      featured: true,
      metrics: { stars: 189, forks: 43 }
    },
    {
      id: 3,
      title: "Real-time Dashboard",
      description: "Analytics dashboard with live WebSocket updates, 15+ chart types, and drag-drop widgets.",
      tech: ["React", "D3.js", "Socket.io", "Redux Toolkit"],
      image: "/projects/dashboard.jpg",
      github: "https://github.com/yourusername/analytics-dashboard",
      demo: "https://demo-link.com",
      category: "data",
      featured: true,
      metrics: { stars: 312, forks: 89 }
    },
    {
      id: 4,
      title: "Video Conferencing App",
      description: "Zoom-like app with screen sharing, chat, recording, and virtual backgrounds.",
      tech: ["React", "WebRTC", "Socket.io", "FFmpeg"],
      image: "/projects/video-chat.jpg",
      github: "https://github.com/yourusername/video-conference",
      demo: "https://demo-link.com",
      category: "realtime",
      metrics: { stars: 567, forks: 123 }
    },
    {
      id: 5,
      title: "E-commerce Platform",
      description: "Full-stack e-commerce with cart, payments, admin panel, and recommendation engine.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/projects/ecommerce.jpg",
      github: "https://github.com/yourusername/ecommerce-platform",
      demo: "https://demo-link.com",
      category: "fullstack",
      metrics: { stars: 423, forks: 98 }
    },
    {
      id: 6,
      title: "DevOps Pipeline Visualizer",
      description: "Interactive CI/CD pipeline builder with drag-drop, real-time logs, and deployment tracking.",
      tech: ["React Flow", "Docker", "Kubernetes", "GraphQL"],
      image: "/projects/devops.jpg",
      github: "https://github.com/yourusername/pipeline-visualizer",
      demo: "https://demo-link.com",
      category: "devops",
      metrics: { stars: 178, forks: 34 }
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ai', name: 'AI/ML' },
    { id: 'blockchain', name: 'Web3' },
    { id: 'data', name: 'Data Viz' },
    { id: 'realtime', name: 'Real-time' },
    { id: 'fullstack', name: 'Full Stack' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            Cool Projects I've Built
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Solving real-world problems with cutting-edge tech. Each project is production-ready and thoroughly tested.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === cat.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 dark:shadow-none'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-48 bg-gradient-to-br from-blue-500 to-purple-600">
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full hover:bg-gray-100 transition"
                  >
                    <FiGithub className="w-5 h-5" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full hover:bg-gray-100 transition"
                  >
                    <FiExternalLink className="w-5 h-5" />
                  </a>
                </div>
                {/* Placeholder - replace with actual images */}
                <div className="w-full h-full flex items-center justify-center text-white text-4xl font-bold">
                  {project.title[0]}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 transition">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="px-2 py-1 text-xs font-semibold bg-yellow-100 text-yellow-700 rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(tech => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <FiStar className="w-4 h-4 text-yellow-500" />
                    <span>{project.metrics.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiHeart className="w-4 h-4 text-red-500" />
                    <span>{project.metrics.forks}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
          >
            <FiGithub className="w-5 h-5" />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
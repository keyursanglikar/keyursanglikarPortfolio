import { useState, useEffect, useRef } from "react";
import "./CSS/Projects.css";
const projects = [
  {
    id: 1,
    title: "BloodBank Management System",
    category: "Full Stack",
    tech: ["React", "CSS", "Node.js", "MongoDB", "Express"],
    desc: "Comprehensive blood bank management system with donor registration, inventory tracking, blood request handling, and real-time availability updates.",
    color: "#ff4757",
    year: "2024",
    lines: 4500,
  },
  {
    id: 2,
    title: "Proviz Landing Page",
    category: "Frontend",
    tech: ["JavaScript", "HTML5", "CSS3", "Responsive Design", "Animations"],
    desc: "Modern and responsive business landing page featuring smooth scroll animations, mobile-first design, and optimized performance metrics.",
    color: "#0abde3",
    year: "2024",
    lines: 1200,
  },
  {
    id: 3,
    title: "ToDo List App",
    category: "Web App",
    tech: ["JavaScript", "HTML5", "CSS3", "LocalStorage", "DOM API"],
    desc: "Feature-rich task management application with add, edit, delete, and complete functionality. Tasks persist using browser's local storage.",
    color: "#10ac84",
    year: "2024",
    lines: 850,
  },
  {
    id: 4,
    title: "StopWatch & Timer",
    category: "Utility",
    tech: ["JavaScript", "HTML5", "CSS3", "Web APIs", "RequestAnimationFrame"],
    desc: "Dual-mode time utility featuring precise stopwatch with lap recording and countdown timer with sound notifications and controls.",
    color: "#f368e0",
    year: "2024",
    lines: 780,
  },
  {
    id: 5,
    title: "Panchayat Samiti Website",
    category: "Government Portal",
    tech: ["PHP", "HTML5", "CSS3", "JavaScript", "MySQL"],
    desc: "Official panchayat samiti web portal with citizen services, grievance redressal, digital document management, and village information system.",
    color: "#f39c12",
    year: "2024",
    lines: 8500,
  },
  {
    id: 6,
    title: "Anant Exam Dashboard",
    category: "EdTech",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
    desc: "Complete examination management platform with student registration, online test creation, real-time result calculation, and performance analytics dashboard.",
    color: "#9b59b6",
    year: "2024",
    lines: 11200,
  },
  {
    id: 7,
    title: "E-Commerce Backend API",
    category: "Backend",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "Stripe"],
    desc: "Scalable e-commerce backend with user authentication, product management, shopping cart, order processing, and payment gateway integration.",
    color: "#e84393",
    year: "2024",
    lines: 6800,
  },
  {
    id: 8,
    title: "Portfolio 3D Website",
    category: "Frontend",
    tech: ["React", "Three.js", "Framer Motion", "Tailwind CSS"],
    desc: "Interactive 3D portfolio with WebGL animations, particle effects, smooth transitions, and immersive user experience design.",
    color: "#00cec9",
    year: "2024",
    lines: 4200,
  },
  {
    id: 9,
    title: "Chat Application",
    category: "Real-time",
    tech: ["React", "Socket.io", "Node.js", "MongoDB", "Express"],
    desc: "Real-time messaging platform with private chat rooms, file sharing, typing indicators, online status, and message history persistence.",
    color: "#fd79a8",
    year: "2024",
    lines: 5600,
  },
  {
    id: 10,
    title: "Weather Forecast App",
    category: "API Integration",
    tech: ["React", "OpenWeather API", "Chart.js", "CSS3", "Axios"],
    desc: "Weather application with 7-day forecast, interactive maps, temperature graphs, and location-based weather alerts.",
    color: "#74b9ff",
    year: "2024",
    lines: 3200,
  },
  {
    id: 11,
    title: "Social Media Dashboard",
    category: "Analytics",
    tech: ["React", "Chart.js", "REST API", "CSS3", "Context API"],
    desc: "Social media analytics dashboard with engagement metrics, post scheduler, content calendar, and cross-platform analytics integration.",
    color: "#55efc4",
    year: "2024",
    lines: 7800,
  },
  {
    id: 12,
    title: "Task Management System",
    category: "Productivity",
    tech: ["MERN Stack", "Redux", "JWT", "Tailwind CSS", "Node.js"],
    desc: "Full-featured project management tool with team collaboration, task assignment, deadline tracking, file attachments, and real-time updates.",
    color: "#ffeaa7",
    year: "2024",
    lines: 9400,
  },
];

/* ── Intersection Observer hook ── */
const useInView = (threshold = 0.1) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
};

/* ── Animated counter ── */
const AnimCounter = ({ target, inView }) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const step = Math.ceil(target / 60);
    const t = setInterval(() => {
      current += step;
      if (current >= target) { setVal(target); clearInterval(t); }
      else setVal(current);
    }, 16);
    return () => clearInterval(t);
  }, [inView, target]);
  return <>{val.toLocaleString()}</>;
};

/* ── Project Card ── */
const ProjectCard = ({ project, index, inView }) => {
  const [hovered, setHovered] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const onMove = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setMouse({
      x: ((e.clientX - r.left) / r.width - 0.5) * 16,
      y: ((e.clientY - r.top) / r.height - 0.5) * -16,
    });
  };

  /* Dynamic styles that depend on project.color or mouse position
     — these stay inline since they can't be expressed in static CSS */
  const cardStyle = {
    transitionDelay: inView ? `${index * 90}ms` : "0ms",
    background: hovered
      ? `linear-gradient(135deg, #0f1117 0%, ${project.color}10 100%)`
      : undefined,
    border: `1px solid ${hovered ? project.color + "50" : "#ffffff0e"}`,
    boxShadow: hovered
      ? `0 24px 56px ${project.color}1a, 0 0 0 1px ${project.color}28`
      : undefined,
    transform: hovered
      ? `perspective(900px) rotateX(${mouse.y}deg) rotateY(${mouse.x}deg) translateY(-8px) scale(1.02)`
      : undefined,
  };

  const spotlightStyle = {
    background: `radial-gradient(circle at ${50 + mouse.x * 2.5}% ${50 - mouse.y * 2.5}%, ${project.color}0c 0%, transparent 65%)`,
  };

  return (
    <div
      ref={ref}
      className={`project-card${inView ? " in-view" : ""}`}
      style={cardStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setMouse({ x: 0, y: 0 }); }}
      onMouseMove={onMove}
    >
      {/* Spotlight — only rendered on hover */}
      {hovered && (
        <div className="project-card__spotlight" style={spotlightStyle} />
      )}

      {/* Top row */}
      <div className="project-card__top">
        <div>
          <span className="project-card__category" style={{ color: project.color }}>
            {project.category}
          </span>
          <h3 className="project-card__title">{project.title}</h3>
        </div>
        <div
          className="project-card__arrow"
          style={{
            background: `${project.color}14`,
            border: `1.5px solid ${project.color}40`,
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={project.color} strokeWidth="2.5">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </div>
      </div>

      {/* Accent line */}
      <div
        className="project-card__accent-line"
        style={{ background: `linear-gradient(90deg, ${project.color}50, transparent)` }}
      />

      {/* Description */}
      <p className="project-card__desc">{project.desc}</p>

      {/* Tech pills */}
      <div className="project-card__pills">
        {project.tech.map((t) => (
          <span
            key={t}
            className="project-card__pill"
            style={{
              color: project.color,
              background: `${project.color}10`,
              borderColor: `${project.color}28`,
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="project-card__footer">
        <span className="project-card__lines">
          <span className="project-card__lines-dot" style={{ color: project.color }}>●</span>
          <AnimCounter target={project.lines} inView={inView} /> lines
        </span>
        <div className="project-card__links">
          <button className="project-card__link" style={{ color: project.color }}>GITHUB ↗</button>
          <button className="project-card__link" style={{ color: "#ffffff35" }}>LIVE ↗</button>
        </div>
      </div>
    </div>
  );
};

/* ── Main Section ── */
export default function ProjectsSection() {
  const [sectionRef, sectionInView] = useInView(0.05);
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section ref={sectionRef} className="projects-section">

      {/* ── Background effects ── */}
      <div className="projects-orb projects-orb--green" />
      <div className="projects-orb projects-orb--purple" />
      <div className="projects-orb projects-orb--red" />
      <div className="projects-grid-bg" />
      <div className="projects-scanline" />

      <div className="projects-inner">

        {/* ── Header ── */}
        <div className={`projects-header${sectionInView ? " visible" : ""}`}>
          <div className="projects-label-row">
            <div className="projects-pulse-dot" />
            <span className="projects-label-text">Selected Work</span>
            <div className="projects-label-line" />
            <span className="projects-label-count">0{projects.length} rojects</span>
          </div>

          <h2 className="projects-title">
            Things I've
            <br />
            <span className="projects-title__hollow">Built</span>
            <span className="projects-title__dot"> .</span>
          </h2>

          <p className="projects-subtitle">
            A curated collection spanning full-stack apps, open source libraries,
            and experimental tools — all shipped and production-ready.
          </p>
        </div>

        {/* ── Filters ── */}
        <div className={`projects-filters${sectionInView ? " visible" : ""}`}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn${filter === cat ? " active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Grid ── */}
        <div className="projects-grid">
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              inView={sectionInView}
            />
          ))}
        </div>

        {/* ── CTA ── */}
        <div className={`projects-cta${sectionInView ? " visible" : ""}`}>
          <button className="cta-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            View All on GitHub
          </button>
        </div>

      </div>
    </section>
  );
}

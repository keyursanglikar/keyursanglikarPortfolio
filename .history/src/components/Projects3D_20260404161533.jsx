import { useState, useEffect, useRef } from "react";

const projects = [
  {
    id: 1,
    title: "Neural Commerce",
    category: "Full Stack",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    desc: "AI-powered e-commerce platform with real-time inventory prediction and smart recommendation engine.",
    color: "#00f5a0",
    year: "2024",
    lines: 12400,
  },
  {
    id: 2,
    title: "DevFlow",
    category: "SaaS",
    tech: ["Next.js", "PostgreSQL", "Redis", "Docker"],
    desc: "Developer productivity suite — kanban boards, CI/CD visualizer, and team velocity analytics.",
    color: "#ff6b6b",
    year: "2024",
    lines: 9800,
  },
  {
    id: 3,
    title: "SkySense",
    category: "IoT / Mobile",
    tech: ["React Native", "Python", "MQTT", "InfluxDB"],
    desc: "Real-time air quality monitoring network with 500+ IoT sensors across 12 cities.",
    color: "#c77dff",
    year: "2023",
    lines: 7200,
  },
  {
    id: 4,
    title: "CipherVault",
    category: "Security",
    tech: ["Rust", "WebAssembly", "React", "Web Crypto"],
    desc: "Zero-knowledge encrypted file storage with client-side encryption and decentralized key management.",
    color: "#f77f00",
    year: "2023",
    lines: 6500,
  },
  {
    id: 5,
    title: "Synapse UI",
    category: "Open Source",
    tech: ["TypeScript", "Storybook", "Rollup", "Jest"],
    desc: "Production-grade component library with 80+ accessible components. 2.4k GitHub stars.",
    color: "#4cc9f0",
    year: "2023",
    lines: 18900,
  },
  {
    id: 6,
    title: "PulseBoard",
    category: "Analytics",
    tech: ["Vue.js", "D3.js", "GraphQL", "Hasura"],
    desc: "Real-time BI dashboard with drag-n-drop widgets and sub-second query engine.",
    color: "#06d6a0",
    year: "2022",
    lines: 11300,
  },
];

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

const AnimCounter = ({ target, inView }) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / 60);
    const t = setInterval(() => {
      start += step;
      if (start >= target) { setVal(target); clearInterval(t); }
      else setVal(start);
    }, 16);
    return () => clearInterval(t);
  }, [inView, target]);
  return <>{val.toLocaleString()}</>;
};

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

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setMouse({ x: 0, y: 0 }); }}
      onMouseMove={onMove}
      style={{
        position: "relative",
        background: hovered
          ? `linear-gradient(135deg, #0f1117 0%, ${project.color}10 100%)`
          : "linear-gradient(135deg, #0a0c12 0%, #0f1117 100%)",
        border: `1px solid ${hovered ? project.color + "50" : "#ffffff0e"}`,
        borderRadius: "18px",
        padding: "26px",
        cursor: "pointer",
        transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
        transform: inView
          ? hovered
            ? `perspective(900px) rotateX(${mouse.y}deg) rotateY(${mouse.x}deg) translateY(-8px) scale(1.02)`
            : "translateY(0)"
          : "translateY(50px) scale(0.95)",
        opacity: inView ? 1 : 0,
        transitionDelay: inView ? `${index * 90}ms` : "0ms",
        boxShadow: hovered
          ? `0 24px 56px ${project.color}1a, 0 0 0 1px ${project.color}28`
          : "0 4px 20px #00000040",
        overflow: "hidden",
      }}
    >
      {/* Spotlight glow on hover */}
      {hovered && (
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: `radial-gradient(circle at ${50 + mouse.x * 2.5}% ${50 - mouse.y * 2.5}%, ${project.color}0c 0%, transparent 65%)`,
          borderRadius: "18px",
        }} />
      )}

      {/* Top row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "18px" }}>
        <div>
          <span style={{
            display: "block",
            fontSize: "10px",
            fontFamily: "'Space Mono', monospace",
            color: project.color,
            letterSpacing: "2.5px",
            textTransform: "uppercase",
            marginBottom: "5px",
          }}>
            {project.category}
          </span>
          <h3 style={{
            margin: 0,
            fontSize: "21px",
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            color: "#fff",
            letterSpacing: "-0.5px",
          }}>
            {project.title}
          </h3>
        </div>
        <div style={{
          width: "34px", height: "34px", borderRadius: "50%",
          background: `${project.color}14`,
          border: `1.5px solid ${project.color}40`,
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "transform 0.3s",
          transform: hovered ? "rotate(45deg)" : "rotate(0deg)",
          flexShrink: 0,
        }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={project.color} strokeWidth="2.5">
            <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
          </svg>
        </div>
      </div>

      {/* Accent line */}
      <div style={{
        height: "1px",
        background: `linear-gradient(90deg, ${project.color}50, transparent)`,
        marginBottom: "14px",
        transform: hovered ? "scaleX(1)" : "scaleX(0.35)",
        transformOrigin: "left",
        transition: "transform 0.4s ease",
      }} />

      {/* Desc */}
      <p style={{
        margin: "0 0 18px",
        fontSize: "13px",
        lineHeight: 1.75,
        color: "#8a96a8",
        fontFamily: "'DM Sans', sans-serif",
      }}>
        {project.desc}
      </p>

      {/* Tech pills */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "20px" }}>
        {project.tech.map((t) => (
          <span key={t} style={{
            fontSize: "10.5px",
            fontFamily: "'Space Mono', monospace",
            color: project.color,
            background: `${project.color}10`,
            border: `1px solid ${project.color}28`,
            padding: "3px 10px",
            borderRadius: "100px",
          }}>{t}</span>
        ))}
      </div>

      {/* Footer */}
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        paddingTop: "14px", borderTop: "1px solid #ffffff08",
      }}>
        <span style={{
          fontSize: "10.5px",
          fontFamily: "'Space Mono', monospace",
          color: "#ffffff28",
          display: "flex", alignItems: "center", gap: "5px",
        }}>
          <span style={{ color: project.color, opacity: 0.5 }}>●</span>
          <AnimCounter target={project.lines} inView={inView} /> lines
        </span>
        <div style={{ display: "flex", gap: "14px" }}>
          {["GITHUB", "LIVE"].map((label, i) => (
            <span key={label} style={{
              fontSize: "10.5px",
              fontFamily: "'Space Mono', monospace",
              color: i === 0 ? project.color : "#ffffff35",
              letterSpacing: "1px",
              cursor: "pointer",
              transition: "opacity 0.2s",
            }}>
              {label} ↗
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function ProjectsSection() {
  const [sectionRef, sectionInView] = useInView(0.05);
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=Space+Mono:wght@400;700&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes floatOrb {
          0%,100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(20px,-30px) scale(1.06); }
        }
        @keyframes scanline {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }
        @keyframes glitch {
          0%,88%,100% { transform: skewX(0deg); }
          90% { transform: skewX(-1deg); }
          93% { transform: skewX(1deg); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%,100% { opacity:1; box-shadow: 0 0 10px currentColor; }
          50% { opacity:0.5; box-shadow: 0 0 4px currentColor; }
        }
        .filter-btn {
          background: transparent;
          border: 1px solid #ffffff14;
          color: #ffffff45;
          padding: 7px 16px;
          border-radius: 100px;
          font-family: 'Space Mono', monospace;
          font-size: 10.5px;
          letter-spacing: 1.5px;
          cursor: pointer;
          transition: all 0.25s ease;
          text-transform: uppercase;
        }
        .filter-btn:hover { border-color: #ffffff28; color: #ffffffcc; }
        .filter-btn.active {
          background: #ffffff10;
          border-color: #ffffff30;
          color: #fff;
        }
        .cta-btn {
          background: transparent;
          border: 1.5px solid #ffffff18;
          color: #ffffff55;
          padding: 14px 36px;
          border-radius: 100px;
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          letter-spacing: 2px;
          cursor: pointer;
          text-transform: uppercase;
          transition: all 0.3s ease;
          display: flex; align-items: center; gap: 10px;
        }
        .cta-btn:hover {
          border-color: #00f5a055;
          color: #00f5a0;
          box-shadow: 0 0 28px #00f5a012;
        }
      `}</style>

      <section
        ref={sectionRef}
        style={{
          minHeight: "100vh",
          background: "#080a10",
          position: "relative",
          overflow: "hidden",
          padding: "100px 24px 120px",
        }}
      >
        {/* Ambient background orbs */}
        {[
          { color: "#00f5a0", top: "-20%", left: "-15%", size: 580, delay: "0s" },
          { color: "#c77dff", bottom: "-15%", right: "-10%", size: 500, delay: "2s" },
          { color: "#ff6b6b", top: "40%", left: "35%", size: 380, delay: "4s" },
        ].map(({ color, size, delay, ...pos }, i) => (
          <div key={i} style={{
            position: "absolute",
            width: size, height: size,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${color}18 0%, transparent 70%)`,
            filter: "blur(50px)",
            pointerEvents: "none",
            animation: `floatOrb ${8 + i * 2}s ease-in-out infinite`,
            animationDelay: delay,
            ...pos,
          }} />
        ))}

        {/* Grid pattern */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "linear-gradient(#ffffff03 1px, transparent 1px), linear-gradient(90deg, #ffffff03 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

        {/* Scanline */}
        <div style={{
          position: "absolute", left: 0, right: 0, height: "1px",
          background: "linear-gradient(90deg, transparent, #00f5a030, transparent)",
          animation: "scanline 8s linear infinite",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>

          {/* ── HEADER ── */}
          <div style={{
            marginBottom: "56px",
            animation: sectionInView ? "fadeUp 0.9s ease forwards" : "none",
            opacity: sectionInView ? undefined : 0,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "18px" }}>
              <div style={{
                width: "8px", height: "8px", borderRadius: "50%",
                background: "#00f5a0", color: "#00f5a0",
                animation: "pulse 2s ease-in-out infinite",
              }} />
              <span style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "10.5px", letterSpacing: "3px",
                color: "#00f5a0", textTransform: "uppercase",
              }}>
                Selected Work
              </span>
              <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, #00f5a018, transparent)" }} />
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "10.5px", color: "#ffffff18" }}>
                0{projects.length} Projects
              </span>
            </div>

            <h2 style={{
              fontSize: "clamp(44px, 7vw, 82px)",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 900,
              color: "#fff",
              letterSpacing: "-3px",
              lineHeight: 0.93,
              marginBottom: "22px",
              animation: "glitch 9s ease-in-out infinite",
            }}>
              Things I've
              <br />
              <span style={{ WebkitTextStroke: "2px #ffffff28", color: "transparent" }}>Built</span>
              <span style={{ color: "#00f5a0" }}>.</span>
            </h2>

            <p style={{
              fontSize: "15px", color: "#606878",
              maxWidth: "460px", lineHeight: 1.75,
              fontFamily: "'DM Sans', sans-serif",
            }}>
              A curated collection spanning full-stack apps, open source libraries, and experimental tools — all shipped and production-ready.
            </p>
          </div>

          {/* ── FILTERS ── */}
          <div style={{
            display: "flex", flexWrap: "wrap", gap: "7px", marginBottom: "44px",
            animation: sectionInView ? "fadeUp 0.9s ease 0.15s both" : "none",
            opacity: sectionInView ? undefined : 0,
          }}>
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

          {/* ── GRID ── */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(330px, 1fr))",
            gap: "18px",
          }}>
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} inView={sectionInView} />
            ))}
          </div>

          {/* ── CTA ── */}
          <div style={{
            marginTop: "68px", display: "flex", justifyContent: "center",
            animation: sectionInView ? "fadeUp 0.9s ease 0.5s both" : "none",
            opacity: sectionInView ? undefined : 0,
          }}>
            <button className="cta-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
              View All on GitHub
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

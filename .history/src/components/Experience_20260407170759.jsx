import React, { useEffect, useRef, useState } from "react";
import "./CSS/Experience.css";

const experiences = [
  {
    role: "Web Developer Intern",
    company: "Designvio",
    duration: "2025 – Present",
    type: "Internship",
    skills: ["React", "Tailwind CSS", "Figma", "REST APIs"],
    desc: "Worked on real-world web applications using React and modern frontend technologies. Built responsive UIs, improved Lighthouse performance scores by 40%, and shipped features used by 5,000+ users.",
    status: "current",
  },
  {
    role: "Full Stack Developer Intern",
    company: "Designvio Ux Ui Pvt Ltd",
    duration: "2024",
    type: "Full Time Job",
    skills: ["MongoDB", "Express", "React", "Node.js","DotNet","SQl"],
    desc: "Developed full-stack applications using the MERN stack. Implemented RESTful APIs, JWT authentication, and optimized database queries reducing response times by 60%.",
    status: "done",
  },
  {
    role: "Freelance Developer",
    company: "Self-Employed",
    duration: "2023 – Present",
    type: "Freelance",
    skills: ["Next.js", "WordPress", "UI/UX", "Deployment"],
    desc: "Built custom websites and software solutions for 10+ clients across various industries. Focused on clean UI/UX and scalable backend architecture.",
    status: "current",
  },
];

const useInView = (threshold = 0.15) => {
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

function ExperienceCard({ exp, index, inView }) {
  const [hovered, setHovered] = useState(false);
  const isCurrent = exp.status === "current";

  return (
    <div
      className={`exp-card ${inView ? "exp-card--visible" : ""} ${hovered ? "exp-card--hovered" : ""}`}
      style={{ transitionDelay: inView ? `${index * 130}ms` : "0ms" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* left: timeline track */}
      <div className="exp-card__track">
        <div className={`exp-card__dot ${isCurrent ? "exp-card__dot--active" : ""}`}>
          <span className="exp-card__dot-inner" />
        </div>
        {index < experiences.length - 1 && <div className="exp-card__line" />}
      </div>

      {/* right: content */}
      <div className="exp-card__body">
        {/* header row */}
        <div className="exp-card__header">
          <div className="exp-card__meta">
            <span className="exp-card__type">{exp.type}</span>
            {isCurrent && <span className="exp-card__badge">● Active</span>}
          </div>
          <span className="exp-card__duration">{exp.duration}</span>
        </div>

        <h3 className="exp-card__role">{exp.role}</h3>
        <h4 className="exp-card__company">{exp.company}</h4>

        <div className="exp-card__divider" />

        <p className="exp-card__desc">{exp.desc}</p>

        {/* skills */}
        <div className="exp-card__skills">
          {exp.skills.map((s) => (
            <span key={s} className="exp-card__skill">{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const [sectionRef, sectionInView] = useInView(0.05);

  return (
    <section className="experience" id="experience" ref={sectionRef}>
      {/* background effects */}
      <div className="exp-orb exp-orb--1" />
      <div className="exp-orb exp-orb--2" />
      <div className="exp-grid-bg" />
      <div className="exp-scanline" />

      <div className="exp-inner">
        {/* section header */}
        <div className={`exp-header ${sectionInView ? "exp-header--visible" : ""}`}>
          <div className="exp-label-row">
            <div className="exp-pulse-dot" />
            <span className="exp-label-text">Career Journey</span>
            <div className="exp-label-line" />
            <span className="exp-label-count">0{experiences.length} Roles</span>
          </div>

          <h2 className="exp-title">
            Where I've<br />
            <span className="exp-title__hollow">Worked</span>
            <span className="exp-title__dot">.</span>
          </h2>

          <p className="exp-subtitle">
            From internships to freelance — building real products, shipping real code.
          </p>
        </div>

        {/* cards */}
        <div className="exp-list">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} inView={sectionInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
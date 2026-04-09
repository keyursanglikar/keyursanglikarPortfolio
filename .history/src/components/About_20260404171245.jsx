import React from "react";
import "./CSS/About.css";
import profile from "../assets/p-pic.jpg";

/* ── SVG icons (inline, no extra deps) ── */
const IconDownload = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

const IconMail = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

/* ── Data ── */
const EDUCATION = [
  { year: "2024", degree: "B.Tech — Computer Science", school: "Engineering College" },
  { year: "2021", degree: "Diploma — Computer Engineering", school: "Polytechnic Institute" },
  { year: "2019", degree: "12th — Science", school: "Jr. College" },
  { year: "2017", degree: "10th — SSC", school: "High School" },
];

const TECH_PILLS = [
  "Java", "Python", "JavaScript",
  "React", "Node.js", "Express",
  "MongoDB", "MySQL", "HTML & CSS",
];

const INTERESTS = [
  "Building Projects",
  "Learning New Tech",
  "Problem Solving",
  "Open Source",
  "System Design",
];

const STATS = [
  { val: "4", suffix: "+", label: "Years Coding" },
  { val: "15", suffix: "+", label: "Projects" },
  { val: "8", suffix: "+", label: "Technologies" },
];

/* ── Component ── */
function About() {
  return (
    <section className="about" id="about">
      {/* ambient bg */}
      <div className="about-orb about-orb--1" />
      <div className="about-orb about-orb--2" />
      <div className="about-scanline" />

      <div className="about-inner">

        {/* ════ LEFT — PHOTO ════ */}
        <div className="about-left">
          {/* decorative rings */}
          <div className="about-ring about-ring--1" />
          <div className="about-ring about-ring--2" />

          {/* decorative code lines */}
          <div className="about-code-line">
            <span className="hi">const</span>
            <span>keyur =</span>
            <span className="hi">{"{"}</span>
            <span>role:</span>
            <span className="hi">'dev'</span>
            <span>{"}"}</span>
          </div>

          {/* photo card */}
          <div className="about-img-card">
            <img src={profile} alt="Keyur Sanglikar" />

            {/* floating tags */}
            <div className="about-img-tag about-img-tag--tl">
              <span className="about-img-tag__dot" />
              MERN Stack Dev
            </div>
            <div className="about-img-tag about-img-tag--br">
              <span className="about-img-tag__dot" />
              Open to Work
            </div>
          </div>
        </div>

        {/* ════ RIGHT — CONTENT ════ */}
        <div className="about-right">

          {/* eyebrow */}
          <div className="about-eyebrow">
            <span className="about-eyebrow__line" />
            Get to Know Me
            <span className="about-eyebrow__line" />
          </div>

          {/* title */}
          <h2 className="about-title">
            About
            <span>Me.</span>
          </h2>

          {/* bio */}
          <p className="about-bio">
            Hello! I'm{" "}
            <strong>Keyur Ratnakant Sanglikar</strong>, a passionate software developer
            with a love for building modern, scalable, and user-friendly applications.
            I thrive at the intersection of clean code and thoughtful design — turning
            complex problems into elegant digital products.
          </p>

          {/* ── Info Cards ── */}
          <div className="about-cards">

            {/* Education */}
            <div className="about-card">
              <div className="about-card__head">
                <div className="about-card__icon">🎓</div>
                <span className="about-card__label">Education</span>
              </div>
              <div className="about-edu-list">
                {EDUCATION.map((e) => (
                  <div className="about-edu-entry" key={e.year}>
                    <span className="about-edu-year">{e.year}</span>
                    <div className="about-edu-info">
                      <div className="about-edu-degree">{e.degree}</div>
                      <div className="about-edu-school">{e.school}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="about-card">
              <div className="about-card__head">
                <div className="about-card__icon">💻</div>
                <span className="about-card__label">Tech Stack</span>
              </div>
              <div className="about-pills">
                {TECH_PILLS.map((t) => (
                  <span className="about-pill" key={t}>{t}</span>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="about-card">
              <div className="about-card__head">
                <div className="about-card__icon">🎯</div>
                <span className="about-card__label">Interests</span>
              </div>
              <div className="about-interests">
                {INTERESTS.map((item) => (
                  <div className="about-interest" key={item}>
                    <span className="about-interest__dot" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ── CTA Buttons ── */}
          <div className="about-ctas">
            <a
              href="/resume.pdf"
              download
              className="about-cta about-cta--primary"
            >
              <IconDownload />
              Download CV
            </a>
            <a href="#contact" className="about-cta about-cta--ghost">
              <IconMail />
              Let's Talk
            </a>
          </div>

          {/* ── Stats ── */}
          <div className="about-stats">
            {STATS.map((s) => (
              <div className="about-stat" key={s.label}>
                <span className="about-stat__val">
                  <em>{s.val}</em>{s.suffix}
                </span>
                <span className="about-stat__label">{s.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
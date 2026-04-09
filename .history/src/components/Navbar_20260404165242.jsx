// import "./CSS/Navbar.css";

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="logo typing"><span className="logo-text ">Keyur Sanglikar</span></div>

//       <ul className="nav-links">
//         <li><a href="#home">Home</a></li>
//         <li><a href="#about">About</a></li>
//         <li><a href="#skills">Skills</a></li>
//         <li><a href="#projects">Projects</a></li>
//         <li><a href="#contact">Contact</a></li>
//       </ul>

//       <button className="nav-btn">Hire Me</button>
//     </nav>
//   );
// }

// export default Navbar;





import { useState, useEffect } from "react";
import "./CSS/Navbar.css";

const NAV_LINKS = [
  { label: "Home",     href: "#home",     index: "01" },
  { label: "About",    href: "#about",    index: "02" },
  { label: "Skills",   href: "#skills",   index: "03" },
  
  { label: "Projects", href: "#projects", index: "04" },
  { label: "Contact",  href: "#contact",  index: "05" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive]     = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  /* darken navbar on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setActive(href);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>

        {/* ── LOGO ── */}
        <a href="#home" className="logo" onClick={() => handleNav("#home")}>
          <span className="logo-bracket">[</span>
          <span className="logo-text">
            Keyur<span> .R. </span>Sanglikar
          </span>
          <span className="logo-bracket">]</span>
          <span className="logo-cursor" />
        </a>

        {/* ── NAV LINKS (desktop) ── */}
        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                data-index={link.index}
                className={active === link.href ? "active" : ""}
                onClick={() => handleNav(link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── RIGHT — STATUS + CTA (desktop) ── */}
        <div className="nav-right">
          <span className="nav-status">
            <span className="nav-status__dot" />
            Open to work
          </span>

          <button className="nav-btn">
            Hire Me
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        {/* ── HAMBURGER (mobile) ── */}
        <button
          className={`nav-hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* ── MOBILE MENU ── */}
      <div className={`nav-mobile${menuOpen ? " open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={active === link.href ? "active" : ""}
            onClick={() => handleNav(link.href)}
          >
            <span style={{
              fontFamily: "var(--font-mono)",
              fontSize: "9px",
              color: "var(--accent)",
              opacity: 0.6
            }}>
              {link.index}
            </span>
            {link.label}
          </a>
        ))}

        <div className="nav-mobile__divider" />

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 4px" }}>
          <span className="nav-status">
            <span className="nav-status__dot" />
            Open to work
          </span>
        </div>

        <button className="nav-mobile__btn">
          Hire Me
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </>
  );
}

export default Navbar;
import React from 'react';
import { Github, Linkedin, Twitter, Mail, ArrowUpCircle } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-glow-container">
        <div className="footer-line"></div>
      </div>
      
      <div className="footer-inner">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-brand">
            <h2 className="footer-logo">
              PORT<span className="footer-logo--accent">FOLIO</span>
            </h2>
            <p className="footer-description">
              Building digital experiences that merge <span className="footer-highlight">aesthetic</span> with <span className="footer-highlight">performance</span>. 
              Available for freelance and full-time opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-nav">
            <h3 className="footer-label">Navigation</h3>
            <ul className="footer-links">
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#projects" className="footer-link">Projects</a></li>
              <li><a href="#experience" className="footer-link">Experience</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div className="footer-social">
            <h3 className="footer-label">Connect</h3>
            <div className="footer-icons">
              <a href="#" className="footer-icon-btn" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="#" className="footer-icon-btn" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="footer-icon-btn" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="mailto:hello@example.com" className="footer-icon-btn" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <span className="footer-mono">© 2026</span> All rights reserved. 
            Designed & Developed with <span className="footer-heart">✦</span>
          </div>
          
          <button onClick={scrollToTop} className="footer-scroll-top" title="Back to Top">
            <span className="footer-mono">TOP</span>
            <ArrowUpCircle size={20} className="footer-arrow" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
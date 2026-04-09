import React, { useState, useRef, useEffect, useCallback } from "react";
import "./CSS/CodePlayground.css";

// ─── Template Library with 100+ Components ───────────────────────────────────

const TEMPLATES = {
  // ==================== CARDS & CONTAINERS ====================
  Cards: {
    "Glassmorphism Card": {
      label: "Glassmorphism Card",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    min-height: 100vh;
    background: linear-gradient(135deg, #1a1a2e, #16213e, #0f3460);
    display: flex; align-items: center; justify-content: center;
    font-family: 'Segoe UI', sans-serif;
  }
  .glass {
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.15);
    backdrop-filter: blur(20px);
    border-radius: 24px;
    padding: 36px 40px;
    text-align: center;
    color: white;
    width: 280px;
    transition: transform 0.3s;
  }
  .glass:hover { transform: translateY(-8px); }
  .avatar {
    width: 72px; height: 72px; border-radius: 50%;
    background: linear-gradient(135deg, #38bdf8, #6366f1);
    margin: 0 auto 18px;
    display: flex; align-items: center; justify-content: center;
    font-size: 28px; font-weight: 700;
  }
  h2 { font-size: 20px; margin-bottom: 6px; }
  p { color: rgba(255,255,255,0.6); font-size: 13px; margin-bottom: 18px; }
  .tag {
    display: inline-block; padding: 5px 14px;
    background: rgba(56,189,248,0.2); border: 1px solid rgba(56,189,248,0.4);
    border-radius: 20px; color: #38bdf8; font-size: 11px; letter-spacing: 1px;
  }
</style>
</head>
<body>
  <div class="glass">
    <div class="avatar">K</div>
    <h2>Keyur Sanglikar</h2>
    <p>Full Stack Developer</p>
    <span class="tag">AVAILABLE FOR HIRE</span>
  </div>
</body>
</html>`,
    },
    "Product Card": {
      label: "Product Card",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    min-height: 100vh; background: #060d1a;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Segoe UI', sans-serif;
  }
  .product-card {
    background: #07101f;
    border: 1px solid #0f2744;
    border-radius: 20px;
    width: 280px;
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  .product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(56,189,248,0.1);
  }
  .product-image {
    height: 180px;
    background: linear-gradient(135deg, #1e3a5f, #0f2744);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
  }
  .product-info {
    padding: 20px;
  }
  .product-title {
    color: white;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
  }
  .product-price {
    color: #38bdf8;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 12px;
  }
  .product-desc {
    color: #8a96a8;
    font-size: 12px;
    line-height: 1.6;
    margin-bottom: 16px;
  }
  .product-btn {
    width: 100%;
    padding: 10px;
    background: #38bdf8;
    border: none;
    border-radius: 10px;
    color: #060d1a;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
  }
  .product-btn:hover {
    background: #7dd3f8;
  }
</style>
</head>
<body>
  <div class="product-card">
    <div class="product-image">🎧</div>
    <div class="product-info">
      <div class="product-title">Wireless Headphones</div>
      <div class="product-price">$99.99</div>
      <div class="product-desc">Noise cancellation, 30hr battery life, premium sound quality.</div>
      <button class="product-btn">Add to Cart</button>
    </div>
  </div>
</body>
</html>`,
    },
    "Profile Card": {
      label: "Profile Card",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    min-height: 100vh; background: #060d1a;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Segoe UI', sans-serif;
  }
  .profile-card {
    background: #07101f;
    border: 1px solid #0f2744;
    border-radius: 20px;
    width: 320px;
    text-align: center;
    padding: 30px;
  }
  .profile-img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: linear-gradient(135deg, #38bdf8, #6366f1);
    margin: 0 auto 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
  }
  .profile-name {
    color: white;
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 5px;
  }
  .profile-title {
    color: #38bdf8;
    font-size: 13px;
    margin-bottom: 15px;
  }
  .profile-bio {
    color: #8a96a8;
    font-size: 12px;
    line-height: 1.6;
    margin-bottom: 20px;
  }
  .social-links {
    display: flex;
    justify-content: center;
    gap: 15px;
  }
  .social-icon {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: #0f2744;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #8a96a8;
    cursor: pointer;
    transition: all 0.2s;
  }
  .social-icon:hover {
    background: #38bdf8;
    color: #060d1a;
  }
</style>
</head>
<body>
  <div class="profile-card">
    <div class="profile-img">👨‍💻</div>
    <div class="profile-name">Keyur Sanglikar</div>
    <div class="profile-title">Full Stack Developer</div>
    <div class="profile-bio">Building amazing web experiences with React, Node.js, and modern technologies.</div>
    <div class="social-links">
      <div class="social-icon">🐦</div>
      <div class="social-icon">💼</div>
      <div class="social-icon">📧</div>
    </div>
  </div>
</body>
</html>`,
    },
    "Blog Post Card": {
      label: "Blog Post Card",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    min-height: 100vh; background: #060d1a;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Segoe UI', sans-serif;
  }
  .blog-card {
    background: #07101f;
    border: 1px solid #0f2744;
    border-radius: 20px;
    width: 350px;
    overflow: hidden;
  }
  .blog-image {
    height: 180px;
    background: linear-gradient(135deg, #38bdf8, #6366f1);
    position: relative;
  }
  .blog-category {
    position: absolute;
    top: 15px;
    left: 15px;
    background: rgba(0,0,0,0.6);
    backdrop-filter: blur(5px);
    padding: 4px 12px;
    border-radius: 20px;
    color: white;
    font-size: 10px;
    letter-spacing: 1px;
  }
  .blog-content {
    padding: 20px;
  }
  .blog-title {
    color: white;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
    line-height: 1.4;
  }
  .blog-meta {
    display: flex;
    gap: 15px;
    color: #3a4a60;
    font-size: 11px;
    margin-bottom: 12px;
  }
  .blog-excerpt {
    color: #8a96a8;
    font-size: 12px;
    line-height: 1.6;
    margin-bottom: 15px;
  }
  .read-more {
    color: #38bdf8;
    font-size: 12px;
    text-decoration: none;
    font-weight: 600;
  }
</style>
</head>
<body>
  <div class="blog-card">
    <div class="blog-image">
      <span class="blog-category">TECHNOLOGY</span>
    </div>
    <div class="blog-content">
      <div class="blog-title">The Future of Web Development in 2025</div>
      <div class="blog-meta">
        <span>📅 Jan 15, 2025</span>
        <span>⏱️ 5 min read</span>
      </div>
      <div class="blog-excerpt">Explore the latest trends in web development including AI integration, WebAssembly, and edge computing...</div>
      <a href="#" class="read-more">Read More →</a>
    </div>
  </div>
</body>
</html>`,
    },
    "Testimonial Card": {
      label: "Testimonial Card",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    min-height: 100vh; background: #060d1a;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Segoe UI', sans-serif;
  }
  .testimonial-card {
    background: #07101f;
    border: 1px solid #0f2744;
    border-radius: 20px;
    padding: 30px;
    width: 350px;
    position: relative;
  }
  .quote-icon {
    font-size: 50px;
    color: #0f2744;
    position: absolute;
    top: 20px;
    left: 20px;
  }
  .testimonial-text {
    color: #8a96a8;
    font-size: 14px;
    line-height: 1.7;
    margin: 30px 0 20px;
    position: relative;
    z-index: 1;
  }
  .testimonial-author {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .author-avatar {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: linear-gradient(135deg, #38bdf8, #6366f1);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .author-info h4 {
    color: white;
    font-size: 14px;
    margin-bottom: 3px;
  }
  .author-info p {
    color: #3a4a60;
    font-size: 11px;
  }
  .rating {
    color: #fbbf24;
    font-size: 12px;
    margin-top: 5px;
  }
</style>
</head>
<body>
  <div class="testimonial-card">
    <div class="quote-icon">"</div>
    <div class="testimonial-text">"Keyur delivered an exceptional product ahead of schedule. His attention to detail and technical expertise made the entire process seamless."</div>
    <div class="testimonial-author">
      <div class="author-avatar">JD</div>
      <div class="author-info">
        <h4>John Doe</h4>
        <p>CTO, TechCorp</p>
        <div class="rating">★★★★★</div>
      </div>
    </div>
  </div>
</body>
</html>`,
    },
    "Feature Card": {
      label: "Feature Card",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    min-height: 100vh; background: #060d1a;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Segoe UI', sans-serif;
  }
  .features-grid {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }
  .feature-card {
    background: #07101f;
    border: 1px solid #0f2744;
    border-radius: 16px;
    padding: 24px;
    width: 220px;
    text-align: center;
    transition: all 0.3s;
  }
  .feature-card:hover {
    transform: translateY(-5px);
    border-color: #38bdf840;
  }
  .feature-icon {
    font-size: 40px;
    margin-bottom: 15px;
  }
  .feature-title {
    color: white;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  .feature-desc {
    color: #8a96a8;
    font-size: 12px;
    line-height: 1.5;
  }
</style>
</head>
<body>
  <div class="features-grid">
    <div class="feature-card">
      <div class="feature-icon">⚡</div>
      <div class="feature-title">Lightning Fast</div>
      <div class="feature-desc">Optimized performance with lazy loading and code splitting</div>
    </div>
    <div class="feature-card">
      <div class="feature-icon">🔒</div>
      <div class="feature-title">Secure</div>
      <div class="feature-desc">Enterprise-grade security with encrypted data transmission</div>
    </div>
    <div class="feature-card">
      <div class="feature-icon">📱</div>
      <div class="feature-title">Responsive</div>
      <div class="feature-desc">Fully responsive design that works on all devices</div>
    </div>
  </div>
</body>
</html>`,
    },
    "Pricing Card": {
      label: "Pricing Card",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    min-height: 100vh; background: #060d1a;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Segoe UI', sans-serif;
  }
  .pricing-card {
    background: #07101f;
    border: 1px solid #0f2744;
    border-radius: 20px;
    padding: 30px;
    width: 300px;
    text-align: center;
  }
  .pricing-card.popular {
    border-color: #38bdf8;
    transform: scale(1.05);
  }
  .plan-name {
    color: #38bdf8;
    font-size: 12px;
    letter-spacing: 2px;
    margin-bottom: 15px;
  }
  .price {
    font-size: 48px;
    color: white;
    font-weight: 700;
    margin-bottom: 5px;
  }
  .price span {
    font-size: 16px;
    color: #8a96a8;
  }
  .description {
    color: #8a96a8;
    font-size: 12px;
    margin-bottom: 20px;
  }
  .features {
    list-style: none;
    margin-bottom: 25px;
  }
  .features li {
    color: #8a96a8;
    font-size: 12px;
    padding: 8px 0;
    border-bottom: 1px solid #0f2744;
  }
  .pricing-btn {
    width: 100%;
    padding: 12px;
    background: transparent;
    border: 1px solid #0f2744;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    transition: all 0.2s;
  }
  .pricing-btn:hover {
    background: #38bdf8;
    color: #060d1a;
    border-color: #38bdf8;
  }
  .popular .pricing-btn {
    background: #38bdf8;
    color: #060d1a;
  }
</style>
</head>
<body>
  <div class="pricing-card popular">
    <div class="plan-name">PROFESSIONAL</div>
    <div class="price">$49<span>/month</span></div>
    <div class="description">Perfect for growing businesses</div>
    <ul class="features">
      <li>✓ Unlimited Projects</li>
      <li>✓ Priority Support</li>
      <li>✓ Advanced Analytics</li>
      <li>✓ Custom Domain</li>
    </ul>
    <button class="pricing-btn">Get Started</button>
  </div>
</body>
</html>`,
    },
  },

  // ==================== BUTTONS & INTERACTIVE ====================
  Buttons: {
    "Neon Button": {
      label: "Neon Button",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    min-height: 100vh; background: #060d1a;
    display: flex; align-items: center; justify-content: center; gap: 20px; flex-wrap: wrap;
    font-family: 'Space Mono', monospace;
  }
  .btn {
    padding: 14px 32px; border-radius: 50px; font-size: 13px;
    letter-spacing: 2px; text-transform: uppercase; cursor: pointer;
    border: none; transition: all 0.3s; font-family: inherit;
  }
  .btn-cyan {
    background: transparent; color: #38bdf8;
    border: 2px solid #38bdf8;
    box-shadow: 0 0 15px #38bdf840, inset 0 0 15px #38bdf810;
  }
  .btn-cyan:hover {
    background: #38bdf8; color: #060d1a;
    box-shadow: 0 0 35px #38bdf880;
  }
  .btn-purple {
    background: transparent; color: #a78bfa;
    border: 2px solid #a78bfa;
    box-shadow: 0 0 15px #a78bfa40, inset 0 0 15px #a78bfa10;
  }
  .btn-purple:hover {
    background: #a78bfa; color: #060d1a;
    box-shadow: 0 0 35px #a78bfa80;
  }
  .btn-pink {
    background: transparent; color: #f472b6;
    border: 2px solid #f472b6;
    box-shadow: 0 0 15px #f472b640, inset 0 0 15px #f472b610;
  }
  .btn-pink:hover {
    background: #f472b6; color: #060d1a;
    box-shadow: 0 0 35px #f472b680;
  }
</style>
</head>
<body>
  <button class="btn btn-cyan">Explore</button>
  <button class="btn btn-purple">Projects</button>
  <button class="btn btn-pink">Contact</button>
</body>
</html>`,
    },
    "Gradient Button": {
      label: "Gradient Button",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    min-height: 100vh; background: #060d1a;
    display: flex; align-items: center; justify-content: center;
    gap: 20px;
    font-family: 'Segoe UI', sans-serif;
  }
  .gradient-btn {
    padding: 14px 32px;
    border: none;
    border-radius: 50px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    background: linear-gradient(90deg, #38bdf8, #6366f1, #ec4899);
    background-size: 200% auto;
    color: white;
    transition: 0.5s;
  }
  .gradient-btn:hover {
    background-position: right center;
    transform: scale(1.05);
  }
  .outline-grad {
    background: transparent;
    border: 2px solid transparent;
    background-clip: padding-box;
    position: relative;
  }
  .outline-grad::before {
    content: '';
    position: absolute;
    top: -2px; left: -2px; right: -2px; bottom: -2px;
    background: linear-gradient(90deg, #38bdf8, #6366f1, #ec4899);
    border-radius: 50px;
    z-index: -1;
  }
</style>
</head>
<body>
  <button class="gradient-btn">Gradient Button</button>
  <button class="gradient-btn outline-grad">Outline Gradient</button>
</body>
</html>`,
    },
    "3D Button": {
      label: "3D Button",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    min-height: 100vh; background: #060d1a;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Segoe UI', sans-serif;
  }
  .btn-3d {
    padding: 15px 35px;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    background: #38bdf8;
    color: #060d1a;
    cursor: pointer;
    box-shadow: 0 8px 0 #0f2744;
    transition: all 0.1s ease;
  }
  .btn-3d:active {
    transform: translateY(4px);
    box-shadow: 0 4px 0 #0f2744;
  }
</style>
</head>
<body>
  <button class="btn-3d">Click Me</button>
</body>
</html>`,
    },
    "Social Login Buttons": {
      label: "Social Login Buttons",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    min-height: 100vh; background: #060d1a;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Segoe UI', sans-serif;
  }
  .social-buttons {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 250px;
  }
  .social-btn {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 20px;
    border: 1px solid #0f2744;
    border-radius: 10px;
    background: #07101f;
    color: white;
    cursor: pointer;
    transition: all 0.2s;
  }
  .social-btn:hover {
    border-color: #38bdf8;
    background: #0f2744;
  }
  .google:hover { border-color: #ea4335; }
  .github:hover { border-color: #ffffff; }
  .twitter:hover { border-color: #1da1f2; }
</style>
</head>
<body>
  <div class="social-buttons">
    <button class="social-btn google">🔴 Continue with Google</button>
    <button class="social-btn github">🐙 Continue with GitHub</button>
    <button class="social-btn twitter">🐦 Continue with Twitter</button>
  </div>
</body>
</html>`,
    },
    "Animated Hamburger": {
      label: "Animated Hamburger",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    min-height: 100vh; background: #060d1a;
    display: flex; align-items: center; justify-content: center;
  }
  .hamburger {
    width: 40px;
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
  }
  .hamburger span {
    width: 100%;
    height: 3px;
    background: #38bdf8;
    transition: all 0.3s ease;
  }
  .hamburger.active span:nth-child(1) {
    transform: rotate(45deg) translate(9px, 9px);
  }
  .hamburger.active span:nth-child(2) {
    opacity: 0;
  }
  .hamburger.active span:nth-child(3) {
    transform: rotate(-45deg) translate(9px, -9px);
  }
</style>
</head>
<body>
  <div class="hamburger" onclick="this.classList.toggle('active')">
    <span></span>
    <span></span>
    <span></span>
  </div>
</body>
</html>`,
    },
    "Ripple Button": {
      label: "Ripple Button",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    min-height: 100vh; background: #060d1a;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Segoe UI', sans-serif;
  }
  .ripple-btn {
    position: relative;
    padding: 14px 32px;
    background: #38bdf8;
    border: none;
    border-radius: 50px;
    color: #060d1a;
    font-weight: 600;
    cursor: pointer;
    overflow: hidden;
  }
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255,255,255,0.6);
    transform: scale(0);
    animation: ripple-animation 0.6s linear;
    pointer-events: none;
  }
  @keyframes ripple-animation {
    to { transform: scale(4); opacity: 0; }
  }
</style>
</head>
<body>
  <button class="ripple-btn" id="rippleBtn">Click Me</button>
  <script>
    document.getElementById('rippleBtn').addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = (e.clientX - rect.left - size/2) + 'px';
      ripple.style.top = (e.clientY - rect.top - size/2) + 'px';
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  </script>
</body>
</html>`,
    },
    "Toggle Switch": {
      label: "Toggle Switch",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    min-height: 100vh; background: #060d1a;
    display: flex; align-items: center; justify-content: center;
  }
  .toggle-switch {
    position: relative;
    width: 60px;
    height: 30px;
  }
  .toggle-switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #0f2744;
    transition: 0.4s;
    border-radius: 34px;
  }
  .slider:before {
    position: absolute;
    content: "";
    height: 22px;
    width: 22px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
  input:checked + .slider {
    background-color: #38bdf8;
  }
  input:checked + .slider:before {
    transform: translateX(30px);
  }
</style>
</head>
<body>
  <label class="toggle-switch">
    <input type="checkbox">
    <span class="slider"></span>
  </label>
</body>
</html>`,
    },
  },

  // ==================== FORMS & INPUTS ====================
  Forms: {
    "Modern Login Form": {
      label: "Modern Login Form",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    min-height: 100vh; background: #060d1a;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Segoe UI', sans-serif;
  }
  .login-form {
    background: #07101f;
    border: 1px solid #0f2744;
    border-radius: 20px;
    padding: 40px;
    width: 350px;
  }
  .form-title {
    color: white;
    font-size: 24px;
    margin-bottom: 30px;
    text-align: center;
  }
  .input-group {
    margin-bottom: 20px;
  }
  .input-group label {
    display: block;
    color: #8a96a8;
    font-size: 12px;
    margin-bottom: 8px;
  }
  .input-group input {
    width: 100%;
    padding: 12px;
    background: #060d1a;
    border: 1px solid #0f2744;
    border-radius: 8px;
    color: white;
    outline: none;
    transition: border-color 0.2s;
  }
  .input-group input:focus {
    border-color: #38bdf8;
  }
  .login-btn {
    width: 100%;
    padding: 12px;
    background: #38bdf8;
    border: none;
    border-radius: 8px;
    color: #060d1a;
    font-weight: 600;
    cursor: pointer;
    margin-top: 10px;
  }
  .form-footer {
    text-align: center;
    margin-top: 20px;
    color: #8a96a8;
    font-size: 12px;
  }
  .form-footer a {
    color: #38bdf8;
    text-decoration: none;
  }
</style>
</head>
<body>
  <div class="login-form">
    <div class="form-title">Welcome Back</div>
    <div class="input-group">
      <label>Email</label>
      <input type="email" placeholder="you@example.com">
    </div>
    <div class="input-group">
      <label>Password</label>
      <input type="password" placeholder="••••••••">
    </div>
    <button class="login-btn">Sign In</button>
    <div class="form-footer">
      Don't have an account? <a href="#">Sign up</a>
    </div>
  </div>
</body>
</html>`,
    },
    "Contact Form": {
      label: "Contact Form",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    min-height: 100vh; background: #060d1a;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Segoe UI', sans-serif;
  }
  .contact-form {
    background: #07101f;
    border: 1px solid #0f2744;
    border-radius: 20px;
    padding: 40px;
    width: 400px;
  }
  .contact-form h2 {
    color: white;
    margin-bottom: 10px;
  }
  .contact-form p {
    color: #8a96a8;
    font-size: 13px;
    margin-bottom: 25px;
  }
  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    margin-bottom: 15px;
  }
  .form-group {
    margin-bottom: 15px;
  }
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 12px;
    background: #060d1a;
    border: 1px solid #0f2744;
    border-radius: 8px;
    color: white;
    outline: none;
  }
  .form-group textarea {
    resize: vertical;
    min-height: 100px;
  }
  .submit-btn {
    width: 100%;
    padding: 12px;
    background: #38bdf8;
    border: none;
    border-radius: 8px;
    color: #060d1a;
    font-weight: 600;
    cursor: pointer;
  }
</style>
</head>
<body>
  <div class="contact-form">
    <h2>Get in Touch</h2>
    <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
    <div class="form-row">
      <div class="form-group"><input type="text" placeholder="First Name"></div>
      <div class="form-group"><input type="text" placeholder="Last Name"></div>
    </div>
    <div class="form-group"><input type="email" placeholder="Email Address"></div>
    <div class="form-group"><input type="text" placeholder="Subject"></div>
    <div class="form-group"><textarea placeholder="Your Message"></textarea></div>
    <button class="submit-btn">Send Message</button>
  </div>
</body>
</html>`,
    },
    "Search Bar": {
      label: "Search Bar",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    min-height: 100vh; background: #060d1a;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Segoe UI', sans-serif;
  }
  .search-container {
    position: relative;
    width: 300px;
  }
  .search-input {
    width: 100%;
    padding: 14px 20px;
    background: #07101f;
    border: 1px solid #0f2744;
    border-radius: 50px;
    color: white;
    font-size: 14px;
    outline: none;
    transition: all 0.3s;
  }
  .search-input:focus {
    border-color: #38bdf8;
    box-shadow: 0 0 15px rgba(56,189,248,0.2);
  }
  .search-icon {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #3a4a60;
    cursor: pointer;
  }
</style>
</head>
<body>
  <div class="search-container">
    <input type="text" class="search-input" placeholder="Search...">
    <span class="search-icon">🔍</span>
  </div>
</body>
</html>`,
    },
    "Newsletter Signup": {
      label: "Newsletter Signup",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    min-height: 100vh; background: #060d1a;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Segoe UI', sans-serif;
  }
  .newsletter {
    background: linear-gradient(135deg, #07101f, #0a1a2f);
    border: 1px solid #0f2744;
    border-radius: 20px;
    padding: 40px;
    text-align: center;
    width: 400px;
  }
  .newsletter h3 {
    color: white;
    font-size: 24px;
    margin-bottom: 10px;
  }
  .newsletter p {
    color: #8a96a8;
    font-size: 13px;
    margin-bottom: 25px;
  }
  .newsletter-form {
    display: flex;
    gap: 10px;
  }
  .newsletter-form input {
    flex: 1;
    padding: 12px;
    background: #060d1a;
    border: 1px solid #0f2744;
    border-radius: 10px;
    color: white;
    outline: none;
  }
  .newsletter-form button {
    padding: 12px 24px;
    background: #38bdf8;
    border: none;
    border-radius: 10px;
    color: #060d1a;
    font-weight: 600;
    cursor: pointer;
  }
</style>
</head>
<body>
  <div class="newsletter">
    <h3>Subscribe to Newsletter</h3>
    <p>Get the latest updates and exclusive offers delivered to your inbox.</p>
    <div class="newsletter-form">
      <input type="email" placeholder="Your email address">
      <button>Subscribe</button>
    </div>
  </div>
</body>
</html>`,
    },
    "Rating Stars": {
      label: "Rating Stars",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    min-height: 100vh; background: #060d1a;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Segoe UI', sans-serif;
  }
  .rating {
    display: flex;
    gap: 10px;
    direction: rtl;
  }
  .rating input {
    display: none;
  }
  .rating label {
    font-size: 40px;
    color: #0f2744;
    cursor: pointer;
    transition: color 0.2s;
  }
  .rating label:hover,
  .rating label:hover ~ label,
  .rating input:checked ~ label {
    color: #fbbf24;
  }
</style>
</head>
<body>
  <div class="rating">
    <input type="radio" name="star" id="star5"><label for="star5">★</label>
    <input type="radio" name="star" id="star4"><label for="star4">★</label>
    <input type="radio" name="star" id="star3"><label for="star3">★</label>
    <input type="radio" name="star" id="star2"><label for="star2">★</label>
    <input type="radio" name="star" id="star1"><label for="star1">★</label>
  </div>
</body>
</html>`,
    },
    "Floating Label Input": {
      label: "Floating Label Input",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    min-height: 100vh; background: #060d1a;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Segoe UI', sans-serif;
  }
  .floating-group {
    position: relative;
    width: 280px;
  }
  .floating-group input {
    width: 100%;
    padding: 20px 12px 8px;
    background: #07101f;
    border: 1px solid #0f2744;
    border-radius: 8px;
    color: white;
    outline: none;
  }
  .floating-group label {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #8a96a8;
    transition: all 0.2s;
    pointer-events: none;
  }
  .floating-group input:focus ~ label,
  .floating-group input:not(:placeholder-shown) ~ label {
    top: 10px;
    font-size: 10px;
    color: #38bdf8;
  }
</style>
</head>
<body>
  <div class="floating-group">
    <input type="text" placeholder=" ">
    <label>Username</label>
  </div>
</body>
</html>`,
    },
  },

  // ==================== ANIMATIONS & EFFECTS ====================
  Animations: {
    "Animated Gradient Text": {
      label: "Animated Gradient Text",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; }
  body {
    min-height: 100vh; background: #060d1a;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center; gap: 16px;
    font-family: 'Segoe UI', sans-serif;
  }
  .grad-text {
    font-size: 52px; font-weight: 900; letter-spacing: -2px;
    background: linear-gradient(90deg, #38bdf8, #6366f1, #ec4899, #38bdf8);
    background-size: 300% 100%;
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    animation: slide 4s linear infinite;
  }
  @keyframes slide { 0%{background-position:0%} 100%{background-position:300%} }
</style>
</head>
<body>
  <div class="grad-text">Full Stack Dev</div>
</body>
</html>`,
    },
    "Floating Animation": {
      label: "Floating Animation",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    min-height: 100vh; background: #060d1a;
    display: flex; align-items: center; justify-content: center; gap: 32px;
  }
  .shape {
    border-radius: 50%;
    animation: float 3s ease-in-out infinite;
  }
  .s1 { width: 80px; height: 80px; background: #38bdf8; animation-delay: 0s; }
  .s2 { width: 60px; height: 60px; background: #6366f1; animation-delay: .5s; border-radius: 16px; }
  .s3 { width: 70px; height: 70px; background: #ec4899; animation-delay: 1s; border-radius: 12px; }
  @keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-30px) rotate(15deg); }
  }
</style>
</head>
<body>
  <div class="shape s1"></div>
  <div class="shape s2"></div>
  <div class="shape s3"></div>
</body>
</html>`,
    },
    "Typewriter Effect": {
      label: "Typewriter Effect",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; }
  body {
    min-height: 100vh; background: #060d1a;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Space Mono', monospace;
  }
  .wrap { display: flex; align-items: center; gap: 4px; }
  .label { color: #3a4a60; font-size: 14px; margin-right: 12px; }
  .typed { color: #38bdf8; font-size: 22px; font-weight: 700; }
  .cursor {
    width: 2px; height: 28px; background: #38bdf8;
    animation: blink 1s step-end infinite;
  }
  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
</style>
</head>
<body>
  <div class="wrap">
    <span class="label">I am a</span>
    <span class="typed" id="typed"></span>
    <span class="cursor"></span>
  </div>
  <script>
    const words = ['Full Stack Dev', 'MERN Developer', 'Java Developer', 'Problem Solver'];
    let wi=0, ci=0, del=false;
    function type(){
      const w=words[wi];
      if(!del && ci<=w.length){
        document.getElementById('typed').textContent=w.slice(0,ci++);
        setTimeout(type,90);
      } else if(!del && ci>w.length){
        setTimeout(()=>{del=true;type();},1800);
      } else if(del && ci>0){
        document.getElementById('typed').textContent=w.slice(0,--ci);
        setTimeout(type,45);
      } else {
        del=false; wi=(wi+1)%words.length; setTimeout(type,300);
      }
    }
    type();
  </script>
</body>
</html>`,
    },
    "Loading Spinner": {
      label: "Loading Spinner",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; }
  body {
    min-height: 100vh; background: #060d1a;
    display: flex; align-items: center; justify-content: center;
  }
  .spinner {
    width: 50px;
    height: 50px;
    border: 3px solid #0f2744;
    border-top-color: #38bdf8;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
</style>
</head>
<body>
  <div class="spinner"></div>
</body>
</html>`,
    },
    "Pulse Animation": {
      label: "Pulse Animation",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; }
  body {
    min-height: 100vh; background: #060d1a;
    display: flex; align-items: center; justify-content: center;
  }
  .pulse {
    width: 80px;
    height: 80px;
    background: #38bdf8;
    border-radius: 50%;
    animation: pulse 2s infinite;
  }
  @keyframes pulse {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.3); opacity: 0.5; }
    100% { transform: scale(1); opacity: 1; }
  }
</style>
</head>
<body>
  <div class="pulse"></div>
</body>
</html>`,
    },
    "Shimmer Effect": {
      label: "Shimmer Effect",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; }
  body {
    min-height: 100vh; background: #060d1a;
    display: flex; align-items: center; justify-content: center;
  }
  .shimmer {
    width: 300px;
    height: 100px;
    background: linear-gradient(90deg, #0f2744 25%, #1e3a5f 50%, #0f2744 75%);
    background-size: 200% 100%;
    animation: shimmer 2s infinite;
  }
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
</style>
</head>
<body>
  <div class="shimmer"></div>
</body>
</html>`,
    },
    "Rotating Card": {
      label: "Rotating Card",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    min-height: 100vh; background: #060d1a;
    display: flex; align-items: center; justify-content: center;
    perspective: 1000px;
  }
  .card-container {
    width: 300px;
    height: 200px;
    position: relative;
    cursor: pointer;
  }
  .card-front, .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.6s;
  }
  .card-front {
    background: #07101f;
    border: 1px solid #0f2744;
    color: white;
  }
  .card-back {
    background: #38bdf8;
    color: #060d1a;
    transform: rotateY(180deg);
  }
  .card-container:hover .card-front {
    transform: rotateY(180deg);
  }
  .card-container:hover .card-back {
    transform: rotateY(360deg);
  }
</style>
</head>
<body>
  <div class="card-container">
    <div class="card-front">Hover me</div>
    <div class="card-back">Hello!</div>
  </div>
</body>
</html>`,
    },
  },

  // ==================== NAVIGATION & MENUS ====================
  Navigation: {
    "Responsive Navbar": {
      label: "Responsive Navbar",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    background: #060d1a;
    font-family: 'Segoe UI', sans-serif;
  }
  .navbar {
    background: #07101f;
    border-bottom: 1px solid #0f2744;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    color: #38bdf8;
    font-size: 24px;
    font-weight: bold;
  }
  .nav-links {
    display: flex;
    gap: 2rem;
  }
  .nav-links a {
    color: #8a96a8;
    text-decoration: none;
    transition: color 0.2s;
  }
  .nav-links a:hover {
    color: #38bdf8;
  }
  .mobile-menu {
    display: none;
    font-size: 24px;
    color: white;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    .nav-links {
      display: none;
      position: absolute;
      top: 60px;
      left: 0;
      right: 0;
      background: #07101f;
      flex-direction: column;
      text-align: center;
      padding: 1rem;
      gap: 1rem;
      border-bottom: 1px solid #0f2744;
    }
    .nav-links.active {
      display: flex;
    }
    .mobile-menu {
      display: block;
    }
  }
</style>
</head>
<body>
  <nav class="navbar">
    <div class="logo">Logo</div>
    <div class="nav-links" id="navLinks">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Contact</a>
    </div>
    <div class="mobile-menu" onclick="toggleMenu()">☰</div>
  </nav>
  <script>
    function toggleMenu() {
      document.getElementById('navLinks').classList.toggle('active');
    }
  </script>
</body>
</html>`,
    },
    "Breadcrumb": {
      label: "Breadcrumb",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    min-height: 100vh; background: #060d1a;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Segoe UI', sans-serif;
  }
  .breadcrumb {
    display: flex;
    gap: 8px;
    background: #07101f;
    padding: 12px 20px;
    border-radius: 10px;
    border: 1px solid #0f2744;
  }
  .breadcrumb-item {
    color: #8a96a8;
    text-decoration: none;
    font-size: 14px;
  }
  .breadcrumb-item.active {
    color: #38bdf8;
  }
  .separator {
    color: #3a4a60;
  }
</style>
</head>
<body>
  <div class="breadcrumb">
    <a href="#" class="breadcrumb-item">Home</a>
    <span class="separator">/</span>
    <a href="#" class="breadcrumb-item">Products</a>
    <span class="separator">/</span>
    <span class="breadcrumb-item active">Electronics</span>
  </div>
</body>
</html>`,
    },
    "Sidebar Menu": {
      label: "Sidebar Menu",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    background: #060d1a;
    font-family: 'Segoe UI', sans-serif;
    display: flex;
  }
  .sidebar {
    width: 250px;
    height: 100vh;
    background: #07101f;
    border-right: 1px solid #0f2744;
    padding: 20px;
  }
  .sidebar-item {
    padding: 12px;
    color: #8a96a8;
    cursor: pointer;
    border-radius: 8px;
    margin-bottom: 5px;
    transition: all 0.2s;
  }
  .sidebar-item:hover {
    background: #0f2744;
    color: #38bdf8;
  }
  .main-content {
    flex: 1;
    padding: 40px;
    color: white;
  }
</style>
</head>
<body>
  <div class="sidebar">
    <div class="sidebar-item">🏠 Dashboard</div>
    <div class="sidebar-item">📊 Analytics</div>
    <div class="sidebar-item">⚙️ Settings</div>
    <div class="sidebar-item">👤 Profile</div>
  </div>
  <div class="main-content">
    <h1>Main Content Area</h1>
  </div>
</body>
</html>`,
    },
    "Pagination": {
      label: "Pagination",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    min-height: 100vh; background: #060d1a;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Segoe UI', sans-serif;
  }
  .pagination {
    display: flex;
    gap: 8px;
  }
  .page-item {
    padding: 8px 14px;
    background: #07101f;
    border: 1px solid #0f2744;
    border-radius: 8px;
    color: #8a96a8;
    cursor: pointer;
    transition: all 0.2s;
  }
  .page-item:hover {
    border-color: #38bdf8;
    color: #38bdf8;
  }
  .page-item.active {
    background: #38bdf8;
    color: #060d1a;
    border-color: #38bdf8;
  }
</style>
</head>
<body>
  <div class="pagination">
    <div class="page-item">«</div>
    <div class="page-item active">1</div>
    <div class="page-item">2</div>
    <div class="page-item">3</div>
    <div class="page-item">4</div>
    <div class="page-item">»</div>
  </div>
</body>
</html>`,
    },
    "Tabs Component": {
      label: "Tabs Component",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    min-height: 100vh; background: #060d1a;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Segoe UI', sans-serif;
  }
  .tabs {
    width: 400px;
    background: #07101f;
    border: 1px solid #0f2744;
    border-radius: 12px;
    overflow: hidden;
  }
  .tab-headers {
    display: flex;
    border-bottom: 1px solid #0f2744;
  }
  .tab-btn {
    flex: 1;
    padding: 12px;
    background: transparent;
    border: none;
    color: #8a96a8;
    cursor: pointer;
    transition: all 0.2s;
  }
  .tab-btn.active {
    color: #38bdf8;
    border-bottom: 2px solid #38bdf8;
  }
  .tab-content {
    padding: 20px;
    color: white;
  }
  .tab-pane {
    display: none;
  }
  .tab-pane.active {
    display: block;
  }
</style>
</head>
<body>
  <div class="tabs">
    <div class="tab-headers">
      <button class="tab-btn active" onclick="switchTab(0)">Tab 1</button>
      <button class="tab-btn" onclick="switchTab(1)">Tab 2</button>
      <button class="tab-btn" onclick="switchTab(2)">Tab 3</button>
    </div>
    <div class="tab-content">
      <div class="tab-pane active">Content for Tab 1</div>
      <div class="tab-pane">Content for Tab 2</div>
      <div class="tab-pane">Content for Tab 3</div>
    </div>
  </div>
  <script>
    function switchTab(index) {
      const btns = document.querySelectorAll('.tab-btn');
      const panes = document.querySelectorAll('.tab-pane');
      btns.forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
      });
      panes.forEach((pane, i) => {
        pane.classList.toggle('active', i === index);
      });
    }
  </script>
</body>
</html>`,
    },
    "Dropdown Menu": {
      label: "Dropdown Menu",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    min-height: 100vh; background: #060d1a;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Segoe UI', sans-serif;
  }
  .dropdown {
    position: relative;
    display: inline-block;
  }
  .dropdown-btn {
    padding: 12px 24px;
    background: #07101f;
    border: 1px solid #0f2744;
    border-radius: 8px;
    color: white;
    cursor: pointer;
  }
  .dropdown-content {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background: #07101f;
    border: 1px solid #0f2744;
    border-radius: 8px;
    min-width: 160px;
    margin-top: 5px;
  }
  .dropdown-content a {
    display: block;
    padding: 10px 16px;
    color: #8a96a8;
    text-decoration: none;
  }
  .dropdown-content a:hover {
    background: #0f2744;
    color: #38bdf8;
  }
  .dropdown:hover .dropdown-content {
    display: block;
  }
</style>
</head>
<body>
  <div class="dropdown">
    <button class="dropdown-btn">Menu ▼</button>
    <div class="dropdown-content">
      <a href="#">Profile</a>
      <a href="#">Settings</a>
      <a href="#">Logout</a>
    </div>
  </div>
</body>
</html>`,
    },
  },

  // ==================== MODALS & OVERLAYS ====================
  Modals: {
    "Modal Dialog": {
      label: "Modal Dialog",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    min-height: 100vh; background: #060d1a;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Segoe UI', sans-serif;
  }
  .modal-btn {
    padding: 12px 24px;
    background: #38bdf8;
    border: none;
    border-radius: 8px;
    color: #060d1a;
    font-weight: 600;
    cursor: pointer;
  }
  .modal-overlay {
    display: none;
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0,0,0,0.7);
    align-items: center;
    justify-content: center;
  }
  .modal-content {
    background: #07101f;
    border: 1px solid #0f2744;
    border-radius: 16px;
    padding: 30px;
    width: 400px;
    text-align: center;
  }
  .modal-content h3 {
    color: white;
    margin-bottom: 15px;
  }
  .modal-content p {
    color: #8a96a8;
    margin-bottom: 20px;
  }
  .close-modal {
    padding: 10px 20px;
    background: #38bdf8;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }
</style>
</head>
<body>
  <button class="modal-btn" onclick="openModal()">Open Modal</button>
  <div class="modal-overlay" id="modal">
    <div class="modal-content">
      <h3>Modal Title</h3>
      <p>This is a modal dialog. Click outside or the button to close.</p>
      <button class="close-modal" onclick="closeModal()">Close</button>
    </div>
  </div>
  <script>
    function openModal() {
      document.getElementById('modal').style.display = 'flex';
    }
    function closeModal() {
      document.getElementById('modal').style.display = 'none';
    }
    document.getElementById('modal').addEventListener('click', function(e) {
      if (e.target === this) closeModal();
    });
  </script>
</body>
</html>`,
    },
    "Toast Notification": {
      label: "Toast Notification",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    min-height: 100vh; background: #060d1a;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Segoe UI', sans-serif;
  }
  .toast-btn {
    padding: 12px 24px;
    background: #38bdf8;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }
  .toast {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #07101f;
    border: 1px solid #0f2744;
    border-radius: 8px;
    padding: 12px 20px;
    color: white;
    transform: translateX(400px);
    transition: transform 0.3s;
  }
  .toast.show {
    transform: translateX(0);
  }
</style>
</head>
<body>
  <button class="toast-btn" onclick="showToast()">Show Toast</button>
  <div class="toast" id="toast">✓ Action completed successfully!</div>
  <script>
    function showToast() {
      const toast = document.getElementById('toast');
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 3000);
    }
  </script>
</body>
</html>`,
    },
    "Tooltip": {
      label: "Tooltip",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    min-height: 100vh; background: #060d1a;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Segoe UI', sans-serif;
  }
  .tooltip-container {
    position: relative;
    display: inline-block;
  }
  .tooltip-text {
    visibility: hidden;
    background: #07101f;
    border: 1px solid #0f2744;
    color: white;
    text-align: center;
    padding: 5px 10px;
    border-radius: 6px;
    position: absolute;
    bottom: 125%;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
  }
  .tooltip-container:hover .tooltip-text {
    visibility: visible;
  }
</style>
</head>
<body>
  <div class="tooltip-container">
    <span>Hover over me</span>
    <span class="tooltip-text">Tooltip content</span>
  </div>
</body>
</html>`,
    },
  },

  // ==================== CHARTS & DATA ====================
  Charts: {
    "Progress Bar": {
      label: "Progress Bar",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    min-height: 100vh; background: #060d1a;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Segoe UI', sans-serif;
  }
  .progress-container {
    width: 300px;
  }
  .progress-label {
    display: flex;
    justify-content: space-between;
    color: white;
    margin-bottom: 8px;
  }
  .progress-bar {
    width: 100%;
    height: 8px;
    background: #0f2744;
    border-radius: 10px;
    overflow: hidden;
  }
  .progress-fill {
    width: 0%;
    height: 100%;
    background: linear-gradient(90deg, #38bdf8, #6366f1);
    border-radius: 10px;
    animation: fill 2s ease-out forwards;
  }
  @keyframes fill {
    to { width: 75%; }
  }
</style>
</head>
<body>
  <div class="progress-container">
    <div class="progress-label">
      <span>Progress</span>
      <span>75%</span>
    </div>
    <div class="progress-bar">
      <div class="progress-fill"></div>
    </div>
  </div>
</body>
</html>`,
    },
    "Skill Bars": {
      label: "Skill Bars",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { background: #060d1a; padding: 40px; font-family: 'Segoe UI', sans-serif; }
  h3 { color: #38bdf8; font-size: 12px; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 24px; }
  .skill { margin-bottom: 20px; }
  .skill-header { display: flex; justify-content: space-between; margin-bottom: 8px; }
  .skill-name { color: white; font-size: 13px; }
  .skill-pct { color: #38bdf8; font-size: 12px; font-family: monospace; }
  .bar { height: 6px; background: #0f2744; border-radius: 100px; overflow: hidden; }
  .fill {
    height: 100%; border-radius: 100px;
    background: linear-gradient(90deg, #38bdf8, #6366f1);
    width: 0; transition: width 1.2s cubic-bezier(.4,0,.2,1);
  }
</style>
</head>
<body>
  <h3>Tech Skills</h3>
  <div id="skills"></div>
  <script>
    const data = [
      {name:'React.js',pct:90},{name:'Node.js',pct:85},
      {name:'Java',pct:80},{name:'Python',pct:75}
    ];
    const c=document.getElementById('skills');
    data.forEach(s=>{
      c.innerHTML+=\`<div class="skill">
        <div class="skill-header"><span class="skill-name">\${s.name}</span><span class="skill-pct">\${s.pct}%</span></div>
        <div class="bar"><div class="fill" data-pct="\${s.pct}"></div></div>
      </div>\`;
    });
    setTimeout(()=>{
      document.querySelectorAll('.fill').forEach(f=>f.style.width=f.dataset.pct+'%');
    },200);
  </script>
</body>
</html>`,
    },
    "Simple Bar Chart": {
      label: "Simple Bar Chart",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    min-height: 100vh; background: #060d1a;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Segoe UI', sans-serif;
  }
  .chart {
    display: flex;
    gap: 30px;
    align-items: flex-end;
    height: 300px;
    padding: 20px;
  }
  .bar {
    width: 50px;
    background: linear-gradient(to top, #38bdf8, #6366f1);
    border-radius: 8px 8px 0 0;
    transition: height 1s;
    animation: grow 1s ease-out forwards;
  }
  @keyframes grow {
    from { height: 0; }
    to { height: var(--height); }
  }
</style>
</head>
<body>
  <div class="chart">
    <div class="bar" style="--height: 200px"></div>
    <div class="bar" style="--height: 150px"></div>
    <div class="bar" style="--height: 250px"></div>
    <div class="bar" style="--height: 180px"></div>
  </div>
</body>
</html>`,
    },
  },

  // ==================== HERO SECTIONS ====================
  Hero: {
    "Dark Hero Section": {
      label: "Dark Hero Section",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    min-height: 100vh; background: #060d1a;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Segoe UI', sans-serif; padding: 40px;
  }
  .hero { max-width: 560px; }
  .chip {
    display: inline-flex; align-items: center; gap: 8px;
    background: #38bdf812; border: 1px solid #38bdf828;
    color: #38bdf8; font-size: 11px; letter-spacing: 2px;
    text-transform: uppercase; padding: 5px 14px; border-radius: 100px;
    margin-bottom: 24px;
  }
  .dot { width: 6px; height: 6px; border-radius: 50%; background: #34d399; animation: pulse 2s infinite; }
  @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.3} }
  h1 { font-size: 56px; font-weight: 900; color: white; line-height: 1.1; margin-bottom: 16px; }
  .accent { color: transparent; -webkit-text-stroke: 2px #38bdf840; }
  p { color: #8a96a8; font-size: 15px; line-height: 1.8; margin-bottom: 28px; }
  .btns { display: flex; gap: 14px; }
  .btn-p {
    padding: 12px 28px; border-radius: 100px; background: #38bdf8;
    color: #060d1a; font-weight: 700; font-size: 13px;
    letter-spacing: 1.5px; text-transform: uppercase; border: none; cursor: pointer;
  }
  .btn-g {
    padding: 12px 28px; border-radius: 100px; background: transparent;
    color: #8a96a8; font-size: 13px; letter-spacing: 1.5px;
    text-transform: uppercase; border: 1px solid #0f2744; cursor: pointer;
  }
</style>
</head>
<body>
  <div class="hero">
    <div class="chip"><span class="dot"></span> Open to work</div>
    <h1>Keyur<br><span class="accent">Sanglikar</span></h1>
    <p>B.Tech CSE Graduate building scalable web applications with modern technologies and clean code.</p>
    <div class="btns">
      <button class="btn-p">View Projects</button>
      <button class="btn-g">Contact Me</button>
    </div>
  </div>
</body>
</html>`,
    },
    "Centered Hero": {
      label: "Centered Hero",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    min-height: 100vh; background: linear-gradient(135deg, #060d1a, #0a1a2f);
    display: flex; align-items: center; justify-content: center;
    font-family: 'Segoe UI', sans-serif; text-align: center;
  }
  .hero h1 {
    font-size: 64px;
    color: white;
    margin-bottom: 20px;
  }
  .hero p {
    color: #8a96a8;
    font-size: 18px;
    margin-bottom: 30px;
  }
  .cta-btn {
    padding: 14px 32px;
    background: #38bdf8;
    border: none;
    border-radius: 50px;
    color: #060d1a;
    font-weight: 600;
    cursor: pointer;
  }
</style>
</head>
<body>
  <div class="hero">
    <h1>Build Amazing Things</h1>
    <p>Create stunning web experiences with our modern components</p>
    <button class="cta-btn">Get Started</button>
  </div>
</body>
</html>`,
    },
  },

  // ==================== JAVASCRIPT UTILITIES ====================
  JavaScript: {
    "Live Clock": {
      label: "Live Clock",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; }
  body {
    min-height: 100vh; background: #060d1a;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center; gap: 10px;
    font-family: 'Space Mono', monospace;
  }
  #time { font-size: 56px; color: #38bdf8; letter-spacing: 4px; font-weight: 700; }
  #date { font-size: 12px; color: #3a4a60; letter-spacing: 3px; text-transform: uppercase; }
</style>
</head>
<body>
  <div id="time">00:00:00</div>
  <div id="date"></div>
  <script>
    function tick(){
      const n=new Date();
      document.getElementById('time').textContent=n.toLocaleTimeString('en-GB');
      document.getElementById('date').textContent=n.toDateString().toUpperCase();
    }
    tick(); setInterval(tick,1000);
  </script>
</body>
</html>`,
    },
    "Interactive Counter": {
      label: "Interactive Counter",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    min-height: 100vh; background: #060d1a;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Space Mono', monospace;
  }
  .wrap { text-align: center; }
  #count {
    font-size: 96px; font-weight: 900; color: #38bdf8;
    line-height: 1; margin-bottom: 28px;
  }
  .btns { display: flex; gap: 12px; justify-content: center; }
  button {
    width: 52px; height: 52px; border-radius: 50%; border: none;
    font-size: 22px; cursor: pointer;
  }
  .dec { background: #07101f; color: #38bdf8; border: 1px solid #0f2744; }
  .rst { background: #07101f; color: #3a4a60; border: 1px solid #0f2744; font-size: 14px; }
  .inc { background: #38bdf8; color: #060d1a; }
</style>
</head>
<body>
  <div class="wrap">
    <div id="count">0</div>
    <div class="btns">
      <button class="dec" onclick="change(-1)">−</button>
      <button class="rst" onclick="change(0,true)">RST</button>
      <button class="inc" onclick="change(1)">+</button>
    </div>
  </div>
  <script>
    let c=0;
    function change(d,reset){
      c=reset?0:c+d;
      document.getElementById('count').textContent=c;
    }
  </script>
</body>
</html>`,
    },
    "Todo App": {
      label: "Todo App",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { background: #060d1a; padding: 32px; font-family: 'Space Mono', monospace; min-height: 100vh; }
  h3 { color: #38bdf8; font-size: 12px; letter-spacing: 3px; margin-bottom: 20px; }
  .row { display: flex; gap: 8px; margin-bottom: 20px; }
  input {
    flex: 1; background: #07101f; border: 1px solid #0f2744;
    color: white; padding: 10px 14px; border-radius: 10px;
    font-family: inherit; font-size: 12px; outline: none;
  }
  button {
    background: #38bdf8; color: #060d1a; border: none;
    padding: 10px 18px; border-radius: 10px;
    cursor: pointer; font-weight: 700;
  }
  .item {
    display: flex; align-items: center; gap: 10px;
    padding: 10px 0; border-bottom: 1px solid #0f2744;
    font-size: 12px; color: #8a96a8; cursor: pointer;
  }
  .item.done { text-decoration: line-through; opacity: .4; }
  .del { margin-left: auto; color: #1e3a5f; cursor: pointer; }
  .del:hover { color: #ef4444; }
</style>
</head>
<body>
  <h3>TODO LIST</h3>
  <div class="row">
    <input id="inp" placeholder="add task…" onkeydown="if(event.key==='Enter')add()"/>
    <button onclick="add()">+</button>
  </div>
  <div id="list"></div>
  <script>
    let items=[];
    function add(){
      const v=document.getElementById('inp').value.trim();
      if(!v)return;
      items.push({t:v,d:false});
      document.getElementById('inp').value='';
      render();
    }
    function render(){
      document.getElementById('list').innerHTML=items.map((it,i)=>
        \`<div class="item\${it.d?' done':''}" onclick="items[\${i}].d=!items[\${i}].d;render()">
          <span>📝</span>\${it.t}
          <span class="del" onclick="event.stopPropagation();items.splice(\${i},1);render()">×</span>
        </div>\`).join('');
    }
    render();
  </script>
</body>
</html>`,
    },
    "Random Quote Generator": {
      label: "Random Quote Generator",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    min-height: 100vh; background: #060d1a;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Segoe UI', sans-serif;
  }
  .quote-box {
    background: #07101f;
    border: 1px solid #0f2744;
    border-radius: 20px;
    padding: 40px;
    width: 400px;
    text-align: center;
  }
  .quote-text {
    color: white;
    font-size: 20px;
    line-height: 1.5;
    margin-bottom: 20px;
  }
  .quote-author {
    color: #38bdf8;
    margin-bottom: 25px;
  }
  .quote-btn {
    padding: 10px 24px;
    background: #38bdf8;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }
</style>
</head>
<body>
  <div class="quote-box">
    <div class="quote-text" id="quote">"The only limit is your imagination."</div>
    <div class="quote-author" id="author">- Anonymous</div>
    <button class="quote-btn" onclick="newQuote()">New Quote</button>
  </div>
  <script>
    const quotes = [
      {text: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House"},
      {text: "First, solve the problem. Then, write the code.", author: "John Johnson"},
      {text: "Simplicity is the soul of efficiency.", author: "Austin Freeman"},
      {text: "Make it work, make it right, make it fast.", author: "Kent Beck"}
    ];
    function newQuote() {
      const random = quotes[Math.floor(Math.random() * quotes.length)];
      document.getElementById('quote').textContent = \`"\${random.text}"\`;
      document.getElementById('author').textContent = \`- \${random.author}\`;
    }
  </script>
</body>
</html>`,
    },
  },

  // ==================== REACT COMPONENTS ====================
  React: {
    "useState Counter": {
      label: "useState Counter",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<style>
  * { margin:0;padding:0;box-sizing:border-box; }
  body { min-height:100vh;background:#060d1a;display:flex;align-items:center;justify-content:center;font-family:'Segoe UI',sans-serif; }
</style>
</head>
<body>
  <div id="root"></div>
  <script type="text/babel">
    function App() {
      const [count, setCount] = React.useState(0);
      return (
        <div style={{textAlign:'center',color:'white'}}>
          <h2 style={{color:'#38bdf8',marginBottom:24}}>React Counter</h2>
          <div style={{fontSize:64,fontWeight:900,color:'#38bdf8',marginBottom:20}}>{count}</div>
          <div style={{display:'flex',gap:12,justifyContent:'center'}}>
            <button onClick={()=>setCount(c=>c-1)} style={{padding:'10px 20px',background:'#07101f',color:'#38bdf8',border:'1px solid #0f2744',borderRadius:10,cursor:'pointer'}}>−</button>
            <button onClick={()=>setCount(0)} style={{padding:'10px 16px',background:'#07101f',color:'#3a4a60',border:'1px solid #0f2744',borderRadius:10,cursor:'pointer'}}>RST</button>
            <button onClick={()=>setCount(c=>c+1)} style={{padding:'10px 20px',background:'#38bdf8',color:'#060d1a',border:'none',borderRadius:10,cursor:'pointer'}}>+</button>
          </div>
        </div>
      );
    }
    ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
  </script>
</body>
</html>`,
    },
    "useEffect Fetch": {
      label: "useEffect Fetch",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<style>
  * { margin:0;padding:0;box-sizing:border-box; }
  body { background:#060d1a;padding:28px;font-family:'Segoe UI',sans-serif; }
</style>
</head>
<body>
  <div id="root"></div>
  <script type="text/babel">
    function App() {
      const [joke, setJoke] = React.useState('');
      const [loading, setLoading] = React.useState(false);
      const fetchJoke = async () => {
        setLoading(true);
        try {
          const r = await fetch('https://official-joke-api.appspot.com/random_joke');
          const d = await r.json();
          setJoke(d.setup + ' ... ' + d.punchline);
        } catch(e) { setJoke('Failed to fetch joke'); }
        setLoading(false);
      };
      React.useEffect(()=>{ fetchJoke(); },[]);
      return (
        <div style={{maxWidth:400,margin:'0 auto',color:'white',textAlign:'center'}}>
          <div style={{fontSize:11,color:'#38bdf8',marginBottom:20}}>useEffect + Fetch Demo</div>
          <div style={{background:'#07101f',border:'1px solid #0f2744',borderRadius:16,padding:'28px 24px',marginBottom:20}}>
            <p style={{color:'#8a96a8'}}>{loading?'Fetching...':joke}</p>
          </div>
          <button onClick={fetchJoke} style={{padding:'11px 28px',background:'#38bdf8',color:'#060d1a',border:'none',borderRadius:100,cursor:'pointer'}}>
            {loading ? 'Loading…' : 'New Joke'}
          </button>
        </div>
      );
    }
    ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
  </script>
</body>
</html>`,
    },
  },

  // ==================== FOOTERS ====================
  Footers: {
    "Simple Footer": {
      label: "Simple Footer",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    min-height: 100vh; background: #060d1a;
    display: flex; flex-direction: column;
  }
  .content {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }
  .footer {
    background: #07101f;
    border-top: 1px solid #0f2744;
    padding: 30px;
    text-align: center;
  }
  .footer p {
    color: #8a96a8;
    font-size: 12px;
  }
</style>
</head>
<body>
  <div class="content"><h1>Main Content</h1></div>
  <footer class="footer">
    <p>© 2025 Keyur Sanglikar. All rights reserved.</p>
  </footer>
</body>
</html>`,
    },
  },
};

// ─── Default Code ──────────────────────────────────────────────────────────

const DEFAULT_CODE = `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    min-height: 100vh;
    background: #060d1a;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Segoe UI', sans-serif;
  }
  .card {
    background: #07101f; border: 1px solid #0f2744;
    border-radius: 20px; padding: 36px 40px;
    text-align: center; color: white;
    animation: fadeUp 0.6s ease;
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  h2 { color: #38bdf8; margin-bottom: 10px; font-size: 22px; }
  p  { color: #8a96a8; font-size: 13px; line-height: 1.7; }
  .tag {
    display: inline-block; margin-top: 16px;
    background: #38bdf812; border: 1px solid #38bdf828;
    color: #38bdf8; border-radius: 20px;
    padding: 4px 14px; font-size: 11px; letter-spacing: 1px;
  }
</style>
</head>
<body>
  <div class="card">
    <h2>Hello Developer!</h2>
    <p>Select a template from the dropdown<br>or write your own code below.</p>
    <span class="tag">READY TO CODE</span>
  </div>
</body>
</html>`;

// ─── Main Component ──────────────────────────────────────────────────────────

export default function CodePlayground() {
  const [category, setCategory] = useState("Cards");
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [code, setCode] = useState(DEFAULT_CODE);
  const [iframeKey, setIframeKey] = useState(0);
  const [autoRun, setAutoRun] = useState(false);
  const [copied, setCopied] = useState(false);
  const [fontSize, setFontSize] = useState(13);
  const [tab, setTab] = useState("editor");

  const editorRef = useRef(null);
  const autoRunTimer = useRef(null);

  const runCode = useCallback(() => setIframeKey((k) => k + 1), []);

  useEffect(() => {
    if (!autoRun) return;
    clearTimeout(autoRunTimer.current);
    autoRunTimer.current = setTimeout(runCode, 800);
    return () => clearTimeout(autoRunTimer.current);
  }, [code, autoRun, runCode]);

  const handleTemplate = (e) => {
    const key = e.target.value;
    setSelectedTemplate(key);
    if (key && TEMPLATES[category][key]) {
      setCode(TEMPLATES[category][key].code);
      setIframeKey((k) => k + 1);
    }
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
    setSelectedTemplate("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const s = e.target.selectionStart;
      const end = e.target.selectionEnd;
      const newVal = code.substring(0, s) + "  " + code.substring(end);
      setCode(newVal);
      requestAnimationFrame(() => {
        if (editorRef.current) {
          editorRef.current.selectionStart = editorRef.current.selectionEnd = s + 2;
        }
      });
    }
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  const resetCode = () => {
    setCode(DEFAULT_CODE);
    setSelectedTemplate("");
    setIframeKey((k) => k + 1);
  };

  const lineCount = code.split("\n").length;
  const lineNums = Array.from({ length: lineCount }, (_, i) => i + 1).join("\n");

  // Get all categories
  const categories = Object.keys(TEMPLATES);

  return (
    <section className="pg-section">
      <div className="pg-topbar">
        <div className="pg-dots">
          <span className="pg-dot pg-dot-r" />
          <span className="pg-dot pg-dot-y" />
          <span className="pg-dot pg-dot-g" />
        </div>
        <span className="pg-title">KEYUR.DEV — CODE PLAYGROUND</span>
        <div className="pg-topbar-right">
          <label className="pg-autorun-label">
            <input type="checkbox" checked={autoRun} onChange={(e) => setAutoRun(e.target.checked)} />
            auto-run
          </label>
        </div>
      </div>

      <div className="pg-toolbar">
        <div className="pg-toolbar-left">
          <select className="pg-select" value={category} onChange={handleCategory}>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat} ({Object.keys(TEMPLATES[cat]).length})
              </option>
            ))}
          </select>
          <select className="pg-select pg-select-template" value={selectedTemplate} onChange={handleTemplate}>
            <option value="">— choose template —</option>
            {Object.keys(TEMPLATES[category]).map((key) => (
              <option key={key} value={key}>
                {TEMPLATES[category][key].label}
              </option>
            ))}
          </select>
        </div>

        <div className="pg-toolbar-right">
          <span className="pg-fontsize-label">Font</span>
          <button className="pg-icon-btn" onClick={() => setFontSize((f) => Math.max(10, f - 1))}>A-</button>
          <button className="pg-icon-btn" onClick={() => setFontSize((f) => Math.min(18, f + 1))}>A+</button>
          <button className="pg-icon-btn" onClick={copyCode}>{copied ? "copied!" : "copy"}</button>
          <button className="pg-icon-btn" onClick={resetCode}>reset</button>
          <button className="pg-run-btn" onClick={runCode}>&#9654; Run</button>
        </div>
      </div>

      <div className="pg-mobile-tabs">
        <button className={`pg-mobile-tab ${tab === "editor" ? "active" : ""}`} onClick={() => setTab("editor")}>
          Editor
        </button>
        <button className={`pg-mobile-tab ${tab === "preview" ? "active" : ""}`} onClick={() => { setTab("preview"); runCode(); }}>
          Preview
        </button>
      </div>

      <div className="pg-body">
        <div className={`pg-editor-pane ${tab === "preview" ? "pg-hidden-mobile" : ""}`}>
          <div className="pg-editor-header">
            <span className="pg-lang-badge">index.html</span>
            <span className="pg-line-info">{lineCount} lines</span>
          </div>
          <div className="pg-editor-row">
            <div className="pg-line-nums">{lineNums}</div>
            <textarea
              ref={editorRef}
              className="pg-textarea"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              onKeyDown={handleKeyDown}
              spellCheck={false}
              style={{ fontSize: `${fontSize}px` }}
            />
          </div>
        </div>

        <div className={`pg-preview-pane ${tab === "editor" ? "pg-hidden-mobile" : ""}`}>
          <div className="pg-preview-header">
            <span className="pg-preview-dot" />
            <span className="pg-preview-label">Live Output</span>
          </div>
          <iframe key={iframeKey} className="pg-iframe" title="preview" sandbox="allow-scripts" srcDoc={code} />
        </div>
      </div>

      <div className="pg-footer">
        <span className="pg-prompt">$</span>
        <span className="pg-footer-slogan">
          Eat. Sleep. <span>Code.</span> Repeat.
        </span>
        <span className="pg-footer-right">© 2025 Keyur Sanglikar</span>
      </div>
    </section>
  );
}
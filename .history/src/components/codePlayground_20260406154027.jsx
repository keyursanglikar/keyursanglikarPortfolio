import React, { useState, useRef, useEffect, useCallback } from "react";
import "./CodePlayground.css";

// ─── Template Library (100+ components) ─────────────────────────────────────

const TEMPLATES = {
  HTML: {
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
    "Neon Button Pack": {
      label: "Neon Button Pack",
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
  .sub {
    font-size: 14px; color: #3a4a60; letter-spacing: 3px; text-transform: uppercase;
  }
  @keyframes slide { 0%{background-position:0%} 100%{background-position:300%} }
</style>
</head>
<body>
  <div class="grad-text">Full Stack Dev</div>
  <div class="sub">crafting digital experiences</div>
</body>
</html>`,
    },
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
    "3D Flip Card": {
      label: "3D Flip Card",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body {
    min-height:100vh; background:#060d1a;
    display:flex; align-items:center; justify-content:center;
    font-family:'Segoe UI',sans-serif;
  }
  .flip-card {
    width:280px; height:320px; perspective:1000px;
  }
  .flip-inner {
    position:relative; width:100%; height:100%;
    transition:transform 0.6s; transform-style:preserve-3d;
  }
  .flip-card:hover .flip-inner { transform:rotateY(180deg); }
  .front, .back {
    position:absolute; width:100%; height:100%;
    backface-visibility:hidden; border-radius:20px;
    display:flex; flex-direction:column;
    align-items:center; justify-content:center;
  }
  .front {
    background:linear-gradient(135deg,#1a1a2e,#16213e);
    border:1px solid #0f2744;
    color:white;
  }
  .front h2 { margin-top:16px; font-size:20px; }
  .back {
    background:linear-gradient(135deg,#38bdf8,#6366f1);
    transform:rotateY(180deg);
    color:#060d1a;
  }
  .back p { padding:20px; text-align:center; font-size:14px; }
  .icon { font-size:48px; }
</style>
</head>
<body>
  <div class="flip-card">
    <div class="flip-inner">
      <div class="front">
        <div class="icon">⚡</div>
        <h2>React Dev</h2>
      </div>
      <div class="back">
        <p>Building modern UIs with React, hooks, and component-driven architecture.</p>
      </div>
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
  * { margin:0; padding:0; box-sizing:border-box; }
  body {
    min-height:100vh; background:#060d1a;
    display:flex; align-items:center; justify-content:center;
    font-family:'Segoe UI',sans-serif;
  }
  .card {
    background:#07101f; border:1px solid #0f2744;
    border-radius:24px; padding:32px; width:300px;
    text-align:center; transition:transform 0.3s;
  }
  .card:hover { transform:translateY(-8px); border-color:#38bdf840; }
  .price { font-size:48px; font-weight:900; color:#38bdf8; margin:16px 0; }
  .price small { font-size:14px; color:#3a4a60; }
  h3 { color:white; font-size:20px; }
  ul { list-style:none; margin:24px 0; }
  li { color:#8a96a8; padding:8px 0; border-bottom:1px solid #0f2744; font-size:13px; }
  button {
    background:#38bdf8; border:none; padding:12px 24px;
    border-radius:100px; font-weight:700; font-size:12px;
    cursor:pointer; width:100%; text-transform:uppercase;
  }
</style>
</head>
<body>
  <div class="card">
    <h3>Pro Plan</h3>
    <div class="price">$29 <small>/month</small></div>
    <ul>
      <li>✅ Unlimited Projects</li>
      <li>✅ Priority Support</li>
      <li>✅ Advanced Analytics</li>
    </ul>
    <button>Get Started</button>
  </div>
</body>
</html>`,
    },
    "Animated Loader": {
      label: "Animated Loader",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin:0; padding:0; }
  body {
    min-height:100vh; background:#060d1a;
    display:flex; align-items:center; justify-content:center;
    gap:20px;
  }
  .loader {
    width:48px; height:48px;
    border:3px solid #0f2744;
    border-top-color:#38bdf8;
    border-radius:50%;
    animation:spin 1s linear infinite;
  }
  .loader-dots {
    display:flex; gap:8px;
  }
  .dot {
    width:12px; height:12px;
    background:#38bdf8;
    border-radius:50%;
    animation:bounce 0.6s infinite alternate;
  }
  .dot:nth-child(2) { animation-delay:0.2s; }
  .dot:nth-child(3) { animation-delay:0.4s; }
  @keyframes spin { to { transform:rotate(360deg); } }
  @keyframes bounce {
    from { transform:translateY(0); opacity:0.3; }
    to { transform:translateY(-20px); opacity:1; }
  }
</style>
</head>
<body>
  <div class="loader"></div>
  <div class="loader-dots">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
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
  * { margin:0; padding:0; box-sizing:border-box; }
  body {
    min-height:100vh; background:#060d1a;
    display:flex; align-items:center; justify-content:center;
    font-family:'Segoe UI',sans-serif;
  }
  .testimonial {
    background:#07101f; border:1px solid #0f2744;
    border-radius:20px; padding:28px; max-width:360px;
  }
  .quote {
    font-size:48px; color:#38bdf820; font-family:serif;
    margin-bottom:-20px;
  }
  p { color:#8a96a8; font-size:14px; line-height:1.7; margin:16px 0; }
  .author { display:flex; align-items:center; gap:12px; margin-top:16px; }
  .avatar {
    width:40px; height:40px; border-radius:50%;
    background:linear-gradient(135deg,#38bdf8,#6366f1);
  }
  .name { color:white; font-weight:600; font-size:14px; }
  .title { color:#3a4a60; font-size:11px; }
</style>
</head>
<body>
  <div class="testimonial">
    <div class="quote">"</div>
    <p>Amazing developer! Delivered high-quality code ahead of schedule. Will definitely work with Keyur again.</p>
    <div class="author">
      <div class="avatar"></div>
      <div><div class="name">Sarah Johnson</div><div class="title">CTO, TechStart</div></div>
    </div>
  </div>
</body>
</html>`,
    },
    "Glowing Input Group": {
      label: "Glowing Input Group",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body {
    min-height:100vh; background:#060d1a;
    display:flex; align-items:center; justify-content:center;
    font-family:'Segoe UI',sans-serif;
  }
  .group {
    position:relative; width:300px;
  }
  input {
    width:100%; padding:14px 16px;
    background:#07101f; border:2px solid #0f2744;
    border-radius:12px; color:white; font-size:14px;
    outline:none; transition:all 0.3s;
  }
  input:focus { border-color:#38bdf8; box-shadow:0 0 20px #38bdf840; }
  label {
    position:absolute; left:16px; top:14px;
    color:#3a4a60; font-size:14px;
    transition:0.2s; pointer-events:none;
  }
  input:focus ~ label,
  input:not(:placeholder-shown) ~ label {
    top:-10px; left:12px; font-size:10px;
    background:#060d1a; padding:0 6px; color:#38bdf8;
  }
</style>
</head>
<body>
  <div class="group">
    <input type="text" placeholder=" " />
    <label>Email Address</label>
  </div>
</body>
</html>`,
    },
    "Progress Steps": {
      label: "Progress Steps",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body {
    min-height:100vh; background:#060d1a;
    display:flex; align-items:center; justify-content:center;
    font-family:'Segoe UI',sans-serif;
  }
  .steps { display:flex; gap:8px; }
  .step {
    width:40px; height:40px; border-radius:50%;
    background:#07101f; border:2px solid #0f2744;
    color:#3a4a60; display:flex; align-items:center;
    justify-content:center; font-weight:700;
  }
  .step.active {
    border-color:#38bdf8; color:#38bdf8;
    box-shadow:0 0 10px #38bdf8;
  }
  .step.completed {
    background:#38bdf8; border-color:#38bdf8;
    color:#060d1a;
  }
</style>
</head>
<body>
  <div class="steps">
    <div class="step completed">✓</div>
    <div class="step active">2</div>
    <div class="step">3</div>
    <div class="step">4</div>
  </div>
</body>
</html>`,
    },
    "Notification Toast": {
      label: "Notification Toast",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body {
    min-height:100vh; background:#060d1a;
    display:flex; align-items:center; justify-content:center;
    font-family:'Segoe UI',sans-serif;
  }
  .toast {
    background:#07101f; border:1px solid #0f2744;
    border-radius:12px; padding:12px 20px;
    display:flex; align-items:center; gap:12px;
    animation:slideIn 0.3s ease;
  }
  .toast-icon { color:#34d399; font-size:20px; }
  .toast-message { color:white; font-size:13px; }
  .toast-message small { color:#3a4a60; font-size:10px; display:block; }
  @keyframes slideIn {
    from { opacity:0; transform:translateX(20px); }
    to { opacity:1; transform:translateX(0); }
  }
</style>
</head>
<body>
  <div class="toast">
    <div class="toast-icon">✓</div>
    <div class="toast-message">
      Success! Project deployed
      <small>just now</small>
    </div>
  </div>
</body>
</html>`,
    },
    "Social Media Icons": {
      label: "Social Media Icons",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body {
    min-height:100vh; background:#060d1a;
    display:flex; align-items:center; justify-content:center;
    gap:16px;
  }
  .social {
    width:48px; height:48px; border-radius:50%;
    background:#07101f; border:1px solid #0f2744;
    display:flex; align-items:center; justify-content:center;
    color:#3a4a60; font-size:20px;
    transition:all 0.3s; cursor:pointer;
  }
  .social:hover {
    border-color:#38bdf8; color:#38bdf8;
    transform:translateY(-5px);
  }
</style>
</head>
<body>
  <div class="social">🐦</div>
  <div class="social">📘</div>
  <div class="social">📸</div>
  <div class="social">💼</div>
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
  * { margin:0; padding:0; box-sizing:border-box; }
  body {
    min-height:100vh; background:#060d1a;
    display:flex; align-items:center; justify-content:center;
  }
  .switch {
    position:relative; width:60px; height:30px;
  }
  .switch input { opacity:0; width:0; height:0; }
  .slider {
    position:absolute; cursor:pointer;
    top:0; left:0; right:0; bottom:0;
    background:#07101f; border:1px solid #0f2744;
    transition:0.3s; border-radius:30px;
  }
  .slider:before {
    position:absolute; content:"";
    height:22px; width:22px;
    left:3px; bottom:3px;
    background:#3a4a60; transition:0.3s;
    border-radius:50%;
  }
  input:checked + .slider { background:#38bdf8; border-color:#38bdf8; }
  input:checked + .slider:before { transform:translateX(28px); background:white; }
</style>
</head>
<body>
  <label class="switch">
    <input type="checkbox" checked>
    <span class="slider"></span>
  </label>
</body>
</html>`,
    },
    "Animated Border Button": {
      label: "Animated Border Button",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body {
    min-height:100vh; background:#060d1a;
    display:flex; align-items:center; justify-content:center;
  }
  .btn {
    background:transparent; border:none;
    padding:12px 32px; font-size:14px;
    font-weight:600; color:#38bdf8;
    position:relative; cursor:pointer;
  }
  .btn::before, .btn::after {
    content:''; position:absolute;
    width:20px; height:20px;
    transition:all 0.3s;
  }
  .btn::before {
    top:-2px; left:-2px;
    border-top:2px solid #38bdf8;
    border-left:2px solid #38bdf8;
  }
  .btn::after {
    bottom:-2px; right:-2px;
    border-bottom:2px solid #38bdf8;
    border-right:2px solid #38bdf8;
  }
  .btn:hover::before,
  .btn:hover::after {
    width:calc(100% + 2px);
    height:calc(100% + 2px);
  }
</style>
</head>
<body>
  <button class="btn">HOVER ME</button>
</body>
</html>`,
    },
  },
  CSS: {
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
    "Skill Progress Bars": {
      label: "Skill Progress Bars",
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
      {name:'Java',pct:80},{name:'Python',pct:75},
      {name:'MongoDB',pct:82},{name:'TypeScript',pct:78}
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
    "Neumorphism Card": {
      label: "Neumorphism Card",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body {
    min-height:100vh; background:#e0e5ec;
    display:flex; align-items:center; justify-content:center;
    font-family:'Segoe UI',sans-serif;
  }
  .card {
    background:#e0e5ec; padding:32px; border-radius:48px;
    box-shadow: 9px 9px 16px #a3b1c6, -9px -9px 16px #ffffff;
    text-align:center; width:280px;
  }
  .avatar {
    width:80px; height:80px; border-radius:50%; margin:0 auto 16px;
    background:#e0e5ec;
    box-shadow: inset 4px 4px 8px #a3b1c6, inset -4px -4px 8px #ffffff;
    display:flex; align-items:center; justify-content:center;
  }
  h3 { color:#2c3e50; margin:8px 0; }
  p { color:#7f8c8d; font-size:12px; }
</style>
</head>
<body>
  <div class="card">
    <div class="avatar">👤</div>
    <h3>Keyur Sanglikar</h3>
    <p>Full Stack Developer</p>
  </div>
</body>
</html>`,
    },
    "Gradient Border Card": {
      label: "Gradient Border Card",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body {
    min-height:100vh; background:#060d1a;
    display:flex; align-items:center; justify-content:center;
    font-family:'Segoe UI',sans-serif;
  }
  .card {
    background:#07101f; border-radius:20px;
    padding:32px; width:300px; position:relative;
  }
  .card::before {
    content:''; position:absolute;
    inset:-2px; background:linear-gradient(45deg,#38bdf8,#6366f1,#ec4899);
    border-radius:22px; z-index:-1;
  }
  h3 { color:white; margin-bottom:8px; }
  p { color:#8a96a8; font-size:13px; }
</style>
</head>
<body>
  <div class="card">
    <h3>Premium Feature</h3>
    <p>Gradient border effect with pure CSS</p>
  </div>
</body>
</html>`,
    },
    "Morphing Background": {
      label: "Morphing Background",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin:0; padding:0; }
  body {
    min-height:100vh; background:#060d1a;
    display:flex; align-items:center; justify-content:center;
    overflow:hidden;
  }
  .bg {
    position:absolute; width:100%; height:100%;
    background:linear-gradient(45deg,#38bdf8,#6366f1,#ec4899);
    filter:blur(80px);
    animation:morph 6s infinite alternate;
  }
  @keyframes morph {
    0% { transform:scale(1) rotate(0deg); opacity:0.5; }
    100% { transform:scale(2) rotate(10deg); opacity:0.8; }
  }
  .content { position:relative; color:white; text-align:center; z-index:1; }
</style>
</head>
<body>
  <div class="bg"></div>
  <div class="content"><h1>Morphing Effect</h1></div>
</body>
</html>`,
    },
  },
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
  #ms { font-size: 14px; color: #1e3a5f; letter-spacing: 2px; }
</style>
</head>
<body>
  <div id="time">00:00:00</div>
  <div id="ms">000</div>
  <div id="date"></div>
  <script>
    function tick(){
      const n=new Date();
      document.getElementById('time').textContent=n.toLocaleTimeString('en-GB');
      document.getElementById('ms').textContent=String(n.getMilliseconds()).padStart(3,'0');
      document.getElementById('date').textContent=n.toDateString().toUpperCase();
    }
    tick(); setInterval(tick,50);
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
  .label { color: #3a4a60; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 16px; }
  #count {
    font-size: 96px; font-weight: 900; color: #38bdf8;
    line-height: 1; margin-bottom: 28px; transition: transform 0.1s;
  }
  #count.bump { transform: scale(1.15); }
  .btns { display: flex; gap: 12px; justify-content: center; }
  button {
    width: 52px; height: 52px; border-radius: 50%; border: none;
    font-size: 22px; cursor: pointer; transition: all 0.2s; font-family: inherit;
  }
  .dec { background: #07101f; color: #38bdf8; border: 1px solid #0f2744; }
  .dec:hover { background: #38bdf8; color: #060d1a; }
  .rst { background: #07101f; color: #3a4a60; border: 1px solid #0f2744; font-size: 14px; }
  .rst:hover { color: #38bdf8; }
  .inc { background: #38bdf8; color: #060d1a; }
  .inc:hover { background: #7dd3f8; transform: scale(1.1); }
</style>
</head>
<body>
  <div class="wrap">
    <div class="label">Counter</div>
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
      const el=document.getElementById('count');
      el.textContent=c;
      el.classList.add('bump');
      setTimeout(()=>el.classList.remove('bump'),100);
    }
  </script>
</body>
</html>`,
    },
    "Mini Todo App": {
      label: "Mini Todo App",
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
  input:focus { border-color: #38bdf840; }
  button {
    background: #38bdf8; color: #060d1a; border: none;
    padding: 10px 18px; border-radius: 10px;
    cursor: pointer; font-weight: 700; font-size: 16px;
  }
  .item {
    display: flex; align-items: center; gap: 10px;
    padding: 10px 0; border-bottom: 1px solid #0f2744;
    font-size: 12px; color: #8a96a8; cursor: pointer;
    transition: color 0.2s;
  }
  .item.done { text-decoration: line-through; opacity: .4; }
  .cb {
    width: 16px; height: 16px; border-radius: 4px;
    border: 1px solid #38bdf840; background: transparent; flex-shrink: 0;
  }
  .item.done .cb { background: #38bdf8; border-color: #38bdf8; }
  .del { margin-left: auto; color: #1e3a5f; cursor: pointer; font-size: 16px; }
  .del:hover { color: #ef4444; }
  .stats { color: #3a4a60; font-size: 10px; letter-spacing: 1.5px; margin-top: 14px; }
</style>
</head>
<body>
  <h3>TODO LIST</h3>
  <div class="row">
    <input id="inp" placeholder="add task…" onkeydown="if(event.key==='Enter')add()"/>
    <button onclick="add()">+</button>
  </div>
  <div id="list"></div>
  <div class="stats" id="stats"></div>
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
      const done=items.filter(i=>i.d).length;
      document.getElementById('list').innerHTML=items.map((it,i)=>
        \`<div class="item\${it.d?' done':''}" onclick="items[\${i}].d=!items[\${i}].d;render()">
          <div class="cb"></div>\${it.t}
          <span class="del" onclick="event.stopPropagation();items.splice(\${i},1);render()">×</span>
        </div>\`).join('');
      document.getElementById('stats').textContent=\`\${done}/\${items.length} COMPLETED\`;
    }
    render();
  </script>
</body>
</html>`,
    },
    "Digital Clock": {
      label: "Digital Clock",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin:0; padding:0; }
  body {
    min-height:100vh; background:#060d1a;
    display:flex; align-items:center; justify-content:center;
    font-family:'Space Mono',monospace;
  }
  .clock {
    background:#07101f; padding:30px 50px;
    border-radius:20px; border:1px solid #0f2744;
    text-align:center;
  }
  .time { font-size:64px; color:#38bdf8; letter-spacing:4px; }
  .date { font-size:12px; color:#3a4a60; margin-top:8px; }
</style>
</head>
<body>
  <div class="clock">
    <div class="time" id="time">--:--:--</div>
    <div class="date" id="date"></div>
  </div>
  <script>
    function update(){
      const n=new Date();
      document.getElementById('time').textContent=n.toLocaleTimeString();
      document.getElementById('date').textContent=n.toDateString();
    }
    update(); setInterval(update,1000);
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
  * { margin:0; padding:0; box-sizing:border-box; }
  body {
    min-height:100vh; background:#060d1a;
    display:flex; align-items:center; justify-content:center;
    font-family:'Segoe UI',sans-serif;
  }
  .quote-box {
    background:#07101f; border:1px solid #0f2744;
    border-radius:20px; padding:40px; max-width:500px;
    text-align:center;
  }
  .quote { color:#e2e8f0; font-size:20px; line-height:1.6; margin-bottom:24px; }
  .author { color:#38bdf8; font-size:14px; margin-bottom:32px; }
  button {
    background:#38bdf8; border:none; padding:10px 24px;
    border-radius:100px; font-weight:600; cursor:pointer;
  }
</style>
</head>
<body>
  <div class="quote-box">
    <div class="quote" id="quote">Click button for inspiration</div>
    <div class="author" id="author">—</div>
    <button onclick="newQuote()">New Quote</button>
  </div>
  <script>
    const quotes = [
      {q:"Code is poetry in motion",a:"Dev Wisdom"},
      {q:"Simplicity is the soul of efficiency",a:"A. Rich"},
      {q:"First, solve the problem. Then, write the code",a:"J. Johnson"},
      {q:"Make it work, make it right, make it fast",a:"K. Beck"}
    ];
    function newQuote(){
      const r=Math.floor(Math.random()*quotes.length);
      document.getElementById('quote').textContent=quotes[r].q;
      document.getElementById('author').textContent='— '+quotes[r].a;
    }
    newQuote();
  </script>
</body>
</html>`,
    },
    "Dark Mode Toggle": {
      label: "Dark Mode Toggle",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body {
    transition:background 0.3s, color 0.3s;
    font-family:'Segoe UI',sans-serif;
    min-height:100vh;
  }
  body.light { background:#f0f4f8; color:#1a202c; }
  body.dark { background:#060d1a; color:#e2e8f0; }
  .container { text-align:center; padding:40px; }
  button {
    padding:10px 24px; border-radius:100px;
    cursor:pointer; border:none; font-weight:600;
    margin-top:20px;
  }
</style>
</head>
<body class="dark">
  <div class="container">
    <h1>Dark Mode Demo</h1>
    <p>Toggle between themes</p>
    <button onclick="toggleTheme()">Toggle Theme</button>
  </div>
  <script>
    function toggleTheme(){
      const b=document.body;
      if(b.classList.contains('dark')){
        b.classList.remove('dark'); b.classList.add('light');
      } else {
        b.classList.remove('light'); b.classList.add('dark');
      }
    }
  </script>
</body>
</html>`,
    },
  },
  React: {
    "useState Toggle": {
      label: "useState Toggle",
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
      const [on, setOn] = React.useState(false);
      const [count, setCount] = React.useState(0);
      return (
        <div style={{textAlign:'center',color:'white'}}>
          <h2 style={{color:'#38bdf8',marginBottom:24,letterSpacing:2,fontSize:13,textTransform:'uppercase'}}>React useState Demo</h2>
          <div style={{display:'flex',alignItems:'center',gap:16,justifyContent:'center',marginBottom:28}}>
            <span style={{color:'#8a96a8',fontSize:13}}>Toggle:</span>
            <div
              onClick={()=>setOn(!on)}
              style={{
                width:52,height:28,borderRadius:14,
                background:on?'#38bdf8':'#0f2744',
                cursor:'pointer',position:'relative',transition:'background 0.3s'
              }}>
              <div style={{
                position:'absolute',top:4,left:on?24:4,
                width:20,height:20,borderRadius:'50%',
                background:'white',transition:'left 0.3s'
              }}/>
            </div>
            <span style={{color:on?'#38bdf8':'#3a4a60',fontSize:12}}>{on?'ON':'OFF'}</span>
          </div>
          <div style={{fontSize:64,fontWeight:900,color:'#38bdf8',marginBottom:20}}>{count}</div>
          <div style={{display:'flex',gap:12,justifyContent:'center'}}>
            <button onClick={()=>setCount(c=>c-1)} style={{padding:'10px 20px',background:'#07101f',color:'#38bdf8',border:'1px solid #0f2744',borderRadius:10,cursor:'pointer',fontSize:18}}>−</button>
            <button onClick={()=>setCount(0)} style={{padding:'10px 16px',background:'#07101f',color:'#3a4a60',border:'1px solid #0f2744',borderRadius:10,cursor:'pointer',fontSize:12}}>RST</button>
            <button onClick={()=>setCount(c=>c+1)} style={{padding:'10px 20px',background:'#38bdf8',color:'#060d1a',border:'none',borderRadius:10,cursor:'pointer',fontSize:18,fontWeight:700}}>+</button>
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
      const fetch_joke = async () => {
        setLoading(true);
        try {
          const r = await fetch('https://official-joke-api.appspot.com/random_joke');
          const d = await r.json();
          setJoke(d.setup + ' ... ' + d.punchline);
        } catch(e) { setJoke('Could not fetch. Try again!'); }
        setLoading(false);
      };
      React.useEffect(()=>{ fetch_joke(); },[]);
      return (
        <div style={{maxWidth:400,margin:'0 auto',color:'white',textAlign:'center'}}>
          <div style={{fontSize:11,color:'#38bdf8',letterSpacing:3,marginBottom:20,textTransform:'uppercase'}}>useEffect + Fetch Demo</div>
          <div style={{background:'#07101f',border:'1px solid #0f2744',borderRadius:16,padding:'28px 24px',marginBottom:20,minHeight:80,display:'flex',alignItems:'center',justifyContent:'center'}}>
            <p style={{color:'#8a96a8',fontSize:14,lineHeight:1.7}}>{loading?'Fetching...':joke}</p>
          </div>
          <button
            onClick={fetch_joke}
            style={{padding:'11px 28px',background:'#38bdf8',color:'#060d1a',border:'none',borderRadius:100,cursor:'pointer',fontWeight:700,fontSize:12,letterSpacing:2,textTransform:'uppercase'}}>
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
    "React Counter": {
      label: "React Counter",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<style>
  body { background:#060d1a; display:flex; justify-content:center; align-items:center; min-height:100vh; }
</style>
</head>
<body>
  <div id="root"></div>
  <script type="text/babel">
    function Counter(){
      const [c,setC]=React.useState(0);
      return (
        <div style={{textAlign:'center',color:'white'}}>
          <h1 style={{fontSize:72,color:'#38bdf8'}}>{c}</h1>
          <button onClick={()=>setC(c+1)} style={{padding:'10px 20px',background:'#38bdf8',border:'none',borderRadius:8,margin:8}}>+</button>
          <button onClick={()=>setC(c-1)} style={{padding:'10px 20px',background:'#07101f',border:'1px solid #0f2744',color:'#38bdf8',borderRadius:8}}>-</button>
        </div>
      );
    }
    ReactDOM.createRoot(document.getElementById('root')).render(<Counter/>);
  </script>
</body>
</html>`,
    },
    "Todo List React": {
      label: "Todo List React",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<style>
  body { background:#060d1a; padding:20px; font-family:monospace; }
</style>
</head>
<body>
  <div id="root"></div>
  <script type="text/babel">
    function App(){
      const [todos,setTodos]=React.useState([]);
      const [input,setInput]=React.useState('');
      const add=()=>{ if(input.trim()) setTodos([...todos,{text:input,done:false}]); setInput(''); };
      const toggle=i=>{ const newTodos=[...todos]; newTodos[i].done=!newTodos[i].done; setTodos(newTodos); };
      const del=i=>{ setTodos(todos.filter((_,idx)=>idx!==i)); };
      return (
        <div style={{maxWidth:400,margin:'0 auto',color:'white'}}>
          <h3 style={{color:'#38bdf8'}}>React Todo</h3>
          <div style={{display:'flex',gap:8}}>
            <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==='Enter'&&add()} style={{flex:1,background:'#07101f',border:'1px solid #0f2744',color:'white',padding:8}}/>
            <button onClick={add} style={{background:'#38bdf8',border:'none',padding:'8px 16px',borderRadius:8}}>Add</button>
          </div>
          {todos.map((t,i)=>(
            <div key={i} style={{display:'flex',alignItems:'center',gap:8,marginTop:10,padding:8,borderBottom:'1px solid #0f2744'}}>
              <input type="checkbox" checked={t.done} onChange={()=>toggle(i)}/>
              <span style={{flex:1,textDecoration:t.done?'line-through':'none'}}>{t.text}</span>
              <button onClick={()=>del(i)} style={{background:'none',border:'none',color:'#ef4444',cursor:'pointer'}}>✕</button>
            </div>
          ))}
        </div>
      );
    }
    ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
  </script>
</body>
</html>`,
    },
    "Form with useState": {
      label: "Form with useState",
      lang: "html",
      code: `<!DOCTYPE html>
<html>
<head>
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<style>
  body { background:#060d1a; display:flex; justify-content:center; align-items:center; min-height:100vh; }
</style>
</head>
<body>
  <div id="root"></div>
  <script type="text/babel">
    function Form(){
      const [form,setForm]=React.useState({name:'',email:''});
      const [submitted,setSubmitted]=React.useState(null);
      const handle=(e)=>{ setForm({...form,[e.target.name]:e.target.value}); };
      const submit=(e)=>{ e.preventDefault(); setSubmitted(form); };
      return (
        <div style={{background:'#07101f',border:'1px solid #0f2744',borderRadius:16,padding:32,width:320}}>
          <form onSubmit={submit}>
            <input name="name" placeholder="Name" value={form.name} onChange={handle} style={{width:'100%',marginBottom:12,padding:8,background:'#060d1a',border:'1px solid #0f2744',color:'white',borderRadius:8}}/>
            <input name="email" placeholder="Email" value={form.email} onChange={handle} style={{width:'100%',marginBottom:12,padding:8,background:'#060d1a',border:'1px solid #0f2744',color:'white',borderRadius:8}}/>
            <button type="submit" style={{background:'#38bdf8',border:'none',padding:'8px 16px',borderRadius:8,width:'100%'}}>Submit</button>
          </form>
          {submitted && <div style={{marginTop:16,color:'#34d399'}}>Hello {submitted.name} ({submitted.email})</div>}
        </div>
      );
    }
    ReactDOM.createRoot(document.getElementById('root')).render(<Form/>);
  </script>
</body>
</html>`,
    },
  },
};

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

export default function CodePlayground() {
  const [category, setCategory] = useState("HTML");
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
    navigator.clipboard.writeText(code).catch(() => {});
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

  return (
    <section className="pg-section">
      <div className="pg-topbar">
        <div className="pg-dots">
          <span className="pg-dot pg-dot-r" />
          <span className="pg-dot pg-dot-y" />
          <span className="pg-dot pg-dot-g" />
        </div>
        <span className="pg-title">FRONTEND PLAYGROUND — 100+ COMPONENTS</span>
        <div className="pg-topbar-right">
          <label className="pg-autorun-label">
            <input
              type="checkbox"
              checked={autoRun}
              onChange={(e) => setAutoRun(e.target.checked)}
            />
            auto-run
          </label>
        </div>
      </div>

      <div className="pg-toolbar">
        <div className="pg-toolbar-left">
          <select className="pg-select" value={category} onChange={handleCategory}>
            {Object.keys(TEMPLATES).map((cat) => (
              <option key={cat} value={cat}>
                {cat}
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
          <button className="pg-run-btn" onClick={runCode}>▶ Run</button>
        </div>
      </div>

      <div className="pg-mobile-tabs">
        <button
          className={`pg-mobile-tab ${tab === "editor" ? "active" : ""}`}
          onClick={() => setTab("editor")}
        >
          Editor
        </button>
        <button
          className={`pg-mobile-tab ${tab === "preview" ? "active" : ""}`}
          onClick={() => { setTab("preview"); runCode(); }}
        >
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
          <iframe
            key={iframeKey}
            className="pg-iframe"
            title="preview"
            sandbox="allow-scripts"
            srcDoc={code}
          />
        </div>
      </div>

      <div className="pg-footer">
        <span className="pg-prompt">$</span>
        <span className="pg-footer-slogan">
          Build. <span>Preview.</span> Deploy.
        </span>
        <span className="pg-footer-right">© 2025 Frontend Playground</span>
      </div>
    </section>
  );
}
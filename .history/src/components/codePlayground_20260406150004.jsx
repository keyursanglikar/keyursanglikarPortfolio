import React, { useState, useRef, useEffect, useCallback } from "react";
import "./CSS/CodePlayground.css";

// ─── Template Library ───────────────────────────────────────────────────────

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
  },
};

// ─── Main Component ──────────────────────────────────────────────────────────

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
  const [tab, setTab] = useState("editor"); // "editor" | "preview" (mobile)

  const editorRef = useRef(null);
  const autoRunTimer = useRef(null);

  // run code
  const runCode = useCallback(() => setIframeKey((k) => k + 1), []);

  // auto-run debounce
  useEffect(() => {
    if (!autoRun) return;
    clearTimeout(autoRunTimer.current);
    autoRunTimer.current = setTimeout(runCode, 800);
    return () => clearTimeout(autoRunTimer.current);
  }, [code, autoRun, runCode]);

  // load template
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

  // tab key in textarea
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
      {/* ── Top Bar ── */}
      <div className="pg-topbar">
        <div className="pg-dots">
          <span className="pg-dot pg-dot-r" />
          <span className="pg-dot pg-dot-y" />
          <span className="pg-dot pg-dot-g" />
        </div>
        <span className="pg-title">KEYUR.DEV — CODE PLAYGROUND</span>
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

      {/* ── Template Toolbar ── */}
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
          <button className="pg-run-btn" onClick={runCode}>&#9654; Run</button>
        </div>
      </div>

      {/* ── Mobile tab switcher ── */}
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

      {/* ── Main Body ── */}
      <div className="pg-body">
        {/* Editor pane */}
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

        {/* Preview pane */}
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

      {/* ── Footer ── */}
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
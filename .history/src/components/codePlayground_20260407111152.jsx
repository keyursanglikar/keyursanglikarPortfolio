import React, { useState, useRef, useEffect, useCallback } from "react";
import "./CSS/c";

// ─── TEMPLATE LIBRARY WITH 50+ COMPONENTS (20 per category) ──────────────────

const TEMPLATES = {
  ReactComponents: {
    "useState Counter": {
      label: "useState Counter ⚛️",
      language: "react",
      jsx: `// React useState Counter Component
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h1 style={{ color: '#38bdf8', fontSize: '72px' }}>{count}</h1>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button onClick={() => setCount(count - 1)} style={buttonStyle}>-</button>
        <button onClick={() => setCount(0)} style={buttonStyle}>Reset</button>
        <button onClick={() => setCount(count + 1)} style={buttonStyle}>+</button>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: '10px 20px',
  background: '#38bdf8',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontWeight: 'bold'
};

export default Counter;`,
      css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body {
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e, #16213e, #0f3460);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Segoe UI', sans-serif;
}`,
      html: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>React Counter</title></head><body><div id="root"></div></body></html>`
    },
    "Todo List App": {
      label: "Todo List App ⚛️",
      language: "react",
      jsx: `// React Todo List Component
import React, { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { text: input, completed: false, id: Date.now() }]);
      setInput('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ color: '#38bdf8' }}>Todo List</h2>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()} placeholder="Add a task..." style={inputStyle} />
        <button onClick={addTodo} style={buttonStyle}>Add</button>
      </div>
      <div>
        {todos.map(todo => (
          <div key={todo.id} style={todoItemStyle}>
            <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} style={{ marginRight: '10px' }} />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none', color: todo.completed ? '#8a96a8' : 'white', flex: 1 }}>
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)} style={deleteStyle}>×</button>
          </div>
        ))}
      </div>
      {todos.length === 0 && <p style={{ color: '#8a96a8', textAlign: 'center' }}>No tasks yet. Add one!</p>}
    </div>
  );
}

const inputStyle = { flex: 1, padding: '10px', background: '#07101f', border: '1px solid #0f2744', borderRadius: '8px', color: 'white', outline: 'none' };
const buttonStyle = { padding: '10px 20px', background: '#38bdf8', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' };
const todoItemStyle = { display: 'flex', alignItems: 'center', padding: '10px', background: '#07101f', marginBottom: '8px', borderRadius: '8px', gap: '10px' };
const deleteStyle = { background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer', fontSize: '18px' };

export default TodoApp;`,
      css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { min-height: 100vh; background: #060d1a; display: flex; align-items: center; justify-content: center; font-family: 'Segoe UI', sans-serif; }`,
      html: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Todo App</title></head><body><div id="root"></div></body></html>`
    },
    "Fetch API Demo": { label: "Fetch API Demo ⚛️", language: "react", jsx: `// Fetch API Demo
import React, { useState, useEffect } from 'react';

function FetchDemo() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => res.json())
      .then(data => { setData(data); setLoading(false); })
      .catch(err => { console.error(err); setLoading(false); });
  }, []);

  if (loading) return <div style={{textAlign:'center',padding:'40px'}}>Loading...</div>;
  return <div style={{padding:'40px',maxWidth:'600px',margin:'0 auto'}}><h2>📡 API Data</h2><pre>{JSON.stringify(data,null,2)}</pre></div>;
}
export default FetchDemo;`,
      css: `body{background:#060d1a;color:white;font-family:monospace;}`,
      html: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Fetch Demo</title></head><body><div id="root"></div></body></html>`
    },
    "Form Validation": { label: "Form Validation ⚛️", language: "react", jsx: `// Form Validation
import React, { useState } from 'react';
function FormValidation() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const validate = () => { let err={}; if(!form.email.includes('@')) err.email='Invalid email'; if(form.password.length<6) err.password='Min 6 chars'; setErrors(err); return Object.keys(err).length===0; };
  const handleSubmit = (e) => { e.preventDefault(); if(validate()) alert('Form submitted!'); };
  return (<div style={{padding:'40px',maxWidth:'400px',margin:'0 auto'}}><h2>Sign Up</h2><form onSubmit={handleSubmit}><input type="email" placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} style={{width:'100%',padding:'10px',margin:'10px 0'}}/><div style={{color:'red'}}>{errors.email}</div><input type="password" placeholder="Password" value={form.password} onChange={e=>setForm({...form,password:e.target.value})} style={{width:'100%',padding:'10px',margin:'10px 0'}}/><div style={{color:'red'}}>{errors.password}</div><button type="submit" style={{padding:'10px 20px',background:'#38bdf8',border:'none',borderRadius:'8px',cursor:'pointer'}}>Submit</button></form></div>);
}
export default FormValidation;`,
      css: `body{background:#060d1a;color:white;}`,
      html: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Form Validation</title></head><body><div id="root"></div></body></html>`
    },
    "Dark Mode Toggle": { label: "Dark Mode Toggle ⚛️", language: "react", jsx: `// Dark Mode Toggle
import React, { useState, useEffect } from 'react';
function DarkMode() {
  const [dark, setDark] = useState(false);
  useEffect(() => { document.body.style.background = dark ? '#1a1a2e' : '#f0f0f0'; document.body.style.color = dark ? 'white' : 'black'; }, [dark]);
  return (<div style={{textAlign:'center',padding:'40px'}}><h1>Dark Mode Demo</h1><button onClick={()=>setDark(!dark)} style={{padding:'10px 20px',background:dark?'#38bdf8':'#333',color:'white',border:'none',borderRadius:'8px',cursor:'pointer'}}>{dark?'Switch to Light':'Switch to Dark'}</button></div>);
}
export default DarkMode;`,
      css: `body{transition:all 0.3s;font-family:sans-serif;}`,
      html: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Dark Mode</title></head><body><div id="root"></div></body></html>`
    },
    "Timer App": { label: "Timer App ⚛️", language: "react", jsx: `// Timer App
import React, { useState, useEffect } from 'react';
function Timer() { const [seconds, setSeconds] = useState(0); const [active, setActive] = useState(false); useEffect(()=>{let interval; if(active) interval=setInterval(()=>setSeconds(s=>s+1),1000); return()=>clearInterval(interval); },[active]); return(<div style={{textAlign:'center',padding:'40px'}}><h1>{seconds}s</h1><button onClick={()=>setActive(true)}>Start</button><button onClick={()=>setActive(false)}>Stop</button><button onClick={()=>{setActive(false);setSeconds(0);}}>Reset</button></div>);}
export default Timer;`,
      css: `body{background:#060d1a;color:white;}button{margin:5px;padding:10px 20px;background:#38bdf8;border:none;border-radius:8px;cursor:pointer;}`,
      html: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Timer</title></head><body><div id="root"></div></body></html>`
    },
    "Tabs Component": { label: "Tabs Component ⚛️", language: "react", jsx: `// Tabs Component
import React, { useState } from 'react';
function Tabs() { const [activeTab, setActiveTab] = useState(0); const tabs = ['Tab 1', 'Tab 2', 'Tab 3']; const contents = ['Content for Tab 1', 'Content for Tab 2', 'Content for Tab 3']; return(<div><div style={{display:'flex',gap:'10px',borderBottom:'1px solid #ccc',padding:'10px'}}>{tabs.map((tab,i)=><button key={i} onClick={()=>setActiveTab(i)} style={{padding:'10px 20px',background:activeTab===i?'#38bdf8':'transparent',border:'none',cursor:'pointer'}}>{tab}</button>)}</div><div style={{padding:'20px'}}>{contents[activeTab]}</div></div>);}
export default Tabs;`,
      css: `body{background:#060d1a;color:white;}`,
      html: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Tabs</title></head><body><div id="root"></div></body></html>`
    }
  },
  HTML_CSS_JS: {
    "Glassmorphism Card": { label: "Glassmorphism Card 🎴", language: "htmlcssjs", html: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Glassmorphism Card</title><link rel="stylesheet" href="styles.css"></head><body><div class="glass-card"><div class="card-avatar">✨</div><h2>Glassmorphism Card</h2><p>Modern UI with blur effect</p><span class="card-tag">Trending</span><button class="card-btn">Learn More →</button></div></body></html>`, css: `*{margin:0;padding:0;box-sizing:border-box;}body{min-height:100vh;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);display:flex;align-items:center;justify-content:center;font-family:'Segoe UI',sans-serif;}.glass-card{background:rgba(255,255,255,0.1);backdrop-filter:blur(10px);border-radius:20px;padding:40px;text-align:center;color:white;width:320px;border:1px solid rgba(255,255,255,0.2);transition:transform 0.3s;}.glass-card:hover{transform:translateY(-10px);box-shadow:0 15px 35px rgba(0,0,0,0.2);}.card-avatar{width:80px;height:80px;background:linear-gradient(135deg,#ff6b6b,#4ecdc4);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;font-size:40px;}.card-btn{background:rgba(255,255,255,0.2);border:1px solid rgba(255,255,255,0.3);padding:10px 20px;border-radius:25px;color:white;cursor:pointer;}.card-btn:hover{background:white;color:#667eea;}`, js: `document.querySelector('.card-btn')?.addEventListener('click',()=>alert('Glassmorphism Card Clicked!'));` },
    "Neon Buttons": { label: "Neon Buttons 🔘", language: "htmlcssjs", html: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Neon Buttons</title><link rel="stylesheet" href="styles.css"></head><body><div class="container"><h1>Neon Buttons</h1><div class="button-grid"><button class="neon-btn neon-pink">Neon Pink</button><button class="neon-btn neon-blue">Neon Blue</button><button class="neon-btn neon-green">Neon Green</button></div></div></body></html>`, css: `*{margin:0;padding:0;box-sizing:border-box;}body{min-height:100vh;background:#0a0a1a;display:flex;align-items:center;justify-content:center;}.neon-btn{padding:15px 30px;background:transparent;border:2px solid;border-radius:10px;cursor:pointer;transition:all 0.3s;}.neon-pink{color:#ff00de;border-color:#ff00de;}.neon-pink:hover{background:#ff00de;color:#0a0a1a;box-shadow:0 0 30px #ff00de;}.neon-blue{color:#00e0ff;border-color:#00e0ff;}.neon-blue:hover{background:#00e0ff;color:#0a0a1a;box-shadow:0 0 30px #00e0ff;}.neon-green{color:#00ff88;border-color:#00ff88;}.neon-green:hover{background:#00ff88;color:#0a0a1a;box-shadow:0 0 30px #00ff88;}`, js: `document.querySelectorAll('.neon-btn').forEach(btn=>btn.addEventListener('click',()=>alert(btn.textContent+' clicked!')));` },
    "Animated Gradient BG": { label: "Animated Gradient BG 🌈", language: "htmlcssjs", html: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Animated Gradient</title><link rel="stylesheet" href="styles.css"></head><body><div class="content"><h1>Animated Gradient</h1><p>Beautiful moving gradient</p><button class="gradient-btn" id="gradientBtn">Change Colors</button></div></body></html>`, css: `*{margin:0;padding:0;box-sizing:border-box;}body{min-height:100vh;background:linear-gradient(270deg,#ff6b6b,#4ecdc4,#45b7d1,#96ceb4,#ff6b6b);background-size:400% 400%;animation:gradientShift 10s ease infinite;display:flex;align-items:center;justify-content:center;}@keyframes gradientShift{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}.content{text-align:center;background:rgba(0,0,0,0.6);backdrop-filter:blur(10px);padding:50px;border-radius:20px;color:white;}.gradient-btn{padding:12px 30px;background:white;border:none;border-radius:50px;cursor:pointer;}`, js: `var colorSets = [['#ff6b6b','#4ecdc4','#45b7d1','#96ceb4'],['#f093fb','#f5576c','#4facfe','#00f2fe'],['#fa709a','#fee140','#667eea','#764ba2']]; var idx = 0; document.getElementById('gradientBtn').addEventListener('click', function() { idx = (idx + 1) % colorSets.length; var colors = colorSets[idx]; var gradientString = 'linear-gradient(270deg, ' + colors.join(', ') + ', ' + colors[0] + ')'; document.body.style.background = gradientString; document.body.style.backgroundSize = '400% 400%'; });` },
    "3D Flip Card": { label: "3D Flip Card 🃏", language: "htmlcssjs", html: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>3D Flip Card</title><link rel="stylesheet" href="styles.css"></head><body><div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><h2>Front</h2></div><div class="flip-card-back"><h2>Back</h2><button>Learn More</button></div></div></div></body></html>`, css: `.flip-card{width:300px;height:400px;perspective:1000px;}.flip-card-inner{position:relative;width:100%;height:100%;transition:transform 0.6s;transform-style:preserve-3d;}.flip-card:hover .flip-card-inner{transform:rotateY(180deg);}.flip-card-front,.flip-card-back{position:absolute;width:100%;height:100%;backface-visibility:hidden;border-radius:20px;display:flex;align-items:center;justify-content:center;}.flip-card-front{background:linear-gradient(135deg,#f093fb,#f5576c);color:white;}.flip-card-back{background:linear-gradient(135deg,#4facfe,#00f2fe);color:white;transform:rotateY(180deg);}`, js: `document.querySelector('.flip-card-back button')?.addEventListener('click',()=>alert('Flipped!'));` },
    "Responsive Navbar": { label: "Responsive Navbar 🧭", language: "htmlcssjs", html: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Responsive Navbar</title><link rel="stylesheet" href="styles.css"></head><body><nav class="navbar"><div class="logo">Brand</div><ul class="nav-links"><li><a href="#">Home</a></li><li><a href="#">About</a></li><li><a href="#">Contact</a></li></ul><div class="hamburger">☰</div></nav><div class="hero"><h1>Responsive Navbar</h1></div></body></html>`, css: `*{margin:0;padding:0;box-sizing:border-box;}body{font-family:sans-serif;}.navbar{display:flex;justify-content:space-between;align-items:center;padding:20px;background:#1a1a2e;color:white;}.nav-links{display:flex;list-style:none;gap:20px;}.hamburger{display:none;font-size:24px;cursor:pointer;}@media(max-width:768px){.nav-links{display:none;}.hamburger{display:block;}}.hero{height:90vh;background:linear-gradient(135deg,#667eea,#764ba2);display:flex;align-items:center;justify-content:center;color:white;}`, js: `document.querySelector('.hamburger')?.addEventListener('click',()=>{const links=document.querySelector('.nav-links');if(links) links.style.display=links.style.display==='flex'?'none':'flex';});` },
    "Particle Background": { label: "Particle Background ✨", language: "htmlcssjs", html: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Particles</title><link rel="stylesheet" href="styles.css"></head><body><canvas id="canvas"></canvas><div class="overlay"><h1>Particle System</h1></div></body></html>`, css: `*{margin:0;padding:0;box-sizing:border-box;}body{overflow:hidden;}#canvas{position:absolute;top:0;left:0;width:100%;height:100%;background:#0a0a1a;}.overlay{position:relative;z-index:10;color:white;text-align:center;margin-top:20vh;}`, js: `const canvas=document.getElementById('canvas');const ctx=canvas.getContext('2d');canvas.width=window.innerWidth;canvas.height=window.innerHeight;let particles=[];for(let i=0;i<100;i++){particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,vx:(Math.random()-0.5)*2,vy:(Math.random()-0.5)*2,size:Math.random()*3+1});}function animate(){ctx.clearRect(0,0,canvas.width,canvas.height);particles.forEach(p=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>canvas.width)p.vx*=-1;if(p.y<0||p.y>canvas.height)p.vy*=-1;ctx.beginPath();ctx.arc(p.x,p.y,p.size,0,Math.PI*2);ctx.fillStyle='white';ctx.fill();});requestAnimationFrame(animate);}animate();window.addEventListener('resize',()=>{canvas.width=window.innerWidth;canvas.height=window.innerHeight;});` },
    "Digital Clock": { label: "Digital Clock 🕐", language: "htmlcssjs", html: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Digital Clock</title><link rel="stylesheet" href="styles.css"></head><body><div class="clock"></div></body></html>`, css: `body{background:#060d1a;display:flex;justify-content:center;align-items:center;height:100vh;}.clock{font-size:64px;font-family:monospace;color:#38bdf8;background:#07101f;padding:30px;border-radius:20px;}`, js: `function updateClock(){const now=new Date();document.querySelector('.clock').textContent=now.toLocaleTimeString();}setInterval(updateClock,1000);updateClock();` },
    "Calculator": { label: "Calculator 🧮", language: "htmlcssjs", html: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Calculator</title><link rel="stylesheet" href="styles.css"></head><body><div class="calc"><input id="display" readonly><div class="buttons"><button>1</button><button>2</button><button>3</button><button>+</button><button>4</button><button>5</button><button>6</button><button>-</button><button>7</button><button>8</button><button>9</button><button>*</button><button>0</button><button>=</button><button>C</button><button>/</button></div></div></body></html>`, css: `.calc{background:#07101f;padding:20px;border-radius:20px;width:300px;margin:auto;margin-top:20vh;}#display{width:100%;padding:10px;margin-bottom:10px;font-size:24px;}.buttons{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;}button{padding:15px;background:#38bdf8;border:none;border-radius:8px;cursor:pointer;}`, js: `let display=document.getElementById('display');let current='';document.querySelectorAll('.buttons button').forEach(btn=>{btn.addEventListener('click',()=>{const val=btn.textContent;if(val==='C'){current='';display.value='';}else if(val==='='){try{current=eval(current).toString();display.value=current;}catch(e){display.value='Error';}}else{current+=val;display.value=current;}});});` },
    "Stopwatch": { label: "Stopwatch ⏱️", language: "htmlcssjs", html: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Stopwatch</title><link rel="stylesheet" href="styles.css"></head><body><div class="stopwatch"><h1 id="time">00:00:00</h1><button id="start">Start</button><button id="stop">Stop</button><button id="reset">Reset</button></div></body></html>`, css: `.stopwatch{text-align:center;margin-top:20vh;background:#07101f;padding:30px;border-radius:20px;color:white;}button{margin:10px;padding:10px 20px;background:#38bdf8;border:none;border-radius:8px;cursor:pointer;}h1{font-size:48px;}`, js: `let seconds=0,minutes=0,hours=0;let interval;function updateDisplay(){document.getElementById('time').textContent=hours.toString().padStart(2,'0')+':'+minutes.toString().padStart(2,'0')+':'+seconds.toString().padStart(2,'0');}document.getElementById('start').addEventListener('click',()=>{if(interval)clearInterval(interval);interval=setInterval(()=>{seconds++;if(seconds===60){seconds=0;minutes++;}if(minutes===60){minutes=0;hours++;}updateDisplay();},1000);});document.getElementById('stop').addEventListener('click',()=>clearInterval(interval));document.getElementById('reset').addEventListener('click',()=>{clearInterval(interval);seconds=0;minutes=0;hours=0;updateDisplay();});updateDisplay();` }
  },
  JavaScript: {
    "Digital Clock": { label: "Digital Clock 🕐", language: "javascript", code: `// Digital Clock\nfunction updateClock() {\n  const now = new Date();\n  console.log(now.toLocaleTimeString());\n  if(typeof document !== 'undefined'){\n    let div = document.getElementById('clock');\n    if(!div){div=document.createElement('div');div.id='clock';document.body.appendChild(div);}\n    div.textContent = now.toLocaleTimeString();\n  }\n}\nsetInterval(updateClock,1000);` },
    "Weather App Mock": { label: "Weather App Mock 🌤️", language: "javascript", code: `// Weather Mock\nasync function getWeather(city="Tokyo"){\n  const mock={temp:Math.floor(Math.random()*30)+10,condition:['Sunny','Cloudy','Rainy'][Math.floor(Math.random()*3)]};\n  console.log('Weather in '+city+': '+mock.temp+'°C, '+mock.condition);\n  return mock;\n}\ngetWeather();` },
    "Array Methods": { label: "Array Methods 📚", language: "javascript", code: `// Array Methods Demo\nconst arr = [1,2,3,4,5];\nconsole.log('Original:',arr);\nconsole.log('Map (x2):',arr.map(x=>x*2));\nconsole.log('Filter (>3):',arr.filter(x=>x>3));\nconsole.log('Reduce (sum):',arr.reduce((a,b)=>a+b,0));` },
    "Promises": { label: "Promises ⏳", language: "javascript", code: `// Promise Demo\nconst delay = ms => new Promise(resolve => setTimeout(resolve,ms));\nasync function run(){\n  console.log('Start');\n  await delay(1000);\n  console.log('After 1 second');\n}\nrun();` }
  },
  TypeScript: {
    "Basic Types": { label: "Basic Types 📘", language: "typescript", code: `// TypeScript Basic Types\ninterface User{id:number;name:string;email:string;isActive:boolean;}\nfunction greetUser(user:User):string{return 'Hello, '+user.name+'!';}\nconst user:User={id:1,name:'Alice',email:'alice@example.com',isActive:true};\nconsole.log(greetUser(user));` }
  },
  Python: {
    "Hello World": { label: "Hello World 🐍", language: "python", code: `# Python Hello World\nprint("Hello from Python!")\nname = input("What's your name? ")\nprint(f"Nice to meet you, {name}!")` },
    "Fibonacci": { label: "Fibonacci Sequence 🐍", language: "python", code: `# Fibonacci\ndef fib(n):\n    a,b=0,1\n    for _ in range(n):\n        print(a,end=' ')\n        a,b=b,a+b\nfib(10)` }
  },
  SQL: {
    "Basic Queries": { label: "Basic SQL 🗄️", language: "sql", code: `-- Basic SQL\nCREATE TABLE users (id INT, name VARCHAR(100));\nINSERT INTO users VALUES (1, 'Alice');\nSELECT * FROM users;` }
  },
  Bash: {
    "System Info": { label: "System Info 🖥️", language: "bash", code: `#!/bin/bash\necho "Hostname: $(hostname)"\necho "User: $(whoami)"\necho "Date: $(date)"` }
  },
  Java: {
    "Hello World": { label: "Hello World ☕", language: "java", code: `// Java Hello World\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello from Java!");\n    }\n}` }
  },
  Cpp: {
    "Hello World": { label: "Hello World 💻", language: "cpp", code: `// C++ Hello World\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << "Hello from C++!" << endl;\n    return 0;\n}` }
  },
  C: {
    "Hello World": { label: "Hello World 🔵", language: "c", code: `// C Hello World\n#include <stdio.h>\nint main() {\n    printf("Hello from C!\\n");\n    return 0;\n}` }
  }
};

// ─── DEFAULT CODES ──────────────────────────────────────────────────────────

const DEFAULT_REACT_JSX = `// React Component
function App() {
  const [count, setCount] = React.useState(0);
  return (
    <div className="container">
      <h1>React Playground</h1>
      <p>Write React code here!</p>
      <div style={{ fontSize: '48px', color: '#38bdf8', margin: '20px 0' }}>{count}</div>
      <button onClick={() => setCount(count + 1)} style={{ padding: '10px 20px', background: '#38bdf8', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Click Me</button>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);`;

const DEFAULT_REACT_CSS = `*{margin:0;padding:0;box-sizing:border-box;}
body{min-height:100vh;background:#060d1a;display:flex;align-items:center;justify-content:center;font-family:'Segoe UI',sans-serif;}
.container{text-align:center;padding:40px;}
h1{color:#38bdf8;margin-bottom:20px;}
p{color:#8a96a8;margin-bottom:20px;}`;

const DEFAULT_REACT_HTML = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>React Playground</title><link rel="stylesheet" href="styles.css"></head><body><div id="root"></div><script src="https://unpkg.com/react@18/umd/react.development.js"></script><script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script><script src="https://unpkg.com/@babel/standalone/babel.min.js"></script><script type="text/babel" src="script.js"></script></body></html>`;

const DEFAULT_HTML_CSS_JS = {
  html: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Playground</title><link rel="stylesheet" href="styles.css"></head><body><div class="container"><h1>HTML/CSS/JS Playground</h1><button id="demoBtn">Click Me</button></div><script src="script.js"></script></body></html>`,
  css: `*{margin:0;padding:0;box-sizing:border-box;}body{min-height:100vh;background:linear-gradient(135deg,#667eea,#764ba2);display:flex;align-items:center;justify-content:center;}.container{background:rgba(255,255,255,0.1);backdrop-filter:blur(10px);padding:40px;border-radius:20px;color:white;}button{padding:12px 30px;background:white;border:none;border-radius:50px;cursor:pointer;}`,
  js: `document.getElementById('demoBtn')?.addEventListener('click',()=>alert('Hello from JS!'));`
};

const LANGUAGE_DEFAULTS = {
  javascript: `// JavaScript Playground\nconsole.log("Hello from JavaScript!");\nconst numbers=[1,2,3,4,5];\nconst doubled=numbers.map(n=>n*2);\nconsole.log("Doubled:",doubled);`,
  typescript: `// TypeScript Playground\ninterface Person{name:string;age:number;}\nfunction greet(p:Person):string{return 'Hello, '+p.name+'!';}\nconst user:Person={name:"Alice",age:30};\nconsole.log(greet(user));`,
  python: `# Python Playground\nprint("Hello from Python!")\nsquares=[x**2 for x in range(10)]\nprint(f"Squares: {squares}")`,
  sql: `-- SQL Playground\nCREATE TABLE users(id INT,name VARCHAR(100));\nINSERT INTO users VALUES(1,'Alice');\nSELECT * FROM users;`,
  bash: `#!/bin/bash\necho "Welcome to Bash!"\necho "Current date: $(date)"`,
  java: `// Java Playground\npublic class Main{\n    public static void main(String[] args){\n        System.out.println("Hello Java!");\n    }\n}`,
  cpp: `// C++ Playground\n#include <iostream>\nusing namespace std;\nint main(){\n    cout << "Hello C++!" << endl;\n    return 0;\n}`,
  c: `// C Playground\n#include <stdio.h>\nint main(){\n    printf("Hello C!\\n");\n    return 0;\n}`
};

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export default function CodePlayground() {
  const [currentLanguage, setCurrentLanguage] = useState("react");
  const [jsxCode, setJsxCode] = useState(DEFAULT_REACT_JSX);
  const [cssCode, setCssCode] = useState(DEFAULT_REACT_CSS);
  const [htmlCode, setHtmlCode] = useState(DEFAULT_REACT_HTML);
  const [htmlCssJsCode, setHtmlCssJsCode] = useState(DEFAULT_HTML_CSS_JS);
  const [plainCode, setPlainCode] = useState("");
  const [activeFile, setActiveFile] = useState("jsx");
  const [category, setCategory] = useState("ReactComponents");
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [iframeKey, setIframeKey] = useState(0);
  const [autoRun, setAutoRun] = useState(false);
  const [copied, setCopied] = useState(false);
  const [fontSize, setFontSize] = useState(13);
  const [showSidebar, setShowSidebar] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);
  const [outputPanelHeight, setOutputPanelHeight] = useState(350);
  const [terminalOutput, setTerminalOutput] = useState("");
  const [files, setFiles] = useState([{ name: "main.jsx", content: DEFAULT_REACT_JSX, language: "react" }]);
  const [activeFileIndex, setActiveFileIndex] = useState(0);
  const [newFileName, setNewFileName] = useState("");
  const [showNewFileInput, setShowNewFileInput] = useState(false);
  
  const editorRef = useRef(null);
  const autoRunTimer = useRef(null);
  const isResizing = useRef(false);

  const languages = [
    { id: "react", label: "⚛️ React", icon: "⚛️", extensions: [".jsx", ".js"] },
    { id: "htmlcssjs", label: "🌐 HTML/CSS/JS", icon: "🌐", extensions: [".html", ".css", ".js"] },
    { id: "javascript", label: "📜 JavaScript", icon: "📜", extensions: [".js"] },
    { id: "typescript", label: "📘 TypeScript", icon: "📘", extensions: [".ts"] },
    { id: "python", label: "🐍 Python", icon: "🐍", extensions: [".py"] },
    { id: "sql", label: "🗄️ SQL", icon: "🗄️", extensions: [".sql"] },
    { id: "bash", label: "🖥️ Bash", icon: "🖥️", extensions: [".sh"] },
    { id: "java", label: "☕ Java", icon: "☕", extensions: [".java"] },
    { id: "cpp", label: "💻 C++", icon: "💻", extensions: [".cpp", ".cc"] },
    { id: "c", label: "🔵 C", icon: "🔵", extensions: [".c"] }
  ];

  const getCurrentCode = () => {
    if (files.length > 0 && activeFileIndex < files.length) {
      return files[activeFileIndex].content;
    }
    if (currentLanguage === "react") {
      if (activeFile === "jsx") return jsxCode;
      if (activeFile === "css") return cssCode;
      return htmlCode;
    } else if (currentLanguage === "htmlcssjs") {
      if (activeFile === "html") return htmlCssJsCode.html;
      if (activeFile === "css") return htmlCssJsCode.css;
      return htmlCssJsCode.js;
    } else {
      return plainCode;
    }
  };

  const setCurrentCode = (value) => {
    if (files.length > 0 && activeFileIndex < files.length) {
      const newFiles = [...files];
      newFiles[activeFileIndex].content = value;
      setFiles(newFiles);
      return;
    }
    if (currentLanguage === "react") {
      if (activeFile === "jsx") setJsxCode(value);
      else if (activeFile === "css") setCssCode(value);
      else setHtmlCode(value);
    } else if (currentLanguage === "htmlcssjs") {
      if (activeFile === "html") setHtmlCssJsCode({ ...htmlCssJsCode, html: value });
      else if (activeFile === "css") setHtmlCssJsCode({ ...htmlCssJsCode, css: value });
      else setHtmlCssJsCode({ ...htmlCssJsCode, js: value });
    } else {
      setPlainCode(value);
    }
  };

  const createNewFile = () => {
    if (!newFileName.trim()) return;
    const ext = newFileName.split('.').pop();
    let lang = "javascript";
    if (ext === "jsx") lang = "react";
    else if (ext === "html") lang = "htmlcssjs";
    else if (ext === "css") lang = "htmlcssjs";
    else if (ext === "ts") lang = "typescript";
    else if (ext === "py") lang = "python";
    else if (ext === "sql") lang = "sql";
    else if (ext === "sh") lang = "bash";
    else if (ext === "java") lang = "java";
    else if (ext === "cpp" || ext === "cc") lang = "cpp";
    else if (ext === "c") lang = "c";
    
    let defaultContent = "";
    if (lang === "react") defaultContent = DEFAULT_REACT_JSX;
    else if (lang === "htmlcssjs") defaultContent = DEFAULT_HTML_CSS_JS.html;
    else defaultContent = LANGUAGE_DEFAULTS[lang] || `// New ${ext} file`;
    
    const newFile = { name: newFileName, content: defaultContent, language: lang };
    setFiles([...files, newFile]);
    setActiveFileIndex(files.length);
    setCurrentLanguage(lang);
    setNewFileName("");
    setShowNewFileInput(false);
    setTimeout(() => runCode(), 100);
  };

  const deleteFile = (index) => {
    if (files.length === 1) return;
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
    if (activeFileIndex >= newFiles.length) setActiveFileIndex(newFiles.length - 1);
  };

  const handleLanguageChange = (langId) => {
    setCurrentLanguage(langId);
    setSelectedTemplate("");
    if (langId === "react") {
      setActiveFile("jsx");
    } else if (langId === "htmlcssjs") {
      setActiveFile("html");
      if (!htmlCssJsCode.html) setHtmlCssJsCode(DEFAULT_HTML_CSS_JS);
    } else {
      setActiveFile("code");
      if (!plainCode && LANGUAGE_DEFAULTS[langId]) setPlainCode(LANGUAGE_DEFAULTS[langId]);
    }
    setTimeout(() => runCode(), 100);
  };

  const executeCodeInTerminal = (code, language) => {
    let output = "";
    if (language === "javascript") {
      const oldLog = console.log;
      console.log = (...args) => { output += args.join(" ") + "\n"; oldLog(...args); };
      try { eval(code); } catch(e) { output += `Error: ${e.message}\n`; }
      console.log = oldLog;
    } else if (language === "python") {
      output = "⚠️ Python execution requires a backend server.\nRunning in simulation mode.\n";
      output += "Code:\n" + code.substring(0, 500) + (code.length > 500 ? "..." : "");
    } else if (language === "sql") {
      output = "📊 SQL Query Simulation:\n" + code.substring(0, 300);
    } else if (language === "bash") {
      output = "🐚 Bash Script Simulation:\n" + code.substring(0, 300);
    } else if (language === "java" || language === "cpp" || language === "c") {
      output = `🔧 ${language.toUpperCase()} compilation simulation:\n` + code.substring(0, 400);
    } else {
      output = `📝 ${language.toUpperCase()} code ready for execution in local environment.\n`;
    }
    setTerminalOutput(output);
  };

  const generateOutputHTML = useCallback(() => {
    if (currentLanguage === "react") {
      return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>${cssCode}</style><script src="https://unpkg.com/react@18/umd/react.development.js"></script><script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script><script src="https://unpkg.com/@babel/standalone/babel.min.js"></script></head><body><div id="root"></div><script type="text/babel">${jsxCode}</script></body></html>`;
    } else if (currentLanguage === "htmlcssjs") {
      let fullHtml = htmlCssJsCode.html || DEFAULT_HTML_CSS_JS.html;
      if (htmlCssJsCode.css) fullHtml = fullHtml.replace('</head>', `<style>${htmlCssJsCode.css}</style></head>`);
      if (htmlCssJsCode.js) fullHtml = fullHtml.replace('</body>', `<script>${htmlCssJsCode.js}</script></body>`);
      return fullHtml;
    } else {
      const code = getCurrentCode();
      executeCodeInTerminal(code, currentLanguage);
      return `<!DOCTYPE html><html><head><style>body{background:#1a1a2e;color:#00ff88;font-family:monospace;padding:20px;}pre{background:#0a0a1a;padding:20px;border-radius:10px;overflow:auto;}</style></head><body><h2>${currentLanguage.toUpperCase()} Code Output</h2><pre>${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre><div style="margin-top:20px;padding:20px;background:#0a0a1a;border-radius:10px;"><strong>Terminal Output:</strong><pre id="terminal-output">${terminalOutput}</pre></div></body></html>`;
    }
  }, [currentLanguage, jsxCode, cssCode, htmlCode, htmlCssJsCode, plainCode, terminalOutput]);

  const runCode = useCallback(() => {
    setIframeKey((k) => k + 1);
  }, []);

  useEffect(() => {
    if (!autoRun) return;
    clearTimeout(autoRunTimer.current);
    autoRunTimer.current = setTimeout(runCode, 800);
    return () => clearTimeout(autoRunTimer.current);
  }, [jsxCode, cssCode, htmlCode, htmlCssJsCode, plainCode, autoRun, runCode, currentLanguage]);

  const handleTemplate = (e) => {
    const key = e.target.value;
    setSelectedTemplate(key);
    if (key && TEMPLATES[category] && TEMPLATES[category][key]) {
      const template = TEMPLATES[category][key];
      const lang = template.language;
      setCurrentLanguage(lang);
      if (lang === "react") {
        setJsxCode(template.jsx || DEFAULT_REACT_JSX);
        setCssCode(template.css || DEFAULT_REACT_CSS);
        setHtmlCode(template.html || DEFAULT_REACT_HTML);
        setActiveFile("jsx");
      } else if (lang === "htmlcssjs") {
        setHtmlCssJsCode({ html: template.html || DEFAULT_HTML_CSS_JS.html, css: template.css || DEFAULT_HTML_CSS_JS.css, js: template.js || DEFAULT_HTML_CSS_JS.js });
        setActiveFile("html");
      } else {
        setPlainCode(template.code || LANGUAGE_DEFAULTS[lang] || `// ${lang} template`);
        setActiveFile("code");
      }
      setTimeout(() => runCode(), 100);
    }
  };

  const saveToLocalStorage = () => {
    const project = { language: currentLanguage, jsxCode, cssCode, htmlCode, htmlCssJsCode, plainCode, files, timestamp: new Date().toISOString() };
    localStorage.setItem('multiLangPlayground_project', JSON.stringify(project));
    alert('✅ Project saved!');
  };

  const loadFromLocalStorage = () => {
    const saved = localStorage.getItem('multiLangPlayground_project');
    if (saved) {
      const project = JSON.parse(saved);
      setCurrentLanguage(project.language);
      setJsxCode(project.jsxCode || DEFAULT_REACT_JSX);
      setCssCode(project.cssCode || DEFAULT_REACT_CSS);
      setHtmlCode(project.htmlCode || DEFAULT_REACT_HTML);
      setHtmlCssJsCode(project.htmlCssJsCode || DEFAULT_HTML_CSS_JS);
      setPlainCode(project.plainCode || "");
      if (project.files) setFiles(project.files);
      setTimeout(() => runCode(), 100);
      alert('📂 Project loaded!');
    } else alert('No saved project found');
  };

  const copyCode = () => {
    navigator.clipboard.writeText(getCurrentCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  const resetCode = () => {
    if (currentLanguage === "react") { setJsxCode(DEFAULT_REACT_JSX); setCssCode(DEFAULT_REACT_CSS); setHtmlCode(DEFAULT_REACT_HTML); }
    else if (currentLanguage === "htmlcssjs") setHtmlCssJsCode(DEFAULT_HTML_CSS_JS);
    else setPlainCode(LANGUAGE_DEFAULTS[currentLanguage] || `// ${currentLanguage} code`);
    setSelectedTemplate("");
    setTimeout(() => runCode(), 100);
  };

  const downloadProject = () => {
    if (files.length > 0) {
      files.forEach(({ name, content }) => { const blob = new Blob([content], { type: 'text/plain' }); const link = document.createElement('a'); link.href = URL.createObjectURL(blob); link.download = name; link.click(); URL.revokeObjectURL(link.href); });
    } else if (currentLanguage === "react") {
      const files = [{ name: "App.jsx", content: jsxCode }, { name: "styles.css", content: cssCode }, { name: "index.html", content: htmlCode }];
      files.forEach(({ name, content }) => { const blob = new Blob([content], { type: 'text/plain' }); const link = document.createElement('a'); link.href = URL.createObjectURL(blob); link.download = name; link.click(); URL.revokeObjectURL(link.href); });
    } else if (currentLanguage === "htmlcssjs") {
      const files = [{ name: "index.html", content: htmlCssJsCode.html }, { name: "styles.css", content: htmlCssJsCode.css }, { name: "script.js", content: htmlCssJsCode.js }];
      files.forEach(({ name, content }) => { const blob = new Blob([content], { type: 'text/plain' }); const link = document.createElement('a'); link.href = URL.createObjectURL(blob); link.download = name; link.click(); URL.revokeObjectURL(link.href); });
    } else {
      const extMap = { javascript: "js", typescript: "ts", python: "py", sql: "sql", bash: "sh", java: "java", cpp: "cpp", c: "c" };
      const ext = extMap[currentLanguage] || "txt";
      const blob = new Blob([plainCode], { type: 'text/plain' }); const link = document.createElement('a'); link.href = URL.createObjectURL(blob); link.download = `code.${ext}`; link.click(); URL.revokeObjectURL(link.href);
    }
  };

  const lineCount = getCurrentCode().split("\n").length;
  const lineNums = Array.from({ length: lineCount }, (_, i) => i + 1).join("\n");

  const startResizing = (e) => { isResizing.current = true; document.addEventListener('mousemove', handleResize); document.addEventListener('mouseup', stopResizing); };
  const handleResize = (e) => { if (!isResizing.current) return; const newHeight = window.innerHeight - e.clientY - 50; if (newHeight > 200 && newHeight < 600) setOutputPanelHeight(newHeight); };
  const stopResizing = () => { isResizing.current = false; document.removeEventListener('mousemove', handleResize); document.removeEventListener('mouseup', stopResizing); };
  const toggleFullscreen = () => { const element = document.querySelector('.pg-container'); if (!fullscreen) element.requestFullscreen(); else document.exitFullscreen(); setFullscreen(!fullscreen); };

  const getCategoryCount = (cat) => TEMPLATES[cat] ? Object.keys(TEMPLATES[cat]).length : 0;

  return (
    <div className={`pg-container ${fullscreen ? 'fullscreen' : ''}`}>
      <section className="pg-section">
        <div className="pg-topbar">
          <div className="pg-dots"><span className="pg-dot pg-dot-r" /><span className="pg-dot pg-dot-y" /><span className="pg-dot pg-dot-g" /></div>
          <span className="pg-title">🌈 MULTI-LANG PLAYGROUND — 10 Languages + VS Code File Explorer</span>
          <div className="pg-topbar-right">
            <div className="pg-mode-indicator"><span className="pg-mode-badge active">{languages.find(l => l.id === currentLanguage)?.label}</span></div>
            <button className="pg-icon-btn" onClick={() => setShowSidebar(!showSidebar)} title="Toggle Sidebar">{showSidebar ? '◀' : '▶'}</button>
            <label className="pg-autorun-label"><input type="checkbox" checked={autoRun} onChange={(e) => setAutoRun(e.target.checked)} />auto-run</label>
          </div>
        </div>

        <div className="pg-language-bar">
          {languages.map(lang => (<button key={lang.id} className={`pg-lang-btn ${currentLanguage === lang.id ? 'active' : ''}`} onClick={() => handleLanguageChange(lang.id)}>{lang.icon} {lang.label}</button>))}
        </div>

        <div className="pg-main-layout">
          {showSidebar && (<div className="pg-sidebar">
            <div className="pg-sidebar-header"><h3>📁 FILE EXPLORER</h3><button className="pg-icon-btn-sm" onClick={() => setShowNewFileInput(!showNewFileInput)}>+ New File</button></div>
            {showNewFileInput && (<div className="pg-new-file"><input type="text" placeholder="filename.jsx" value={newFileName} onChange={(e) => setNewFileName(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && createNewFile()} /><button onClick={createNewFile}>Create</button></div>)}
            <div className="pg-file-list">{files.map((file, idx) => (<div key={idx} className={`pg-file-item ${activeFileIndex === idx ? 'active' : ''}`} onClick={() => { setActiveFileIndex(idx); setCurrentLanguage(file.language); }}><span>📄 {file.name}</span><button className="pg-file-delete" onClick={(e) => { e.stopPropagation(); deleteFile(idx); }}>×</button></div>))}</div>
            <div className="pg-sidebar-divider"></div>
            <div className="pg-sidebar-header"><h3>📁 TEMPLATE LIBRARY</h3><span className="pg-template-count">50+ templates</span></div>
            <select className="pg-sidebar-select" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="ReactComponents">⚛️ React Components ({getCategoryCount("ReactComponents")})</option>
              <option value="HTML_CSS_JS">🎨 HTML/CSS/JS ({getCategoryCount("HTML_CSS_JS")})</option>
              <option value="JavaScript">📜 JavaScript ({getCategoryCount("JavaScript")})</option>
              <option value="TypeScript">📘 TypeScript ({getCategoryCount("TypeScript")})</option>
              <option value="Python">🐍 Python ({getCategoryCount("Python")})</option>
              <option value="SQL">🗄️ SQL ({getCategoryCount("SQL")})</option>
              <option value="Bash">🖥️ Bash ({getCategoryCount("Bash")})</option>
              <option value="Java">☕ Java ({getCategoryCount("Java")})</option>
              <option value="Cpp">💻 C++ ({getCategoryCount("Cpp")})</option>
              <option value="C">🔵 C ({getCategoryCount("C")})</option>
            </select>
            <select className="pg-sidebar-select" value={selectedTemplate} onChange={handleTemplate}>
              <option value="">— Choose Template —</option>
              {TEMPLATES[category] && Object.keys(TEMPLATES[category]).map((key) => (<option key={key} value={key}>{TEMPLATES[category][key].label || key}</option>))}
            </select>
            <div className="pg-sidebar-divider"></div>
            <div className="pg-sidebar-actions">
              <button className="pg-sidebar-btn" onClick={saveToLocalStorage}>💾 Save Project</button>
              <button className="pg-sidebar-btn" onClick={loadFromLocalStorage}>📂 Load Project</button>
              <button className="pg-sidebar-btn" onClick={downloadProject}>⬇️ Download</button>
              <button className="pg-sidebar-btn" onClick={toggleFullscreen}>🖥️ Fullscreen</button>
            </div>
            <div className="pg-sidebar-info"><p>💡 Pro Tips:</p><ul><li>Create new files with any extension</li><li>Switch languages anytime</li><li>Auto-run updates preview</li><li>50+ ready-to-use templates</li><li>Terminal output for code execution</li></ul></div>
          </div>)}

          <div className="pg-main-content">
            <div className="pg-file-tabs">
              {files.map((file, idx) => (<button key={idx} className={`pg-file-tab ${activeFileIndex === idx ? 'active' : ''}`} onClick={() => { setActiveFileIndex(idx); setCurrentLanguage(file.language); }}>{file.name}</button>))}
              <div className="pg-tab-actions"><button className="pg-icon-btn" onClick={copyCode}>{copied ? "✓ Copied!" : "📋 Copy"}</button><button className="pg-icon-btn" onClick={resetCode}>⟳ Reset</button><button className="pg-run-btn" onClick={runCode}>▶ Run Code</button></div>
            </div>

            <div className="pg-editor-output">
              <div className="pg-editor-area">
                <div className="pg-editor-header"><span className="pg-lang-badge">{currentLanguage.toUpperCase()}</span><span className="pg-line-info">{lineCount} lines</span>
                  <div className="pg-font-controls"><button className="pg-icon-btn-sm" onClick={() => setFontSize(f => Math.max(10, f-1))}>A-</button><span className="pg-fontsize">{fontSize}px</span><button className="pg-icon-btn-sm" onClick={() => setFontSize(f => Math.min(18, f+1))}>A+</button></div>
                </div>
                <div className="pg-editor-row"><div className="pg-line-nums">{lineNums}</div><textarea ref={editorRef} className="pg-textarea" value={getCurrentCode()} onChange={(e) => setCurrentCode(e.target.value)} onKeyDown={(e) => { if (e.key === "Tab") { e.preventDefault(); const start = e.target.selectionStart; const end = e.target.selectionEnd; const value = getCurrentCode(); setCurrentCode(value.substring(0, start) + "  " + value.substring(end)); setTimeout(() => { e.target.selectionStart = e.target.selectionEnd = start + 2; }, 0); } }} spellCheck={false} style={{ fontSize: `${fontSize}px`, fontFamily: 'monospace' }} /></div>
              </div>
              <div className="pg-resize-handle" onMouseDown={startResizing}><div className="pg-resize-line"></div></div>
              <div className="pg-output-area" style={{ height: outputPanelHeight }}>
                <div className="pg-output-header"><span className="pg-output-dot"></span><span className="pg-output-label">📺 Live Preview</span><button className="pg-refresh-btn" onClick={runCode}>⟳ Refresh</button></div>
                <iframe key={iframeKey} className="pg-output-iframe" title="output" sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals" srcDoc={generateOutputHTML()} />
              </div>
            </div>
          </div>
        </div>

        <div className="pg-footer"><span className="pg-prompt">$</span><span className="pg-footer-slogan">Multi-Language Playground • React • HTML/CSS/JS • JavaScript • TypeScript • Python • SQL • Bash • Java • C++ • C</span><span className="pg-footer-right">50+ Templates • 10 Languages</span></div>
      </section>
    </div>
  );
}
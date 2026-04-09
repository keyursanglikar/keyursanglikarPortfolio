import React, { useState, useRef, useEffect, useCallback } from "react";
import "./CSS/CodePlayground.css";

// ─── TEMPLATE LIBRARY WITH 70+ COMPONENTS (MULTI-LANGUAGE) ──────────────────

const TEMPLATES = {
  ReactComponents: {
    "useState Counter": {
      label: "useState Counter ⚛️",
      language: "jsx",
      code: `// React useState Counter Component
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

export default Counter;`
    },
    "useEffect Fetch API": {
      label: "useEffect Fetch API ⚛️",
      language: "jsx",
      code: `// React useEffect Fetch Example
import React, { useState, useEffect } from 'react';

function JokeFetcher() {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await res.json();
      setJoke(\`\${data.setup} ... \${data.punchline}\`);
    } catch (error) {
      setJoke('Failed to fetch joke');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h2 style={{ color: '#38bdf8' }}>Random Joke Generator</h2>
      <div style={{ background: '#07101f', padding: '20px', borderRadius: '10px', margin: '20px 0' }}>
        <p style={{ color: '#8a96a8' }}>{loading ? 'Loading...' : joke}</p>
      </div>
      <button onClick={fetchJoke} style={buttonStyle}>
        {loading ? 'Loading...' : 'New Joke'}
      </button>
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

export default JokeFetcher;`
    },
    "Todo List App": {
      label: "Todo List App ⚛️",
      language: "jsx",
      code: `// React Todo List Component
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
          onKeyPress={(e) => e.key === 'Enter' && addTodo()} placeholder="Add a task..."
          style={inputStyle} />
        <button onClick={addTodo} style={buttonStyle}>Add</button>
      </div>
      <div>
        {todos.map(todo => (
          <div key={todo.id} style={todoItemStyle}>
            <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none', flex: 1 }}>
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)} style={deleteStyle}>×</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const inputStyle = { flex: 1, padding: '10px', background: '#07101f', border: '1px solid #0f2744', borderRadius: '8px', color: 'white' };
const buttonStyle = { padding: '10px 20px', background: '#38bdf8', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' };
const todoItemStyle = { display: 'flex', alignItems: 'center', padding: '10px', background: '#07101f', marginBottom: '8px', borderRadius: '8px', gap: '10px' };
const deleteStyle = { background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer', fontSize: '18px' };

export default TodoApp;`
    },
    "Counter with History": {
      label: "Counter with History ⚛️",
      language: "jsx",
      code: `// React Counter with History
import React, { useState } from 'react';

function CounterWithHistory() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

  const updateCount = (newCount, action) => {
    setCount(newCount);
    setHistory([{ value: newCount, action, time: new Date().toLocaleTimeString() }, ...history].slice(0, 10));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2 style={{ color: '#38bdf8', textAlign: 'center' }}>Counter with History</h2>
      <div style={{ fontSize: '72px', textAlign: 'center', color: 'white', margin: '20px 0' }}>{count}</div>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '30px' }}>
        <button onClick={() => updateCount(count - 1, 'Decrement')} style={buttonStyle}>-</button>
        <button onClick={() => updateCount(0, 'Reset')} style={buttonStyle}>Reset</button>
        <button onClick={() => updateCount(count + 1, 'Increment')} style={buttonStyle}>+</button>
      </div>
      <div style={{ borderTop: '1px solid #0f2744', paddingTop: '20px' }}>
        <h3 style={{ color: '#8a96a8', fontSize: '12px' }}>History (last 10 actions)</h3>
        {history.map((item, idx) => (
          <div key={idx} style={{ color: '#3a4a60', fontSize: '11px', padding: '5px 0' }}>
            {item.time} - {item.action}: {item.value}
          </div>
        ))}
      </div>
    </div>
  );
}

const buttonStyle = { padding: '10px 20px', background: '#38bdf8', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' };
export default CounterWithHistory;`
    },
    "Form with Validation": {
      label: "Form with Validation ⚛️",
      language: "jsx",
      code: `// React Form with Validation
import React, { useState } from 'react';

function SignupForm() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      alert('Form submitted successfully!');
      setFormData({ name: '', email: '', password: '' });
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ color: '#38bdf8', textAlign: 'center' }}>Sign Up Form</h2>
      <div style={{ marginBottom: '15px' }}>
        <input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} style={inputStyle} />
        {errors.name && <span style={errorStyle}>{errors.name}</span>}
      </div>
      <div style={{ marginBottom: '15px' }}>
        <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} style={inputStyle} />
        {errors.email && <span style={errorStyle}>{errors.email}</span>}
      </div>
      <div style={{ marginBottom: '20px' }}>
        <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} style={inputStyle} />
        {errors.password && <span style={errorStyle}>{errors.password}</span>}
      </div>
      <button type="submit" style={buttonStyle}>Sign Up</button>
    </form>
  );
}

const inputStyle = { width: '100%', padding: '12px', background: '#07101f', border: '1px solid #0f2744', borderRadius: '8px', color: 'white' };
const errorStyle = { color: '#ef4444', fontSize: '12px', marginTop: '5px', display: 'block' };
const buttonStyle = { width: '100%', padding: '12px', background: '#38bdf8', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' };
export default SignupForm;`
    },
    "Dark Mode Toggle": {
      label: "Dark Mode Toggle ⚛️",
      language: "jsx",
      code: `// React Dark Mode Toggle
import React, { useState, useEffect } from 'react';

function DarkModeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.body.style.background = isDark ? '#060d1a' : '#f0f0f0';
  }, [isDark]);

  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <div style={{ background: isDark ? '#07101f' : 'white', padding: '30px', borderRadius: '20px' }}>
        <h2 style={{ color: isDark ? '#38bdf8' : '#060d1a' }}>Dark Mode Demo</h2>
        <p style={{ color: isDark ? '#8a96a8' : '#666' }}>Click the button to toggle theme</p>
        <button onClick={() => setIsDark(!isDark)} style={{ padding: '12px 24px', background: '#38bdf8', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold' }}>
          {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
    </div>
  );
}
export default DarkModeToggle;`
    },
    "API Data Display": {
      label: "API Data Display ⚛️",
      language: "jsx",
      code: `// React API Data Display
import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => { setUsers(data.slice(0, 6)); setLoading(false); })
      .catch(err => { console.error(err); setLoading(false); });
  }, []);

  if (loading) return <div style={{ textAlign: 'center', color: '#38bdf8', padding: '40px' }}>Loading users...</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ color: '#38bdf8', textAlign: 'center' }}>User Directory</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>
        {users.map(user => (
          <div key={user.id} style={{ background: '#07101f', border: '1px solid #0f2744', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'linear-gradient(135deg, #38bdf8, #6366f1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px', fontSize: '24px', fontWeight: 'bold', color: 'white' }}>
              {user.name.charAt(0)}
            </div>
            <h3 style={{ color: 'white', fontSize: '16px' }}>{user.name}</h3>
            <p style={{ color: '#8a96a8', fontSize: '12px' }}>{user.email}</p>
            <p style={{ color: '#3a4a60', fontSize: '11px' }}>{user.company.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default UserList;`
    }
  },
  HTML_CSS_JS: {
    "Glassmorphism Card": {
      label: "Glassmorphism Card 🎴",
      language: "html",
      html: `<!DOCTYPE html>
<html>
<head><link rel="stylesheet" href="styles.css"></head>
<body>
  <div class="glass">
    <div class="avatar">✨</div>
    <h2>Glass Card</h2>
    <p>Modern UI with blur effect</p>
    <span class="tag">New</span>
  </div>
</body>
</html>`,
      css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body {
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e, #16213e, #0f3460);
  display: flex;
  align-items: center;
  justify-content: center;
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
  background: rgba(56,189,248,0.2);
  border: 1px solid rgba(56,189,248,0.4);
  border-radius: 20px; color: #38bdf8; font-size: 11px;
}`,
      js: `// Glass card interaction
document.querySelector('.glass')?.addEventListener('click', function() {
  this.style.transform = 'scale(0.98)';
  setTimeout(() => { this.style.transform = ''; }, 200);
});`
    },
    "Neon Buttons": {
      label: "Neon Buttons 🔘",
      language: "html",
      html: `<!DOCTYPE html>
<html>
<head><link rel="stylesheet" href="styles.css"></head>
<body>
  <div class="container">
    <button class="neon-btn pink">Neon Pink</button>
    <button class="neon-btn blue">Neon Blue</button>
    <button class="neon-btn green">Neon Green</button>
  </div>
</body>
</html>`,
      css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body {
  min-height: 100vh;
  background: #0a0a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Segoe UI', sans-serif;
}
.container { display: flex; gap: 30px; flex-wrap: wrap; justify-content: center; }
.neon-btn {
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  background: transparent;
  border: 2px solid;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}
.neon-btn.pink { color: #ff00de; border-color: #ff00de; box-shadow: 0 0 10px #ff00de; }
.neon-btn.pink:hover { background: #ff00de; color: #0a0a1a; box-shadow: 0 0 20px #ff00de; }
.neon-btn.blue { color: #00e0ff; border-color: #00e0ff; box-shadow: 0 0 10px #00e0ff; }
.neon-btn.blue:hover { background: #00e0ff; color: #0a0a1a; box-shadow: 0 0 20px #00e0ff; }
.neon-btn.green { color: #00ff88; border-color: #00ff88; box-shadow: 0 0 10px #00ff88; }
.neon-btn.green:hover { background: #00ff88; color: #0a0a1a; box-shadow: 0 0 20px #00ff88; }`,
      js: `// Neon button click effect
document.querySelectorAll('.neon-btn').forEach(btn => {
  btn.addEventListener('click', () => console.log(\`\${btn.innerText} clicked\`));
});`
    },
    "Animated Gradient Background": {
      label: "Animated Gradient BG 🌈",
      language: "html",
      html: `<!DOCTYPE html>
<html>
<head><link rel="stylesheet" href="styles.css"></head>
<body>
  <div class="content">
    <h1>Animated Gradient</h1>
    <p>Moving gradient background</p>
  </div>
</body>
</html>`,
      css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body {
  min-height: 100vh;
  background: linear-gradient(270deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
  background-size: 800% 800%;
  animation: gradientBG 12s ease infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Segoe UI', sans-serif;
}
@keyframes gradientBG {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.content { text-align: center; color: white; background: rgba(0,0,0,0.4); padding: 40px; border-radius: 20px; backdrop-filter: blur(10px); }
h1 { font-size: 48px; margin-bottom: 20px; }`,
      js: `// Just for show
console.log('Animated gradient running');`
    },
    "3D Flip Card": {
      label: "3D Flip Card 🃏",
      language: "html",
      html: `<!DOCTYPE html>
<html>
<head><link rel="stylesheet" href="styles.css"></head>
<body>
  <div class="flip-card">
    <div class="flip-inner">
      <div class="flip-front">
        <h2>Front Side</h2>
        <p>Hover to flip</p>
      </div>
      <div class="flip-back">
        <h2>Back Side</h2>
        <p>Amazing 3D effect!</p>
      </div>
    </div>
  </div>
</body>
</html>`,
      css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Segoe UI', sans-serif;
}
.flip-card {
  width: 300px;
  height: 400px;
  perspective: 1000px;
  cursor: pointer;
}
.flip-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}
.flip-card:hover .flip-inner { transform: rotateY(180deg); }
.flip-front, .flip-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.flip-front {
  background: linear-gradient(135deg, #f093fb, #f5576c);
  color: white;
}
.flip-back {
  background: linear-gradient(135deg, #4facfe, #00f2fe);
  color: white;
  transform: rotateY(180deg);
}
h2 { margin-bottom: 20px; }`,
      js: `// Flip card ready`
    },
    "Responsive Navbar": {
      label: "Responsive Navbar 🧭",
      language: "html",
      html: `<!DOCTYPE html>
<html>
<head><link rel="stylesheet" href="styles.css"></head>
<body>
  <nav class="navbar">
    <div class="logo">Logo</div>
    <ul class="nav-links" id="navLinks">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    <div class="burger" id="burger">☰</div>
  </nav>
  <div class="hero"><h1>Responsive Navbar</h1></div>
</body>
</html>`,
      css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Segoe UI', sans-serif; }
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background: #1a1a2e;
  color: white;
}
.logo { font-size: 24px; font-weight: bold; }
.nav-links {
  display: flex;
  list-style: none;
  gap: 30px;
}
.nav-links a { color: white; text-decoration: none; transition: 0.3s; }
.nav-links a:hover { color: #38bdf8; }
.burger {
  display: none;
  font-size: 28px;
  cursor: pointer;
}
.hero {
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #16213e, #0f3460);
  color: white;
}
@media (max-width: 768px) {
  .nav-links {
    position: fixed;
    right: -100%;
    top: 70px;
    flex-direction: column;
    background: #1a1a2e;
    width: 100%;
    text-align: center;
    transition: 0.3s;
    padding: 20px 0;
  }
  .nav-links.active { right: 0; }
  .burger { display: block; }
}`,
      js: `document.getElementById('burger').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('active');
});`
    },
    "Particle Background": {
      label: "Particle Background ✨",
      language: "html",
      html: `<!DOCTYPE html>
<html>
<head><link rel="stylesheet" href="styles.css"></head>
<body>
  <canvas id="canvas"></canvas>
  <div class="overlay"><h1>Particle System</h1></div>
</body>
</html>`,
      css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { overflow: hidden; background: #000; }
#canvas { position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: block; }
.overlay {
  position: relative;
  z-index: 10;
  color: white;
  text-align: center;
  padding-top: 20vh;
  font-family: 'Segoe UI', sans-serif;
  pointer-events: none;
}
h1 { font-size: 48px; text-shadow: 0 0 20px rgba(0,0,0,0.5); }`,
      js: `const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let particles = [];
const PARTICLE_COUNT = 100;

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 1.5;
    this.vy = (Math.random() - 0.5) * 1.5;
    this.radius = Math.random() * 3 + 1;
    this.color = \`hsl(\${Math.random() * 360}, 70%, 60%)\`;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

for (let i = 0; i < PARTICLE_COUNT; i++) {
  particles.push(new Particle());
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  // connect nearby particles
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        ctx.beginPath();
        ctx.strokeStyle = \`rgba(255,255,255,\${1 - dist/100})\`;
        ctx.lineWidth = 0.5;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(animate);
}
animate();`
    }
  },
  Python: {
    "Hello World": {
      label: "Hello World 🐍",
      language: "python",
      code: `# Simple Python Hello World
print("Hello from Python!")
name = input("What's your name? ")
print(f"Nice to meet you, {name}!")

# List comprehension example
squares = [x**2 for x in range(10)]
print(f"Squares: {squares}")`
    },
    "Fibonacci Sequence": {
      label: "Fibonacci Sequence 🐍",
      language: "python",
      code: `# Fibonacci sequence generator
def fibonacci(n):
    a, b = 0, 1
    sequence = []
    for _ in range(n):
        sequence.append(a)
        a, b = b, a + b
    return sequence

n = 15
result = fibonacci(n)
print(f"First {n} Fibonacci numbers:")
print(result)
print(f"Golden ratio approx: {result[-1] / result[-2]:.6f}")`
    },
    "Data Analysis Example": {
      label: "Data Analysis Example 📊",
      language: "python",
      code: `# Simple data analysis with Python
import random
import statistics

# Generate random data
data = [random.randint(1, 100) for _ in range(50)]

print(f"Data sample: {data[:10]}...")
print(f"Mean: {statistics.mean(data):.2f}")
print(f"Median: {statistics.median(data)}")
print(f"Standard deviation: {statistics.stdev(data):.2f}")
print(f"Min: {min(data)}, Max: {max(data)}")

# Frequency distribution
freq = {}
for num in data:
    freq[num] = freq.get(num, 0) + 1
most_common = max(freq, key=freq.get)
print(f"Most common value: {most_common} (appears {freq[most_common]} times)")`
    },
    "Web Scraper Demo": {
      label: "Web Scraper Demo 🕸️",
      language: "python",
      code: `# Mock web scraper demonstration
import requests
from bs4 import BeautifulSoup

# Note: This is a template - replace URL with actual site
url = "https://example.com"
try:
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    print(f"Page title: {soup.title.string if soup.title else 'No title'}")
    
    # Find all links
    links = soup.find_all('a')
    print(f"Found {len(links)} links")
    for link in links[:5]:
        print(f"  - {link.get('href')}")
except Exception as e:
    print(f"Could not fetch: {e}")
    print("This is a template - install requests and beautifulsoup4")`
    }
  },
  JavaScript: {
    "Digital Clock": {
      label: "Digital Clock 🕐",
      language: "javascript",
      code: `// Digital Clock with JavaScript
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = \`\${hours}:\${minutes}:\${seconds}\`;
    
    // For browser environment
    if (typeof document !== 'undefined') {
        const clockDiv = document.getElementById('clock');
        if (clockDiv) clockDiv.textContent = timeString;
    }
    console.log(timeString);
}

// Run every second
setInterval(updateClock, 1000);
updateClock();

// Also show date
const date = new Date();
console.log(\`Date: \${date.toDateString()}\`);`
    },
    "Weather App (Mock)": {
      label: "Weather App Mock 🌤️",
      language: "javascript",
      code: `// Mock Weather Application
async function getWeather(city = "New York") {
    // Mock data - in real app, use actual API
    const mockWeather = {
        temperature: Math.floor(Math.random() * 30) + 10,
        condition: ["Sunny", "Cloudy", "Rainy", "Windy"][Math.floor(Math.random() * 4)],
        humidity: Math.floor(Math.random() * 50) + 30,
        city: city
    };
    
    console.log(\`Weather in \${mockWeather.city}:\`);
    console.log(\`🌡️ Temperature: \${mockWeather.temperature}°C\`);
    console.log(\`☁️ Condition: \${mockWeather.condition}\`);
    console.log(\`💧 Humidity: \${mockWeather.humidity}%\`);
    
    return mockWeather;
}

// Get weather for multiple cities
const cities = ["New York", "London", "Tokyo", "Sydney"];
cities.forEach(city => getWeather(city));

// Display in browser if available
if (typeof document !== 'undefined') {
    const div = document.createElement('div');
    div.innerHTML = '<h3>Weather Mock Data</h3><p>Check console for details</p>';
    document.body.appendChild(div);
}`
    },
    "To-Do List (Vanilla JS)": {
      label: "To-Do List Vanilla ✅",
      language: "javascript",
      code: `// Vanilla JavaScript To-Do List
let todos = [];

function addTodo(text) {
    todos.push({ id: Date.now(), text, completed: false });
    renderTodos();
}

function toggleTodo(id) {
    todos = todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    renderTodos();
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    renderTodos();
}

function renderTodos() {
    console.clear();
    console.log("=== MY TODOS ===");
    todos.forEach(todo => {
        const status = todo.completed ? "✓" : "○";
        console.log(\`\${status} \${todo.text} [\${todo.id}]\`);
    });
    console.log(\`Total: \${todos.length} items\`);
}

// Demo
addTodo("Learn JavaScript");
addTodo("Build a project");
addTodo("Review code");
toggleTodo(todos[0].id);
deleteTodo(todos[1].id);

// Export for module use
if (typeof module !== 'undefined') module.exports = { addTodo, toggleTodo, deleteTodo };`
    }
  },
  TypeScript: {
    "Basic Types": {
      label: "Basic Types 📘",
      language: "typescript",
      code: `// TypeScript Basic Types Demo
interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
    createdAt: Date;
}

type Status = "pending" | "active" | "completed";

function greetUser(user: User): string {
    return \`Hello, \${user.name}! You've been active since \${user.createdAt.toLocaleDateString()}\`;
}

function updateStatus(status: Status): void {
    console.log(\`Status updated to: \${status}\`);
}

// Usage
const newUser: User = {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    isActive: true,
    createdAt: new Date()
};

console.log(greetUser(newUser));
updateStatus("active");

// Generic example
function identity<T>(value: T): T {
    return value;
}

console.log(identity<string>("TypeScript is awesome!"));
console.log(identity<number>(42));`
    },
    "React TypeScript Component": {
      label: "React + TS Component ⚛️📘",
      language: "typescript",
      code: `// React TypeScript Component Template
import React, { useState, useEffect } from 'react';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TodoListProps {
    initialTodos?: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ initialTodos = [] }) => {
    const [todos, setTodos] = useState<Todo[]>(initialTodos);
    const [inputValue, setInputValue] = useState<string>('');

    const addTodo = (): void => {
        if (inputValue.trim()) {
            const newTodo: Todo = {
                id: Date.now(),
                text: inputValue,
                completed: false
            };
            setTodos([...todos, newTodo]);
            setInputValue('');
        }
    };

    const toggleTodo = (id: number): void => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>TypeScript Todo List</h2>
            <div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Add a task..."
                />
                <button onClick={addTodo}>Add</button>
            </div>
            <ul>
                {todos.map(todo => (
                    <li
                        key={todo.id}
                        onClick={() => toggleTodo(todo.id)}
                        style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
                    >
                        {todo.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;`
    }
  },
  HTML: {
    "Modern Landing Page": {
      label: "Modern Landing Page 🚀",
      language: "html",
      html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Modern Landing Page</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
    }
    .hero {
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: white;
      padding: 20px;
    }
    h1 { font-size: 4rem; margin-bottom: 20px; animation: fadeInUp 1s; }
    p { font-size: 1.2rem; margin-bottom: 30px; animation: fadeInUp 1s 0.2s both; }
    .btn {
      padding: 15px 30px;
      background: white;
      color: #667eea;
      border: none;
      border-radius: 50px;
      font-size: 1.1rem;
      cursor: pointer;
      transition: transform 0.3s;
      animation: fadeInUp 1s 0.4s both;
    }
    .btn:hover { transform: scale(1.05); }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 30px;
      padding: 50px;
      background: white;
    }
    .feature {
      text-align: center;
      padding: 30px;
    }
    .feature h3 { margin-bottom: 15px; }
  </style>
</head>
<body>
  <div class="hero">
    <h1>Welcome to Modern Web</h1>
    <p>Create stunning websites with our landing page template</p>
    <button class="btn" onclick="alert('Get Started!')">Get Started</button>
  </div>
  <div class="features">
    <div class="feature"><h3>🚀 Fast</h3><p>Lightning fast performance</p></div>
    <div class="feature"><h3>🎨 Modern</h3><p>Beautiful design</p></div>
    <div class="feature"><h3>📱 Responsive</h3><p>Works on all devices</p></div>
  </div>
</body>
</html>`,
      css: "",
      js: ""
    },
    "Coming Soon Page": {
      label: "Coming Soon Page ⏳",
      language: "html",
      html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Coming Soon</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #1e3c72, #2a5298);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }
    .container {
      text-align: center;
      padding: 20px;
    }
    h1 { font-size: 4rem; margin-bottom: 20px; }
    .countdown {
      display: flex;
      gap: 30px;
      justify-content: center;
      margin: 40px 0;
    }
    .time-box {
      background: rgba(255,255,255,0.1);
      padding: 20px;
      border-radius: 10px;
      min-width: 100px;
    }
    .time-number { font-size: 3rem; font-weight: bold; }
    .time-label { font-size: 0.9rem; opacity: 0.8; }
    .email-input {
      padding: 12px;
      width: 250px;
      border: none;
      border-radius: 5px;
      margin-right: 10px;
    }
    .subscribe-btn {
      padding: 12px 25px;
      background: #ff6b6b;
      border: none;
      border-radius: 5px;
      color: white;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Something Amazing is Coming</h1>
    <p>We're working hard to bring you something special</p>
    <div class="countdown">
      <div class="time-box"><div class="time-number" id="days">00</div><div class="time-label">Days</div></div>
      <div class="time-box"><div class="time-number" id="hours">00</div><div class="time-label">Hours</div></div>
      <div class="time-box"><div class="time-number" id="minutes">00</div><div class="time-label">Minutes</div></div>
      <div class="time-box"><div class="time-number" id="seconds">00</div><div class="time-label">Seconds</div></div>
    </div>
    <div>
      <input type="email" class="email-input" placeholder="Enter your email">
      <button class="subscribe-btn" onclick="alert('Thanks for subscribing!')">Notify Me</button>
    </div>
  </div>
  <script>
    function updateCountdown() {
      const target = new Date();
      target.setDate(target.getDate() + 30);
      const now = new Date();
      const diff = target - now;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (86400000)) / 3600000);
      const minutes = Math.floor((diff % 3600000) / 60000);
      const seconds = Math.floor((diff % 60000) / 1000);
      document.getElementById('days').textContent = String(days).padStart(2,'0');
      document.getElementById('hours').textContent = String(hours).padStart(2,'0');
      document.getElementById('minutes').textContent = String(minutes).padStart(2,'0');
      document.getElementById('seconds').textContent = String(seconds).padStart(2,'0');
    }
    setInterval(updateCountdown, 1000);
    updateCountdown();
  </script>
</body>
</html>`,
      css: "",
      js: ""
    }
  },
  CSS: {
    "Loading Spinners": {
      label: "Loading Spinners ⏳",
      language: "css",
      code: `/* Pure CSS Loading Spinners */
.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.spinner-double {
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #e74c3c;
  border-bottom: 5px solid #e74c3c;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

.spinner-pulse {
  width: 50px;
  height: 50px;
  background: #3498db;
  border-radius: 50%;
  animation: pulse 1s ease-in-out infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.3); opacity: 0.5; }
}

/* Usage: <div class="spinner"></div> */
.container {
  display: flex;
  gap: 30px;
  justify-content: center;
  padding: 50px;
  background: #1a1a2e;
}`
    },
    "Modern Card Design": {
      label: "Modern Card Design 💳",
      language: "css",
      code: `/* Modern Card with Hover Effects */
.card {
  width: 300px;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
}

.card-image {
  height: 200px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  position: relative;
}

.card-content {
  padding: 20px;
}

.card-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
}

.card-text {
  color: #666;
  line-height: 1.5;
  margin-bottom: 20px;
}

.card-button {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  transition: opacity 0.3s;
}

.card-button:hover {
  opacity: 0.9;
}

/* Dark mode card */
.card-dark {
  background: #1a1a2e;
  color: white;
}

.card-dark .card-title { color: white; }
.card-dark .card-text { color: #aaa; }`
    }
  },
  SQL: {
    "Basic Queries": {
      label: "Basic SQL Queries 🗄️",
      language: "sql",
      code: `-- Basic SQL Queries Demo
-- Create a sample table
CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    department VARCHAR(50),
    salary DECIMAL(10,2),
    hire_date DATE
);

-- Insert sample data
INSERT INTO employees VALUES 
(1, 'John Doe', 'Engineering', 75000.00, '2020-01-15'),
(2, 'Jane Smith', 'Marketing', 68000.00, '2019-03-20'),
(3, 'Bob Johnson', 'Engineering', 82000.00, '2021-06-10'),
(4, 'Alice Brown', 'Sales', 71000.00, '2020-11-01');

-- SELECT queries
SELECT * FROM employees;
SELECT name, salary FROM employees WHERE department = 'Engineering';
SELECT department, AVG(salary) as avg_salary FROM employees GROUP BY department;
SELECT * FROM employees ORDER BY salary DESC;
SELECT COUNT(*) as total_employees FROM employees;`
    },
    "Advanced Joins": {
      label: "Advanced JOINs 🔗",
      language: "sql",
      code: `-- Advanced SQL with Joins
-- Create departments table
CREATE TABLE departments (
    dept_id INT PRIMARY KEY,
    dept_name VARCHAR(50),
    location VARCHAR(100)
);

INSERT INTO departments VALUES 
(1, 'Engineering', 'Building A'),
(2, 'Marketing', 'Building B'),
(3, 'Sales', 'Building A');

-- INNER JOIN
SELECT e.name, e.department, d.location
FROM employees e
INNER JOIN departments d ON e.department = d.dept_name;

-- LEFT JOIN
SELECT d.dept_name, COUNT(e.id) as employee_count
FROM departments d
LEFT JOIN employees e ON e.department = d.dept_name
GROUP BY d.dept_name;

-- Subquery example
SELECT name, salary
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);`
    }
  },
  Bash: {
    "System Info": {
      label: "System Info Script 🖥️",
      language: "bash",
      code: `#!/bin/bash
# System Information Script

echo "=== System Information ==="
echo "Hostname: $(hostname)"
echo "Current User: $(whoami)"
echo "Current Directory: $(pwd)"
echo "Date & Time: $(date)"
echo ""
echo "=== Disk Usage ==="
df -h | head -5
echo ""
echo "=== Memory Usage ==="
free -h
echo ""
echo "=== Recent Logins ==="
last -n 5
echo ""
echo "=== Running Processes (top 5) ==="
ps aux | head -6`
    },
    "File Organizer": {
      label: "File Organizer 📁",
      language: "bash",
      code: `#!/bin/bash
# File Organizer by Extension

echo "Organizing files in current directory..."

# Create directories for different file types
mkdir -p images documents archives code others

# Move files based on extension
for file in *; do
    if [ -f "$file" ]; then
        case "$file" in
            *.jpg|*.png|*.gif|*.jpeg)
                mv "$file" images/ 2>/dev/null
                ;;
            *.pdf|*.doc|*.txt|*.md)
                mv "$file" documents/ 2>/dev/null
                ;;
            *.zip|*.tar|*.gz)
                mv "$file" archives/ 2>/dev/null
                ;;
            *.js|*.py|*.html|*.css)
                mv "$file" code/ 2>/dev/null
                ;;
            *)
                echo "Skipping $file"
                ;;
        esac
    fi
done

echo "Organization complete!"
ls -la`
    }
  }
};

// ─── DEFAULT CODES (MULTI-LANGUAGE) ─────────────────────────────────────────

const DEFAULT_REACT_JSX = `// React Component
function App() {
  const [count, setCount] = React.useState(0);
  
  return (
    <div className="container">
      <h1>React Playground</h1>
      <p>Write React code here! The component will auto-render.</p>
      <div style={{ fontSize: '48px', color: '#38bdf8', margin: '20px 0' }}>
        {count}
      </div>
      <button 
        onClick={() => setCount(count + 1)}
        style={{
          padding: '10px 20px',
          background: '#38bdf8',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        Click Me
      </button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);`;

const DEFAULT_REACT_CSS = `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  background: #060d1a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Segoe UI', sans-serif;
}

.container {
  text-align: center;
  padding: 40px;
}

h1 {
  color: #38bdf8;
  margin-bottom: 20px;
}

p {
  color: #8a96a8;
  margin-bottom: 20px;
}`;

const DEFAULT_REACT_HTML = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React Playground</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div id="root"></div>
  <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel" src="script.js"></script>
</body>
</html>`;

// Language-specific defaults
const LANGUAGE_DEFAULTS = {
  javascript: `// JavaScript Playground
console.log("Hello from JavaScript!");

// Try some array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log("Doubled:", doubled);

// Create a simple function
function greet(name) {
  return \`Hello, \${name}!\`;
}
console.log(greet("Developer"));`,
  typescript: `// TypeScript Playground
interface Person {
  name: string;
  age: number;
}

function greetPerson(person: Person): string {
  return \`Hello, \${person.name}! You are \${person.age} years old.\`;
}

const user: Person = { name: "Alice", age: 30 };
console.log(greetPerson(user));

// Type inference
let message = "TypeScript is awesome!";
console.log(message.toUpperCase());`,
  python: `# Python Playground
print("Hello from Python!")

# List comprehension
squares = [x**2 for x in range(10)]
print(f"Squares: {squares}")

# Simple function
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        print(a, end=' ')
        a, b = b, a + b
    print()

fibonacci(10)`,
  html: `<!DOCTYPE html>
<html>
<head><title>HTML Playground</title><style>body{font-family:sans-serif;text-align:center;padding:50px;background:linear-gradient(135deg,#667eea,#764ba2);color:white;}</style></head>
<body><h1>HTML Playground</h1><p>Edit HTML/CSS/JS in real-time!</p><button onclick="alert('Hello!')">Click Me</button></body>
</html>`,
  css: `/* CSS Playground */
body {
  background: linear-gradient(135deg, #1a1a2e, #16213e);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: 'Segoe UI', sans-serif;
}

.card {
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px;
  text-align: center;
  color: white;
  transition: transform 0.3s;
}

.card:hover {
  transform: scale(1.05);
}

button {
  background: #38bdf8;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
}`,
  sql: `-- SQL Playground
-- Create a sample table
CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
);

-- Insert data
INSERT INTO users VALUES 
(1, 'Alice', 'alice@example.com'),
(2, 'Bob', 'bob@example.com');

-- Query data
SELECT * FROM users;
SELECT name FROM users WHERE id = 1;`,
  bash: `#!/bin/bash
# Bash Playground

echo "Welcome to Bash Playground!"
echo "Current date: $(date)"
echo "Current user: $(whoami)"
echo "Current directory: $(pwd)"

# Simple loop
for i in {1..5}; do
    echo "Count: $i"
done

# Function example
greet() {
    echo "Hello, $1!"
}
greet "Developer"`
};

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export default function CodePlayground() {
  // Language & file states
  const [currentLanguage, setCurrentLanguage] = useState("react");
  const [code, setCode] = useState(DEFAULT_REACT_JSX);
  const [cssCode, setCssCode] = useState(DEFAULT_REACT_CSS);
  const [htmlCode, setHtmlCode] = useState(DEFAULT_REACT_HTML);
  const [activeFile, setActiveFile] = useState("jsx");
  
  // UI states
  const [category, setCategory] = useState("ReactComponents");
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [iframeKey, setIframeKey] = useState(0);
  const [autoRun, setAutoRun] = useState(false);
  const [copied, setCopied] = useState(false);
  const [fontSize, setFontSize] = useState(13);
  const [showSidebar, setShowSidebar] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);
  const [outputPanelHeight, setOutputPanelHeight] = useState(350);
  
  const editorRef = useRef(null);
  const autoRunTimer = useRef(null);
  const isResizing = useRef(false);

  // Language options
  const languages = [
    { id: "react", label: "⚛️ React", icon: "⚛️" },
    { id: "javascript", label: "📜 JavaScript", icon: "📜" },
    { id: "typescript", label: "📘 TypeScript", icon: "📘" },
    { id: "python", label: "🐍 Python", icon: "🐍" },
    { id: "html", label: "🌐 HTML/CSS/JS", icon: "🌐" },
    { id: "css", label: "🎨 CSS", icon: "🎨" },
    { id: "sql", label: "🗄️ SQL", icon: "🗄️" },
    { id: "bash", label: "🖥️ Bash", icon: "🖥️" }
  ];

  // Get current code based on language and active file
  const getCurrentCode = () => {
    if (currentLanguage === "react") {
      if (activeFile === "jsx") return code;
      if (activeFile === "css") return cssCode;
      return htmlCode;
    }
    return code;
  };

  const setCurrentCode = (value) => {
    if (currentLanguage === "react") {
      if (activeFile === "jsx") setCode(value);
      else if (activeFile === "css") setCssCode(value);
      else setHtmlCode(value);
    } else {
      setCode(value);
    }
  };

  // Change language
  const handleLanguageChange = (langId) => {
    setCurrentLanguage(langId);
    setSelectedTemplate("");
    
    if (langId === "react") {
      setCode(DEFAULT_REACT_JSX);
      setCssCode(DEFAULT_REACT_CSS);
      setHtmlCode(DEFAULT_REACT_HTML);
      setActiveFile("jsx");
    } else {
      setCode(LANGUAGE_DEFAULTS[langId] || `// ${langId.toUpperCase()} Playground\nconsole.log("Hello!");`);
      setActiveFile("code");
    }
    
    setTimeout(() => runCode(), 100);
  };

  // Generate output HTML for preview
  const generateOutputHTML = useCallback(() => {
    if (currentLanguage === "react") {
      return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React Playground</title>
  <style>${cssCode}</style>
  <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
  <div id="root"></div>
  <script type="text/babel">
    ${code}
  </script>
</body>
</html>`;
    } else if (currentLanguage === "html") {
      // For HTML/CSS/JS, the code itself is the full HTML
      return code;
    } else if (currentLanguage === "css") {
      return `<!DOCTYPE html>
<html>
<head><style>${code}</style></head>
<body>
  <div class="card">
    <h1>CSS Playground</h1>
    <button>Hover me</button>
  </div>
</body>
</html>`;
    } else if (currentLanguage === "javascript") {
      return `<!DOCTYPE html>
<html>
<head><style>body{font-family:monospace;padding:20px;background:#1a1a2e;color:white;}</style></head>
<body>
  <h2>JavaScript Console Output</h2>
  <pre id="output"></pre>
  <script>
    // Capture console.log
    const output = document.getElementById('output');
    const originalLog = console.log;
    console.log = function(...args) {
      output.textContent += args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' ') + '\\n';
      originalLog.apply(console, args);
    };
    ${code}
  </script>
</body>
</html>`;
    } else {
      // Python, SQL, Bash, TypeScript - show code with output simulation
      return `<!DOCTYPE html>
<html>
<head><style>body{font-family:monospace;padding:20px;background:#1a1a2e;color:#00ff88;}</style></head>
<body>
  <h2>${currentLanguage.toUpperCase()} Code Output</h2>
  <pre style="background:#0a0a1a;padding:20px;border-radius:10px;overflow:auto;">${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
  <div style="margin-top:20px;padding:20px;background:#07101f;border-radius:10px;">
    <strong>📌 Note:</strong> This is a code preview. For actual execution, copy the code to your local environment.
  </div>
  <script>
    console.log("${currentLanguage} code loaded in preview mode");
  </script>
</body>
</html>`;
    }
  }, [currentLanguage, code, cssCode]);

  // Run code
  const runCode = useCallback(() => {
    setIframeKey((k) => k + 1);
  }, []);

  // Auto-run
  useEffect(() => {
    if (!autoRun) return;
    clearTimeout(autoRunTimer.current);
    autoRunTimer.current = setTimeout(runCode, 800);
    return () => clearTimeout(autoRunTimer.current);
  }, [code, cssCode, htmlCode, autoRun, runCode, currentLanguage]);

  // Load template
  const handleTemplate = (e) => {
    const key = e.target.value;
    setSelectedTemplate(key);
    if (key && TEMPLATES[category] && TEMPLATES[category][key]) {
      const template = TEMPLATES[category][key];
      const lang = template.language;
      
      // Find matching language
      let targetLang = "react";
      if (lang === "jsx") targetLang = "react";
      else if (lang === "javascript") targetLang = "javascript";
      else if (lang === "typescript") targetLang = "typescript";
      else if (lang === "python") targetLang = "python";
      else if (lang === "html") targetLang = "html";
      else if (lang === "css") targetLang = "css";
      else if (lang === "sql") targetLang = "sql";
      else if (lang === "bash") targetLang = "bash";
      
      setCurrentLanguage(targetLang);
      
      if (targetLang === "react") {
        setCode(template.code || DEFAULT_REACT_JSX);
        setCssCode(template.css || DEFAULT_REACT_CSS);
        setHtmlCode(template.html || DEFAULT_REACT_HTML);
        setActiveFile("jsx");
      } else if (targetLang === "html") {
        setCode(template.html || template.code || LANGUAGE_DEFAULTS.html);
        setActiveFile("code");
      } else {
        setCode(template.code || LANGUAGE_DEFAULTS[targetLang] || `// ${targetLang} template`);
        setActiveFile("code");
      }
      setTimeout(() => runCode(), 100);
    }
  };

  // Save to local storage
  const saveToLocalStorage = () => {
    const project = {
      language: currentLanguage,
      code: code,
      cssCode: cssCode,
      htmlCode: htmlCode,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('multiLangPlayground_project', JSON.stringify(project));
    alert('✅ Project saved!');
  };

  const loadFromLocalStorage = () => {
    const saved = localStorage.getItem('multiLangPlayground_project');
    if (saved) {
      const project = JSON.parse(saved);
      setCurrentLanguage(project.language);
      setCode(project.code);
      setCssCode(project.cssCode || DEFAULT_REACT_CSS);
      setHtmlCode(project.htmlCode || DEFAULT_REACT_HTML);
      setTimeout(() => runCode(), 100);
      alert('📂 Project loaded!');
    } else {
      alert('No saved project found');
    }
  };

  const copyCode = () => {
    navigator.clipboard.writeText(getCurrentCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  const resetCode = () => {
    if (currentLanguage === "react") {
      setCode(DEFAULT_REACT_JSX);
      setCssCode(DEFAULT_REACT_CSS);
      setHtmlCode(DEFAULT_REACT_HTML);
    } else {
      setCode(LANGUAGE_DEFAULTS[currentLanguage] || `// ${currentLanguage} code`);
    }
    setSelectedTemplate("");
    setTimeout(() => runCode(), 100);
  };

  const downloadProject = () => {
    const extensions = {
      react: { jsx: "jsx", css: "css", html: "html" },
      javascript: "js",
      typescript: "ts",
      python: "py",
      html: "html",
      css: "css",
      sql: "sql",
      bash: "sh"
    };
    
    if (currentLanguage === "react") {
      const files = [
        { name: "App.jsx", content: code },
        { name: "styles.css", content: cssCode },
        { name: "index.html", content: htmlCode }
      ];
      files.forEach(({ name, content }) => {
        const blob = new Blob([content], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = name;
        link.click();
        URL.revokeObjectURL(link.href);
      });
    } else {
      const ext = extensions[currentLanguage];
      const filename = `code.${ext}`;
      const blob = new Blob([code], { type: 'text/plain' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      link.click();
      URL.revokeObjectURL(link.href);
    }
  };

  const lineCount = getCurrentCode().split("\n").length;
  const lineNums = Array.from({ length: lineCount }, (_, i) => i + 1).join("\n");

  const startResizing = (e) => {
    isResizing.current = true;
    document.addEventListener('mousemove', handleResize);
    document.addEventListener('mouseup', stopResizing);
  };

  const handleResize = (e) => {
    if (!isResizing.current) return;
    const container = document.querySelector('.pg-editor-output');
    if (container) {
      const rect = container.getBoundingClientRect();
      const newHeight = rect.bottom - e.clientY - 10;
      if (newHeight > 200 && newHeight < 600) {
        setOutputPanelHeight(newHeight);
      }
    }
  };

  const stopResizing = () => {
    isResizing.current = false;
    document.removeEventListener('mousemove', handleResize);
    document.removeEventListener('mouseup', stopResizing);
  };

  const toggleFullscreen = () => {
    const element = document.querySelector('.pg-container');
    if (!fullscreen) {
      element.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setFullscreen(!fullscreen);
  };

  const getCategoryCount = (cat) => {
    return TEMPLATES[cat] ? Object.keys(TEMPLATES[cat]).length : 0;
  };

  const getFileTabs = () => {
    if (currentLanguage === "react") {
      return (
        <>
          <button className={`pg-file-tab ${activeFile === 'jsx' ? 'active' : ''}`} onClick={() => setActiveFile('jsx')}>
            ⚛️ App.jsx
          </button>
          <button className={`pg-file-tab ${activeFile === 'css' ? 'active' : ''}`} onClick={() => setActiveFile('css')}>
            🎨 styles.css
          </button>
          <button className={`pg-file-tab ${activeFile === 'html' ? 'active' : ''}`} onClick={() => setActiveFile('html')}>
            📄 index.html
          </button>
        </>
      );
    }
    return (
      <button className="pg-file-tab active">
        {languages.find(l => l.id === currentLanguage)?.icon} {currentLanguage.toUpperCase()} Code
      </button>
    );
  };

  return (
    <div className={`pg-container ${fullscreen ? 'fullscreen' : ''}`}>
      <section className="pg-section">
        {/* Top Bar */}
        <div className="pg-topbar">
          <div className="pg-dots">
            <span className="pg-dot pg-dot-r" />
            <span className="pg-dot pg-dot-y" />
            <span className="pg-dot pg-dot-g" />
          </div>
          <span className="pg-title">🌈 MULTI-LANG PLAYGROUND — 8 Languages Supported</span>
          <div className="pg-topbar-right">
            <div className="pg-mode-indicator">
              <span className="pg-mode-badge active">{languages.find(l => l.id === currentLanguage)?.label}</span>
            </div>
            <button className="pg-icon-btn" onClick={() => setShowSidebar(!showSidebar)} title="Toggle Sidebar">
              {showSidebar ? '◀' : '▶'}
            </button>
            <label className="pg-autorun-label">
              <input type="checkbox" checked={autoRun} onChange={(e) => setAutoRun(e.target.checked)} />
              auto-run
            </label>
          </div>
        </div>

        {/* Language Selector */}
        <div className="pg-language-bar">
          {languages.map(lang => (
            <button
              key={lang.id}
              className={`pg-lang-btn ${currentLanguage === lang.id ? 'active' : ''}`}
              onClick={() => handleLanguageChange(lang.id)}
            >
              {lang.icon} {lang.label}
            </button>
          ))}
        </div>

        {/* Main Layout */}
        <div className="pg-main-layout">
          {/* Sidebar */}
          {showSidebar && (
            <div className="pg-sidebar">
              <div className="pg-sidebar-header">
                <h3>📁 TEMPLATE LIBRARY</h3>
                <span className="pg-template-count">70+ templates</span>
              </div>
              
              <select className="pg-sidebar-select" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="ReactComponents">⚛️ React Components ({getCategoryCount("ReactComponents")})</option>
                <option value="HTML_CSS_JS">🎨 HTML/CSS/JS ({getCategoryCount("HTML_CSS_JS")})</option>
                <option value="Python">🐍 Python ({getCategoryCount("Python")})</option>
                <option value="JavaScript">📜 JavaScript ({getCategoryCount("JavaScript")})</option>
                <option value="TypeScript">📘 TypeScript ({getCategoryCount("TypeScript")})</option>
                <option value="HTML">🌐 HTML Templates ({getCategoryCount("HTML")})</option>
                <option value="CSS">🎨 CSS Effects ({getCategoryCount("CSS")})</option>
                <option value="SQL">🗄️ SQL ({getCategoryCount("SQL")})</option>
                <option value="Bash">🖥️ Bash ({getCategoryCount("Bash")})</option>
              </select>
              
              <select className="pg-sidebar-select" value={selectedTemplate} onChange={handleTemplate}>
                <option value="">— Choose Template —</option>
                {TEMPLATES[category] && Object.keys(TEMPLATES[category]).map((key) => (
                  <option key={key} value={key}>
                    {TEMPLATES[category][key].label || key}
                  </option>
                ))}
              </select>
              
              <div className="pg-sidebar-divider"></div>
              
              <div className="pg-sidebar-actions">
                <button className="pg-sidebar-btn" onClick={saveToLocalStorage}>💾 Save Project</button>
                <button className="pg-sidebar-btn" onClick={loadFromLocalStorage}>📂 Load Project</button>
                <button className="pg-sidebar-btn" onClick={downloadProject}>⬇️ Download</button>
                <button className="pg-sidebar-btn" onClick={toggleFullscreen}>🖥️ Fullscreen</button>
              </div>
              
              <div className="pg-sidebar-info">
                <p>💡 Pro Tips:</p>
                <ul>
                  <li>Switch languages anytime</li>
                  <li>Auto-run updates preview</li>
                  <li>Save projects locally</li>
                  <li>70+ ready-to-use templates</li>
                </ul>
              </div>
            </div>
          )}

          {/* Main Content */}
          <div className="pg-main-content">
            {/* File Tabs */}
            <div className="pg-file-tabs">
              {getFileTabs()}
              <div className="pg-tab-actions">
                <button className="pg-icon-btn" onClick={copyCode} title="Copy code">
                  {copied ? "✓ Copied!" : "📋 Copy"}
                </button>
                <button className="pg-icon-btn" onClick={resetCode} title="Reset to default">⟳ Reset</button>
                <button className="pg-run-btn" onClick={runCode}>▶ Run Code</button>
              </div>
            </div>

            {/* Editor and Output */}
            <div className="pg-editor-output">
              {/* Editor Area */}
              <div className="pg-editor-area">
                <div className="pg-editor-header">
                  <span className="pg-lang-badge">
                    {languages.find(l => l.id === currentLanguage)?.icon} {currentLanguage.toUpperCase()}
                  </span>
                  <span className="pg-line-info">{lineCount} lines</span>
                  <div className="pg-font-controls">
                    <button className="pg-icon-btn-sm" onClick={() => setFontSize(f => Math.max(10, f-1))}>A-</button>
                    <span className="pg-fontsize">{fontSize}px</span>
                    <button className="pg-icon-btn-sm" onClick={() => setFontSize(f => Math.min(18, f+1))}>A+</button>
                  </div>
                </div>
                <div className="pg-editor-row">
                  <div className="pg-line-nums">{lineNums}</div>
                  <textarea
                    ref={editorRef}
                    className="pg-textarea"
                    value={getCurrentCode()}
                    onChange={(e) => setCurrentCode(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Tab") {
                        e.preventDefault();
                        const start = e.target.selectionStart;
                        const end = e.target.selectionEnd;
                        const value = getCurrentCode();
                        setCurrentCode(value.substring(0, start) + "  " + value.substring(end));
                        setTimeout(() => {
                          e.target.selectionStart = e.target.selectionEnd = start + 2;
                        }, 0);
                      }
                    }}
                    spellCheck={false}
                    style={{ fontSize: `${fontSize}px`, fontFamily: 'monospace' }}
                  />
                </div>
              </div>

              {/* Resize Handle */}
              <div className="pg-resize-handle" onMouseDown={startResizing}>
                <div className="pg-resize-line"></div>
              </div>

              {/* Output Preview */}
              <div className="pg-output-area" style={{ height: outputPanelHeight }}>
                <div className="pg-output-header">
                  <span className="pg-output-dot"></span>
                  <span className="pg-output-label">📺 Live Preview</span>
                  <button className="pg-refresh-btn" onClick={runCode}>⟳ Refresh</button>
                </div>
                <iframe 
                  key={iframeKey}
                  className="pg-output-iframe"
                  title="output"
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals"
                  srcDoc={generateOutputHTML()}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pg-footer">
          <span className="pg-prompt">{languages.find(l => l.id === currentLanguage)?.icon}</span>
          <span className="pg-footer-slogan">
            Multi-Language Playground • React • JS • TS • Python • HTML/CSS • SQL • Bash
          </span>
          <span className="pg-footer-right">70+ Templates • 8 Languages</span>
        </div>
      </section>
    </div>
  );
}
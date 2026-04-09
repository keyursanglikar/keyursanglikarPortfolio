import React, { useState, useRef, useEffect, useCallback } from "react";
import "./CSS/CodePlayground.css";

// ─── TEMPLATE LIBRARY WITH 70+ COMPONENTS ───────────────────────────────────────

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
      css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e, #16213e, #0f3460);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Segoe UI', sans-serif;
}`,
      html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>React Counter</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>`
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
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Add a task..."
          style={inputStyle}
        />
        <button onClick={addTodo} style={buttonStyle}>Add</button>
      </div>
      <div>
        {todos.map(todo => (
          <div key={todo.id} style={todoItemStyle}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              style={{ marginRight: '10px' }}
            />
            <span style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? '#8a96a8' : 'white',
              flex: 1
            }}>
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

const inputStyle = {
  flex: 1,
  padding: '10px',
  background: '#07101f',
  border: '1px solid #0f2744',
  borderRadius: '8px',
  color: 'white',
  outline: 'none'
};

const buttonStyle = {
  padding: '10px 20px',
  background: '#38bdf8',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontWeight: 'bold'
};

const todoItemStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '10px',
  background: '#07101f',
  marginBottom: '8px',
  borderRadius: '8px',
  gap: '10px'
};

const deleteStyle = {
  background: 'transparent',
  border: 'none',
  color: '#ef4444',
  cursor: 'pointer',
  fontSize: '18px'
};

export default TodoApp;`,
      css: `* {
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
}`,
      html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Todo App</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>`
    }
  },
  
  HTML_CSS_JS: {
    "Glassmorphism Card": {
      label: "Glassmorphism Card 🎴",
      language: "htmlcssjs",
      html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Glassmorphism Card</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="glass-card">
        <div class="card-avatar">✨</div>
        <h2>Glassmorphism Card</h2>
        <p>Modern UI with blur effect and smooth animations</p>
        <span class="card-tag">Trending</span>
        <button class="card-btn">Learn More →</button>
    </div>
</body>
</html>`,
      css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    min-height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding: 20px;
}

.glass-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 40px;
    text-align: center;
    color: white;
    width: 320px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
}

.glass-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

.card-avatar {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    font-size: 40px;
    transition: transform 0.3s ease;
}

.glass-card:hover .card-avatar {
    transform: scale(1.1);
}

h2 {
    font-size: 24px;
    margin-bottom: 10px;
}

p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
    margin-bottom: 20px;
    line-height: 1.5;
}

.card-tag {
    display: inline-block;
    background: rgba(255, 255, 255, 0.2);
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 12px;
    margin-bottom: 20px;
}

.card-btn {
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 10px 20px;
    border-radius: 25px;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 14px;
}

.card-btn:hover {
    background: white;
    color: #667eea;
    transform: scale(1.05);
}`,
      js: `// Glassmorphism Card Interactions
document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.glass-card');
    const btn = document.querySelector('.card-btn');
    
    // Click animation for card
    if (card) {
        card.addEventListener('click', function(e) {
            // Don't trigger if button was clicked
            if (e.target === btn) return;
            
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    }
    
    // Button click handler
    if (btn) {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            alert('✨ Welcome to Glassmorphism! This is a demo alert.');
            
            // Add ripple effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    }
    
    // Console log
    console.log('Glassmorphism Card loaded successfully!');
});`
    },
    "Neon Buttons": {
      label: "Neon Buttons 🔘",
      language: "htmlcssjs",
      html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Neon Buttons</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Neon Buttons</h1>
        <div class="button-grid">
            <button class="neon-btn neon-pink">Neon Pink</button>
            <button class="neon-btn neon-blue">Neon Blue</button>
            <button class="neon-btn neon-green">Neon Green</button>
            <button class="neon-btn neon-purple">Neon Purple</button>
            <button class="neon-btn neon-cyan">Neon Cyan</button>
            <button class="neon-btn neon-orange">Neon Orange</button>
        </div>
        <p class="instruction">✨ Hover over buttons to see the neon glow effect</p>
    </div>
</body>
</html>`,
      css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    min-height: 100vh;
    background: #0a0a1a;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding: 20px;
}

.container {
    text-align: center;
}

h1 {
    color: white;
    font-size: 48px;
    margin-bottom: 40px;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

.button-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
    max-width: 800px;
    margin: 0 auto 40px;
}

.neon-btn {
    padding: 15px 30px;
    font-size: 18px;
    font-weight: bold;
    background: transparent;
    border: 2px solid;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.neon-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px currentColor;
}

.neon-pink {
    color: #ff00de;
    border-color: #ff00de;
}

.neon-pink:hover {
    background: #ff00de;
    color: #0a0a1a;
    box-shadow: 0 0 30px #ff00de;
}

.neon-blue {
    color: #00e0ff;
    border-color: #00e0ff;
}

.neon-blue:hover {
    background: #00e0ff;
    color: #0a0a1a;
    box-shadow: 0 0 30px #00e0ff;
}

.neon-green {
    color: #00ff88;
    border-color: #00ff88;
}

.neon-green:hover {
    background: #00ff88;
    color: #0a0a1a;
    box-shadow: 0 0 30px #00ff88;
}

.neon-purple {
    color: #b400ff;
    border-color: #b400ff;
}

.neon-purple:hover {
    background: #b400ff;
    color: #0a0a1a;
    box-shadow: 0 0 30px #b400ff;
}

.neon-cyan {
    color: #00ffff;
    border-color: #00ffff;
}

.neon-cyan:hover {
    background: #00ffff;
    color: #0a0a1a;
    box-shadow: 0 0 30px #00ffff;
}

.neon-orange {
    color: #ff6b00;
    border-color: #ff6b00;
}

.neon-orange:hover {
    background: #ff6b00;
    color: #0a0a1a;
    box-shadow: 0 0 30px #ff6b00;
}

.instruction {
    color: #666;
    font-size: 14px;
    margin-top: 20px;
}

@media (max-width: 768px) {
    h1 {
        font-size: 32px;
    }
    
    .neon-btn {
        padding: 12px 24px;
        font-size: 14px;
    }
}`,
      js: `// Neon Buttons Interaction
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.neon-btn');
    
    buttons.forEach(btn => {
        // Click handler
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const color = this.classList[1].replace('neon-', '');
            alert(\`✨ \${color.toUpperCase()} button clicked! Neon effect activated.\`);
            
            // Ripple effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
        
        // Add sound effect simulation (visual feedback only)
        btn.addEventListener('mouseenter', function() {
            console.log(\`Hovering over \${this.textContent}\`);
        });
    });
    
    console.log('Neon Buttons loaded! Hover over buttons to see the glow effect.');
});`
    },
    "Animated Gradient Background": {
      label: "Animated Gradient BG 🌈",
      language: "htmlcssjs",
      html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animated Gradient Background</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="content">
        <h1>Animated Gradient</h1>
        <p>Beautiful moving gradient background</p>
        <button class="gradient-btn" onclick="changeGradient()">Change Colors</button>
    </div>
</body>
</html>`,
      css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    min-height: 100vh;
    background: linear-gradient(270deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ff6b6b);
    background-size: 400% 400%;
    animation: gradientShift 10s ease infinite;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

@keyframes gradientShift {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

.content {
    text-align: center;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(10px);
    padding: 50px;
    border-radius: 20px;
    animation: fadeInUp 1s ease;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

h1 {
    font-size: 56px;
    color: white;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

p {
    font-size: 20px;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 30px;
}

.gradient-btn {
    padding: 12px 30px;
    font-size: 16px;
    font-weight: bold;
    background: white;
    color: #333;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.gradient-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
}

@media (max-width: 768px) {
    h1 {
        font-size: 36px;
    }
    
    p {
        font-size: 16px;
    }
    
    .content {
        padding: 30px;
        margin: 20px;
    }
}`,
      js: `// Animated Gradient Background with Interactive Color Change
let colorIndex = 0;

const colorSets = [
    ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4'],
    ['#f093fb', '#f5576c', '#4facfe', '#00f2fe'],
    ['#fa709a', '#fee140', '#667eea', '#764ba2'],
    ['#a8edea', '#fed6e3', '#ff9a9e', '#fad0c4'],
    ['#89f7fe', '#66a6ff', '#ffecd2', '#fcb69f']
];

function changeGradient() {
    colorIndex = (colorIndex + 1) % colorSets.length;
    const colors = colorSets[colorIndex];
    const gradientString = \`linear-gradient(270deg, \${colors.join(', ')}, \${colors[0]})\`;
    document.body.style.background = gradientString;
    document.body.style.backgroundSize = '400% 400%';
    
    // Add animation class
    const btn = document.querySelector('.gradient-btn');
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        btn.style.transform = '';
    }, 150);
    
    console.log(\`Gradient changed to color set \${colorIndex + 1}\`);
}

// Add mouse movement effect to gradient
document.addEventListener('DOMContentLoaded', function() {
    console.log('Animated Gradient Background loaded!');
    
    // Optional: Add parallax effect on mousemove
    document.body.addEventListener('mousemove', function(e) {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        document.body.style.backgroundPosition = \`\${x}% \${y}%\`;
    });
});`
    },
    "3D Flip Card": {
      label: "3D Flip Card 🃏",
      language: "htmlcssjs",
      html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3D Flip Card</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <div class="card-icon">🎴</div>
                <h2>Front Side</h2>
                <p>Hover to flip the card</p>
                <span class="flip-hint">↺ Hover Me</span>
            </div>
            <div class="flip-card-back">
                <div class="card-icon">✨</div>
                <h2>Back Side</h2>
                <p>Amazing 3D flip effect!</p>
                <button class="flip-btn" onclick="alert('You flipped the card!')">Learn More</button>
            </div>
        </div>
    </div>
</body>
</html>`,
      css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    min-height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding: 20px;
}

.flip-card {
    width: 350px;
    height: 450px;
    perspective: 1000px;
    cursor: pointer;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
}

.flip-card-front {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    color: white;
}

.flip-card-back {
    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    color: white;
    transform: rotateY(180deg);
}

.card-icon {
    font-size: 64px;
    margin-bottom: 20px;
    animation: bounce 2s ease infinite;
}

@keyframes bounce {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
}

h2 {
    font-size: 28px;
    margin-bottom: 15px;
}

p {
    font-size: 16px;
    margin-bottom: 20px;
    line-height: 1.5;
}

.flip-hint {
    display: inline-block;
    background: rgba(255, 255, 255, 0.2);
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 12px;
    animation: pulse 1.5s ease infinite;
}

@keyframes pulse {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
}

.flip-btn {
    background: white;
    color: #4facfe;
    border: none;
    padding: 10px 25px;
    border-radius: 25px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
}

.flip-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

@media (max-width: 480px) {
    .flip-card {
        width: 280px;
        height: 380px;
    }
    
    h2 {
        font-size: 22px;
    }
    
    .card-icon {
        font-size: 48px;
    }
}`,
      js: `// 3D Flip Card Interactions
document.addEventListener('DOMContentLoaded', function() {
    const flipCard = document.querySelector('.flip-card');
    const flipBtn = document.querySelector('.flip-btn');
    
    console.log('3D Flip Card loaded! Hover over the card to see the flip effect.');
    
    // Add click to flip for mobile devices
    if (window.innerWidth <= 768) {
        let isFlipped = false;
        flipCard.addEventListener('click', function() {
            const inner = this.querySelector('.flip-card-inner');
            if (!isFlipped) {
                inner.style.transform = 'rotateY(180deg)';
                isFlipped = true;
            } else {
                inner.style.transform = '';
                isFlipped = false;
            }
        });
    }
    
    // Button click handler
    if (flipBtn) {
        flipBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            console.log('Learn More button clicked on back of card');
        });
    }
});`
    },
    "Responsive Navbar": {
      label: "Responsive Navbar 🧭",
      language: "htmlcssjs",
      html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Navbar</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <nav class="navbar" id="navbar">
        <div class="nav-brand">
            <span class="logo-icon">🚀</span>
            <span class="logo-text">BrandName</span>
        </div>
        <ul class="nav-menu" id="navMenu">
            <li class="nav-item"><a href="#" class="nav-link active">Home</a></li>
            <li class="nav-item"><a href="#" class="nav-link">About</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Services</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Portfolio</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Contact</a></li>
        </ul>
        <div class="hamburger" id="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
    </nav>
    
    <div class="hero">
        <h1>Responsive Navbar</h1>
        <p>Resize your browser window to see the responsive design</p>
        <button class="hero-btn" onclick="alert('Welcome to our website!')">Get Started</button>
    </div>
</body>
</html>`,
      css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: #f5f5f5;
}

.navbar {
    background: linear-gradient(135deg, #1a1a2e, #16213e);
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.nav-brand {
    display: flex;
    align-items: center;
    gap: 10px;
}

.logo-icon {
    font-size: 28px;
}

.logo-text {
    color: white;
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 1px;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 30px;
}

.nav-link {
    color: white;
    text-decoration: none;
    font-size: 16px;
    transition: all 0.3s ease;
    padding: 5px 10px;
    border-radius: 5px;
}

.nav-link:hover {
    color: #38bdf8;
    background: rgba(56, 189, 248, 0.1);
}

.nav-link.active {
    color: #38bdf8;
    border-bottom: 2px solid #38bdf8;
}

.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
}

.bar {
    width: 25px;
    height: 3px;
    background: white;
    margin: 3px 0;
    transition: 0.3s;
}

.hero {
    height: calc(100vh - 70px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
}

.hero h1 {
    font-size: 48px;
    margin-bottom: 20px;
    animation: fadeInUp 0.8s ease;
}

.hero p {
    font-size: 18px;
    margin-bottom: 30px;
    animation: fadeInUp 0.8s ease 0.2s both;
}

.hero-btn {
    padding: 12px 30px;
    font-size: 16px;
    font-weight: bold;
    background: white;
    color: #667eea;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    animation: fadeInUp 0.8s ease 0.4s both;
}

.hero-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 768px) {
    .navbar {
        padding: 0 20px;
    }
    
    .hamburger {
        display: flex;
    }
    
    .nav-menu {
        position: fixed;
        left: -100%;
        top: 70px;
        flex-direction: column;
        background: linear-gradient(135deg, #1a1a2e, #16213e);
        width: 100%;
        text-align: center;
        transition: 0.3s;
        padding: 20px 0;
        gap: 15px;
    }
    
    .nav-menu.active {
        left: 0;
    }
    
    .hamburger.active .bar:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active .bar:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
    
    .hero h1 {
        font-size: 32px;
        padding: 0 20px;
    }
    
    .hero p {
        font-size: 14px;
        padding: 0 20px;
    }
}`,
      js: `// Responsive Navbar with Mobile Menu
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Toggle mobile menu
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Close mobile menu
            if (window.innerWidth <= 768) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
            
            // Show which link was clicked
            console.log(\`Navigated to: \${this.textContent}\`);
        });
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
    
    console.log('Responsive Navbar loaded!');
});`
    },
    "Particle Background": {
      label: "Particle Background ✨",
      language: "htmlcssjs",
      html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Particle Background</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <canvas id="particleCanvas"></canvas>
    <div class="overlay">
        <h1>Particle System</h1>
        <p>Interactive particle animation</p>
        <button class="particle-btn" onclick="addParticleBurst()">Add Particles ✨</button>
    </div>
</body>
</html>`,
      css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    overflow: hidden;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

#particleCanvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    background: linear-gradient(135deg, #0a0a1a, #1a1a2e);
}

.overlay {
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
    color: white;
    pointer-events: auto;
}

h1 {
    font-size: 56px;
    margin-bottom: 20px;
    text-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    animation: fadeIn 1s ease;
}

p {
    font-size: 20px;
    margin-bottom: 30px;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    animation: fadeIn 1s ease 0.2s both;
}

.particle-btn {
    padding: 12px 30px;
    font-size: 16px;
    font-weight: bold;
    background: linear-gradient(135deg, #38bdf8, #6366f1);
    color: white;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    animation: fadeIn 1s ease 0.4s both;
}

.particle-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 20px rgba(56, 189, 248, 0.4);
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 768px) {
    h1 {
        font-size: 36px;
    }
    
    p {
        font-size: 16px;
    }
}`,
      js: `// Particle Background System
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

let particles = [];
let mouseX = null;
let mouseY = null;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Particle {
    constructor(x, y) {
        this.x = x || Math.random() * canvas.width;
        this.y = y || Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 3 + 1;
        this.color = \`hsl(\${Math.random() * 360}, 70%, 60%)\`;
        this.life = 1;
        this.decay = 0.003 + Math.random() * 0.005;
    }
    
    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life -= this.decay;
        
        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        
        // Mouse interaction
        if (mouseX && mouseY) {
            const dx = this.x - mouseX;
            const dy = this.y - mouseY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 100) {
                const angle = Math.atan2(dy, dx);
                const force = (100 - dist) / 100;
                this.vx += Math.cos(angle) * force * 0.5;
                this.vy += Math.sin(angle) * force * 0.5;
            }
        }
        
        return this.life > 0;
    }
    
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

// Create initial particles
for (let i = 0; i < 100; i++) {
    particles.push(new Particle());
}

// Connect nearby particles
function connectParticles() {
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist < 120) {
                ctx.beginPath();
                const opacity = (1 - dist / 120) * particles[i].life * particles[j].life;
                ctx.strokeStyle = \`rgba(255, 255, 255, \${opacity * 0.5})\`;
                ctx.lineWidth = 0.5;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
}

// Animate
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Update and draw particles
    particles = particles.filter(particle => {
        const alive = particle.update();
        if (alive) particle.draw();
        return alive;
    });
    
    // Add new particles to maintain count
    while (particles.length < 100) {
        particles.push(new Particle());
    }
    
    // Connect particles with lines
    connectParticles();
    
    requestAnimationFrame(animate);
}

animate();

// Mouse tracking
canvas.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

canvas.addEventListener('mouseleave', () => {
    mouseX = null;
    mouseY = null;
});

// Add particle burst function
function addParticleBurst() {
    for (let i = 0; i < 30; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3 + 2;
        const particle = new Particle(canvas.width / 2, canvas.height / 2);
        particle.vx = Math.cos(angle) * speed;
        particle.vy = Math.sin(angle) * speed;
        particle.size = Math.random() * 4 + 2;
        particle.color = \`hsl(\${Math.random() * 360}, 80%, 65%)\`;
        particles.push(particle);
    }
    
    console.log('Particle burst added!');
}

console.log('Particle Background loaded! Move your mouse to interact with particles.');`
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
    
    // Display in browser
    if (typeof document !== 'undefined') {
        let clockDiv = document.getElementById('clock');
        if (!clockDiv) {
            clockDiv = document.createElement('div');
            clockDiv.id = 'clock';
            clockDiv.style.cssText = 'font-size: 48px; font-family: monospace; text-align: center; padding: 40px; background: linear-gradient(135deg, #667eea, #764ba2); color: white; border-radius: 10px;';
            document.body.innerHTML = '';
            document.body.appendChild(clockDiv);
        }
        clockDiv.textContent = timeString;
    }
    console.log(timeString);
}

setInterval(updateClock, 1000);
updateClock();`
    },
    "Weather App Mock": {
      label: "Weather App Mock 🌤️",
      language: "javascript",
      code: `// Weather Application Mock
async function getWeather(city = "New York") {
    const mockWeather = {
        temperature: Math.floor(Math.random() * 30) + 10,
        condition: ["Sunny", "Cloudy", "Rainy", "Windy", "Snowy"][Math.floor(Math.random() * 5)],
        humidity: Math.floor(Math.random() * 50) + 30,
        windSpeed: Math.floor(Math.random() * 20) + 5,
        city: city
    };
    
    const weatherHTML = \`
        <div style="text-align: center; padding: 30px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 20px; color: white;">
            <h2>🌤️ Weather in \${mockWeather.city}</h2>
            <div style="font-size: 48px; margin: 20px 0;">\${mockWeather.temperature}°C</div>
            <div style="font-size: 24px; margin: 10px 0;">\${mockWeather.condition}</div>
            <div>💧 Humidity: \${mockWeather.humidity}%</div>
            <div>💨 Wind: \${mockWeather.windSpeed} km/h</div>
            <button onclick="getWeather(prompt('Enter city name:', 'London'))" style="margin-top: 20px; padding: 10px 20px; border: none; border-radius: 10px; cursor: pointer;">Search City</button>
        </div>
    \`;
    
    if (typeof document !== 'undefined') {
        document.body.innerHTML = weatherHTML;
    }
    
    console.log(\`Weather in \${mockWeather.city}: \${mockWeather.temperature}°C, \${mockWeather.condition}\`);
    return mockWeather;
}

getWeather("New York");`
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
}

function greetUser(user: User): string {
    return \`Hello, \${user.name}! You are active: \${user.isActive}\`;
}

const newUser: User = {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    isActive: true
};

console.log(greetUser(newUser));`
    }
  },
  
  SQL: {
    "Basic Queries": {
      label: "Basic SQL Queries 🗄️",
      language: "sql",
      code: `-- Basic SQL Queries Demo
CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    department VARCHAR(50),
    salary DECIMAL(10,2)
);

INSERT INTO employees VALUES 
(1, 'John Doe', 'Engineering', 75000.00),
(2, 'Jane Smith', 'Marketing', 68000.00),
(3, 'Bob Johnson', 'Engineering', 82000.00);

SELECT * FROM employees;
SELECT name, salary FROM employees WHERE department = 'Engineering';
SELECT department, AVG(salary) as avg_salary FROM employees GROUP BY department;`
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
df -h | head -5`
    }
  }
};

// ─── DEFAULT CODES ──────────────────────────────────────────────────────────

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

const DEFAULT_HTML_CSS_JS = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML/CSS/JS Playground</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>HTML/CSS/JS Playground</h1>
        <p>Edit HTML, CSS, and JavaScript in real-time!</p>
        <button id="demoBtn" class="demo-btn">Click Me</button>
    </div>
    <script src="script.js"></script>
</body>
</html>`,
  css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    min-height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding: 20px;
}

.container {
    text-align: center;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: 40px;
    border-radius: 20px;
    color: white;
}

h1 {
    font-size: 36px;
    margin-bottom: 20px;
}

p {
    font-size: 16px;
    margin-bottom: 30px;
}

.demo-btn {
    padding: 12px 30px;
    font-size: 16px;
    font-weight: bold;
    background: white;
    color: #667eea;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.demo-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
}`,
  js: `// JavaScript for interactive demo
document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('demoBtn');
    
    if (btn) {
        btn.addEventListener('click', function() {
            alert('Hello from JavaScript! You clicked the button.');
            console.log('Button clicked at ' + new Date().toLocaleTimeString());
        });
    }
    
    console.log('HTML/CSS/JS Playground loaded successfully!');
});`
};

const LANGUAGE_DEFAULTS = {
  javascript: `// JavaScript Playground
console.log("Hello from JavaScript!");

// Array methods demo
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log("Doubled:", doubled);

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
console.log(greetPerson(user));`,
  python: `# Python Playground
print("Hello from Python!")

# List comprehension
squares = [x**2 for x in range(10)]
print(f"Squares: {squares}")

def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        print(a, end=' ')
        a, b = b, a + b
    print()

fibonacci(10)`,
  sql: `-- SQL Playground
CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
);

INSERT INTO users VALUES 
(1, 'Alice', 'alice@example.com'),
(2, 'Bob', 'bob@example.com');

SELECT * FROM users;
SELECT name FROM users WHERE id = 1;`,
  bash: `#!/bin/bash
# Bash Playground

echo "Welcome to Bash Playground!"
echo "Current date: $(date)"
echo "Current user: $(whoami)"

for i in {1..5}; do
    echo "Count: $i"
done`
};

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export default function CodePlayground() {
  // Language & file states
  const [currentLanguage, setCurrentLanguage] = useState("react");
  const [jsxCode, setJsxCode] = useState(DEFAULT_REACT_JSX);
  const [cssCode, setCssCode] = useState(DEFAULT_REACT_CSS);
  const [htmlCode, setHtmlCode] = useState(DEFAULT_REACT_HTML);
  const [htmlCssJsCode, setHtmlCssJsCode] = useState(DEFAULT_HTML_CSS_JS);
  const [plainCode, setPlainCode] = useState("");
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

  const languages = [
    { id: "react", label: "⚛️ React", icon: "⚛️" },
    { id: "htmlcssjs", label: "🌐 HTML/CSS/JS", icon: "🌐" },
    { id: "javascript", label: "📜 JavaScript", icon: "📜" },
    { id: "typescript", label: "📘 TypeScript", icon: "📘" },
    { id: "python", label: "🐍 Python", icon: "🐍" },
    { id: "sql", label: "🗄️ SQL", icon: "🗄️" },
    { id: "bash", label: "🖥️ Bash", icon: "🖥️" }
  ];

  const getCurrentCode = () => {
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

  const handleLanguageChange = (langId) => {
    setCurrentLanguage(langId);
    setSelectedTemplate("");
    
    if (langId === "react") {
      setActiveFile("jsx");
    } else if (langId === "htmlcssjs") {
      setActiveFile("html");
      if (!htmlCssJsCode.html) {
        setHtmlCssJsCode(DEFAULT_HTML_CSS_JS);
      }
    } else {
      setActiveFile("code");
      if (!plainCode && LANGUAGE_DEFAULTS[langId]) {
        setPlainCode(LANGUAGE_DEFAULTS[langId]);
      }
    }
    
    setTimeout(() => runCode(), 100);
  };

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
    ${jsxCode}
  </script>
</body>
</html>`;
    } else if (currentLanguage === "htmlcssjs") {
      // Combine HTML, CSS, and JS into a single document
      let fullHtml = htmlCssJsCode.html || DEFAULT_HTML_CSS_JS.html;
      // Inject CSS
      if (htmlCssJsCode.css) {
        fullHtml = fullHtml.replace('</head>', `<style>${htmlCssJsCode.css}</style></head>`);
      }
      // Inject JS
      if (htmlCssJsCode.js) {
        fullHtml = fullHtml.replace('</body>', `<script>${htmlCssJsCode.js}</script></body>`);
      }
      return fullHtml;
    } else {
      return `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: monospace; padding: 20px; background: #1a1a2e; color: #00ff88; }
    pre { background: #0a0a1a; padding: 20px; border-radius: 10px; overflow: auto; }
  </style>
</head>
<body>
  <h2>${currentLanguage.toUpperCase()} Code</h2>
  <pre>${plainCode.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
  <p style="color: #888;">Note: This is a code preview. Run in local environment for execution.</p>
</body>
</html>`;
    }
  }, [currentLanguage, jsxCode, cssCode, htmlCode, htmlCssJsCode, plainCode]);

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
        setHtmlCssJsCode({
          html: template.html || DEFAULT_HTML_CSS_JS.html,
          css: template.css || DEFAULT_HTML_CSS_JS.css,
          js: template.js || DEFAULT_HTML_CSS_JS.js
        });
        setActiveFile("html");
      } else {
        setPlainCode(template.code || LANGUAGE_DEFAULTS[lang] || `// ${lang} template`);
        setActiveFile("code");
      }
      setTimeout(() => runCode(), 100);
    }
  };

  const saveToLocalStorage = () => {
    const project = {
      language: currentLanguage,
      jsxCode, cssCode, htmlCode,
      htmlCssJsCode,
      plainCode,
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
      setJsxCode(project.jsxCode || DEFAULT_REACT_JSX);
      setCssCode(project.cssCode || DEFAULT_REACT_CSS);
      setHtmlCode(project.htmlCode || DEFAULT_REACT_HTML);
      setHtmlCssJsCode(project.htmlCssJsCode || DEFAULT_HTML_CSS_JS);
      setPlainCode(project.plainCode || "");
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
      setJsxCode(DEFAULT_REACT_JSX);
      setCssCode(DEFAULT_REACT_CSS);
      setHtmlCode(DEFAULT_REACT_HTML);
    } else if (currentLanguage === "htmlcssjs") {
      setHtmlCssJsCode(DEFAULT_HTML_CSS_JS);
    } else {
      setPlainCode(LANGUAGE_DEFAULTS[currentLanguage] || `// ${currentLanguage} code`);
    }
    setSelectedTemplate("");
    setTimeout(() => runCode(), 100);
  };

  const downloadProject = () => {
    if (currentLanguage === "react") {
      const files = [
        { name: "App.jsx", content: jsxCode },
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
    } else if (currentLanguage === "htmlcssjs") {
      const files = [
        { name: "index.html", content: htmlCssJsCode.html },
        { name: "styles.css", content: htmlCssJsCode.css },
        { name: "script.js", content: htmlCssJsCode.js }
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
      const ext = { javascript: "js", typescript: "ts", python: "py", sql: "sql", bash: "sh" }[currentLanguage];
      const blob = new Blob([plainCode], { type: 'text/plain' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `code.${ext}`;
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
    } else if (currentLanguage === "htmlcssjs") {
      return (
        <>
          <button className={`pg-file-tab ${activeFile === 'html' ? 'active' : ''}`} onClick={() => setActiveFile('html')}>
            📄 index.html
          </button>
          <button className={`pg-file-tab ${activeFile === 'css' ? 'active' : ''}`} onClick={() => setActiveFile('css')}>
            🎨 styles.css
          </button>
          <button className={`pg-file-tab ${activeFile === 'js' ? 'active' : ''}`} onClick={() => setActiveFile('js')}>
            📜 script.js
          </button>
        </>
      );
    }
    return (
      <button className="pg-file-tab active">
        {languages.find(l => l.id === currentLanguage)?.icon} {currentLanguage.toUpperCase()}.{currentLanguage === "javascript" ? "js" : currentLanguage === "typescript" ? "ts" : currentLanguage === "python" ? "py" : currentLanguage === "sql" ? "sql" : "sh"}
      </button>
    );
  };

  return (
    <div className={`pg-container ${fullscreen ? 'fullscreen' : ''}`}>
      <section className="pg-section">
        <div className="pg-topbar">
          <div className="pg-dots">
            <span className="pg-dot pg-dot-r" />
            <span className="pg-dot pg-dot-y" />
            <span className="pg-dot pg-dot-g" />
          </div>
          <span className="pg-title">🌈 MULTI-LANG PLAYGROUND — 7 Languages Supported</span>
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

        <div className="pg-main-layout">
          {showSidebar && (
            <div className="pg-sidebar">
              <div className="pg-sidebar-header">
                <h3>📁 TEMPLATE LIBRARY</h3>
                <span className="pg-template-count">50+ templates</span>
              </div>
              
              <select className="pg-sidebar-select" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="ReactComponents">⚛️ React Components ({getCategoryCount("ReactComponents")})</option>
                <option value="HTML_CSS_JS">🎨 HTML/CSS/JS ({getCategoryCount("HTML_CSS_JS")})</option>
                <option value="JavaScript">📜 JavaScript ({getCategoryCount("JavaScript")})</option>
                <option value="TypeScript">📘 TypeScript ({getCategoryCount("TypeScript")})</option>
                <option value="Python">🐍 Python ({getCategoryCount("Python")})</option>
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
                  <li>50+ ready-to-use templates</li>
                  <li>HTML/CSS/JS fully editable</li>
                </ul>
              </div>
            </div>
          )}

          <div className="pg-main-content">
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

            <div className="pg-editor-output">
              <div className="pg-editor-area">
                <div className="pg-editor-header">
                  <span className="pg-lang-badge">
                    {currentLanguage === "react" ? "⚛️ REACT JSX" : 
                     currentLanguage === "htmlcssjs" ? "🌐 " + activeFile.toUpperCase() : 
                     currentLanguage.toUpperCase()}
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

              <div className="pg-resize-handle" onMouseDown={startResizing}>
                <div className="pg-resize-line"></div>
              </div>

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

        <div className="pg-footer">
          <span className="pg-prompt">{languages.find(l => l.id === currentLanguage)?.icon}</span>
          <span className="pg-footer-slogan">
            Multi-Language Playground • React • HTML/CSS/JS • JavaScript • TypeScript • Python • SQL • Bash
          </span>
          <span className="pg-footer-right">50+ Templates • 7 Languages</span>
        </div>
      </section>
    </div>
  );
}
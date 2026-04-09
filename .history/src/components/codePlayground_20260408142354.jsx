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
      label: "Todo List App ✅",
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
    },
    "Dark Mode Toggle": {
      label: "Dark Mode Toggle 🌙",
      language: "react",
      jsx: `// React Dark Mode Toggle
import React, { useState, useEffect } from 'react';

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.style.background = '#1a1a2e';
      document.body.style.color = '#ffffff';
    } else {
      document.body.style.background = '#ffffff';
      document.body.style.color = '#1a1a2e';
    }
  }, [darkMode]);

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Dark Mode Demo</h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          padding: '12px 24px',
          fontSize: '18px',
          background: darkMode ? '#38bdf8' : '#1a1a2e',
          color: darkMode ? '#1a1a2e' : 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'all 0.3s'
        }}
      >
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
      <p style={{ marginTop: '20px' }}>Current mode: {darkMode ? 'Dark' : 'Light'}</p>
    </div>
  );
}

export default DarkModeToggle;`,
      css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: all 0.3s ease;
}

body {
  font-family: 'Segoe UI', sans-serif;
  min-height: 100vh;
}`,
      html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Dark Mode Toggle</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>`
    },
    "Weather App": {
      label: "Weather App 🌤️",
      language: "react",
      jsx: `// React Weather App
import React, { useState } from 'react';

function WeatherApp() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    if (!city.trim()) return;
    setLoading(true);
    // Mock API response
    setTimeout(() => {
      setWeather({
        temp: Math.floor(Math.random() * 30) + 10,
        condition: ['Sunny', 'Cloudy', 'Rainy', 'Windy'][Math.floor(Math.random() * 4)],
        humidity: Math.floor(Math.random() * 50) + 30,
        city: city
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Weather App</h1>
      <div style={searchStyle}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && fetchWeather()}
          placeholder="Enter city name..."
          style={inputStyle}
        />
        <button onClick={fetchWeather} style={buttonStyle} disabled={loading}>
          {loading ? 'Loading...' : 'Search'}
        </button>
      </div>
      {weather && (
        <div style={weatherCardStyle}>
          <h2>{weather.city}</h2>
          <div style={tempStyle}>{weather.temp}°C</div>
          <div style={conditionStyle}>{weather.condition}</div>
          <div>💧 Humidity: {weather.humidity}%</div>
        </div>
      )}
    </div>
  );
}

const containerStyle = {
  maxWidth: '500px',
  margin: '0 auto',
  padding: '40px',
  textAlign: 'center'
};

const titleStyle = {
  color: '#38bdf8',
  marginBottom: '30px'
};

const searchStyle = {
  display: 'flex',
  gap: '10px',
  marginBottom: '30px'
};

const inputStyle = {
  flex: 1,
  padding: '12px',
  background: '#07101f',
  border: '1px solid #0f2744',
  borderRadius: '8px',
  color: 'white',
  fontSize: '16px'
};

const buttonStyle = {
  padding: '12px 24px',
  background: '#38bdf8',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontWeight: 'bold'
};

const weatherCardStyle = {
  background: 'linear-gradient(135deg, #07101f, #0a1628)',
  padding: '30px',
  borderRadius: '16px',
  border: '1px solid #0f2744'
};

const tempStyle = {
  fontSize: '48px',
  fontWeight: 'bold',
  color: '#38bdf8',
  margin: '20px 0'
};

const conditionStyle = {
  fontSize: '24px',
  marginBottom: '20px'
};

export default WeatherApp;`,
      css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  background: #060d1a;
  font-family: 'Segoe UI', sans-serif;
}`,
      html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Weather App</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>`
    },
    "Image Gallery": {
      label: "Image Gallery 🖼️",
      language: "react",
      jsx: `// React Image Gallery
import React, { useState } from 'react';

const images = [
  { id: 1, url: 'https://picsum.photos/id/1015/300/200', title: 'Mountain Landscape' },
  { id: 2, url: 'https://picsum.photos/id/104/300/200', title: 'Beautiful Nature' },
  { id: 3, url: 'https://picsum.photos/id/107/300/200', title: 'Flower Field' },
  { id: 4, url: 'https://picsum.photos/id/116/300/200', title: 'Lake View' },
  { id: 5, url: 'https://picsum.photos/id/119/300/200', title: 'Mountain Peak' },
  { id: 6, url: 'https://picsum.photos/id/20/300/200', title: 'Coffee Time' }
];

function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Image Gallery</h1>
      <div style={galleryStyle}>
        {images.map(img => (
          <div key={img.id} style={cardStyle} onClick={() => setSelectedImage(img)}>
            <img src={img.url} alt={img.title} style={imageStyle} />
            <p style={captionStyle}>{img.title}</p>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div style={modalStyle} onClick={() => setSelectedImage(null)}>
          <div style={modalContentStyle}>
            <img src={selectedImage.url} alt={selectedImage.title} style={modalImageStyle} />
            <h3>{selectedImage.title}</h3>
            <button style={closeButtonStyle} onClick={() => setSelectedImage(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

const containerStyle = {
  padding: '40px',
  maxWidth: '1200px',
  margin: '0 auto'
};

const titleStyle = {
  color: '#38bdf8',
  textAlign: 'center',
  marginBottom: '40px'
};

const galleryStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '20px'
};

const cardStyle = {
  background: '#07101f',
  borderRadius: '12px',
  overflow: 'hidden',
  cursor: 'pointer',
  transition: 'transform 0.3s',
  border: '1px solid #0f2744'
};

const imageStyle = {
  width: '100%',
  height: '200px',
  objectFit: 'cover'
};

const captionStyle = {
  padding: '12px',
  textAlign: 'center',
  color: '#cbd5e1'
};

const modalStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'rgba(0,0,0,0.9)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000
};

const modalContentStyle = {
  background: '#07101f',
  padding: '20px',
  borderRadius: '16px',
  textAlign: 'center',
  maxWidth: '90%',
  maxHeight: '90%'
};

const modalImageStyle = {
  maxWidth: '100%',
  maxHeight: '70vh',
  borderRadius: '8px'
};

const closeButtonStyle = {
  marginTop: '20px',
  padding: '8px 20px',
  background: '#38bdf8',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer'
};

export default ImageGallery;`,
      css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #060d1a;
  font-family: 'Segoe UI', sans-serif;
}`,
      html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Image Gallery</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>`
    },
    "Stopwatch": {
      label: "Stopwatch ⏱️",
      language: "react",
      jsx: `// React Stopwatch
import React, { useState, useRef, useEffect } from 'react';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setTime(prev => prev + 10);
      }, 10);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [running]);

  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);
    return \`\${minutes.toString().padStart(2, '0')}:\${seconds.toString().padStart(2, '0')}:\${milliseconds.toString().padStart(2, '0')}\`;
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Stopwatch</h1>
      <div style={timeStyle}>{formatTime(time)}</div>
      <div style={buttonGroupStyle}>
        <button onClick={() => setRunning(true)} style={buttonStyle} disabled={running}>Start</button>
        <button onClick={() => setRunning(false)} style={buttonStyle} disabled={!running}>Pause</button>
        <button onClick={() => { setRunning(false); setTime(0); }} style={buttonStyle}>Reset</button>
      </div>
    </div>
  );
}

const containerStyle = {
  textAlign: 'center',
  padding: '50px',
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #1a1a2e, #16213e)'
};

const titleStyle = {
  color: '#38bdf8',
  marginBottom: '40px'
};

const timeStyle = {
  fontSize: '64px',
  fontFamily: 'monospace',
  color: '#00ff88',
  marginBottom: '40px',
  background: '#07101f',
  padding: '30px',
  borderRadius: '16px',
  display: 'inline-block'
};

const buttonGroupStyle = {
  display: 'flex',
  gap: '15px',
  justifyContent: 'center'
};

const buttonStyle = {
  padding: '12px 24px',
  fontSize: '16px',
  background: '#38bdf8',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontWeight: 'bold'
};

export default Stopwatch;`,
      css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', sans-serif;
}`,
      html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Stopwatch</title>
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
    
    if (card) {
        card.addEventListener('click', function(e) {
            if (e.target === btn) return;
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    }
    
    if (btn) {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            alert('✨ Welcome to Glassmorphism!');
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    }
    
    console.log('Glassmorphism Card loaded!');
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
}

.neon-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px currentColor;
}

.neon-pink { color: #ff00de; border-color: #ff00de; }
.neon-pink:hover { background: #ff00de; color: #0a0a1a; box-shadow: 0 0 30px #ff00de; }
.neon-blue { color: #00e0ff; border-color: #00e0ff; }
.neon-blue:hover { background: #00e0ff; color: #0a0a1a; box-shadow: 0 0 30px #00e0ff; }
.neon-green { color: #00ff88; border-color: #00ff88; }
.neon-green:hover { background: #00ff88; color: #0a0a1a; box-shadow: 0 0 30px #00ff88; }
.neon-purple { color: #b400ff; border-color: #b400ff; }
.neon-purple:hover { background: #b400ff; color: #0a0a1a; box-shadow: 0 0 30px #b400ff; }
.neon-cyan { color: #00ffff; border-color: #00ffff; }
.neon-cyan:hover { background: #00ffff; color: #0a0a1a; box-shadow: 0 0 30px #00ffff; }
.neon-orange { color: #ff6b00; border-color: #ff6b00; }
.neon-orange:hover { background: #ff6b00; color: #0a0a1a; box-shadow: 0 0 30px #ff6b00; }

.instruction {
    color: #666;
    font-size: 14px;
    margin-top: 20px;
}

@media (max-width: 768px) {
    h1 { font-size: 32px; }
    .neon-btn { padding: 12px 24px; font-size: 14px; }
}`,
      js: `document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.neon-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const color = this.classList[1].replace('neon-', '');
            alert(\`✨ \${color.toUpperCase()} button clicked!\`);
            this.style.transform = 'scale(0.95)';
            setTimeout(() => { this.style.transform = ''; }, 150);
        });
    });
    console.log('Neon Buttons loaded!');
});`
    },
    "Animated Gradient BG": {
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
        <button class="gradient-btn">Change Colors</button>
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
    background: linear-gradient(270deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ff6b6b);
    background-size: 400% 400%;
    animation: gradientShift 10s ease infinite;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Segoe UI', sans-serif;
}

@keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
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
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}

h1 {
    font-size: 56px;
    color: white;
    margin-bottom: 20px;
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
    h1 { font-size: 36px; }
    p { font-size: 16px; }
    .content { padding: 30px; margin: 20px; }
}`,
      js: `let colorIndex = 0;
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
    document.body.style.background = \`linear-gradient(270deg, \${colors.join(', ')}, \${colors[0]})\`;
    document.body.style.backgroundSize = '400% 400%';
}

document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.gradient-btn');
    if (btn) {
        btn.addEventListener('click', changeGradient);
    }
    console.log('Animated Gradient loaded!');
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
            </div>
            <div class="flip-card-back">
                <div class="card-icon">✨</div>
                <h2>Back Side</h2>
                <p>Amazing 3D flip effect!</p>
                <button class="flip-btn">Learn More</button>
            </div>
        </div>
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
    font-family: 'Segoe UI', sans-serif;
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
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

h2 {
    font-size: 28px;
    margin-bottom: 15px;
}

p {
    font-size: 16px;
    margin-bottom: 20px;
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
    .flip-card { width: 280px; height: 380px; }
    h2 { font-size: 22px; }
    .card-icon { font-size: 48px; }
}`,
      js: `document.addEventListener('DOMContentLoaded', function() {
    const flipCard = document.querySelector('.flip-card');
    const flipBtn = document.querySelector('.flip-btn');
    
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
    
    if (flipBtn) {
        flipBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            alert('You flipped the card!');
        });
    }
    
    console.log('3D Flip Card loaded!');
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
    <nav class="navbar">
        <div class="nav-brand">
            <span class="logo-icon">🚀</span>
            <span class="logo-text">BrandName</span>
        </div>
        <ul class="nav-menu">
            <li class="nav-item"><a href="#" class="nav-link active">Home</a></li>
            <li class="nav-item"><a href="#" class="nav-link">About</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Services</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Portfolio</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Contact</a></li>
        </ul>
        <div class="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
    </nav>
    <div class="hero">
        <h1>Responsive Navbar</h1>
        <p>Resize your browser window to see the responsive design</p>
        <button class="hero-btn">Get Started</button>
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
    font-family: 'Segoe UI', sans-serif;
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

.logo-icon { font-size: 28px; }
.logo-text { color: white; font-size: 24px; font-weight: bold; }

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
}

.nav-link:hover { color: #38bdf8; background: rgba(56, 189, 248, 0.1); }
.nav-link.active { color: #38bdf8; border-bottom: 2px solid #38bdf8; }

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

.hero h1 { font-size: 48px; margin-bottom: 20px; }
.hero p { font-size: 18px; margin-bottom: 30px; }

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
}

.hero-btn:hover { transform: scale(1.05); box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2); }

@media (max-width: 768px) {
    .navbar { padding: 0 20px; }
    .hamburger { display: flex; }
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
    .nav-menu.active { left: 0; }
    .hamburger.active .bar:nth-child(1) { transform: rotate(-45deg) translate(-5px, 6px); }
    .hamburger.active .bar:nth-child(2) { opacity: 0; }
    .hamburger.active .bar:nth-child(3) { transform: rotate(45deg) translate(-5px, -6px); }
    .hero h1 { font-size: 32px; }
    .hero p { font-size: 14px; }
}`,
      js: `document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            if (window.innerWidth <= 768) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });
    
    const heroBtn = document.querySelector('.hero-btn');
    if (heroBtn) {
        heroBtn.addEventListener('click', () => alert('Welcome to our website!'));
    }
    
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
        <button class="particle-btn">Add Particles ✨</button>
    </div>
    <script src="script.js"></script>
</body>
</html>`,
      css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body { overflow: hidden; font-family: 'Segoe UI', sans-serif; }

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
}

h1 { font-size: 56px; margin-bottom: 20px; }
p { font-size: 20px; margin-bottom: 30px; }

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
}

.particle-btn:hover { transform: scale(1.05); box-shadow: 0 5px 20px rgba(56, 189, 248, 0.4); }

@media (max-width: 768px) {
    h1 { font-size: 36px; }
    p { font-size: 16px; }
}`,
      js: `const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
let particles = [];
let mouseX = null, mouseY = null;

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
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        if (mouseX && mouseY) {
            const dx = this.x - mouseX, dy = this.y - mouseY;
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

for (let i = 0; i < 100; i++) particles.push(new Particle());

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

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles = particles.filter(p => { if (p.update()) { p.draw(); return true; } return false; });
    while (particles.length < 100) particles.push(new Particle());
    connectParticles();
    requestAnimationFrame(animate);
}

animate();

canvas.addEventListener('mousemove', (e) => { mouseX = e.clientX; mouseY = e.clientY; });
canvas.addEventListener('mouseleave', () => { mouseX = null; mouseY = null; });

function addParticleBurst() {
    for (let i = 0; i < 30; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3 + 2;
        const particle = new Particle(canvas.width / 2, canvas.height / 2);
        particle.vx = Math.cos(angle) * speed;
        particle.vy = Math.sin(angle) * speed;
        particle.size = Math.random() * 4 + 2;
        particles.push(particle);
    }
}

document.querySelector('.particle-btn').addEventListener('click', addParticleBurst);
console.log('Particle Background loaded!');`
    },
    "Login Form": {
      label: "Login Form 🔐",
      language: "htmlcssjs",
      html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Form</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="login-container">
        <div class="login-card">
            <div class="login-header">
                <h2>Welcome Back</h2>
                <p>Please login to your account</p>
            </div>
            <form id="loginForm">
                <div class="input-group">
                    <input type="email" id="email" placeholder="Email address" required>
                </div>
                <div class="input-group">
                    <input type="password" id="password" placeholder="Password" required>
                </div>
                <div class="options">
                    <label class="checkbox">
                        <input type="checkbox"> Remember me
                    </label>
                    <a href="#" class="forgot">Forgot Password?</a>
                </div>
                <button type="submit" class="login-btn">Sign In</button>
            </form>
            <div class="signup-link">
                Don't have an account? <a href="#">Sign up</a>
            </div>
        </div>
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
    font-family: 'Segoe UI', sans-serif;
    padding: 20px;
}

.login-container {
    width: 100%;
    max-width: 400px;
}

.login-card {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 16px;
    padding: 40px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.login-header {
    text-align: center;
    margin-bottom: 30px;
}

.login-header h2 {
    color: #333;
    font-size: 28px;
    margin-bottom: 8px;
}

.login-header p {
    color: #666;
    font-size: 14px;
}

.input-group {
    margin-bottom: 20px;
}

.input-group input {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 14px;
    transition: all 0.3s ease;
}

.input-group input:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    font-size: 14px;
}

.checkbox {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #666;
    cursor: pointer;
}

.forgot {
    color: #667eea;
    text-decoration: none;
}

.forgot:hover {
    text-decoration: underline;
}

.login-btn {
    width: 100%;
    padding: 12px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.login-btn:hover {
    transform: translateY(-2px);
}

.signup-link {
    text-align: center;
    margin-top: 25px;
    font-size: 14px;
    color: #666;
}

.signup-link a {
    color: #667eea;
    text-decoration: none;
}

.signup-link a:hover {
    text-decoration: underline;
}

@media (max-width: 480px) {
    .login-card { padding: 30px 20px; }
    .login-header h2 { font-size: 24px; }
}`,
      js: `document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (email && password) {
        alert(\`Welcome back, \${email}! Login successful.\`);
        console.log('Login attempted with:', email);
    } else {
        alert('Please fill in all fields');
    }
});`
    },
    "Product Card": {
      label: "Product Card 🛍️",
      language: "htmlcssjs",
      html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product Card</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="product-card">
        <div class="product-badge">New</div>
        <div class="product-image">
            <img src="https://picsum.photos/id/20/300/300" alt="Product">
        </div>
        <div class="product-info">
            <h3 class="product-title">Premium Product</h3>
            <p class="product-desc">High quality product with amazing features and benefits.</p>
            <div class="product-price">
                <span class="current-price">$49.99</span>
                <span class="old-price">$99.99</span>
            </div>
            <div class="product-rating">
                <span class="stars">★★★★★</span>
                <span class="rating-count">(128 reviews)</span>
            </div>
            <button class="add-to-cart">Add to Cart</button>
        </div>
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
    background: linear-gradient(135deg, #1e3c72, #2a5298);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Segoe UI', sans-serif;
    padding: 20px;
}

.product-card {
    background: white;
    border-radius: 20px;
    overflow: hidden;
    max-width: 350px;
    position: relative;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.product-badge {
    position: absolute;
    top: 20px;
    left: 20px;
    background: #ff6b6b;
    color: white;
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: bold;
    z-index: 1;
}

.product-image img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.product-card:hover .product-image img {
    transform: scale(1.05);
}

.product-info {
    padding: 20px;
}

.product-title {
    font-size: 20px;
    color: #333;
    margin-bottom: 10px;
}

.product-desc {
    color: #666;
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 15px;
}

.product-price {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 15px;
}

.current-price {
    font-size: 24px;
    font-weight: bold;
    color: #2a5298;
}

.old-price {
    font-size: 16px;
    color: #999;
    text-decoration: line-through;
}

.product-rating {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 20px;
}

.stars {
    color: #ffc107;
    font-size: 16px;
}

.rating-count {
    color: #999;
    font-size: 12px;
}

.add-to-cart {
    width: 100%;
    padding: 12px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.add-to-cart:hover {
    transform: translateY(-2px);
}`,
      js: `document.querySelector('.add-to-cart').addEventListener('click', function() {
    alert('Product added to cart! 🛒');
    this.textContent = 'Added! ✓';
    setTimeout(() => {
        this.textContent = 'Add to Cart';
    }, 2000);
});`
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
    },
    "Calculator": {
      label: "Calculator 🧮",
      language: "javascript",
      code: `// Simple Calculator
class Calculator {
    constructor() {
        this.currentValue = 0;
        this.previousValue = null;
        this.operation = null;
    }
    
    add(a, b) {
        return a + b;
    }
    
    subtract(a, b) {
        return a - b;
    }
    
    multiply(a, b) {
        return a * b;
    }
    
    divide(a, b) {
        if (b === 0) return 'Error: Division by zero';
        return a / b;
    }
    
    calculate(a, b, operation) {
        switch(operation) {
            case '+': return this.add(a, b);
            case '-': return this.subtract(a, b);
            case '*': return this.multiply(a, b);
            case '/': return this.divide(a, b);
            default: return b;
        }
    }
}

const calc = new Calculator();
console.log('Calculator Demo:');
console.log('5 + 3 =', calc.calculate(5, 3, '+'));
console.log('10 - 4 =', calc.calculate(10, 4, '-'));
console.log('6 * 7 =', calc.calculate(6, 7, '*'));
console.log('15 / 3 =', calc.calculate(15, 3, '/'));

// Interactive version
if (typeof document !== 'undefined') {
    const div = document.createElement('div');
    div.style.cssText = 'padding: 20px; background: #1a1a2e; border-radius: 10px; color: white;';
    div.innerHTML = \`
        <h3>Interactive Calculator</h3>
        <input type="number" id="num1" placeholder="Number 1" style="margin: 5px; padding: 8px;">
        <select id="op">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
        </select>
        <input type="number" id="num2" placeholder="Number 2" style="margin: 5px; padding: 8px;">
        <button id="calcBtn" style="margin: 5px; padding: 8px 16px;">=</button>
        <div id="result" style="margin-top: 10px; font-size: 20px;"></div>
    \`;
    document.body.innerHTML = '';
    document.body.appendChild(div);
    
    document.getElementById('calcBtn').addEventListener('click', () => {
        const a = parseFloat(document.getElementById('num1').value);
        const b = parseFloat(document.getElementById('num2').value);
        const op = document.getElementById('op').value;
        const result = calc.calculate(a, b, op);
        document.getElementById('result').innerHTML = \`Result: \${result}\`;
    });
}`
    },
    "Palindrome Checker": {
      label: "Palindrome Checker 🔄",
      language: "javascript",
      code: `// Palindrome Checker
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}

// Test cases
const testStrings = [
    "A man, a plan, a canal: Panama",
    "race a car",
    "hello",
    "Was it a car or a cat I saw?",
    "No 'x' in Nixon"
];

console.log('Palindrome Checker Results:');
testStrings.forEach(test => {
    console.log(\`"\${test}" -> \${isPalindrome(test) ? '✅ Palindrome' : '❌ Not a palindrome'}\`);
});

// Interactive version
if (typeof document !== 'undefined') {
    const container = document.createElement('div');
    container.style.cssText = 'padding: 20px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 10px; text-align: center;';
    container.innerHTML = \`
        <h2 style="color: white;">Palindrome Checker</h2>
        <input type="text" id="palInput" placeholder="Enter a word or phrase..." style="width: 80%; padding: 10px; margin: 10px; border: none; border-radius: 5px;">
        <button id="checkBtn" style="padding: 10px 20px; background: #38bdf8; border: none; border-radius: 5px; cursor: pointer;">Check</button>
        <div id="palResult" style="margin-top: 15px; color: white; font-size: 18px;"></div>
    \`;
    document.body.innerHTML = '';
    document.body.appendChild(container);
    
    document.getElementById('checkBtn').addEventListener('click', () => {
        const input = document.getElementById('palInput').value;
        const result = isPalindrome(input);
        document.getElementById('palResult').innerHTML = result ? 
            '✅ "' + input + '" is a palindrome!' : 
            '❌ "' + input + '" is not a palindrome.';
    });
}`
    },
    "FizzBuzz": {
      label: "FizzBuzz 🎮",
      language: "javascript",
      code: `// Classic FizzBuzz Implementation
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        let output = '';
        if (i % 3 === 0) output += 'Fizz';
        if (i % 5 === 0) output += 'Buzz';
        console.log(output || i);
    }
}

console.log('FizzBuzz for numbers 1-20:');
fizzBuzz(20);

// Enhanced version with array return
function fizzBuzzArray(n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) result.push('FizzBuzz');
        else if (i % 3 === 0) result.push('Fizz');
        else if (i % 5 === 0) result.push('Buzz');
        else result.push(i);
    }
    return result;
}

console.log('FizzBuzz Array (1-15):', fizzBuzzArray(15));

// Visual version for browser
if (typeof document !== 'undefined') {
    const container = document.createElement('div');
    container.style.cssText = 'padding: 20px; background: #0a0a1a; border-radius: 10px;';
    container.innerHTML = '<h2 style="color: #38bdf8;">FizzBuzz Visualizer</h2><div id="fizzbuzzGrid" style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; margin-top: 20px;"></div>';
    document.body.innerHTML = '';
    document.body.appendChild(container);
    
    const grid = document.getElementById('fizzbuzzGrid');
    const numbers = fizzBuzzArray(25);
    numbers.forEach(num => {
        const div = document.createElement('div');
        div.textContent = num;
        div.style.cssText = 'padding: 10px; text-align: center; border-radius: 5px;';
        if (num === 'FizzBuzz') div.style.background = '#ef4444';
        else if (num === 'Fizz') div.style.background = '#fbbf24';
        else if (num === 'Buzz') div.style.background = '#34d399';
        else div.style.background = '#1a1a2e';
        div.style.color = 'white';
        grid.appendChild(div);
    });
}`
    },
    "To-Do List": {
      label: "To-Do List ✅",
      language: "javascript",
      code: `// Interactive To-Do List Application
let todos = [];

function addTodo(text) {
    todos.push({
        id: Date.now(),
        text: text,
        completed: false,
        createdAt: new Date()
    });
    renderTodos();
}

function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) todo.completed = !todo.completed;
    renderTodos();
}

function deleteTodo(id) {
    todos = todos.filter(t => t.id !== id);
    renderTodos();
}

function renderTodos() {
    const todoList = document.getElementById('todoList');
    if (!todoList) return;
    
    if (todos.length === 0) {
        todoList.innerHTML = '<p style="color: #8a96a8; text-align: center;">No tasks yet. Add one!</p>';
        return;
    }
    
    todoList.innerHTML = todos.map(todo => \`
        <div style="display: flex; align-items: center; gap: 10px; padding: 10px; background: #07101f; margin-bottom: 8px; border-radius: 8px;">
            <input type="checkbox" \${todo.completed ? 'checked' : ''} onchange="toggleTodo(\${todo.id})" style="width: 20px; height: 20px;">
            <span style="flex: 1; \${todo.completed ? 'text-decoration: line-through; color: #8a96a8;' : 'color: white;'}">\${todo.text}</span>
            <button onclick="deleteTodo(\${todo.id})" style="background: transparent; border: none; color: #ef4444; cursor: pointer; font-size: 18px;">×</button>
        </div>
    \`).join('');
}

function updateStats() {
    const total = todos.length;
    const completed = todos.filter(t => t.completed).length;
    const statsDiv = document.getElementById('todoStats');
    if (statsDiv) {
        statsDiv.innerHTML = \`Total: \${total} | Completed: \${completed} | Pending: \${total - completed}\`;
    }
}

// Override renderTodos to include stats
const originalRender = renderTodos;
renderTodos = function() {
    originalRender();
    updateStats();
};

if (typeof document !== 'undefined') {
    const container = document.createElement('div');
    container.style.cssText = 'max-width: 500px; margin: 0 auto; padding: 20px; background: #060d1a; min-height: 100vh;';
    container.innerHTML = \`
        <h1 style="color: #38bdf8; text-align: center;">📝 To-Do List</h1>
        <div style="display: flex; gap: 10px; margin-bottom: 20px;">
            <input type="text" id="todoInput" placeholder="Add a new task..." style="flex: 1; padding: 10px; background: #07101f; border: 1px solid #0f2744; border-radius: 8px; color: white;">
            <button id="addBtn" style="padding: 10px 20px; background: #38bdf8; border: none; border-radius: 8px; cursor: pointer;">Add</button>
        </div>
        <div id="todoStats" style="margin-bottom: 15px; color: #8a96a8; font-size: 12px; text-align: center;"></div>
        <div id="todoList"></div>
    \`;
    document.body.innerHTML = '';
    document.body.appendChild(container);
    
    document.getElementById('addBtn').addEventListener('click', () => {
        const input = document.getElementById('todoInput');
        if (input.value.trim()) {
            addTodo(input.value.trim());
            input.value = '';
        }
    });
    
    document.getElementById('todoInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') document.getElementById('addBtn').click();
    });
    
    // Add some sample todos
    addTodo('Welcome to your to-do list!');
    addTodo('Click the checkbox to complete tasks');
    addTodo('Add your own tasks');
}`
    },
    "Random Quote Generator": {
      label: "Random Quote 💬",
      language: "javascript",
      code: `// Random Quote Generator
const quotes = [
    { text: "The only limit is your imagination.", author: "Anonymous" },
    { text: "Code is poetry in motion.", author: "Developer" },
    { text: "Stay curious, keep learning.", author: "Unknown" },
    { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
    { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
    { text: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },
    { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" }
];

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function displayRandomQuote() {
    const quote = getRandomQuote();
    const quoteDiv = document.getElementById('quote');
    const authorSpan = document.getElementById('author');
    if (quoteDiv && authorSpan) {
        quoteDiv.textContent = \`"\${quote.text}"\`;
        authorSpan.textContent = \`— \${quote.author}\`;
    }
    console.log(\`Quote: \${quote.text} - \${quote.author}\`);
}

if (typeof document !== 'undefined') {
    const container = document.createElement('div');
    container.style.cssText = 'min-height: 100vh; background: linear-gradient(135deg, #667eea, #764ba2); display: flex; align-items: center; justify-content: center; padding: 20px;';
    container.innerHTML = \`
        <div style="max-width: 600px; background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border-radius: 20px; padding: 40px; text-align: center;">
            <h2 style="color: white; margin-bottom: 20px;">✨ Random Quote Generator</h2>
            <div style="background: rgba(0,0,0,0.3); border-radius: 10px; padding: 30px; margin-bottom: 20px;">
                <p id="quote" style="color: white; font-size: 20px; line-height: 1.5; margin-bottom: 15px;">"Click the button for inspiration"</p>
                <p id="author" style="color: #38bdf8; font-size: 14px;">— Ready</p>
            </div>
            <button id="newQuoteBtn" style="padding: 12px 30px; background: #38bdf8; border: none; border-radius: 50px; color: #060d1a; font-weight: bold; cursor: pointer;">New Quote</button>
        </div>
    \`;
    document.body.innerHTML = '';
    document.body.appendChild(container);
    
    document.getElementById('newQuoteBtn').addEventListener('click', displayRandomQuote);
    displayRandomQuote();
}`
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
    createdAt?: Date;
}

type UserRole = 'admin' | 'user' | 'guest';

function greetUser(user: User): string {
    return \`Hello, \${user.name}! You are active: \${user.isActive}\`;
}

const newUser: User = {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    isActive: true
};

console.log(greetUser(newUser));

// Union types
let status: 'loading' | 'success' | 'error' = 'loading';
console.log('Status:', status);

// Arrays
const numbers: number[] = [1, 2, 3, 4, 5];
const doubled: number[] = numbers.map(n => n * 2);
console.log('Doubled numbers:', doubled);`
    },
    "Interface & Classes": {
      label: "Interface & Classes 🏗️",
      language: "typescript",
      code: `// TypeScript Classes and Interfaces
interface Drawable {
    draw(): void;
    getArea(): number;
}

abstract class Shape implements Drawable {
    constructor(protected color: string) {}
    
    abstract draw(): void;
    abstract getArea(): number;
    
    getColor(): string {
        return this.color;
    }
}

class Circle extends Shape {
    constructor(color: string, private radius: number) {
        super(color);
    }
    
    draw(): void {
        console.log(\`Drawing a \${this.color} circle with radius \${this.radius}\`);
    }
    
    getArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    constructor(color: string, private width: number, private height: number) {
        super(color);
    }
    
    draw(): void {
        console.log(\`Drawing a \${this.color} rectangle \${this.width}x\${this.height}\`);
    }
    
    getArea(): number {
        return this.width * this.height;
    }
}

const circle = new Circle('red', 5);
const rectangle = new Rectangle('blue', 10, 20);

circle.draw();
console.log(\`Circle area: \${circle.getArea().toFixed(2)}\`);
rectangle.draw();
console.log(\`Rectangle area: \${rectangle.getArea()}\`);`
    },
    "Generic Functions": {
      label: "Generic Functions 🔧",
      language: "typescript",
      code: `// TypeScript Generics
function identity<T>(value: T): T {
    return value;
}

function wrapInArray<T>(value: T): T[] {
    return [value];
}

interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
}

class DataStore<T> {
    private data: T[] = [];
    
    add(item: T): void {
        this.data.push(item);
    }
    
    getAll(): T[] {
        return [...this.data];
    }
    
    find(predicate: (item: T) => boolean): T | undefined {
        return this.data.find(predicate);
    }
}

// Usage examples
console.log(identity<string>("Hello TypeScript"));
console.log(identity<number>(42));
console.log(wrapInArray<boolean>(true));

const userResponse: ApiResponse<{ id: number; name: string }> = {
    data: { id: 1, name: "John" },
    status: 200,
    message: "Success"
};

console.log("API Response:", userResponse);

const numberStore = new DataStore<number>();
numberStore.add(10);
numberStore.add(20);
numberStore.add(30);
console.log("Number Store:", numberStore.getAll());

const stringStore = new DataStore<string>();
stringStore.add("TypeScript");
stringStore.add("Generics");
console.log("String Store:", stringStore.getAll());`
    },
    "Async/Await with Types": {
      label: "Async/Await ⏳",
      language: "typescript",
      code: `// TypeScript Async/Await with Types
interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

interface ApiError {
    message: string;
    statusCode: number;
}

async function fetchTodo(id: number): Promise<Todo> {
    // Simulate API call
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id > 0 && id <= 10) {
                resolve({
                    userId: 1,
                    id: id,
                    title: \`Todo item \${id}\`,
                    completed: false
                });
            } else {
                reject({ message: "Todo not found", statusCode: 404 });
            }
        }, 1000);
    });
}

async function processTodo(id: number): Promise<void> {
    try {
        console.log(\`Fetching todo \${id}...\`);
        const todo = await fetchTodo(id);
        console.log(\`Todo: \${todo.title} (Completed: \${todo.completed})\`);
    } catch (error) {
        const apiError = error as ApiError;
        console.error(\`Error: \${apiError.message} (Status: \${apiError.statusCode})\`);
    }
}

// Process multiple todos
async function processMultipleTodos(ids: number[]): Promise<void> {
    const promises = ids.map(id => processTodo(id));
    await Promise.all(promises);
    console.log("All todos processed!");
}

// Run examples
processTodo(1);
processTodo(5);
processTodo(99); // This will fail

setTimeout(() => {
    processMultipleTodos([2, 3, 4]);
}, 2000);`
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
      label: "Fibonacci Sequence 🔢",
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
    "Prime Number Checker": {
      label: "Prime Number Checker 🔢",
      language: "python",
      code: `# Prime Number Checker
def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True

def find_primes(limit):
    primes = []
    for num in range(2, limit + 1):
        if is_prime(num):
            primes.append(num)
    return primes

# Test the functions
numbers = [2, 3, 4, 5, 16, 17, 19, 20]
print("Prime Checker Results:")
for num in numbers:
    print(f"{num}: {'Prime' if is_prime(num) else 'Not prime'}")

print(f"\nPrime numbers up to 50:")
primes = find_primes(50)
print(primes)
print(f"Total primes found: {len(primes)}")`
    },
    "Factorial Calculator": {
      label: "Factorial Calculator ➗",
      language: "python",
      code: `# Factorial Calculator
def factorial_recursive(n):
    if n <= 1:
        return 1
    return n * factorial_recursive(n - 1)

def factorial_iterative(n):
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result

# Test the functions
test_numbers = [0, 1, 5, 7, 10]
print("Factorial Calculator:")
for num in test_numbers:
    rec = factorial_recursive(num)
    it = factorial_iterative(num)
    print(f"{num}! = {rec} (Recursive) = {it} (Iterative)")`
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
    salary DECIMAL(10,2),
    hire_date DATE
);

INSERT INTO employees VALUES 
(1, 'John Doe', 'Engineering', 75000.00, '2020-01-15'),
(2, 'Jane Smith', 'Marketing', 68000.00, '2019-03-20'),
(3, 'Bob Johnson', 'Engineering', 82000.00, '2021-06-10'),
(4, 'Alice Brown', 'Sales', 71000.00, '2018-11-05');

SELECT * FROM employees;
SELECT name, salary FROM employees WHERE department = 'Engineering';
SELECT department, AVG(salary) as avg_salary, COUNT(*) as emp_count 
FROM employees 
GROUP BY department
HAVING COUNT(*) > 1
ORDER BY avg_salary DESC;`
    },
    "Joins Demo": {
      label: "Joins Demo 🔗",
      language: "sql",
      code: `-- SQL Joins Demo
CREATE TABLE departments (
    dept_id INT PRIMARY KEY,
    dept_name VARCHAR(50),
    location VARCHAR(100)
);

CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(100),
    dept_id INT,
    salary DECIMAL(10,2),
    FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
);

INSERT INTO departments VALUES 
(1, 'Engineering', 'New York'),
(2, 'Marketing', 'San Francisco'),
(3, 'Sales', 'Chicago');

INSERT INTO employees VALUES 
(101, 'John Doe', 1, 75000),
(102, 'Jane Smith', 2, 68000),
(103, 'Bob Johnson', 1, 82000),
(104, 'Alice Brown', 3, 71000),
(105, 'Charlie Wilson', NULL, 65000);

-- INNER JOIN
SELECT e.emp_name, d.dept_name 
FROM employees e 
INNER JOIN departments d ON e.dept_id = d.dept_id;

-- LEFT JOIN
SELECT e.emp_name, d.dept_name 
FROM employees e 
LEFT JOIN departments d ON e.dept_id = d.dept_id;

-- RIGHT JOIN
SELECT e.emp_name, d.dept_name 
FROM employees e 
RIGHT JOIN departments d ON e.dept_id = d.dept_id;`
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
echo "=== Running Processes ==="
ps aux | head -5`
    },
    "File Organizer": {
      label: "File Organizer 📁",
      language: "bash",
      code: `#!/bin/bash
# File Organizer Script

echo "=== File Organizer ==="

# Create directories if they don't exist
mkdir -p images documents archives scripts others

# Move files based on extension
for file in *; do
    if [ -f "$file" ]; then
        case "${file##*.}" in
            jpg|jpeg|png|gif|svg)
                mv "$file" images/ 2>/dev/null
                echo "Moved $file to images/"
                ;;
            txt|pdf|doc|docx|md)
                mv "$file" documents/ 2>/dev/null
                echo "Moved $file to documents/"
                ;;
            zip|tar|gz|rar)
                mv "$file" archives/ 2>/dev/null
                echo "Moved $file to archives/"
                ;;
            sh|py|js|html|css)
                mv "$file" scripts/ 2>/dev/null
                echo "Moved $file to scripts/"
                ;;
            *)
                mv "$file" others/ 2>/dev/null
                ;;
        esac
    fi
done

echo "✅ File organization complete!"`
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
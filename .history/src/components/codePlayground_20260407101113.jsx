/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect, useCallback } from "react";
import "./CodePlayground.css";

// ═══════════════════════════════════════════════════════════════════════════════
// TEMPLATE LIBRARY — 70+ WORKING TEMPLATES ACROSS 7 LANGUAGES
// ═══════════════════════════════════════════════════════════════════════════════

const TEMPLATES = {
  ReactComponents: {
    useStateCounter: {
      label: "⚛️ useState Counter",
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
    TodoList: {
      label: "✅ Todo List App",
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
    UseEffectFetch: {
      label: "🌐 useEffect Fetch",
      language: "react",
      jsx: `// React useEffect Data Fetching
import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div style={centerStyle}>Loading...</div>;

  return (
    <div style={centerStyle}>
      <h2 style={{ color: '#38bdf8' }}>📡 API Data</h2>
      <div style={cardStyle}>
        <h3>{data.title}</h3>
        <p>{data.body}</p>
        <small>Post ID: {data.id}</small>
      </div>
    </div>
  );
}

const centerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  background: '#060d1a',
  color: 'white',
  padding: '20px'
};

const cardStyle = {
  background: '#0a1525',
  padding: '20px',
  borderRadius: '12px',
  maxWidth: '500px',
  border: '1px solid #1e3a5f'
};

export default DataFetcher;`,
      css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { background: #060d1a; font-family: 'Segoe UI', sans-serif; }`,
      html: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>React Fetch</title></head><body><div id="root"></div></body></html>`
    },
    ContextApiDemo: {
      label: "🎨 Context API Demo",
      language: "react",
      jsx: `// React Context API Demo
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemedButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      style={{
        padding: '12px 24px',
        background: theme === 'dark' ? '#38bdf8' : '#6366f1',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer'
      }}
    >
      Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
    </button>
  );
}

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div style={{
      minHeight: '100vh',
      background: theme === 'dark' ? '#1a1a2e' : '#f0f0f0',
      color: theme === 'dark' ? 'white' : '#333',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s'
    }}>
      <h1>Theme Context Demo</h1>
      <p>Current theme: {theme}</p>
      <ThemedButton />
    </div>
  );
}

const Root = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default Root;`,
      css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Segoe UI', sans-serif; }`,
      html: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>React Context</title></head><body><div id="root"></div></body></html>`
    },
    FormValidation: {
      label: "📝 Form Validation",
      language: "react",
      jsx: `// React Form Validation
import React, { useState } from 'react';

function LoginForm() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.email.includes('@')) newErrors.email = 'Invalid email';
    if (formData.password.length < 6) newErrors.password = 'Password too short';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      alert('Login successful!');
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ color: '#38bdf8' }}>Login Form</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          style={inputStyle}
        />
        {errors.email && <span style={errorStyle}>{errors.email}</span>}
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
          style={inputStyle}
        />
        {errors.password && <span style={errorStyle}>{errors.password}</span>}
        <button type="submit" style={buttonStyle}>Login</button>
      </form>
    </div>
  );
}

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  background: '#060d1a'
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  width: '300px'
};

const inputStyle = {
  padding: '12px',
  background: '#0a1525',
  border: '1px solid #1e3a5f',
  borderRadius: '8px',
  color: 'white'
};

const errorStyle = {
  color: '#ef4444',
  fontSize: '12px'
};

const buttonStyle = {
  padding: '12px',
  background: '#38bdf8',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontWeight: 'bold'
};

export default LoginForm;`,
      css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Segoe UI', sans-serif; }`,
      html: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>React Form</title></head><body><div id="root"></div></body></html>`
    },
    TicTacToe: {
      label: "🎮 Tic Tac Toe",
      language: "react",
      jsx: `// React Tic Tac Toe Game
import React, { useState } from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button style={squareStyle} onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);
  const status = winner ? \`Winner: \${winner}\` : \`Next player: \${xIsNext ? 'X' : 'O'}\`;

  const handleClick = (i) => {
    if (squares[i] || winner) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div style={boardContainer}>
      <h2 style={{ color: '#38bdf8' }}>Tic Tac Toe</h2>
      <div style={statusStyle}>{status}</div>
      <div style={boardStyle}>
        {squares.map((square, i) => (
          <Square key={i} value={square} onSquareClick={() => handleClick(i)} />
        ))}
      </div>
      <button onClick={resetGame} style={resetStyle}>Reset Game</button>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  for (let line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const boardContainer = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  background: '#060d1a'
};

const boardStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 80px)',
  gap: '5px',
  margin: '20px 0'
};

const squareStyle = {
  width: '80px',
  height: '80px',
  fontSize: '24px',
  fontWeight: 'bold',
  background: '#0a1525',
  border: '1px solid #38bdf8',
  color: '#38bdf8',
  cursor: 'pointer'
};

const statusStyle = {
  fontSize: '18px',
  marginBottom: '10px',
  color: 'white'
};

const resetStyle = {
  padding: '10px 20px',
  background: '#38bdf8',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontWeight: 'bold'
};

export default Board;`,
      css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Segoe UI', sans-serif; }`,
      html: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Tic Tac Toe</title></head><body><div id="root"></div></body></html>`
    }
  },
  HTML_CSS_JS: {
    GlassmorphismCard: {
      label: "🔮 Glassmorphism Card",
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
      js: `document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.glass-card');
    const btn = document.querySelector('.card-btn');
    
    if (card) {
        card.addEventListener('click', function(e) {
            if (e.target === btn) return;
            this.style.transform = 'scale(0.98)';
            setTimeout(() => { this.style.transform = ''; }, 200);
        });
    }
    
    if (btn) {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            alert('✨ Welcome to Glassmorphism!');
        });
    }
    console.log('Glassmorphism Card loaded!');
});`
    },
    NeonButtons: {
      label: "🔘 Neon Buttons",
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

.instruction { color: #666; font-size: 14px; margin-top: 20px; }

@media (max-width: 768px) {
    h1 { font-size: 32px; }
    .neon-btn { padding: 12px 24px; font-size: 14px; }
}`,
      js: `document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.neon-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const color = this.classList[1].replace('neon-', '');
            alert(\`✨ \${color.toUpperCase()} button clicked!\`);
            this.style.transform = 'scale(0.95)';
            setTimeout(() => { this.style.transform = ''; }, 150);
        });
    });
    console.log('Neon Buttons loaded!');
});`
    },
    AnimatedGradient: {
      label: "🌈 Animated Gradient BG",
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

h1 { font-size: 56px; color: white; margin-bottom: 20px; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); }
p { font-size: 20px; color: rgba(255,255,255,0.9); margin-bottom: 30px; }
.gradient-btn { padding: 12px 30px; font-size: 16px; font-weight: bold; background: white; color: #333; border: none; border-radius: 50px; cursor: pointer; transition: all 0.3s ease; }
.gradient-btn:hover { transform: scale(1.05); box-shadow: 0 5px 20px rgba(0,0,0,0.3); }

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
    const gradientString = \`linear-gradient(270deg, \${colors.join(', ')}, \${colors[0]})\`;
    document.body.style.background = gradientString;
    document.body.style.backgroundSize = '400% 400%';
    const btn = document.querySelector('.gradient-btn');
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => { btn.style.transform = ''; }, 150);
    console.log(\`Gradient changed to color set \${colorIndex + 1}\`);
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Animated Gradient Background loaded!');
    document.body.addEventListener('mousemove', function(e) {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        document.body.style.backgroundPosition = \`\${x}% \${y}%\`;
    });
});`
    },
    FlipCard3D: {
      label: "🃏 3D Flip Card",
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
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

h2 { font-size: 28px; margin-bottom: 15px; }
p { font-size: 16px; margin-bottom: 20px; line-height: 1.5; }
.flip-hint { display: inline-block; background: rgba(255,255,255,0.2); padding: 5px 15px; border-radius: 20px; font-size: 12px; animation: pulse 1.5s ease infinite; }
@keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.5; } }
.flip-btn { background: white; color: #4facfe; border: none; padding: 10px 25px; border-radius: 25px; font-size: 14px; font-weight: bold; cursor: pointer; transition: all 0.3s ease; }
.flip-btn:hover { transform: scale(1.05); box-shadow: 0 5px 15px rgba(0,0,0,0.3); }

@media (max-width: 480px) {
    .flip-card { width: 280px; height: 380px; }
    h2 { font-size: 22px; }
    .card-icon { font-size: 48px; }
}`,
      js: `document.addEventListener('DOMContentLoaded', function() {
    const flipCard = document.querySelector('.flip-card');
    const flipBtn = document.querySelector('.flip-btn');
    console.log('3D Flip Card loaded! Hover over the card to see the flip effect.');
    if (window.innerWidth <= 768) {
        let isFlipped = false;
        flipCard.addEventListener('click', function() {
            const inner = this.querySelector('.flip-card-inner');
            if (!isFlipped) { inner.style.transform = 'rotateY(180deg)'; isFlipped = true; }
            else { inner.style.transform = ''; isFlipped = false; }
        });
    }
    if (flipBtn) {
        flipBtn.addEventListener('click', function(e) { e.stopPropagation(); console.log('Learn More button clicked'); });
    }
});`
    },
    ResponsiveNavbar: {
      label: "🧭 Responsive Navbar",
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

.nav-brand { display: flex; align-items: center; gap: 10px; }
.logo-icon { font-size: 28px; }
.logo-text { color: white; font-size: 24px; font-weight: bold; letter-spacing: 1px; }
.nav-menu { display: flex; list-style: none; gap: 30px; }
.nav-link { color: white; text-decoration: none; font-size: 16px; transition: all 0.3s ease; padding: 5px 10px; border-radius: 5px; }
.nav-link:hover { color: #38bdf8; background: rgba(56, 189, 248, 0.1); }
.nav-link.active { color: #38bdf8; border-bottom: 2px solid #38bdf8; }
.hamburger { display: none; flex-direction: column; cursor: pointer; }
.bar { width: 25px; height: 3px; background: white; margin: 3px 0; transition: 0.3s; }
.hero { height: calc(100vh - 70px); display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; }
.hero h1 { font-size: 48px; margin-bottom: 20px; animation: fadeInUp 0.8s ease; }
.hero p { font-size: 18px; margin-bottom: 30px; animation: fadeInUp 0.8s ease 0.2s both; }
.hero-btn { padding: 12px 30px; font-size: 16px; font-weight: bold; background: white; color: #667eea; border: none; border-radius: 50px; cursor: pointer; transition: all 0.3s ease; animation: fadeInUp 0.8s ease 0.4s both; }
.hero-btn:hover { transform: scale(1.05); box-shadow: 0 5px 20px rgba(0,0,0,0.2); }
@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}
@media (max-width: 768px) {
    .navbar { padding: 0 20px; }
    .hamburger { display: flex; }
    .nav-menu { position: fixed; left: -100%; top: 70px; flex-direction: column; background: linear-gradient(135deg, #1a1a2e, #16213e); width: 100%; text-align: center; transition: 0.3s; padding: 20px 0; gap: 15px; }
    .nav-menu.active { left: 0; }
    .hamburger.active .bar:nth-child(1) { transform: rotate(-45deg) translate(-5px, 6px); }
    .hamburger.active .bar:nth-child(2) { opacity: 0; }
    .hamburger.active .bar:nth-child(3) { transform: rotate(45deg) translate(-5px, -6px); }
    .hero h1 { font-size: 32px; padding: 0 20px; }
    .hero p { font-size: 14px; padding: 0 20px; }
}`,
      js: `document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
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
            console.log(\`Navigated to: \${this.textContent}\`);
        });
    });
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
    console.log('Responsive Navbar loaded!');
});`
    },
    ParticleBackground: {
      label: "✨ Particle Background",
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
      css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { overflow: hidden; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
#particleCanvas { position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: block; background: linear-gradient(135deg, #0a0a1a, #1a1a2e); }
.overlay { position: relative; z-index: 10; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; text-align: center; color: white; pointer-events: auto; }
h1 { font-size: 56px; margin-bottom: 20px; text-shadow: 0 0 20px rgba(0,0,0,0.5); animation: fadeIn 1s ease; }
p { font-size: 20px; margin-bottom: 30px; text-shadow: 0 0 10px rgba(0,0,0,0.5); animation: fadeIn 1s ease 0.2s both; }
.particle-btn { padding: 12px 30px; font-size: 16px; font-weight: bold; background: linear-gradient(135deg, #38bdf8, #6366f1); color: white; border: none; border-radius: 50px; cursor: pointer; transition: all 0.3s ease; animation: fadeIn 1s ease 0.4s both; }
.particle-btn:hover { transform: scale(1.05); box-shadow: 0 5px 20px rgba(56,189,248,0.4); }
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}
@media (max-width: 768px) { h1 { font-size: 36px; } p { font-size: 16px; } }`,
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
    particles = particles.filter(p => { const alive = p.update(); if (alive) p.draw(); return alive; });
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
        particle.color = \`hsl(\${Math.random() * 360}, 80%, 65%)\`;
        particles.push(particle);
    }
    console.log('Particle burst added!');
}
console.log('Particle Background loaded!');`
    },
    AnimatedCounter: {
      label: "🔢 Animated Counter",
      language: "htmlcssjs",
      html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animated Counter</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="counter-container">
        <h1>Animated Counter</h1>
        <div class="counter-display" id="counterDisplay">0</div>
        <div class="counter-buttons">
            <button class="counter-btn" id="decrement">-</button>
            <button class="counter-btn" id="reset">Reset</button>
            <button class="counter-btn" id="increment">+</button>
        </div>
        <p class="counter-note">Click buttons to see smooth animations</p>
    </div>
</body>
</html>`,
      css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { min-height: 100vh; background: linear-gradient(135deg, #1a1a2e, #16213e); display: flex; align-items: center; justify-content: center; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
.counter-container { text-align: center; background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); padding: 40px; border-radius: 20px; min-width: 300px; }
h1 { color: #38bdf8; margin-bottom: 30px; }
.counter-display { font-size: 72px; color: white; margin: 20px 0; font-weight: bold; transition: all 0.3s ease; }
.counter-buttons { display: flex; gap: 15px; justify-content: center; margin: 20px 0; }
.counter-btn { padding: 12px 24px; font-size: 18px; font-weight: bold; background: linear-gradient(135deg, #38bdf8, #6366f1); color: white; border: none; border-radius: 10px; cursor: pointer; transition: all 0.3s ease; }
.counter-btn:hover { transform: scale(1.05); box-shadow: 0 5px 15px rgba(56,189,248,0.4); }
.counter-btn:active { transform: scale(0.95); }
.counter-note { color: #8a96a8; font-size: 12px; margin-top: 20px; }
@media (max-width: 480px) { .counter-container { padding: 20px; min-width: 250px; } .counter-display { font-size: 48px; } .counter-btn { padding: 8px 16px; font-size: 14px; } }`,
      js: `let count = 0;
const display = document.getElementById('counterDisplay');
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const reset = document.getElementById('reset');

function updateDisplay() {
    display.textContent = count;
    display.style.transform = 'scale(1.1)';
    setTimeout(() => { display.style.transform = 'scale(1)'; }, 200);
}

increment.addEventListener('click', () => { count++; updateDisplay(); console.log(\`Count: \${count}\`); });
decrement.addEventListener('click', () => { count--; updateDisplay(); console.log(\`Count: \${count}\`); });
reset.addEventListener('click', () => { count = 0; updateDisplay(); console.log('Counter reset'); });
console.log('Animated Counter loaded!');`
    },
    TypingEffect: {
      label: "⌨️ Typing Effect",
      language: "htmlcssjs",
      html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Typing Effect</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="typing-container">
        <h1>Typing Animation</h1>
        <div class="typing-wrapper">
            <span class="static-text">I am a </span>
            <span class="dynamic-text" id="dynamicText"></span>
            <span class="cursor">|</span>
        </div>
        <button class="restart-btn" onclick="restartTyping()">Restart</button>
    </div>
</body>
</html>`,
      css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { min-height: 100vh; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
.typing-container { text-align: center; background: rgba(0,0,0,0.6); backdrop-filter: blur(10px); padding: 50px; border-radius: 20px; }
h1 { color: white; margin-bottom: 30px; }
.typing-wrapper { font-size: 32px; color: white; display: flex; justify-content: center; flex-wrap: wrap; gap: 10px; }
.static-text { color: #38bdf8; }
.dynamic-text { color: #00ff88; min-width: 200px; text-align: left; }
.cursor { animation: blink 0.7s infinite; color: #00ff88; }
@keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }
.restart-btn { margin-top: 30px; padding: 10px 25px; background: #38bdf8; border: none; border-radius: 25px; color: white; cursor: pointer; font-size: 14px; transition: all 0.3s ease; }
.restart-btn:hover { transform: scale(1.05); background: #00ff88; color: #1a1a2e; }
@media (max-width: 768px) { .typing-wrapper { font-size: 20px; } .typing-container { padding: 30px; } }`,
      js: `const words = ["Developer", "Designer", "Creator", "Innovator", "Coder"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const dynamicText = document.getElementById('dynamicText');

function typeEffect() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
        dynamicText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        dynamicText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }
    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1500);
        return;
    }
    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 500);
        return;
    }
    setTimeout(typeEffect, isDeleting ? 50 : 100);
}
function restartTyping() {
    wordIndex = 0;
    charIndex = 0;
    isDeleting = false;
    dynamicText.textContent = '';
    typeEffect();
}
typeEffect();
console.log('Typing Effect loaded!');`
    },
    ProgressBar: {
      label: "📊 Progress Bar",
      language: "htmlcssjs",
      html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Progress Bar</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="progress-container">
        <h1>Animated Progress Bar</h1>
        <div class="progress-wrapper">
            <div class="progress-bar" id="progressBar"></div>
        </div>
        <div class="progress-controls">
            <button class="progress-btn" id="startBtn">Start</button>
            <button class="progress-btn" id="resetBtn">Reset</button>
        </div>
        <p class="progress-percent" id="percentDisplay">0%</p>
    </div>
</body>
</html>`,
      css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { min-height: 100vh; background: linear-gradient(135deg, #1a1a2e, #16213e); display: flex; align-items: center; justify-content: center; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
.progress-container { text-align: center; background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); padding: 40px; border-radius: 20px; width: 400px; }
h1 { color: #38bdf8; margin-bottom: 30px; }
.progress-wrapper { background: #0a1525; border-radius: 10px; overflow: hidden; height: 30px; margin: 20px 0; }
.progress-bar { width: 0%; height: 100%; background: linear-gradient(90deg, #38bdf8, #00ff88); transition: width 0.1s linear; }
.progress-controls { display: flex; gap: 15px; justify-content: center; margin: 20px 0; }
.progress-btn { padding: 10px 25px; background: linear-gradient(135deg, #38bdf8, #6366f1); border: none; border-radius: 25px; color: white; cursor: pointer; transition: all 0.3s ease; }
.progress-btn:hover { transform: scale(1.05); }
.progress-percent { font-size: 24px; color: #00ff88; font-weight: bold; }
@media (max-width: 480px) { .progress-container { width: 300px; padding: 20px; } }`,
      js: `let progress = 0;
let interval = null;
const progressBar = document.getElementById('progressBar');
const percentDisplay = document.getElementById('percentDisplay');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');

function updateProgress() {
    progressBar.style.width = progress + '%';
    percentDisplay.textContent = progress + '%';
    if (progress >= 100) {
        clearInterval(interval);
        interval = null;
        percentDisplay.style.color = '#38bdf8';
    }
}

startBtn.addEventListener('click', () => {
    if (interval) return;
    percentDisplay.style.color = '#00ff88';
    interval = setInterval(() => {
        if (progress < 100) {
            progress++;
            updateProgress();
        } else {
            clearInterval(interval);
            interval = null;
        }
    }, 30);
});

resetBtn.addEventListener('click', () => {
    if (interval) {
        clearInterval(interval);
        interval = null;
    }
    progress = 0;
    updateProgress();
    percentDisplay.style.color = '#00ff88';
    console.log('Progress reset');
});

console.log('Progress Bar loaded!');`
    }
  },
  JavaScript: {
    DigitalClock: {
      label: "🕐 Digital Clock",
      language: "javascript",
      code: `// Digital Clock with JavaScript
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = \`\${hours}:\${minutes}:\${seconds}\`;
    const dateString = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    
    if (typeof document !== 'undefined') {
        let clockDiv = document.getElementById('clock');
        if (!clockDiv) {
            clockDiv = document.createElement('div');
            clockDiv.id = 'clock';
            clockDiv.style.cssText = 'text-align: center; padding: 40px; background: linear-gradient(135deg, #667eea, #764ba2); color: white; border-radius: 20px; font-family: monospace;';
            document.body.innerHTML = '';
            document.body.style.display = 'flex';
            document.body.style.alignItems = 'center';
            document.body.style.justifyContent = 'center';
            document.body.style.minHeight = '100vh';
            document.body.style.background = '#1a1a2e';
            document.body.appendChild(clockDiv);
        }
        clockDiv.innerHTML = \`<div style="font-size: 24px; margin-bottom: 10px;">\${dateString}</div><div style="font-size: 72px; font-weight: bold;">\${timeString}</div>\`;
    }
    console.log(timeString);
}
setInterval(updateClock, 1000);
updateClock();`
    },
    WeatherMock: {
      label: "🌤️ Weather Mock",
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
        <div style="text-align: center; padding: 30px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 20px; color: white; max-width: 400px;">
            <h2>🌤️ Weather in \${mockWeather.city}</h2>
            <div style="font-size: 48px; margin: 20px 0;">\${mockWeather.temperature}°C</div>
            <div style="font-size: 24px; margin: 10px 0;">\${mockWeather.condition}</div>
            <div>💧 Humidity: \${mockWeather.humidity}%</div>
            <div>💨 Wind: \${mockWeather.windSpeed} km/h</div>
            <button onclick="getWeather(prompt('Enter city name:', 'London'))" style="margin-top: 20px; padding: 10px 20px; border: none; border-radius: 10px; cursor: pointer; font-weight: bold;">Search City</button>
        </div>
    \`;
    
    if (typeof document !== 'undefined') {
        document.body.innerHTML = weatherHTML;
        document.body.style.display = 'flex';
        document.body.style.alignItems = 'center';
        document.body.style.justifyContent = 'center';
        document.body.style.minHeight = '100vh';
        document.body.style.background = '#1a1a2e';
    }
    
    console.log(\`Weather in \${mockWeather.city}: \${mockWeather.temperature}°C, \${mockWeather.condition}\`);
    return mockWeather;
}
getWeather("New York");`
    },
    ToDoList: {
      label: "✅ JS To-Do List",
      language: "javascript",
      code: `// Vanilla JavaScript To-Do List
let todos = [];

function renderTodos() {
    const todoList = document.getElementById('todoList');
    if (!todoList) return;
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.style.cssText = 'display: flex; align-items: center; justify-content: space-between; padding: 10px; background: #0a1525; margin: 5px 0; border-radius: 8px;';
        li.innerHTML = \`
            <span style="text-decoration: \${todo.completed ? 'line-through' : 'none'}; flex: 1;">\${todo.text}</span>
            <div>
                <button onclick="toggleTodo(\${index})" style="background: #38bdf8; border: none; padding: 5px 10px; margin: 0 5px; border-radius: 5px; cursor: pointer;">✓</button>
                <button onclick="deleteTodo(\${index})" style="background: #ef4444; border: none; padding: 5px 10px; margin: 0 5px; border-radius: 5px; cursor: pointer;">×</button>
            </div>
        \`;
        todoList.appendChild(li);
    });
}

function addTodo() {
    const input = document.getElementById('todoInput');
    if (input && input.value.trim()) {
        todos.push({ text: input.value.trim(), completed: false });
        input.value = '';
        renderTodos();
    }
}

function toggleTodo(index) {
    todos[index].completed = !todos[index].completed;
    renderTodos();
}

function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

if (typeof document !== 'undefined') {
    document.body.innerHTML = \`
        <div style="max-width: 500px; margin: 50px auto; padding: 20px; background: #0a1525; border-radius: 20px;">
            <h2 style="color: #38bdf8;">📝 JS To-Do List</h2>
            <div style="display: flex; gap: 10px; margin: 20px 0;">
                <input id="todoInput" type="text" placeholder="Add a task..." style="flex: 1; padding: 10px; background: #060d1a; border: 1px solid #1e3a5f; border-radius: 8px; color: white;">
                <button onclick="addTodo()" style="padding: 10px 20px; background: #38bdf8; border: none; border-radius: 8px; cursor: pointer;">Add</button>
            </div>
            <ul id="todoList" style="list-style: none; padding: 0;"></ul>
        </div>
    \`;
    document.body.style.background = '#060d1a';
    document.body.style.fontFamily = 'Segoe UI, sans-serif';
    renderTodos();
}
console.log('JS To-Do List loaded!');`
    },
    QuoteGenerator: {
      label: "💬 Quote Generator",
      language: "javascript",
      code: `// Random Quote Generator
const quotes = [
    { text: "The only limit is your mind.", author: "Unknown" },
    { text: "Code is poetry in motion.", author: "Developer" },
    { text: "Stay curious, keep learning.", author: "Einstein" },
    { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
    { text: "Dream big, start small.", author: "Anonymous" }
];

function generateQuote() {
    const random = Math.floor(Math.random() * quotes.length);
    const quote = quotes[random];
    const quoteDiv = document.getElementById('quoteDisplay');
    if (quoteDiv) {
        quoteDiv.innerHTML = \`<div style="font-size: 24px; font-style: italic;">"\${quote.text}"</div><div style="margin-top: 15px; color: #38bdf8;">— \${quote.author}</div>\`;
    }
    console.log(\`New quote: \${quote.text}\`);
}

if (typeof document !== 'undefined') {
    document.body.innerHTML = \`
        <div style="text-align: center; padding: 40px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 20px; max-width: 500px;">
            <h2 style="color: white;">💬 Random Quote</h2>
            <div id="quoteDisplay" style="margin: 30px 0; color: white; min-height: 100px;"></div>
            <button onclick="generateQuote()" style="padding: 10px 25px; background: white; border: none; border-radius: 25px; cursor: pointer; font-weight: bold;">New Quote</button>
        </div>
    \`;
    document.body.style.display = 'flex';
    document.body.style.alignItems = 'center';
    document.body.style.justifyContent = 'center';
    document.body.style.minHeight = '100vh';
    document.body.style.background = '#1a1a2e';
    generateQuote();
}`
    },
    Calculator: {
      label: "🧮 Calculator",
      language: "javascript",
      code: `// Simple JavaScript Calculator
let currentInput = '';
let operator = null;
let previousInput = '';

function updateDisplay() {
    const display = document.getElementById('calcDisplay');
    if (display) display.value = currentInput || '0';
}

function appendNumber(num) {
    currentInput += num;
    updateDisplay();
}

function setOperator(op) {
    if (currentInput === '') return;
    if (previousInput !== '') calculate();
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(curr)) return;
    switch (operator) {
        case '+': result = prev + curr; break;
        case '-': result = prev - curr; break;
        case '*': result = prev * curr; break;
        case '/': result = curr !== 0 ? prev / curr : 'Error'; break;
        default: return;
    }
    currentInput = result.toString();
    operator = null;
    previousInput = '';
    updateDisplay();
}

function clearCalc() {
    currentInput = '';
    operator = null;
    previousInput = '';
    updateDisplay();
}

if (typeof document !== 'undefined') {
    document.body.innerHTML = \`
        <div style="background: #0a1525; padding: 20px; border-radius: 20px; width: 300px;">
            <input id="calcDisplay" type="text" readonly style="width: 100%; padding: 15px; font-size: 24px; text-align: right; background: #060d1a; border: 1px solid #1e3a5f; border-radius: 10px; color: white; margin-bottom: 15px;">
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px;">
                <button onclick="clearCalc()" style="padding: 15px; background: #ef4444; border: none; border-radius: 8px; cursor: pointer;">C</button>
                <button onclick="appendNumber('7')">7</button><button onclick="appendNumber('8')">8</button><button onclick="appendNumber('9')">9</button><button onclick="setOperator('/')">/</button>
                <button onclick="appendNumber('4')">4</button><button onclick="appendNumber('5')">5</button><button onclick="appendNumber('6')">6</button><button onclick="setOperator('*')">*</button>
                <button onclick="appendNumber('1')">1</button><button onclick="appendNumber('2')">2</button><button onclick="appendNumber('3')">3</button><button onclick="setOperator('-')">-</button>
                <button onclick="appendNumber('0')">0</button><button onclick="appendNumber('.')">.</button><button onclick="calculate()">=</button><button onclick="setOperator('+')">+</button>
            </div>
        </div>
    \`;
    const style = document.createElement('style');
    style.textContent = \`button { padding: 15px; background: #38bdf8; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; font-weight: bold; transition: all 0.2s; } button:active { transform: scale(0.95); }\`;
    document.head.appendChild(style);
    document.body.style.display = 'flex';
    document.body.style.alignItems = 'center';
    document.body.style.justifyContent = 'center';
    document.body.style.minHeight = '100vh';
    document.body.style.background = '#1a1a2e';
    document.body.style.fontFamily = 'Segoe UI, sans-serif';
    updateDisplay();
}`
    }
  },
  TypeScript: {
    BasicTypes: {
      label: "📘 Basic Types",
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

console.log(greetUser(newUser));

// Tuple example
let person: [string, number] = ["John", 30];
console.log(\`\${person[0]} is \${person[1]} years old\`);

// Enum example
enum Color { Red, Green, Blue }
let favoriteColor: Color = Color.Green;
console.log(\`Favorite color: \${Color[favoriteColor]}\`);`
    },
    Generics: {
      label: "🔧 Generics",
      language: "typescript",
      code: `// TypeScript Generics Demo
function identity<T>(arg: T): T {
    return arg;
}

function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}

interface GenericIdentityFn<T> {
    (arg: T): T;
}

const myIdentity: GenericIdentityFn<number> = identity;

console.log(identity<string>("Hello TypeScript!"));
console.log(identity<number>(42));
console.log(getArray<number>([1, 2, 3, 4]));

// Generic class
class Stack<T> {
    private items: T[] = [];
    
    push(item: T): void {
        this.items.push(item);
    }
    
    pop(): T | undefined {
        return this.items.pop();
    }
    
    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }
}

const numberStack = new Stack<number>();
numberStack.push(10);
numberStack.push(20);
console.log(\`Stack pop: \${numberStack.pop()}\`);`
    }
  },
  Python: {
    HelloWorld: {
      label: "🐍 Hello World",
      language: "python",
      code: `# Simple Python Hello World
print("Hello from Python!")
name = input("What's your name? ")
print(f"Nice to meet you, {name}!")

# List comprehension example
squares = [x**2 for x in range(10)]
print(f"Squares: {squares}")

# Dictionary example
person = {"name": "Alice", "age": 30, "city": "New York"}
print(f"Person: {person}")`
    },
    Fibonacci: {
      label: "🔢 Fibonacci",
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
    PalindromeChecker: {
      label: "🔄 Palindrome Checker",
      language: "python",
      code: `# Palindrome Checker
def is_palindrome(s):
    s = s.lower().replace(" ", "")
    return s == s[::-1]

def find_palindromes(words):
    return [word for word in words if is_palindrome(word)]

test_strings = ["racecar", "hello", "level", "world", "madam", "python"]
print("Palindrome Checker")
for word in test_strings:
    print(f"'{word}' is palindrome: {is_palindrome(word)}")

palindromes = find_palindromes(test_strings)
print(f"\\nPalindromes found: {palindromes}")`
    }
  },
  SQL: {
    BasicQueries: {
      label: "🗄️ Basic SQL",
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
(2, 'Jane Smith', 'Marketing', 68000.00, '2021-03-20'),
(3, 'Bob Johnson', 'Engineering', 82000.00, '2019-06-10'),
(4, 'Alice Brown', 'Sales', 65000.00, '2022-01-05'),
(5, 'Charlie Wilson', 'Engineering', 90000.00, '2018-11-30');

SELECT * FROM employees;
SELECT name, salary FROM employees WHERE department = 'Engineering';
SELECT department, AVG(salary) as avg_salary, COUNT(*) as employee_count 
FROM employees GROUP BY department;
SELECT * FROM employees ORDER BY salary DESC;
SELECT * FROM employees WHERE hire_date > '2020-01-01';`
    },
    JoinsDemo: {
      label: "🔗 SQL Joins",
      language: "sql",
      code: `-- SQL Joins Demo
CREATE TABLE departments (
    dept_id INT PRIMARY KEY,
    dept_name VARCHAR(50)
);

CREATE TABLE employees_join (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(100),
    dept_id INT,
    salary DECIMAL(10,2)
);

INSERT INTO departments VALUES 
(1, 'Engineering'), (2, 'Marketing'), (3, 'Sales'), (4, 'HR');

INSERT INTO employees_join VALUES 
(1, 'John', 1, 75000), (2, 'Jane', 2, 68000), (3, 'Bob', 1, 82000),
(4, 'Alice', 3, 65000), (5, 'Charlie', NULL, 70000);

-- INNER JOIN
SELECT e.emp_name, d.dept_name, e.salary
FROM employees_join e
INNER JOIN departments d ON e.dept_id = d.dept_id;

-- LEFT JOIN
SELECT e.emp_name, d.dept_name
FROM employees_join e
LEFT JOIN departments d ON e.dept_id = d.dept_id;`
    }
  },
  Bash: {
    SystemInfo: {
      label: "🖥️ System Info",
      language: "bash",
      code: `#!/bin/bash
# System Information Script

echo "========================================"
echo "         SYSTEM INFORMATION            "
echo "========================================"
echo "Hostname: $(hostname)"
echo "Current User: $(whoami)"
echo "Current Directory: $(pwd)"
echo "Date & Time: $(date)"
echo ""
echo "=== Disk Usage ==="
df -h | head -5
echo ""
echo "=== Memory Info ==="
free -h | head -3
echo ""
echo "=== Uptime ==="
uptime
echo ""
echo "=== Recent Logins ==="
last -n 5`
    },
    FileManager: {
      label: "📁 File Manager",
      language: "bash",
      code: `#!/bin/bash
# Simple File Management Script

echo "=== File Manager ==="
echo "Current directory: $(pwd)"
echo ""
echo "1. List files"
echo "2. Create directory"
echo "3. Create file"
echo "4. Delete file"
echo "5. Change directory"
echo "6. Exit"
echo ""

list_files() {
    echo "Files in current directory:"
    ls -la
}

create_directory() {
    read -p "Enter directory name: " dirname
    mkdir -p "$dirname"
    echo "Directory '$dirname' created."
}

create_file() {
    read -p "Enter filename: " filename
    echo "Hello from Bash!" > "$filename"
    echo "File '$filename' created."
}

delete_file() {
    read -p "Enter filename to delete: " filename
    if [ -f "$filename" ]; then
        rm "$filename"
        echo "File '$filename' deleted."
    else
        echo "File not found."
    fi
}

change_directory() {
    read -p "Enter directory path: " path
    cd "$path" 2>/dev/null && echo "Changed to $(pwd)" || echo "Invalid path"
}

while true; do
    read -p "Choose option [1-6]: " choice
    case $choice in
        1) list_files ;;
        2) create_directory ;;
        3) create_file ;;
        4) delete_file ;;
        5) change_directory ;;
        6) echo "Goodbye!"; break ;;
        *) echo "Invalid option" ;;
    esac
    echo ""
done`
    }
  }
};

// ═══════════════════════════════════════════════════════════════════════════════
// DEFAULT CODES FOR EACH LANGUAGE
// ═══════════════════════════════════════════════════════════════════════════════

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
console.log(greet("Developer"));

// Async demo
setTimeout(() => {
    console.log("Async message after 1 second");
}, 1000);`,
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

// Array with types
const numbers: number[] = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log("Doubled:", doubled);`,
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
done

# Simple function
greet() {
    echo "Hello, $1!"
}
greet "Developer"`
};

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

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
      let fullHtml = htmlCssJsCode.html || DEFAULT_HTML_CSS_JS.html;
      if (htmlCssJsCode.css) {
        fullHtml = fullHtml.replace('</head>', `<style>${htmlCssJsCode.css}</style></head>`);
      }
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
    pre { background: #0a0a1a; padding: 20px; border-radius: 10px; overflow: auto; white-space: pre-wrap; word-wrap: break-word; }
    .output-area { margin-top: 20px; padding: 20px; background: #0a1525; border-radius: 10px; }
  </style>
</head>
<body>
  <h2>${currentLanguage.toUpperCase()} Code Output</h2>
  <pre>${plainCode.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
  <div class="output-area">
    <p style="color: #888;">💡 Note: This is a code preview. For full execution, run in your local environment.</p>
    <p style="color: #38bdf8; font-size: 12px;">✓ Code copied and ready to use!</p>
  </div>
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
                <span className="pg-template-count">70+ templates</span>
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
                  <li>70+ ready-to-use templates</li>
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
          <span className="pg-footer-right">70+ Templates • 7 Languages</span>
        </div>
      </section>
    </div>
  );
}
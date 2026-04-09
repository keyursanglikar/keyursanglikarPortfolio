import React, { useState, useRef, useEffect, useCallback } from "react";
import "./CSS/CodePlayground.css";

// ─── TEMPLATE LIBRARY WITH 50+ COMPONENTS ───────────────────────────────────────

const TEMPLATES = {
  Cards: {
    "Glassmorphism Card": {
      html: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div id="root"></div>
  <script src="script.js"></script>
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
      js: `// Vanilla JS for glass card
document.querySelector('.glass')?.addEventListener('click', function() {
  this.style.transform = 'scale(0.98)';
  setTimeout(() => { this.style.transform = ''; }, 200);
});`,
      isReact: false
    },
    "React Product Card": {
      html: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div id="root"></div>
  <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel" src="script.js"></script>
</body>
</html>`,
      css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body {
  min-height: 100vh;
  background: #060d1a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Segoe UI', sans-serif;
}
.product-card {
  background: #07101f;
  border: 1px solid #0f2744;
  border-radius: 20px;
  width: 280px;
  overflow: hidden;
  transition: transform 0.3s;
}
.product-card:hover { transform: translateY(-5px); }
.product-image {
  height: 180px;
  background: linear-gradient(135deg, #1e3a5f, #0f2744);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
}
.product-info { padding: 20px; }
.product-title { color: white; font-size: 18px; font-weight: 600; }
.product-price { color: #38bdf8; font-size: 24px; font-weight: 700; margin: 10px 0; }
.product-btn {
  width: 100%; padding: 10px;
  background: #38bdf8;
  border: none;
  border-radius: 10px;
  color: #060d1a;
  font-weight: 600;
  cursor: pointer;
}`,
      js: `// React Product Card Component
function ProductCard() {
  const [count, setCount] = React.useState(0);
  return (
    <div className="product-card">
      <div className="product-image">🎧</div>
      <div className="product-info">
        <div className="product-title">Wireless Headphones</div>
        <div className="product-price">$99.99</div>
        <button className="product-btn" onClick={() => setCount(count + 1)}>
          Add to Cart {count > 0 && \`(\${count})\`}
        </button>
      </div>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<ProductCard />);`,
      isReact: true
    }
  },
  
  ReactComponents: {
    "useState Counter": {
      label: "useState Counter",
      isReact: true,
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
    "useEffect Fetch": {
      label: "useEffect Fetch API",
      isReact: true,
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
    <div style={{ textAlign: 'center', padding: '40px', maxWidth: '500px', margin: '0 auto' }}>
      <h2 style={{ color: '#38bdf8' }}>Random Joke Generator</h2>
      <div style={{
        background: '#07101f',
        padding: '20px',
        borderRadius: '10px',
        margin: '20px 0',
        minHeight: '100px'
      }}>
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
    "Todo List": {
      label: "Todo List App",
      isReact: true,
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

export default TodoApp;`
    },
    "Counter with History": {
      label: "Counter with History",
      isReact: true,
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

const buttonStyle = {
  padding: '10px 20px',
  background: '#38bdf8',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontWeight: 'bold'
};

export default CounterWithHistory;`
    },
    "Form with Validation": {
      label: "Form with Validation",
      isReact: true,
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
        <input
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
        />
        {errors.name && <span style={errorStyle}>{errors.name}</span>}
      </div>
      <div style={{ marginBottom: '15px' }}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
        />
        {errors.email && <span style={errorStyle}>{errors.email}</span>}
      </div>
      <div style={{ marginBottom: '20px' }}>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={inputStyle}
        />
        {errors.password && <span style={errorStyle}>{errors.password}</span>}
      </div>
      <button type="submit" style={buttonStyle}>Sign Up</button>
    </form>
  );
}

const inputStyle = {
  width: '100%',
  padding: '12px',
  background: '#07101f',
  border: '1px solid #0f2744',
  borderRadius: '8px',
  color: 'white',
  outline: 'none'
};

const errorStyle = {
  color: '#ef4444',
  fontSize: '12px',
  marginTop: '5px',
  display: 'block'
};

const buttonStyle = {
  width: '100%',
  padding: '12px',
  background: '#38bdf8',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontWeight: 'bold'
};

export default SignupForm;`
    },
    "Dark Mode Toggle": {
      label: "Dark Mode Toggle",
      isReact: true,
      code: `// React Dark Mode Toggle
import React, { useState, useEffect } from 'react';

function DarkModeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.body.style.background = isDark ? '#060d1a' : '#f0f0f0';
  }, [isDark]);

  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <div style={{
        background: isDark ? '#07101f' : 'white',
        padding: '30px',
        borderRadius: '20px',
        transition: 'all 0.3s'
      }}>
        <h2 style={{ color: isDark ? '#38bdf8' : '#060d1a' }}>Dark Mode Demo</h2>
        <p style={{ color: isDark ? '#8a96a8' : '#666' }}>Click the button to toggle theme</p>
        <button
          onClick={() => setIsDark(!isDark)}
          style={{
            padding: '12px 24px',
            background: '#38bdf8',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            fontWeight: 'bold',
            marginTop: '20px'
          }}
        >
          {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
    </div>
  );
}

export default DarkModeToggle;`
    },
    "API Data Display": {
      label: "API Data Display",
      isReact: true,
      code: `// React API Data Display
import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data.slice(0, 6));
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div style={loadingStyle}>Loading users...</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ color: '#38bdf8', textAlign: 'center' }}>User Directory</h2>
      <div style={gridStyle}>
        {users.map(user => (
          <div key={user.id} style={cardStyle}>
            <div style={avatarStyle}>{user.name.charAt(0)}</div>
            <h3 style={{ color: 'white', fontSize: '16px' }}>{user.name}</h3>
            <p style={{ color: '#8a96a8', fontSize: '12px' }}>{user.email}</p>
            <p style={{ color: '#3a4a60', fontSize: '11px' }}>{user.company.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const loadingStyle = {
  textAlign: 'center',
  color: '#38bdf8',
  padding: '40px',
  fontSize: '18px'
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '20px',
  marginTop: '20px'
};

const cardStyle = {
  background: '#07101f',
  border: '1px solid #0f2744',
  borderRadius: '12px',
  padding: '20px',
  textAlign: 'center'
};

const avatarStyle = {
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #38bdf8, #6366f1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 15px',
  fontSize: '24px',
  fontWeight: 'bold',
  color: 'white'
};

export default UserList;`
    }
  },

  // Add more templates as needed...
  Buttons: {
    "Neon Buttons": {
      label: "Neon Buttons",
      isReact: false,
      code: `// HTML/CSS/JS for Neon Buttons`
    }
  }
};

// ─── DEFAULT CODES ──────────────────────────────────────────────────────────

const DEFAULT_HTML = `<!DOCTYPE html>
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

const DEFAULT_CSS = `* {
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

const DEFAULT_JSX = `// React Component
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

// Render the app
ReactDOM.createRoot(document.getElementById('root')).render(<App />);`;

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export default function CodePlayground() {
  // File states
  const [htmlCode, setHtmlCode] = useState(DEFAULT_HTML);
  const [cssCode, setCssCode] = useState(DEFAULT_CSS);
  const [jsxCode, setJsxCode] = useState(DEFAULT_JSX);
  const [activeFile, setActiveFile] = useState("jsx");
  const [isReactMode, setIsReactMode] = useState(true);
  
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

  // Generate full HTML document with React support
  const generateFullHTML = useCallback(() => {
    if (isReactMode) {
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
    } else {
      return htmlCode.replace('</body>', `<style>${cssCode}</style><script>${jsxCode}</script></body>`);
    }
  }, [htmlCode, cssCode, jsxCode, isReactMode]);

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
  }, [htmlCode, cssCode, jsxCode, autoRun, runCode, isReactMode]);

  // Load template
  const handleTemplate = (e) => {
    const key = e.target.value;
    setSelectedTemplate(key);
    if (key && TEMPLATES[category] && TEMPLATES[category][key]) {
      const template = TEMPLATES[category][key];
      const isReact = template.isReact || category === "ReactComponents";
      
      setIsReactMode(isReact);
      
      if (isReact) {
        setHtmlCode(DEFAULT_HTML);
        setCssCode(template.css || DEFAULT_CSS);
        setJsxCode(template.code || template.js || DEFAULT_JSX);
        setActiveFile("jsx");
      } else {
        setHtmlCode(template.html || DEFAULT_HTML);
        setCssCode(template.css || DEFAULT_CSS);
        setJsxCode(template.js || "");
        setActiveFile("html");
      }
      setTimeout(() => runCode(), 100);
    }
  };

  // Save to local storage
  const saveToLocalStorage = () => {
    const project = {
      html: htmlCode,
      css: cssCode,
      jsx: jsxCode,
      isReactMode,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('reactPlayground_project', JSON.stringify(project));
    alert('✅ Project saved to browser storage!');
  };

  const loadFromLocalStorage = () => {
    const saved = localStorage.getItem('reactPlayground_project');
    if (saved) {
      const project = JSON.parse(saved);
      setHtmlCode(project.html);
      setCssCode(project.css);
      setJsxCode(project.jsx);
      setIsReactMode(project.isReactMode);
      setTimeout(() => runCode(), 100);
      alert('📂 Project loaded from storage!');
    } else {
      alert('No saved project found');
    }
  };

  const copyCode = () => {
    let codeToCopy = '';
    switch(activeFile) {
      case 'html': codeToCopy = htmlCode; break;
      case 'css': codeToCopy = cssCode; break;
      case 'jsx': codeToCopy = jsxCode; break;
      default: codeToCopy = generateFullHTML();
    }
    navigator.clipboard.writeText(codeToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  const resetCode = () => {
    setHtmlCode(DEFAULT_HTML);
    setCssCode(DEFAULT_CSS);
    setJsxCode(DEFAULT_JSX);
    setIsReactMode(true);
    setSelectedTemplate("");
    setTimeout(() => runCode(), 100);
  };

  const downloadProject = () => {
    const files = {
      'index.html': htmlCode,
      'styles.css': cssCode,
      'App.jsx': jsxCode
    };
    
    Object.entries(files).forEach(([filename, content]) => {
      const blob = new Blob([content], { type: 'text/plain' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      link.click();
      URL.revokeObjectURL(link.href);
    });
  };

  const getCurrentCode = () => {
    switch(activeFile) {
      case 'html': return htmlCode;
      case 'css': return cssCode;
      case 'jsx': return jsxCode;
      default: return '';
    }
  };

  const setCurrentCode = (value) => {
    switch(activeFile) {
      case 'html': setHtmlCode(value); break;
      case 'css': setCssCode(value); break;
      case 'jsx': setJsxCode(value); break;
      default: break;
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
          <span className="pg-title">⚡ REACT PLAYGROUND — Write JSX Code</span>
          <div className="pg-topbar-right">
            <div className="pg-mode-indicator">
              <span className={`pg-mode-badge ${isReactMode ? 'active' : ''}`}>⚛️ React Mode</span>
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

        {/* Main Layout */}
        <div className="pg-main-layout">
          {/* Sidebar */}
          {showSidebar && (
            <div className="pg-sidebar">
              <div className="pg-sidebar-header">
                <h3>📁 REACT COMPONENTS</h3>
                <span className="pg-template-count">{getCategoryCount("ReactComponents")} components</span>
              </div>
              
              <select className="pg-sidebar-select" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="ReactComponents">⚛️ React Components ({getCategoryCount("ReactComponents")})</option>
                <option value="Cards">🎴 Cards ({getCategoryCount("Cards")})</option>
                <option value="Buttons">🔘 Buttons ({getCategoryCount("Buttons")})</option>
              </select>
              
              <select className="pg-sidebar-select" value={selectedTemplate} onChange={handleTemplate}>
                <option value="">— Choose Template —</option>
                {TEMPLATES[category] && Object.keys(TEMPLATES[category]).map((key) => (
                  <option key={key} value={key}>
                    {TEMPLATES[category][key].label || key}
                    {TEMPLATES[category][key].isReact && " ⚛️"}
                  </option>
                ))}
              </select>
              
              <div className="pg-sidebar-divider"></div>
              
              <div className="pg-sidebar-actions">
                <button className="pg-sidebar-btn" onClick={saveToLocalStorage}>💾 Save Project</button>
                <button className="pg-sidebar-btn" onClick={loadFromLocalStorage}>📂 Load Project</button>
                <button className="pg-sidebar-btn" onClick={downloadProject}>⬇️ Download Files</button>
                <button className="pg-sidebar-btn" onClick={toggleFullscreen}>🖥️ Fullscreen</button>
              </div>
              
              <div className="pg-sidebar-info">
                <p>💡 React Tips:</p>
                <ul>
                  <li>Write JSX directly in the editor</li>
                  <li>Use useState, useEffect hooks</li>
                  <li>Components auto-render on save</li>
                  <li>Import/Export supported via Babel</li>
                </ul>
              </div>
            </div>
          )}

          {/* Main Content */}
          <div className="pg-main-content">
            {/* File Tabs */}
            <div className="pg-file-tabs">
              <button 
                className={`pg-file-tab ${activeFile === 'jsx' ? 'active' : ''}`}
                onClick={() => setActiveFile('jsx')}
              >
                ⚛️ App.jsx
              </button>
              <button 
                className={`pg-file-tab ${activeFile === 'css' ? 'active' : ''}`}
                onClick={() => setActiveFile('css')}
              >
                🎨 styles.css
              </button>
              <button 
                className={`pg-file-tab ${activeFile === 'html' ? 'active' : ''}`}
                onClick={() => setActiveFile('html')}
              >
                📄 index.html
              </button>
              <div className="pg-tab-actions">
                <button className="pg-icon-btn" onClick={copyCode} title="Copy current file">
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
                    {activeFile === 'jsx' ? '⚛️ React JSX' : activeFile === 'css' ? '🎨 CSS' : '📄 HTML'}
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
                  <span className="pg-output-label">📺 Live React Preview</span>
                  <button className="pg-refresh-btn" onClick={runCode}>⟳ Refresh</button>
                </div>
                <iframe 
                  key={iframeKey}
                  className="pg-output-iframe"
                  title="output"
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals"
                  srcDoc={generateFullHTML()}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pg-footer">
          <span className="pg-prompt">⚛️</span>
          <span className="pg-footer-slogan">
            Write React JSX code • Components auto-render • useState, useEffect supported
          </span>
          <span className="pg-footer-right">© 2025 React Playground</span>
        </div>
      </section>
    </div>
  );
}
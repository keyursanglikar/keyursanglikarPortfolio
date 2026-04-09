import React, { useState, useRef, useEffect, useCallback } from "react";
import "./CSS/CodePlayground.css";

// ─── EXPANDED REACT TEMPLATES (20 DESIGNS) ──────────────────────────────────
const REACT_TEMPLATES = {
  "useState Counter": {
    label: "Counter App ⚛️",
    language: "react",
    jsx: `function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div style={{ textAlign: 'center', padding: '50px', color: 'white' }}>
      <h1 style={{ fontSize: '4rem', margin: '0' }}>{count}</h1>
      <p>Simple State Management</p>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '20px' }}>
        <button onClick={() => setCount(count - 1)} style={btnStyle}>-</button>
        <button onClick={() => setCount(0)} style={btnStyle}>Reset</button>
        <button onClick={() => setCount(count + 1)} style={btnStyle}>+</button>
      </div>
    </div>
  );
}
const btnStyle = { padding: '10px 20px', cursor: 'pointer', borderRadius: '8px', border: 'none', background: '#38bdf8', fontWeight: 'bold' };
render(<Counter />);`
  },
  "Todo List": {
    label: "Todo List 📝",
    language: "react",
    jsx: `function TodoApp() {
  const [todos, setTodos] = React.useState([]);
  const [input, setInput] = React.useState("");

  const add = () => {
    if(!input) return;
    setTodos([...todos, { id: Date.now(), text: input }]);
    setInput("");
  };

  return (
    <div style={{ padding: '20px', color: 'white', maxWidth: '400px', margin: 'auto' }}>
      <h3>My Tasks</h3>
      <div style={{ display: 'flex', gap: '10px' }}>
        <input value={input} onChange={e => setInput(e.target.value)} style={{ flex: 1, padding: '8px' }} />
        <button onClick={add} style={{ padding: '8px', background: '#38bdf8' }}>Add</button>
      </div>
      <ul>
        {todos.map(t => <li key={t.id} style={{ margin: '10px 0' }}>{t.text}</li>)}
      </ul>
    </div>
  );
}
render(<TodoApp />);`
  },
  "Digital Clock": {
    label: "Live Clock 🕒",
    language: "react",
    jsx: `function Clock() {
  const [time, setTime] = React.useState(new Date());
  React.useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div style={{ textAlign: 'center', color: '#00ff88', padding: '50px' }}>
      <h1 style={{ fontSize: '3rem', fontFamily: 'monospace' }}>
        {time.toLocaleTimeString()}
      </h1>
      <p style={{ color: '#888' }}>{time.toDateString()}</p>
    </div>
  );
}
render(<Clock />);`
  },
  "Toggle Dark Mode": {
    label: "Theme Switcher 🌓",
    language: "react",
    jsx: `function ThemeApp() {
  const [isDark, setIsDark] = React.useState(true);
  const theme = {
    background: isDark ? '#1a1a2e' : '#f0f0f0',
    color: isDark ? 'white' : '#1a1a2e',
    height: '100vh', padding: '50px', textAlign: 'center'
  };
  return (
    <div style={theme}>
      <h1>{isDark ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={() => setIsDark(!isDark)} style={{ padding: '10px 20px' }}>
        Switch to {isDark ? "Light" : "Dark"}
      </button>
    </div>
  );
}
render(<ThemeApp />);`
  },
  "Fetch API Users": {
    label: "User Directory 👥",
    language: "react",
    jsx: `function Users() {
  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data.slice(0, 5)));
  }, []);
  return (
    <div style={{ color: 'white', padding: '20px' }}>
      <h2>API Users</h2>
      {users.map(u => (
        <div key={u.id} style={{ borderBottom: '1px solid #333', padding: '10px 0' }}>
          <strong>{u.name}</strong> - {u.email}
        </div>
      ))}
    </div>
  );
}
render(<Users />);`
  },
  "Simple Calculator": {
    label: "Calculator 🔢",
    language: "react",
    jsx: `function Calc() {
  const [val, setVal] = React.useState("");
  const ops = ["+", "-", "*", "/"];
  return (
    <div style={{ textAlign: 'center', color: 'white', padding: '20px' }}>
      <div style={{ fontSize: '2rem', background: '#000', padding: '10px', marginBottom: '10px' }}>
        {val || "0"}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '5px' }}>
        {[1,2,3,4,5,6,7,8,9,0,...ops].map(n => (
          <button key={n} onClick={() => setVal(val + n)} style={{ padding: '15px' }}>{n}</button>
        ))}
        <button onClick={() => setVal("")} style={{ gridColumn: 'span 2' }}>Clear</button>
        <button onClick={() => setVal(eval(val).toString())} style={{ gridColumn: 'span 2', background: 'orange' }}>=</button>
      </div>
    </div>
  );
}
render(<Calc />);`
  },
  "Image Gallery": {
    label: "Photo Grid 🖼️",
    language: "react",
    jsx: `function Gallery() {
  const imgs = [10, 11, 12, 13, 14, 15].map(i => \`https://picsum.photos/id/\${i}/200/200\`);
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', padding: '10px' }}>
      {imgs.map((src, i) => <img key={i} src={src} style={{ width: '100%', borderRadius: '8px' }} />)}
    </div>
  );
}
render(<Gallery />);`
  },
  "Accordion": {
    label: "FAQ Accordion 📂",
    language: "react",
    jsx: `function Accordion() {
  const [open, setOpen] = React.useState(null);
  const items = [{ q: "What is React?", a: "A JS library for UI." }, { q: "Why use it?", a: "Component based architecture." }];
  return (
    <div style={{ color: 'white', padding: '20px' }}>
      {items.map((item, i) => (
        <div key={i} style={{ marginBottom: '10px', border: '1px solid #444' }}>
          <div onClick={() => setOpen(open === i ? null : i)} style={{ padding: '10px', cursor: 'pointer', background: '#333' }}>{item.q}</div>
          {open === i && <div style={{ padding: '10px' }}>{item.a}</div>}
        </div>
      ))}
    </div>
  );
}
render(<Accordion />);`
  },
  "Password Generator": {
    label: "Pass Gen 🔑",
    language: "react",
    jsx: `function PassGen() {
  const [pass, setPass] = React.useState("Click Generate");
  const gen = () => setPass(Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8).toUpperCase());
  return (
    <div style={{ textAlign: 'center', color: 'white', padding: '40px' }}>
      <div style={{ padding: '20px', background: '#222', wordBreak: 'break-all' }}>{pass}</div>
      <button onClick={gen} style={{ marginTop: '20px', padding: '10px' }}>Generate Secure Pass</button>
    </div>
  );
}
render(<PassGen />);`
  },
  "BMI Calculator": {
    label: "Health Tool ⚖️",
    language: "react",
    jsx: `function BMI() {
  const [w, setW] = React.useState(70);
  const [h, setH] = React.useState(170);
  const bmi = (w / ((h/100)**2)).toFixed(1);
  return (
    <div style={{ color: 'white', padding: '20px' }}>
      <h3>BMI: {bmi}</h3>
      Weight (kg): <input type="range" min="40" max="150" value={w} onChange={e=>setW(e.target.value)} /><br/>
      Height (cm): <input type="range" min="140" max="210" value={h} onChange={e=>setH(e.target.value)} />
    </div>
  );
}
render(<BMI />);`
  },
  "Stopwatch": {
    label: "Stopwatch ⏱️",
    language: "react",
    jsx: `function Timer() {
  const [sec, setSec] = React.useState(0);
  const [on, setOn] = React.useState(false);
  React.useEffect(() => {
    let interval;
    if(on) interval = setInterval(() => setSec(s => s + 1), 1000);
    return () => clearInterval(interval);
  }, [on]);
  return (
    <div style={{ textAlign: 'center', color: 'white', padding: '40px' }}>
      <h1>{sec}s</h1>
      <button onClick={() => setOn(!on)}>{on ? "Pause" : "Start"}</button>
      <button onClick={() => {setSec(0); setOn(false)}}>Reset</button>
    </div>
  );
}
render(<Timer />);`
  },
  "Progress Bar": {
    label: "Progress Bar 📈",
    language: "react",
    jsx: `function Progress() {
  const [p, setP] = React.useState(0);
  return (
    <div style={{ padding: '40px' }}>
      <div style={{ width: '100%', background: '#333', height: '20px' }}>
        <div style={{ width: \`\${p}%\`, background: '#00ff88', height: '100%', transition: '0.3s' }}></div>
      </div>
      <button onClick={() => setP(Math.min(100, p + 10))} style={{ marginTop: '10px' }}>Load +10%</button>
    </div>
  );
}
render(<Progress />);`
  },
  "Color Picker": {
    label: "Color Picker 🎨",
    language: "react",
    jsx: `function Picker() {
  const [col, setCol] = React.useState("#38bdf8");
  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <div style={{ width: '100px', height: '100px', background: col, margin: 'auto', borderRadius: '50%' }}></div>
      <input type="color" value={col} onChange={e => setCol(e.target.value)} style={{ marginTop: '20px' }} />
      <p style={{ color: 'white' }}>{col}</p>
    </div>
  );
}
render(<Picker />);`
  },
  "Shopping Cart": {
    label: "Cart Logic 🛒",
    language: "react",
    jsx: `function Cart() {
  const [items, setItems] = React.useState(0);
  return (
    <div style={{ color: 'white', padding: '30px', textAlign: 'center' }}>
      <h2>Shop</h2>
      <button onClick={() => setItems(items + 1)}>Add Product</button>
      <p>Items in Cart: {items}</p>
      {items > 0 && <button onClick={() => setItems(0)}>Checkout</button>}
    </div>
  );
}
render(<Cart />);`
  },
  "Search Filter": {
    label: "Live Filter 🔍",
    language: "react",
    jsx: `function Search() {
  const list = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
  const [query, setQuery] = React.useState("");
  return (
    <div style={{ color: 'white', padding: '20px' }}>
      <input placeholder="Search..." onChange={e => setQuery(e.target.value)} />
      {list.filter(f => f.toLowerCase().includes(query.toLowerCase())).map(i => <div key={i}>{i}</div>)}
    </div>
  );
}
render(<Search />);`
  },
  "Rating Component": {
    label: "Star Rating ⭐",
    language: "react",
    jsx: `function Stars() {
  const [rate, setRate] = React.useState(0);
  return (
    <div style={{ textAlign: 'center', padding: '40px', fontSize: '2rem' }}>
      {[1,2,3,4,5].map(s => (
        <span key={s} onClick={() => setRate(s)} style={{ cursor: 'pointer', color: s <= rate ? 'gold' : '#444' }}>★</span>
      ))}
    </div>
  );
}
render(<Stars />);`
  },
  "Quotes Generator": {
    label: "Daily Quotes 💬",
    language: "react",
    jsx: `function Quotes() {
  const quotes = ["Code is life", "React is fast", "Bugs are features"];
  const [q, setQ] = React.useState(quotes[0]);
  return (
    <div style={{ color: 'white', padding: '40px', textAlign: 'center', fontStyle: 'italic' }}>
      " {q} "
      <br/><button onClick={() => setQ(quotes[Math.floor(Math.random()*3)])}>Next Quote</button>
    </div>
  );
}
render(<Quotes />);`
  },
  "Markdown Preview": {
    label: "Simple Editor 📝",
    language: "react",
    jsx: `function Markdown() {
  const [txt, setTxt] = React.useState("# Hello\\n**Bold text**");
  return (
    <div style={{ display: 'flex', color: 'white' }}>
      <textarea value={txt} onChange={e => setTxt(e.target.value)} style={{ flex: 1, height: '200px' }} />
      <div style={{ flex: 1, padding: '10px' }}>{txt.includes('#') ? <h1>Heading</h1> : txt}</div>
    </div>
  );
}
render(<Markdown />);`
  },
  "Weather Mock": {
    label: "Weather UI 🌤️",
    language: "react",
    jsx: `function Weather() {
  return (
    <div style={{ color: 'white', padding: '30px', textAlign: 'center', borderRadius: '20px', background: 'linear-gradient(to bottom, #4facfe, #00f2fe)' }}>
      <h2>Pune</h2>
      <div style={{ fontSize: '3rem' }}>28°C</div>
      <p>Sunny Day</p>
    </div>
  );
}
render(<Weather />);`
  },
  "Character Counter": {
    label: "Word Count 🔠",
    language: "react",
    jsx: `function WordCount() {
  const [t, setT] = React.useState("");
  return (
    <div style={{ padding: '20px', color: 'white' }}>
      <textarea onChange={e => setT(e.target.value)} style={{ width: '100%' }} />
      <p>Chars: {t.length} | Words: {t.split(/\\s+/).filter(x => x).length}</p>
    </div>
  );
}
render(<WordCount />);`
  }
};

const TEMPLATES = {
  ReactComponents: REACT_TEMPLATES,
  HTML_CSS_JS: {
    // ... Existing HTML templates
  }
};

// ─── STYLES & DEFAULTS ───────────────────────────────────────────────────────
const DEFAULT_REACT_JSX = `// React Component Example
function App() {
  const [count, setCount] = React.useState(0);
  
  return (
    <div style={{ textAlign: 'center', padding: '40px', color: '#38bdf8' }}>
      <h1>React Playground</h1>
      <p style={{ color: '#fff' }}>Click the button to update state</p>
      <div style={{ fontSize: '50px', margin: '20px' }}>{count}</div>
      <button 
        onClick={() => setCount(count + 1)}
        style={{ padding: '10px 20px', cursor: 'pointer', borderRadius: '8px' }}
      >
        Increment
      </button>
    </div>
  );
}

// Crucial: Use 'render' instead of ReactDOM.render for this playground
render(<App />);`;

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
export default function CodePlayground() {
  const [currentLanguage, setCurrentLanguage] = useState("react");
  const [jsxCode, setJsxCode] = useState(DEFAULT_REACT_JSX);
  const [cssCode, setCssCode] = useState("");
  const [htmlCssJsCode, setHtmlCssJsCode] = useState({ html: "<h1>Hello</h1>", css: "", js: "" });
  const [plainCode, setPlainCode] = useState("");
  const [activeFile, setActiveFile] = useState("jsx");
  const [previewFullscreen, setPreviewFullscreen] = useState(false);
  const [category, setCategory] = useState("ReactComponents");
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [iframeKey, setIframeKey] = useState(0);
  const [fontSize, setFontSize] = useState(14);

  // Helper to generate the Iframe content
  const generateOutputHTML = useCallback(() => {
    if (currentLanguage === "react") {
      return `<!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <style>
            body { margin: 0; background: #060d1a; font-family: sans-serif; }
            ${cssCode}
          </style>
          <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
          <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
          <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
        </head>
        <body>
          <div id="root"></div>
          <script type="text/babel">
            const { useState, useEffect, useRef, useCallback, useMemo } = React;
            
            // Custom render helper for the playground
            const render = (component) => {
              const root = ReactDOM.createRoot(document.getElementById('root'));
              root.render(component);
            };

            try {
              ${jsxCode}
            } catch (err) {
              document.getElementById('root').innerHTML = '<pre style="color: red; padding: 20px;">' + err.message + '</pre>';
            }
          </script>
        </body>
      </html>`;
    }
    // Handle HTML/CSS/JS or others...
    return `<html><body><style>${htmlCssJsCode.css}</style>${htmlCssJsCode.html}<script>${htmlCssJsCode.js}</script></body></html>`;
  }, [currentLanguage, jsxCode, cssCode, htmlCssJsCode]);

  const runCode = () => setIframeKey(prev => prev + 1);

  const handleTemplate = (e) => {
    const key = e.target.value;
    setSelectedTemplate(key);
    const template = TEMPLATES[category][key];
    if (template) {
      if (template.language === "react") {
        setJsxCode(template.jsx);
        setCssCode(template.css || "");
      }
      setTimeout(runCode, 100);
    }
  };

  return (
    <div className="pg-container">
      <div className="pg-topbar">
        <div className="pg-dots">
            <span className="pg-dot pg-dot-r" />
            <span className="pg-dot pg-dot-y" />
            <span className="pg-dot pg-dot-g" />
        </div>
        <span>🚀 ADVANCED CODE PLAYGROUND</span>
        <button onClick={() => setPreviewFullscreen(!previewFullscreen)} className="pg-run-btn">
          {previewFullscreen ? "Exit Preview" : "💻 Full Preview"}
        </button>
      </div>

      <div className="pg-main-layout">
        <div className="pg-sidebar">
          <h3>TEMPLATES</h3>
          <select value={category} onChange={e => setCategory(e.target.value)}>
            <option value="ReactComponents">React Designs ({Object.keys(REACT_TEMPLATES).length})</option>
          </select>
          <select value={selectedTemplate} onChange={handleTemplate}>
            <option value="">Select Template...</option>
            {Object.keys(TEMPLATES[category]).map(k => <option key={k} value={k}>{TEMPLATES[category][k].label}</option>)}
          </select>
          
          <div className="pg-sidebar-actions">
            <button onClick={runCode}>▶ RUN NOW</button>
            <button onClick={() => setJsxCode("")}>🗑️ CLEAR</button>
          </div>
        </div>

        <div className={`pg-editor-output ${previewFullscreen ? 'preview-only' : ''}`}>
          {!previewFullscreen && (
            <div className="pg-editor-area">
              <div className="pg-editor-header">
                <span>EDITING: {activeFile.toUpperCase()}</span>
                <div className="pg-font-controls">
                    <button onClick={() => setFontSize(f => f - 1)}>-</button>
                    <span>{fontSize}px</span>
                    <button onClick={() => setFontSize(f => f + 1)}>+</button>
                </div>
              </div>
              <textarea 
                value={currentLanguage === "react" ? jsxCode : plainCode} 
                onChange={e => setJsxCode(e.target.value)}
                style={{ fontSize: `${fontSize}px` }}
                spellCheck="false"
              />
            </div>
          )}

          <div className={`pg-output-area ${previewFullscreen ? 'full' : ''}`}>
            <div className="pg-output-header">
                <span className="pg-output-dot"></span>
                <span>LIVE PREVIEW</span>
            </div>
            <iframe 
              key={iframeKey}
              srcDoc={generateOutputHTML()}
              title="preview"
              sandbox="allow-scripts"
            />
          </div>
        </div>
      </div>
      
      <div className="pg-footer">
        <span>Ready • Supporting React 18, Babel, and CSS3</span>
      </div>
    </div>
  );
}
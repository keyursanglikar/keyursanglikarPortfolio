import React, { useState, useRef, useEffect, useCallback } from "react";
import "./CSSCodePlayground.css";

// ─── TEMPLATE LIBRARY (Abbreviated for clarity - full version as before) ─────
const TEMPLATES = {
  ReactComponents: {
    "useState Counter": {
      label: "useState Counter ⚛️",
      language: "react",
      jsx: `// React useState Counter Component\nimport React, { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  \n  return (\n    <div style={{ textAlign: 'center', padding: '40px' }}>\n      <h1 style={{ color: '#38bdf8', fontSize: '72px' }}>{count}</h1>\n      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>\n        <button onClick={() => setCount(count - 1)} style={buttonStyle}>-</button>\n        <button onClick={() => setCount(0)} style={buttonStyle}>Reset</button>\n        <button onClick={() => setCount(count + 1)} style={buttonStyle}>+</button>\n      </div>\n    </div>\n  );\n}\n\nconst buttonStyle = {\n  padding: '10px 20px',\n  background: '#38bdf8',\n  border: 'none',\n  borderRadius: '8px',\n  cursor: 'pointer',\n  fontWeight: 'bold'\n};\n\nexport default Counter;`,
      css: `* { margin: 0; padding: 0; box-sizing: border-box; }\nbody {\n  min-height: 100vh;\n  background: linear-gradient(135deg, #1a1a2e, #16213e, #0f3460);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: 'Segoe UI', sans-serif;\n}`,
      html: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>React Counter</title></head><body><div id="root"></div></body></html>`
    },
    "Todo List App": {
      label: "Todo List App ⚛️",
      language: "react",
      jsx: `// React Todo List Component\nimport React, { useState } from 'react';\n\nfunction TodoApp() {\n  const [todos, setTodos] = useState([]);\n  const [input, setInput] = useState('');\n\n  const addTodo = () => {\n    if (input.trim()) {\n      setTodos([...todos, { text: input, completed: false, id: Date.now() }]);\n      setInput('');\n    }\n  };\n\n  const toggleTodo = (id) => {\n    setTodos(todos.map(todo =>\n      todo.id === id ? { ...todo, completed: !todo.completed } : todo\n    ));\n  };\n\n  const deleteTodo = (id) => {\n    setTodos(todos.filter(todo => todo.id !== id));\n  };\n\n  return (\n    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>\n      <h2 style={{ color: '#38bdf8' }}>Todo List</h2>\n      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>\n        <input type="text" value={input} onChange={(e) => setInput(e.target.value)}\n          onKeyPress={(e) => e.key === 'Enter' && addTodo()} placeholder="Add a task..." style={inputStyle} />\n        <button onClick={addTodo} style={buttonStyle}>Add</button>\n      </div>\n      <div>\n        {todos.map(todo => (\n          <div key={todo.id} style={todoItemStyle}>\n            <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} style={{ marginRight: '10px' }} />\n            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none', color: todo.completed ? '#8a96a8' : 'white', flex: 1 }}>\n              {todo.text}\n            </span>\n            <button onClick={() => deleteTodo(todo.id)} style={deleteStyle}>×</button>\n          </div>\n        ))}\n      </div>\n      {todos.length === 0 && <p style={{ color: '#8a96a8', textAlign: 'center' }}>No tasks yet. Add one!</p>}\n    </div>\n  );\n}\n\nconst inputStyle = { flex: 1, padding: '10px', background: '#07101f', border: '1px solid #0f2744', borderRadius: '8px', color: 'white', outline: 'none' };\nconst buttonStyle = { padding: '10px 20px', background: '#38bdf8', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' };\nconst todoItemStyle = { display: 'flex', alignItems: 'center', padding: '10px', background: '#07101f', marginBottom: '8px', borderRadius: '8px', gap: '10px' };\nconst deleteStyle = { background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer', fontSize: '18px' };\n\nexport default TodoApp;`,
      css: `* { margin: 0; padding: 0; box-sizing: border-box; }\nbody { min-height: 100vh; background: #060d1a; display: flex; align-items: center; justify-content: center; font-family: 'Segoe UI', sans-serif; }`,
      html: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Todo App</title></head><body><div id="root"></div></body></html>`
    }
  },
  HTML_CSS_JS: {
    "Animated Gradient BG": {
      label: "Animated Gradient BG 🌈",
      language: "htmlcssjs",
      html: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Animated Gradient</title><link rel="stylesheet" href="styles.css"></head><body><div class="content"><h1>Animated Gradient</h1><p>Beautiful moving gradient</p><button class="gradient-btn" id="gradientBtn">Change Colors</button></div></body></html>`,
      css: `*{margin:0;padding:0;box-sizing:border-box;}body{min-height:100vh;background:linear-gradient(270deg,#ff6b6b,#4ecdc4,#45b7d1,#96ceb4,#ff6b6b);background-size:400% 400%;animation:gradientShift 10s ease infinite;display:flex;align-items:center;justify-content:center;}@keyframes gradientShift{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}.content{text-align:center;background:rgba(0,0,0,0.6);backdrop-filter:blur(10px);padding:50px;border-radius:20px;color:white;}.gradient-btn{padding:12px 30px;background:white;border:none;border-radius:50px;cursor:pointer;}`,
      js: `var colorSets = [['#ff6b6b','#4ecdc4','#45b7d1','#96ceb4'],['#f093fb','#f5576c','#4facfe','#00f2fe'],['#fa709a','#fee140','#667eea','#764ba2']]; var idx = 0; document.getElementById('gradientBtn').addEventListener('click', function() { idx = (idx + 1) % colorSets.length; var colors = colorSets[idx]; var gradientString = 'linear-gradient(270deg, ' + colors.join(', ') + ', ' + colors[0] + ')'; document.body.style.background = gradientString; document.body.style.backgroundSize = '400% 400%'; });`
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
  const [files, setFiles] = useState([{ id: "file1", name: "main.jsx", content: DEFAULT_REACT_JSX, language: "react" }]);
  const [activeFileId, setActiveFileId] = useState("file1");
  const [newFileName, setNewFileName] = useState("");
  const [showNewFileInput, setShowNewFileInput] = useState(false);
  
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
    { id: "bash", label: "🖥️ Bash", icon: "🖥️" },
    { id: "java", label: "☕ Java", icon: "☕" },
    { id: "cpp", label: "💻 C++", icon: "💻" },
    { id: "c", label: "🔵 C", icon: "🔵" }
  ];

  const activeFile = files.find(f => f.id === activeFileId) || files[0];
  
  const getCurrentCode = () => {
    if (activeFile) return activeFile.content;
    return "";
  };

  const setCurrentCode = (value) => {
    setFiles(prev => prev.map(f => 
      f.id === activeFileId ? { ...f, content: value } : f
    ));
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
    
    const newFile = { id: Date.now().toString(), name: newFileName, content: defaultContent, language: lang };
    setFiles(prev => [...prev, newFile]);
    setActiveFileId(newFile.id);
    setCurrentLanguage(lang);
    setNewFileName("");
    setShowNewFileInput(false);
    setTimeout(() => runCode(), 100);
  };

  const deleteFile = (id) => {
    if (files.length === 1) return;
    setFiles(prev => prev.filter(f => f.id !== id));
    if (activeFileId === id && files.length > 1) {
      const remainingFiles = files.filter(f => f.id !== id);
      setActiveFileId(remainingFiles[0]?.id || remainingFiles[0]?.id);
    }
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
      try { 
        // Use Function constructor instead of eval for better isolation
        const func = new Function(code);
        func();
      } catch(e) { 
        output += `Error: ${e.message}\n`; 
      }
      console.log = oldLog;
    } else if (language === "python") {
      output = "⚠️ Python execution requires a backend server.\nRunning in simulation mode.\n";
      output += "Code:\n" + code.substring(0, 500);
    } else {
      output = `📝 ${language.toUpperCase()} code ready for execution.\n`;
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
      return `<!DOCTYPE html><html><head><style>body{background:#1a1a2e;color:#00ff88;font-family:monospace;padding:20px;}pre{background:#0a0a1a;padding:20px;border-radius:10px;overflow:auto;}</style></head><body><h2>${currentLanguage.toUpperCase()} Code Output</h2><pre>${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre><div style="margin-top:20px;padding:20px;background:#0a0a1a;border-radius:10px;"><strong>Terminal Output:</strong><pre>${terminalOutput}</pre></div></body></html>`;
    }
  }, [currentLanguage, jsxCode, cssCode, htmlCssJsCode, plainCode, terminalOutput]);

  const runCode = useCallback(() => {
    setIframeKey(prev => prev + 1);
  }, []);

  // Fixed: Proper dependency array to prevent infinite loops
  useEffect(() => {
    if (!autoRun) return;
    const timer = setTimeout(() => {
      runCode();
    }, 800);
    return () => clearTimeout(timer);
  }, [jsxCode, cssCode, htmlCode, htmlCssJsCode, plainCode, autoRun, runCode]);

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
      htmlCssJsCode, plainCode, 
      files, 
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
      if (project.files) setFiles(project.files);
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
    if (files.length > 0) {
      files.forEach(({ name, content }) => { 
        const blob = new Blob([content], { type: 'text/plain' }); 
        const link = document.createElement('a'); 
        link.href = URL.createObjectURL(blob); 
        link.download = name; 
        link.click(); 
        URL.revokeObjectURL(link.href); 
      });
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
    const newHeight = window.innerHeight - e.clientY - 50; 
    if (newHeight > 200 && newHeight < 600) setOutputPanelHeight(newHeight); 
  };
  
  const stopResizing = () => { 
    isResizing.current = false; 
    document.removeEventListener('mousemove', handleResize); 
    document.removeEventListener('mouseup', stopResizing); 
  };
  
  const toggleFullscreen = () => { 
    const element = document.querySelector('.pg-container'); 
    if (!fullscreen) element?.requestFullscreen(); 
    else document.exitFullscreen(); 
    setFullscreen(!fullscreen); 
  };

  const getCategoryCount = (cat) => TEMPLATES[cat] ? Object.keys(TEMPLATES[cat]).length : 0;

  return (
    <div className={`pg-container ${fullscreen ? 'fullscreen' : ''}`}>
      <section className="pg-section">
        <div className="pg-topbar">
          <div className="pg-dots">
            <span className="pg-dot pg-dot-r" />
            <span className="pg-dot pg-dot-y" />
            <span className="pg-dot pg-dot-g" />
          </div>
          <span className="pg-title">🌈 MULTI-LANG PLAYGROUND — 10 Languages + VS Code File Explorer</span>
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
                <h3>📁 FILE EXPLORER</h3>
                <button className="pg-icon-btn-sm" onClick={() => setShowNewFileInput(!showNewFileInput)}>+ New File</button>
              </div>
              {showNewFileInput && (
                <div className="pg-new-file">
                  <input 
                    type="text" 
                    placeholder="filename.jsx" 
                    value={newFileName} 
                    onChange={(e) => setNewFileName(e.target.value)} 
                    onKeyPress={(e) => e.key === 'Enter' && createNewFile()} 
                  />
                  <button onClick={createNewFile}>Create</button>
                </div>
              )}
              <div className="pg-file-list">
                {files.map((file) => (
                  <div 
                    key={file.id} 
                    className={`pg-file-item ${activeFileId === file.id ? 'active' : ''}`} 
                    onClick={() => { 
                      setActiveFileId(file.id); 
                      setCurrentLanguage(file.language); 
                    }}
                  >
                    <span>📄 {file.name}</span>
                    <button 
                      className="pg-file-delete" 
                      onClick={(e) => { 
                        e.stopPropagation(); 
                        deleteFile(file.id); 
                      }}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
              <div className="pg-sidebar-divider"></div>
              <div className="pg-sidebar-header">
                <h3>📁 TEMPLATE LIBRARY</h3>
                <span className="pg-template-count">50+ templates</span>
              </div>
              <select className="pg-sidebar-select" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="ReactComponents">⚛️ React Components ({getCategoryCount("ReactComponents")})</option>
                <option value="HTML_CSS_JS">🎨 HTML/CSS/JS ({getCategoryCount("HTML_CSS_JS")})</option>
              </select>
              <select className="pg-sidebar-select" value={selectedTemplate} onChange={handleTemplate}>
                <option value="">— Choose Template —</option>
                {TEMPLATES[category] && Object.keys(TEMPLATES[category]).map((key) => (
                  <option key={key} value={key}>{TEMPLATES[category][key].label || key}</option>
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
                  <li>Create new files with any extension</li>
                  <li>Switch languages anytime</li>
                  <li>Auto-run updates preview</li>
                  <li>50+ ready-to-use templates</li>
                  <li>Terminal output for code execution</li>
                </ul>
              </div>
            </div>
          )}

          <div className="pg-main-content">
            <div className="pg-file-tabs">
              {files.map((file) => (
                <button 
                  key={file.id} 
                  className={`pg-file-tab ${activeFileId === file.id ? 'active' : ''}`} 
                  onClick={() => { 
                    setActiveFileId(file.id); 
                    setCurrentLanguage(file.language); 
                  }}
                >
                  {file.name}
                </button>
              ))}
              <div className="pg-tab-actions">
                <button className="pg-icon-btn" onClick={copyCode}>{copied ? "✓ Copied!" : "📋 Copy"}</button>
                <button className="pg-icon-btn" onClick={resetCode}>⟳ Reset</button>
                <button className="pg-run-btn" onClick={runCode}>▶ Run Code</button>
              </div>
            </div>

            <div className="pg-editor-output">
              <div className="pg-editor-area">
                <div className="pg-editor-header">
                  <span className="pg-lang-badge">{currentLanguage.toUpperCase()}</span>
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
          <span className="pg-prompt">$</span>
          <span className="pg-footer-slogan">Multi-Language Playground • React • HTML/CSS/JS • JavaScript • TypeScript • Python • SQL • Bash • Java • C++ • C</span>
          <span className="pg-footer-right">50+ Templates • 10 Languages</span>
        </div>
      </section>
    </div>
  );
}
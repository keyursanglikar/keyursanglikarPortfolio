






import React, { useState, useRef, useEffect, useCallback } from "react";
import "./CSS/CodePlayground.css";

// ─── Template Library with Categories ───────────────────────────────────────

const TEMPLATES = {
  Cards: {
    "Glassmorphism Card": {
      html: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="glass">
    <div class="avatar">K</div>
    <h2>Keyur Sanglikar</h2>
    <p>Full Stack Developer</p>
    <span class="tag">AVAILABLE FOR HIRE</span>
  </div>
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
  width: 72px; 
  height: 72px; 
  border-radius: 50%;
  background: linear-gradient(135deg, #38bdf8, #6366f1);
  margin: 0 auto 18px;
  display: flex; 
  align-items: center; 
  justify-content: center;
  font-size: 28px; 
  font-weight: 700;
}

h2 { font-size: 20px; margin-bottom: 6px; }
p { color: rgba(255,255,255,0.6); font-size: 13px; margin-bottom: 18px; }

.tag {
  display: inline-block; 
  padding: 5px 14px;
  background: rgba(56,189,248,0.2); 
  border: 1px solid rgba(56,189,248,0.4);
  border-radius: 20px; 
  color: #38bdf8; 
  font-size: 11px; 
  letter-spacing: 1px;
}`,
      js: `// Add any JavaScript functionality here
console.log("Glassmorphism card loaded");

// Example: Add click animation
document.querySelector('.glass')?.addEventListener('click', function() {
  this.style.transform = 'scale(0.98)';
  setTimeout(() => {
    this.style.transform = '';
  }, 200);
});`
    },
    "Product Card": {
      html: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="product-card">
    <div class="product-image">🎧</div>
    <div class="product-info">
      <div class="product-title">Wireless Headphones</div>
      <div class="product-price">$99.99</div>
      <div class="product-desc">Noise cancellation, 30hr battery life, premium sound quality.</div>
      <button class="product-btn" id="addToCartBtn">Add to Cart</button>
    </div>
  </div>
  <script src="script.js"></script>
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
  transition: transform 0.3s, box-shadow 0.3s;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(56,189,248,0.1);
}

.product-image {
  height: 180px;
  background: linear-gradient(135deg, #1e3a5f, #0f2744);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
}

.product-info { padding: 20px; }
.product-title { color: white; font-size: 18px; font-weight: 600; margin-bottom: 8px; }
.product-price { color: #38bdf8; font-size: 24px; font-weight: 700; margin-bottom: 12px; }
.product-desc { color: #8a96a8; font-size: 12px; line-height: 1.6; margin-bottom: 16px; }

.product-btn {
  width: 100%;
  padding: 10px;
  background: #38bdf8;
  border: none;
  border-radius: 10px;
  color: #060d1a;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.product-btn:hover { background: #7dd3f8; }`,
      js: `// Product card interactions
const addToCartBtn = document.getElementById('addToCartBtn');

if (addToCartBtn) {
  let cartCount = 0;
  
  addToCartBtn.addEventListener('click', function() {
    cartCount++;
    this.textContent = \`Added to Cart (\${cartCount})\`;
    this.style.background = '#34d399';
    
    setTimeout(() => {
      this.textContent = 'Add to Cart';
      this.style.background = '#38bdf8';
    }, 1500);
    
    // Show notification
    showNotification('Item added to cart!');
  });
}

function showNotification(message) {
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.style.cssText = \`
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #38bdf8;
    color: #060d1a;
    padding: 10px 20px;
    border-radius: 8px;
    font-size: 14px;
    animation: slideIn 0.3s ease;
    z-index: 1000;
  \`;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 2000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = \`
  @keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
\`;
document.head.appendChild(style);`
    }
  },
  
  Buttons: {
    "Neon Button Set": {
      html: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="button-container">
    <button class="btn btn-cyan" id="btn1">Explore</button>
    <button class="btn btn-purple" id="btn2">Projects</button>
    <button class="btn btn-pink" id="btn3">Contact</button>
  </div>
  <script src="script.js"></script>
</body>
</html>`,
      css: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  min-height: 100vh; 
  background: #060d1a;
  display: flex; 
  align-items: center; 
  justify-content: center;
  font-family: 'Space Mono', monospace;
}

.button-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.btn {
  padding: 14px 32px;
  border-radius: 50px;
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  transition: all 0.3s;
  font-family: inherit;
}

.btn-cyan {
  background: transparent;
  color: #38bdf8;
  border: 2px solid #38bdf8;
  box-shadow: 0 0 15px #38bdf840, inset 0 0 15px #38bdf810;
}

.btn-cyan:hover {
  background: #38bdf8;
  color: #060d1a;
  box-shadow: 0 0 35px #38bdf880;
  transform: scale(1.05);
}

.btn-purple {
  background: transparent;
  color: #a78bfa;
  border: 2px solid #a78bfa;
  box-shadow: 0 0 15px #a78bfa40, inset 0 0 15px #a78bfa10;
}

.btn-purple:hover {
  background: #a78bfa;
  color: #060d1a;
  box-shadow: 0 0 35px #a78bfa80;
  transform: scale(1.05);
}

.btn-pink {
  background: transparent;
  color: #f472b6;
  border: 2px solid #f472b6;
  box-shadow: 0 0 15px #f472b640, inset 0 0 15px #f472b610;
}

.btn-pink:hover {
  background: #f472b6;
  color: #060d1a;
  box-shadow: 0 0 35px #f472b680;
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .btn { padding: 10px 20px; font-size: 11px; }
}`,
      js: `// Add click effects to buttons
const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
  btn.addEventListener('click', function(e) {
    // Ripple effect
    const ripple = document.createElement('span');
    ripple.style.cssText = \`
      position: absolute;
      border-radius: 50%;
      background: rgba(255,255,255,0.6);
      transform: scale(0);
      animation: ripple 0.6s linear;
      pointer-events: none;
    \`;
    
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (e.clientX - rect.left - size/2) + 'px';
    ripple.style.top = (e.clientY - rect.top - size/2) + 'px';
    
    this.style.position = 'relative';
    this.style.overflow = 'hidden';
    this.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
    
    // Log button click
    console.log(\`Button "\${this.textContent}" clicked\`);
  });
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = \`
  @keyframes ripple {
    to { transform: scale(4); opacity: 0; }
  }
\`;
document.head.appendChild(style);`
    }
  },

  Animations: {
    "Animated Counter": {
      html: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="counter-container">
    <h2>Interactive Counter</h2>
    <div class="counter-display" id="counter">0</div>
    <div class="button-group">
      <button class="counter-btn decrement" id="decrement">-</button>
      <button class="counter-btn reset" id="reset">Reset</button>
      <button class="counter-btn increment" id="increment">+</button>
    </div>
    <div class="counter-history" id="history"></div>
  </div>
  <script src="script.js"></script>
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

.counter-container {
  background: #07101f;
  border: 1px solid #0f2744;
  border-radius: 20px;
  padding: 40px;
  text-align: center;
  min-width: 350px;
}

.counter-container h2 {
  color: #38bdf8;
  margin-bottom: 20px;
  font-size: 24px;
}

.counter-display {
  font-size: 72px;
  font-weight: 900;
  color: white;
  margin-bottom: 30px;
  transition: transform 0.2s;
}

.counter-display.animate {
  transform: scale(1.1);
}

.button-group {
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-bottom: 20px;
}

.counter-btn {
  padding: 12px 24px;
  font-size: 18px;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s;
}

.decrement {
  background: #07101f;
  color: #38bdf8;
  border: 1px solid #0f2744;
}

.increment {
  background: #38bdf8;
  color: #060d1a;
}

.reset {
  background: #07101f;
  color: #8a96a8;
  border: 1px solid #0f2744;
}

.counter-btn:hover {
  transform: translateY(-2px);
}

.counter-btn:active {
  transform: translateY(0);
}

.counter-history {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #0f2744;
  color: #8a96a8;
  font-size: 12px;
}

.history-item {
  padding: 5px;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}`,
      js: `// Interactive Counter with History
let count = 0;
let history = [];

const counterDisplay = document.getElementById('counter');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');
const incrementBtn = document.getElementById('increment');
const historyDiv = document.getElementById('history');

function updateDisplay() {
  counterDisplay.textContent = count;
  counterDisplay.classList.add('animate');
  setTimeout(() => counterDisplay.classList.remove('animate'), 200);
  
  // Update document title
  document.title = \`Counter: \${count} | Code Playground\`;
}

function addToHistory(action) {
  const timestamp = new Date().toLocaleTimeString();
  history.unshift(\`\${timestamp}: \${action} → Count = \${count}\`);
  
  if (history.length > 10) history.pop();
  
  historyDiv.innerHTML = history.map(item => 
    \`<div class="history-item">📝 \${item}</div>\`
  ).join('');
}

function increment() {
  count++;
  updateDisplay();
  addToHistory('Incremented');
}

function decrement() {
  count--;
  updateDisplay();
  addToHistory('Decremented');
}

function reset() {
  count = 0;
  updateDisplay();
  addToHistory('Reset');
  history = [];
  historyDiv.innerHTML = '<div class="history-item">✨ History cleared</div>';
}

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
resetBtn.addEventListener('click', reset);

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp') increment();
  if (e.key === 'ArrowDown') decrement();
  if (e.key === 'r' || e.key === 'R') reset();
});

console.log('Counter initialized! Use arrow keys or buttons');`
    }
  }
};

// ─── Multi-File Code Editor Component ────────────────────────────────────────

const DEFAULT_HTML = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Code Playground</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1>Welcome to Code Playground</h1>
    <p>Edit HTML, CSS, and JavaScript in separate panels!</p>
    <button id="clickMe">Click Me</button>
  </div>
  <script src="script.js"></script>
</body>
</html>`;

const DEFAULT_CSS = `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  background: linear-gradient(135deg, #060d1a, #0a1a2f);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Segoe UI', sans-serif;
  padding: 20px;
}

.container {
  background: rgba(7, 16, 31, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(15, 39, 68, 0.5);
  border-radius: 20px;
  padding: 40px;
  text-align: center;
  max-width: 500px;
  animation: fadeIn 0.6s ease;
}

h1 {
  color: #38bdf8;
  font-size: 28px;
  margin-bottom: 15px;
}

p {
  color: #8a96a8;
  line-height: 1.6;
  margin-bottom: 25px;
}

button {
  padding: 12px 28px;
  background: #38bdf8;
  border: none;
  border-radius: 10px;
  color: #060d1a;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(56, 189, 248, 0.3);
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
}`;

const DEFAULT_JS = `// Welcome to the Code Playground!
// You can write JavaScript here

console.log('Code Playground initialized!');

// Add interactivity
const button = document.getElementById('clickMe');

if (button) {
  let clickCount = 0;
  
  button.addEventListener('click', () => {
    clickCount++;
    button.textContent = \`Clicked \${clickCount} times\`;
    
    // Create a temporary notification
    const notification = document.createElement('div');
    notification.textContent = '🎉 Button clicked!';
    notification.style.cssText = \`
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: #38bdf8;
      color: #060d1a;
      padding: 10px 20px;
      border-radius: 8px;
      font-size: 14px;
      animation: slideIn 0.3s ease;
      z-index: 1000;
    \`;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.remove();
    }, 2000);
  });
}

// Add keyboard shortcuts info
console.log('💡 Tip: Use Ctrl+S to save your code locally');`;

export default function CodePlayground() {
  // File states
  const [htmlCode, setHtmlCode] = useState(DEFAULT_HTML);
  const [cssCode, setCssCode] = useState(DEFAULT_CSS);
  const [jsCode, setJsCode] = useState(DEFAULT_JS);
  
  // UI states
  const [activeFile, setActiveFile] = useState("html");
  const [category, setCategory] = useState("Cards");
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [iframeKey, setIframeKey] = useState(0);
  const [autoRun, setAutoRun] = useState(false);
  const [copied, setCopied] = useState(false);
  const [fontSize, setFontSize] = useState(13);
  const [showSidebar, setShowSidebar] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);
  const [outputPanelHeight, setOutputPanelHeight] = useState(300);
  
  const editorRef = useRef(null);
  const autoRunTimer = useRef(null);
  const isResizing = useRef(false);

  // Generate full HTML document
  const generateFullHTML = useCallback(() => {
    // Extract body content from htmlCode
    let bodyContent = htmlCode;
    let headContent = '';
    
    // Simple extraction (you can make this more sophisticated)
    const bodyMatch = htmlCode.match(/<body[^>]*>([\s\S]*)<\/body>/i);
    const headMatch = htmlCode.match(/<head[^>]*>([\s\S]*)<\/head>/i);
    
    if (bodyMatch) bodyContent = bodyMatch[1];
    if (headMatch) headContent = headMatch[1];
    
    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>${cssCode}</style>
  ${headContent || ''}
</head>
<body>
  ${bodyContent}
  <script>${jsCode}<\/script>
</body>
</html>`;
  }, [htmlCode, cssCode, jsCode]);

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
  }, [htmlCode, cssCode, jsCode, autoRun, runCode]);

  // Load template
  const handleTemplate = (e) => {
    const key = e.target.value;
    setSelectedTemplate(key);
    if (key && TEMPLATES[category] && TEMPLATES[category][key]) {
      const template = TEMPLATES[category][key];
      setHtmlCode(template.html || DEFAULT_HTML);
      setCssCode(template.css || DEFAULT_CSS);
      setJsCode(template.js || DEFAULT_JS);
      runCode();
    }
  };

  // Save to local storage
  const saveToLocalStorage = () => {
    const project = {
      html: htmlCode,
      css: cssCode,
      js: jsCode,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('codePlayground_project', JSON.stringify(project));
    alert('Project saved to browser storage!');
  };

  const loadFromLocalStorage = () => {
    const saved = localStorage.getItem('codePlayground_project');
    if (saved) {
      const project = JSON.parse(saved);
      setHtmlCode(project.html);
      setCssCode(project.css);
      setJsCode(project.js);
      runCode();
      alert('Project loaded from storage!');
    } else {
      alert('No saved project found');
    }
  };

  const copyCode = () => {
    let codeToCopy = '';
    switch(activeFile) {
      case 'html': codeToCopy = htmlCode; break;
      case 'css': codeToCopy = cssCode; break;
      case 'js': codeToCopy = jsCode; break;
      default: codeToCopy = generateFullHTML();
    }
    navigator.clipboard.writeText(codeToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  const resetCode = () => {
    setHtmlCode(DEFAULT_HTML);
    setCssCode(DEFAULT_CSS);
    setJsCode(DEFAULT_JS);
    setSelectedTemplate("");
    runCode();
  };

  const downloadProject = () => {
    const files = {
      'index.html': htmlCode,
      'styles.css': cssCode,
      'script.js': jsCode
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

  // Get current code based on active file
  const getCurrentCode = () => {
    switch(activeFile) {
      case 'html': return htmlCode;
      case 'css': return cssCode;
      case 'js': return jsCode;
      default: return '';
    }
  };

  const setCurrentCode = (value) => {
    switch(activeFile) {
      case 'html': setHtmlCode(value); break;
      case 'css': setCssCode(value); break;
      case 'js': setJsCode(value); break;
      default: break;
    }
  };

  const lineCount = getCurrentCode().split("\n").length;
  const lineNums = Array.from({ length: lineCount }, (_, i) => i + 1).join("\n");

  // Resize handler
  const startResizing = (e) => {
    isResizing.current = true;
    document.addEventListener('mousemove', handleResize);
    document.addEventListener('mouseup', stopResizing);
  };

  const handleResize = (e) => {
    if (!isResizing.current) return;
    const newHeight = window.innerHeight - e.clientY - 50;
    if (newHeight > 200 && newHeight < 800) {
      setOutputPanelHeight(newHeight);
    }
  };

  const stopResizing = () => {
    isResizing.current = false;
    document.removeEventListener('mousemove', handleResize);
    document.removeEventListener('mouseup', stopResizing);
  };

  const toggleFullscreen = () => {
    const element = document.querySelector('.pg-section');
    if (!fullscreen) {
      element.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setFullscreen(!fullscreen);
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
          <span className="pg-title">KEYUR.DEV — MULTI-FILE CODE EDITOR</span>
          <div className="pg-topbar-right">
            <button className="pg-icon-btn" onClick={() => setShowSidebar(!showSidebar)}>
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
                <h3>Templates</h3>
              </div>
              <select className="pg-sidebar-select" value={category} onChange={(e) => setCategory(e.target.value)}>
                {Object.keys(TEMPLATES).map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <select className="pg-sidebar-select" value={selectedTemplate} onChange={handleTemplate}>
                <option value="">— Choose Template —</option>
                {TEMPLATES[category] && Object.keys(TEMPLATES[category]).map((key) => (
                  <option key={key} value={key}>{TEMPLATES[category][key].label || key}</option>
                ))}
              </select>
              
              <div className="pg-sidebar-divider"></div>
              
              <div className="pg-sidebar-actions">
                <button className="pg-sidebar-btn" onClick={saveToLocalStorage}>💾 Save</button>
                <button className="pg-sidebar-btn" onClick={loadFromLocalStorage}>📂 Load</button>
                <button className="pg-sidebar-btn" onClick={downloadProject}>⬇️ Download</button>
                <button className="pg-sidebar-btn" onClick={toggleFullscreen}>🖥️ Fullscreen</button>
              </div>
            </div>
          )}

          {/* Main Content */}
          <div className="pg-main-content">
            {/* File Tabs */}
            <div className="pg-file-tabs">
              <button 
                className={`pg-file-tab ${activeFile === 'html' ? 'active' : ''}`}
                onClick={() => setActiveFile('html')}
              >
                📄 index.html
              </button>
              <button 
                className={`pg-file-tab ${activeFile === 'css' ? 'active' : ''}`}
                onClick={() => setActiveFile('css')}
              >
                🎨 styles.css
              </button>
              <button 
                className={`pg-file-tab ${activeFile === 'js' ? 'active' : ''}`}
                onClick={() => setActiveFile('js')}
              >
                ⚡ script.js
              </button>
              <div className="pg-tab-actions">
                <button className="pg-icon-btn" onClick={copyCode}>
                  {copied ? "✓" : "📋"}
                </button>
                <button className="pg-icon-btn" onClick={resetCode}>⟳</button>
                <button className="pg-run-btn" onClick={runCode}>▶ Run</button>
              </div>
            </div>

            {/* Editor and Output */}
            <div className="pg-editor-output">
              {/* Editor */}
              <div className="pg-editor-area">
                <div className="pg-editor-header">
                  <span className="pg-lang-badge">
                    {activeFile === 'html' ? 'HTML' : activeFile === 'css' ? 'CSS' : 'JavaScript'}
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
                    style={{ fontSize: `${fontSize}px` }}
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
                  <span className="pg-output-label">Live Preview</span>
                  <button className="pg-refresh-btn" onClick={runCode}>⟳ Refresh</button>
                </div>
                <iframe 
                  key={iframeKey}
                  className="pg-output-iframe"
                  title="output"
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                  srcDoc={generateFullHTML()}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pg-footer">
          <span className="pg-prompt">$</span>
          <span className="pg-footer-slogan">
            💡 Tip: Edit HTML, CSS, and JavaScript in separate panels • Press Ctrl+S to save
          </span>
          <span className="pg-footer-right">© 2025 Keyur Sanglikar</span>
        </div>
      </section>
    </div>
  );
}
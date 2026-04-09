import React, { useState, useRef, useEffect, useCallback } from "react";
import "./CSS/CodePlayground.css";

// ─── MASSIVE TEMPLATE LIBRARY (60+ TEMPLATES) ──────────────────────────────────
const TEMPLATES = {
  "React Hooks": {
    "Counter State": { isReact: true, code: `function App() {\n  const [count, setCount] = React.useState(0);\n  return (\n    <div style={{textAlign: 'center', padding: '50px'}}>\n      <h1>{count}</h1>\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n    </div>\n  );\n}\nReactDOM.createRoot(document.getElementById('root')).render(<App />);` },
    "Effect Timer": { isReact: true, code: `function Timer() {\n  const [seconds, setSeconds] = React.useState(0);\n  React.useEffect(() => {\n    const interval = setInterval(() => setSeconds(s => s + 1), 1000);\n    return () => clearInterval(interval);\n  }, []);\n  return <h1>Time: {seconds}s</h1>;\n}\nReactDOM.createRoot(document.getElementById('root')).render(<Timer />);` },
    "Window Width": { isReact: true, code: `function Width() {\n  const [w, setW] = React.useState(window.innerWidth);\n  React.useEffect(() => {\n    const handle = () => setW(window.innerWidth);\n    window.addEventListener('resize', handle);\n    return () => window.removeEventListener('resize', handle);\n  }, []);\n  return <h2>Window Width: {w}px</h2>;\n}\nReactDOM.createRoot(document.getElementById('root')).render(<Width />);` },
    "Previous Value": { isReact: true, code: `function Prev() {\n  const [count, setCount] = React.useState(0);\n  const prev = React.useRef();\n  React.useEffect(() => { prev.current = count; });\n  return (<div><h1>Now: {count}, Prev: {prev.current}</h1><button onClick={()=>setCount(count+1)}>Add</button></div>);\n}\nReactDOM.createRoot(document.getElementById('root')).render(<Prev />);` },
    "Reducer Todo": { isReact: true, code: `function App() {\n  const reducer = (state, action) => { if(action.type==='add') return [...state, 'New Item']; return state; };\n  const [state, dispatch] = React.useReducer(reducer, []);\n  return (<div><button onClick={()=>dispatch({type:'add'})}>Add</button><ul>{state.map((item,i)=><li key={i}>{item}</li>)}</ul></div>);\n}\nReactDOM.createRoot(document.getElementById('root')).render(<App />);` },
    "Memoized List": { isReact: true, code: `function App() { const [c, setC] = React.useState(0); const list = React.useMemo(() => [1,2,3], []); return <div>Count: {c} <button onClick={()=>setC(c+1)}>+</button></div>; }\nReactDOM.createRoot(document.getElementById('root')).render(<App />);` },
    "Callback Hook": { isReact: true, code: `function App() { const [c, setC] = React.useState(0); const log = React.useCallback(() => console.log(c), [c]); return <button onClick={log}>Log</button>; }\nReactDOM.createRoot(document.getElementById('root')).render(<App />);` },
    "Ref Focus": { isReact: true, code: `function App() { const inputRef = React.useRef(); return <div><input ref={inputRef}/><button onClick={()=>inputRef.current.focus()}>Focus</button></div>; }\nReactDOM.createRoot(document.getElementById('root')).render(<App />);` }
  },
  "UI Cards": {
    "Glassmorphism": { isReact: false, html: `<div class="card"><h1>Glass</h1></div>`, css: `body{background:#111;display:flex;justify-content:center;align-items:center;height:100vh}.card{background:rgba(255,255,255,0.1);backdrop-filter:blur(10px);padding:50px;border-radius:20px;color:white;border:1px solid rgba(255,255,255,0.2)}` },
    "Neumorphic": { isReact: false, html: `<div class="n-card">Push</div>`, css: `body{background:#e0e0e0;display:flex;justify-content:center;align-items:center;height:100vh}.n-card{width:150px;height:150px;background:#e0e0e0;border-radius:30px;box-shadow:20px 20px 60px #bebebe,-20px -20px 60px #ffffff;display:flex;justify-content:center;align-items:center}` },
    "Gradient Border": { isReact: false, html: `<div class="g-card">Content</div>`, css: `body{background:#000;display:flex;justify-content:center;align-items:center;height:100vh}.g-card{padding:20px;background:#111;color:white;border: 5px solid; border-image: linear-gradient(to right, red, purple) 1;}` },
    "3D Tilt Card": { isReact: false, html: `<div class="tilt">Hover Me</div>`, css: `.tilt{width:200px;height:250px;background:teal;transition:0.5s;transform-style:preserve-3d;color:white;display:flex;align-items:center;justify-content:center}.tilt:hover{transform:rotateY(20deg) rotateX(10deg)}` },
    "Profile Card": { isReact: false, html: `<div class="p-card"><div class="img"></div><h3>John Doe</h3></div>`, css: `.p-card{width:200px;background:white;border-radius:10px;overflow:hidden;text-align:center}.img{height:100px;background:#ddd}` },
    "NFT Card": { isReact: false, html: `<div class="nft"><h1>#4421</h1></div>`, css: `.nft{width:200px;height:300px;background:#1a1a1a;color:cyan;border:1px solid cyan;padding:20px}` },
    "Pricing Card": { isReact: false, html: `<div class="price"><h2>$19</h2><button>Buy</button></div>`, css: `.price{padding:40px;background:white;border-radius:20px;box-shadow:0 10px 30px rgba(0,0,0,0.1)}` },
    "Skeleton Loading": { isReact: false, html: `<div class="skel"></div>`, css: `.skel{width:100%;height:20px;background:#eee;position:relative;overflow:hidden}.skel::after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(90deg,transparent,#fff,transparent);animation:load 1s infinite}@keyframes load{0%{left:-100%}100%{left:100%}}` }
  },
  "Buttons": {
    "Neon Glow": { isReact: false, html: `<button class="neon">GLOW</button>`, css: `.neon{padding:10px 20px;background:transparent;border:2px solid #0ff;color:#0ff;text-shadow:0 0 10px #0ff;box-shadow:0 0 10px #0ff;cursor:pointer}` },
    "Slide Fill": { isReact: false, html: `<button class="slide">Slide</button>`, css: `.slide{padding:10px 20px;border:2px solid #333;background:none;position:relative;z-index:1;overflow:hidden}.slide::before{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:#333;transition:0.3s;z-index:-1}.slide:hover::before{left:0}.slide:hover{color:white}` },
    "Floating Action": { isReact: false, html: `<button class="fab">+</button>`, css: `.fab{width:60px;height:60px;border-radius:50%;background:blue;color:white;font-size:24px;border:none;box-shadow:0 5px 15px rgba(0,0,0,0.3)}` },
    "Liquid Button": { isReact: false, html: `<button>Liquid</button>`, css: `button{background:orange;padding:15px 30px;border-radius:50px;border:none;color:white;font-weight:bold}` },
    "3D Button": { isReact: false, html: `<button class="btn3d">Push</button>`, css: `.btn3d{padding:10px 20px;background:red;border:none;border-bottom:5px solid darkred;color:white}.btn3d:active{border-bottom:0;transform:translateY(5px)}` },
    "Loading Button": { isReact: false, html: `<button>Saving...</button>`, css: `button{padding:10px 20px;opacity:0.7;cursor:not-allowed}` },
    "Ghost Button": { isReact: false, html: `<button>Ghost</button>`, css: `button{background:transparent;border:1px solid #333;padding:10px 20px}` },
    "Icon Button": { isReact: false, html: `<button>🏠 Home</button>`, css: `button{display:flex;align-items:center;gap:10px}` }
  },
  "Animations": {
    "Pulse Loop": { isReact: false, html: `<div class="pulse"></div>`, css: `.pulse{width:50px;height:50px;background:red;border-radius:50%;animation:p 1s infinite}@keyframes p{0%{transform:scale(1);opacity:1}100%{transform:scale(2);opacity:0}}` },
    "Infinite Spin": { isReact: false, html: `<div class="loader"></div>`, css: `.loader{width:40px;height:40px;border:4px solid #f3f3f3;border-top:4px solid blue;border-radius:50%;animation:s 1s linear infinite}@keyframes s{100%{transform:rotate(360deg)}}` },
    "Bouncing Dots": { isReact: false, html: `<div class="dots"><span></span><span></span><span></span></div>`, css: `.dots span{display:inline-block;width:10px;height:10px;background:#333;border-radius:50%;margin:5px;animation:b 0.6s infinite alternate}.dots span:nth-child(2){animation-delay:0.2s}.dots span:nth-child(3){animation-delay:0.4s}@keyframes b{to{transform:translateY(-10px)}}` },
    "Shake Effect": { isReact: false, html: `<h1 class="shake">Shake!</h1>`, css: `.shake:hover{animation:sh 0.1s infinite}@keyframes sh{0%{transform:translate(0)}50%{transform:translate(5px)}100%{transform:translate(0)}}` },
    "Fade In Text": { isReact: false, html: `<p class="fade">Hello World</p>`, css: `.fade{animation: fi 2s;}@keyframes fi{from{opacity:0}to{opacity:1}}` },
    "Typewriter": { isReact: false, html: `<div class="type">Coding is fun...</div>`, css: `.type{width:0;overflow:hidden;white-space:nowrap;border-right:2px solid;animation:tw 3s steps(20) forwards}@keyframes tw{to{width:100%}}` },
    "Gradient Text": { isReact: false, html: `<h1>Colorful</h1>`, css: `h1{background:linear-gradient(to right, orange, red);-webkit-background-clip:text;color:transparent}` },
    "Float Animation": { isReact: false, html: `<div class="float">☁️</div>`, css: `.float{font-size:50px;animation:fl 3s infinite ease-in-out}@keyframes fl{0%,100%{transform:translateY(0)}50%{transform:translateY(-20px)}}` }
  },
  "Web Components": {
    "Custom Navbar": { isReact: false, html: `<nav><a>Home</a><a>About</a></nav>`, css: `nav{background:#333;padding:15px;display:flex;gap:20px}a{color:white;text-decoration:none}` },
    "Accordion": { isReact: false, html: `<details><summary>Click Me</summary><p>Hidden Content</p></details>`, css: `details{background:#eee;padding:10px;border-radius:5px}` },
    "Tab Switcher": { isReact: true, code: `function App() { const [t, setT] = React.useState(1); return (<div><button onClick={()=>setT(1)}>T1</button><button onClick={()=>setT(2)}>T2</button><div>Tab {t} content</div></div>); }\nReactDOM.createRoot(document.getElementById('root')).render(<App />);` },
    "Modal": { isReact: true, code: `function App() { const [o, setO] = React.useState(false); return (<div><button onClick={()=>setO(true)}>Open</button>{o && <div style={{position:'fixed',top:0,left:0,width:'100%',height:'100%',background:'rgba(0,0,0,0.5)'}}><div style={{background:'white',margin:'100px auto',width:'200px',padding:'20px'}}><button onClick={()=>setO(false)}>Close</button></div></div>}</div>); }\nReactDOM.createRoot(document.getElementById('root')).render(<App />);` },
    "Dark Mode": { isReact: true, code: `function App() { const [d, setD] = React.useState(false); return (<div style={{background:d?'#333':'#fff',color:d?'#fff':'#000',height:'100vh'}}><button onClick={()=>setD(!d)}>Toggle</button></div>); }\nReactDOM.createRoot(document.getElementById('root')).render(<App />);` },
    "Breadcrumbs": { isReact: false, html: `<div class="bc">Home / Blog / Article</div>`, css: `.bc{color:#666;font-size:14px}` },
    "Pagination": { isReact: false, html: `<div class="pg"><button>1</button><button>2</button><button>3</button></div>`, css: `.pg button{margin:2px;padding:5px 10px}` },
    "Badge": { isReact: false, html: `<span>Message <mark>5</mark></span>`, css: `mark{background:red;color:white;border-radius:50%;padding:2px 6px;font-size:10px}` }
  },
  "Forms": {
    "Simple Login": { isReact: false, html: `<form><input placeholder="User"/><br/><input type="password"/><br/><button>Login</button></form>`, css: `input{margin-bottom:10px;padding:8px}` },
    "Input Glow": { isReact: false, html: `<input class="glow" />`, css: `.glow:focus{outline:none;border:2px solid cyan;box-shadow:0 0 10px cyan}` },
    "Search Bar": { isReact: false, html: `<div class="search"><input/><span>🔍</span></div>`, css: `.search{display:flex;align-items:center;border:1px solid #ccc;border-radius:20px;padding:5px 15px}` },
    "Checkbox Toggle": { isReact: false, html: `<label class="sw"><input type="checkbox"/><span class="sl"></span></label>`, css: `.sw{position:relative;display:inline-block;width:50px;height:24px}.sw input{display:none}.sl{position:absolute;top:0;left:0;right:0;bottom:0;background:#ccc;border-radius:30px;transition:0.4s}.sw input:checked + .sl{background:blue}` },
    "Validation UI": { isReact: true, code: `function App() { const [v, setV] = React.useState(''); return (<div><input onChange={(e)=>setV(e.target.value)}/><p style={{color:v.length<5?'red':'green'}}>{v.length<5?'Too short':'Valid'}</p></div>); }\nReactDOM.createRoot(document.getElementById('root')).render(<App />);` },
    "Range Slider": { isReact: false, html: `<input type="range"/>`, css: `input{width:100%}` },
    "File Upload": { isReact: false, html: `<input type="file" id="f"/><label for="f">Upload</label>`, css: `input{display:none}label{background:blue;color:white;padding:10px}` },
    "Star Rating": { isReact: true, code: `function App() { const [s, setS] = React.useState(0); return (<div>{[1,2,3,4,5].map(i=><span key={i} onClick={()=>setS(i)} style={{cursor:'pointer',fontSize:'30px',color:i<=s?'gold':'#ccc'}}>★</span>)}</div>); }\nReactDOM.createRoot(document.getElementById('root')).render(<App />);` }
  },
  "Data": {
    "Fetch API": { isReact: true, code: `function App() {\n  const [data, setData] = React.useState([]);\n  React.useEffect(() => {\n    fetch('https://jsonplaceholder.typicode.com/posts/1').then(res=>res.json()).then(json=>setData(json));\n  }, []);\n  return <div><h1>{data.title}</h1><p>{data.body}</p></div>;\n}\nReactDOM.createRoot(document.getElementById('root')).render(<App />);` },
    "Search Filter": { isReact: true, code: `function App() { const items = ['Apple','Banana','Cherry']; const [q, setQ] = React.useState(''); return (<div><input onChange={e=>setQ(e.target.value)}/>{items.filter(i=>i.toLowerCase().includes(q.toLowerCase())).map(i=><p>{i}</p>)}</div>); }\nReactDOM.createRoot(document.getElementById('root')).render(<App />);` },
    "Sortable List": { isReact: true, code: `function App() { const [list, setList] = React.useState([3,1,2]); return (<div><button onClick={()=>setList([...list].sort())}>Sort</button>{list.map(i=><p>{i}</p>)}</div>); }\nReactDOM.createRoot(document.getElementById('root')).render(<App />);` },
    "Simple Graph": { isReact: false, html: `<div style="display:flex;align-items:baseline;gap:5px"><div style="width:20px;height:40px;background:red"></div><div style="width:20px;height:80px;background:blue"></div></div>`, css: `` },
    "Grid Layout": { isReact: false, html: `<div class="grid"><div>1</div><div>2</div><div>3</div></div>`, css: `.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.grid div{background:#ddd;padding:20px}` },
    "Flex Wrap": { isReact: false, html: `<div class="f"><div></div><div></div><div></div></div>`, css: `.f{display:flex;wrap:wrap;gap:10px}.f div{width:100px;height:100px;background:teal}` },
    "Local Storage": { isReact: true, code: `function App() { const [n, setN] = React.useState(localStorage.getItem('n')||''); return (<input value={n} onChange={e=>{setN(e.target.value);localStorage.setItem('n',e.target.value)}}/>); }\nReactDOM.createRoot(document.getElementById('root')).render(<App />);` },
    "Table UI": { isReact: false, html: `<table><tr><th>ID</th><th>Name</th></tr><tr><td>1</td><td>Test</td></tr></table>`, css: `table{width:100%;border-collapse:collapse}td,th{border:1px solid #ddd;padding:8px}` }
  },
  "Advanced": {
    "Custom Hook": { isReact: true, code: `function useToggle(init=false){ const [v, setV]=React.useState(init); const tg=()=>setV(!v); return [v,tg]; }\nfunction App(){ const [v,tg]=useToggle(); return <button onClick={tg}>{v?'ON':'OFF'}</button>; }\nReactDOM.createRoot(document.getElementById('root')).render(<App />);` },
    "Context API": { isReact: true, code: `const Ctx = React.createContext();\nfunction App(){ return <Ctx.Provider value="Hello"><Child/></Ctx.Provider>; }\nfunction Child(){ const v = React.useContext(Ctx); return <h1>{v}</h1>; }\nReactDOM.createRoot(document.getElementById('root')).render(<App />);` },
    "Error Boundary": { isReact: true, code: `class EB extends React.Component { state={err:null}; static getDerivedStateFromError(e){return {err:e}} render(){ if(this.state.err) return <h1>Error</h1>; return this.props.children; } }\nReactDOM.createRoot(document.getElementById('root')).render(<EB>Test</EB>);` },
    "Portals": { isReact: true, code: `function App(){ return ReactDOM.createPortal(<h1>Portal</h1>, document.body); }\nReactDOM.createRoot(document.getElementById('root')).render(<App />);` },
    "Lazy Loading": { isReact: true, code: `const Lazy = React.lazy(()=>new Promise(r=>setTimeout(()=>r({default:()=><div>Loaded</div>}),2000)));\nfunction App(){ return <React.Suspense fallback="Loading..."><Lazy/></React.Suspense>; }\nReactDOM.createRoot(document.getElementById('root')).render(<App />);` },
    "Click Outside": { isReact: true, code: `function App(){ const ref=React.useRef(); React.useEffect(()=>{ const h=(e)=>{if(!ref.current.contains(e.target)) alert('outside')}; document.addEventListener('mousedown',h); return ()=>document.removeEventListener('mousedown',h); },[]); return <div ref={ref} style={{background:'red',padding:20}}>Inside</div>; }\nReactDOM.createRoot(document.getElementById('root')).render(<App />);` },
    "Debounced Input": { isReact: true, code: `function App(){ const [val,setVal]=React.useState(''); React.useEffect(()=>{ const h=setTimeout(()=>console.log(val),500); return ()=>clearTimeout(h); },[val]); return <input onChange={e=>setVal(e.target.value)}/>; }\nReactDOM.createRoot(document.getElementById('root')).render(<App />);` },
    "Canvas React": { isReact: true, code: `function App(){ const r=React.useRef(); React.useEffect(()=>{ const ctx=r.current.getContext('2d'); ctx.fillRect(10,10,50,50); },[]); return <canvas ref={r}/>; }\nReactDOM.createRoot(document.getElementById('root')).render(<App />);` }
  }
};

export default function CodePlayground() {
  const [html, setHtml] = useState("<h1>Hello World</h1>");
  const [css, setCss] = useState("h1 { color: #38bdf8; text-align: center; font-family: sans-serif; }");
  const [js, setJs] = useState("// Write JavaScript or React here");
  const [activeTab, setActiveTab] = useState("html");
  const [isReact, setIsReact] = useState(false);
  const [cat, setCat] = useState("React Hooks");

  const generateOutput = useCallback(() => {
    if (isReact) {
      return `
        <html>
          <head><style>${css}</style></head>
          <body>
            <div id="root"></div>
            <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
            <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
            <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
            <script type="text/babel">${js}</script>
          </body>
        </html>`;
    }
    return `
      <html>
        <head><style>${css}</style></head>
        <body>
          ${html}
          <script>${js}</script>
        </body>
      </html>`;
  }, [html, css, js, isReact]);

  const loadTemplate = (name) => {
    const t = TEMPLATES[cat][name];
    setIsReact(t.isReact);
    if (t.isReact) {
      setJs(t.code);
      setHtml(""); 
      setCss(t.css || "");
      setActiveTab("js");
    } else {
      setHtml(t.html || "");
      setCss(t.css || "");
      setJs(t.js || "");
      setActiveTab("html");
    }
  };

  return (
    <div className="playground-root">
      <div className="sidebar">
        <h3>Templates</h3>
        <select onChange={(e) => setCat(e.target.value)} value={cat}>
          {Object.keys(TEMPLATES).map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        <div className="template-list">
          {Object.keys(TEMPLATES[cat]).map(name => (
            <button key={name} onClick={() => loadTemplate(name)}>{name}</button>
          ))}
        </div>
      </div>

      <div className="editor-container">
        <div className="tabs">
          <button className={activeTab === "html" ? "active" : ""} onClick={() => setActiveTab("html")}>HTML</button>
          <button className={activeTab === "css" ? "active" : ""} onClick={() => setActiveTab("css")}>CSS</button>
          <button className={activeTab === "js" ? "active" : ""} onClick={() => setActiveTab("js")}>{isReact ? "JSX" : "JS"}</button>
          <div className="mode-toggle">
            <label>React Mode</label>
            <input type="checkbox" checked={isReact} onChange={(e) => setIsReact(e.target.checked)} />
          </div>
        </div>

        <div className="edit-area">
          {activeTab === "html" && <textarea value={html} onChange={(e) => setHtml(e.target.value)} spellCheck="false" />}
          {activeTab === "css" && <textarea value={css} onChange={(e) => setCss(e.target.value)} spellCheck="false" />}
          {activeTab === "js" && <textarea value={js} onChange={(e) => setJs(e.target.value)} spellCheck="false" />}
        </div>

        <div className="preview">
          <iframe title="preview" srcDoc={generateOutput()} />
        </div>
      </div>
    </div>
  );
}
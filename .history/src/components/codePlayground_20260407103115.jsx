import React, { useState, useEffect } from "react";
import "./CodePlayground.css";

const defaultFiles = {
  "index.html": {
    name: "index.html",
    language: "html",
    content: `<h1>Hello World</h1>`
  },
  "style.css": {
    name: "style.css",
    language: "css",
    content: `body { background: black; color: white; }`
  },
  "script.js": {
    name: "script.js",
    language: "javascript",
    content: `console.log("Hello JS");`
  }
};

const templates = {
  html: [
    {
      name: "Landing Page",
      files: {
        "index.html": {
          name: "index.html",
          language: "html",
          content: `<h1>Landing Page</h1>`
        }
      }
    }
  ],
  javascript: [
    {
      name: "Counter App",
      files: {
        "script.js": {
          name: "script.js",
          language: "javascript",
          content: `let count=0; console.log(count);`
        }
      }
    }
  ]
};

export default function CodePlayground() {
  const [files, setFiles] = useState(defaultFiles);
  const [activeFile, setActiveFile] = useState("index.html");
  const [output, setOutput] = useState("");

  const updateContent = (value) => {
    setFiles({
      ...files,
      [activeFile]: {
        ...files[activeFile],
        content: value
      }
    });
  };

  const createFile = () => {
    const name = prompt("Enter file name (.js, .py, etc)");
    if (!name) return;

    const ext = name.split(".").pop();
    setFiles({
      ...files,
      [name]: {
        name,
        language: ext,
        content: ""
      }
    });
    setActiveFile(name);
  };

  const runCode = () => {
    const html = files["index.html"]?.content || "";
    const css = files["style.css"]?.content || "";
    const js = files["script.js"]?.content || "";

    const combined = `
      <html>
      <style>${css}</style>
      <body>
      ${html}
      <script>
      try {
        ${js}
      } catch(e){ console.error(e) }
      </script>
      </body>
      </html>
    `;
    setOutput(combined);
  };

  const runTerminal = () => {
    const code = files[activeFile].content;
    let result = "";

    if (activeFile.endsWith(".js")) {
      try {
        result = eval(code);
      } catch (e) {
        result = e.message;
      }
    } else {
      result = "Terminal simulation for " + activeFile;
    }

    alert(result);
  };

  const loadTemplate = (lang) => {
    const t = templates[lang][0];
    setFiles(t.files);
    setActiveFile(Object.keys(t.files)[0]);
  };

  return (
    <div className="pg-container">
      <div className="pg-section">

        {/* TOP BAR */}
        <div className="pg-topbar">
          <div className="pg-title">CODE IDE</div>
          <button className="pg-icon-btn" onClick={createFile}>
            + New File
          </button>
          <button className="pg-run-btn" onClick={runCode}>
            Run Preview
          </button>
          <button className="pg-icon-btn" onClick={runTerminal}>
            Run Terminal
          </button>
        </div>

        <div className="pg-main-layout">

          {/* SIDEBAR */}
          <div className="pg-sidebar">
            <h3>Templates</h3>
            <button onClick={() => loadTemplate("html")}>
              HTML Template
            </button>
            <button onClick={() => loadTemplate("javascript")}>
              JS Template
            </button>

            <h3>Files</h3>
            {Object.keys(files).map((file) => (
              <div
                key={file}
                className="pg-sidebar-btn"
                onClick={() => setActiveFile(file)}
              >
                {file}
              </div>
            ))}
          </div>

          {/* MAIN */}
          <div className="pg-main-content">

            {/* FILE TABS */}
            <div className="pg-file-tabs">
              {Object.keys(files).map((file) => (
                <button
                  key={file}
                  className={
                    "pg-file-tab " +
                    (file === activeFile ? "active" : "")
                  }
                  onClick={() => setActiveFile(file)}
                >
                  {file}
                </button>
              ))}
            </div>

            {/* EDITOR */}
            <div className="pg-editor-area">
              <textarea
                className="pg-textarea"
                value={files[activeFile].content}
                onChange={(e) => updateContent(e.target.value)}
              />
            </div>

            {/* OUTPUT */}
            <div className="pg-output-area">
              <iframe
                title="preview"
                className="pg-output-iframe"
                srcDoc={output}
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
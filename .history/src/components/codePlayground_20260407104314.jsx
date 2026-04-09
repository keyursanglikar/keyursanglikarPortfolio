/* CodePlayground.css — Multi-File Editor Styles */
* { margin: 0; padding: 0; box-sizing: border-box; }

.pg-container {
  --bg-darkest: #050b14;
  --bg-darker: #060d1a;
  --bg-dark: #07101f;
  --bg-surface: #0a1525;
  --bg-elevated: #0f1a2e;
  --border-subtle: #0f2744;
  --border-muted: #1a3550;
  --border-default: #1e3a5f;
  --accent-primary: #38bdf8;
  --accent-primary-dim: #38bdf812;
  --accent-primary-mid: #38bdf830;
  --accent-secondary: #6366f1;
  --accent-success: #34d399;
  --accent-warning: #fbbf24;
  --accent-error: #ef4444;
  --text-primary: #f1f5f9;
  --text-secondary: #cbd5e1;
  --text-tertiary: #8a96a8;
  --text-muted: #4a5a78;
  --font-sans: 'Inter', 'Segoe UI', system-ui, sans-serif;
  --font-mono: 'Fira Code', 'Space Mono', 'Courier New', monospace;
  --transition-fast: 0.15s ease;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-full: 9999px;
  padding: 20px;
  background: var(--bg-darker);
  min-height: 100vh;
  font-family: var(--font-sans);
}

.pg-container.fullscreen { padding: 0; position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 9999; background: var(--bg-darker); }

.pg-section { background: var(--bg-dark); border-radius: var(--radius-lg); border: 1px solid var(--border-default); overflow: hidden; width: 100%; height: 100%; display: flex; flex-direction: column; box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5); }

.pg-topbar { display: flex; align-items: center; gap: 14px; padding: 12px 20px; background: var(--bg-surface); border-bottom: 1px solid var(--border-default); flex-shrink: 0; }
.pg-dots { display: flex; gap: 8px; }
.pg-dot { width: 12px; height: 12px; border-radius: 50%; }
.pg-dot-r { background: #ff5f57; }
.pg-dot-y { background: #febc2e; }
.pg-dot-g { background: #28c840; }
.pg-title { flex: 1; text-align: center; font-size: 11px; font-weight: 600; letter-spacing: 2px; color: var(--text-muted); text-transform: uppercase; font-family: var(--font-mono); }
.pg-topbar-right { display: flex; align-items: center; gap: 16px; }
.pg-mode-badge { font-size: 10px; padding: 4px 10px; background: var(--bg-darker); border: 1px solid var(--border-muted); border-radius: var(--radius-full); color: var(--text-tertiary); font-family: var(--font-mono); }
.pg-mode-badge.active { background: var(--accent-primary-dim); border-color: var(--accent-primary-mid); color: var(--accent-primary); }
.pg-autorun-label { display: flex; align-items: center; gap: 8px; font-size: 10px; color: var(--text-tertiary); cursor: pointer; text-transform: uppercase; }
.pg-autorun-label input { accent-color: var(--accent-primary); width: 14px; height: 14px; cursor: pointer; }

.pg-language-bar { display: flex; align-items: center; gap: 4px; padding: 8px 16px; background: var(--bg-surface); border-bottom: 1px solid var(--border-default); flex-wrap: wrap; }
.pg-lang-btn { padding: 6px 14px; background: transparent; border: 1px solid transparent; border-radius: var(--radius-md); color: var(--text-tertiary); font-size: 12px; font-weight: 500; cursor: pointer; display: flex; align-items: center; gap: 6px; }
.pg-lang-btn:hover { background: var(--bg-elevated); color: var(--text-secondary); border-color: var(--border-muted); }
.pg-lang-btn.active { background: var(--accent-primary-dim); border-color: var(--accent-primary-mid); color: var(--accent-primary); }

.pg-main-layout { display: flex; flex: 1; overflow: hidden; min-height: 0; }

.pg-sidebar { width: 280px; background: var(--bg-surface); border-right: 1px solid var(--border-default); padding: 20px 16px; display: flex; flex-direction: column; gap: 16px; overflow-y: auto; flex-shrink: 0; }
.pg-sidebar-header { display: flex; justify-content: space-between; align-items: center; }
.pg-sidebar-header h3 { color: var(--accent-primary); font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; font-family: var(--font-mono); }
.pg-template-count { font-size: 9px; color: var(--text-muted); background: var(--bg-darker); padding: 2px 8px; border-radius: var(--radius-full); }
.pg-sidebar-select { width: 100%; background: var(--bg-darker); color: var(--text-secondary); border: 1px solid var(--border-muted); border-radius: var(--radius-md); padding: 10px 12px; font-size: 12px; cursor: pointer; }
.pg-sidebar-select:hover { border-color: var(--accent-primary-mid); }
.pg-sidebar-divider { height: 1px; background: linear-gradient(90deg, transparent, var(--border-muted), transparent); margin: 8px 0; }
.pg-sidebar-actions { display: flex; flex-direction: column; gap: 8px; }
.pg-sidebar-btn { padding: 10px 14px; background: var(--bg-darker); border: 1px solid var(--border-muted); border-radius: var(--radius-md); color: var(--text-tertiary); font-size: 12px; cursor: pointer; text-align: left; display: flex; align-items: center; gap: 8px; }
.pg-sidebar-btn:hover { border-color: var(--accent-primary); color: var(--accent-primary); background: var(--bg-elevated); }
.pg-sidebar-info { margin-top: 16px; padding: 16px; background: var(--bg-darker); border-radius: var(--radius-lg); border-left: 3px solid var(--accent-primary); }
.pg-sidebar-info p { color: var(--accent-primary); font-size: 11px; font-weight: 600; margin-bottom: 10px; }
.pg-sidebar-info ul { list-style: none; }
.pg-sidebar-info li { color: var(--text-tertiary); font-size: 10px; padding: 4px 0 4px 16px; position: relative; }
.pg-sidebar-info li::before { content: "▹"; position: absolute; left: 0; color: var(--accent-primary); }

.pg-file-list { display: flex; flex-direction: column; gap: 4px; max-height: 200px; overflow-y: auto; }
.pg-file-item { display: flex; justify-content: space-between; align-items: center; padding: 8px 12px; background: var(--bg-darker); border-radius: var(--radius-md); cursor: pointer; font-size: 12px; color: var(--text-tertiary); }
.pg-file-item.active { background: var(--accent-primary-dim); color: var(--accent-primary); border-left: 2px solid var(--accent-primary); }
.pg-file-delete { background: transparent; border: none; color: var(--accent-error); cursor: pointer; font-size: 16px; opacity: 0.7; }
.pg-file-delete:hover { opacity: 1; }
.pg-new-file { display: flex; gap: 8px; margin-bottom: 12px; }
.pg-new-file input { flex: 1; background: var(--bg-darker); border: 1px solid var(--border-muted); border-radius: var(--radius-md); padding: 6px 10px; color: white; font-size: 12px; }
.pg-new-file button { background: var(--accent-primary); border: none; border-radius: var(--radius-md); padding: 6px 12px; cursor: pointer; font-size: 11px; font-weight: bold; }

.pg-main-content { flex: 1; display: flex; flex-direction: column; overflow: hidden; min-width: 0; }
.pg-file-tabs { display: flex; align-items: center; background: var(--bg-surface); border-bottom: 1px solid var(--border-default); padding: 0 12px; flex-shrink: 0; gap: 2px; flex-wrap: wrap; }
.pg-file-tab { padding: 12px 24px; background: transparent; border: none; color: var(--text-tertiary); font-size: 12px; font-family: var(--font-mono); font-weight: 500; cursor: pointer; border-bottom: 2px solid transparent; }
.pg-file-tab:hover { color: var(--accent-primary); background: var(--bg-elevated); }
.pg-file-tab.active { color: var(--accent-primary); border-bottom-color: var(--accent-primary); }
.pg-tab-actions { margin-left: auto; display: flex; gap: 8px; align-items: center; }

.pg-editor-output { flex: 1; display: flex; flex-direction: column; overflow: hidden; min-height: 0; }
.pg-editor-area { flex: 1; display: flex; flex-direction: column; min-height: 200px; background: var(--bg-darker); }
.pg-editor-header { display: flex; align-items: center; justify-content: space-between; padding: 8px 16px; background: var(--bg-surface); border-bottom: 1px solid var(--border-default); }
.pg-lang-badge { font-size: 10px; font-weight: 600; color: var(--accent-primary); background: var(--accent-primary-dim); border: 1px solid var(--accent-primary-mid); border-radius: var(--radius-full); padding: 3px 12px; font-family: var(--font-mono); }
.pg-line-info { font-size: 10px; color: var(--text-muted); font-family: var(--font-mono); }
.pg-font-controls { display: flex; align-items: center; gap: 8px; }
.pg-icon-btn-sm { background: transparent; color: var(--text-tertiary); border: 1px solid var(--border-muted); border-radius: var(--radius-md); padding: 4px 10px; font-size: 11px; cursor: pointer; }
.pg-icon-btn-sm:hover { color: var(--accent-primary); border-color: var(--accent-primary-mid); }
.pg-editor-row { display: flex; flex: 1; overflow: hidden; }
.pg-line-nums { padding: 16px 12px; background: var(--bg-dark); color: var(--text-muted); font-size: 12px; line-height: 1.6; text-align: right; user-select: none; font-family: var(--font-mono); border-right: 1px solid var(--border-muted); overflow-y: auto; min-width: 52px; }
.pg-textarea { flex: 1; resize: none; background: var(--bg-darker); color: var(--text-primary); border: none; padding: 16px 20px; font-family: var(--font-mono); font-size: 13px; line-height: 1.6; outline: none; overflow: auto; white-space: pre-wrap; }
.pg-textarea:focus { outline: none; }

.pg-resize-handle { height: 8px; background: var(--bg-surface); cursor: row-resize; position: relative; }
.pg-resize-handle:hover { background: var(--accent-primary-mid); }
.pg-resize-line { height: 2px; background: var(--border-muted); margin: 3px auto; width: 60px; border-radius: var(--radius-full); }
.pg-resize-handle:hover .pg-resize-line { background: var(--accent-primary); width: 100px; }

.pg-output-area { display: flex; flex-direction: column; background: var(--bg-surface); border-top: 1px solid var(--border-default); flex-shrink: 0; min-height: 200px; }
.pg-output-header { display: flex; align-items: center; gap: 12px; padding: 8px 16px; background: var(--bg-surface); border-bottom: 1px solid var(--border-default); }
.pg-output-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--accent-success); animation: pulse 2s ease-in-out infinite; }
@keyframes pulse { 0%,100%{opacity:1;transform:scale(1);}50%{opacity:0.5;transform:scale(1.2);} }
.pg-output-label { font-size: 10px; font-weight: 600; color: var(--text-tertiary); letter-spacing: 1.5px; text-transform: uppercase; flex: 1; font-family: var(--font-mono); }
.pg-refresh-btn { background: transparent; border: 1px solid var(--border-muted); border-radius: var(--radius-md); padding: 5px 12px; color: var(--text-tertiary); font-size: 10px; cursor: pointer; }
.pg-refresh-btn:hover { border-color: var(--accent-primary); color: var(--accent-primary); }
.pg-output-iframe { flex: 1; border: none; background: white; width: 100%; min-height: 200px; }

.pg-icon-btn { background: transparent; color: var(--text-tertiary); border: 1px solid var(--border-muted); border-radius: var(--radius-md); padding: 6px 14px; font-size: 11px; font-family: var(--font-mono); cursor: pointer; }
.pg-icon-btn:hover { color: var(--accent-primary); border-color: var(--accent-primary-mid); background: var(--bg-elevated); }
.pg-run-btn { background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary)); color: var(--bg-darker); border: none; border-radius: var(--radius-full); padding: 8px 22px; font-size: 11px; font-family: var(--font-mono); font-weight: 700; cursor: pointer; transition: all 0.25s; box-shadow: 0 2px 8px rgba(56, 189, 248, 0.3); }
.pg-run-btn:hover { transform: translateY(-2px); box-shadow: 0 4px 16px rgba(56, 189, 248, 0.4); }

.pg-footer { display: flex; align-items: center; gap: 16px; padding: 10px 20px; background: var(--bg-surface); border-top: 1px solid var(--border-default); flex-shrink: 0; }
.pg-prompt { color: var(--accent-success); font-size: 14px; font-family: var(--font-mono); }
.pg-footer-slogan { flex: 1; font-size: 10px; color: var(--text-tertiary); font-family: var(--font-mono); }
.pg-footer-right { font-size: 10px; color: var(--text-muted); font-family: var(--font-mono); }

@media (max-width: 768px) {
  .pg-container { padding: 10px; }
  .pg-sidebar { position: fixed; left: 0; top: 0; height: 100%; width: 280px; z-index: 1000; transform: translateX(-100%); transition: transform 0.3s; }
  .pg-sidebar.open { transform: translateX(0); }
  .pg-language-bar { flex-wrap: wrap; }
  .pg-file-tab { padding: 8px 12px; font-size: 10px; }
  .pg-footer-slogan { font-size: 8px; }
}

@media (prefers-color-scheme: light) {
  .pg-container { --bg-darker: #f8fafc; --bg-dark: #ffffff; --bg-surface: #f1f5f9; --bg-elevated: #e2e8f0; --border-default: #cbd5e1; --text-primary: #0f172a; --text-secondary: #1e293b; --text-tertiary: #475569; }
  .pg-output-iframe { background: white; }
}
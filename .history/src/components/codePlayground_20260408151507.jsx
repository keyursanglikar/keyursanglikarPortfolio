import React, { useState, useRef, useEffect, useCallback } from "react";
import "./CSS/CodePlayground.css";

// ─── TEMPLATE LIBRARY WITH 70+ COMPONENTS ───────────────────────────────────────

// const TEMPLATES = {

  
//   ReactComponents: {
//     "useState Counter": {
//       label: "useState Counter ⚛️",
//       language: "react",
//       jsx: `// React useState Counter Component
// import React, { useState } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0);
  
//   return (
//     <div style={{ textAlign: 'center', padding: '40px' }}>
//       <h1 style={{ color: '#38bdf8', fontSize: '72px' }}>{count}</h1>
//       <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
//         <button onClick={() => setCount(count - 1)} style={buttonStyle}>-</button>
//         <button onClick={() => setCount(0)} style={buttonStyle}>Reset</button>
//         <button onClick={() => setCount(count + 1)} style={buttonStyle}>+</button>
//       </div>
//     </div>
//   );
// }

// const buttonStyle = {
//   padding: '10px 20px',
//   background: '#38bdf8',
//   border: 'none',
//   borderRadius: '8px',
//   cursor: 'pointer',
//   fontWeight: 'bold'
// };

// export default Counter;`,
//       css: `* {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }

// body {
//   min-height: 100vh;
//   background: linear-gradient(135deg, #1a1a2e, #16213e, #0f3460);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-family: 'Segoe UI', sans-serif;
// }`,
//       html: `<!DOCTYPE html>
// <html>
// <head>
//   <meta charset="UTF-8">
//   <title>React Counter</title>
// </head>
// <body>
//   <div id="root"></div>
// </body>
// </html>`
//     },
//     "Todo List App": {
//       label: "Todo List App ⚛️",
//       language: "react",
//       jsx: `// React Todo List Component
// import React, { useState } from 'react';

// function TodoApp() {
//   const [todos, setTodos] = useState([]);
//   const [input, setInput] = useState('');

//   const addTodo = () => {
//     if (input.trim()) {
//       setTodos([...todos, { text: input, completed: false, id: Date.now() }]);
//       setInput('');
//     }
//   };

//   const toggleTodo = (id) => {
//     setTodos(todos.map(todo =>
//       todo.id === id ? { ...todo, completed: !todo.completed } : todo
//     ));
//   };

//   const deleteTodo = (id) => {
//     setTodos(todos.filter(todo => todo.id !== id));
//   };

//   return (
//     <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
//       <h2 style={{ color: '#38bdf8' }}>Todo List</h2>
//       <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyPress={(e) => e.key === 'Enter' && addTodo()}
//           placeholder="Add a task..."
//           style={inputStyle}
//         />
//         <button onClick={addTodo} style={buttonStyle}>Add</button>
//       </div>
//       <div>
//         {todos.map(todo => (
//           <div key={todo.id} style={todoItemStyle}>
//             <input
//               type="checkbox"
//               checked={todo.completed}
//               onChange={() => toggleTodo(todo.id)}
//               style={{ marginRight: '10px' }}
//             />
//             <span style={{
//               textDecoration: todo.completed ? 'line-through' : 'none',
//               color: todo.completed ? '#8a96a8' : 'white',
//               flex: 1
//             }}>
//               {todo.text}
//             </span>
//             <button onClick={() => deleteTodo(todo.id)} style={deleteStyle}>×</button>
//           </div>
//         ))}
//       </div>
//       {todos.length === 0 && <p style={{ color: '#8a96a8', textAlign: 'center' }}>No tasks yet. Add one!</p>}
//     </div>
//   );
// }

// const inputStyle = {
//   flex: 1,
//   padding: '10px',
//   background: '#07101f',
//   border: '1px solid #0f2744',
//   borderRadius: '8px',
//   color: 'white',
//   outline: 'none'
// };

// const buttonStyle = {
//   padding: '10px 20px',
//   background: '#38bdf8',
//   border: 'none',
//   borderRadius: '8px',
//   cursor: 'pointer',
//   fontWeight: 'bold'
// };

// const todoItemStyle = {
//   display: 'flex',
//   alignItems: 'center',
//   padding: '10px',
//   background: '#07101f',
//   marginBottom: '8px',
//   borderRadius: '8px',
//   gap: '10px'
// };

// const deleteStyle = {
//   background: 'transparent',
//   border: 'none',
//   color: '#ef4444',
//   cursor: 'pointer',
//   fontSize: '18px'
// };

// export default TodoApp;`,
//       css: `* {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }

// body {
//   min-height: 100vh;
//   background: #060d1a;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-family: 'Segoe UI', sans-serif;
// }`,
//       html: `<!DOCTYPE html>
// <html>
// <head>
//   <meta charset="UTF-8">
//   <title>Todo App</title>
// </head>
// <body>
//   <div id="root"></div>
// </body>
// </html>`
//     }
//   },
  
//   HTML_CSS_JS: {
//     "Glassmorphism Card": {
//       label: "Glassmorphism Card 🎴",
//       language: "htmlcssjs",
//       html: `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Glassmorphism Card</title>
//     <link rel="stylesheet" href="styles.css">
// </head>
// <body>
//     <div class="glass-card">
//         <div class="card-avatar">✨</div>
//         <h2>Glassmorphism Card</h2>
//         <p>Modern UI with blur effect and smooth animations</p>
//         <span class="card-tag">Trending</span>
//         <button class="card-btn">Learn More →</button>
//     </div>
// </body>
// </html>`,
//       css: `* {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
// }

// body {
//     min-height: 100vh;
//     background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//     padding: 20px;
// }

// .glass-card {
//     background: rgba(255, 255, 255, 0.1);
//     backdrop-filter: blur(10px);
//     border-radius: 20px;
//     padding: 40px;
//     text-align: center;
//     color: white;
//     width: 320px;
//     border: 1px solid rgba(255, 255, 255, 0.2);
//     transition: transform 0.3s ease, box-shadow 0.3s ease;
//     cursor: pointer;
// }

// .glass-card:hover {
//     transform: translateY(-10px);
//     box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
// }

// .card-avatar {
//     width: 80px;
//     height: 80px;
//     background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
//     border-radius: 50%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin: 0 auto 20px;
//     font-size: 40px;
//     transition: transform 0.3s ease;
// }

// .glass-card:hover .card-avatar {
//     transform: scale(1.1);
// }

// h2 {
//     font-size: 24px;
//     margin-bottom: 10px;
// }

// p {
//     color: rgba(255, 255, 255, 0.8);
//     font-size: 14px;
//     margin-bottom: 20px;
//     line-height: 1.5;
// }

// .card-tag {
//     display: inline-block;
//     background: rgba(255, 255, 255, 0.2);
//     padding: 5px 15px;
//     border-radius: 20px;
//     font-size: 12px;
//     margin-bottom: 20px;
// }

// .card-btn {
//     background: rgba(255, 255, 255, 0.2);
//     border: 1px solid rgba(255, 255, 255, 0.3);
//     padding: 10px 20px;
//     border-radius: 25px;
//     color: white;
//     cursor: pointer;
//     transition: all 0.3s ease;
//     font-size: 14px;
// }

// .card-btn:hover {
//     background: white;
//     color: #667eea;
//     transform: scale(1.05);
// }`,
//       js: `// Glassmorphism Card Interactions
// document.addEventListener('DOMContentLoaded', function() {
//     const card = document.querySelector('.glass-card');
//     const btn = document.querySelector('.card-btn');
    
//     // Click animation for card
//     if (card) {
//         card.addEventListener('click', function(e) {
//             // Don't trigger if button was clicked
//             if (e.target === btn) return;
            
//             this.style.transform = 'scale(0.98)';
//             setTimeout(() => {
//                 this.style.transform = '';
//             }, 200);
//         });
//     }
    
//     // Button click handler
//     if (btn) {
//         btn.addEventListener('click', function(e) {
//             e.stopPropagation();
//             alert('✨ Welcome to Glassmorphism! This is a demo alert.');
            
//             // Add ripple effect
//             this.style.transform = 'scale(0.95)';
//             setTimeout(() => {
//                 this.style.transform = '';
//             }, 150);
//         });
//     }
    
//     // Console log
//     console.log('Glassmorphism Card loaded successfully!');
// });`
//     },
//     "Neon Buttons": {
//       label: "Neon Buttons 🔘",
//       language: "htmlcssjs",
//       html: `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Neon Buttons</title>
//     <link rel="stylesheet" href="styles.css">
// </head>
// <body>
//     <div class="container">
//         <h1>Neon Buttons</h1>
//         <div class="button-grid">
//             <button class="neon-btn neon-pink">Neon Pink</button>
//             <button class="neon-btn neon-blue">Neon Blue</button>
//             <button class="neon-btn neon-green">Neon Green</button>
//             <button class="neon-btn neon-purple">Neon Purple</button>
//             <button class="neon-btn neon-cyan">Neon Cyan</button>
//             <button class="neon-btn neon-orange">Neon Orange</button>
//         </div>
//         <p class="instruction">✨ Hover over buttons to see the neon glow effect</p>
//     </div>
// </body>
// </html>`,
//       css: `* {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
// }

// body {
//     min-height: 100vh;
//     background: #0a0a1a;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//     padding: 20px;
// }

// .container {
//     text-align: center;
// }

// h1 {
//     color: white;
//     font-size: 48px;
//     margin-bottom: 40px;
//     text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
// }

// .button-grid {
//     display: grid;
//     grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//     gap: 30px;
//     max-width: 800px;
//     margin: 0 auto 40px;
// }

// .neon-btn {
//     padding: 15px 30px;
//     font-size: 18px;
//     font-weight: bold;
//     background: transparent;
//     border: 2px solid;
//     border-radius: 10px;
//     cursor: pointer;
//     transition: all 0.3s ease;
//     position: relative;
//     overflow: hidden;
// }

// .neon-btn:hover {
//     transform: scale(1.05);
//     box-shadow: 0 0 20px currentColor;
// }

// .neon-pink {
//     color: #ff00de;
//     border-color: #ff00de;
// }

// .neon-pink:hover {
//     background: #ff00de;
//     color: #0a0a1a;
//     box-shadow: 0 0 30px #ff00de;
// }

// .neon-blue {
//     color: #00e0ff;
//     border-color: #00e0ff;
// }

// .neon-blue:hover {
//     background: #00e0ff;
//     color: #0a0a1a;
//     box-shadow: 0 0 30px #00e0ff;
// }

// .neon-green {
//     color: #00ff88;
//     border-color: #00ff88;
// }

// .neon-green:hover {
//     background: #00ff88;
//     color: #0a0a1a;
//     box-shadow: 0 0 30px #00ff88;
// }

// .neon-purple {
//     color: #b400ff;
//     border-color: #b400ff;
// }

// .neon-purple:hover {
//     background: #b400ff;
//     color: #0a0a1a;
//     box-shadow: 0 0 30px #b400ff;
// }

// .neon-cyan {
//     color: #00ffff;
//     border-color: #00ffff;
// }

// .neon-cyan:hover {
//     background: #00ffff;
//     color: #0a0a1a;
//     box-shadow: 0 0 30px #00ffff;
// }

// .neon-orange {
//     color: #ff6b00;
//     border-color: #ff6b00;
// }

// .neon-orange:hover {
//     background: #ff6b00;
//     color: #0a0a1a;
//     box-shadow: 0 0 30px #ff6b00;
// }

// .instruction {
//     color: #666;
//     font-size: 14px;
//     margin-top: 20px;
// }

// @media (max-width: 768px) {
//     h1 {
//         font-size: 32px;
//     }
    
//     .neon-btn {
//         padding: 12px 24px;
//         font-size: 14px;
//     }
// }`,
//       js: `// Neon Buttons Interaction
// document.addEventListener('DOMContentLoaded', function() {
//     const buttons = document.querySelectorAll('.neon-btn');
    
//     buttons.forEach(btn => {
//         // Click handler
//         btn.addEventListener('click', function(e) {
//             e.stopPropagation();
//             const color = this.classList[1].replace('neon-', '');
//             alert(\`✨ \${color.toUpperCase()} button clicked! Neon effect activated.\`);
            
//             // Ripple effect
//             this.style.transform = 'scale(0.95)';
//             setTimeout(() => {
//                 this.style.transform = '';
//             }, 150);
//         });
        
//         // Add sound effect simulation (visual feedback only)
//         btn.addEventListener('mouseenter', function() {
//             console.log(\`Hovering over \${this.textContent}\`);
//         });
//     });
    
//     console.log('Neon Buttons loaded! Hover over buttons to see the glow effect.');
// });`
//     },
//     "Animated Gradient Background": {
//       label: "Animated Gradient BG 🌈",
//       language: "htmlcssjs",
//       html: `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Animated Gradient Background</title>
//     <link rel="stylesheet" href="styles.css">
// </head>
// <body>
//     <div class="content">
//         <h1>Animated Gradient</h1>
//         <p>Beautiful moving gradient background</p>
//         <button class="gradient-btn" onclick="changeGradient()">Change Colors</button>
//     </div>
// </body>
// </html>`,
//       css: `* {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
// }

// body {
//     min-height: 100vh;
//     background: linear-gradient(270deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ff6b6b);
//     background-size: 400% 400%;
//     animation: gradientShift 10s ease infinite;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
// }

// @keyframes gradientShift {
//     0% {
//         background-position: 0% 50%;
//     }
//     50% {
//         background-position: 100% 50%;
//     }
//     100% {
//         background-position: 0% 50%;
//     }
// }

// .content {
//     text-align: center;
//     background: rgba(0, 0, 0, 0.6);
//     backdrop-filter: blur(10px);
//     padding: 50px;
//     border-radius: 20px;
//     animation: fadeInUp 1s ease;
// }

// @keyframes fadeInUp {
//     from {
//         opacity: 0;
//         transform: translateY(30px);
//     }
//     to {
//         opacity: 1;
//         transform: translateY(0);
//     }
// }

// h1 {
//     font-size: 56px;
//     color: white;
//     margin-bottom: 20px;
//     text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
// }

// p {
//     font-size: 20px;
//     color: rgba(255, 255, 255, 0.9);
//     margin-bottom: 30px;
// }

// .gradient-btn {
//     padding: 12px 30px;
//     font-size: 16px;
//     font-weight: bold;
//     background: white;
//     color: #333;
//     border: none;
//     border-radius: 50px;
//     cursor: pointer;
//     transition: all 0.3s ease;
// }

// .gradient-btn:hover {
//     transform: scale(1.05);
//     box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
// }

// @media (max-width: 768px) {
//     h1 {
//         font-size: 36px;
//     }
    
//     p {
//         font-size: 16px;
//     }
    
//     .content {
//         padding: 30px;
//         margin: 20px;
//     }
// }`,
//       js: `// Animated Gradient Background with Interactive Color Change
// let colorIndex = 0;

// const colorSets = [
//     ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4'],
//     ['#f093fb', '#f5576c', '#4facfe', '#00f2fe'],
//     ['#fa709a', '#fee140', '#667eea', '#764ba2'],
//     ['#a8edea', '#fed6e3', '#ff9a9e', '#fad0c4'],
//     ['#89f7fe', '#66a6ff', '#ffecd2', '#fcb69f']
// ];

// function changeGradient() {
//     colorIndex = (colorIndex + 1) % colorSets.length;
//     const colors = colorSets[colorIndex];
//     const gradientString = \`linear-gradient(270deg, \${colors.join(', ')}, \${colors[0]})\`;
//     document.body.style.background = gradientString;
//     document.body.style.backgroundSize = '400% 400%';
    
//     // Add animation class
//     const btn = document.querySelector('.gradient-btn');
//     btn.style.transform = 'scale(0.95)';
//     setTimeout(() => {
//         btn.style.transform = '';
//     }, 150);
    
//     console.log(\`Gradient changed to color set \${colorIndex + 1}\`);
// }

// // Add mouse movement effect to gradient
// document.addEventListener('DOMContentLoaded', function() {
//     console.log('Animated Gradient Background loaded!');
    
//     // Optional: Add parallax effect on mousemove
//     document.body.addEventListener('mousemove', function(e) {
//         const x = (e.clientX / window.innerWidth) * 100;
//         const y = (e.clientY / window.innerHeight) * 100;
//         document.body.style.backgroundPosition = \`\${x}% \${y}%\`;
//     });
// });`
//     },
//     "3D Flip Card": {
//       label: "3D Flip Card 🃏",
//       language: "htmlcssjs",
//       html: `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>3D Flip Card</title>
//     <link rel="stylesheet" href="styles.css">
// </head>
// <body>
//     <div class="flip-card">
//         <div class="flip-card-inner">
//             <div class="flip-card-front">
//                 <div class="card-icon">🎴</div>
//                 <h2>Front Side</h2>
//                 <p>Hover to flip the card</p>
//                 <span class="flip-hint">↺ Hover Me</span>
//             </div>
//             <div class="flip-card-back">
//                 <div class="card-icon">✨</div>
//                 <h2>Back Side</h2>
//                 <p>Amazing 3D flip effect!</p>
//                 <button class="flip-btn" onclick="alert('You flipped the card!')">Learn More</button>
//             </div>
//         </div>
//     </div>
// </body>
// </html>`,
//       css: `* {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
// }

// body {
//     min-height: 100vh;
//     background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//     padding: 20px;
// }

// .flip-card {
//     width: 350px;
//     height: 450px;
//     perspective: 1000px;
//     cursor: pointer;
// }

// .flip-card-inner {
//     position: relative;
//     width: 100%;
//     height: 100%;
//     text-align: center;
//     transition: transform 0.6s;
//     transform-style: preserve-3d;
// }

// .flip-card:hover .flip-card-inner {
//     transform: rotateY(180deg);
// }

// .flip-card-front, .flip-card-back {
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     backface-visibility: hidden;
//     border-radius: 20px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     padding: 30px;
// }

// .flip-card-front {
//     background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
//     color: white;
// }

// .flip-card-back {
//     background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
//     color: white;
//     transform: rotateY(180deg);
// }

// .card-icon {
//     font-size: 64px;
//     margin-bottom: 20px;
//     animation: bounce 2s ease infinite;
// }

// @keyframes bounce {
//     0%, 100% {
//         transform: translateY(0);
//     }
//     50% {
//         transform: translateY(-10px);
//     }
// }

// h2 {
//     font-size: 28px;
//     margin-bottom: 15px;
// }

// p {
//     font-size: 16px;
//     margin-bottom: 20px;
//     line-height: 1.5;
// }

// .flip-hint {
//     display: inline-block;
//     background: rgba(255, 255, 255, 0.2);
//     padding: 5px 15px;
//     border-radius: 20px;
//     font-size: 12px;
//     animation: pulse 1.5s ease infinite;
// }

// @keyframes pulse {
//     0%, 100% {
//         opacity: 1;
//     }
//     50% {
//         opacity: 0.5;
//     }
// }

// .flip-btn {
//     background: white;
//     color: #4facfe;
//     border: none;
//     padding: 10px 25px;
//     border-radius: 25px;
//     font-size: 14px;
//     font-weight: bold;
//     cursor: pointer;
//     transition: all 0.3s ease;
// }

// .flip-btn:hover {
//     transform: scale(1.05);
//     box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
// }

// @media (max-width: 480px) {
//     .flip-card {
//         width: 280px;
//         height: 380px;
//     }
    
//     h2 {
//         font-size: 22px;
//     }
    
//     .card-icon {
//         font-size: 48px;
//     }
// }`,
//       js: `// 3D Flip Card Interactions
// document.addEventListener('DOMContentLoaded', function() {
//     const flipCard = document.querySelector('.flip-card');
//     const flipBtn = document.querySelector('.flip-btn');
    
//     console.log('3D Flip Card loaded! Hover over the card to see the flip effect.');
    
//     // Add click to flip for mobile devices
//     if (window.innerWidth <= 768) {
//         let isFlipped = false;
//         flipCard.addEventListener('click', function() {
//             const inner = this.querySelector('.flip-card-inner');
//             if (!isFlipped) {
//                 inner.style.transform = 'rotateY(180deg)';
//                 isFlipped = true;
//             } else {
//                 inner.style.transform = '';
//                 isFlipped = false;
//             }
//         });
//     }
    
//     // Button click handler
//     if (flipBtn) {
//         flipBtn.addEventListener('click', function(e) {
//             e.stopPropagation();
//             console.log('Learn More button clicked on back of card');
//         });
//     }
// });`
//     },
//     "Responsive Navbar": {
//       label: "Responsive Navbar 🧭",
//       language: "htmlcssjs",
//       html: `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Responsive Navbar</title>
//     <link rel="stylesheet" href="styles.css">
// </head>
// <body>
//     <nav class="navbar" id="navbar">
//         <div class="nav-brand">
//             <span class="logo-icon">🚀</span>
//             <span class="logo-text">BrandName</span>
//         </div>
//         <ul class="nav-menu" id="navMenu">
//             <li class="nav-item"><a href="#" class="nav-link active">Home</a></li>
//             <li class="nav-item"><a href="#" class="nav-link">About</a></li>
//             <li class="nav-item"><a href="#" class="nav-link">Services</a></li>
//             <li class="nav-item"><a href="#" class="nav-link">Portfolio</a></li>
//             <li class="nav-item"><a href="#" class="nav-link">Contact</a></li>
//         </ul>
//         <div class="hamburger" id="hamburger">
//             <span class="bar"></span>
//             <span class="bar"></span>
//             <span class="bar"></span>
//         </div>
//     </nav>
    
//     <div class="hero">
//         <h1>Responsive Navbar</h1>
//         <p>Resize your browser window to see the responsive design</p>
//         <button class="hero-btn" onclick="alert('Welcome to our website!')">Get Started</button>
//     </div>
// </body>
// </html>`,
//       css: `* {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
// }

// body {
//     font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//     background: #f5f5f5;
// }

// .navbar {
//     background: linear-gradient(135deg, #1a1a2e, #16213e);
//     height: 70px;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 0 50px;
//     position: sticky;
//     top: 0;
//     z-index: 1000;
//     box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
// }

// .nav-brand {
//     display: flex;
//     align-items: center;
//     gap: 10px;
// }

// .logo-icon {
//     font-size: 28px;
// }

// .logo-text {
//     color: white;
//     font-size: 24px;
//     font-weight: bold;
//     letter-spacing: 1px;
// }

// .nav-menu {
//     display: flex;
//     list-style: none;
//     gap: 30px;
// }

// .nav-link {
//     color: white;
//     text-decoration: none;
//     font-size: 16px;
//     transition: all 0.3s ease;
//     padding: 5px 10px;
//     border-radius: 5px;
// }

// .nav-link:hover {
//     color: #38bdf8;
//     background: rgba(56, 189, 248, 0.1);
// }

// .nav-link.active {
//     color: #38bdf8;
//     border-bottom: 2px solid #38bdf8;
// }

// .hamburger {
//     display: none;
//     flex-direction: column;
//     cursor: pointer;
// }

// .bar {
//     width: 25px;
//     height: 3px;
//     background: white;
//     margin: 3px 0;
//     transition: 0.3s;
// }

// .hero {
//     height: calc(100vh - 70px);
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     text-align: center;
//     background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//     color: white;
// }

// .hero h1 {
//     font-size: 48px;
//     margin-bottom: 20px;
//     animation: fadeInUp 0.8s ease;
// }

// .hero p {
//     font-size: 18px;
//     margin-bottom: 30px;
//     animation: fadeInUp 0.8s ease 0.2s both;
// }

// .hero-btn {
//     padding: 12px 30px;
//     font-size: 16px;
//     font-weight: bold;
//     background: white;
//     color: #667eea;
//     border: none;
//     border-radius: 50px;
//     cursor: pointer;
//     transition: all 0.3s ease;
//     animation: fadeInUp 0.8s ease 0.4s both;
// }

// .hero-btn:hover {
//     transform: scale(1.05);
//     box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
// }

// @keyframes fadeInUp {
//     from {
//         opacity: 0;
//         transform: translateY(30px);
//     }
//     to {
//         opacity: 1;
//         transform: translateY(0);
//     }
// }

// @media (max-width: 768px) {
//     .navbar {
//         padding: 0 20px;
//     }
    
//     .hamburger {
//         display: flex;
//     }
    
//     .nav-menu {
//         position: fixed;
//         left: -100%;
//         top: 70px;
//         flex-direction: column;
//         background: linear-gradient(135deg, #1a1a2e, #16213e);
//         width: 100%;
//         text-align: center;
//         transition: 0.3s;
//         padding: 20px 0;
//         gap: 15px;
//     }
    
//     .nav-menu.active {
//         left: 0;
//     }
    
//     .hamburger.active .bar:nth-child(1) {
//         transform: rotate(-45deg) translate(-5px, 6px);
//     }
    
//     .hamburger.active .bar:nth-child(2) {
//         opacity: 0;
//     }
    
//     .hamburger.active .bar:nth-child(3) {
//         transform: rotate(45deg) translate(-5px, -6px);
//     }
    
//     .hero h1 {
//         font-size: 32px;
//         padding: 0 20px;
//     }
    
//     .hero p {
//         font-size: 14px;
//         padding: 0 20px;
//     }
// }`,
//       js: `// Responsive Navbar with Mobile Menu
// document.addEventListener('DOMContentLoaded', function() {
//     const hamburger = document.getElementById('hamburger');
//     const navMenu = document.getElementById('navMenu');
//     const navLinks = document.querySelectorAll('.nav-link');
    
//     // Toggle mobile menu
//     if (hamburger) {
//         hamburger.addEventListener('click', function() {
//             this.classList.toggle('active');
//             navMenu.classList.toggle('active');
//         });
//     }
    
//     // Close menu when clicking on a link
//     navLinks.forEach(link => {
//         link.addEventListener('click', function(e) {
//             e.preventDefault();
            
//             // Remove active class from all links
//             navLinks.forEach(l => l.classList.remove('active'));
            
//             // Add active class to clicked link
//             this.classList.add('active');
            
//             // Close mobile menu
//             if (window.innerWidth <= 768) {
//                 hamburger.classList.remove('active');
//                 navMenu.classList.remove('active');
//             }
            
//             // Show which link was clicked
//             console.log(\`Navigated to: \${this.textContent}\`);
//         });
//     });
    
//     // Handle window resize
//     window.addEventListener('resize', function() {
//         if (window.innerWidth > 768) {
//             hamburger.classList.remove('active');
//             navMenu.classList.remove('active');
//         }
//     });
    
//     console.log('Responsive Navbar loaded!');
// });`
//     },
//     "Particle Background": {
//       label: "Particle Background ✨",
//       language: "htmlcssjs",
//       html: `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Particle Background</title>
//     <link rel="stylesheet" href="styles.css">
// </head>
// <body>
//     <canvas id="particleCanvas"></canvas>
//     <div class="overlay">
//         <h1>Particle System</h1>
//         <p>Interactive particle animation</p>
//         <button class="particle-btn" onclick="addParticleBurst()">Add Particles ✨</button>
//     </div>
// </body>
// </html>`,
//       css: `* {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
// }

// body {
//     overflow: hidden;
//     font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
// }

// #particleCanvas {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     display: block;
//     background: linear-gradient(135deg, #0a0a1a, #1a1a2e);
// }

// .overlay {
//     position: relative;
//     z-index: 10;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     height: 100vh;
//     text-align: center;
//     color: white;
//     pointer-events: auto;
// }

// h1 {
//     font-size: 56px;
//     margin-bottom: 20px;
//     text-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
//     animation: fadeIn 1s ease;
// }

// p {
//     font-size: 20px;
//     margin-bottom: 30px;
//     text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
//     animation: fadeIn 1s ease 0.2s both;
// }

// .particle-btn {
//     padding: 12px 30px;
//     font-size: 16px;
//     font-weight: bold;
//     background: linear-gradient(135deg, #38bdf8, #6366f1);
//     color: white;
//     border: none;
//     border-radius: 50px;
//     cursor: pointer;
//     transition: all 0.3s ease;
//     animation: fadeIn 1s ease 0.4s both;
// }

// .particle-btn:hover {
//     transform: scale(1.05);
//     box-shadow: 0 5px 20px rgba(56, 189, 248, 0.4);
// }

// @keyframes fadeIn {
//     from {
//         opacity: 0;
//         transform: translateY(20px);
//     }
//     to {
//         opacity: 1;
//         transform: translateY(0);
//     }
// }

// @media (max-width: 768px) {
//     h1 {
//         font-size: 36px;
//     }
    
//     p {
//         font-size: 16px;
//     }
// }`,
//       js: `// Particle Background System
// const canvas = document.getElementById('particleCanvas');
// const ctx = canvas.getContext('2d');

// let particles = [];
// let mouseX = null;
// let mouseY = null;

// function resizeCanvas() {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
// }

// window.addEventListener('resize', resizeCanvas);
// resizeCanvas();

// class Particle {
//     constructor(x, y) {
//         this.x = x || Math.random() * canvas.width;
//         this.y = y || Math.random() * canvas.height;
//         this.vx = (Math.random() - 0.5) * 2;
//         this.vy = (Math.random() - 0.5) * 2;
//         this.size = Math.random() * 3 + 1;
//         this.color = \`hsl(\${Math.random() * 360}, 70%, 60%)\`;
//         this.life = 1;
//         this.decay = 0.003 + Math.random() * 0.005;
//     }
    
//     update() {
//         this.x += this.vx;
//         this.y += this.vy;
//         this.life -= this.decay;
        
//         // Bounce off edges
//         if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
//         if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        
//         // Mouse interaction
//         if (mouseX && mouseY) {
//             const dx = this.x - mouseX;
//             const dy = this.y - mouseY;
//             const dist = Math.sqrt(dx * dx + dy * dy);
//             if (dist < 100) {
//                 const angle = Math.atan2(dy, dx);
//                 const force = (100 - dist) / 100;
//                 this.vx += Math.cos(angle) * force * 0.5;
//                 this.vy += Math.sin(angle) * force * 0.5;
//             }
//         }
        
//         return this.life > 0;
//     }
    
//     draw() {
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         ctx.fillStyle = this.color;
//         ctx.fill();
//     }
// }

// // Create initial particles
// for (let i = 0; i < 100; i++) {
//     particles.push(new Particle());
// }

// // Connect nearby particles
// function connectParticles() {
//     for (let i = 0; i < particles.length; i++) {
//         for (let j = i + 1; j < particles.length; j++) {
//             const dx = particles[i].x - particles[j].x;
//             const dy = particles[i].y - particles[j].y;
//             const dist = Math.sqrt(dx * dx + dy * dy);
            
//             if (dist < 120) {
//                 ctx.beginPath();
//                 const opacity = (1 - dist / 120) * particles[i].life * particles[j].life;
//                 ctx.strokeStyle = \`rgba(255, 255, 255, \${opacity * 0.5})\`;
//                 ctx.lineWidth = 0.5;
//                 ctx.moveTo(particles[i].x, particles[i].y);
//                 ctx.lineTo(particles[j].x, particles[j].y);
//                 ctx.stroke();
//             }
//         }
//     }
// }

// // Animate
// function animate() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
    
//     // Update and draw particles
//     particles = particles.filter(particle => {
//         const alive = particle.update();
//         if (alive) particle.draw();
//         return alive;
//     });
    
//     // Add new particles to maintain count
//     while (particles.length < 100) {
//         particles.push(new Particle());
//     }
    
//     // Connect particles with lines
//     connectParticles();
    
//     requestAnimationFrame(animate);
// }

// animate();

// // Mouse tracking
// canvas.addEventListener('mousemove', (e) => {
//     mouseX = e.clientX;
//     mouseY = e.clientY;
// });

// canvas.addEventListener('mouseleave', () => {
//     mouseX = null;
//     mouseY = null;
// });

// // Add particle burst function
// function addParticleBurst() {
//     for (let i = 0; i < 30; i++) {
//         const angle = Math.random() * Math.PI * 2;
//         const speed = Math.random() * 3 + 2;
//         const particle = new Particle(canvas.width / 2, canvas.height / 2);
//         particle.vx = Math.cos(angle) * speed;
//         particle.vy = Math.sin(angle) * speed;
//         particle.size = Math.random() * 4 + 2;
//         particle.color = \`hsl(\${Math.random() * 360}, 80%, 65%)\`;
//         particles.push(particle);
//     }
    
//     console.log('Particle burst added!');
// }

// console.log('Particle Background loaded! Move your mouse to interact with particles.');`
//     }
//   },
  
//   JavaScript: {
//     "Digital Clock": {
//       label: "Digital Clock 🕐",
//       language: "javascript",
//       code: `// Digital Clock with JavaScript
// function updateClock() {
//     const now = new Date();
//     const hours = now.getHours().toString().padStart(2, '0');
//     const minutes = now.getMinutes().toString().padStart(2, '0');
//     const seconds = now.getSeconds().toString().padStart(2, '0');
//     const timeString = \`\${hours}:\${minutes}:\${seconds}\`;
    
//     // Display in browser
//     if (typeof document !== 'undefined') {
//         let clockDiv = document.getElementById('clock');
//         if (!clockDiv) {
//             clockDiv = document.createElement('div');
//             clockDiv.id = 'clock';
//             clockDiv.style.cssText = 'font-size: 48px; font-family: monospace; text-align: center; padding: 40px; background: linear-gradient(135deg, #667eea, #764ba2); color: white; border-radius: 10px;';
//             document.body.innerHTML = '';
//             document.body.appendChild(clockDiv);
//         }
//         clockDiv.textContent = timeString;
//     }
//     console.log(timeString);
// }

// setInterval(updateClock, 1000);
// updateClock();`
//     },
//     "Weather App Mock": {
//       label: "Weather App Mock 🌤️",
//       language: "javascript",
//       code: `// Weather Application Mock
// async function getWeather(city = "New York") {
//     const mockWeather = {
//         temperature: Math.floor(Math.random() * 30) + 10,
//         condition: ["Sunny", "Cloudy", "Rainy", "Windy", "Snowy"][Math.floor(Math.random() * 5)],
//         humidity: Math.floor(Math.random() * 50) + 30,
//         windSpeed: Math.floor(Math.random() * 20) + 5,
//         city: city
//     };
    
//     const weatherHTML = \`
//         <div style="text-align: center; padding: 30px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 20px; color: white;">
//             <h2>🌤️ Weather in \${mockWeather.city}</h2>
//             <div style="font-size: 48px; margin: 20px 0;">\${mockWeather.temperature}°C</div>
//             <div style="font-size: 24px; margin: 10px 0;">\${mockWeather.condition}</div>
//             <div>💧 Humidity: \${mockWeather.humidity}%</div>
//             <div>💨 Wind: \${mockWeather.windSpeed} km/h</div>
//             <button onclick="getWeather(prompt('Enter city name:', 'London'))" style="margin-top: 20px; padding: 10px 20px; border: none; border-radius: 10px; cursor: pointer;">Search City</button>
//         </div>
//     \`;
    
//     if (typeof document !== 'undefined') {
//         document.body.innerHTML = weatherHTML;
//     }
    
//     console.log(\`Weather in \${mockWeather.city}: \${mockWeather.temperature}°C, \${mockWeather.condition}\`);
//     return mockWeather;
// }

// getWeather("New York");`
//     }
//   },
  
//   Python: {
//     "Hello World": {
//       label: "Hello World 🐍",
//       language: "python",
//       code: `# Simple Python Hello World
// print("Hello from Python!")
// name = input("What's your name? ")
// print(f"Nice to meet you, {name}!")

// # List comprehension example
// squares = [x**2 for x in range(10)]
// print(f"Squares: {squares}")`
//     },
//     "Fibonacci Sequence": {
//       label: "Fibonacci Sequence 🐍",
//       language: "python",
//       code: `# Fibonacci sequence generator
// def fibonacci(n):
//     a, b = 0, 1
//     sequence = []
//     for _ in range(n):
//         sequence.append(a)
//         a, b = b, a + b
//     return sequence

// n = 15
// result = fibonacci(n)
// print(f"First {n} Fibonacci numbers:")
// print(result)
// print(f"Golden ratio approx: {result[-1] / result[-2]:.6f}")`
//     }
//   },
  
//   TypeScript: {
//     "Basic Types": {
//       label: "Basic Types 📘",
//       language: "typescript",
//       code: `// TypeScript Basic Types Demo
// interface User {
//     id: number;
//     name: string;
//     email: string;
//     isActive: boolean;
// }

// function greetUser(user: User): string {
//     return \`Hello, \${user.name}! You are active: \${user.isActive}\`;
// }

// const newUser: User = {
//     id: 1,
//     name: "Alice Johnson",
//     email: "alice@example.com",
//     isActive: true
// };

// console.log(greetUser(newUser));`
//     }
//   },
  
//   SQL: {
//     "Basic Queries": {
//       label: "Basic SQL Queries 🗄️",
//       language: "sql",
//       code: `-- Basic SQL Queries Demo
// CREATE TABLE employees (
//     id INT PRIMARY KEY,
//     name VARCHAR(100),
//     department VARCHAR(50),
//     salary DECIMAL(10,2)
// );

// INSERT INTO employees VALUES 
// (1, 'John Doe', 'Engineering', 75000.00),
// (2, 'Jane Smith', 'Marketing', 68000.00),
// (3, 'Bob Johnson', 'Engineering', 82000.00);

// SELECT * FROM employees;
// SELECT name, salary FROM employees WHERE department = 'Engineering';
// SELECT department, AVG(salary) as avg_salary FROM employees GROUP BY department;`
//     }
//   },
  
//   Bash: {
//     "System Info": {
//       label: "System Info Script 🖥️",
//       language: "bash",
//       code: `#!/bin/bash
// # System Information Script

// echo "=== System Information ==="
// echo "Hostname: $(hostname)"
// echo "Current User: $(whoami)"
// echo "Current Directory: $(pwd)"
// echo "Date & Time: $(date)"
// echo ""
// echo "=== Disk Usage ==="
// df -h | head -5`
//     }
//   }
// };



const TEMPLATES = {
  // ==================== REACT COMPONENTS (20 templates) ====================
  ReactComponents: {
    "useState Counter": {
      label: "useState Counter ⚛️",
      language: "react",
      jsx: `import React, { useState } from 'react';

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
      css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { min-height: 100vh; background: linear-gradient(135deg, #1a1a2e, #16213e, #0f3460); display: flex; align-items: center; justify-content: center; font-family: 'Segoe UI', sans-serif; }`,
      html: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>React Counter</title></head><body><div id="root"></div></body></html>`
    },
    "Todo List App": {
      label: "Todo List App ✅",
      language: "react",
      jsx: `import React, { useState } from 'react';

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
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()} placeholder="Add a task..."
          style={{ flex: 1, padding: '10px', background: '#07101f', border: '1px solid #0f2744', borderRadius: '8px', color: 'white' }} />
        <button onClick={addTodo} style={{ padding: '10px 20px', background: '#38bdf8', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Add</button>
      </div>
      {todos.map(todo => (
        <div key={todo.id} style={{ display: 'flex', alignItems: 'center', padding: '10px', background: '#07101f', marginBottom: '8px', borderRadius: '8px', gap: '10px' }}>
          <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
          <span style={{ flex: 1, textDecoration: todo.completed ? 'line-through' : 'none', color: todo.completed ? '#8a96a8' : 'white' }}>{todo.text}</span>
          <button onClick={() => deleteTodo(todo.id)} style={{ background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer', fontSize: '18px' }}>×</button>
        </div>
      ))}
      {todos.length === 0 && <p style={{ color: '#8a96a8', textAlign: 'center' }}>No tasks yet. Add one!</p>}
    </div>
  );
}

export default TodoApp;`,
      css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { min-height: 100vh; background: #060d1a; display: flex; align-items: center; justify-content: center; font-family: 'Segoe UI', sans-serif; }`,
      html: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Todo App</title></head><body><div id="root"></div></body></html>`
    },
    "Dark Mode Toggle": {
      label: "Dark Mode Toggle 🌙",
      language: "react",
      jsx: `import React, { useState, useEffect } from 'react';

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.style.background = darkMode ? '#1a1a2e' : '#ffffff';
    document.body.style.color = darkMode ? '#ffffff' : '#1a1a2e';
  }, [darkMode]);

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Dark Mode Demo</h1>
      <button onClick={() => setDarkMode(!darkMode)}
        style={{ padding: '12px 24px', fontSize: '18px', background: darkMode ? '#38bdf8' : '#1a1a2e', color: darkMode ? '#1a1a2e' : 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
      <p style={{ marginTop: '20px' }}>Current mode: {darkMode ? 'Dark' : 'Light'}</p>
    </div>
  );
}

export default DarkModeToggle;`,
      css: `* { margin: 0; padding: 0; box-sizing: border-box; transition: all 0.3s ease; }
body { font-family: 'Segoe UI', sans-serif; min-height: 100vh; }`,
      html: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Dark Mode Toggle</title></head><body><div id="root"></div></body></html>`
    },
    "Weather App": {
      label: "Weather App 🌤️",
      language: "react",
      jsx: `import React, { useState } from 'react';

function WeatherApp() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    if (!city.trim()) return;
    setLoading(true);
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
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '40px', textAlign: 'center' }}>
      <h1 style={{ color: '#38bdf8' }}>Weather App</h1>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '30px' }}>
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && fetchWeather()} placeholder="Enter city..."
          style={{ flex: 1, padding: '12px', background: '#07101f', border: '1px solid #0f2744', borderRadius: '8px', color: 'white' }} />
        <button onClick={fetchWeather} disabled={loading}
          style={{ padding: '12px 24px', background: '#38bdf8', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
          {loading ? 'Loading...' : 'Search'}
        </button>
      </div>
      {weather && (
        <div style={{ background: 'linear-gradient(135deg, #07101f, #0a1628)', padding: '30px', borderRadius: '16px' }}>
          <h2>{weather.city}</h2>
          <div style={{ fontSize: '48px', fontWeight: 'bold', color: '#38bdf8', margin: '20px 0' }}>{weather.temp}°C</div>
          <div style={{ fontSize: '24px', marginBottom: '20px' }}>{weather.condition}</div>
          <div>💧 Humidity: {weather.humidity}%</div>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;`,
      css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { min-height: 100vh; background: #060d1a; font-family: 'Segoe UI', sans-serif; }`,
      html: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Weather App</title></head><body><div id="root"></div></body></html>`
    },
    "Image Gallery": {
      label: "Image Gallery 🖼️",
      language: "react",
      jsx: `import React, { useState } from 'react';

const images = [
  { id: 1, url: 'https://picsum.photos/id/1015/300/200', title: 'Mountain' },
  { id: 2, url: 'https://picsum.photos/id/104/300/200', title: 'Nature' },
  { id: 3, url: 'https://picsum.photos/id/107/300/200', title: 'Flowers' },
  { id: 4, url: 'https://picsum.photos/id/116/300/200', title: 'Lake' },
  { id: 5, url: 'https://picsum.photos/id/119/300/200', title: 'Peak' },
  { id: 6, url: 'https://picsum.photos/id/20/300/200', title: 'Coffee' }
];

function ImageGallery() {
  const [selected, setSelected] = useState(null);

  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ color: '#38bdf8', textAlign: 'center', marginBottom: '40px' }}>Image Gallery</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
        {images.map(img => (
          <div key={img.id} onClick={() => setSelected(img)} style={{ background: '#07101f', borderRadius: '12px', overflow: 'hidden', cursor: 'pointer', border: '1px solid #0f2744' }}>
            <img src={img.url} alt={img.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <p style={{ padding: '12px', textAlign: 'center', color: '#cbd5e1' }}>{img.title}</p>
          </div>
        ))}
      </div>
      {selected && (
        <div onClick={() => setSelected(null)} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ background: '#07101f', padding: '20px', borderRadius: '16px', textAlign: 'center' }}>
            <img src={selected.url} alt={selected.title} style={{ maxWidth: '100%', maxHeight: '70vh', borderRadius: '8px' }} />
            <h3 style={{ color: 'white', marginTop: '15px' }}>{selected.title}</h3>
            <button onClick={() => setSelected(null)} style={{ marginTop: '15px', padding: '8px 20px', background: '#38bdf8', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageGallery;`,
      css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { background: #060d1a; font-family: 'Segoe UI', sans-serif; }`,
      html: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Image Gallery</title></head><body><div id="root"></div></body></html>`
    },
    "Stopwatch": {
      label: "Stopwatch ⏱️",
      language: "react",
      jsx: `import React, { useState, useRef, useEffect } from 'react';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => setTime(prev => prev + 10), 10);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [running]);

  const format = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);
    return \`\${minutes.toString().padStart(2, '0')}:\${seconds.toString().padStart(2, '0')}:\${milliseconds.toString().padStart(2, '0')}\`;
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px', minHeight: '100vh', background: 'linear-gradient(135deg, #1a1a2e, #16213e)' }}>
      <h1 style={{ color: '#38bdf8' }}>Stopwatch</h1>
      <div style={{ fontSize: '64px', fontFamily: 'monospace', color: '#00ff88', marginBottom: '40px', background: '#07101f', padding: '30px', borderRadius: '16px', display: 'inline-block' }}>{format(time)}</div>
      <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
        <button onClick={() => setRunning(true)} disabled={running} style={{ padding: '12px 24px', background: '#38bdf8', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Start</button>
        <button onClick={() => setRunning(false)} disabled={!running} style={{ padding: '12px 24px', background: '#38bdf8', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Pause</button>
        <button onClick={() => { setRunning(false); setTime(0); }} style={{ padding: '12px 24px', background: '#38bdf8', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;`,
      css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Segoe UI', sans-serif; }`,
      html: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Stopwatch</title></head><body><div id="root"></div></body></html>`
    },
    "Calculator App": {
      label: "Calculator App 🧮",
      language: "react",
      jsx: `import React, { useState } from 'react';

function Calculator() {
  const [display, setDisplay] = useState('0');
  const [prevValue, setPrevValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputDigit = (digit) => {
    if (waitingForOperand) {
      setDisplay(String(digit));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? String(digit) : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const clear = () => {
    setDisplay('0');
    setPrevValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const performOperation = (op) => {
    const current = parseFloat(display);
    if (prevValue === null) {
      setPrevValue(current);
    } else if (operation) {
      const result = calculate(prevValue, current, operation);
      setDisplay(String(result));
      setPrevValue(result);
    }
    setOperation(op);
    setWaitingForOperand(true);
  };

  const calculate = (a, b, op) => {
    switch(op) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      case '/': return b !== 0 ? a / b : 0;
      default: return b;
    }
  };

  const equals = () => {
    if (prevValue !== null && operation) {
      const current = parseFloat(display);
      const result = calculate(prevValue, current, operation);
      setDisplay(String(result));
      setPrevValue(null);
      setOperation(null);
      setWaitingForOperand(true);
    }
  };

  return (
    <div style={{ maxWidth: '300px', margin: '50px auto', background: '#07101f', borderRadius: '16px', padding: '20px' }}>
      <div style={{ background: '#060d1a', padding: '20px', borderRadius: '8px', marginBottom: '20px', textAlign: 'right', fontSize: '32px', color: '#38bdf8', fontFamily: 'monospace' }}>{display}</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
        <button onClick={clear} style={{ padding: '15px', background: '#ef4444', border: 'none', borderRadius: '8px', color: 'white', cursor: 'pointer' }}>AC</button>
        <button onClick={() => performOperation('/')} style={{ padding: '15px', background: '#fbbf24', border: 'none', borderRadius: '8px', color: 'white', cursor: 'pointer' }}>/</button>
        <button onClick={() => performOperation('*')} style={{ padding: '15px', background: '#fbbf24', border: 'none', borderRadius: '8px', color: 'white', cursor: 'pointer' }}>×</button>
        <button onClick={() => performOperation('-')} style={{ padding: '15px', background: '#fbbf24', border: 'none', borderRadius: '8px', color: 'white', cursor: 'pointer' }}>-</button>
        <button onClick={() => inputDigit(7)} style={{ padding: '15px', background: '#0f2744', border: 'none', borderRadius: '8px', color: 'white', cursor: 'pointer' }}>7</button>
        <button onClick={() => inputDigit(8)} style={{ padding: '15px', background: '#0f2744', border: 'none', borderRadius: '8px', color: 'white', cursor: 'pointer' }}>8</button>
        <button onClick={() => inputDigit(9)} style={{ padding: '15px', background: '#0f2744', border: 'none', borderRadius: '8px', color: 'white', cursor: 'pointer' }}>9</button>
        <button onClick={() => performOperation('+')} style={{ padding: '15px', background: '#fbbf24', border: 'none', borderRadius: '8px', color: 'white', cursor: 'pointer' }}>+</button>
        <button onClick={() => inputDigit(4)} style={{ padding: '15px', background: '#0f2744', border: 'none', borderRadius: '8px', color: 'white', cursor: 'pointer' }}>4</button>
        <button onClick={() => inputDigit(5)} style={{ padding: '15px', background: '#0f2744', border: 'none', borderRadius: '8px', color: 'white', cursor: 'pointer' }}>5</button>
        <button onClick={() => inputDigit(6)} style={{ padding: '15px', background: '#0f2744', border: 'none', borderRadius: '8px', color: 'white', cursor: 'pointer' }}>6</button>
        <button onClick={equals} style={{ padding: '15px', background: '#38bdf8', border: 'none', borderRadius: '8px', color: '#060d1a', cursor: 'pointer', fontWeight: 'bold' }}>=</button>
        <button onClick={() => inputDigit(1)} style={{ padding: '15px', background: '#0f2744', border: 'none', borderRadius: '8px', color: 'white', cursor: 'pointer' }}>1</button>
        <button onClick={() => inputDigit(2)} style={{ padding: '15px', background: '#0f2744', border: 'none', borderRadius: '8px', color: 'white', cursor: 'pointer' }}>2</button>
        <button onClick={() => inputDigit(3)} style={{ padding: '15px', background: '#0f2744', border: 'none', borderRadius: '8px', color: 'white', cursor: 'pointer' }}>3</button>
        <button onClick={() => inputDigit(0)} style={{ padding: '15px', background: '#0f2744', border: 'none', borderRadius: '8px', color: 'white', cursor: 'pointer', gridColumn: 'span 2' }}>0</button>
        <button onClick={inputDecimal} style={{ padding: '15px', background: '#0f2744', border: 'none', borderRadius: '8px', color: 'white', cursor: 'pointer' }}>.</button>
      </div>
    </div>
  );
}

export default Calculator;`,
      css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { background: #060d1a; font-family: 'Segoe UI', sans-serif; }`,
      html: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Calculator</title></head><body><div id="root"></div></body></html>`
    },
    "Pokemon Card": {
      label: "Pokemon Card 🎴",
      language: "react",
      jsx: `import React, { useState, useEffect } from 'react';

function PokemonCard() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => { fetchRandomPokemon(); }, []);

  const fetchRandomPokemon = async () => {
    setLoading(true);
    const id = Math.floor(Math.random() * 151) + 1;
    const response = await fetch(\`https://pokeapi.co/api/v2/pokemon/\${id}\`);
    const data = await response.json();
    setPokemon({
      name: data.name, id: data.id,
      image: data.sprites.other['official-artwork'].front_default,
      types: data.types.map(t => t.type.name), height: data.height, weight: data.weight
    });
    setLoading(false);
  };

  if (loading) return <div style={{ textAlign: 'center', padding: '50px', color: '#38bdf8' }}>Loading Pokemon...</div>;

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea, #764ba2)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div style={{ background: 'white', borderRadius: '20px', overflow: 'hidden', maxWidth: '350px' }}>
        <div style={{ background: 'linear-gradient(135deg, #ff6b6b, #feca57)', padding: '20px', textAlign: 'center' }}>
          <img src={pokemon.image} alt={pokemon.name} style={{ width: '200px', height: '200px' }} />
        </div>
        <div style={{ padding: '20px' }}>
          <h2 style={{ fontSize: '24px', textTransform: 'capitalize' }}>{pokemon.name}</h2>
          <div style={{ display: 'flex', gap: '10px', margin: '15px 0' }}>
            {pokemon.types.map(type => <span key={type} style={{ background: '#e0e0e0', padding: '4px 12px', borderRadius: '20px', fontSize: '12px' }}>{type}</span>)}
          </div>
          <button onClick={fetchRandomPokemon} style={{ width: '100%', padding: '12px', background: '#667eea', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer' }}>Random Pokemon</button>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;`,
      css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Segoe UI', sans-serif; }`,
      html: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Pokemon Card</title></head><body><div id="root"></div></body></html>`
    },
    "Movie Search": {
      label: "Movie Search 🎬",
      language: "react",
      jsx: `import React, { useState } from 'react';

function MovieSearch() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchMovies = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setMovies([
        { id: 1, title: \`\${query} - The Beginning\`, year: 2023, rating: 8.5 },
        { id: 2, title: \`\${query} - Returns\`, year: 2022, rating: 7.8 },
        { id: 3, title: \`The Last \${query}\`, year: 2024, rating: 9.0 }
      ]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#060d1a', padding: '40px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ color: '#38bdf8', textAlign: 'center' }}>🎬 Movie Search</h1>
        <div style={{ display: 'flex', gap: '10px', margin: '30px 0' }}>
          <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && searchMovies()} placeholder="Search movies..."
            style={{ flex: 1, padding: '12px', background: '#07101f', border: '1px solid #0f2744', borderRadius: '8px', color: 'white' }} />
          <button onClick={searchMovies} style={{ padding: '12px 24px', background: '#38bdf8', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Search</button>
        </div>
        {loading && <div style={{ color: '#38bdf8', textAlign: 'center' }}>Loading...</div>}
        {movies.map(m => <div key={m.id} style={{ background: '#07101f', padding: '15px', borderRadius: '10px', marginBottom: '10px' }}><strong>{m.title}</strong> ({m.year}) ⭐ {m.rating}</div>)}
      </div>
    </div>
  );
}

export default MovieSearch;`,
      css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Segoe UI', sans-serif; }`,
      html: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Movie Search</title></head><body><div id="root"></div></body></html>`
    },
    "Quote Generator": {
      label: "Quote Generator 💬",
      language: "react",
      jsx: `import React, { useState, useEffect } from 'react';

const quotes = [
  { text: "The only limit is your imagination.", author: "Anonymous" },
  { text: "Code is poetry in motion.", author: "Developer" },
  { text: "Stay curious, keep learning.", author: "Unknown" }
];

function QuoteGenerator() {
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => { setQuote(quotes[Math.floor(Math.random() * quotes.length)]); }, []);

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea, #764ba2)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', borderRadius: '20px', padding: '40px', maxWidth: '600px', textAlign: 'center' }}>
        <p style={{ color: 'white', fontSize: '20px' }}>"{quote.text}"</p>
        <p style={{ color: '#38bdf8', marginTop: '15px' }}>— {quote.author}</p>
        <button onClick={() => setQuote(quotes[Math.floor(Math.random() * quotes.length)])} style={{ marginTop: '20px', padding: '10px 20px', background: '#38bdf8', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>New Quote</button>
      </div>
    </div>
  );
}

export default QuoteGenerator;`,
      css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Segoe UI', sans-serif; }`,
      html: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Quote Generator</title></head><body><div id="root"></div></body></html>`
    }
  },

  // ==================== HTML/CSS/JS (20 templates) ====================
  HTML_CSS_JS: {
    "Glassmorphism Card": {
      label: "Glassmorphism Card 🎴",
      language: "htmlcssjs",
      html: `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Glassmorphism Card</title><link rel="stylesheet" href="styles.css"></head><body><div class="glass-card"><div class="card-avatar">✨</div><h2>Glassmorphism Card</h2><p>Modern UI with blur effect</p><button class="card-btn">Learn More</button></div><script src="script.js"></script></body></html>`,
      css: `*{margin:0;padding:0;box-sizing:border-box}body{min-height:100vh;background:linear-gradient(135deg,#667eea,#764ba2);display:flex;align-items:center;justify-content:center;font-family:'Segoe UI',sans-serif}.glass-card{background:rgba(255,255,255,0.1);backdrop-filter:blur(10px);border-radius:20px;padding:40px;text-align:center;color:white;width:320px;transition:transform 0.3s}.glass-card:hover{transform:translateY(-10px)}.card-avatar{width:80px;height:80px;background:linear-gradient(135deg,#ff6b6b,#4ecdc4);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;font-size:40px}.card-btn{background:rgba(255,255,255,0.2);border:1px solid rgba(255,255,255,0.3);padding:10px 20px;border-radius:25px;color:white;cursor:pointer}`,
      js: `document.querySelector('.card-btn').addEventListener('click',()=>alert('Welcome!'))`
    },
    "Neon Buttons": {
      label: "Neon Buttons 🔘",
      language: "htmlcssjs",
      html: `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Neon Buttons</title><link rel="stylesheet" href="styles.css"></head><body><div class="container"><h1>Neon Buttons</h1><div class="button-grid"><button class="neon-btn neon-pink">Pink</button><button class="neon-btn neon-blue">Blue</button><button class="neon-btn neon-green">Green</button><button class="neon-btn neon-purple">Purple</button><button class="neon-btn neon-cyan">Cyan</button><button class="neon-btn neon-orange">Orange</button></div></div><script src="script.js"></script></body></html>`,
      css: `*{margin:0;padding:0;box-sizing:border-box}body{min-height:100vh;background:#0a0a1a;display:flex;align-items:center;justify-content:center;font-family:'Segoe UI',sans-serif}h1{color:white;text-align:center;margin-bottom:40px}.button-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:20px;max-width:700px}.neon-btn{padding:15px 30px;font-size:18px;font-weight:bold;background:transparent;border:2px solid;border-radius:10px;cursor:pointer;transition:0.3s}.neon-btn:hover{transform:scale(1.05);box-shadow:0 0 20px currentColor}.neon-pink{color:#ff00de;border-color:#ff00de}.neon-pink:hover{background:#ff00de;color:#0a0a1a}.neon-blue{color:#00e0ff;border-color:#00e0ff}.neon-blue:hover{background:#00e0ff;color:#0a0a1a}.neon-green{color:#00ff88;border-color:#00ff88}.neon-green:hover{background:#00ff88;color:#0a0a1a}.neon-purple{color:#b400ff;border-color:#b400ff}.neon-purple:hover{background:#b400ff;color:#0a0a1a}.neon-cyan{color:#00ffff;border-color:#00ffff}.neon-cyan:hover{background:#00ffff;color:#0a0a1a}.neon-orange{color:#ff6b00;border-color:#ff6b00}.neon-orange:hover{background:#ff6b00;color:#0a0a1a}`,
      js: `document.querySelectorAll('.neon-btn').forEach(btn=>btn.addEventListener('click',()=>alert(\`\${btn.textContent} clicked!\`)))`
    },
    "3D Flip Card": {
      label: "3D Flip Card 🃏",
      language: "htmlcssjs",
      html: `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>3D Flip Card</title><link rel="stylesheet" href="styles.css"></head><body><div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><h2>Front</h2><p>Hover to flip</p></div><div class="flip-card-back"><h2>Back</h2><p>Amazing 3D effect!</p><button class="flip-btn">Click</button></div></div></div><script src="script.js"></script></body></html>`,
      css: `*{margin:0;padding:0;box-sizing:border-box}body{min-height:100vh;background:linear-gradient(135deg,#667eea,#764ba2);display:flex;align-items:center;justify-content:center}.flip-card{width:300px;height:400px;perspective:1000px}.flip-card-inner{position:relative;width:100%;height:100%;transition:transform 0.6s;transform-style:preserve-3d}.flip-card:hover .flip-card-inner{transform:rotateY(180deg)}.flip-card-front,.flip-card-back{position:absolute;width:100%;height:100%;backface-visibility:hidden;border-radius:20px;display:flex;flex-direction:column;align-items:center;justify-content:center}.flip-card-front{background:linear-gradient(135deg,#f093fb,#f5576c);color:white}.flip-card-back{background:linear-gradient(135deg,#4facfe,#00f2fe);color:white;transform:rotateY(180deg)}.flip-btn{padding:10px 20px;background:white;border:none;border-radius:10px;cursor:pointer}`,
      js: `document.querySelector('.flip-btn')?.addEventListener('click',()=>alert('Flipped!'))`
    },
    "Animated Gradient": {
      label: "Animated Gradient 🌈",
      language: "htmlcssjs",
      html: `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Animated Gradient</title><link rel="stylesheet" href="styles.css"></head><body><div class="content"><h1>Animated Gradient</h1><button class="gradient-btn">Change Colors</button></div><script src="script.js"></script></body></html>`,
      css: `*{margin:0;padding:0;box-sizing:border-box}body{min-height:100vh;background:linear-gradient(270deg,#ff6b6b,#4ecdc4,#45b7d1);background-size:400% 400%;animation:gradientShift 10s infinite;display:flex;align-items:center;justify-content:center}@keyframes gradientShift{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}.content{text-align:center;background:rgba(0,0,0,0.6);padding:50px;border-radius:20px;color:white}.gradient-btn{padding:12px 30px;background:white;border:none;border-radius:50px;cursor:pointer;margin-top:20px}`,
      js: `let i=0;const colors=[['#ff6b6b','#4ecdc4','#45b7d1'],['#f093fb','#f5576c','#4facfe'],['#fa709a','#fee140','#667eea']];document.querySelector('.gradient-btn').onclick=()=>{i=(i+1)%colors.length;document.body.style.background=\`linear-gradient(270deg,\${colors[i].join(',')})\`;document.body.style.backgroundSize='400% 400%'}`
    },
    "Responsive Navbar": {
      label: "Responsive Navbar 🧭",
      language: "htmlcssjs",
      html: `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Responsive Navbar</title><link rel="stylesheet" href="styles.css"></head><body><nav class="navbar"><div class="logo">Logo</div><ul class="nav-menu"><li><a href="#">Home</a></li><li><a href="#">About</a></li><li><a href="#">Services</a></li><li><a href="#">Contact</a></li></ul><div class="hamburger">☰</div></nav><div class="hero"><h1>Responsive Navbar</h1></div><script src="script.js"></script></body></html>`,
      css: `*{margin:0;padding:0;box-sizing:border-box}.navbar{background:#1a1a2e;padding:1rem 2rem;display:flex;justify-content:space-between;align-items:center}.logo{color:white;font-size:24px;font-weight:bold}.nav-menu{display:flex;list-style:none;gap:2rem}.nav-menu a{color:white;text-decoration:none}.hamburger{display:none;font-size:28px;color:white;cursor:pointer}.hero{height:90vh;background:linear-gradient(135deg,#667eea,#764ba2);display:flex;align-items:center;justify-content:center;color:white}@media(max-width:768px){.hamburger{display:block}.nav-menu{position:fixed;left:-100%;top:70px;flex-direction:column;background:#1a1a2e;width:100%;text-align:center;transition:0.3s;padding:20px 0}.nav-menu.active{left:0}}`,
      js: `document.querySelector('.hamburger').addEventListener('click',()=>{document.querySelector('.nav-menu').classList.toggle('active')})`
    },
    "Particle Background": {
      label: "Particle Background ✨",
      language: "htmlcssjs",
      html: `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Particles</title><link rel="stylesheet" href="styles.css"></head><body><canvas id="canvas"></canvas><div class="overlay"><h1>Particle System</h1><button class="btn">Add Particles</button></div><script src="script.js"></script></body></html>`,
      css: `*{margin:0;padding:0;box-sizing:border-box}body{overflow:hidden}#canvas{position:absolute;top:0;left:0;width:100%;height:100%;background:#0a0a1a}.overlay{position:relative;z-index:10;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;color:white}.btn{padding:12px 24px;background:#38bdf8;border:none;border-radius:50px;cursor:pointer}`,
      js: `const c=document.getElementById('canvas'),ctx=c.getContext('2d');let w,h,parts=[];function resize(){w=c.width=innerWidth;h=c.height=innerHeight}resize();addEventListener('resize',resize);class P{constructor(){this.x=Math.random()*w;this.y=Math.random()*h;this.vx=(Math.random()-0.5)*2;this.vy=(Math.random()-0.5)*2;this.size=Math.random()*3+1;this.color=\`hsl(\${Math.random()*360},70%,60%)\`}update(){this.x+=this.vx;this.y+=this.vy;if(this.x<0||this.x>w)this.vx*=-1;if(this.y<0||this.y>h)this.vy*=-1}draw(){ctx.beginPath();ctx.arc(this.x,this.y,this.size,0,Math.PI*2);ctx.fillStyle=this.color;ctx.fill()}}for(let i=0;i<100;i++)parts.push(new P());function animate(){ctx.clearRect(0,0,w,h);parts.forEach(p=>{p.update();p.draw()});requestAnimationFrame(animate)}animate();document.querySelector('.btn').onclick=()=>{for(let i=0;i<20;i++)parts.push(new P())}`
    },
    "Login Form": {
      label: "Login Form 🔐",
      language: "htmlcssjs",
      html: `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Login</title><link rel="stylesheet" href="styles.css"></head><body><div class="login-container"><div class="login-card"><h2>Login</h2><form id="loginForm"><input type="email" id="email" placeholder="Email" required><input type="password" id="password" placeholder="Password" required><button type="submit">Sign In</button></form></div></div><script src="script.js"></script></body></html>`,
      css: `*{margin:0;padding:0;box-sizing:border-box}body{min-height:100vh;background:linear-gradient(135deg,#667eea,#764ba2);display:flex;align-items:center;justify-content:center}.login-card{background:white;padding:40px;border-radius:20px;width:350px}h2{text-align:center;margin-bottom:20px}input{width:100%;padding:12px;margin-bottom:15px;border:1px solid #ddd;border-radius:8px}button{width:100%;padding:12px;background:#667eea;color:white;border:none;border-radius:8px;cursor:pointer}`,
      js: `document.getElementById('loginForm').addEventListener('submit',(e)=>{e.preventDefault();alert(\`Welcome \${document.getElementById('email').value}\`)})`
    },
    "Product Card": {
      label: "Product Card 🛍️",
      language: "htmlcssjs",
      html: `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Product Card</title><link rel="stylesheet" href="styles.css"></head><body><div class="product-card"><div class="badge">Sale</div><img src="https://picsum.photos/id/20/300/200" alt="Product"><h3>Premium Product</h3><p>$49.99 <span class="old">$99.99</span></p><button class="btn">Add to Cart</button></div><script src="script.js"></script></body></html>`,
      css: `*{margin:0;padding:0;box-sizing:border-box}body{min-height:100vh;background:#1e3c72;display:flex;align-items:center;justify-content:center}.product-card{background:white;border-radius:20px;overflow:hidden;width:300px;padding:20px;text-align:center;position:relative}.badge{position:absolute;top:10px;left:10px;background:#ff6b6b;color:white;padding:5px 10px;border-radius:20px;font-size:12px}img{width:100%;height:200px;object-fit:cover;border-radius:10px;margin-bottom:15px}.old{text-decoration:line-through;color:#999;font-size:14px}.btn{width:100%;padding:12px;background:#667eea;color:white;border:none;border-radius:10px;margin-top:15px;cursor:pointer}`,
      js: `document.querySelector('.btn').addEventListener('click',()=>alert('Added to cart!'))`
    }
  },

  // ==================== JAVASCRIPT (20 templates) ====================
  JavaScript: {
    "Digital Clock": {
      label: "Digital Clock 🕐",
      language: "javascript",
      code: `function updateClock(){const d=new Date();document.body.innerHTML=\`<div style="font-size:48px;font-family:monospace;text-align:center;padding:40px;background:linear-gradient(135deg,#667eea,#764ba2);color:white;min-height:100vh;display:flex;align-items:center;justify-content:center">\${d.getHours().toString().padStart(2,'0')}:\${d.getMinutes().toString().padStart(2,'0')}:\${d.getSeconds().toString().padStart(2,'0')}</div>\`}setInterval(updateClock,1000);updateClock();`
    },
    "Weather Mock": {
      label: "Weather Mock 🌤️",
      language: "javascript",
      code: `const weather={temp:Math.floor(Math.random()*30)+10,condition:['Sunny','Cloudy','Rainy'][Math.floor(Math.random()*3)],city:'New York'};document.body.innerHTML=\`<div style="text-align:center;padding:40px;background:linear-gradient(135deg,#667eea,#764ba2);color:white;min-height:100vh;display:flex;align-items:center;justify-content:center;flex-direction:column"><h1>Weather in \${weather.city}</h1><div style="font-size:64px">\${weather.temp}°C</div><div>\${weather.condition}</div></div>\`;`
    },
    "Calculator": {
      label: "Calculator 🧮",
      language: "javascript",
      code: `document.body.innerHTML=\`<div style="max-width:300px;margin:50px auto;background:#1a1a2e;padding:20px;border-radius:10px"><div id="disp" style="background:#060d1a;padding:20px;text-align:right;color:#38bdf8;font-size:32px;margin-bottom:20px">0</div><div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px"><button onclick="calc(7)">7</button><button onclick="calc(8)">8</button><button onclick="calc(9)">9</button><button onclick="op('/')">/</button><button onclick="calc(4)">4</button><button onclick="calc(5)">5</button><button onclick="calc(6)">6</button><button onclick="op('*')">*</button><button onclick="calc(1)">1</button><button onclick="calc(2)">2</button><button onclick="calc(3)">3</button><button onclick="op('-')">-</button><button onclick="calc(0)">0</button><button onclick="dot()">.</button><button onclick="clear()">C</button><button onclick="op('+')">+</button><button onclick="equal()" style="grid-column:span 4">=</button></div></div>\`;let val='',op=null;function calc(n){val+=n;document.getElementById('disp').innerText=val}function op(o){if(val){op=o;val+=' '+o+' ';document.getElementById('disp').innerText=val}}function dot(){if(!val.includes('.')){val+='.';document.getElementById('disp').innerText=val}}function clear(){val='';op=null;document.getElementById('disp').innerText='0'}function equal(){try{const result=eval(val);document.getElementById('disp').innerText=result;val=result}catch(e){document.getElementById('disp').innerText='Error';val=''}}`
    },
    "Palindrome Checker": {
      label: "Palindrome Checker 🔄",
      language: "javascript",
      code: `document.body.innerHTML=\`<div style="min-height:100vh;background:linear-gradient(135deg,#667eea,#764ba2);display:flex;align-items:center;justify-content:center"><div style="background:white;padding:40px;border-radius:20px;text-align:center"><h2>Palindrome Checker</h2><input id="input" placeholder="Enter text" style="padding:10px;margin:10px;border:1px solid #ddd"><button id="check" style="padding:10px 20px;background:#667eea;color:white;border:none;border-radius:5px">Check</button><div id="result" style="margin-top:15px"></div></div></div>\`;document.getElementById('check').onclick=()=>{const str=document.getElementById('input').value;const cleaned=str.toLowerCase().replace(/[^a-z0-9]/g,'');const isPal=cleaned===cleaned.split('').reverse().join('');document.getElementById('result').innerHTML=isPal?'✅ Is a palindrome!':'❌ Not a palindrome'}`
    },
    "FizzBuzz": {
      label: "FizzBuzz 🎮",
      language: "javascript",
      code: `const results=[];for(let i=1;i<=100;i++){if(i%15===0)results.push('FizzBuzz');else if(i%3===0)results.push('Fizz');else if(i%5===0)results.push('Buzz');else results.push(i)}document.body.innerHTML=\`<div style="padding:20px;background:#0a0a1a;min-height:100vh"><h1 style="color:#38bdf8;text-align:center">FizzBuzz (1-100)</h1><div style="display:grid;grid-template-columns:repeat(10,1fr);gap:5px;margin-top:20px">\${results.map(r=>\`<div style="background:#1a1a2e;padding:10px;text-align:center;color:white;border-radius:5px">\${r}</div>\`).join('')}</div></div>\`;`
    },
    "To-Do List": {
      label: "To-Do List ✅",
      language: "javascript",
      code: `let todos=[];function render(){const list=document.getElementById('list');if(!list)return;list.innerHTML=todos.map((t,i)=>\\\`<div><input type="checkbox" \${t.done?'checked':''} onchange="toggle(\${i})"><span style="\${t.done?'text-decoration:line-through':''}">\${t.text}</span><button onclick="del(\${i})">×</button></div>\\\`).join('')}function add(){const input=document.getElementById('input');if(input.value.trim()){todos.push({text:input.value.trim(),done:false});input.value='';render()}}function toggle(i){todos[i].done=!todos[i].done;render()}function del(i){todos.splice(i,1);render()}document.body.innerHTML=\`<div style="max-width:500px;margin:0 auto;padding:20px"><h1 style="color:#38bdf8">Todo List</h1><div><input id="input" placeholder="Add task"><button onclick="add()">Add</button></div><div id="list"></div></div>\`;render();`
    }

    
  }

  TypeScript: {
    "Basic Types": {
      label: "Basic Types 📘",
      language: "typescript",
      code: `interface User{id:number;name:string;email:string;isActive:boolean}function greet(user:User):string{return\`Hello,\${user.name}!\`}const user:User={id:1,name:"Alice",email:"alice@example.com",isActive:true};console.log(greet(user));const numbers:number[]=[1,2,3,4,5];const doubled=numbers.map(n=>n*2);console.log(doubled);`
    },
    "Interface & Classes": {
      label: "Interface & Classes 🏗️",
      language: "typescript",
      code: `interface Drawable{draw():void}abstract class Shape{constructor(protected color:string){}abstract getArea():number}class Circle extends Shape{constructor(color:string,private radius:number){super(color)}getArea():number{return Math.PI*this.radius**2}}class Rectangle extends Shape{constructor(color:string,private w:number,private h:number){super(color)}getArea():number{return this.w*this.h}}const circle=new Circle('red',5);const rect=new Rectangle('blue',10,20);console.log(\`Circle area: \${circle.getArea().toFixed(2)}\`);console.log(\`Rectangle area: \${rect.getArea()}\`);`
    },
    "Generic Functions": {
      label: "Generic Functions 🔧",
      language: "typescript",
      code: `function identity<T>(value:T):T{return value}function wrapInArray<T>(value:T):T[]{return[value]}interface ApiResponse<T>{data:T;status:number}class DataStore<T>{private data:T[]=[];add(item:T):void{this.data.push(item)}getAll():T[]{return[...this.data]}}console.log(identity<string>("Hello"));console.log(identity<number>(42));const store=new DataStore<string>();store.add("TypeScript");store.add("Generics");console.log(store.getAll());`
    },
    "Async/Await": {
      label: "Async/Await ⏳",
      language: "typescript",
      code: `interface Todo{userId:number;id:number;title:string;completed:boolean}async function fetchTodo(id:number):Promise<Todo>{return new Promise((resolve)=>setTimeout(()=>resolve({userId:1,id:id,title:\`Todo \${id}\`,completed:false}),1000))}async function displayTodo(id:number){console.log(\`Fetching todo \${id}...\`);const todo=await fetchTodo(id);console.log(\`Todo: \${todo.title}\`)}displayTodo(1);displayTodo(2);`
    },
    "Utility Types": {
      label: "Utility Types 🔧",
      language: "typescript",
      code: `interface Product{id:number;name:string;price:number;description:string;category:string}type ProductPreview=Pick<Product,'id'|'name'|'price'>;type ProductUpdate=Partial<Product>;type ReadonlyProduct=Readonly<Product>;const preview:ProductPreview={id:1,name:"Laptop",price:999};console.log("Product Preview:",preview);const update:ProductUpdate={price:899};console.log("Update:",update);`
    },
    "React Props Types": {
      label: "React Props Types ⚛️",
      language: "typescript",
      code: `interface ButtonProps{label:string;onClick:()=>void;variant?:'primary'|'secondary'|'danger';disabled?:boolean}const Button:React.FC<ButtonProps>=({label,onClick,variant='primary',disabled=false})=>{const styles={primary:'#38bdf8',secondary:'#8a96a8',danger:'#ef4444'};return<button onClick={onClick} disabled={disabled} style={{background:styles[variant],padding:'10px20px',border:'none',borderRadius:'8px',color:'white',cursor:'pointer'}}>{label}</button>};export default Button;`
    },
    "State Management": {
      label: "State Management 📦",
      language: "typescript",
      code: `type State={count:number;user:{name:string;age:number}|null};type Action={type:'INCREMENT'}|{type:'DECREMENT'}|{type:'SET_USER';payload:{name:string;age:number}};function reducer(state:State,action:Action):State{switch(action.type){case'INCREMENT':return{...state,count:state.count+1};case'DECREMENT':return{...state,count:state.count-1};case'SET_USER':return{...state,user:action.payload};default:return state}}const initialState:State={count:0,user:null};console.log("Reducer demo - initialState:",initialState);`
    },
    "API Service": {
      label: "API Service 🌐",
      language: "typescript",
      code: `interface ApiConfig{baseUrl:string;headers?:Record<string,string>}class ApiService{constructor(private config:ApiConfig){}async get<T>(endpoint:string):Promise<T>{const response=await fetch(\`\${this.config.baseUrl}\${endpoint}\`,{headers:this.config.headers});return response.json()}async post<T>(endpoint:string,data:any):Promise<T>{const response=await fetch(\`\${this.config.baseUrl}\${endpoint}\`,{method:'POST',headers:{'Content-Type':'application/json',...this.config.headers},body:JSON.stringify(data)});return response.json()}}const api=new ApiService({baseUrl:'https://jsonplaceholder.typicode.com'});api.get<{id:number;title:string}>('/posts/1').then(data=>console.log('Post:',data));`
    },
    "Custom Hooks": {
      label: "Custom Hooks 🪝",
      language: "typescript",
      code: `import{useState,useEffect}from'react';function useLocalStorage<T>(key:string,initialValue:T):[T,(value:T)=>void]{const[storedValue,setStoredValue]=useState<T>(()=>{try{const item=window.localStorage.getItem(key);return item?JSON.parse(item):initialValue}catch{return initialValue}});const setValue=(value:T)=>{try{setStoredValue(value);window.localStorage.setItem(key,JSON.stringify(value))}catch(error){console.log(error)}};return[storedValue,setValue]}function useDebounce<T>(value:T,delay:number):T{const[debouncedValue,setDebouncedValue]=useState<T>(value);useEffect(()=>{const handler=setTimeout(()=>{setDebouncedValue(value)},delay);return()=>{clearTimeout(handler)}},[value,delay]);return debouncedValue}export{useLocalStorage,useDebounce};`
    },
    "Form Validation": {
      label: "Form Validation 📝",
      language: "typescript",
      code: `interface FormErrors{name?:string;email?:string;password?:string}interface FormData{name:string;email:string;password:string}function validateForm(data:FormData):FormErrors{const errors:FormErrors={};if(!data.name)errors.name='Name is required';if(!data.email)errors.email='Email is required';else if(!/\\S+@\\S+\\.\\S+/.test(data.email))errors.email='Email is invalid';if(!data.password)errors.password='Password is required';else if(data.password.length<6)errors.password='Password must be at least 6 characters';return errors}const testData:FormData={name:'John',email:'john@example.com',password:'123456'};const errors=validateForm(testData);console.log('Validation errors:',errors);`
    }
  },

   Python: {
    "Hello World": {
      label: "Hello World 🐍",
      language: "python",
      code: `print("Hello from Python!")\nname = input("What's your name? ")\nprint(f"Nice to meet you, {name}!")\nsquares = [x**2 for x in range(10)]\nprint(f"Squares: {squares}")`
    },
    "Fibonacci": {
      label: "Fibonacci Sequence 🔢",
      language: "python",
      code: `def fibonacci(n):\n    a, b = 0, 1\n    sequence = []\n    for _ in range(n):\n        sequence.append(a)\n        a, b = b, a + b\n    return sequence\n\nn = 15\nresult = fibonacci(n)\nprint(f"First {n} Fibonacci numbers:")\nprint(result)\nprint(f"Golden ratio approx: {result[-1] / result[-2]:.6f}")`
    },
    "Prime Checker": {
      label: "Prime Checker 🔢",
      language: "python",
      code: `def is_prime(n):\n    if n < 2:\n        return False\n    for i in range(2, int(n ** 0.5) + 1):\n        if n % i == 0:\n            return False\n    return True\n\ndef find_primes(limit):\n    return [num for num in range(2, limit + 1) if is_prime(num)]\n\nnumbers = [2, 3, 4, 5, 16, 17, 19, 20]\nprint("Prime Checker Results:")\nfor num in numbers:\n    print(f"{num}: {'Prime' if is_prime(num) else 'Not prime'}")\n\nprint(f"\\nPrime numbers up to 50:")\nprint(find_primes(50))`
    },
    "Factorial": {
      label: "Factorial Calculator ➗",
      language: "python",
      code: `def factorial_recursive(n):\n    return 1 if n <= 1 else n * factorial_recursive(n - 1)\n\ndef factorial_iterative(n):\n    result = 1\n    for i in range(2, n + 1):\n        result *= i\n    return result\n\ntest_numbers = [0, 1, 5, 7, 10]\nprint("Factorial Calculator:")\nfor num in test_numbers:\n    rec = factorial_recursive(num)\n    it = factorial_iterative(num)\n    print(f"{num}! = {rec} (Recursive) = {it} (Iterative)")`
    },
    "Palindrome": {
      label: "Palindrome Checker 🔄",
      language: "python",
      code: `def is_palindrome(s):\n    cleaned = ''.join(c.lower() for c in s if c.isalnum())\n    return cleaned == cleaned[::-1]\n\ntest_strings = [\n    "A man, a plan, a canal: Panama",\n    "race a car",\n    "hello",\n    "Was it a car or a cat I saw?"\n]\n\nprint("Palindrome Checker Results:")\nfor test in test_strings:\n    print(f'"{test}" -> {"✅ Palindrome" if is_palindrome(test) else "❌ Not a palindrome"}')`
    },
    "Anagram Checker": {
      label: "Anagram Checker 📝",
      language: "python",
      code: `def are_anagrams(str1, str2):\n    return sorted(str1.lower().replace(" ", "")) == sorted(str2.lower().replace(" ", ""))\n\ntest_pairs = [\n    ("listen", "silent"),\n    ("hello", "world"),\n    ("debit card", "bad credit"),\n    ("python", "typhon")\n]\n\nprint("Anagram Checker Results:")\nfor s1, s2 in test_pairs:\n    result = are_anagrams(s1, s2)\n    print(f'"{s1}" and "{s2}" -> {"✅ Anagrams" if result else "❌ Not anagrams"}')`
    },
    "Binary Search": {
      label: "Binary Search 🔍",
      language: "python",
      code: `def binary_search(arr, target):\n    left, right = 0, len(arr) - 1\n    while left <= right:\n        mid = (left + right) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            left = mid + 1\n        else:\n            right = mid - 1\n    return -1\n\narr = [1, 3, 5, 7, 9, 11, 13, 15]\ntarget = 7\nresult = binary_search(arr, target)\nprint(f"Array: {arr}")\nprint(f"Searching for {target}: Found at index {result}" if result != -1 else f"{target} not found")`
    },
    "Bubble Sort": {
      label: "Bubble Sort 🫧",
      language: "python",
      code: `def bubble_sort(arr):\n    n = len(arr)\n    for i in range(n):\n        swapped = False\n        for j in range(0, n - i - 1):\n            if arr[j] > arr[j + 1]:\n                arr[j], arr[j + 1] = arr[j + 1], arr[j]\n                swapped = True\n        if not swapped:\n            break\n    return arr\n\nnumbers = [64, 34, 25, 12, 22, 11, 90]\nprint(f"Original: {numbers}")\nsorted_numbers = bubble_sort(numbers.copy())\nprint(f"Sorted: {sorted_numbers}")`
    },
    "Calculator": {
      label: "Calculator 🧮",
      language: "python",
      code: `class Calculator:\n    def add(self, a, b): return a + b\n    def subtract(self, a, b): return a - b\n    def multiply(self, a, b): return a * b\n    def divide(self, a, b): return a / b if b != 0 else "Error: Division by zero"\n\ncalc = Calculator()\nprint("Calculator Demo:")\nprint(f"5 + 3 = {calc.add(5, 3)}")\nprint(f"10 - 4 = {calc.subtract(10, 4)}")\nprint(f"6 * 7 = {calc.multiply(6, 7)}")\nprint(f"15 / 3 = {calc.divide(15, 3)}")`
    },
    "Rock Paper Scissors": {
      label: "Rock Paper Scissors ✊📄✂️",
      language: "python",
      code: `import random\n\ndef play_game(user_choice):\n    choices = ['rock', 'paper', 'scissors']\n    computer = random.choice(choices)\n    \n    if user_choice == computer:\n        return f"Tie! Both chose {user_choice}"\n    \n    wins = {'rock': 'scissors', 'paper': 'rock', 'scissors': 'paper'}\n    if wins[user_choice] == computer:\n        return f"You win! {user_choice} beats {computer}"\n    return f"You lose! {computer} beats {user_choice}"\n\nprint("Rock Paper Scissors Demo:")\nprint(play_game('rock'))\nprint(play_game('paper'))\nprint(play_game('scissors'))`
    }
  },
SQL: {
    "Basic Queries": {
      label: "Basic Queries 🗄️",
      language: "sql",
      code: `-- Basic SQL Queries\nCREATE TABLE employees (\n    id INT PRIMARY KEY,\n    name VARCHAR(100),\n    department VARCHAR(50),\n    salary DECIMAL(10,2),\n    hire_date DATE\n);\n\nINSERT INTO employees VALUES \n(1, 'John Doe', 'Engineering', 75000.00, '2020-01-15'),\n(2, 'Jane Smith', 'Marketing', 68000.00, '2019-03-20'),\n(3, 'Bob Johnson', 'Engineering', 82000.00, '2021-06-10');\n\nSELECT * FROM employees;\nSELECT name, salary FROM employees WHERE department = 'Engineering';\nSELECT department, AVG(salary) as avg_salary FROM employees GROUP BY department;`
    },
    "Joins Demo": {
      label: "Joins Demo 🔗",
      language: "sql",
      code: `-- SQL Joins Demo\nCREATE TABLE departments (\n    dept_id INT PRIMARY KEY,\n    dept_name VARCHAR(50),\n    location VARCHAR(100)\n);\n\nCREATE TABLE employees (\n    emp_id INT PRIMARY KEY,\n    emp_name VARCHAR(100),\n    dept_id INT,\n    salary DECIMAL(10,2)\n);\n\nINSERT INTO departments VALUES \n(1, 'Engineering', 'NYC'),\n(2, 'Marketing', 'SF'),\n(3, 'Sales', 'Chicago');\n\nINSERT INTO employees VALUES \n(101, 'John Doe', 1, 75000),\n(102, 'Jane Smith', 2, 68000),\n(103, 'Bob Johnson', 1, 82000),\n(104, 'Alice Brown', 3, 71000);\n\n-- INNER JOIN\nSELECT e.emp_name, d.dept_name \nFROM employees e \nINNER JOIN departments d ON e.dept_id = d.dept_id;\n\n-- LEFT JOIN\nSELECT e.emp_name, d.dept_name \nFROM employees e \nLEFT JOIN departments d ON e.dept_id = d.dept_id;`
    },
    "Aggregation": {
      label: "Aggregation 📊",
      language: "sql",
      code: `-- SQL Aggregation Functions\nSELECT \n    COUNT(*) as total_employees,\n    AVG(salary) as average_salary,\n    MAX(salary) as highest_salary,\n    MIN(salary) as lowest_salary,\n    SUM(salary) as total_salary\nFROM employees;\n\nSELECT \n    department,\n    COUNT(*) as emp_count,\n    AVG(salary) as avg_salary\nFROM employees\nGROUP BY department\nHAVING COUNT(*) > 1\nORDER BY avg_salary DESC;`
    },
    "Subqueries": {
      label: "Subqueries 📚",
      language: "sql",
      code: `-- SQL Subqueries\n-- Find employees earning more than average\nSELECT name, salary \nFROM employees \nWHERE salary > (SELECT AVG(salary) FROM employees);\n\n-- Find departments with above average headcount\nSELECT department, COUNT(*) as count\nFROM employees\nGROUP BY department\nHAVING COUNT(*) > (SELECT AVG(emp_count) FROM (SELECT COUNT(*) as emp_count FROM employees GROUP BY department) sub);`
    },
    "Window Functions": {
      label: "Window Functions 🪟",
      language: "sql",
      code: `-- SQL Window Functions\nSELECT \n    name,\n    department,\n    salary,\n    ROW_NUMBER() OVER (ORDER BY salary DESC) as salary_rank,\n    RANK() OVER (PARTITION BY department ORDER BY salary DESC) as dept_rank,\n    AVG(salary) OVER (PARTITION BY department) as dept_avg\nFROM employees;`
    },
    "CTE": {
      label: "CTE (Common Table Expressions) 📋",
      language: "sql",
      code: `-- SQL CTE Example\nWITH high_earners AS (\n    SELECT name, department, salary\n    FROM employees\n    WHERE salary > 70000\n),\ndept_stats AS (\n    SELECT department, AVG(salary) as avg_salary\n    FROM employees\n    GROUP BY department\n)\nSELECT h.name, h.department, h.salary, d.avg_salary\nFROM high_earners h\nJOIN dept_stats d ON h.department = d.department;`
    },
    "Indexes": {
      label: "Indexes 📇",
      language: "sql",
      code: `-- SQL Indexes for Performance\nCREATE INDEX idx_employee_name ON employees(name);\nCREATE INDEX idx_employee_dept ON employees(department);\nCREATE UNIQUE INDEX idx_employee_email ON employees(email);\nCREATE INDEX idx_composite ON employees(department, salary);\n\n-- View indexes\nSELECT * FROM pg_indexes WHERE tablename = 'employees';`
    },
    "Stored Procedure": {
      label: "Stored Procedure 📦",
      language: "sql",
      code: `-- SQL Stored Procedure Example\nCREATE PROCEDURE GetEmployeesByDept(IN dept_name VARCHAR(50))\nBEGIN\n    SELECT * FROM employees WHERE department = dept_name;\nEND;\n\n-- Call procedure\nCALL GetEmployeesByDept('Engineering');\n\n-- Function example\nCREATE FUNCTION GetAverageSalary(dept_name VARCHAR(50))\nRETURNS DECIMAL(10,2)\nDETERMINISTIC\nBEGIN\n    DECLARE avg_salary DECIMAL(10,2);\n    SELECT AVG(salary) INTO avg_salary \n    FROM employees \n    WHERE department = dept_name;\n    RETURN avg_salary;\nEND;`
    },
    "Triggers": {
      label: "Triggers ⚡",
      language: "sql",
      code: `-- SQL Trigger Example\nCREATE TABLE audit_log (\n    id INT AUTO_INCREMENT PRIMARY KEY,\n    action VARCHAR(50),\n    table_name VARCHAR(50),\n    record_id INT,\n    changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n\nCREATE TRIGGER after_employee_insert\nAFTER INSERT ON employees\nFOR EACH ROW\nBEGIN\n    INSERT INTO audit_log (action, table_name, record_id)\n    VALUES ('INSERT', 'employees', NEW.id);\nEND;\n\nCREATE TRIGGER after_employee_update\nAFTER UPDATE ON employees\nFOR EACH ROW\nBEGIN\n    INSERT INTO audit_log (action, table_name, record_id)\n    VALUES ('UPDATE', 'employees', NEW.id);\nEND;`
    },
    "Transactions": {
      label: "Transactions 💰",
      language: "sql",
      code: `-- SQL Transaction Example\nSTART TRANSACTION;\n\nUPDATE employees SET salary = salary * 1.1 WHERE department = 'Engineering';\nUPDATE employees SET salary = salary * 1.05 WHERE department = 'Marketing';\n\n-- Check if everything is correct\nSELECT * FROM employees WHERE department IN ('Engineering', 'Marketing');\n\n-- Commit if everything is fine\nCOMMIT;\n\n-- Or rollback if there's an error\n-- ROLLBACK;`
    }
  },


Bash: {
    "System Info": {
      label: "System Info 🖥️",
      language: "bash",
      code: `#!/bin/bash\necho "=== System Information ==="\necho "Hostname: $(hostname)"\necho "Current User: $(whoami)"\necho "Current Directory: $(pwd)"\necho "Date & Time: $(date)"\necho ""\necho "=== Disk Usage ==="\ndf -h | head -5\necho ""\necho "=== Memory Usage ==="\nfree -h\necho ""\necho "=== Running Processes ==="\nps aux | head -5`
    },
    "File Organizer": {
      label: "File Organizer 📁",
      language: "bash",
      code: `#!/bin/bash\necho "=== File Organizer ==="\nmkdir -p images documents archives scripts others\nfor file in *; do\n    if [ -f "$file" ]; then\n        case "${file##*.}" in\n            jpg|jpeg|png|gif|svg) mv "$file" images/ 2>/dev/null && echo "Moved $file to images/" ;;\n            txt|pdf|doc|docx|md) mv "$file" documents/ 2>/dev/null && echo "Moved $file to documents/" ;;\n            zip|tar|gz|rar) mv "$file" archives/ 2>/dev/null && echo "Moved $file to archives/" ;;\n            sh|py|js|html|css) mv "$file" scripts/ 2>/dev/null && echo "Moved $file to scripts/" ;;\n            *) mv "$file" others/ 2>/dev/null ;;\n        esac\n    fi\ndone\necho "✅ File organization complete!"`
    },
    
    "Backup Script": {
      label: "Backup Script 💾",
      language: "bash",
      code: `#!/bin/bash\nBACKUP_DIR="/backup/$(date +%Y%m%d)"\nSOURCE_DIR="/home/user/documents"\nmkdir -p "$BACKUP_DIR"\nrsync -av --delete "$SOURCE_DIR/" "$BACKUP_DIR/"\ntar -czf "$BACKUP_DIR.tar.gz" "$BACKUP_DIR"\necho "Backup completed: $BACKUP_DIR.tar.gz"\nrm -rf "$BACKUP_DIR"\nls -lh "$BACKUP_DIR.tar.gz"`
    },
    "Git Auto Commit": {
      label: "Git Auto Commit 🔀",
      language: "bash",
      code: `#!/bin/bash\necho "=== Git Auto Commit ==="\ngit add .\ngit status\nread -p "Enter commit message: " msg\ngit commit -m "$msg"\ngit push origin main\necho "✅ Changes pushed successfully!"`
    },
    "Server Health Check": {
      label: "Server Health Check 🏥",
      language: "bash",
      code: `#!/bin/bash\necho "=== Server Health Check ==="\necho "CPU Usage:"\ntop -bn1 | grep "Cpu(s)"\necho ""\necho "Memory Usage:"\nfree -h\necho ""\necho "Disk Usage:"\ndf -h\necho ""\necho "Network Connections:"\nnetstat -tuln | head -10\necho ""\necho "Failed Services:"\nsystemctl --failed`
    },
    "Log Cleaner": {
      label: "Log Cleaner 🧹",
      language: "bash",
      code: `#!/bin/bash\nLOG_DIR="/var/log"\nDAYS=30\necho "Cleaning logs older than $DAYS days from $LOG_DIR"\nfind "$LOG_DIR" -name "*.log" -type f -mtime +$DAYS -delete\nfind "$LOG_DIR" -name "*.log.*" -type f -mtime +$DAYS -delete\necho "✅ Log cleanup completed!"\ndu -sh "$LOG_DIR"`
    },
    "Monitor Script": {
      label: "Monitor Script 📊",
      language: "bash",
      code: `#!/bin/bash\nwhile true; do\n    clear\n    echo "=== System Monitor ==="\n    echo "Time: $(date)"\n    echo "CPU: $(top -bn1 | grep 'Cpu(s)' | awk '{print $2}' | cut -d'%' -f1)%"\n    echo "Memory: $(free -m | awk 'NR==2{printf "%.2f%%", $3*100/$2}' )"\n    echo "Disk: $(df -h / | awk 'NR==2{print $5}' )"\n    sleep 2\ndone`
    },
    "Docker Cleanup": {
      label: "Docker Cleanup 🐳",
      language: "bash",
      code: `#!/bin/bash\necho "=== Docker Cleanup ==="\ndocker system prune -a -f\ndocker volume prune -f\ndocker network prune -f\necho "✅ Docker cleanup completed!"\ndocker system df`
    },
    "Nginx Deploy": {
      label: "Nginx Deploy 🌐",
      language: "bash",
      code: `#!/bin/bash\necho "=== Nginx Deployment ==="\nNGINX_CONF="/etc/nginx/sites-available/myapp"\ncat > "$NGINX_CONF" <<EOF\nserver {\n    listen 80;\n    server_name myapp.com;\n    root /var/www/myapp;\n    index index.html;\n}\nEOF\nln -sf "$NGINX_CONF" /etc/nginx/sites-enabled/\nnginx -t\nsystemctl reload nginx\necho "✅ Nginx configured successfully!"`
    },
    "SSL Renew": {
      label: "SSL Renew 🔒",
      language: "bash",
      code: `#!/bin/bash\necho "=== SSL Certificate Renewal ==="\ncertbot renew --quiet\nsystemctl reload nginx\necho "✅ SSL certificates renewed!"\ncertbot certificates`
    }
  },
  
  
};

// ==================== CONTINUE TO PART 2 FOR TypeScript, Python, SQL, Bash ====================

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
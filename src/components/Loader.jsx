

// import React from "react";
// import styled from "styled-components";


// const Loader = () => {
//   return (
//     <Wrapper>
//       <div className="loader">

//         {/* Hidden Gradient SVG */}
//         <svg height="0" width="0" className="absolute">
//           <defs>
//             <linearGradient id="b" y1="62" y2="2">
//               <stop stopColor="#973BED" />
//               <stop offset="1" stopColor="#007CFF" />
//             </linearGradient>

//             <linearGradient id="c" y1="64" y2="0">
//               <stop stopColor="#FFC800" />
//               <stop offset="1" stopColor="#FF00FF" />
//               <animateTransform
//                 attributeName="gradientTransform"
//                 type="rotate"
//                 values="0 32 32;-270 32 32;-540 32 32;-810 32 32;-1080 32 32"
//                 dur="8s"
//                 repeatCount="indefinite"
//               />
//             </linearGradient>

//             <linearGradient id="d" y1="62" y2="2">
//               <stop stopColor="#00E0ED" />
//               <stop offset="1" stopColor="#00DA72" />
//             </linearGradient>
//           </defs>
//         </svg>

//         {/* K */}
//         <svg viewBox="0 0 64 64" className="icon">
//           <path
//             d="M 18.42 23.328 L 39.734 53.54 L 30.981 53.54 L 13 28.381 L 7.507 33.069 L 7.507 53.54 L 0 53.54 L 0 0 L 7.507 0 L 7.507 26.147 Q 9.375 23.95 11.298 21.79 A 443.492 443.492 0 0 0 15.125 17.432 L 30.469 0 L 39.075 0 L 18.42 23.328 Z"
//             stroke="url(#b)"
//             strokeWidth="8"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="dash"
//           />
//         </svg>

//         {/* E */}
//         <svg viewBox="0 0 64 64" className="icon">
//           <path
//             d="M 30.066 47.058 L 30.066 53.54 L 0 53.54 L 0 0 L 30.066 0 L 30.066 6.445 L 7.507 6.445 L 7.507 22.375 L 28.711 22.375 L 28.711 28.748 L 7.507 28.748 L 7.507 47.058 L 30.066 47.058 Z"
//             stroke="url(#c)"
//             strokeWidth="10"
//             className="spin"
//           />
//         </svg>

//         {/* Y */}
//         <svg viewBox="0 0 64 64" className="icon">
//           <path
//            d="M 8.203 0 L 21.606 25.635 L 35.083 0 L 43.14 0 L 25.342 32.739 L 25.342 53.54 L 17.834 53.54 L 17.834 33.069 L 0 0 L 8.203 0 Z"
//             stroke="url(#d)"
//             strokeWidth="8"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="dash"
//           />
//         </svg>
//         {/* U */}
//         <svg viewBox="0 0 64 64" className="icon">
//           <path
//            d="M 34.314 0 L 41.785 0 L 41.785 34.644 A 21.345 21.345 0 0 1 39.459 44.714 A 16.772 16.772 0 0 1 32.446 51.709 A 23.025 23.025 0 0 1 22.393 54.232 A 36.951 36.951 0 0 1 20.654 54.272 A 25.226 25.226 0 0 1 10.38 52.368 A 16.279 16.279 0 0 1 5.292 48.871 A 19.393 19.393 0 0 1 0.008 35.193 A 29.726 29.726 0 0 1 0 34.497 L 0 0 L 7.544 0 L 7.544 34.204 A 16.293 16.293 0 0 0 9.332 42.29 A 10.127 10.127 0 0 0 10.931 44.421 Q 14.319 47.864 21.021 47.864 A 15.143 15.143 0 0 0 28.564 46.198 A 10.242 10.242 0 0 0 32.904 41.473 A 17.238 17.238 0 0 0 34.314 34.204 L 34.314 0 Z"
//             stroke="url(#b)"
//             strokeWidth="8"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="dash"
//           />
//         </svg>

//         {/* R */}

//         <svg viewBox="0 0 64 64" className="icon">
//           <path
//          d="M 0 0.005 L 14.758 0.005 A 36.132 36.132 0 0 1 23.902 1.022 A 20.865 20.865 0 0 1 25.946 1.671 A 12.877 12.877 0 0 1 32.52 6.725 Q 34.68 10.113 34.68 15.313 A 14.578 14.578 0 0 1 33.179 22.234 A 13.538 13.538 0 0 1 29.242 26.848 Q 26.807 28.643 24.023 29.668 L 39.001 53.545 L 30.396 53.545 L 17.358 31.646 L 7.507 31.646 L 7.507 53.545 L 0 53.545 L 0 0.005 Z M 14.282 6.377 L 7.507 6.377 L 7.507 25.384 L 14.795 25.384 A 18.622 18.622 0 0 0 21.739 24.281 A 8.576 8.576 0 0 0 24.06 22.912 A 9.021 9.021 0 0 0 26.99 15.606 A 8.254 8.254 0 0 0 24.389 8.866 A 6.606 6.606 0 0 0 23.877 8.483 A 13.646 13.646 0 0 0 17.683 6.546 A 31.821 31.821 0 0 0 14.282 6.377 Z"
//             stroke="url(#c)"
//             strokeWidth="8"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="dash"
//           />
//         </svg>
//       {/* S*/}
//         <svg viewBox="0 0 64 64" className="icon">
//           <path
//            d="M 8.203 0 L 21.606 25.635 L 35.083 0 L 43.14 0 L 25.342 32.739 L 25.342 53.54 L 17.834 53.54 L 17.834 33.069 L 0 0 L 8.203 0 Z"
//             stroke="url(#d)"
//             strokeWidth="8"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="dash"
//           />
//         </svg>

//               {/* A*/}

//         <svg viewBox="0 0 64 64" className="icon">
//           <path
//            d="M 8.203 0 L 21.606 25.635 L 35.083 0 L 43.14 0 L 25.342 32.739 L 25.342 53.54 L 17.834 53.54 L 17.834 33.069 L 0 0 L 8.203 0 Z"
//             stroke="url(#d)"
//             strokeWidth="8"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="dash"
//           />
//         </svg>

//               {/* N */}

//         <svg viewBox="0 0 64 64" className="icon">
//           <path
//            d="M 8.203 0 L 21.606 25.635 L 35.083 0 L 43.14 0 L 25.342 32.739 L 25.342 53.54 L 17.834 53.54 L 17.834 33.069 L 0 0 L 8.203 0 Z"
//             stroke="url(#d)"
//             strokeWidth="8"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="dash"
//           />
//         </svg>

//               {/* G */}

//         <svg viewBox="0 0 64 64" className="icon">
//           <path
//            d="M 8.203 0 L 21.606 25.635 L 35.083 0 L 43.14 0 L 25.342 32.739 L 25.342 53.54 L 17.834 53.54 L 17.834 33.069 L 0 0 L 8.203 0 Z"
//             stroke="url(#d)"
//             strokeWidth="8"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="dash"
//           />
//         </svg>
//       {/* L */}
//         <svg viewBox="0 0 64 64" className="icon">
//           <path
//            d="M 8.203 0 L 21.606 25.635 L 35.083 0 L 43.14 0 L 25.342 32.739 L 25.342 53.54 L 17.834 53.54 L 17.834 33.069 L 0 0 L 8.203 0 Z"
//             stroke="url(#d)"
//             strokeWidth="8"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="dash"
//           />
//         </svg>
//       {/* I */}
//         <svg viewBox="0 0 64 64" className="icon">
//           <path
//            d="M 8.203 0 L 21.606 25.635 L 35.083 0 L 43.14 0 L 25.342 32.739 L 25.342 53.54 L 17.834 53.54 L 17.834 33.069 L 0 0 L 8.203 0 Z"
//             stroke="url(#d)"
//             strokeWidth="8"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="dash"
//           />
//         </svg>
//       {/* K */}
//         <svg viewBox="0 0 64 64" className="icon">
//           <path
//            d="M 8.203 0 L 21.606 25.635 L 35.083 0 L 43.14 0 L 25.342 32.739 L 25.342 53.54 L 17.834 53.54 L 17.834 33.069 L 0 0 L 8.203 0 Z"
//             stroke="url(#d)"
//             strokeWidth="8"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="dash"
//           />
//         </svg>

//               {/* A */}

//         <svg viewBox="0 0 64 64" className="icon">
//           <path
//            d="M 8.203 0 L 21.606 25.635 L 35.083 0 L 43.14 0 L 25.342 32.739 L 25.342 53.54 L 17.834 53.54 L 17.834 33.069 L 0 0 L 8.203 0 Z"
//             stroke="url(#d)"
//             strokeWidth="8"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="dash"
//           />
//         </svg>

//               {/* R */}

//         <svg viewBox="0 0 64 64" className="icon">
//           <path
//            d="M 8.203 0 L 21.606 25.635 L 35.083 0 L 43.14 0 L 25.342 32.739 L 25.342 53.54 L 17.834 53.54 L 17.834 33.069 L 0 0 L 8.203 0 Z"
//             stroke="url(#d)"
//             strokeWidth="8"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="dash"
//           />
//         </svg>

//         <svg viewBox="0 0 64 64" className="icon">
//           <path
//            d="M 8.203 0 L 21.606 25.635 L 35.083 0 L 43.14 0 L 25.342 32.739 L 25.342 53.54 L 17.834 53.54 L 17.834 33.069 L 0 0 L 8.203 0 Z"
//             stroke="url(#d)"
//             strokeWidth="8"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="dash"
//           />
//         </svg>

//         <svg viewBox="0 0 64 64" className="icon">
//           <path
//            d="M 8.203 0 L 21.606 25.635 L 35.083 0 L 43.14 0 L 25.342 32.739 L 25.342 53.54 L 17.834 53.54 L 17.834 33.069 L 0 0 L 8.203 0 Z"
//             stroke="url(#d)"
//             strokeWidth="8"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="dash"
//           />
//         </svg>

//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.div`

// .loader {
//   height: 100vh;
//   background: rgb(4, 0, 12);

//   display: flex;
//   justify-content: center;
//   align-items: center;

//   gap: 10px;
//   flex-wrap: nowrap;   /* 🔥 IMPORTANT */
//   overflow-x: auto;    /* optional if too big */
// }

// .icon {
//   width: 50px;   /* reduce size */
//   height: 50px;
// }}

// .dash {
//   fill: none;
//   stroke-dasharray: 360;
//   stroke-dashoffset: 360;
//   animation: dashArray 2s ease-in-out infinite,
//              dashOffset 2s linear infinite;
// }

// .spin {
//   fill: none;
//   stroke-dasharray: 360;
//   stroke-dashoffset: 360;
//   animation: spinDashArray 2s ease-in-out infinite,
//              spin 8s ease-in-out infinite,
//              dashOffset 2s linear infinite;
//   transform-origin: center;
// }

// /* ANIMATIONS */
// @keyframes dashArray {
//   0% { stroke-dasharray: 0 1 359 0; }
//   50% { stroke-dasharray: 0 359 1 0; }
//   100% { stroke-dasharray: 359 1 0 0; }
// }

// @keyframes spinDashArray {
//   0% { stroke-dasharray: 270 90; }
//   50% { stroke-dasharray: 0 360; }
//   100% { stroke-dasharray: 270 90; }
// }

// @keyframes dashOffset {
//   0% { stroke-dashoffset: 365; }
//   100% { stroke-dashoffset: 5; }
// }

// @keyframes spin {
//   0% { transform: rotate(0deg); }
//   100% { transform: rotate(1080deg); }
// }

// `;

// export default Loader;




import React, { useState, useEffect } from "react";
import styled from "styled-components";

const roles = [
  "FullStack Developer",
  "Java Developer",
  "Python Developer",
  "MERN Stack Developer",
 
];

const Loader = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 300);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      <div className="loader-container">
        {/* Hidden Gradient SVG */}
        <svg height="0" width="0" className="absolute">
          <defs>
            <linearGradient id="grad1" y1="62" y2="2">
              <stop stopColor="#973BED" />
              <stop offset="1" stopColor="#007CFF" />
            </linearGradient>

            <linearGradient id="grad2" y1="64" y2="0">
              <stop stopColor="#FFC800" />
              <stop offset="1" stopColor="#6200ff" />
              <animateTransform
                attributeName="gradientTransform"
                type="rotate"
                values="0 32 32;-270 32 32;-540 32 32;-810 32 32;-1080 32 32"
                dur="18s"
                repeatCount="indefinite"
              />
            </linearGradient>

            <linearGradient id="grad3" y1="62" y2="2">
              <stop stopColor="#00E0ED" />
              <stop offset="1" stopColor="#00DA72" />
            </linearGradient>
          </defs>
        </svg>

        <div className="letters-row">
          {/* K */}
          <svg viewBox="0 0 64 64" className="icon">
            <path
              d="M 18.42 23.328 L 39.734 53.54 L 30.981 53.54 L 13 28.381 L 7.507 33.069 L 7.507 53.54 L 0 53.54 L 0 0 L 7.507 0 L 7.507 26.147 Q 9.375 23.95 11.298 21.79 A 443.492 443.492 0 0 0 15.125 17.432 L 30.469 0 L 39.075 0 L 18.42 23.328 Z"
              stroke="url(#grad1)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="dash"
            />
          </svg>

          {/* E */}
          <svg viewBox="0 0 64 64" className="icon">
            <path
              d="M 30.066 47.058 L 30.066 53.54 L 0 53.54 L 0 0 L 30.066 0 L 30.066 6.445 L 7.507 6.445 L 7.507 22.375 L 28.711 22.375 L 28.711 28.748 L 7.507 28.748 L 7.507 47.058 L 30.066 47.058 Z"
              stroke="url(#grad2)"
              strokeWidth="10"
              className="spin"
            />
          </svg>

          {/* Y */}
          <svg viewBox="0 0 64 64" className="icon">
            <path
              d="M 8.203 0 L 21.606 25.635 L 35.083 0 L 43.14 0 L 25.342 32.739 L 25.342 53.54 L 17.834 53.54 L 17.834 33.069 L 0 0 L 8.203 0 Z"
              stroke="url(#grad3)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="dash"
            />
          </svg>

          {/* U */}
          <svg viewBox="0 0 64 64" className="icon">
            <path
              d="M 34.314 0 L 41.785 0 L 41.785 34.644 A 21.345 21.345 0 0 1 39.459 44.714 A 16.772 16.772 0 0 1 32.446 51.709 A 23.025 23.025 0 0 1 22.393 54.232 A 36.951 36.951 0 0 1 20.654 54.272 A 25.226 25.226 0 0 1 10.38 52.368 A 16.279 16.279 0 0 1 5.292 48.871 A 19.393 19.393 0 0 1 0.008 35.193 A 29.726 29.726 0 0 1 0 34.497 L 0 0 L 7.544 0 L 7.544 34.204 A 16.293 16.293 0 0 0 9.332 42.29 A 10.127 10.127 0 0 0 10.931 44.421 Q 14.319 47.864 21.021 47.864 A 15.143 15.143 0 0 0 28.564 46.198 A 10.242 10.242 0 0 0 32.904 41.473 A 17.238 17.238 0 0 0 34.314 34.204 L 34.314 0 Z"
              stroke="url(#grad1)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="dash"
            />
          </svg>

          {/* R */}
          <svg viewBox="0 0 64 64" className="icon">
            <path
              d="M 0 0.005 L 14.758 0.005 A 36.132 36.132 0 0 1 23.902 1.022 A 20.865 20.865 0 0 1 25.946 1.671 A 12.877 12.877 0 0 1 32.52 6.725 Q 34.68 10.113 34.68 15.313 A 14.578 14.578 0 0 1 33.179 22.234 A 13.538 13.538 0 0 1 29.242 26.848 Q 26.807 28.643 24.023 29.668 L 39.001 53.545 L 30.396 53.545 L 17.358 31.646 L 7.507 31.646 L 7.507 53.545 L 0 53.545 L 0 0.005 Z M 14.282 6.377 L 7.507 6.377 L 7.507 25.384 L 14.795 25.384 A 18.622 18.622 0 0 0 21.739 24.281 A 8.576 8.576 0 0 0 24.06 22.912 A 9.021 9.021 0 0 0 26.99 15.606 A 8.254 8.254 0 0 0 24.389 8.866 A 6.606 6.606 0 0 0 23.877 8.483 A 13.646 13.646 0 0 0 17.683 6.546 A 31.821 31.821 0 0 0 14.282 6.377 Z"
              stroke="url(#grad2)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="dash"
            />
          </svg>

          {/* space (visual spacer) */}
          <div className="spacer" />

          {/* S */}
          <svg viewBox="0 0 64 64" className="icon">
            <path
              d="M 0 52.373 L 0 45.268 A 60.071 60.071 0 0 0 7.031 47.594 A 31.4 31.4 0 0 0 15.271 48.674 A 16.731 16.731 0 0 0 21.478 47.667 A 8.191 8.191 0 0 0 25.269 44.829 A 7.468 7.468 0 0 0 26.55 40.434 A 7.202 7.202 0 0 0 25.305 36.131 A 11.483 11.483 0 0 0 21.368 32.927 A 53.871 53.871 0 0 0 15.382 30.223 A 97.195 97.195 0 0 0 14.319 29.814 A 36.149 36.149 0 0 1 8.789 27.306 A 19.582 19.582 0 0 1 4.486 24.065 A 12.802 12.802 0 0 1 1.685 19.762 Q 0.696 17.29 0.696 14.067 A 12.992 12.992 0 0 1 2.875 6.487 A 13.732 13.732 0 0 1 8.972 1.671 Q 12.891 0.005 18.054 0.005 A 35.495 35.495 0 0 1 25.983 0.847 A 39.01 39.01 0 0 1 32.996 3.154 L 30.615 9.38 A 47.086 47.086 0 0 0 24.353 7.292 A 26.199 26.199 0 0 0 17.834 6.487 Q 14.722 6.487 12.579 7.402 Q 10.437 8.318 9.32 10.002 Q 8.203 11.687 8.203 13.994 Q 8.203 16.594 9.375 18.315 Q 10.547 20.036 13.074 21.428 A 53.696 53.696 0 0 0 19.163 24.198 A 95.601 95.601 0 0 0 19.666 24.394 A 46.913 46.913 0 0 1 27.448 28.13 Q 30.652 30.107 32.336 32.89 A 13.387 13.387 0 0 1 34.021 39.922 Q 34.021 44.682 31.659 48.07 Q 29.297 51.457 25.012 53.252 Q 20.728 55.046 14.832 55.046 A 49.279 49.279 0 0 1 9.174 54.735 A 38.127 38.127 0 0 1 4.175 53.838 A 23.219 23.219 0 0 1 0 52.373 Z"
              stroke="url(#grad3)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="dash"
            />
          </svg>

          {/* A */}
          <svg viewBox="0 0 64 64" className="icon">
            <path
             d="M 48.45 53.76 L 40.576 53.76 L 34.644 37.83 L 13.66 37.83 L 7.8 53.76 L 0 53.76 L 20.435 0 L 28.125 0 L 48.45 53.76 Z M 15.967 31.311 L 32.556 31.311 L 26.917 15.527 A 270.562 270.562 0 0 0 26.129 13.11 A 183.329 183.329 0 0 1 25.067 9.778 Q 24.536 8.057 24.207 6.921 A 84.103 84.103 0 0 1 23.364 10.089 A 115.685 115.685 0 0 1 22.43 13.202 Q 21.973 14.648 21.68 15.527 L 15.967 31.311 Z"
              stroke="url(#grad1)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="dash"
            />
          </svg>

          {/* N */}
          <svg viewBox="0 0 64 64" className="icon">
            <path
             d="M 43.286 0 L 43.286 53.54 L 34.277 53.54 L 6.555 9.668 L 6.262 9.668 A 679.289 679.289 0 0 0 6.519 14.008 A 187.113 187.113 0 0 1 6.757 18.951 Q 6.848 21.533 6.885 24.17 L 6.885 53.54 L 0 53.54 L 0 0 L 8.936 0 L 36.548 43.652 L 36.804 43.652 Q 36.731 42.041 36.621 39.661 Q 36.511 37.28 36.42 34.625 Q 36.328 31.97 36.328 29.59 L 36.328 0 L 43.286 0 Z"
              stroke="url(#grad3)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="dash"
            />
          </svg>

          {/* G */}
          <svg viewBox="0 0 64 64" className="icon">
            <path
             d="M 24.91 32.3 L 24.91 25.745 L 44.246 25.745 L 44.246 52.149 A 54.354 54.354 0 0 1 35.567 54.309 Q 31.099 55.042 25.533 55.042 A 29.086 29.086 0 0 1 13.608 52.781 A 21.328 21.328 0 0 1 11.58 51.746 Q 5.904 48.45 2.956 42.298 Q 0.008 36.145 0.008 27.503 A 30.811 30.811 0 0 1 3.166 13.195 A 25.298 25.298 0 0 1 3.267 13.001 A 22.89 22.89 0 0 1 12.752 3.406 Q 18.978 0 27.767 0 A 41.331 41.331 0 0 1 36.208 0.843 Q 40.255 1.685 43.66 3.186 L 40.95 9.522 A 39.858 39.858 0 0 0 34.633 7.343 Q 31.173 6.446 27.474 6.446 Q 21.322 6.446 16.909 9.046 A 17.252 17.252 0 0 0 10.134 16.37 Q 7.772 21.094 7.772 27.576 A 28.492 28.492 0 0 0 9.749 38.635 Q 11.727 43.36 15.938 45.996 A 19.237 19.237 0 0 0 25.506 48.608 A 31.597 31.597 0 0 0 26.778 48.633 Q 30.111 48.633 32.473 48.267 A 44.535 44.535 0 0 0 36.812 47.388 L 36.812 32.3 L 24.91 32.3 Z"
              stroke="url(#grad2)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="dash"
            />
          </svg>

          {/* L */}
          <svg viewBox="0 0 64 64" className="icon">
            <path
              d="M 7.507 0 L 15.014 0 L 15.014 47.095 L 37.5 47.095 L 37.5 53.54 L 7.507 53.54 L 7.507 0 Z"
              stroke="url(#grad1)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="dash"
            />
          </svg>

          {/* I */}
          <svg viewBox="0 0 64 64" className="icon">
            <path
              d="M 22.522 0 L 29.993 0 L 29.993 53.54 L 22.522 53.54 L 22.522 0 Z"
              stroke="url(#grad2)"
              strokeWidth="10"
              className="spin"
            />
          </svg>

          {/* K */}
          <svg viewBox="0 0 64 64" className="icon">
            <path
              d="M 18.42 23.328 L 39.734 53.54 L 30.981 53.54 L 13 28.381 L 7.507 33.069 L 7.507 53.54 L 0 53.54 L 0 0 L 7.507 0 L 7.507 26.147 Q 9.375 23.95 11.298 21.79 A 443.492 443.492 0 0 0 15.125 17.432 L 30.469 0 L 39.075 0 L 18.42 23.328 Z"
              stroke="url(#grad3)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="dash"
            />
          </svg>

          {/* A */}
          <svg viewBox="0 0 64 64" className="icon">
            <path
              d="M 29.782 8.599 L 42.56 55.266 L 35.155 55.266 L 31.672 41.854 L 17.091 41.854 L 13.608 55.266 L 6.24 55.266 L 20.149 8.599 Z M 24.381 24.107 L 20.821 35.983 L 27.979 35.983 L 24.381 24.107 Z"
              stroke="url(#grad1)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="dash"
            />
          </svg>

          {/* R */}
          <svg viewBox="0 0 64 64" className="icon">
            <path
              d="M 0 0.005 L 14.758 0.005 A 36.132 36.132 0 0 1 23.902 1.022 A 20.865 20.865 0 0 1 25.946 1.671 A 12.877 12.877 0 0 1 32.52 6.725 Q 34.68 10.113 34.68 15.313 A 14.578 14.578 0 0 1 33.179 22.234 A 13.538 13.538 0 0 1 29.242 26.848 Q 26.807 28.643 24.023 29.668 L 39.001 53.545 L 30.396 53.545 L 17.358 31.646 L 7.507 31.646 L 7.507 53.545 L 0 53.545 L 0 0.005 Z M 14.282 6.377 L 7.507 6.377 L 7.507 25.384 L 14.795 25.384 A 18.622 18.622 0 0 0 21.739 24.281 A 8.576 8.576 0 0 0 24.06 22.912 A 9.021 9.021 0 0 0 26.99 15.606 A 8.254 8.254 0 0 0 24.389 8.866 A 6.606 6.606 0 0 0 23.877 8.483 A 13.646 13.646 0 0 0 17.683 6.546 A 31.821 31.821 0 0 0 14.282 6.377 Z"
              stroke="url(#grad2)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="dash"
            />
          </svg>
        </div>

        <div className={`role-text ${fade ? "fade-in" : "fade-out"}`}>
          {roles[currentRole]}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .loader-container {
    height: 100vh;
    background: rgb(4, 0, 12);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .letters-row {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    flex-wrap: wrap;
    padding: 0 20px;
    margin-bottom: 2rem;
  }

  .icon {
    width: 68px;
    height: 68px;
  }

  .spacer {
    width: 16px;
  }

//   .dash {
//     fill: none;
//     stroke-dasharray: 360;
//     stroke-dashoffset: 360;
//     animation: dashArray 2s ease-in-out infinite,
//                dashOffset 2s linear infinite;
//   }

//   .spin {
//     fill: none;
//     stroke-dasharray: 360;
//     stroke-dashoffset: 360;
//     animation: spinDashArray 2s ease-in-out infinite,
//                spin 8s ease-in-out infinite,
//                dashOffset 2s linear infinite;
//     transform-origin: center;
//   }


.dash {
  fill: none;
  stroke-dasharray: 360;
  stroke-dashoffset: 360;
  animation: dashArray 6s ease-in-out infinite,      /* ← Change from 2s to 4s */
             dashOffset 6s linear infinite;          /* ← Change from 2s to 4s */
}

.spin {
  fill: none;
  stroke-dasharray: 360;
  stroke-dashoffset: 360;
  animation: spinDashArray 4s ease-in-out infinite,  /* ← Change from 2s to 4s */
             spin 12s ease-in-out infinite,          /* ← Change from 8s to 12s */
             dashOffset 4s linear infinite;          /* ← Change from 2s to 4s */
  transform-origin: center;
}

  .role-text {
    font-size: 2.5rem;
    font-weight: 600;
    letter-spacing: 2px;
    background: linear-gradient(135deg, #ff8a00, #da1b60, #973bed);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transition: opacity 0.3s ease-in-out;
    text-align: center;
    padding: 0 20px;
  }

  .fade-in {
    opacity: 1;
  }

  .fade-out {
    opacity: 0;
  }

  /* ANIMATIONS */
  @keyframes dashArray {
    0% { stroke-dasharray: 0 1 359 0; }
    50% { stroke-dasharray: 0 359 1 0; }
    100% { stroke-dasharray: 359 1 0 0; }
  }

  @keyframes spinDashArray {
    0% { stroke-dasharray: 270 90; }
    50% { stroke-dasharray: 0 360; }
    100% { stroke-dasharray: 270 90; }
  }

  @keyframes dashOffset {
    0% { stroke-dashoffset: 365; }
    100% { stroke-dashoffset: 5; }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(1080deg); }
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .icon {
      width: 32px;
      height: 32px;
    }
    .role-text {
      font-size: 1.8rem;
    }
    .spacer {
      width: 8px;
    }
  }
`;

export default Loader;
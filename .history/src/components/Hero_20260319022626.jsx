import React, { useEffect, useState } from "react";
import styled from "styled-components";
import profile from "../assets/p-pic.jpg";
import './CSS/Hero.css'

const Hero = () => {

  const rolesData = [
    {
      title: "Full Stack Developer",
      desc: "I build complete web applications from frontend to backend using modern technologies like React, Node.js, and databases."
    },
    {
      title: "Java Developer",
      desc: "Strong foundation in Java with experience in OOP, backend logic, and building scalable applications."
    },
    {
      title: "MERN Stack Developer",
      desc: "Experienced in MongoDB, Express, React, and Node.js to create fast and scalable full-stack applications."
    },
    {
      title: "Python Developer",
      desc: "Skilled in Python for scripting, backend development, and problem solving with clean and efficient code."
    }
  ];

 const [index, setIndex] = useState(-1);

useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => {
      if (prev === rolesData.length - 1) return -1; // back to intro
      return prev + 1;
    });
  }, 4000);

  return () => clearInterval(interval);
}, []);

  return (
    
      <div className="hero">

        {/* LEFT IMAGE */}
        <div className="left">
          <img src={profile} alt="profile" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="right">

          {/* INTRO */}
          {index === -1 && (
            <div className="intro">
              <h1>
                Hi, I'm <span>Keyur Ratnkant Sanglikar</span>
              </h1>

              <p>
                B.Tech in Computer Science (2024 Passout) <br />
                Diploma | 12th | 10th <br /><br />

                Passionate developer focused on building scalable web applications
                and continuously learning new technologies.
              </p>

              <div className="extra">
                <p><strong>Skills:</strong> Java, MERN, Python, SQL</p>
              
              </div>
            </div>
          )}

          {/* DYNAMIC ROLE */}
       {index === -1 ? (
  <div className="intro">
    ...
  </div>
) : (
  rolesData[index] && (
    <div className="role-box">
      <h2 className="role-title">
        {rolesData[index].title}
      </h2>
      <p className="role-desc">
        {rolesData[index].desc}
      </p>
    </div>
  )
)}

        </div>

      </div>

  );
};

export default Hero;
import React, { Component } from 'react';

import NavBar from './NavBar';
import SideBar from './SideBar';

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTrello } from "react-icons/fa";
import { SiVisualstudiocode } from "react-icons/si";
import { SiIntellijidea } from "react-icons/si";
import { FaReact } from "react-icons/fa";

class Skills extends Component {
  render(){
    const skills = [
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3Alt />, name: "CSS3" },
      { icon: <IoLogoJavascript />, name: "JavaScript" },
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <FaJava />, name: "Java" },
      { icon: <FaReact />, name: "React" },
      { icon: <SiMysql />, name: "MySQL" },
      { icon: <SiIntellijidea />, name: "IntelliJ IDEA" },
      { icon: <SiVisualstudiocode />, name: "Visual Studio Code" },
      { icon: <FaGithub />, name: "GitHub" },
      { icon: <FaTrello />, name: "Trello" },
    ];
    const softSkills = [
      "Communication",
      "Critical Thinking",
      "Teamwork",
      "Responsibility",
      "Problem Solving",
      "Time Management",
      "Adaptability",
      "Creativity",
    ];

    return(
      <>
      <NavBar />
      <div className='group-icons'>
          <p className='mySkills'>Technical Skills.</p>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <div key={skill + index} className="skill">
                {skill.icon}
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        <div className='soft-skills'>
          <p className='mySkills'>Soft Skills.</p>
          {/* <div className="skills-container"> */}
          <div className="skills-container">
            {softSkills.map((skill, index) => (
              <div key={skill + index} className="skill">
              <p>{skill}</p>
              </div>
            ))}
          </div>
          {/* </div> */}
        </div>
        <div className='skills-container'>
          <p className='description1'>Planning, designing, and implementing web projects with integration of databases and APIs, user session management, and utilization of session and cookies for data storage. Implementation of the Model-View-Controller (MVC) architecture pattern.</p>
          <p className='description'>With Java, I have implemented sequences, conditionals, loop structures, and arrays to solve complex problems.</p>
        </div>
      </div>
      <SideBar />
    </>
  )
}
}

export default Skills;
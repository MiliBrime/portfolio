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
      { icon: <FaReact />, name: "React" },
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <SiMysql />, name: "MySQL" },
      { icon: <FaJava />, name: "Java" },
      { icon: <FaGithub />, name: "GitHub" },
      { icon: <FaTrello />, name: "Trello" },
      { icon: <SiVisualstudiocode />, name: "Visual Studio Code" },
      { icon: <SiIntellijidea />, name: "IntelliJ IDEA" },
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
        <div className='centerInfo-about'>
          <p className='mySkills'>Technical Skills.</p>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill">
              {skill.icon}
              <p>{skill.name}</p>
            </div>
          ))}
          </div>
        </div>
      </div>
        <div className='soft-skills'>
            <p className='mySkills'>Soft Skills.</p>
            <ul className="soft-skills-list">
              {softSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
      <SideBar />
    </>
  )
}
}

export default Skills;
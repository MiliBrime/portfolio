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

class About extends Component {
  render(){
    return(
        <>
            <NavBar/>
            <div>
                <FaHtml5/>
                <FaCss3Alt/>
                <IoLogoJavascript/>
                <FaNodeJs/>
                <SiMysql/>
                <FaJava/>
                <FaGithub/>
                <FaTrello/>
                <SiVisualstudiocode/>
                <SiIntellijidea/>
                <FaReact/>
            </div>
            <div>
                <p>soft skills</p>
            </div>
            <SideBar/>
        </>
    )
  }
}

export default About;
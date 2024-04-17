import React, { Component } from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";


class SideBar extends Component {
  render(){
    return(
        <div className='sideBar'>
            {/* links */}
            <div className="github"><FaGithub className='icono'/></div>
            <div className="linkedin"><FaLinkedin className='icono'/></div>
            <div className="mail"><CiMail className='icono'/></div>
        </div>
    )
  }
}

export default SideBar;
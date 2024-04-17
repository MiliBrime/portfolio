import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";


class SideBar extends Component {
  render(){
    return(
        <div className='sideBar'>
            {/* links */}
            <Link className="github" to='https://github.com/MiliBrime' target="_blank"><FaGithub className='icono'/></Link>
            <Link className="linkedin" to='https://www.linkedin.com/in/milagros-brime/' target="_blank"><FaLinkedin className='icono'/></Link>
            <Link to='mailto:milibrime@hotmail.com' className="mail"><CiMail className='icono'/></Link>
        </div>
    )
  }
}

export default SideBar;
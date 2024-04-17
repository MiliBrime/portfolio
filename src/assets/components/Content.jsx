import React, { Component } from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import profile from '../images/perfil-.jpg'; 

class Content extends Component {
  render(){
    return(
        <div className='centerContent'>
            <div className='centerInfo'>
                <p className='hello'>Hello!</p>
                <p className='name'>I'm Milagros.</p>
                <p className='fullstack'> Full Stack Web Developer<span className="cursor"></span></p>
                <p className='text'>Proactive and eager to find new challenges that allow me to enhance my professional development. I adapt easily and enjoy a collaborative environment.</p>
                <button className="aboutMeButton" onClick={this.handleClick}>About me <FaLongArrowAltRight className='arrow'/></button>
            </div>
            <div className='img'>
                <img className="profileImg"src={profile}></img>
            </div>
        </div>
    )
  }
}

export default Content;
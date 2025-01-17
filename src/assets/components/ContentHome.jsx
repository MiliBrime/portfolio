import React, { Component } from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import profile from '../images/perfil-.jpg'; 

class ContentHome extends Component {
  handleClick = () => {
    window.location.href = '/about';
  };
  
  render(){
    return(
        <div className='centerContent'>
            <div className='centerInfo'>
                <p className='hello'>Hello!</p>
                <p className='name'>I'm Milagros.</p>
                <p className='fullstack'> Full Stack Web Developer<span className="cursor"></span></p>
                <p className='text'>Computer Science student with skills in the design and development of web applications. I am a proactive entrepreneur, always finding ways to learn and improve. My curiosity has led me to take courses in diverse areas such as manicures, stamp making, piercings, mosaic art, etc. </p><p className='text'>
I adapt easily and enjoy a collaborative environment, continuously seeking new challenges to enhance my professional development.</p>
                <button className="aboutMeButton" onClick={this.handleClick}>About me <FaLongArrowAltRight className='arrow'/></button>
            </div>
            <div className='img'>
                <img className="profileImg"src={profile}></img>
            </div>
        </div>
    )
  }
}

export default ContentHome;
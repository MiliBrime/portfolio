import React, { Component } from 'react';

import { CiLocationOn } from "react-icons/ci";
import { PiStudent } from "react-icons/pi";

import java from '../images/java.jpg'; 
import dh from '../images/certificado-DH.jpg'; 

import NavBar from './NavBar';
import SideBar from './SideBar';

class About extends Component {
  render(){
    return(
        <>
            <NavBar/>
            <div className='centerInfo-about'>
            <p className='aboutMe'>About me.</p>
            <p className='text'>Full name: Milagros Priscila Brime.</p>
            <p className='text'>Age: 25.</p>
            <p className='text'> <CiLocationOn/> From: Argentina, Buenos Aires, La Plata.</p>
            <p className='text'> <PiStudent/> I’m studying university programmer analyst at UNLP (1st year).</p>
            <p className='text-cont'>September 2023 - April 2024, Digital House</p>
            <p className='text-cont-1'>Full Stack Web Developer. </p>
            <p className='text-cont-2'>Planning, design and implementation of web projects, with integration of databases and APIS. Management of user sessions, session use and cookies to store information.</p>
            <p className='text-cont'>August 2022 - April 2023, UTN</p>
            <p className='text-cont-1'>Initial JAVA developer.</p>
            <p className='text-cont-2'>I acquired knowledge in object-oriented programming in Java. Used IntelliJ IDEA as development environment.</p>
            </div>
            <img className='img-dh' src={dh}></img>
            <img className='img-java' src={java}></img>
            <SideBar/>
        </>
    )
  }
}

export default About;
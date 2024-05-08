import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import NavBar from './NavBar';
import SideBar from './SideBar';

import mercadoLiebre from '../images/mercadoLiebre.png';
import theVitaminShop from '../images/theVitaminShop.png';

import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { SiE, SiExpress } from "react-icons/si";


class Work extends Component {
    render(){
        return(
            <>
                <NavBar/>
                <SideBar/>
                <div className='group-icons'>
                    <p className='mySkills'>Projects and work.</p>
                    <div className='singleProject'>
                        <img className= 'mercadoLiebre' src={mercadoLiebre}></img>
                        <div className='name-description'>
                            <p className='projectName'>Mercado Liebre</p>
                            <div className='language'>
                                <FaHtml5 className='skill-icon'/>
                                <p className='skill-name'>HTML</p>
                            </div>
                            <div className='language'>
                                <FaCss3 className='skill-icon'/>
                                <p className='skill-name'>CSS</p>
                            </div>
                            <div className='language'>
                                <IoLogoJavascript className='skill-icon'/>
                                <p className='skill-name'>JavaScript</p>
                            </div>
                            <p className='projectDescription'>MercadoLiebre is a simple webpage developed with HTML and CSS. It doesn't have any additional frameworks or libraries. </p>
                            <p className='projectDescription'>Features: Product catalog with images and descriptions. Login and Registration form view. Responsive design to adapt to different devices.</p>
                            <Link to= 'https://github.com/MiliBrime/MercadoLiebre.git' target="_blank" className='links'>
                                <FaGithub className='link-icon'/>
                                <p className='link-name'>Code</p>
                            </Link>
                            <Link to= 'https://ml-milagros-brime.onrender.com/' target="_blank" className='links'>
                                <FaLink className='link-icon'/>
                                <p className='link-name'>View page</p>
                            </Link>
                        </div>
                    </div>
                    <div className='singleProject'>
                        <img className= 'mercadoLiebre' src={theVitaminShop}></img>
                        <div className='name-description'>
                            <p className='projectName'>The vitamin shop</p>
                            <div className='language'>
                                <IoLogoJavascript className='skill-icon'/>
                                <p className='skill-name'>JavaScript</p>
                            </div>
                            <div className='language'>
                                <FaCss3 className='skill-icon'/>
                                <p className='skill-name'>CSS</p>
                            </div>
                            <div className='language'>
                                <FaHtml5 className='skill-icon'/>
                                <p className='skill-name'>HTML</p>
                            </div>
                            <div className='language'>
                                <FaNodeJs className='skill-icon'/>
                                <p className='skill-name'>Node.js</p>
                            </div>
                            <div className='language'>
                                <SiExpress className='skill-icon'/>
                                <p className='skill-name'>Express</p>
                            </div>
                            <p className='projectDescription'>MercadoLiebre is a simple webpage developed with HTML and CSS. It doesn't have any additional frameworks or libraries. </p>
                            <p className='projectDescription'>Features: Product catalog with images and descriptions. Login and Registration form view. Responsive design to adapt to different devices.</p>
                            <Link to= 'https://github.com/MiliBrime/MercadoLiebre.git' target="_blank" className='links'>
                                <FaGithub className='link-icon'/>
                                <p className='link-name'>Code</p>
                            </Link>
                            <Link to= 'https://ml-milagros-brime.onrender.com/' target="_blank" className='links'>
                                <FaLink className='link-icon'/>
                                <p className='link-name'>View page</p>
                            </Link>
                        </div>
                    </div>
                    <div className='singleProject'>
                        <img className= 'mercadoLiebre' src={mercadoLiebre}></img>
                        <div className='name-description'>
                            <p className='projectName'>Mercado Liebre</p>
                            <div className='language'>
                                <FaHtml5 className='skill-icon'/>
                                <p className='skill-name'>HTML</p>
                            </div>
                            <div className='language'>
                                <FaCss3 className='skill-icon'/>
                                <p className='skill-name'>CSS</p>
                            </div>
                            <div className='language'>
                                <IoLogoJavascript className='skill-icon'/>
                                <p className='skill-name'>JavaScript</p>
                            </div>
                            <p className='projectDescription'>MercadoLiebre is a simple webpage developed with HTML and CSS. It doesn't have any additional frameworks or libraries. </p>
                            <p className='projectDescription'>Features: Product catalog with images and descriptions. Login and Registration form view. Responsive design to adapt to different devices.</p>
                            <Link to= 'https://github.com/MiliBrime/MercadoLiebre.git' target="_blank" className='links'>
                                <FaGithub className='link-icon'/>
                                <p className='link-name'>Code</p>
                            </Link>
                            <Link to= 'https://ml-milagros-brime.onrender.com/' target="_blank" className='links'>
                                <FaLink className='link-icon'/>
                                <p className='link-name'>View page</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Work;
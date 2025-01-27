import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import NavBar from './NavBar';
import SideBar from './SideBar';

import mercadoLiebre from '../images/mercadoLiebre.png';
import theVitaminShop from '../images/theVitaminShop.png';
import dashboard from '../images/dashboardTVS.png';

import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { SiE, SiExpress } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { FaReact } from "react-icons/fa";

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
                            <div className='language'>
                                <DiMysql className='skill-icon'/>
                                <p className='skill-name'>MySql</p>
                            </div>
                            <p className='projectDescription'>The Vitamin Shop offers an intuitive and engaging shopping experience for dietary products. Users can register, add products to their cart, and make purchases easily. We implement MVC, sessions, and cookies for secure and efficient navigation.</p>
                            <p className='projectDescription'>Additionally, there is an admin mode where you can create, edit, and delete products and users as needed.</p>
                            <Link to= 'https://github.com/MiliBrime/grupo_5_dietetica.git' target="_blank" className='links'>
                                <FaGithub className='link-icon'/>
                                <p className='link-name'>Code</p>
                            </Link>
                        </div>
                    </div>
                    <div className='singleProject'>
                        <img className= 'mercadoLiebre' src={dashboard}></img>
                        <div className='name-description'>
                            <p className='projectName'>Dashboard - The vitamin shop</p>
                            <div className='language'>
                                <FaReact className='skill-icon'/>
                                <p className='skill-name'>React</p>
                            </div>
                            <div className='language'>
                                <IoLogoJavascript className='skill-icon'/>
                                <p className='skill-name'>JavaScript</p>
                            </div>
                            <div className='language'>
                                <FaCss3 className='skill-icon'/>
                                <p className='skill-name'>CSS</p>
                            </div>
                            <p className='projectDescription'>This project in development utilizes a custom API from The Vitamin Shop's dietetics project to provide administrators with comprehensive control over their business in a clear and efficient manner.</p>
                            <p className='projectDescription'>It offers a visual presentation of key data, including product and user listings, as well as the quantity of products per category, enabling administrators to make informed decisions and manage their inventory efficiently.</p>
                            <Link to= 'https://github.com/MiliBrime/grupo_5_react.git' target="_blank" className='links'>
                                <FaGithub className='link-icon'/>
                                <p className='link-name'>Code</p>
                            </Link>
                        </div>
                    </div>
                    <div className='work'>
                        <p className='projectName'>Independent Work with Microenterprises</p>
                        <p className='projectDescription'>Throughout my career as a freelance professional, I've had the privilege of working on a variety of projects within the realm of microenterprises. Below, I detail some of my responsibilities and standout achievements:</p>
                        <ul className='projectDescription'>
                            <li>
                                <h4>Project Management and Execution:</h4><p>I led and executed multiple projects, demonstrating strategic planning skills and efficient execution. </p>
                            </li>
                            <li>
                                <h4>Customer Service: </h4><p>I implemented customer service strategies that resulted in high levels of satisfaction and customer retention. My focus on understanding customer needs and providing effective solutions significantly contributed to maintaining strong client relationships. </p>
                            </li>
                            <li>
                                <h4>Supply Chain Management: </h4><p>I effectively coordinated with distributors, optimizing the supply chain and improving operational efficiency. I established solid relationships with key suppliers and developed efficient processes to ensure timely delivery of products and services.</p>
                            </li>
                            <li>
                                <h4>Social Media Management: </h4><p>I played a key role in managing and administering social media platforms, creating engaging content and increasing interaction with followers. My efforts resulted in a significant increase in audience engagement and the expansion of online presence for the projects.</p>
                            </li>
                            <li>
                                <h4>Project Management with Trello: </h4><p className='pList'>I utilized the Trello platform effectively to plan and organize tasks, ensuring smooth and timely project execution. Trello's visual structure facilitated collaboration with team members and efficient management of delivery timelines.</p></li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default Work;
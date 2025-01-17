import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class NavBar extends Component {
  render(){
    return(
      <div className='navBarContainer'>
      <div className='topBar'>
        {/* links */}
        <NavLink to='/' className='itemTopBar'>HOME</NavLink> 
        <NavLink to='/about' className='itemTopBar'>ABOUT</NavLink>
        <NavLink to='/skills' className='itemTopBar'>SKILLS</NavLink>
        <NavLink to='/projects' className='itemTopBar'>PROJECTS</NavLink>
        <NavLink to='/contact' className='itemTopBar'>CONTACT</NavLink>
      </div>
      </div>
    )
  }
}

export default NavBar;
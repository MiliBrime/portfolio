import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component {
  render(){
    return(
      <div className='navBarContainer'>
      <div className='topBar'>
        {/* links */}
        <Link to='/' className='itemTopBar'>HOME</Link> 
        <Link to='/about' className='itemTopBar'>ABOUT</Link>
        <Link to='/skills' className='itemTopBar'>SKILLS</Link>
        <Link to='/projects' className='itemTopBar'>PROJECTS</Link>
        <p className='itemTopBar'>CONTACT</p>
      </div>
      </div>
    )
  }
}

export default NavBar;
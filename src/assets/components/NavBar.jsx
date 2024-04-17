import React, { Component } from 'react';

class NavBar extends Component {
  render(){
    return(
      <div className='navBarContainer'>
      <div className='topBar'>
        {/* links */}
        <p className='itemTopBar'>HOME</p> 
        <p className='itemTopBar'>ABOUT</p>
        <p className='itemTopBar'>SKILLS</p>
        <p className='itemTopBar'>WORK</p>
        <p className='itemTopBar'>CONTACT</p>
      </div>
      </div>
    )
  }
}

export default NavBar;
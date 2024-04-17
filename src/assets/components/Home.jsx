import React, { Component } from 'react';

import NavBar from './NavBar';
import ContentHome from './ContentHome';
import SideBar from './SideBar';

class Home extends Component {
    render(){
    return(
      <>
      <NavBar/>
      <ContentHome/>
      <SideBar/>
      </>
    )
  }
}

export default Home;
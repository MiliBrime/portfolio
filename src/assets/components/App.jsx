import React, { Component } from 'react';
import "../../App.css"
import NavBar from './NavBar';
import Content from './Content';
import SideBar from './SideBar';

class App extends Component {
  render(){
    return(
      <>
      <NavBar/>
      <Content/>
      <SideBar/>
      </>
    )
  }
}

export default App;
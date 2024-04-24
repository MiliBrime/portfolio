import React, { Component } from 'react';
import {Link, Route, Routes} from 'react-router-dom';

import '../../App.css';

import Home from './Home';
import About from './About';
import Skills from './Skills';

class App extends Component {
  render(){
    return(
      <>
      <Link to="/" exact="true"></Link>
      <Link to="/about"></Link>
      <Link to="/skills"></Link>


      <Routes>
        <Route path= "/" exact="true" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/skills" element={<Skills/>}/>
      </Routes>
      </>
    )
  }
}

export default App;
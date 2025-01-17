import React, { Component } from 'react';
import {Link, Route, Routes} from 'react-router-dom';

import '../../App.css';

import Home from './Home';
import About from './About';
import Skills from './Skills';
import Work from './Work';
import Contact from './Contact';

class App extends Component {
  render(){
    return(
      <>
      <Link to="/" exact="true"></Link>
      <Link to="/about"></Link>
      <Link to="/skills"></Link>
      <Link to= "/projects"></Link>
      <Link to= "/contact"></Link>

      <Routes>
        <Route path= "/" exact="true" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/projects" element={<Work/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      </>
    )
  }
}

export default App;
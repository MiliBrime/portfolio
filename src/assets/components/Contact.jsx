import React, {Component} from "react";

import NavBar from './NavBar';
import ContentHome from './ContentHome';
import SideBar from './SideBar';

class Contact extends Component{
    render(){
        return(
            <>
            <NavBar/>
            <div className="div-form">
                <form className="form">
                    <input type="text" className="input-form" placeholder="Name"></input>
                    <input type="email" className="input-form" placeholder="Email"></input>
                    <textarea className="input-form-text" placeholder="Message"></textarea>
                </form>
            </div>
            <SideBar/>
            </>
        )
    }
}

export default Contact;
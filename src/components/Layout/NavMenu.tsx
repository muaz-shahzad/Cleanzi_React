import React from 'react'
import { NavLink } from 'react-router-dom';

const NavMenu = () => {
    return (
        <React.Fragment>
            <ul id="mainmenu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About Us</NavLink></li>
                <li><NavLink to="/services">Services</NavLink></li>
                <li><NavLink to="/work-with-us">Work With Us</NavLink></li> 
                <li><NavLink to="/gift-cards">Gift Cards</NavLink></li> 
                <li><NavLink to="/offers">Offers</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
                
                <li><NavLink  to="/Contact">Contact Us</NavLink></li>
            </ul>
        </React.Fragment>
    )
}

export default NavMenu

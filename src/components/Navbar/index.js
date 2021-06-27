import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';

const Navbar = () => {
    return (

                

                <nav>
                    <ul className="links">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About Us</NavLink></li>
                        <li><NavLink to="/service">Services</NavLink></li>
                        <li><NavLink to="/contact">Contact Us</NavLink></li>
                        <li><NavLink to="/works">Workes</NavLink></li>
                    </ul>
                </nav>
             
          
          )
}

export default Navbar;

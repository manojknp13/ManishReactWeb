import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';
import Pic from '../../assets/img/26.jpg';

const Navbar = () => {
    return (

                <nav>
                    <div className="profile-pic">
                        <img src={Pic} alt="profile pic" />
                    </div>
                    <ul className="links">
                        <li><NavLink  exact={true} to="/" activeClassName="active">Home</NavLink></li>
                        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
                        <li><NavLink to="/service" activeClassName="active">Services</NavLink></li>
                        <li><NavLink to="/contact" activeClassName="active">Contact Us</NavLink></li>
                        <li><NavLink to="/works" activeClassName="active">Works</NavLink></li>
               
                    </ul>
                </nav>
             
          
          )
}

export default Navbar;

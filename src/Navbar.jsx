import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <section>
                <nav>
                    <ul>
                        <li><NavLink to="home">Home</NavLink></li>
                        <li><NavLink to="about">About Us</NavLink></li>
                        <li><NavLink to="service">Services</NavLink></li>
                        <li><NavLink to="contact">Contact Us</NavLink></li>
                    </ul>
                </nav>
                <article>
                
                </article>
            </section>
        </>
    )
}

export default Navbar;

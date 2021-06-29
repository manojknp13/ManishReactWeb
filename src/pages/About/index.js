import React from 'react';
import UserPic from '../../assets/img/26.jpg';
import './index.scss';

const About = () => {
    return (
        <div className="about-container">

            <h1 className="about-me">ABOUT ME</h1>

            <div className="block">
                <div className="left-block">
                    <div className="profile-pic">
                        <img src={UserPic} alt="user picture" />
                    </div>
                </div>

                <div className="right-block">

                    <div className="name">
                        <h3>I am <span>Manish Dwivedi</span></h3>
                    </div>
                    <div className="about">
                        <p>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
                    </div>
                    <div className="details">
                        <li className="list">Full Name</li>
                        <li className="list">Age</li>
                        <li className="list">Nationality</li>
                        <li className="list">Language</li>
                        <li className="list">Address</li>
                        <li className="list">Freelance</li>
                    </div>
                    <button>DOWNLOAD CV</button>
                </div>
            </div>

        </div>
    )
}

export default About

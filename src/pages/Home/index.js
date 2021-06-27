import React from 'react'
import './index.scss';
import facebook from '../../assets/img/facebook.png';
import twitter from '../../assets/img/twitter.png';
import github from '../../assets/img/github.png';

const Home = () => {
    return (
        <div className="home">
            <div className="heading">
                <span className="greetings">Hi, i am</span>
                <span className="greetings name"> Manish Dwivedi</span>
            </div>
            <div className="about-user">
                <p className="para">I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
            </div>
            <div className="social-icon">
                <img className="icon" src={facebook} alt="facebook" />
                <img className="icon" src={twitter} alt="twitter" />
                <img className="icon" src={github} alt="git_hub" />
            </div>
        </div>
    )
}

export default Home;

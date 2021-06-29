import React from 'react'
import "../Contact/index.scss";

const Contact = () => {
    return (
        <>
        <div className="primary"> 
        <div className="left-content">
            <h1 className="conntact-me">CONTACT ME</h1>
            <hr />
         
            <h4 className="get-in-touch">Get In Touch</h4>
            <form className="ur-form">
                <label>Enter your name*</label>
                <br />
                <input type="text" name="ur-name" />
                <br />  <br />
                <label>Enter your email*</label>
                <br />
                <input type="email" name="ur-email" />
                <br />  <br />
                <label>Enter your subject*</label>
                <br />
                <input type="text" name="ur-subject" />
                <br />  <br />
                <label>Enter your Message*</label>
                <br />
                <textarea id="textarea" name="ur-message" />
            </form>
            <br />
            <button className="submit">Send Mail</button>
            </div>
            <div className="right-content">
                <h1>Phone</h1> <br />
                <p>+012-3456-7891</p>
                <p>+012-3456-7891</p>
            </div>
            </div>
        </>
    )
}

export default Contact;

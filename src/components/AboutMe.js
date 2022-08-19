import React from "react";
import {
        Link,
      } from "react-router-dom";


export default function About() {
    return (
        <main>
        <section class="aboutme">
        <div className="email">
             <input type="email" className="enter" placeholder="Enter Email" required/> <button className="chat">Let's Chat</button>  
        </div>

        <div className="myname">
                <h2>Hi, I am </h2> <h1 className="eke">Eke, Adaobi Christiana</h1>
                <p className="hi"> <strong>A full-stack developer and graphics designer. </strong></p>
        </div>

        </section>

        <section className="image">
        <div className="img">
        <img src={process.env.PUBLIC_URL + "/me.png"} width="500px" alt="me" />
        </div>

        <div className="profile">
                <h1 className="prof">Profile</h1>
                <p>I am hardworking, reliable, honest, fast learner and a driven individual who isn't afraid to face a challenge. </p>
                <p>My priorities includes; God, family, my career, and self-care and improvement. While I enjoy the following; reading, listening music and creating videos etc. </p>
                <p>You can navigate to my skills, educational experience and professional experience, at the navbar. Thank you. </p>
        </div>

        </section>

        <div className="info">
                <small>For more information </small><br />
                <button class="contact-me"><Link to="/Contact" className="contacting">Contact Me</Link></button>
        </div>

        </main>

    );

    }
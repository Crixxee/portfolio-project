import React from "react";


import html from "../images/html.png";
import css from "../images/css.png";
import django from "../images/django.png";
import javascript from "../images/javascript.png";
import python from "../images/python.png";
import video from "../images/video.png";
import graphics from "../images/graphics.png";
import animation from "../images/animation.png";
import react from "../images/react.png";



export default function Skills() {
    return (
            <section>
                <div className="all">
                    <h1 className="forall">MY SKILLS</h1>
                    <p className="lorem">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est.  My skills include the following below;</p>
           
                </div>

                <div class="myskills">
               
               <div className="one">
                <div className="arrange">
                <img className="emage" src={html} alt="" />
                <h2 className="word">HTML</h2>
                </div>

                <div className="arrange">
                <img className="emage" src={css} alt="" />
                <h2 className="word">CSS</h2>
                </div>

                <div className="arrange">
                <img className="emage" src={javascript} alt="" />
                <h2 className="word">JAVASCRIPT</h2>
                </div>
                </div>

                <div className="two">
                <div className="arrange">
                <img className="emage" src={python} alt="" />
                <h2 className="word">PYTHON</h2>
                </div>
                
                <div className="arrange" >
                <img className="emage" src={django} alt="" />
                <h2 className="word">DJANGO</h2>
                </div>

                <div className="arrange" >
                <img className="emage" src={react} alt="" />
                <h2 className="word">REACT NATIVE</h2>
                </div>
                </div>

                <div className="three">
                <div className="arrange" >
                <img className="emage" src={animation} alt="" />
                <h2 className="word">ANIMATION</h2>
                </div>

                <div className="arrange">
                <img className="emage" src={video} alt="" />
                <h2 className="word">VIDEO EDITING</h2>
                </div>

                <div className="arrange">
                <img className="emage" src={graphics} alt="" />
                <h2 className="word">GRAPHIC DESIGN</h2>
                </div>
                </div>
                </div>




            </section>


    );

}
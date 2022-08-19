import React from "react";
let about="AboutMe.js";
let education="EducationalExperience.js";
let profession="ProfessionalExperience.js";
let skills="Skills.js";
let contact="#Contact.js"


export default function Navbar() {
    return (
        <header className="header">
            <div className="mynav">
<div><h1 className="crixy">Crixy<span className="tech">Tech</span></h1></div>

            <div>
                <nav className="navlink">
            <a href={about} className="about">About Me</a> 

            <a href={education} className="about">Educational Background</a>

            <a href={profession} className="about">Professional Experience</a>

            <a href={skills} className="about">Skills</a>

            <a href={contact} className="about">Contact Me</a>
            
            </nav>
            </div>

            </div>

        </header>



    );

}
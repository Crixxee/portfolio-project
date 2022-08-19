
import './Styles/styles.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";


import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import ProfessionalExperience from './components/ProfessionalExperience'; 
import Skills from "./components/Skills";
import EducationalExperience from "./components/EducationalExperience";


export default function App() {
  return (

    <Router>

        <header className="header">
            <div className="mynav">
<div><h1 className="crixy">Crixy<span className="tech">Tech</span></h1></div>

            <div>
                <nav className="navlink">
                <Link to="/AboutMe" className="about">About Me</Link>
 
                <Link to="/EducationalExperience" className="about">Educational Background</Link>

                <Link to="/ProfessionalExperience" className="about">Professional Experience</Link>
            
                <Link to="/Skills" className="about">Skills</Link>
            
                <Link to="/Contact" className="about">Contact Me</Link>
            
            </nav>
            </div>

            </div>

        </header>




      <Routes>  
     <Route exact path='/AboutMe'element={<AboutMe/>}></Route>
     <Route exact path='/EducationalExperience'element={<EducationalExperience />}></Route>
     <Route exact path='/ProfessionalExperience'element={<ProfessionalExperience />}></Route>
     <Route exact path='/Skills'element={<Skills/>}></Route>
     <Route exact path='/Contact'element={<Contact />}></Route>
     </Routes>


    <footer>
      <p className='footer'>CrixyTech copyright &copy;2022</p>  
    </footer>
    </Router>
  );
}



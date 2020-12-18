import React from "react";
import javaSkill from './images/java.png'
import pythonSkill from './images/python.png'
import htmlSkill from './images/html.png'
import jsSkill from './images/js.png'
import cppSkill from './images/cppSkill.png'
import cSkill from './images/cSkill.png'
import cssSkill from './images/cssSkill.png'
import sqlSkill from './images/sqlSkill.png'
import reactSkill from './images/reactSkill.png'
import mongodbSkill from './images/mongodbSkill.png'
import './Skills.css';

const Skills = () => {
    return (
        <div className="skills">
            <section id="projects" class="home">
                <div class="container">
                    <br /><br /><br />
                    <div class="section-title">
                        <h2 style={{ color: "white", textAlign: "center" }}> <b>S<u style={{ textDecorationColor: "#ffc451" }}>KILL</u>S</b></h2>
                    </div>
                </div>
            </section>
            <div class="skillBlock">
                <div class="skill">
                    <div class="imgSkill">
                        <img src={pythonSkill} width="50" height="50" />
                    </div>
                    <p class="titleSkill"> Python</p>
                    <p class="proficiency">Proficiency: Expert</p>
                </div>
            </div>
            <br />
            <div class="skillBlock">
                <div class="skill">
                    <div class="imgSkill">
                        <img class="" src={reactSkill} width="50" height="50" />
                    </div>
                    <p class="titleSkill">React</p>
                    <p class="proficiency">Proficiency: Advanced</p>
                </div>
            </div>
            <br />
            <div class="skillBlock">
                <div class="skill">
                    <div class="imgSkill">
                        <img class="" src={jsSkill} width="50" height="50" />
                    </div>
                    <p class="titleSkill"> JavaScript</p>
                    <p class="proficiency">Proficiency: Advanced</p>
                </div>
            </div>
            <br />
            <div class="skillBlock">
                <div class="skill">
                    <div class="imgSkill">
                        <img class="" src={htmlSkill} width="50" height="50" />
                    </div>
                    <p class="titleSkill"> HTML</p>
                    <p class="proficiency">Proficiency: Intermediate</p>
                </div>
            </div>
            <br />
            <div class="skillBlock">
                <div class="skill">
                    <div class="imgSkill">
                        <img class="" src={javaSkill} width="50" height="50" />
                    </div>
                    <p class="titleSkill"> Java</p>
                    <p class="proficiency">Proficiency: Intermediate </p>
                </div>
            </div>
            <br />
            <div class="skillBlock">
                <div class="skill">
                    <div class="imgSkill">
                        <img class="" src={cppSkill} width="50" height="50" />
                    </div>
                    <p class="titleSkill"> C++</p>
                    <p class="proficiency">Proficiency: Intermediate</p>
                </div>
            </div>
            <br />
            <div class="skillBlock">
                <div class="skill">
                    <div class="imgSkill">
                        <img class="" src={cSkill} width="50" height="50" />
                    </div>
                    <p class="titleSkill"> C</p>
                    <p class="proficiency">Proficiency: Intermediate</p>
                </div>
            </div>
            <br />
            <div class="skillBlock">
                <div class="skill">
                    <div class="imgSkill">
                        <img class="" src={cssSkill} width="50" height="50" />
                    </div>
                    <p class="titleSkill"> CSS</p>
                    <p class="proficiency">Proficiency: Intermediate</p>
                </div>
            </div>
            <br />
            <div class="skillBlock">
                <div class="skill">
                    <div class="imgSkill">
                        <img class="" src={sqlSkill} width="50" height="50" />
                    </div>
                    <p class="titleSkill"> SQL</p>
                    <p class="proficiency">Proficiency: Intermediate</p>
                </div>
            </div>
            <br />
            <div class="skillBlock">
                <div class="skill">
                    <div class="imgSkill">
                        <img class="" src={mongodbSkill} width="50" height="50" />
                    </div>
                    <p class="titleSkill"> MongoDB</p>
                    <p class="proficiency">Proficiency: Novice</p>
                </div>
            </div>
            <br/><br/>
        </div>
    )
}

export default Skills;
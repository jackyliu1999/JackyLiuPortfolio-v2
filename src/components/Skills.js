import React from "react";
import javaSkill from './images/java.png'
import pythonSkill from './images/python.png'
import htmlSkill from './images/html.png'
import jsSkill from './images/js.png'
import cppSkill from './images/cppSkill.png'
import cSkill from './images/cSkill.png'
import cssSkill from './images/cssSkill.png'
import sqlSkill from './images/sqlSkill.png'
import './Skills.css';

const Skills = () => {
    return (
        <div className="skills">
            <section id="projects" class="home">
                <div class="container">
                    <br/><br/><br/>
                    <div class="section-title">
                        <h2 style={{ color: "white", textAlign: "center" }}> <b>S<u style={{ textDecorationColor: "#ffc451" }}>KILL</u>S</b></h2>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-md-6">
                            <div class="title">
                                <div class="pic"><img src={pythonSkill} class="img-fluid" alt="" /></div>
                                <div class="info">
                                    <h4>PYTHON</h4>
                                    <span>ADVANCED</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="title">
                                <div class="pic"><img src={htmlSkill} class="img-fluid" alt="" /></div>
                                <div class="info">
                                    <h4>HTML</h4>
                                    <span>PROFICIENT</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="title">
                                <div class="pic"><img src={javaSkill} class="img-fluid" alt="" /></div>
                                <div class="info">
                                    <h4>JAVA</h4>
                                    <span>PROFICIENT</span>
                                </div>
                            </div>
                        </div>
                        <br /><br />
                        <div class="col-lg-3 col-md-6">
                            <div class="title">
                                <div class="pic"><img src={jsSkill} class="img-fluid" alt="" /></div>
                                <div class="info">
                                    <h4>JAVASCRIPT</h4>
                                    <span>PROFICIENT</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="title">
                                <div class="pic"><img src={cppSkill} class="img-fluid" alt="" /></div>
                                <div class="info">
                                    <h4>C++</h4>
                                    <span>INTERMEDIATE</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="title">
                                <div class="pic"><img src={cSkill} class="img-fluid" alt="" /></div>
                                <div class="info">
                                    <h4>C</h4>
                                    <span>INTERMEDIATE</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="title">
                                <div class="pic"><img src={cssSkill} class="img-fluid" alt="" /></div>
                                <div class="info">
                                    <h4>CSS</h4>
                                    <span>INTERMEDIATE</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="title">
                                <div class="pic"><img src={sqlSkill} class="img-fluid" alt="" /></div>
                                <div class="info">
                                    <h4>SQL</h4>
                                    <span>INTERMEDIATE</span>
                                </div>
                            </div>
                        </div>
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    </div>
                </div>
            </section>
            <br /><br />
        </div>
    )
}

export default Skills;
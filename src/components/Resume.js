import React from "react";
import './Resume.css';

const Resume = () => {
    return (
        <div className="">
            <br />
            <br />
            <div className='resume'>
                <br /><br />
                <h2 id="resume" style={{ textAlign: "center" }}><b>Resume</b></h2>
                <section id="resume" class="resume">
                    <div class="container">

                        <div class="row">
                            <div class="col-lg-6">
                                <h3 class="resume-title">Education</h3>
                                <div class="resume-item">
                                    <h4>Ontario Secondary School Diploma</h4>
                                    <h5>September 2013 to June 2017</h5>
                                </div>
                                <div class="resume-item">
                                    <h4>Bachelor of Science in Computer Science</h4>
                                    <h5>September 2017 to April 2021</h5>
                                    <p><em>Western University, London, Ontario</em></p>
                                </div>
                                <h3 class="resume-title">Achievements</h3>
                                <div class="resume-item">
                                    <h4>Hack for the People Winner</h4>
                                    <h5>August 2020</h5>
                                    <li>Led a team of two other developers to create a security based program that mitigates damage caused by laptop theft for Hack for the People</li>
                                    <li>Out of over 700 participants, won the category for “Best Digital Privacy Hack”</li>
                                </div>
                                <div class="resume-item">
                                    <h4>Ontario Scholar</h4>
                                    <h5>June 2017</h5>
                                    <p>
                                        <li>Awarded to high school students who achieved an average of 80% or greater in their graduating year</li>
                                    </p>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <h3 class="resume-title">Skills</h3>
                                <div class="resume-item">
                                    <h4>Frameworks and Libraries</h4>
                                    <p>
                                        <ul>
                                            <li>
                                                <b>Python:</b>
                                                <li>Selenium, Tkinter, requests, SpeechRecognition, pyttsx3, pynput</li>
                                            </li>
                                            <li><b>JavaScript: </b>
                                                <li>React, React Native, Bootstrap, Axios, Express, bcrypt, socket.io, @material-ui/core</li>
                                            </li>
                                        </ul>
                                    </p>
                                </div>
                                <div class="resume-item">
                                    <h4>Software, IDEs and Tools</h4>
                                    <p>
                                        <ul>
                                            <li><b>Image and Video Editing:</b> Adobe Photoshop, Camtasia Studio</li>
                                            <li><b>Programming Software and IDEs:</b> Eclipse, Git, PyCharm, Anaconda, Android Studio, Node.js, Code::Blocks</li>
                                            <li><b>Microsoft:</b> Microsoft Excel, Microsoft PowerPoint, Microsoft Word</li>
                                            <li><b>Databases and Servers:</b> MySQL, phpMyAdmin, XAMPP, MongoDB, MongoDB Compass </li>
                                        </ul>
                                    </p>
                                </div>
                                <div class="resume-item">
                                    <h4>Languages</h4>
                                    <p>
                                        <ul>
                                            <li>English</li>
                                            <li>Chinese (Cantonese)</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Resume;
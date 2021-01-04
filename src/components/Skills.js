import React from "react";
import { Nav, Button, Navbar, Form, FormControl, Card, Container, Row, Col } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'

const Skills = () => {
    return (
        <div className="skillsBG">
            <br /><br />
            <div className="skills">
                <section id="projects">
                    <div class="container">
                        <br /><br /><br />
                        <div class="section-title">
                            <h2 style={{ color: "#e6f1ff", textAlign: "center" }}> <b>S<u style={{ textDecorationColor: "#64ffda" }}>KILL</u>S</b></h2>
                        </div>
                    </div>
                </section>

                <Table borderless>
                    <thead>
                        <tr>
                            <th scope="col" width="220">Programming Languages</th>
                            <th scope="col" width="220">Frameworks</th>
                            <th scope="col" width="220">Libraries</th>
                            <th scope="col" width="220">Database Tools</th>
                            <th scope="col" width="220">IDEs</th>
                            <th scope="col" width="220">Software</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Python</td>
                            <td>React</td>
                            <td>NumPy</td>
                            <td>MySQL</td>
                            <td>Eclipse</td>
                            <td>Microsoft Excel</td>
                        </tr>
                        <tr>
                            <td >JavaScript</td>
                            <td>React Native</td>
                            <td>Selenium</td>
                            <td>XAMPP</td>
                            <td>PyCharm</td>
                            <td>Microsoft PowerPoint</td>
                        </tr>
                        <tr>
                            <td>HTML</td>
                            <td>Flask</td>
                            <td>OpenPyXL</td>
                            <td>MongoDB</td>
                            <td>Android Studio</td>
                            <td>Microsoft Word</td>
                        </tr>
                        <tr>
                            <td >Java</td>
                            <td>Bootstrap</td>
                            <td>PIL</td>
                            <td>MongoDB Compass</td>
                            <td>Visual Studio Code</td>
                            <td>Adobe Photoshop</td>
                        </tr>
                        <tr>
                            <td >C++</td>
                            <td></td>
                            <td>Tkinter</td>
                            <td>phpMyAdmin</td>
                            <td>Code::Blocks</td>
                            <td>Camtasia Studio</td>
                        </tr>
                        <tr>
                            <td >C</td>
                            <td></td>
                            <td>pynput</td>
                            <td></td>
                            <td>Android Studio</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td >C#</td>
                            <td></td>
                            <td>pyttsx3</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td >CSS</td>
                            <td></td>
                            <td>requests</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td ></td>
                            <td></td>
                            <td>express</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td ></td>
                            <td></td>
                            <td>Axios</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td ></td>
                            <td></td>
                            <td>bcrypt</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td ></td>
                            <td></td>
                            <td>JDA</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>

            </div>
        </div>
    )
}

export default Skills;
import React from "react";
import githubLogo from "./images/github.png"
import devpostLogo from "./images/devpost.png"
import linkedInLogo from "./images/linkedin.png"
import projectsIcon from "./images/projectsIcon.png"
import musicCatalyst from './images/musicCatalyst.png'
import chatJS from './images/ChatJS.png'
import RuneterraBot from './images/RuneterraBot.png'
import Decoy from './images/Decoy.jpg'
import Chowdown from './images/Chowdown.png'
import GitLogo from './images/gitLogo.png'
import infoIcon from './images/infoIcon.png'
import ChowDownDemo2 from './images/Chowdown2.png'
import ChowDownDemo3 from './images/Chowdown3.jpg'
import ChowDownDemo4 from './images/Chowdown4.jpg'
import ChowDownDemo5 from './images/Chowdown5.jpg'
import Decoy2 from './images/Decoy2.jpg'
import Decoy3 from './images/Decoy3.jpg'
import Decoy4 from './images/Decoy4.jpg'
import NotesToText1 from './images/NotesToText1.PNG'
import NotesToText2 from './images/NotesToText2.PNG'
import cverseCommands from './images/cverseCommands.PNG'
import cversestatsCanada from './images/cversestatsCanada.PNG'
import cverseReddit from './images/cverseReddit.PNG'
import cverseNews from './images/cverseNews.PNG'
import runeterrabot1 from './images/runeterrabot1.JPG'
import runeterrabot2 from './images/runeterrabot2.JPG'
import runeterrabot3 from './images/runeterrabot3.JPG'
import desktopCleaner2 from './images/desktopCleaner2.PNG'
import BitcoinPrice1 from './images/BitcoinPrice1.PNG'
import BitcoinPrice2 from './images/BitcoinPrice2.PNG'
import LoLProfileCustomizer from './images/LoLProfileCustomizer.png'
import resumeIcon from './images/resumeIcon.png'
import { Modal, Button } from 'react-bootstrap';

const Home = () => {
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setshow1] = React.useState(false);
    const handleshow1Close = () => setshow1(false);
    const handleshow1Show = () => setshow1(true);

    const [show2, setshow2] = React.useState(false);
    const handleshow2Close = () => setshow2(false);
    const handleshow2Show = () => setshow2(true);

    const [show3, setshow3] = React.useState(false);
    const handleshow3Close = () => setshow3(false);
    const handleshow3Show = () => setshow3(true);

    const [show4, setshow4] = React.useState(false);
    const handleshow4Close = () => setshow4(false);
    const handleshow4Show = () => setshow4(true);

    const [show5, setshow5] = React.useState(false);
    const handleshow5Close = () => setshow5(false);
    const handleshow5Show = () => setshow5(true);

    const [show6, setshow6] = React.useState(false);
    const handleshow6Close = () => setshow6(false);
    const handleshow6Show = () => setshow6(true);

    const [show7, setshow7] = React.useState(false);
    const handleshow7Close = () => setshow7(false);
    const handleshow7Show = () => setshow7(true);

    const [show8, setshow8] = React.useState(false);
    const handleshow8Close = () => setshow8(false);
    const handleshow8Show = () => setshow8(true);

    const [show9, setshow9] = React.useState(false);
    const handleshow9Close = () => setshow9(false);
    const handleshow9Show = () => setshow9(true);

    const [show10, setshow10] = React.useState(false);
    const handleshow10Close = () => setshow10(false);
    const handleshow10Show = () => setshow10(true);
    return (
        <div className='projects'>
            <section id="projects" class="projects">
                <section id="headSection" class="d-flex align-items-center justify-content-center">
                    <div class="container" data-aos="fade-up">

                        <div class="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
                            <div class="col-xl-6 col-lg-8">
                                <h1>Hello, my name is Jacky Liu<span>.</span></h1>
                                <h2>I am a Full Stack Developer.</h2>
                            </div>
                        </div>

                        <div class="row mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250">
                            <div class="col-3">
                                <div class="icon-box">
                                    <h3><a href="https://github.com/jackyliu1999"><img class="img-fluid" src={githubLogo} width="60" height="0" /></a></h3>
                                    <div style={{ color: "white" }}>GitHub</div>
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="icon-box">
                                    <h3><a href="https://devpost.com/jackyliu1999"><img class="img-fluid" src={devpostLogo} width="60" height="0" /></a></h3>
                                    <div style={{ color: "white" }}>Devpost</div>
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="icon-box">
                                    <h3><a href=""><h3><a href="https://www.linkedin.com/in/jackyliu1999"><img class="img-fluid" src={linkedInLogo} width="50" height="50" /></a></h3></a></h3>
                                    <div style={{ color: "white" }}>LinkedIn</div>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250">
                            <div class="col-3">
                                <div class="icon-box">
                                    <h3><a href=""><h3><a href="#projs"><img class="img-fluid" src={projectsIcon} width="50" height="50" /></a></h3></a></h3>
                                    <div style={{ color: "white" }}>Projects</div>
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="icon-box">
                                    <h3><a href=""><h3><a href="/Resume"><img class="img-fluid" src={resumeIcon} width="50" height="50" /></a></h3></a></h3>
                                    <div style={{ color: "white" }}>Resume</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </section>
            <section id="projs" class="home">
                <div class="container">
                    <div class="section-title">
                        <h2 style={{ color: "white", textAlign: "center" }}> <b>PR<u style={{ textDecorationColor: "#ffc451" }}>OJEC</u>TS</b></h2>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6">
                            <div class="title">
                                <div class="pic"><img src={musicCatalyst} class="img-fluid" alt="" onClick={handleshow5Show} /></div>
                                <div class="info">
                                    <h4><a href="https://github.com/jackyliu1999/Music-Catalyst">Music Catalyst</a></h4>
                                    <span>JavaScript, React, SQL</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="title">
                                <div class="pic"><img src={chatJS} class="img-fluid" alt="" onClick={handleshow9Show} /></div>
                                <div class="info">
                                    <h4><a href="https://github.com/jackyliu1999/ChatJS">ChatJS</a></h4>
                                    <span>JavaScript, React, SQL, socket.io</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="title">
                                <div class="pic"><img src={RuneterraBot} class="img-fluid" alt="" onClick={handleshow4Show} /></div>
                                <div class="info">
                                    <h4><a href="https://github.com/jackyliu1999/Runeterra-Bot">Runeterra Bot</a></h4>
                                    <span>Java, JDA</span>
                                </div>
                            </div>
                        </div>
                        <br /><br />
                        <div class="col-lg-4 col-md-6">
                            <div class="title">
                                <div class="pic"><img src={LoLProfileCustomizer} class="img-fluid" alt="" onClick={handleshow10Show} /></div>
                                <div class="info">
                                    <h4><a href="https://github.com/jackyliu1999/LoLProfileCustomizer">LoL Profile Customizer</a></h4>
                                    <span>Python</span>
                                </div>
                            </div>
                        </div>
                        <br /><br /><br /><br /><br /><br />
                    </div>


                    <div class="section-title">
                        <h2 style={{ color: "white", textAlign: "center" }}> <b>HA<u style={{ textDecorationColor: "#ffc451" }}>CKATHO</u>NS</b></h2>
                    </div>

                    <div class="row">

                        <div class="col-lg-4 col-md-6">
                            <div class="title">
                                <div class="pic"><img src={Decoy} class="img-fluid" alt="" onClick={handleshow1Show} /></div>
                                <div class="info">
                                    <h4><a href="https://devpost.com/software/decoy">Decoy</a></h4>
                                    <h4 style={{ fontSize: "14px", display: "block", fontStyle: "bold" }}><a href="https://hackforthepeople.devpost.com/">Hack for the People - Winner</a></h4>
                                    <span>Python</span>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6">
                            <div class="title">
                                <div class="pic"><img src={Chowdown} class="img-fluid" alt="" onClick={handleShow} /></div>
                                <div class="info">
                                    <h4><a href="https://devpost.com/software/chowdown">ChowDown!</a></h4>
                                    <h4 style={{ fontSize: "14px", display: "block", fontStyle: "bold" }}><a href="https://hackwestern6.devpost.com/">Hack Western 6</a></h4>
                                    <span>JavaScript, React-Native, Python</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br /><br /><br />
                </div>
            </section>



            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>ChowDown! - Hack Western 6</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <b>Devpost: <a href="https://devpost.com/software/chowdown" >devpost.com/software/chowdown</a></b><br />
                    <b>GitHub: <a href="https://github.com/jackyliu1999/ChowDown" >github.com/jackyliu1999/ChowDown</a></b><br />
                    <b>Collaborated with:</b> <a href="https://github.com/CyaTmrw" >Ivan Zhang</a>, <a href="https://www.linkedin.com/in/aja-khanal/">Aja Khanal</a><br />
                    <b>Inspiration:</b><br />
        Food is an important part of our daily lives. With the assistance of machine learning, the ability to identify unknown foods through image recognition opens new doors for culinary enthusiasts who desire to seek out new local restaurants and recipes, expanding their world of food, one picture at a time.
        <br /> <b>What it does:</b><br />
        The user is allowed to take a picture of a complete dish or specify a list of basics ingredients. Alternatively, a user may also input a keyword. Utilizing machine learning using Convolutional Neural Network, the program will first identify the picture sent. For complete dishes, the program will display local restaurants that serve the item, or recipes to make the dish. On the other hand for ingredients, the program will analyze what ingredients you have, and return a recipe which caters best to what is available in your kitchen.
        <img class="img-fluid" src={ChowDownDemo3} alt="" />
                    <img class="img-fluid" src={ChowDownDemo4} alt="" />
                    <img class="img-fluid" src={ChowDownDemo5} alt="" />
                    <br /> <b>How it was built:</b><br />
        As a team, we decided to create an iOS and cross platform Android mainly via react-native. API calls were made using the google-places API for restaurant locations, and the Spoonacular API for recipes based on either dishes or given ingredients.
        <img class="img-fluid" src={ChowDownDemo2} alt="" />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                </Modal.Footer>
            </Modal>

            <Modal size="lg" show={show1} onHide={handleshow1Close}>
                <Modal.Header closeButton>
                    <Modal.Title>Decoy - Hack for the People</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <b>Devpost: <a href="https://devpost.com/software/decoy" >devpost.com/software/decoy</a></b><br />
                    <b>GitHub: <a href="https://github.com/jackyliu1999/Decoy" >github.com/jackyliu1999/Decoy</a></b><br />
                    <b>Collaborated with:</b> <a href="https://github.com/jacky-h-nguyen" >Jacky Nguyen</a>, <a href="https://github.com/ansonwong250" >Anson Wong</a><br />
        Out of over 700 participants, won the category for “Best Digital Privacy Hack” during Hack for the People (August 2020). <br />
                    <b>Inspiration:</b><br />
        Theft is a large issue that plagues the economy. In a modernized society where technology is rapidly advancing, laptop theft is prominent now more than ever. Businesses and individuals alike use laptops on a daily basis, thus making them an easy target for criminals. Decoy aims to eliminate this by concealing itself as an everyday browser and fool criminals into revealing their location and face after they have stolen a laptop.
        <br /> <b>What it does:</b><br />
        Decoy runs as soon as the browser is opened. The user then must state "close program" or "stop program" to authorize themselves as the owner of the laptop/computer within 8 seconds. Once 8 seconds has passed, Decoy takes a picture of the unauthorized user via webcam and retrieves the location (IP Address, City, Latitude, Longitude), sending the information to the owner of the laptop/computer via email. Lastly, Decoy will track anything the unauthorized user types and sends this information via email every 100 letters.
        <img class="img-fluid" src={Decoy2} alt="" />
                    <img class="img-fluid" src={Decoy3} alt="" />
                    <br /> <b>How it was built:</b><br />
        We utilized Python to build Decoy, incorporating the libraries pynput, webbrowser, speech_recognition, requests, cv2, smtplib, ssl and email.mime.
        <img class="img-fluid" src={Decoy4} alt="" />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleshow1Close}>
                        Close
          </Button>
                </Modal.Footer>
            </Modal>

            <Modal size="lg" show={show2} onHide={handleshow2Close}>
                <Modal.Header closeButton>
                    <Modal.Title>Notes to Text Converter</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <b>GitHub: <a href="https://github.com/jackyliu1999/Notes-to-Text-Converter">github.com/jackyliu1999/Notes-to-Text-Converter</a></b><br />
        Notes to Text Converter is a program that takes handwritten notes and converts them into text. The program aims to give students the option to be able to take handwritten notes in class and have the ability to transfer them to their computer at a later time. Notes to Text Converter
 incorporates optical character recognition tool, Python-tesseract also known as pytesseract for the conversion functionality. Tkinter was utilized in order to provide a user-friendly interface.
        <br /><b>Programming Languages:</b><br />
                    <li>Python</li>
                    <b>Libraries Imported:</b><br />
                    <li>pytesseract </li>
                    <li>Tkinter </li>
                    <li>PIL </li>
                    <b>How to use:</b><br />
                    <li>1. Take a picture of your handwritten notes</li>
                    <li>2. Open command prompt and change directory to folder containing the program</li>
                    <li>3. Type "python imgToText.py"</li>
                    <li>4. Click Browse File</li>
                    <img class="img-fluid" src={NotesToText1} alt="" />
                    <li>5. Choose image containing handwritten notes</li>
                    <li>6. Choose a name for the new file containing the converted notes</li>
                    <img class="img-fluid" src={NotesToText2} alt="" />
                    <li>7. File containing the converted notes will be located in the same directory as the program</li>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleshow2Close}>
                        Close
          </Button>
                </Modal.Footer>
            </Modal>

            <Modal size="lg" show={show3} onHide={handleshow3Close}>
                <Modal.Header closeButton>
                    <Modal.Title>COVID19 Stats Tracker - BOTHACKS</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <b>GitHub: <a href="https://github.com/jackyliu1999/COVID19-Stats-Tracker" >github.com/jackyliu1999/COVID19-Stats-Tracker</a></b><br />
                    <b>Collaborated with:</b> <a href="https://github.com/jacky-h-nguyen" >Jacky Nguyen</a>, <a href="https://github.com/ansonwong250" >Anson Wong</a><br />
                    <b>Inspiration:</b><br />
        COVID-19 is a worldwide pandemic that was first identified in late 2019 in Wuhan, China. As of August 2020, more than 20 million cases resulting in over 800,000 deaths have been documented worldwide. Information regarding the coronavirus is scattered and countless individuals have found it exceedingly difficult to scavenge for information while balancing their readjusted life due to the pandemic. COVID19 Stats Tracker acts as a haven of live information regarding the virus, incorporating various pandemic-related APIs as well as voice activated commands.
        <br /> <b>What it does:</b><br />
        COVID19 Stats Tracker incorporates APIs that draw live data including total cases, total recovered and total deaths in order to inform the user of the severity and numbers of the COVID-19 pandemic. Furthermore, the user is able to filter results in accordance to their own country. COVID19 Stats Tracker also features commands that links the user to pandemic-related resources. Due to the fact that social media and the news are ingrained into the lives of our society, COVID19 Stats Tracker displays the most recent news articles and Reddit posts regarding COVID-19. Lastly, all of commands are activated via voice recognition, allowing easy access for each and every individual.
        <img class="img-fluid" src={cverseCommands.PNG} alt="" />
                    <br /> <b>How it was built:</b><br />
          COVID19 Stats Tracker was built using Python incorporating the libraries: requests, Tkinter, datetime, webbrowser, newsapi, speech_recognition and pyttsx3. The requests module was utilized in order to web scrape data for live stats of the pandemic. Datetime was used to display the current time while the webbrowser library was used to open links to COVID-19 resources. The newsapi library was used to fetch the top pandemic-related news articles. Lastly, in conjunction with all the commands, speech_recognition allows the user to activate commands via voice while pyttsx3 reads out prompts.
        <br /> <b>Demo: </b> <br />
                    <img class="img-fluid" src={cversestatsCanada} alt="" />
                    <img class="img-fluid" src={cverseReddit} alt="" />
                    <img class="img-fluid" src={cverseNews} alt="" />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleshow3Close}>
                        Close
          </Button>
                </Modal.Footer>
            </Modal>

            <Modal size="lg" show={show4} onHide={handleshow4Close}>
                <Modal.Header closeButton>
                    <Modal.Title>Runeterra Bot</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <b>GitHub: <a href="https://github.com/jackyliu1999/Runeterra-Bot" >github.com/jackyliu1999/Runeterra-Bot</a></b><br />
                    <b>Functionality and Inspiration:</b><br />
        League of Legends is a MOBA (multiplayer online battle arena) developed by Riot Games, initially released in October of 2009. Since then, League of Legends has become a worldwide phenomenon, gaining a following of millions. League of Legends has become a household name for many individuals in North America as video games have become more and more prevalent as technology is ingrained in our daily lives. Runeterra Bot integrates League of Legends with popular VoIP application, Discord. Runeterra Bot allows players to look up live game stats, other players and ranked stats while in the comfort of one’s own Discord server.
        <br /> <b>How it was built:</b><br />
        Runeterra Bot was developed in Java, incoporating JDA (Java Discord API) and Orianna, the Java adaptation of the Riot Games League of Legends API.
        <br /> <b>Demo: </b> <br />
        Command: !info SummonerName<br />
                    <img class="img-fluid" src={runeterrabot1} alt="" /><br />
        Displays Summomer ID, Account ID, Summoner Level, Profile Icon and image of the Icon of specified summoner.
        <br /><br />
        Command: !rank SummonerName<br />
                    <img class="img-fluid" src={runeterrabot2} alt="" /><br />
        Displays current summoner rank alongside number of wins and losses.
        <br /><br />
        Command: !livegame SummonerName, !SummonerName Champion<br />
                    <img class="img-fluid" src={runeterrabot3} alt="" /><br />
        !livegame SummonerName displays allied and enemy team rankings. If the summoner is not in game, notifies the user of this.<br />
        !SummonerName Champion displays mastery points of the specified summoner.
        </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleshow4Close}>
                        Close
          </Button>
                </Modal.Footer>
            </Modal>

            <Modal size="lg" show={show5} onHide={handleshow5Close}>
                <Modal.Header closeButton>
                    <Modal.Title>Music Catalyst</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <b>GitHub: <a href="https://github.com/jackyliu1999/Music-Catalyst" >github.com/jackyliu1999/Music-Catalyst</a></b><br />
                    <b>Video Demo: </b><br />
                    <center><iframe width="700" height="500"
                        src="https://www.youtube.com/embed/zCJFEet8Yac">
                    </iframe></center>
                    <b>Frontend Dependencies: </b><br />
                    <li>mobx</li>
                    <li>mobx-react</li>
                    <b>Backend Dependencies: </b><br />
                    <li>bcrypt</li>
                    <li>express</li>
                    <li>express-mysql-session</li>
                    <li>express-session</li>
                    <li>mysql</li>
                    <b>How it was built: </b><br />
          The Frontend was developed using ReactJS. The backend was developed in JavaScript and databases storing user information are managed via MySQL. The server is hosted locally using Apache. Passwords are encrypted using bcrypt to ensure the safety of users.
          <br /><b>What I learned: </b><br />
                    <li>To use Apache to host a database server using MySQL</li>
                    <li>To use phpMyAdmin to view database data visually</li>
                    <li>To use JavaScript to make calls to servers to retrieve information</li>
                    <li>Project management skills due to having to manage both frontend and backend at the same time</li>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleshow5Close}>
                        Close
          </Button>
                </Modal.Footer>
            </Modal>

            <Modal size="lg" show={show7} onHide={handleshow7Close}>
                <Modal.Header closeButton>
                    <Modal.Title>Desktop Cleaner</Modal.Title>
                </Modal.Header>
                <Modal.Body><b>GitHub: <a href="https://github.com/jackyliu1999/Desktop-Cleaner" >github.com/jackyliu1999/Desktop-Cleaner</a></b><br />
                    <b>Functionality:</b><br />
        Desktop cleaner is a Python-based automation script that sorts folders based on file type (images, documents, spreadsheets, installers, music, videos) into a user inputted directory.
        <br /><b>Libraries Imported: </b><br />
                    <li>os</li>
                    <li>sys</li>
                    <li>shutil</li>
                    <br /><b>Demo: </b><br />
                    <img class="img-fluid" src={desktopCleaner2} alt="" /><br />
                    <li>Input file type to sort</li>
                    <li>Input Starting Directory</li>
                    <li>Input Destination Directory</li>
                    <li>Desktop Cleaner then moves all files of inputted type into the destination directory and creates a new folder to store thecollection of files</li>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleshow7Close}>
                        Close
          </Button>
                </Modal.Footer>
            </Modal>

            <Modal size="lg" show={show8} onHide={handleshow8Close}>
                <Modal.Header closeButton>
                    <Modal.Title>Bitcoin Price Notifier</Modal.Title>
                </Modal.Header>
                <Modal.Body><b>GitHub: <a href="https://github.com/jackyliu1999/Bitcoin-Price-Notifier" >github.com/jackyliu1999/Bitcoin-Price-Notifier</a></b><br />
                    <b>Functionality:</b><br />
        Notifies users of Bitcoin price fluctuation by extracting the live price of Bitcoin from Yahoo Finance. Allows users to set a benchmark and once the price hits the designated benchmark, verbally notifies user.
        <br /><b>Libraries Imported: </b><br />
                    <li>Selenium</li>
                    <li>pyttsx3</li>
                    <br /><b>Demo: </b><br />
                    <img class="img-fluid" src={BitcoinPrice1} alt="" /><br />
        Users are able to input a pricing benchmark and whether to be notified once price is higher or lower than the designated benchmark. Users are also able to display current prices to the terminal.
        <img class="img-fluid" src={BitcoinPrice2} alt="" /><br />
        Once benchmark is hit, notifies the user verbally using the pyttsx3 library.
        </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleshow8Close}>
                        Close
          </Button>
                </Modal.Footer>
            </Modal>

            <Modal size="lg" show={show9} onHide={handleshow9Close}>
                <Modal.Header closeButton>
                    <Modal.Title>ChatJS</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <b>GitHub: <a href="https://github.com/jackyliu1999/ChatJS" >github.com/jackyliu1999/ChatJS</a></b><br />
                    <b>Video Demo: </b><br />
                    <center><iframe width="700" height="500"
                        src="https://www.youtube.com/embed/26YkidHsaPo">
                    </iframe></center>
                    <b>Frontend Dependencies: </b><br />
                    <li>mobx</li>
                    <li>mobx-react</li>
                    <li>query-string</li>
                    <li>react-emoji</li>
                    <li>react-router-dom</li>
                    <li>react-scroll-to-bottom</li>
                    <li>socket.io-client</li>
                    <b>Backend Login/Registration Server Dependencies: </b><br />
                    <li>bcrypt</li>
                    <li>express</li>
                    <li>express-mysql-session</li>
                    <li>express-session</li>
                    <li>mysql</li>
                    <b>Backend Chat Server Dependencies: </b><br />
                    <li>cors</li>
                    <li>express</li>
                    <li>nodemon</li>
                    <li>socket.io</li>
                    <b>How it was built: </b><br />
          The Frontend was developed using ReactJS. The backend was developed in JavaScript and databases storing user information are managed via MySQL. The server is hosted locally using Apache. Passwords are encrypted using bcrypt to ensure the safety of users. The backend for the chat server featuring communication between users was implemented using Socket.IO and nodemon.
        </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleshow9Close}>
                        Close
          </Button>
                </Modal.Footer>
            </Modal>

            <Modal size="lg" show={show10} onHide={handleshow10Close}>
                <Modal.Header closeButton>
                    <Modal.Title>LoL Profile Customizer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <b>GitHub: <a href="https://github.com/jackyliu1999/LoLProfileCustomizer" >github.com/jackyliu1999/LoLProfileCustomizer</a></b><br />
                    <b>Video Demo: </b><br />
                    <center><iframe width="700" height="500"
                        src="https://www.youtube.com/embed/w17E0kt0C9g">
                    </iframe></center>
                    <b>Dependencies: </b><br />
                    <li>lcu-driver</li>
                    <b>What it does and how it was built: </b><br />
          Lol Profile Customizer allows League of Legends players to style their client-sided profiles by making use of public Riot Games APIs, connecting to the League of Legends client through lcu-driver.
          <br /><b>Functionalities: </b><br />
                    <li>Change Summoner Icon to any owned Summoner Icon</li>
                    <li>Change client-sided Summoner Icon to any Summoner Icon in the game, other uses will be able to see this change in their client</li>
                    <li>Change Summoner profile background to any skin in the game, based on Skin ID</li>
                    <li>Change displayed Summoner chat rank</li>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleshow10Close}>
                        Close
          </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Home;
import React from "react";
import githubLogo from "./images/github.png"
import devpostLogo from "./images/devpost.png"
import linkedInLogo from "./images/linkedin.png"
import projectsIcon from "./images/projectsIcon.png"
import musicCatalyst from './images/musicCatalyst.png'
import RuneterraBot from './images/RuneterraBot.png'
import Decoy from './images/Decoy.jpg'
import Chowdown from './images/Chowdown.png'
import ChowDownDemo2 from './images/Chowdown2.png'
import ChowDownDemo3 from './images/Chowdown3.jpg'
import ChowDownDemo4 from './images/Chowdown4.jpg'
import ChowDownDemo5 from './images/Chowdown5.jpg'
import Decoy2 from './images/Decoy2.jpg'
import Decoy3 from './images/Decoy3.jpg'
import Decoy4 from './images/Decoy4.jpg'
import runeterrabot1 from './images/runeterrabot1.JPG'
import runeterrabot2 from './images/runeterrabot2.JPG'
import runeterrabot3 from './images/runeterrabot3.JPG'
import Remedy1 from './images/Remedy1.png'
import Crimson from './images/Crimson.png'
import resumeIcon from './images/resumeIcon.png'
import { Modal } from 'react-bootstrap';
import MyMovieCatalog from './images/MyMovieCatalog.png'
import infoIcon from './images/infoIcon2.png'
import GitLogo from './images/gitLogo2.png'
import SpaceWar from './images/SpaceWar.png'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import withStyles from "@material-ui/core/styles/withStyles"

const styles = {
    card: {
        margin: 16,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    }
};


const Home = (props) => {
    const { classes } = props

    const [iconTabs, setIconsTabs] = React.useState(1);
    const [textTabs, setTextTabs] = React.useState(4);
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

    const [show10, setshow10] = React.useState(false);
    const handleshow10Close = () => setshow10(false);
    const handleshow10Show = () => setshow10(true);

    const [show11, setshow11] = React.useState(false);
    const handleshow11Close = () => setshow11(false);
    const handleshow11Show = () => setshow11(true);

    const [show12, setshow12] = React.useState(false);
    const handleshow12Close = () => setshow12(false);
    const handleshow12Show = () => setshow12(true);

    return (
        <div id='homeAllBG' style={{ overflow: 'hidden' }}>
            <div id='homeAll' class="homeAll">
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
                <div id="projs">&nbsp;</div>
                <div class="section-title">
                    <h2 style={{ color: "#e6f1ff", textAlign: "center", marginTop: "30px" }}> <b>PR<u style={{ textDecorationColor: "#64ffda" }}>OJEC</u>TS</b></h2>
                    <br />
                </div>

                <Container maxWidth="lg" justify="center">
                    <Grid container justify="center">
                        <Grid item xs={12} sm={6} md={3} component={Card} className={classes.card}>
                            <CardMedia component="img" src={MyMovieCatalog} title="Image title" onClick={handleshow11Show} />
                            <CardContent>
                                <Typography variant="h5" component="h2">MyMovieCatalog</Typography>
                                <Typography component="p">Web application that allows registered users to track their watched movies, view the lists of other users and search movies based on a keyword. <br /><br /><br /></Typography>
                            </CardContent>
                            <CardContent>
                                <img src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"></img>
                                <img src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"></img>
                                <img src="https://img.shields.io/badge/html%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"></img>
                                <img src="https://img.shields.io/badge/bootstrap%20-%23563D7C.svg?&style=for-the-badge&logo=bootstrap&logoColor=white"></img>
                                <img alt="CSS3" src="https://img.shields.io/badge/css%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white" />
                                <img alt="MySQL" src="https://img.shields.io/badge/mysql-%231572B6.svg?&style=for-the-badge&logo=mysql&logoColor=white" />
                            </CardContent>
                            <CardActions>
                                <a href="https://github.com/jackyliu1999/MyMovieCatalog" style={{ marginTop: "20px", float: "left" }}> <img src={GitLogo} alt="" /></a>
                                <img src={infoIcon} onClick={handleshow11Show} alt="" style={{ marginTop: "20px", float: "left", marginLeft: "10px" }} />
                            </CardActions>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3} component={Card} className={classes.card} justify="center">
                            <CardMedia component="img" src={Chowdown} onClick={handleShow} />
                            <CardContent>
                                <Typography variant="h5" component="h2">ChowDown!</Typography>
                                <Typography component="p">Mobile application that allows the user to search for restaurants and recipes via image recognition or keyword search as well as acquiring recipes from a list of specified ingredients. Created for the Hackathon: Hack Western 6.</Typography>
                            </CardContent>
                            <CardContent>
                                <img src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"></img>
                                <img src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"></img>
                                <img src="https://img.shields.io/badge/html%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"></img>
                                <img src="https://img.shields.io/badge/bootstrap%20-%23563D7C.svg?&style=for-the-badge&logo=bootstrap&logoColor=white"></img>
                                <img alt="CSS3" src="https://img.shields.io/badge/css%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white" />
                                <img alt="MySQL" src="https://img.shields.io/badge/mysql-%231572B6.svg?&style=for-the-badge&logo=mysql&logoColor=white" />
                            </CardContent>
                            <CardActions>
                                <a href="https://github.com/jackyliu1999/Chowdown" style={{ marginTop: "20px", float: "left" }}> <img src={GitLogo} alt="" /></a>
                                <img src={infoIcon} onClick={handleShow} alt="" style={{ marginTop: "20px", float: "left", marginLeft: "10px" }} />
                            </CardActions>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3} component={Card} className={classes.card} justify="center">
                            <CardMedia component="img" src={Decoy} onClick={handleshow1Show} />
                            <CardContent>
                                <Typography variant="h5" component="h2">Decoy</Typography>
                                <Typography component="p">Security-focused application, developed in Python that was created to mitigate damages caused by laptop and computer theft by tracking unauthorized usage. Created for the Hackathon: Hack for the People, winning the "Best Digital Privacy Hack" Award. <br /><br /><br /></Typography>
                            </CardContent>
                            <CardContent>
                                <img src="https://img.shields.io/badge/python%20-%2314354C.svg?&style=for-the-badge&logo=python&logoColor=white"></img>

                            </CardContent>
                            <CardActions>
                                <a href="https://github.com/jackyliu1999/Decoy" style={{ marginTop: "20px", float: "left" }}> <img src={GitLogo} alt="" /></a>
                                <img src={infoIcon} onClick={handleshow1Show} alt="" style={{ marginTop: "20px", float: "left", marginLeft: "10px" }} />
                            </CardActions>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3} component={Card} className={classes.card} justify="center">
                            <CardMedia component="img" src={Remedy1} onClick={handleshow6Show} />
                            <CardContent>
                                <Typography variant="h5" component="h2">Remedy</Typography>
                                <Typography component="p">Full stack web application developed in React with a Node.js back end connecting with a MySQL database on Google Cloud. Connects healthcare providers with healthcare seekers, allowing organizations to provide dynamic information to individuals.</Typography>
                            </CardContent>
                            <CardContent>
                                <img src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"></img>
                                <img src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"></img>
                                <img src="https://img.shields.io/badge/html%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"></img>
                                <img src="https://img.shields.io/badge/bootstrap%20-%23563D7C.svg?&style=for-the-badge&logo=bootstrap&logoColor=white"></img>
                                <img alt="CSS3" src="https://img.shields.io/badge/css%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white" />
                                <img alt="MySQL" src="https://img.shields.io/badge/mysql-%231572B6.svg?&style=for-the-badge&logo=mysql&logoColor=white" />
                                <img alt="Google Cloud" src="https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white"/>
                            </CardContent>
                            <CardActions>
                                <a href="https://github.com/jackyliu1999/Remedy" style={{ marginTop: "20px", float: "left" }}> <img src={GitLogo} alt="" /></a>
                                <img src={infoIcon} onClick={handleshow6Show} alt="" style={{ marginTop: "20px", float: "left", marginLeft: "10px" }} />
                            </CardActions>
                        </Grid>


                        <Grid item xs={12} sm={6} md={3} component={Card} className={classes.card} justify="center">
                            <CardMedia component="img" src={Crimson} onClick={handleshow10Show} />
                            <CardContent>
                                <Typography variant="h5" component="h2">Crimson</Typography>
                                <Typography component="p">Gacha-based RPG game developed in Python, featuring a loot system, battle system, character animations inventory and shop. Players are able to advance by battling enemy entities in order to enhance their characters.</Typography>
                            </CardContent>
                            <CardContent>
                                <img src="https://img.shields.io/badge/python%20-%2314354C.svg?&style=for-the-badge&logo=python&logoColor=white"></img>
                                <br /><br /><br /><br />
                            </CardContent>
                            <CardActions>
                                <a href="https://github.com/jackyliu1999/Crimson" style={{ marginTop: "20px", float: "left" }}> <img src={GitLogo} alt="" /></a>
                                <img src={infoIcon} onClick={handleshow10Show} alt="" style={{ marginTop: "20px", float: "left", marginLeft: "10px" }} />
                            </CardActions>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3} component={Card} className={classes.card} justify="center">
                            <CardMedia component="img" src={musicCatalyst} onClick={handleshow5Show} />
                            <CardContent>
                                <Typography variant="h5" component="h2">Music Catalyst</Typography>
                                <Typography component="p">Web application that allows users to save their favorite songs to a playlist, featuring a login and registation server. Stores favorited songs (Title, Youtube embedded URL, lyrics) in a MySQL database while allowing users to clear playlists with ease.<br /></Typography>
                            </CardContent>
                            <CardContent>
                                <img src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"></img>
                                <img src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"></img>
                                <img src="https://img.shields.io/badge/html%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"></img>
                                <img alt="CSS3" src="https://img.shields.io/badge/css%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white" />
                                <img src="https://img.shields.io/badge/bootstrap%20-%23563D7C.svg?&style=for-the-badge&logo=bootstrap&logoColor=white"></img>
                                <img alt="MySQL" src="https://img.shields.io/badge/mysql-%231572B6.svg?&style=for-the-badge&logo=mysql&logoColor=white" />
                            </CardContent>
                            <CardActions>
                                <a href="https://github.com/jackyliu1999/Music-Catalyst" style={{ marginTop: "20px", float: "left" }}> <img src={GitLogo} alt="" /></a>
                                <img src={infoIcon} onClick={handleshow5Show} alt="" style={{ marginTop: "20px", float: "left", marginLeft: "10px" }} />
                            </CardActions>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3} component={Card} className={classes.card} justify="center">
                            <CardMedia component="img" src={SpaceWar} onClick={handleshow12Show} />
                            <CardContent>
                                <Typography variant="h5" component="h2">Space War</Typography>
                                <Typography component="p">Developed as the final project for CS3307: Object-Oriented Design and Analysis, achieving 94%. Space War is a 2D space shooter game developed in C++ using the SFML library.<br /><br /><br /></Typography>
                            </CardContent>
                            <CardContent>
                                <img src="https://img.shields.io/badge/c++%20-%2300599C.svg?&logo=c%2B%2B&ogoColor=white&style=for-the-badge"></img>
                                <br /><br /><br /><br />
                            </CardContent>
                            <CardActions>
                                <a href="https://github.com/jackyliu1999/Space-War" style={{ marginTop: "20px", float: "left" }}> <img src={GitLogo} alt="" /></a>
                                <img src={infoIcon} onClick={handleshow12Show} alt="" style={{ marginTop: "20px", float: "left", marginLeft: "10px" }} />
                            </CardActions>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3} component={Card} className={classes.card}>
                            <CardMedia component="img" src={RuneterraBot} onClick={handleshow4Show} />
                            <CardContent>
                                <Typography variant="h5" component="h2">Runeterra Bot</Typography>
                                <Typography component="p">Discord Bot, developed in Java that allows League of Legends players to look up live game stats, ranked information and summoner information through the Discord application.</Typography>
                            </CardContent>
                            <CardContent>
                                <img src="https://img.shields.io/badge/java-%23ED8B00.svg?&style=for-the-badge&logo=java&logoColor=white"></img>
                            </CardContent>
                            <CardActions>
                                <a href="https://github.com/jackyliu1999/Runeterra-Bot" style={{ marginTop: "20px", float: "left" }}> <img src={GitLogo} alt="" /></a>
                                <img src={infoIcon} onClick={handleshow4Show} alt="" style={{ marginTop: "20px", float: "left", marginLeft: "10px" }} />
                            </CardActions>
                        </Grid>

                    </Grid>
                </Container>

                <div id="skills">&nbsp;</div>
                <div className="" id="sk" style={{ marginTop: "50px" }}>
                    <div className="skills">
                        <section id="projects">
                            <div class="container">
                                <div class="section-title">
                                    <h2 style={{ color: "#e6f1ff", textAlign: "center" }}> <b><u style={{ textDecorationColor: "#64ffda" }}>SKILLS</u></b></h2>
                                </div>
                            </div>
                        </section>
                        <div style={{ textAlign: "center", fontSize: "70px", color: "white", wordWrap: "break-word" }}><p>
                            <img alt="Python" src="https://img.shields.io/badge/python%20-%2314354C.svg?&style=for-the-badge&logo=python&logoColor=white" />
                            <img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
                            <img alt="HTML5" src="https://img.shields.io/badge/html%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white" />
                            <img alt="CSS3" src="https://img.shields.io/badge/css%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white" />
                            <img alt="Java" src="https://img.shields.io/badge/java-%23ED8B00.svg?&style=for-the-badge&logo=java&logoColor=white" />
                            <img alt="C++" src="https://img.shields.io/badge/c++%20-%2300599C.svg?&style=for-the-badge&logo=c%2B%2B&ogoColor=white" />
                            <br />
                            <img alt="Express.js" src="https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge" />
                            <img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB" />
                            <img alt="React Native" src="https://img.shields.io/badge/react_native%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB" />
                            <img alt="Bootstrap" src="https://img.shields.io/badge/bootstrap%20-%23563D7C.svg?&style=for-the-badge&logo=bootstrap&logoColor=white" />
                            <img alt="Flask" src="https://img.shields.io/badge/flask%20-%23404d59.svg?&style=for-the-badge&logo=flask&logoColor=white" />
                            <br />
                            <img alt="MySQL" src="https://img.shields.io/badge/mysql-%231572B6.svg?&style=for-the-badge&logo=mysql&logoColor=white" />
                            <img alt="MongoDB" src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?&style=for-the-badge&logo=mongodb&logoColor=white" />
                            <img alt="Heroku" src="https://img.shields.io/badge/heroku%20-%23430098.svg?&style=for-the-badge&logo=heroku&logoColor=white" />
                        </p></div>
                        <br />
                        <br />
                        <p style={{ color: "#e6f1ff", textAlign: "center" }}>© Copyright Jacky Liu. All Rights Reserved</p>
                        <p style={{ color: "#e6f1ff", textAlign: "center" }}>Designed by Jacky Liu</p>
                        <br />
                    </div>
                </div>











                <Modal size="lg" show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>ChowDown! - Hack Western 6</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <b>Devpost: <a style={{ color: "blue" }} href="https://devpost.com/software/chowdown" >devpost.com/software/chowdown</a></b><br />
                        <b>GitHub: <a style={{ color: "blue" }} href="https://github.com/jackyliu1999/ChowDown" >github.com/jackyliu1999/ChowDown</a></b><br />
                        <b>Collaborated with:</b> <a style={{ color: "blue" }} href="https://github.com/CyaTmrw" >Ivan Zhang</a>, <a style={{ color: "blue" }} href="https://www.linkedin.com/in/aja-khanal/">Aja Khanal</a><br />
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
                        <b>Devpost: <a style={{ color: "blue" }} href="https://devpost.com/software/decoy" >devpost.com/software/decoy</a></b><br />
                        <b>GitHub: <a style={{ color: "blue" }} href="https://github.com/jackyliu1999/Decoy" >github.com/jackyliu1999/Decoy</a></b><br />
                        <b>Collaborated with:</b> <a style={{ color: "blue" }} href="https://github.com/jacky-h-nguyen" >Jacky Nguyen</a>, <a style={{ color: "blue" }} href="https://github.com/ansonwong250" >Anson Wong</a><br />
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
                        <br /><br /><b>Video Demo, narrated by  <a href="https://github.com/jacky-h-nguyen" style={{ color: "blue" }}>Jacky Nguyen</a> and <a href="https://github.com/ansonwong250" style={{ color: "blue" }}> Anson Wong</a>: </b><br />
                        <center><div class="video-container"><iframe width="700" height="500"
                            src="https://www.youtube.com/embed/XdKzwtFOFWE">
                        </iframe></div></center>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleshow1Close}>
                            Close
          </Button>
                    </Modal.Footer>
                </Modal>

                <Modal size="lg" show={show4} onHide={handleshow4Close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Runeterra Bot</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <b>GitHub: <a style={{ color: "blue" }} href="https://github.com/jackyliu1999/Runeterra-Bot" >github.com/jackyliu1999/Runeterra-Bot</a></b><br />
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
                        <b>GitHub: <a style={{ color: "blue" }} href="https://github.com/jackyliu1999/Music-Catalyst" >github.com/jackyliu1999/Music-Catalyst</a></b><br />
                        <b>Video Demo: </b><br />
                        <center><div class="video-container"><iframe width="700" height="500"
                            src="https://www.youtube.com/embed/zCJFEet8Yac">
                        </iframe></div></center>
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

                <Modal size="lg" show={show10} onHide={handleshow10Close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Crimson</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <b>GitHub: <a style={{ color: "blue" }} href="https://github.com/jackyliu1999/Crimson" >github.com/jackyliu1999/Crimson</a></b><br />
                        <b>Video Demo: </b><br />
                        <center><div class="video-container"><iframe width="700" height="500"
                            src="https://www.youtube.com/embed/4XL9XZ7TZZ4">
                        </iframe></div></center>
                        <b>Dependencies: </b><br />
                        <li>pygame</li>
                        <li>pygame-menu</li>
                        <li>pyperclip</li>
                        <li>typing-extensions</li>
                        <b>Features: </b><br />
                        <li>The battle system, Inventory system, Loot system, Shop system, Character animations, Summoning heroes, Banners, Resetting the game, Demo version</li>
                        <b>Gameplay: </b><br />
          The player’s primary goal is to quote on quote “collect” characters. They have the ability to shop for items for characters based on drops from monsters. You start the game by giving a name to your protagonist. You can go to battle by clicking on "Fight in Battle" in the main menu. There is two regions. Camelot region is harder than Mount Olympus region. Camelot region should be locked in the beginning and it is unlocked after beating Mount Olympus' boss monster. Since this is a demo, Camelot region is unlocked to begin with. There is an unique regular monster and an unique boss monster for each region. The chance to encounter a boss monster is 25%. At the beginning, the player can not defeat the boss monster, so they must run away if encountered one. They must defeat regular monsters first to buy upgrades, items, and unlock new characters. After defeating a regular monster, the player gains gold and shards. In the shop, the player can use gold to buy healing potions, power ups, and upgrades to a hero's stats. All upgrades are only given to the currently selected hero. Player can switch their main hero by clicking on "View Heroes" in the main menu. The player can use shards to unlock new characters in the Summoning Portal. Summoning Portal summons new hero based on the banner the player have selected. The banner also gives the player bonus stats. Player can switch their banner by clicking on "Change Banner" in the main menu. As for the combat, player can only use their selected hero in a fight. The player can see a hero character, an enemy character, hero's health, enemy's health, combat items, and four buttons on the screen during combat. All characters are animated and there is seven characters in total. There is three heroes, two regular monsters, and two boss monsters. All characters have both an idle animation and an attack animation. In combat, both the attack button and the run button are self explanatory. The player can click on the power button to use power up. The player can click on the heal button to use healing potion. There is a demo mode that adds a lot of gold and shards for the user to test the game.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleshow10Close}>
                            Close
          </Button>
                    </Modal.Footer>
                </Modal>

                <Modal size="lg" show={show6} onHide={handleshow6Close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Remedy - Created for RU Hacks 2021</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <b>GitHub: <a style={{ color: "blue" }} href="https://github.com/jackyliu1999/Remedy" >github.com/jackyliu1999/Remedy</a></b><br />
                        <b>Video Demo: </b><br />
                        <center><div class="video-container"><iframe width="700" height="500"
                            src="https://www.youtube.com/embed/lcAF4CB1APA">
                        </iframe></div></center>
                        <b>What it does and how it works: </b><br />
                        <li>Remedy is a full stack application developed in React with a Node.js back end connecting with a MySQL database on Google Cloud. Remedy connects the healthcare industry with those looking for healthcare, giving healthcare organizations the ability to update their information that is displayed on the Google Map should a situation arises that makes it necessary. For example, a hospital could indictate whether COVID-19 vaccines are available at their location or not.</li>
                        <b>Dependencies: </b><br />
                        <li>Front end: bootstrap, mobx, mobx-react, react-bootstrap, react-dom, react-router-dom, reactstrap, web-vitals, google-maps-react</li>
                        <li>Back end: bcrypt, express, express-mysql-session, express-session, mysql</li>
                        <b>Collaborated with:</b> <a style={{ color: "blue" }} href="https://github.com/jacky-h-nguyen" >Jacky Nguyen</a>, <a style={{ color: "blue" }} href="https://github.com/ansonwong250" >Anson Wong</a><br />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleshow6Close}>
                            Close
          </Button>
                    </Modal.Footer>
                </Modal>


                <Modal size="lg" show={show11} onHide={handleshow11Close}>
                    <Modal.Header closeButton>
                        <Modal.Title>MyMovieCatalog</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <b>GitHub Frontend: <a style={{ color: "blue" }} href="https://github.com/jackyliu1999/MyMovieCatalog" >github.com/jackyliu1999/MyMovieCatalog</a></b><br />
                        <b>GitHub Backend: <a style={{ color: "blue" }} href="https://github.com/jackyliu1999/MyMovieCatalog-backend" >github.com/jackyliu1999/MyMovieCatalog-backend</a></b><br />
                        <b>Video Demo: </b><br />
                        <center><div class="video-container"><iframe width="700" height="500"
                            src="https://www.youtube.com/embed/chwMsQyAs5Q">
                        </iframe></div></center>
                        <b>Frontend Dependencies: </b><br />
                        <li>bootstrap</li>
                        <li>mobx</li>
                        <li>mobx-react</li>
                        <li>react-bootstrap</li>
                        <li>react-dom</li>
                        <li>react-router-dom</li>
                        <li>reactstrap</li>
                        <li>web-vitals</li>
                        <b>Backend Dependencies: </b><br />
                        <li>bcrypt</li>
                        <li>express</li>
                        <li>express-mysql-session</li>
                        <li>express-session</li>
                        <li>mysql</li>
                        <b>What it does and how it was built: </b><br />
                    MyMovieCatalog is a web application that allows users to track which movies they have watched. The frontend was developed in ReactJS with it making backend calls to an SQL database storing user information and movie information. MyMovieCatalog allows users to add a movie to their watched list, remove a movie from their watched list, view the profiles of other users and search for movies using a keyword.
          <br /><b>Functionalities: </b><br />
                        <li>Login Server</li>
                        <li>Registration Server</li>
                        <li>Add to List</li>
                        <li>Remove from List</li>
                        <li>Search for Lists of other users</li>
                        <li>Search for Movies</li>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleshow11Close}>
                            Close
          </Button>
                    </Modal.Footer>
                </Modal>

                <Modal size="lg" show={show12} onHide={handleshow12Close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Space War</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <b>GitHub Frontend: <a style={{ color: "blue" }} href="https://github.com/jackyliu1999/Space-War" >github.com/jackyliu1999/Space-War</a></b><br />
                        <b>Dependencies: </b><br />
                        <li><a style={{ color: "blue" }} href="https://git-scm.com" >Git</a></li>
                        <li><a style={{ color: "blue" }} href="https://www.sfml-dev.org" >SFML (mingW)</a></li>
                        <li><a style={{ color: "blue" }} href="http://www.codeblocks.org" >Code::Blocks, Download the binary release (mingW if you are using Windows)</a></li>
                        <b>Overview: </b><br />
                        Developed as the final project for CS3307 Object-Oriented Design and Analysis, achieving 94%. Space War is a 2D space shooter game created developed in C++ using the SFML library. The goal of this game is for the player to defeating enough enemies to advance stages. <br />
                        <br /><b>Installation: </b><br />
                        <li>1. Open your terminal</li>
                        <li>2. Run `git clone https://repo.csd.uwo.ca/scm/compsci3307_f2020/group11.git`</li>
                        <li>3. Go to your "sfml" folder, and then go the "bin" folder</li>
                        <li>4. Select and copy all the files in the "bin" folder</li>
                        <li>5. Go to our project folder</li>
                        <li>6. Go to "bin" folder, and then go to "Debug" folder</li>
                        <li>7. Paste all the files from sfml's bin folder to here</li>
                        <li>8. Open the Code::Blocks program</li>
                        <li>9. Click open the exiting project</li>
                        <li>10. Go to our project and find "SpaceWar.cbp"</li>
                        <br /><b>Run: </b><br />
                        <li>1. Click "build and run" on the top menu bar</li>
                        <br /><b>Play: </b><br />
                        <li>Use arrow keys to move</li>
                        <li>Spacebar to shoot</li>
                        <br />
                        <b>Collaborated with:</b> <a style={{ color: "blue" }} href="https://github.com/CyaTmrw" >Ivan Zhang</a>, Danish Amrohi, Jadd Miguel Arriola, Zeyu Zhang<br />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleshow12Close}>
                            Close
          </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div >
    )
}

export default withStyles(styles)(Home)
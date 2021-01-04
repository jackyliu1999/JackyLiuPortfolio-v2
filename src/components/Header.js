import React from "react";
import { Navbar, Nav, Form, FormControl, Button, Container, Col } from "react-bootstrap";

const Header = () => {
    return (
        <div className="">
            {/* <header id="header" class="fixed-top">
                <div class="container d-flex align-items-center justify-content-between">
                    <h1 class="logo"><a href="/Home">Jacky<span>.</span></a></h1>
                    <nav class="nav-menu d-none d-lg-block">
                        <ul>
                            <li><a href="/Home">Home</a></li>
                            <li><a href="/Home#projs">Projects</a></li>
                            <li><a href="Skills">Skills</a></li>
                            <li><a href="Archives">Archives</a></li>
                            <li><a href="Resume">Resume</a></li>
                        </ul>
                    </nav>
                </div>
            </header> */}
            <Navbar expand="xl" style={{ background: "black" }} variant="dark" fixed="top" collapseOnSelect>
                <Container fluid>
                    <Navbar.Brand href="#home" className="img-container"><div id="header" class="container d-flex align-items-center justify-content-between"><h1 class="logo"><a href="/Home">Jacky<span>.</span></a></h1></div>
                    </Navbar.Brand>
                    <Navbar.Toggle className="ml-3 mb-2" aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Col></Col>
                        <Col md="auto">
                            <div class="nav-menu d-none d-lg-block">
                                <Navbar.Text className="m-1"><a href="/Home">Home</a></Navbar.Text>
                                <Navbar.Text className="m-1"><a href="/Home#projs">Projects</a></Navbar.Text>
                                <Navbar.Text className="m-1"><a href="Skills">Skills</a></Navbar.Text>
                                <Navbar.Text className="m-1"><a href="Archives">Archives</a></Navbar.Text>
                                <Navbar.Text className="m-1"><a href="Resume">Resume</a></Navbar.Text>
                            </div>
                        </Col>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;
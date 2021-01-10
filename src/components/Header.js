import React from "react";
import { Navbar, Nav, Form, FormControl, Button, Container, Col } from "react-bootstrap";

const Header = () => {
    return (
        <div className="">
            <Navbar expand="xl" style={{ background: "black" }} fixed="top" collapseOnSelect>
                <Container fluid>
                    <Navbar.Brand href="#home" className="img-container"><div id="header" class="container d-flex align-items-center justify-content-between"><h1 class="logo"><a href="/Home">Jacky<span>.</span></a></h1></div>
                    </Navbar.Brand>
                    <Navbar.Toggle className="ml-3 mb-2" aria-controls="responsive-navbar-nav" style={{ backgroundColor: "#e6f1ff" }} />
                    <Navbar.Collapse id="basic-navbar-nav" style={{textAlign:"right"}}>
                        <Col></Col>
                        <Col md="auto">
                            <div class="nav-menu">
                                <Navbar.Text size="lg" style={{ paddingRight: "10px" }}><a href="/Home" style={{ color: "#e6f1ff" }}>Home</a></Navbar.Text>
                                <Navbar.Text style={{ paddingRight: "10px" }}><a href="/Home#projs" style={{ color: "#e6f1ff" }}>Projects</a></Navbar.Text>
                                <Navbar.Text style={{ paddingRight: "10px" }}><a href="/Home#skills" style={{ color: "#e6f1ff" }}>Skills</a></Navbar.Text>
                                <Navbar.Text style={{ paddingRight: "10px" }}><a href="Archives" style={{ color: "#e6f1ff" }}>Archives</a></Navbar.Text>
                                <Navbar.Text style={{ paddingRight: "10px" }}><a href="Resume" style={{ color: "#e6f1ff" }}>Resume</a></Navbar.Text>
                            </div>
                        </Col>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;
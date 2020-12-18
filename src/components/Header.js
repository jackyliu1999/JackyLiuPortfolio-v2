import React from "react";

const Header = () => {
    return (
        <div className="">
            <header id="header" class="fixed-top">
                <div class="container d-flex align-items-center justify-content-between">
                    <h1 class="logo"><a href="/Home">Jacky<span>.</span></a></h1>
                    <nav class="nav-menu d-none d-lg-block">
                        <ul>
                            <li><a href="/Home">Home</a></li>
                            <li><a href="#projs">Projects</a></li>
                            <li><a href="Skills">Skills</a></li>
                            <li><a href="Archives">Archives</a></li>
                            <li><a href="Resume">Resume</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header;
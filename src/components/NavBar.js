/* eslint-disable space-before-function-paren */
/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
// import logo from "../assets/img/logo.png";
import logo from "../assets/img/logo4.png";
// import logo from "../assets/img/DonaGino.svg";
import navIconLinkedIn from "../assets/img/nav-icon1.svg";
// import navIconFacebook from "../assets/img/nav-icon2.svg";
import navIconGithub from "../assets/img/logo_github.svg";
import avatar from "../assets/img/dona-avatar-smile.svg";

function NavBar() {
  // export const NavBar = () ={
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#about">
          <img className="logoko" src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggle-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse
          className="collapse navbar-collapse"
          id="basic-navbar-nav"
        >
          <Nav className="me-auto">
            <Nav.Link
              href="#about"
              className={
                activeLink === "about" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("about")}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#testimonials"
              className={
                activeLink === "testimonials"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("testimonials")}
            >
              Testimonials
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={
                activeLink === "contact" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("contact")}
            >
              Contact
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/dona-g"
              >
                <img src={navIconLinkedIn} alt="linked-in" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/supergirl21"
              >
                <img src={navIconGithub} alt="github" />
              </a>
              <img className="avatar" src={avatar} alt="Avatar Img" />
              <button
                className="vvd"
                href="#skills"
                onClick={() => console.log("connect")}
              >
                <span>Let's Connect</span>
              </button>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;

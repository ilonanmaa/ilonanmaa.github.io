import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import githubIcon from "../assets/img/github.png";
import linkedinIcon from "../assets/img/linkedin.png";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (
        window.scrollY >
        document.getElementById("welcome").getBoundingClientRect().bottom
      ) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      className={scrolled ? "navbar-scrolled" : "navbar-notscrolled"}
      fixed="top"
    >
      <Navbar.Brand className="fs-1" href="/">
        ILONA
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link className="nav-link fs-4" href="#home">
            Home
          </Nav.Link>
          <Nav.Link className="nav-link fs-4" href="#education">
            Education
          </Nav.Link>
          <Nav.Link className="nav-link fs-4" href="#experience">
            Experience
          </Nav.Link>
          <Nav.Link className="nav-link fs-4" href="#skills">
            Skills
          </Nav.Link>
          <Nav.Link className="nav-link fs-4" href="#projects">
            Projects
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link
            href="https://github.com/ilonanmaa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="" className="tiny-social-logo" />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;

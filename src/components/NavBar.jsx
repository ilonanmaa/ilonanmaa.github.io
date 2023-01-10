import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";

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

  const handleClickScroll = ({ clicked }) => {
    const element = document.getElementById(clicked);
    if (element) {
      element.scrollIntoView();
    }
  };

  return (
    <Navbar
      expand="lg"
      className={scrolled ? "navbar-scrolled" : "navbar-notscrolled"}
      fixed="top"
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              className="nav-link"
              href="/"
              onClick={handleClickScroll("banner")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="nav-link"
              href="/education"
              onClick={handleClickScroll("education")}
            >
              Education
            </Nav.Link>
            <Nav.Link className="nav-link" href="/experience">
              Experience
            </Nav.Link>
            <Nav.Link className="nav-link" href="/skills">
              Skills
            </Nav.Link>
            <Nav.Link className="nav-link" href="/projects">
              Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

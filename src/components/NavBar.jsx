import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";
import githubIcon from "../assets/img/github.png";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Button } from "react-bootstrap";
import $ from "jquery";

/*const NavBar = () => {
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
      className={
        scrolled
          ? "navbar-scrolled px-4 d-flex flex-row align-items-center"
          : "navbar-notscrolled px-4 d-flex flex-row align-items-center"
      }
      fixed="top"
    >
      <Navbar.Brand className="fs-1" href="/">
        ILONA
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="">
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
};*/

const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
      className={
        scrolled
          ? "navbar-scrolled px-4 d-flex flex-row justify-content-between align-items-center bg-dark"
          : "navbar-notscrolled px-4 d-flex flex-row justify-content-between align-items-center"
      }
      variant="dark"
      fixed="top"
    >
      <Navbar.Brand className="fs-1" href="/">
        ILONA
      </Navbar.Brand>
      <>
        <Button variant="primary" className="d-lg-none" onClick={handleShow}>
          Launch
        </Button>

        <Offcanvas
          show={show}
          onHide={handleClose}
          responsive="lg"
          placement="end"
          className="w-75"
          scroll={false}
          backdrop={true}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="text-primary">
              Responsive offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="bg-dark">
            <Nav>
              <Nav.Link
                className="nav-link fs-4"
                href="#home"
                onClick={() => handleClose()}
              >
                Home
              </Nav.Link>
              <Nav.Link
                className="nav-link fs-4"
                href="#education"
                onClick={() => handleClose()}
              >
                Education
              </Nav.Link>
              <Nav.Link
                className="nav-link fs-4"
                href="#experience"
                onClick={() => handleClose()}
              >
                Experience
              </Nav.Link>
              <Nav.Link
                className="nav-link fs-4"
                href="#skills"
                onClick={() => handleClose()}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                className="nav-link fs-4"
                href="#projects"
                onClick={() => handleClose()}
              >
                Projects
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    </Navbar>
  );
};

export default NavBar;

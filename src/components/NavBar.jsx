import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="navbar" fixed="top">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-link" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="nav-link" href="/education">
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

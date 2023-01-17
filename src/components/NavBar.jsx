import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n/config";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Button } from "react-bootstrap";

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

  //let isVisible = false;

  /*const toggleNavbarVisibility = () => {
    const navbar = document.getElementById("navbar");
    const items = document.getElementsByClassName("nav-link");

    navbar.style.opacity = 1;
    // To hide on page load

    if (isVisible) {
      navbar.classList.remove("navbar-visible");
    } else {
      navbar.classList.add("navbar-visible");
    }

    isVisible = !isVisible;
  };*/

  const [sideMenuHidden, setSideHidden] = useState(true);

  /*Bootstrap default breakpoint lg: width >= 992px*/
  const [hidden, setHidden] = useState(window.innerWidth < 992 ? true : false);

  window.addEventListener("resize", () => {
    if (window.innerWidth < 992) {
      setHidden(true);
    } else {
      setHidden(false);
      setSideHidden(true);
    }
  });

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const { t } = useTranslation("translation", { keyPrefix: "menu" });
  return (
    <div>
      <div
        id="sidemenu"
        hidden={sideMenuHidden}
        className="bg-dark navbar-visible"
      >
        <Nav id="side-navbar">
          <div className="d-flex flex-column">
            <Nav.Link
              className="nav-link fs-4 fw-bold"
              href="#home"
              onClick={() => setSideHidden(!sideMenuHidden)}
            >
              {t("home")}
            </Nav.Link>
            <Nav.Link
              className="nav-link fs-4 fw-bold"
              href="#education"
              onClick={() => setSideHidden(!sideMenuHidden)}
            >
              {t("education")}
            </Nav.Link>
            <Nav.Link
              className="nav-link fs-4 fw-bold"
              href="#experience"
              onClick={() => setSideHidden(!sideMenuHidden)}
            >
              {t("experience")}
            </Nav.Link>
            <Nav.Link
              className="nav-link fs-4 fw-bold"
              href="#skills"
              onClick={() => setSideHidden(!sideMenuHidden)}
            >
              {t("skills")}
            </Nav.Link>
            <Nav.Link
              className="nav-link fs-4 fw-bold"
              href="#projects"
              onClick={() => setSideHidden(!sideMenuHidden)}
            >
              {t("projects")}
            </Nav.Link>

            <div className="d-flex flex-row">
              <Nav.Link
                href="https://github.com/ilonanmaa"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link fs-1 fw-bold"
              >
                <AiFillGithub />
              </Nav.Link>
              <Nav.Link
                href="https://www.linkedin.com/in/ilonama/"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link fs-1 fw-bold"
              >
                <AiFillLinkedin />
              </Nav.Link>
            </div>
            <div className="d-flex flex-row">
              <Button onClick={() => changeLanguage("fi")}>Suomi</Button>
              <Button onClick={() => changeLanguage("en")}>English</Button>
            </div>
          </div>
        </Nav>
      </div>
      <Navbar
        expand="lg"
        className={
          scrolled || !sideMenuHidden
            ? "navbar-scrolled px-4 d-flex flex-row justify-content-between align-items-center bg-dark"
            : "navbar-notscrolled px-4 d-flex flex-row justify-content-between align-items-center"
        }
        variant="dark"
        fixed="top"
      >
        <Navbar.Brand className="fs-1" href="/">
          ILONA
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbar-expanded"
          onClick={() => setSideHidden(!sideMenuHidden)}
          aria-expanded="false"
        />
        <div id="navbar-expanded" hidden={hidden}>
          <Nav>
            <Nav.Link className="nav-link fs-4 fw-bold" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="nav-link fs-4 fw-bold" href="#education">
              Education
            </Nav.Link>
            <Nav.Link className="nav-link fs-4 fw-bold" href="#experience">
              Experience
            </Nav.Link>
            <Nav.Link className="nav-link fs-4 fw-bold" href="#skills">
              Skills
            </Nav.Link>
            <Nav.Link className="nav-link fs-4 fw-bold" href="#projects">
              Projects
            </Nav.Link>
          </Nav>
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;

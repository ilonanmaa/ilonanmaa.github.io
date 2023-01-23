import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n/config";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineHome,
  AiOutlineCode,
  AiOutlineProject,
} from "react-icons/ai";
import { SlGraduation } from "react-icons/sl";
import { MdOutlineComputer } from "react-icons/md";
import { FaGlobeAmericas } from "react-icons/fa";
import { Image, Navbar, Nav, Dropdown, DropdownButton } from "react-bootstrap";
import ReactCountryFlag from "react-country-flag";
import profile from "../assets/img/profile.jpg";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  /**Detect user scroll, when scrolled to the welcome text setScrolled = true. This is useed to control navbar styling */
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

  /**Determine if the sidemenu should be hidden or not, for mobile view.*/
  const [sideMenuHidden, setSideHidden] = useState(true);

  /**Bootstrap default breakpoint lg: width >= 992px*/
  const [hidden, setHidden] = useState(window.innerWidth < 992 ? true : false);

  window.addEventListener("resize", () => {
    if (window.innerWidth < 992) {
      setHidden(true);
    } else {
      setHidden(false);
      setSideHidden(true);
    }
  });

  const [language, setLanguage] = useState("en");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  const { t } = useTranslation("translation", { keyPrefix: "menu" });
  return (
    <div>
      {/**This is the sidemenu for mobile view. */}
      <div
        id="sidemenu"
        hidden={sideMenuHidden}
        className="bg-dark navbar-visible px-3"
        style={{ overflowY: "scroll" }}
      >
        <Nav id="side-navbar" className="d-flex flex-column">
          <div className="flex-column d-flex align-items-center border-bottom py-2">
            <div
              style={{ display: "block" }}
              className="justify-content-center flex-row d-flex"
            >
              <Image src={profile} className="profile-img-1" roundedCircle />
            </div>
            <span className="fw-bolder">Ilona Ma</span>
          </div>
          <div className="d-flex flex-row align-items-center justify-content-between">
            <Nav.Link
              className="nav-link fs-5 fw-bold"
              href="#home"
              onClick={() => setSideHidden(!sideMenuHidden)}
            >
              {t("home")}
            </Nav.Link>
            <AiOutlineHome className="fs-1" />
          </div>
          <div className="d-flex flex-row align-items-center justify-content-between">
            <Nav.Link
              className="nav-link fs-5 fw-bold"
              href="#education"
              onClick={() => setSideHidden(!sideMenuHidden)}
            >
              {t("education")}
            </Nav.Link>
            <SlGraduation className="fs-1" />
          </div>
          <div className="d-flex flex-row align-items-center justify-content-between">
            <Nav.Link
              className="nav-link fs-5 fw-bold"
              href="#experience"
              onClick={() => setSideHidden(!sideMenuHidden)}
            >
              {t("experience")}
            </Nav.Link>
            <MdOutlineComputer className="fs-1" />
          </div>
          <div className="d-flex flex-row align-items-center justify-content-between">
            <Nav.Link
              className="nav-link fs-5 fw-bold"
              href="#skills"
              onClick={() => setSideHidden(!sideMenuHidden)}
            >
              {t("skills")}
            </Nav.Link>
            <AiOutlineCode className="fs-1" />
          </div>
          <div className="d-flex flex-row align-items-center justify-content-between">
            <Nav.Link
              className="nav-link fs-5 fw-bold"
              href="#projects"
              onClick={() => setSideHidden(!sideMenuHidden)}
            >
              {t("projects")}
            </Nav.Link>
            <AiOutlineProject className="fs-1" />
          </div>
          <div className="d-flex flex-row py-2 justify-content-center">
            <Nav.Link
              href="https://github.com/ilonanmaa"
              target="_blank"
              rel="noopener noreferrer"
              className="fs-1 fw-bold"
            >
              <AiFillGithub />
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/ilonama/"
              target="_blank"
              rel="noopener noreferrer"
              className="fs-1 fw-bold"
            >
              <AiFillLinkedin />
            </Nav.Link>
          </div>
          <div className="d-flex flex-row justify-content-center">
            <Nav.Link
              className="fs-2 fw-bold"
              onClick={() => changeLanguage("en")}
            >
              <ReactCountryFlag countryCode="gb" svg />
            </Nav.Link>
            <Nav.Link
              className="fs-2 fw-bold"
              onClick={() => changeLanguage("fi")}
            >
              <ReactCountryFlag countryCode="fi" svg />
            </Nav.Link>
          </div>
        </Nav>
      </div>
      {/**This is the navbar for desktop view. Will collapse behind a hamburger-menu for mobile view.*/}
      <Navbar
        expand="lg"
        className={
          scrolled || !sideMenuHidden
            ? "navbar-scrolled px-5 d-flex flex-row justify-content-between align-items-center bg-dark"
            : "navbar-notscrolled px-5 d-flex flex-row justify-content-between align-items-center"
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
          <Nav className="align-items-center d-flex d-row">
            <Nav.Link className="nav-link fs-4 fw-bold" href="#home">
              {t("home")}
            </Nav.Link>
            <Nav.Link className="nav-link fs-4 fw-bold" href="#education">
              {t("education")}
            </Nav.Link>
            <Nav.Link className="nav-link fs-4 fw-bold" href="#experience">
              {t("experience")}
            </Nav.Link>
            <Nav.Link className="nav-link fs-4 fw-bold" href="#skills">
              {t("skills")}
            </Nav.Link>
            <Nav.Link className="nav-link fs-4 fw-bold" href="#projects">
              {t("projects")}
            </Nav.Link>
            <div>
              {language === "fi" ? (
                <Nav.Link
                  className="fs-1 fw-bold"
                  onClick={() => changeLanguage("en")}
                >
                  <ReactCountryFlag countryCode="gb" svg />
                </Nav.Link>
              ) : (
                <Nav.Link
                  className="fs-1 fw-bold"
                  onClick={() => changeLanguage("fi")}
                >
                  <ReactCountryFlag countryCode="fi" svg />
                </Nav.Link>
              )}
            </div>
          </Nav>
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;

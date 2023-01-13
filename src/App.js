import NavBar from "./components/NavBar";
import Education from "./components/Education";
import Experience from "./components/Experience";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Banner from "./components/Banner";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <section className="banner-education-section">
        <Banner />
        <Education />
      </section>
      <Experience />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;

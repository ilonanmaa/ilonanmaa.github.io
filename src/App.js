import NavBar from "./components/NavBar";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "bootstrap/dist/css/bootstrap.min.css";

import Banner from "./components/Banner";
import "./App.css";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import ShootingStars from "./components/ShootingStars";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <section className="banner-education-section">
        <ShootingStars />
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

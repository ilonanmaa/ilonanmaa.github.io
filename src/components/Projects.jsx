import { light } from "@mui/material/styles/createPalette";
import {
  Container,
  Card,
  Row,
  Col,
  ListGroup,
  CardGroup,
} from "react-bootstrap";
import { Badge } from "reactstrap";
import projectBG from "../assets/img/banner-bg.jpg";
import SkillBadge from "./SkillBadge";

const Projects = () => {
  return (
    <div className="projects-container-bg" id="projects">
      <Container className="projects-container">
        <Row>
          <h2 className="fw-bolder">Projects</h2>
        </Row>
        <Row>
          <Col className="projects-column">
            <Card style={{ width: "40rem" }} border={light}>
              <Card.Img variant="top" src={projectBG} />
              <Card.Body>
                <Card.Title>Personal website </Card.Title>
                <Card.Text>
                  Personal CV website and my project for learning front-end
                  development with React. This project uses React-Bootstrap
                  library. Currently working on making the website mobile
                  friendly. Hosted on GitHub Pages.
                </Card.Text>
                <Card.Link>
                  <a
                    href="https://github.com/ilonanmaa/ilonanmaa.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Repository
                  </a>
                  <a href="ilonanmaa.github.io"> Page</a>
                </Card.Link>
                <Card.Footer className="project-card-footer">
                  <SkillBadge text="React" />
                  <SkillBadge text="HTML/CSS" />
                  <SkillBadge text="Front-end" />
                  <SkillBadge text="Git" />
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;

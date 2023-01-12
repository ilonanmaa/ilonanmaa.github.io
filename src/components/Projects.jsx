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
          <h2 className="fw-bolder mb-4">Projects</h2>
        </Row>
        <Row>
          <Col className="projects-column">
            <CardGroup>
              <Card border={light} className="project-card">
                <Card.Img variant="top" src={projectBG} />
                <Card.Body>
                  <Card.Title className="fs-4">Personal website </Card.Title>
                  <Card.Text className="lh-lg fs-5">
                    Personal CV website and my project for learning front-end
                    development with React. This project uses React-Bootstrap
                    library. Currently working on making the website mobile
                    friendly. Hosted on GitHub Pages.
                  </Card.Text>
                  <div className="project-links">
                    <Card.Link
                      href="https://github.com/ilonanmaa/ilonanmaa.github.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fs-5 mb-3"
                    >
                      {" "}
                      Repository
                    </Card.Link>
                    <Card.Link
                      href="https://github.com/ilonanmaa/ilonanmaa.github.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fs-5 mb-3"
                    >
                      {" "}
                      Page
                    </Card.Link>
                  </div>
                  <Card.Footer className="project-card-footer">
                    <SkillBadge text="React" />
                    <SkillBadge text="HTML/CSS" />
                    <SkillBadge text="Front-end" />
                    <SkillBadge text="Git" />
                  </Card.Footer>
                </Card.Body>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;

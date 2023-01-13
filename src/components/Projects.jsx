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
    <div className="projects-container-bg text-center p-4" id="projects">
      <Container>
        <Row>
          <h2 className="fw-bolder mb-4 text-uppercase">Projects</h2>
        </Row>
        <Row>
          <Col className="d-flex flex-column align-items-center">
            <CardGroup>
              <Card border={light} className="project-card">
                <Card.Img variant="top" src={projectBG} />
                <Card.Body>
                  <Card.Title className="fs-4 fw-bolder p-2">
                    Personal website{" "}
                  </Card.Title>
                  <Card.Text className="lh-lg fs-5 text-justify">
                    Personal CV website and my project for learning front-end
                    development with React. This project uses React-Bootstrap
                    library. Currently working on making the website mobile
                    friendly. Hosted on GitHub Pages.
                  </Card.Text>
                  <div className="d-flex flex-row justify-content-between">
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
                  <Card.Footer className="d-flex flex-row justify-content-evenly border-top border-azure">
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

import { Container, Card, Row, Col } from "react-bootstrap";
import projectBG from "../assets/img/banner-stars-bg.jpg";

const Projects = () => {
  return (
    <div className="projects-container-bg" id="projects">
      <Container className="container-projects">
        <Row>
          <h2>Projects</h2>
        </Row>
        <Row>
          <Col className="projects-column">
            <Card style={{}}>
              <Card.Img variant="top" src={projectBG} />
              <Card.Body>
                <Card.Title>Personal CV website</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="projects-column">
            <Card style={{}}>
              <Card.Img variant="top" src={projectBG} />
              <Card.Body className="card-body">
                <Card.Title>Solar System Simulator</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;

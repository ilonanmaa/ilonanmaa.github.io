import { Container, Col, Row } from "react-bootstrap";
import { Carousel, Card } from "react-bootstrap";

const Education = () => {
  return (
    <div className="container-education-bg">
      <Container className="container-education">
        <Row>
          <h2>Academic</h2>
        </Row>
        <Row>
          <Col className="projects-column">
            <Card style={{ width: "30rem", height: "20rem" }}>
              <Card.Body>
                <Card.Title className="card-title">Education</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  2020-2023 (expected)
                </Card.Subtitle>
                <Card.Text>
                  <ul className="content-list">
                    <li>Bachelor of Science and Technology</li>
                    <ul>
                      <li>Major in computer science</li>
                      <li>Minor in quantum technology</li>
                    </ul>
                    <li>Aalto University</li>
                    <li>Espoo</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="projects-column">
            <Card style={{ width: "30rem", height: "20rem" }}>
              <Card.Body>
                <Card.Title className="card-title">Education</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  2017-2020
                </Card.Subtitle>
                <Card.Text>
                  <ul class="content-list">
                    <li>High school diploma</li>
                    <li>Ressu high school</li>
                    <li>Helsinki</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Education;

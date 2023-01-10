import { Container, Col, Row } from "react-bootstrap";
import { Carousel, Card } from "react-bootstrap";

const Education = () => {
  return (
    <div className="container-education-bg" id="education">
      <Container className="container-education">
        <Row>
          <h2>Education</h2>
        </Row>
        <Row>
          <Col className="projects-column">
            <Card style={{ width: "30rem", height: "22rem" }}>
              <Card.Body>
                <Card.Title className="card-title">University</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  2020-2023 (expected)
                </Card.Subtitle>
                <Card.Text>
                  <ul className="content-list">
                    <li style={{ fontWeight: "bold" }}>
                      Bachelor of Science and Technology
                    </li>
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
            <Card style={{ width: "30rem", height: "22rem" }}>
              <Card.Body>
                <Card.Title className="card-title">High school</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  2017-2020
                </Card.Subtitle>
                <Card.Text>
                  <ul class="content-list">
                    <li style={{ fontWeight: "bold" }}> High school diploma</li>
                    <ul>
                      <li>
                        German Language Diploma II (Deutsches Sprachdiplom - DSD
                        II)
                      </li>
                    </ul>
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

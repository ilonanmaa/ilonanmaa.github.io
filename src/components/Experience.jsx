import { Container, Row, Col } from "react-bootstrap";
const Experience = () => {
  return (
    <Container>
      <Row>
        <h3>Experience</h3>
      </Row>
      <Row lg={2}>
        <Col>
          <ul className="timeline">
            <li className="timeline-item">
              <h5>Software developer in a scrum team</h5>
              <p>Beamex</p>
              <p>12/2022 -</p>
            </li>
            <li className="timeline-item">
              <h5>Teaching assistant</h5>
              <p>Aalto university</p>
              <p>9/2022 - 12/2022</p>
            </li>
            <li className="timeline-item">
              <h5>Stablehand</h5>
              <p>Leppävaaran ratasastuskoulu</p>
              <p>2017-2020</p>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Experience;

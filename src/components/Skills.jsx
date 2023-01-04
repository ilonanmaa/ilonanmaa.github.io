import { Col, Container, Row, ProgressBar } from "react-bootstrap";

const Skills = () => {
  return (
    <Container>
      <Row>
        <h3>Skills</h3>;
      </Row>
      <Row>
        <Col>
          <h4>Programming</h4>
          <Container>
            <p>Scala</p>
            <ProgressBar className="skill-bar" now={80} />
            <p>React</p>
            <ProgressBar className="skill-bar" now={50} />
            <p>React native</p>
            <ProgressBar className="skill-bar" now={50} />
          </Container>
        </Col>
        <Col>
          <h4>Languages</h4>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;

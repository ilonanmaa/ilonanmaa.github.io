import { Container, Col, Row } from "react-bootstrap";
import { Carousel, Card } from "react-bootstrap";

const Education = () => {
  return (
    <Container>
      <h3>Education</h3>
      <ul className="timeline">
        <li className="timeline-item">
          <h5>Bachelor of Science in Technology</h5>
          <p>Aalto University</p>
          <p>Computer science</p>
          <p>2020 - 2023</p>
        </li>
        <li className="timeline-item">
          <h5>High school diploma</h5>
          <p>Ressun lukio</p>
          <p>2017 - 2020</p>
        </li>
      </ul>
    </Container>
  );
};

export default Education;

import { Col, Container, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <section className="banner" id="banner">
      <Container className="banner-content">
        <Row>
          <Col>
            <h1 id="welcome">Hello! I'm Ilona. Welcome to my CV</h1>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;

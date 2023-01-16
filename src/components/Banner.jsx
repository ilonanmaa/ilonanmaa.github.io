import { Col, Container, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <section id="home">
      <Container className="">
        <Row>
          <Col>
            <h1 id="welcome" className="fw-bolder p-4">
              Welcome to my CV!
            </h1>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;

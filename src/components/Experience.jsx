import { Container, Col, Row } from "react-bootstrap";
import { Carousel, Card } from "react-bootstrap";

const Experience = () => {
  return (
    <Container className="timeline">
      <Row className="title-timeline">
        <h3>Experience</h3>
      </Row>
      <section id="cd-timeline" class="cd-container">
        <div class="cd-timeline-block">
          <div class="cd-timeline-img cd-picture"></div>

          <div class="cd-timeline-content">
            <h2>Penta Consulting</h2>
            <p>
              Working alongside the designer team implementing the designs, also
              developing custom solutions to address team necessities.
            </p>
          </div>
        </div>

        <div class="cd-timeline-block">
          <div class="cd-timeline-img cd-movie"></div>
          <div class="cd-timeline-content">
            <h2>Title of section 2</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
              optio, dolorum provident rerum aut hic quasi placeat iure tempora
              laudantium ipsa ad debitis unde?
            </p>
          </div>
        </div>
        <div class="cd-timeline-block">
          <div class="cd-timeline-img cd-movie"></div>
          <div class="cd-timeline-content">
            <h2>Title of section 2</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
              optio, dolorum provident rerum aut hic quasi placeat iure tempora
              laudantium ipsa ad debitis unde?
            </p>
          </div>
        </div>
        <div class="cd-timeline-block">
          <div class="cd-timeline-img cd-movie"></div>
          <div class="cd-timeline-content">
            <h2>Title of section 2</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
              optio, dolorum provident rerum aut hic quasi placeat iure tempora
              laudantium ipsa ad debitis unde?
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Experience;

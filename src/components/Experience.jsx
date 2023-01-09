import { Container, Col, Row } from "react-bootstrap";
import { Carousel, Card } from "react-bootstrap";

const Experience = () => {
  return (
    <div className="timeline-experience">
      <Container className="timeline-container">
        <Row className="title-timeline">
          <h2>Experience</h2>
        </Row>
        <section id="cd-timeline" class="cd-container">
          <div class="cd-timeline-block">
            <div class="cd-timeline-img cd-picture"></div>

            <div class="cd-timeline-content">
              <h2>Software developer in a scrum team</h2>
              <p>
                Developer in a project done during courses software project 1
                and 2. <br /> Beamex <br /> Part-time
              </p>
            </div>
          </div>

          <div class="cd-timeline-block">
            <div class="cd-timeline-img cd-movie"></div>

            <div class="cd-timeline-content">
              <h2>Teaching assistant</h2>
              <p>
                TA for programming 1 (O1). <br /> Aalto university <br />{" "}
                Part-time <br /> 9/2022-12/2022
              </p>
            </div>
          </div>
          <div class="cd-timeline-block">
            <div class="cd-timeline-img cd-movie"></div>

            <div class="cd-timeline-content">
              <h2>Stablehand</h2>
              <p>
                Leppävaara riding school <br /> Part-time <br /> 2017 - 2020
              </p>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Experience;

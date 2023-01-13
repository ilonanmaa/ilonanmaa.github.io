import { Container, Modal, Row, CardGroup, Button } from "react-bootstrap";
import { Carousel, Card } from "react-bootstrap";
import { useState } from "react";

const Experience = () => {
  return (
    <div className="text-center p-4" id="experience">
      <Container className="p-4">
        <Row>
          <h2 className="fw-bolder mb-4 text-uppercase">Experience</h2>
        </Row>
        <Row>
          <CardGroup>
            <Card>
              <Card.Body className="bg-dark">
                <Card.Title className="fs-4 fw-bolder p-2">
                  Software developer
                </Card.Title>
                <Card.Subtitle className="mb-3 opacity-75">
                  09/2022-12/2022
                </Card.Subtitle>
                <ul className="text-start fs-5 lh-lg">
                  <li className="fw-bolder">
                    Software developer in a scrum team
                  </li>
                  <ul>
                    <li>Part-time</li>
                    <li>Project done for courses Software project 1 and 2</li>
                  </ul>
                  <li>Beamex</li>
                </ul>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body className="bg-dark">
                <Card.Title className="fs-4 fw-bolder p-2">
                  Teaching Assistant TA
                </Card.Title>
                <Card.Subtitle className="mb-3 opacity-75">
                  09/2022-12/2022
                </Card.Subtitle>
                <ul className="text-start fs-5 lh-lg">
                  <li className="fw-bolder">TA for Programming 1</li>
                  <ul>
                    <li>Part-time</li>
                  </ul>
                  <li>Aalto University</li>
                </ul>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body className="bg-dark">
                <Card.Title className="fs-4 fw-bolder p-2">
                  Stablehand
                </Card.Title>
                <Card.Subtitle className="mb-3 opacity-75">
                  09/2017-03/2021
                </Card.Subtitle>
                <ul className="text-start fs-5 lh-lg">
                  <li className="fw-bolder">Stablehand in a riding school</li>
                  <ul>
                    <li>Part-time</li>
                    <li>Summer job</li>
                  </ul>
                  <li>Leppävaaran ratsastuskoulu</li>
                </ul>
              </Card.Body>
            </Card>
          </CardGroup>
        </Row>
      </Container>
    </div>
  );
};

export default Experience;

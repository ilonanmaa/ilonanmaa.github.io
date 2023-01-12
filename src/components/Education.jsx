import { Container, Modal, Row, CardGroup, Button } from "react-bootstrap";
import { Carousel, Card } from "react-bootstrap";
import bG from "../assets/img/banner-bg.png";
import { useState } from "react";

const Education = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container-education-bg" id="education">
      <Container className="container-education">
        <Row>
          <h2 className="fw-bolder mb-4">Education</h2>
        </Row>
        <Row>
          <CardGroup>
            <Card className="education-card">
              <Card.Body>
                <Card.Title className="fs-4 fw-bolder">University</Card.Title>
                <Card.Subtitle className="mb-3">
                  2020-2023 (expected)
                </Card.Subtitle>
                <ul className="content-list fs-5 lh-lg">
                  <li className="fw-bolder">
                    Bachelor of Science and Technology
                  </li>
                  <ul>
                    <li>Major in computer science</li>
                    <li>Minor in quantum technology</li>
                  </ul>
                  <li>Aalto University</li>
                  <li>Espoo</li>
                </ul>
                <Card.Footer className="education-card-footer">
                  {" "}
                  <Button onClick={handleShow} variant="link" className="fs-5">
                    Relevant Courses
                  </Button>
                </Card.Footer>
              </Card.Body>
            </Card>
            <Card className="education-card">
              <Card.Body>
                <Card.Title className="fs-4 fw-bolder">High School</Card.Title>
                <Card.Subtitle className="mb-3">2017-2020</Card.Subtitle>
                <ul className="content-list fs-5 lh-lg">
                  <li className="fw-bolder"> High school diploma</li>
                  <ul>
                    <li>
                      German Language Diploma II (Deutsches Sprachdiplom - DSD
                      II)
                    </li>
                  </ul>
                  <li>Ressu high school</li>
                  <li>Helsinki</li>
                </ul>
              </Card.Body>
            </Card>
          </CardGroup>
        </Row>
      </Container>
      <Courses show={show} handleClose={handleClose} />
    </div>
  );
};

const Courses = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold">Relevant courses</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
          <li>Programming 1 and 2</li>
          <li>Programming Studio 1 </li>
          <li>Programming Studio 2: project </li>
          <li>Basic Course in C programming</li>
          <li>Programming Parallel Computers D</li>
          <li>Web Software Development</li>
          <li>Data Structures and Algorithms</li>
          <li>Software Project 1 and 2</li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Education;

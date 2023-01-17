import { Container, Modal, Row, CardGroup, Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";

const Education = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id="education" className="p-4">
      <Container className=" text-center p-4">
        <Row>
          <h2 className="fw-bolder mb-4 text-uppercase">Education</h2>
        </Row>
        <Row>
          <CardGroup>
            <Card>
              <Card.Body className="bg-dark">
                <Card.Title className="fs-4 fw-bolder p-2">
                  Bachelor of Science in Technology
                </Card.Title>
                <Card.Subtitle className="mb-3 opacity-75">
                  09/2020-06/2023 (expected)
                </Card.Subtitle>
                <ul className="text-start fs-5 lh-lg">
                  <li className="fw-bolder">Aalto University</li>
                  <ul>
                    <li>Major in computer science</li>
                    <li>Minor in quantum technology</li>
                  </ul>
                  <li>
                    {" "}
                    <IoLocationSharp className="mx-2" />
                    Espoo, Finland
                  </li>
                </ul>
                <Card.Footer className="bg-dark border-0">
                  {" "}
                  <Button onClick={handleShow} variant="link" className="fs-5">
                    Relevant Courses
                  </Button>
                </Card.Footer>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body className="bg-dark">
                <Card.Title className="fs-4 fw-bolder p-2">
                  High School Diploma
                </Card.Title>
                <Card.Subtitle className="mb-3 opacity-75">
                  08/2017-06/2020
                </Card.Subtitle>
                <ul className="text-start fs-5 lh-lg">
                  <li className="fw-bolder"> Ressu High School</li>
                  <ul>
                    <li>
                      German Language Diploma II (Deutsches Sprachdiplom - DSD
                      II)
                    </li>
                  </ul>
                  <li>
                    <IoLocationSharp className="mx-2" /> Helsinki, Finland
                  </li>
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

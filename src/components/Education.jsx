import { Container, Modal, Row, CardGroup, Button, Nav } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { FaInfoCircle } from "react-icons/fa";

const Education = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "education",
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id="education" className="p-4">
      <Container className=" text-center p-4">
        <Row>
          <h2 className="fw-bolder mb-4 text-uppercase">{t("title")}</h2>
        </Row>
        <Row>
          <CardGroup>
            <Card>
              <Card.Body className="bg-dark">
                <div className="border-bottom pb-3">
                  <Card.Title className="fs-4 fw-bolder">
                    {t("university.bachelor-title")}
                  </Card.Title>
                  <Card.Title className="fs-5 fw-bolder">
                    {t("university.university")}
                  </Card.Title>
                  <Card.Subtitle className="opacity-75 mt-2">
                    {t("university.time")}
                  </Card.Subtitle>
                </div>
                <ul className="text-start fs-5 lh-lg my-2">
                  <li>{t("university.major")}</li>
                  <li>{t("university.minor")}</li>
                  <li>{t("university.location")}</li>
                </ul>
                <Card.Footer className="bg-dark border-0">
                  {" "}
                  <Button onClick={handleShow} variant="link" className="fs-5">
                    {t("university.relevant-courses")}
                  </Button>
                </Card.Footer>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body className="bg-dark">
                <div className="border-bottom pb-3">
                  <Card.Title className="fs-4 fw-bolder">
                    {t("high-school.title")}
                  </Card.Title>
                  <Card.Title className="fs-5 fw-bolder">
                    {t("high-school.school")}
                  </Card.Title>
                  <Card.Subtitle className="opacity-75 mt-2">
                    {t("high-school.time")}
                  </Card.Subtitle>
                </div>
                <ul className="text-start fs-5 lh-lg my-2">
                  <li>{t("high-school.exams.exam")}</li>
                  <ul>
                    <li>{t("high-school.exams.subjects")}</li>
                  </ul>
                  <li>{t("high-school.location")}</li>
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
  const { t } = useTranslation("translation", {
    keyPrefix: "education.university",
  });
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold">Relevant courses</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
          <li>{t("courses.1")}</li>
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

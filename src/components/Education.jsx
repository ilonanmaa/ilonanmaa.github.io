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
                  <Card.Subtitle className="opacity-75 mt-2 fst-italic">
                    {t("university.time")}
                  </Card.Subtitle>
                </div>
                <ul className="text-start fs-6 lh-lg mt-2">
                  <li>{t("university.major")}</li>
                  <ul>
                    <li>
                      {t("university.thesis")} <br />
                      <span className="fst-italic">
                        Deep learning for audio driven facial animation in video
                        games
                      </span>
                    </li>
                    <li>
                      <Button
                        onClick={handleShow}
                        variant="link"
                        className="fs-6"
                      >
                        {t("university.relevant-courses")}
                      </Button>
                    </li>
                  </ul>
                  <li>{t("university.minor")}</li>
                  <li>{t("university.location")}</li>
                </ul>
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
                  <Card.Subtitle className="opacity-75 mt-2 fst-italic">
                    {t("high-school.time")}
                  </Card.Subtitle>
                </div>
                <ul className="text-start fs-6 lh-lg mt-2">
                  <li>{t("high-school.exams.exam")}</li>
                  <ul>
                    <li>{t("high-school.exams.science")}</li>
                    <li>{t("high-school.exams.languages")}</li>
                  </ul>
                  <li>Additional</li>
                  <ul>
                    <li>{t("high-school.german-diploma")}</li>
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
        <Modal.Title className="fw-bold">{t("relevant-courses")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul className="list-unstyled ">
          <CourseInput
            name={t("courses.CS-A1110")}
            link="https://sisu.aalto.fi/student/courseunit/otm-49b90b5f-7a82-4255-9b68-7ce91fe3964a/brochure"
            code="CS-A1110"
          />
          <CourseInput
            name={t("courses.CS-A1120")}
            link="https://sisu.aalto.fi/student/courseunit/otm-903337e3-89fb-4b89-8fff-ce2c1ba66232/brochure"
            code="CS-A1120"
          />
          <CourseInput
            name={t("courses.CS-C2100")}
            code="CS-C2100"
            link="https://sisu.aalto.fi/student/courseunit/otm-61e4c7bf-23c2-486d-bcad-2183f02bc7db/brochure"
          />
          <CourseInput
            name={t("courses.CS-C2120")}
            code="CS-C2120"
            link="https://sisu.aalto.fi/student/courseunit/otm-adda76fa-574c-4e63-9b48-27da63887a1e/brochure"
          />
          <CourseInput
            name={t("courses.CS-A1140")}
            link="https://sisu.aalto.fi/student/courseunit/otm-c09c8242-5e9f-46e6-a38c-8855d9578cc1/brochure"
            code="CS-A1140"
          />
          <CourseInput
            name={t("courses.CS-C3170")}
            link="https://sisu.aalto.fi/student/courseunit/otm-b315be41-994c-4441-8719-b8030dc49479/brochure"
            code="CS-C3170"
          />
          <CourseInput
            name={t("courses.CS-E4580")}
            link="https://sisu.aalto.fi/student/courseunit/otm-f7b6f20a-cef7-487d-83a3-b526c84b63c6/brochure"
            code="CS-E4580"
          />
          <CourseInput
            name={t("courses.CS-C2130")}
            link="https://sisu.aalto.fi/student/courseunit/otm-8653c56f-f588-4195-94f8-8526ed47fd12/brochure"
            code="CS-C2130"
          />
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const CourseInput = ({ name, link, code }) => {
  return (
    <li className="d-flex flex-row justify-content-between border-bottom">
      <span className="fw-light">{name}</span>
      <a href={link}>{code}</a>
    </li>
  );
};

export default Education;

/**         <li>Programming Studio 1 </li>
          <li>Programming Studio 2: project </li>
          <li>Basic Course in C programming</li>
          <li>Programming Parallel Computers D</li>
          <li>Web Software Development</li>
          <li>Software Project 1 and 2</li> */

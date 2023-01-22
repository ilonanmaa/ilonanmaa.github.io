import {
  Container,
  Card,
  Row,
  CardGroup,
  Modal,
  Button,
  CloseButton,
} from "react-bootstrap";
import { useTranslation } from "react-i18next";
import projectBG from "../assets/img/project-picture.PNG";
import SkillBadge from "./SkillBadge";
import { useState } from "react";
import demo from "../assets/vid/demo.mp4";

const Projects = () => {
  const { t } = useTranslation("translation", { keyPrefix: "projects" });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="p-4" id="projects">
      <Container className="p-4">
        <Row className="text-center">
          <h2 className="fw-bolder mb-4 text-uppercase">{t("title")}</h2>
        </Row>
        <Row>
          <CardGroup className="project-card mx-auto">
            <Card>
              <Card.Body className="bg-dark">
                <Card.Img variant="top" src={projectBG} />
                <Card.Title className="fs-4 fw-bolder p-2 text-center">
                  {t("portfolio.title")}{" "}
                </Card.Title>
                <Card.Text
                  className="lh-lg fs-6"
                  style={{ textAlign: "justify" }}
                >
                  {t("portfolio.description")}
                </Card.Text>
                <div className="d-flex flex-row justify-content-between my-3">
                  <Button
                    href="https://github.com/ilonanmaa/ilonanmaa.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline-light"
                    className="fs-6 fw-bold text-uppercase"
                  >
                    {" "}
                    {t("portfolio.repository")}
                  </Button>
                  <Button
                    onClick={handleShow}
                    variant="outline-light"
                    className="fs-6 fw-bold text-uppercase"
                  >
                    {t("portfolio.demo")}
                  </Button>
                </div>
                <Card.Footer className="border-top border-azure">
                  <div className="d-flex flex-row justify-content-evenly flex-wrap">
                    <SkillBadge text="React" />
                    <SkillBadge text="HTML/CSS" />
                    <SkillBadge text="Frontend" />
                    <SkillBadge text="UI/UX-design" />
                    <SkillBadge text="Git" />
                  </div>
                </Card.Footer>
              </Card.Body>
            </Card>
          </CardGroup>
        </Row>
      </Container>
      <Demo show={show} handleClose={handleClose} />
    </div>
  );
};

const Demo = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header className="bg-dark flex-row justify-content-between border-bottom">
        <Modal.Title className="fw-bold">Demo</Modal.Title>
        <CloseButton variant="white" onClick={handleClose} />
      </Modal.Header>
      <Modal.Body className="bg-black justify-content-center d-flex flex-row">
        <video controls id="video-demo">
          <source src={demo} type="video/mp4" />
        </video>
      </Modal.Body>
    </Modal>
  );
};

export default Projects;

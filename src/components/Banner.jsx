import {
  Button,
  Col,
  Container,
  Modal,
  Row,
  Image,
  CloseButton,
} from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { MdPictureAsPdf } from "react-icons/md";
import { useState } from "react";
import profile from "../assets/img/profile.jpg";
import CV_english from "../assets/docs/CV_Ilona_Ma_English.pdf";
import CV_finnish from "../assets/docs/CV_Ilona_Ma_Suomi.pdf";

const Banner = () => {
  const { t } = useTranslation("translation");
  const { i18n } = useTranslation("welcome");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <section id="home">
      <Container className="">
        <Row>
          <Col className="p-4">
            <div className="mb-2">
              <h1 id="welcome" className="fw-bolder block d-inline">
                {t("welcome.text")}
              </h1>
            </div>
            <div>
              <Button
                className="fw-bold my-1"
                variant="outline-light"
                onClick={handleShow}
              >
                {t("welcome.profile-button")}
              </Button>
            </div>
            <div>
              <Button
                className="fw-bold my-2 align-items-center d-flex flex-row banner-button"
                variant="outline-light"
                href={i18n.language === "en" ? CV_english : CV_finnish}
                download
              >
                {t("welcome.download-button")}
                <MdPictureAsPdf className="fs-2 ms-2" />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Profile show={show} handleClose={handleClose} />
    </section>
  );
};

const Profile = ({ show, handleClose }) => {
  const { t } = useTranslation("translation", { keyPrefix: "profile" });
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header className="bg-dark flex-row justify-content-end profile-header">
        <CloseButton variant="white" onClick={handleClose} />
      </Modal.Header>
      <Modal.Body className="bg-dark px-4">
        <div className="d-flex flex-column">
          <div className="d-flex flex-column justify-content-center align-items-center border-bottom mb-2">
            <div className="">
              <Image src={profile} className="profile-img-2" roundedCircle />
            </div>
            <span className="fw-bolder fs-3 mb-2">Ilona Ma</span>
          </div>
          <Row className="my-1">
            <Col>
              <span className="fst-italic me-4 profile-question">
                {t("questions.who")}
              </span>
            </Col>
            <Col>
              <p className=""> {t("answers.paragraph-who")}</p>
            </Col>
          </Row>
          <Row className="my-1">
            {" "}
            <Col>
              <span className="fst-italic me-4 profile-question">
                {t("questions.experience")}
              </span>
            </Col>
            <Col>
              <p className=""> {t("answers.paragraph-skills")}</p>
            </Col>
          </Row>
          <Row className="my-1">
            {" "}
            <Col>
              <span className="fst-italic me-4 profile-question">
                {t("questions.interests")}
              </span>
            </Col>
            <Col>
              <p className=""> {t("answers.paragraph-interests")}</p>
            </Col>
          </Row>
          <Row className="my-1">
            {" "}
            <Col>
              <span className="fst-italic me-4 profile-question">
                {t("questions.others")}
              </span>
            </Col>
            <Col>
              <p className=""> {t("answers.paragraph-others")}</p>
            </Col>
          </Row>
          <Row className="my-1">
            {" "}
            <Col>
              <span className="fst-italic me-4 profile-question">
                {t("questions.random")}
              </span>
            </Col>
            <Col>
              <p className=""> {t("answers.paragraph-random")}</p>
            </Col>
          </Row>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Banner;

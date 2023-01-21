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
import { dark, light } from "@mui/material/styles/createPalette";

const Banner = () => {
  const { t } = useTranslation();
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
                {t("welcome")}
              </h1>
            </div>
            <div>
              <Button
                className="fw-bold"
                variant="outline-light my-1"
                onClick={handleShow}
              >
                About me
              </Button>
            </div>
            <div>
              <Button
                className="fw-bold"
                variant="outline-light my-2 align-items-center d-flex flex-row"
              >
                Download
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
              <span className="fst-italic me-4 profile-question">Who?</span>
            </Col>
            <Col>
              <p className=""> {t("about-me.paragraph-who")}</p>
            </Col>
          </Row>
          <Row className="my-1">
            {" "}
            <Col>
              <span className="fst-italic me-4 profile-question">
                What kind of hands-on experience do you have?
              </span>
            </Col>
            <Col>
              <p className=""> {t("about-me.paragraph-skills")}</p>
            </Col>
          </Row>
          <Row className="my-1">
            {" "}
            <Col>
              <span className="fst-italic me-4 profile-question">
                Interests within the field of computer science?
              </span>
            </Col>
            <Col>
              <p className=""> {t("about-me.paragraph-interests")}</p>
            </Col>
          </Row>
          <Row className="my-1">
            {" "}
            <Col>
              <span className="fst-italic me-4 profile-question">
                What about other interests?
              </span>
            </Col>
            <Col>
              <p className=""> {t("about-me.paragraph-others")}</p>
            </Col>
          </Row>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Banner;

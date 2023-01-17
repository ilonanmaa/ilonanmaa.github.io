import { Col, Container, Row } from "react-bootstrap";
import i18n from "../i18n/config";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const t = useTranslation();
  return (
    <section id="home">
      <Container className="">
        <Row>
          <Col>
            <h1 id="welcome" className="fw-bolder p-4">
              {i18n.t("welcome")}
            </h1>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;

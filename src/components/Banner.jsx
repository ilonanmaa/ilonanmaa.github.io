import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation();
  return (
    <section id="home">
      <Container>
        <Row>
          <Col className="p-4">
            <h1 id="welcome" className="fw-bolder d-inline">
              {t("welcome")}
            </h1>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;

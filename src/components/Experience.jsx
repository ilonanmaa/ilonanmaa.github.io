import { Container, Row, CardGroup } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation("translation", { keyPrefix: "experience" });
  return (
    <div className="text-center p-4" id="experience">
      <Container className="p-4">
        <Row>
          <h2 className="fw-bolder mb-4 text-uppercase">{t("title")}</h2>
        </Row>
        <Row>
          <CardGroup>
            <Card>
              <Card.Body className="bg-dark">
                <Card.Title className="fs-4 fw-bolder p-2">
                  {t("software-developer.title")}
                </Card.Title>
                <Card.Subtitle className="mb-3 opacity-75">
                  {t("software-developer.time")}
                </Card.Subtitle>
                <ul className="text-start fs-5 lh-lg">
                  <li className="fw-bolder">
                    {t("software-developer.description")}
                  </li>
                  <ul>
                    <li>{t("software-developer.type")}</li>
                    <li>{t("software-developer.info")}</li>
                  </ul>
                  <li>{t("software-developer.company")}</li>
                </ul>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body className="bg-dark">
                <Card.Title className="fs-4 fw-bolder p-2">
                  {t("TA.title")}
                </Card.Title>
                <Card.Subtitle className="mb-3 opacity-75">
                  {t("TA.time")}
                </Card.Subtitle>
                <ul className="text-start fs-5 lh-lg">
                  <li className="fw-bolder">{t("TA.description")}</li>
                  <ul>
                    <li>{t("TA.type")}</li>
                  </ul>
                  <li>{t("TA.company")}</li>
                </ul>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body className="bg-dark">
                <Card.Title className="fs-4 fw-bolder p-2">
                  {t("stablehand.title")}
                </Card.Title>
                <Card.Subtitle className="mb-3 opacity-75">
                  {t("stablehand.time")}
                </Card.Subtitle>
                <ul className="text-start fs-5 lh-lg">
                  <li className="fw-bolder">{t("stablehand.description")}</li>
                  <ul>
                    <li>{t("stablehand.type")}</li>
                  </ul>
                  <li>{t("stablehand.company")}</li>
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

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
                <div className="border-bottom pb-3">
                  <Card.Title className="fs-4 fw-bolder">
                    {t("software-developer.title")}
                  </Card.Title>
                  <Card.Title className="fs-5 fw-bold">
                    {t("software-developer.company")}
                  </Card.Title>
                  <Card.Subtitle className="opacity-75 mt-2 fst-italic">
                    {t("software-developer.time")}
                  </Card.Subtitle>
                </div>
                <ul className="text-start fs-6 lh-lg mt-2">
                  <li className="fw-bolder">
                    {t("software-developer.description")}
                  </li>
                  <ul>
                    <li>{t("software-developer.type")}</li>
                    <li>{t("software-developer.info")}</li>
                  </ul>
                </ul>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body className="bg-dark">
                <div className="border-bottom pb-3">
                  <Card.Title className="fs-4 fw-bolder">
                    {t("TA.title")}
                  </Card.Title>
                  <Card.Title className="fs-5 fw-bold">
                    {t("TA.company")}
                  </Card.Title>
                  <Card.Subtitle className="opacity-75 mt-2 fst-italic">
                    {t("TA.time")}
                  </Card.Subtitle>
                </div>
                <ul className="text-start fs-6 lh-lg mt-2">
                  <li className="fw-bolder">{t("TA.description")}</li>
                  <ul>
                    <li>{t("TA.type")}</li>
                  </ul>
                  <li>
                    {t("TA.coursepage")}
                    <a href="https://sisu.aalto.fi/student/courseunit/otm-49b90b5f-7a82-4255-9b68-7ce91fe3964a/brochure">
                      CS-A1110
                    </a>
                  </li>
                </ul>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body className="bg-dark">
                <div className="border-bottom pb-3">
                  <Card.Title className="fs-4 fw-bolder">
                    {t("stablehand.title")}
                  </Card.Title>
                  <Card.Title className="fs-5 fw-bold">
                    {t("stablehand.company")}
                  </Card.Title>
                  <Card.Subtitle className="opacity-75 mt-2 fst-italic">
                    {t("stablehand.time")}
                  </Card.Subtitle>
                </div>
                <ul className="text-start fs-6 lh-lg mt-2">
                  <li className="fw-bolder">{t("stablehand.description")}</li>
                  <ul>
                    <li>{t("stablehand.type")}</li>
                  </ul>
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

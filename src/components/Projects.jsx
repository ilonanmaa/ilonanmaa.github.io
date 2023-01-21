import { Container, Card, Row, CardGroup } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import projectBG from "../assets/img/banner-bg.jpg";
import SkillBadge from "./SkillBadge";

const Projects = () => {
  const { t } = useTranslation("translation", { keyPrefix: "projects" });
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
                <div className="d-flex flex-row justify-content-between">
                  <Card.Link
                    href="https://github.com/ilonanmaa/ilonanmaa.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fs-6 mb-3"
                  >
                    {" "}
                    {t("portfolio.repository")}
                  </Card.Link>
                  <Card.Link
                    href="https://ilonanmaa.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fs-6 mb-3"
                  >
                    {" "}
                    {t("portfolio.demo")}
                  </Card.Link>
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
    </div>
  );
};

export default Projects;

import { Container, Tab, Nav } from "react-bootstrap";
import { Progress } from "reactstrap";
import SkillBadge from "./SkillBadge";
import "react-multi-carousel/lib/styles.css";
import "react-circular-progressbar/dist/styles.css";
import "../App.css";
import StarRating from "./StarRating";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "skills",
  });
  return (
    <div className="skills-container-bg p-4" id="skills">
      <Container className="skills-container bg-dark">
        <h2 className="fw-bolder mb-5 text-uppercase">{t("title")}</h2>
        <Tab.Container>
          <Nav
            className="tab-bar-pill d-flex justify-content-center rounded mx-auto"
            fill
            justify
            id="skills-tabs"
          >
            <Nav.Item className="technical-key">
              <Nav.Link
                eventKey="technical"
                className="rounded-start border border-white fs-6 text-uppercase"
              >
                {t("technical.title")}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="languages-key">
              <Nav.Link
                eventKey="languages"
                className="rounded-end border border-white fs-6 text-uppercase"
              >
                {t("languages.title")}
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="technical">
              <Technical />
            </Tab.Pane>
            <Tab.Pane eventKey="languages">
              {" "}
              <Languages />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </div>
  );
};

const Technical = () => {
  return (
    <div className="py-4 px-2 ">
      <div className="mb-4">
        <SkillBadge text="Scala" />

        <Progress barClassName="skill-bar" value={90} />
      </div>
      <div className="mb-4">
        <SkillBadge text="HTML/CSS" />
        <SkillBadge text="Javascript" />
        <SkillBadge text="React" />
        <SkillBadge text="React Native" />

        <Progress barClassName="skill-bar" value={75} />
      </div>
      <div className="mb-4">
        <SkillBadge text="Git" />
        <SkillBadge text="Azure DevOps" />

        <Progress barClassName="skill-bar" value={50} />
      </div>
      <div>
        <SkillBadge text="Typescript" />
        <SkillBadge text="Redux" />
        <SkillBadge text="Python" />
        <SkillBadge text="C/C++" />

        <Progress barClassName="skill-bar" value={45} />
      </div>
    </div>
  );
};

const Languages = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "skills.languages",
  });
  return (
    <div className="pt-4 px-2 fs-6 fw-bold">
      <div className="mb-4 language">
        {t("finnish")} <StarRating count={5} />
      </div>
      <div className="mb-4 language">
        {t("english")}
        <StarRating count={5} />
      </div>
      <div className="mb-4 language">
        {t("chinese-spoken")}
        <StarRating count={5} />
      </div>
      <div className="mb-4 language">
        {t("german")}
        <StarRating count={3} />
      </div>
      <div className="mb-4 language">
        {t("chinese-written")}
        <StarRating count={2} />
      </div>
      <div className="language">
        {t("swedish")} <StarRating count={1} />
      </div>
    </div>
  );
};

export default Skills;

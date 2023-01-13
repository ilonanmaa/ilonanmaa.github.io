import { Col, Container, Row, Tabs, Tab, Badge, Nav } from "react-bootstrap";
import { Progress } from "reactstrap";
import SkillBadge from "./SkillBadge";
import "react-multi-carousel/lib/styles.css";
import "react-circular-progressbar/dist/styles.css";
import { useState } from "react";
import "../App.css";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("technical");
  return (
    <div className="skills-container-bg" id="skills">
      <Container className="skills-container bg-dark">
        <h2 className="fw-bolder mb-5 text-uppercase">Skills</h2>
        <Tab.Container>
          <Nav
            className="tab-bar-pill d-flex justify-content-center rounded mx-auto"
            fill
            justify
          >
            <Nav.Item className="technical-key">
              <Nav.Link
                eventKey="technical"
                className="rounded-start border border-white"
              >
                Technical
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="languages-key">
              <Nav.Link
                eventKey="languages"
                className="rounded-end border border-white"
              >
                Languages
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="technical">
              <Technical />
            </Tab.Pane>
            <Tab.Pane eventKey="languages"></Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </div>
  );
};

const Technical = () => {
  return (
    <div className="py-4 px-2">
      <div className="mb-4">
        <SkillBadge text="Scala" />
        <Progress barClassName="skill-bar" value={90} />
      </div>
      <div className="mb-4">
        <SkillBadge text="HTML/CSS" />
        <SkillBadge text="Javascript" />

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

export default Skills;

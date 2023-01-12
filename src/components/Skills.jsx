import { Col, Container, Row, Tabs, Tab, Badge, Nav } from "react-bootstrap";
import { Progress } from "reactstrap";
import SkillBadge from "./SkillBadge";
import "react-multi-carousel/lib/styles.css";
import "react-circular-progressbar/dist/styles.css";
import { useState } from "react";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("technical");
  return (
    <div className="skills-container-bg" id="skills">
      <Container className="skills-container">
        <h2 className="fw-bolder mb-5">Skills</h2>
        <Tabs
          defaultActiveKey="technical"
          className="tab-bar-pill px-5"
          fill={true}
          justify={true}
          variant="pills"
        >
          <Tab eventKey="technical" title="Technical">
            <Technical />
          </Tab>
          <Tab eventKey="languages" title="Languages" className="language-tab">
            <Technical />
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
};

const Technical = () => {
  return (
    <div className="p-4">
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

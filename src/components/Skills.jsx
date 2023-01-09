import { Col, Container, Row, ProgressBar, Tabs, Tab } from "react-bootstrap";
import { Progress } from "reactstrap";

const Skills = () => {
  return (
    <div className="skills-container-bg">
      <Container className="skills-container">
        <Row>
          <h2>Skills</h2>;
        </Row>
        <Row>
          <Tabs
            defaultActiveKey="programming"
            className="tab-bar-pill"
            fill
            justify
          >
            <Tab eventKey="programming" title="Programming" className="tabs">
              <Container>
                <p>Scala</p>
                <Progress barClassName="skill-bar" value={90} />
                <p>React native</p>
                <Progress barClassName="skill-bar" value={70} />
                <p>React</p>
                <Progress barClassName="skill-bar" value={60} />
              </Container>
            </Tab>
            <Tab eventKey="languages" title="Languages" className="tabs"></Tab>
          </Tabs>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;

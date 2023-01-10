import { Col, Container, Row, Tabs, Tab, Badge } from "react-bootstrap";
import { Progress } from "reactstrap";
import StarRating from "react-bootstrap-star-rating";
import { CircularProgressbar } from "react-circular-progressbar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
  return (
    <div className="skills-container-bg" id="skills">
      <Container className="skills-container">
        <Row>
          <h2>Skills</h2>;
        </Row>
        <Row>
          <Tabs defaultActiveKey="technical" className="tab-bar-pill" fill>
            <Tab eventKey="technical" title="Technical" className="tabs">
              <Technical />
            </Tab>
            <Tab eventKey="languages" title="Languages" className="tabs">
              <Technical />
            </Tab>
          </Tabs>
        </Row>
      </Container>
    </div>
  );
};

const Technical = () => {
  return (
    <Container>
      <div>
        <h5>
          <Badge className="badge" bg="secondary">
            Scala
          </Badge>
        </h5>
        <Progress barClassName="skill-bar" value={90} />
      </div>
      <div>
        <h5>
          <Badge className="badge" bg="secondary">
            HTML/CSS
          </Badge>
          <Badge className="badge" bg="secondary">
            Javascript
          </Badge>
        </h5>
        <Progress barClassName="skill-bar" value={75} />
      </div>
      <div>
        <h5>
          <Badge className="badge" bg="secondary">
            Git
          </Badge>
          <Badge className="badge" bg="secondary">
            Azure DevOps
          </Badge>
        </h5>
        <Progress barClassName="skill-bar" value={50} />
      </div>
      <div>
        <h5>
          <Badge className="badge" bg="secondary">
            Python
          </Badge>
          <Badge className="badge" bg="secondary">
            C/C++
          </Badge>
        </h5>{" "}
        <Progress barClassName="skill-bar" value={40} />
      </div>
    </Container>
  );
};

export default Skills;

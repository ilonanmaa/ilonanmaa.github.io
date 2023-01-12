import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <Row className=" d-flex justify-content-evenly">
        <Col>
          <h4>Image credits</h4>
          <p className="fs-6">
            Banner image by{" "}
            <a href="https://www.freepik.com/free-vector/gradient-galaxy-background_14658088.htm#query=space&position=3&from_view=search&track=sph">
              Freepik
            </a>
            <br />
            Night sky stars background photo by{" "}
            <a href="https://unsplash.com/@mumbolicious?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Samuel Richard
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/UWY8nGROvbk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </p>
        </Col>
        <Col>
          <h4>Contact</h4>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;

import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer p-2 bg-dark">
      <Row className="d-flex flex-row justify-content-center w-75 mx-auto py-4">
        <Col className="text-start col col-md-auto px-2">
          <h4 className="fw-bold text-uppercase">Image credits</h4>
          <p className="fs-6 py-2 lh-lg">
            Banner image by{" "}
            <a
              href="https://www.freepik.com/free-vector/gradient-galaxy-background_14658088.htm#query=space&position=3&from_view=search&track=sph"
              target="_blank"
              rel="noopener noreferrer"
            >
              Freepik
            </a>
            <br />
            Night sky stars background photo by{" "}
            <a
              href="https://unsplash.com/@mumbolicious?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              rel="noopener noreferrer"
            >
              Samuel Richard
            </a>{" "}
            on{" "}
            <a
              href="https://unsplash.com/photos/UWY8nGROvbk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              rel="noopener noreferrer"
            >
              Unsplash
            </a>
          </p>
        </Col>
        <Col className="text-start col col-md-auto px-2">
          <h4 className="fw-bold text-uppercase">Contact</h4>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;

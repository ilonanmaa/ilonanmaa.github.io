import { Col, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Col>
          <p>
            Banner image by{" "}
            <a href="https://www.freepik.com/free-vector/gradient-galaxy-background_14658088.htm#query=space&position=3&from_view=search&track=sph">
              Freepik
            </a>
            Stars background photo by{" "}
            <a href="https://unsplash.com/@mumbolicious?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Samuel Richard
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/UWY8nGROvbk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </p>
        </Col>
        <Col></Col>
      </Container>
    </div>
  );
};

export default Footer;

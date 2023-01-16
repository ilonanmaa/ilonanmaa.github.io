import { Button, Col, Container, Row } from "react-bootstrap";
import { AiFillMail, AiOutlineMail, AiTwotonePhone } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer py-4 px-2 bg-dark">
      <Container>
        <Row className="d-flex flex-rowmx-auto align-items-start mx-auto">
          <Col className="border-end">
            <h4 className="fw-bold text-uppercase">Image credits</h4>
            <ul>
              <li>
                Banner image by{" "}
                <a
                  href="https://www.freepik.com/free-vector/gradient-galaxy-background_14658088.htm#query=space&position=3&from_view=search&track=sph"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Freepik
                </a>
              </li>
              <li>
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
              </li>
            </ul>
          </Col>
          <Col>
            <h4 className="fw-bold text-uppercase">Contact</h4>
            <ul className="contact-list">
              <li className="">
                <AiFillMail className="mx-2" />
                <a variant="link" href="mailto:ilona.ma0909@gmail.com">
                  Email me
                </a>
              </li>
              <li>
                <AiTwotonePhone className="mx-2" />
                <a href="tel:040 4165492">040 4165492</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;

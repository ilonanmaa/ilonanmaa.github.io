import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { MdPictureAsPdf } from "react-icons/md";

const Banner = () => {
  const { t } = useTranslation();
  return (
    <section id="home">
      <Container className="">
        <Row>
          <Col className="p-4 lh-lg">
            <div className="mb-3">
              <h1 id="welcome" className="fw-bolder block d-inline">
                {t("welcome")}
              </h1>
            </div>
            <div>
              <Button className="fw-bold" variant="outline-light">
                About me
              </Button>
            </div>
            <div>
              <Nav.Link
                href="https://github.com/ilonanmaa"
                target="_blank"
                rel="noopener noreferrer"
                className="fs-2 fw-bold"
              >
                <span className="fs-5">Download pdf</span> <MdPictureAsPdf />
              </Nav.Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;

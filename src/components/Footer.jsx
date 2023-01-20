import React from "react";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineDownload,
} from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { Button, Nav } from "react-bootstrap";
import { MdPictureAsPdf } from "react-icons/md";

const Footer = () => {
  const { t } = useTranslation("translation", { keyPrefix: "footer" });
  return (
    <MDBFooter className="" color="white" bgColor="dark">
      <MDBContainer className="p-4 text-center">
        <section className="">
          <MDBRow className="justify-content-center">
            <MDBCol className="mb-4 mb-md-0">
              <h5 className="text-uppercase fw-bold">{t("credits.title")}</h5>

              <ul className="list-unstyled mb-0 lh-lg">
                <li>
                  {t("credits.banner")}{" "}
                  <a href="https://www.freepik.com/free-vector/gradient-galaxy-background_14658088.htm#query=space&position=3&from_view=search&track=sph">
                    Freepik
                  </a>
                </li>
                <li>
                  {t("credits.background")}{" "}
                  <a
                    href="https://unsplash.com/@mumbolicious?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Samuel Richard
                  </a>{" "}
                  {"("}
                  <a
                    href="https://unsplash.com/photos/UWY8nGROvbk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Unsplash
                  </a>
                  {")"}
                </li>
              </ul>
            </MDBCol>

            <MDBCol className="mb-4 mb-md-0">
              <h5 className="text-uppercase fw-bold">{t("contact.title")}</h5>

              <ul className="list-unstyled mb-0 lh-lg">
                <li className="">{t("contact.mail")}</li>
                <li className="d-flex flex-row justify-content-center">
                  {" "}
                  <Nav.Link
                    href="https://github.com/ilonanmaa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fs-2 me-2"
                  >
                    <AiFillGithub />
                  </Nav.Link>
                  <Nav.Link
                    href="https://www.linkedin.com/in/ilonama/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fs-2 ms-2"
                  >
                    <AiFillLinkedin />
                  </Nav.Link>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3 copyright-bar"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright: Ilona Ma
      </div>
    </MDBFooter>
  );
};

export default Footer;

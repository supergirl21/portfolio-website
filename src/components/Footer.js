/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable space-before-function-paren */
/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import MailchimpForm from "./MailchimpForm";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo4.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIconGithub from "../assets/img/logo_github.svg";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <MailchimpForm />
          <Col sm={5}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/dona-g"
              >
                <img src={navIcon1} alt="linked-in" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/supergirl21"
              >
                <img src={navIconGithub} alt="github" />
              </a>
            </div>
            <p className="sgquote">
              "Still the same girl with the same name. Just a different mindset
              and a new game."
            </p>
            <p>CopyRight 2022. All Rights Reserved Dona Gino</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
export default Footer;

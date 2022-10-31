/* eslint-disable comma-dangle */
/* eslint-disable space-before-function-paren */
/* eslint-disable quotes */
/* eslint-disable semi */
// eslint-disable-next-line quotes
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import react from "../assets/img/React.svg";
import html from "../assets/img/HTML.svg";
import css from "../assets/img/CSS.svg";
import python from "../assets/img/Python.svg";
import bootstrap from "../assets/img/bootstrap.svg";
import contentful from "../assets/img/Contentful.svg";
import d3 from "../assets/img/D3.svg";
import figma from "../assets/img/Figma.svg";
import mailchimp from "../assets/img/MailChimp.svg";
import materialUi from "../assets/img/Material_Ui.svg";
import miro from "../assets/img/Miro.svg";
import colorSharp from "../assets/img/color-sharp.png";

function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx"></div>
            <h2 className="skill-title">Skills</h2>
            <h3 className="skill-description">
              Here are my top coding skills..
            </h3>
            <Carousel
              responsive={responsive}
              infinite={true}
              className="skill-slider"
            >
              <div>
                <img
                  src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png"
                  alt="html-img"
                  height="200"
                />
                <h5>JAVASCRIPT</h5>
              </div>
              <div>
                <img src={react} alt="react" height="200" />
                <h5>REACT</h5>
              </div>
              <div>
                <img src={python} alt="python" height="200" />
                <h5>PYTHON</h5>
              </div>
              <div className="item">
                <img src={html} alt="html-img" height="200" />
                <h5>HTML</h5>
              </div>
              <div>
                <img src={css} alt="css" height="200" />
                <h5>CSS</h5>
              </div>
              <div>
                <img src={materialUi} alt="react" height="200" />
                <h5>Material UI</h5>
              </div>
              <div>
                <img src={bootstrap} alt="react" height="200" />
                <h5>Bootstrap</h5>
              </div>
              <div>
                <img src={miro} alt="react" height="200" />
                <h5>Miro</h5>
              </div>
              <div>
                <img src={figma} alt="react" height="200" />
                <h5>Figma</h5>
              </div>
              <div>
                <img src={d3} alt="react" height="200" />
                <h5>D3</h5>
              </div>
              <div>
                <img src={contentful} alt="react" height="200" />
                <h5>Contentful</h5>
              </div>
              <div>
                <img src={mailchimp} alt="react" height="200" />
                <h5>MailChimp</h5>
              </div>
            </Carousel>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="background-img"
      />
    </section>
  );
}
export default Skills;

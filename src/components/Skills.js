import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import swift from "programming-languages-logos/src/swift/swift.svg";
import react from "../assets/img/React.svg";
import html from "../assets/img/HTML.svg";
import css from "../assets/img/CSS.svg";
import python from "../assets/img/Python.svg";
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
            <h2>Skills</h2>
            <p>LoremIpsum</p>
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

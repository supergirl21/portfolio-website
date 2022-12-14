import React, { useEffect, useState } from "react";
// import Fade from "react-reveal/Fade";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
// import headerImg from "../assets/img/header-img.svg";
import dona1 from "../assets/img/dona-header.png";
// import dona1 from "../assets/img/dona-profile.jpg";
import TrackVisibility from "react-on-screen";
// import { HashLink } from "react-router-hash-link";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "FrontEnd Developer",
    "Social Media Coordinator",
    "Aspiring FullStack Developer",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  // eslint-disable-next-line
  const [index, setIndex] = useState(1);
  const period = 2000; // transition time between words

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    }; // eslint-disable-next-line
  }, [text]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="about">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            {/* <HashLink to="#projects">
              <button className="vvd">
                <span className="tagline">Welcome to my Portfolio!</span>
              </button>
            </HashLink> */}
            <p>
              {/* <span> */}
              Hello, Friend! Welcome To My Coderland!
              {/* Welcome to my Portfolio! */}
              {/* </span> */}
            </p>
            {/* <p>
              <span>Ambitious and passionate</span>
            </p> */}
            <h1>
              {"Hi, I'm Dona. Your "}
              <span className="wrap textColor">{text}</span>
            </h1>

            <h2>"I help bring digital product ideas come to life.???</h2>

            <button
              className="connect-button"
              onClick={() => console.log("connect")}
            >
              My Coding Journey.. <ArrowRightCircle size={25} />
            </button>
            {/* <p>
              <span>
                My strong motivation and passion for technology as well as an
                eye for good design has brought me to where I am today.
              </span>
            </p> */}
          </Col>
          {/* <Col xs={12} md={6}> */}
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={dona1} alt="Header Img" />
                  <p>
                    <span>
                      "My strong motivation and passion for technology as well
                      as an eye for good design has brought me to where I am
                      today."
                    </span>
                  </p>
                </div>
              )}
            </TrackVisibility>
            {/* <img src={headerImg} alt="Header Img" /> */}
            {/* <img src={dona1} alt="Header Img" /> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;

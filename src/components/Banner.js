import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
// import headerImg from "../assets/img/header-img.svg";
import dona from "../assets/img/dona.png";

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Front End Developer",
    "Aspiring FullStack Developer",
    "Photographer",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000; //transition time between words

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    }; // eslint-disable-next-line
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
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
    }
  };

  return (
    <section className="banner" id="about">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}></Col>
          <span className="tagline">Welcome to my Portfolio!</span>
          <h1>
            {`Hi, I'm Supergirl. `}
            <span className="wrap">{text}</span>
          </h1>
          <p>Every Great App Starts With A Simple Idea</p>
          <p>
            Lorem Ipsum was originally taken from a Latin text by the Roman
            philosopher Cicero. But it has gone through significant changes over
            the centuries, with words being taken out, shortened, and added in.
            The word ‘lorem’, for example, isn’t a real Latin word, it’s a
            shortened version of the word ‘dolorem’, meaning pain. This makes
            the current dummy text impossible to translate into English.
            However, the original source was translated in 1914 to mean: “Nor is
            there anyone who loves or pursues or desires to obtain pain of
            itself, because it is pain, but occasionally circumstances occur in
            which toil and pain can procure him some great pleasure.”
          </p>
          <button onCLick={() => console.log("connect")}>
            Let's Connect <ArrowRightCircle size={25} />
          </button>
          <Col xs={12} md={6} xl={7}>
            {/* <img src={headerImg} alt="Header Img" /> */}
            <img src={dona} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;

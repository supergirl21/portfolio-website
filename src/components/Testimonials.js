import React from "react";
// import { Container, Row } from "react-bootstrap";
// import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import avatarRev from "../assets/img/testi-gloria.svg";
import avatars from "../assets/img/testi-sundar.svg";
import avatarCatie from "../assets/img/testi-catie.svg";

function Testimonials() {
  return (
    <section className="testimonial" id="testionials">
      {/* <Container>
        <Row> */}
      <h2 className="testimonial-title">Testimonials</h2>
      <h3>Find out what the people I've worked with are saying about me..</h3>
      <div>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={6100}
        >
          <div>
            <img src={avatarRev} alt="Gloria" />
            <div className="myCarousel">
              <h3>Gloria Ng</h3>
              <h4>Engineering Manager, AnnieCannons’ ResourceFull app</h4>
              <p>
                Supergirl is a multi-talented developer I had the great fortune
                and pleasure of working with in our ResourceFull development
                team. Her facility with visual collaboration software, keen
                perception of user experience, and solution-oriented approach to
                code clarified the user flow diagram and the resulting
                functionality to be built in our React Native mobile app. Her
                timely questions led us to build a product with a quicker,
                smoother, and more logical onboarding process. I look forward to
                her continued success!
              </p>
            </div>
          </div>

          <div>
            <img src={avatars} alt="Sundar" />
            <div className="myCarousel">
              <h3>Sundar Pichai</h3>
              <h4>CEO, Google</h4>
              <p>
                The simple and intuitive design makes it easy for me use. I
                highly recommend Fetch to my peers.
              </p>
            </div>
          </div>

          <div>
            <img src={avatarCatie} alt="Ada-lovelace" />
            <div className="myCarousel">
              <h3>Catie Heart</h3>
              <h4>Instructor/Team Lead, AnnieCannons</h4>
              <p>
                I have been lucky enough to get to know Dona in many capacities
                - as her instructor, teammate, and technical lead. Dona is
                always the hardest worker on the team. She consistently strives
                to do her best possible work, and her love of learning is
                inspiring to those around her. As tech lead, I always assigned
                Dona the most challenging tickets with full confidence in her
                ability to complete them on time, even when they required her to
                learn new skills. Dona is kind, humble, dependable, and
                brilliant. She will not squander any opportunity that comes her
                way and I give her my full recommendation.
              </p>
            </div>
          </div>
        </Carousel>
      </div>
      {/* </Row>
      </Container> */}
    </section>
  );
}

export default Testimonials;

/* eslint-disable space-before-function-paren */
/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-unused-vars */
import React from "react";
// import { Container, Row } from "react-bootstrap";
// import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import avatarRev from "../assets/img/testi-gloria.svg";
import avatarChristina from "../assets/img/testi-christina.svg";
import avatarCatie from "../assets/img/testi-catie.svg";
import avatarJakki from "../assets/img/testi-jakki.svg";

function Testimonials() {
  return (
    <section className="testimonial" id="testionials">
      {/* <Container>
        <Row> */}
      <h2 className="testimonial-title">Testimonials</h2>
      {/* // eslint-disable-next-line react/no-unescaped-entities */}
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
                Dona is a multi-talented developer I had the great fortune and
                pleasure of working with in our ResourceFull development team.
                Her facility with visual collaboration software, keen perception
                of user experience, and solution-oriented approach to code
                clarified the user flow diagram and the resulting functionality
                to be built in our React Native mobile app. Her timely questions
                led us to build a product with a quicker, smoother, and more
                logical onboarding process. I look forward to her continued
                success!
              </p>
            </div>
          </div>
          <div>
            <img src={avatarJakki} alt="Jakki" />
            <div className="myCarousel">
              <h3>Jakki Bedsole</h3>
              <h4>Product Manager, AnnieCannons’ ResourceFull app</h4>
              <p>
                Dona is one of the most proactive and thoughtful developers I've
                ever worked with. Her attention to detail has helped our team
                think ahead about potential improvement opportunities and her
                contributions have enhanced the user experience of our product.
                Dona's work ethic and responsiveness set an example for her
                entire team and has brought about a sense of confidence and
                commitment that helps the whole team build better. She has been
                a key part of how our team has arrived at better solutions for
                our product and I highly recommend her on your project.
              </p>
            </div>
          </div>

          <div>
            <img src={avatarChristina} alt="Christina" />
            <div className="myCarousel">
              <h3>Christina Veasy</h3>
              <h4>Product Manager, AnnieCannons</h4>
              <p>
                Dona is an amazing developer and I had the pleasure of working
                with her on several projects over the last year. Dona’s
                attention to detail, efficiency, and excellent communication
                skills are some of a few reasons as why I would recommend her
                for any position. Dona also has fantastic design skills and
                great interpersonal skills.
              </p>
            </div>
          </div>

          <div>
            <img src={avatarCatie} alt="Catie" />
            <div className="myCarousel">
              <h3>Catie Heart</h3>
              <h4>Instructor/Team Lead, AnnieCannons</h4>
              <p>
                I have been working with Dona Gino for just under three years
                now. I have been lucky enough to get to know her in many
                capacities - as her instructor, teammate, and technical lead.
                Dona is always the hardest worker on the team. She consistently
                strives to do her best possible work, and her love of learning
                is inspiring to those around her. During boot camp, there were
                times Dona would help me teach her classmates complex concepts
                in JavaScript and React. As tech lead, I always assigned Dona
                the most challenging tickets with full confidence in her ability
                to complete them on time, even when they required her to learn
                new skills. Dona is kind, humble, dependable, and brilliant. She
                will not squander any opportunity that comes her way and I give
                her my full recommendation.
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

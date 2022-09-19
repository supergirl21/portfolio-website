import React from "react";
// import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import avatar from "../assets/img/testi-gloria.svg";

function Testimonials() {
  return (
    <section className="testimonial" id="testionials">
      <h1>Testimonials</h1>
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
            <img src={avatar} alt="Gloria" />
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
            <img src={avatar} alt="" />
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
            <img src={avatar} alt="" />
            <div className="myCarousel">
              <h3>Theo Sorel</h3>
              <h4>Designer</h4>
              <p>
                I enjoy catching up with Fetch on my laptop, or on my phone when
                I'm on the go!
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default Testimonials;

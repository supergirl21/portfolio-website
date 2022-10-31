/* eslint-disable comma-dangle */
/* eslint-disable space-before-function-paren */
/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { Container, Row, Col, Tab } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import ProjectCard from "./ProjectCard";
// import colorSharp2 from "../assets/img/color-sharp2.png";
import projNetflix from "../assets/img/netflixClone.png";
import projIg from "../assets/img/instagramClone.png";
import projAya from "../assets/img/proj-ayaApp.png";
import projLight from "../assets/img/proj-lighthouse.png";
import projRfWeb from "../assets/img/rfWebApp.png";
import projRfMob from "../assets/img/proj-ResourceFull.svg";
import projFocus from "../assets/img/proj-focus-app.png";
import projPersonalWebsite from "../assets/img/personalWebsite.svg";
import "animate.css";
// import TrackVisibility from "react-on-screen";

function Projects() {
  const professionalProjects = [
    {
      title: "ResourceFull Web App",
      description:
        "An innovative software solution intended for Service Providers that will help connect survivors of trafficking to resources in their communities. This wep app project was built in React JS which uses AWS Lambda. I have Developed the Sign-up portal in React JS to input data in the frontend which resulted in avoiding hard coding in the backend, refined the Provider Profile, Filters, and Survivor Location and added some location options for the user to choose from and modified the Saved Search feature in the app so that it will only allow providers to save based on titles.",
      imgUrl: projRfWeb,
    },
    {
      title: "LightHouse",
      description:
        "An innovative software solution that helps people and organizations understand trends in human trafficking, spot victims of exploitation, and coordinate quality care.",
      imgUrl: projLight,
    },
    {
      title: "ResourceFull Mobile App",
      description:
        "An innovative software solution that will help connect survivors of trafficking to resources in their communities.",
      imgUrl: projRfMob,
    },

    {
      title: "Reproductive Health App",
      description:
        "This Reproductive mobile health app was built in React JS. This app's mission is to help empower women and girls living in settings where they face disproportionate barriers to accessing SRH tools and services. It uses Contentful framework, a Content Management System to manage its content. ",
      imgUrl: projAya,
    },
  ];
  const personalProjects = [
    {
      title: "Instagram Clone",
      description:
        "This project was built using React Native Framework (including custom hooks, useContext, useState, useEffect, & useRef), Firebase and Linkify.",
      imgUrl: projIg,
    },
    {
      title: "Focus Time App",
      description:
        "This project is based on Promodoro Technique. User can change their Focus Time as they wish. This uses React Native which combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.",
      imgUrl: projFocus,
    },
    {
      title: "This Personal Website",
      description:
        "This project is built in React JS Framework. I've integrated MailChimp, CSS Animation, API calls and used Netlify to deply my code via Github.",
      imgUrl: projPersonalWebsite,
    },
    {
      title: "Netflix Clone",
      description:
        "This project is a streamlined version of Netflix's front end. React and CSS were used in its creation (Grid and Flexbox). To look up movies and display information, it searches The MovieDB API. The fundamental features of the original project are present in this one.",
      imgUrl: projNetflix,
      link: "https://supergirl-netflix-clone.netlify.app/",
    },
  ];
  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col>
            {/* <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                > */}
            <h2>Projects</h2>
            {/* <h1>My Creative Portfolio Section</h1> */}
            <p>Take A Look At My Creative Portfolio Section.</p>

            <Tab.Container
              id="left-projects-tabs-example"
              defaultActiveKey="first"
            >
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Professional</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Personal</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content className="project-image">
                <Tab.Pane eventKey="first">
                  <Row className="project-image">
                    {professionalProjects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second" className="personal-proj-desc">
                  {/* These are my chosen personal projects I made during my free
                  time. */}
                  <Row className="project-image">
                    {personalProjects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
            {/* </div>
              )}
            </TrackVisibility> */}
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  );
}
export default Projects;

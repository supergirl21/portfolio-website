/* eslint-disable comma-dangle */
/* eslint-disable space-before-function-paren */
/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable react/react-in-jsx-scope */
import { Container, Row, Col, Tab } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import ProjectCard from "./ProjectCard";
// import colorSharp2 from "../assets/img/color-sharp2.png";/
import projNetflix from "../assets/img/netflixClone.png";
import projIg from "../assets/img/instagramClone.png";
import projAya from "../assets/img/proj-ayaApp.png";
import projLight from "../assets/img/proj-lighthouse.png";
import projRfWeb from "../assets/img/rfWebApp.png";
import projRfMob from "../assets/img/rfApp.png";
import projFocus from "../assets/img/proj-focus-app.png";

function Projects() {
  const professionalProjects = [
    {
      title: "LightHouse",
      description:
        "This project was built in React Native to hone my skills in creating mobile apps. It uses Firebase and Expo that uploads and queries photos stored on a real-time server.",
      imgUrl: projLight,
    },
    {
      title: "ResourceFull Mobile App",
      description:
        "This app project brings Pomodoro Technique and To Do List into one place, you can capture and organize tasks into your to-do lists, start a focus timer and focus on work & study, set reminders for important tasks and errands, and check the time spent at work.",
      imgUrl: projRfMob,
    },
    {
      title: "ResourceFull Web App",
      description:
        "This app project brings Pomodoro Technique and To Do List into one place, you can capture and organize tasks into your to-do lists, start a focus timer and focus on work & study, set reminders for important tasks and errands, and check the time spent at work.",
      imgUrl: projRfWeb,
    },
    {
      title: "Reproductive Health App",
      description:
        "This project was built in React Native to hone my skills in creating mobile apps. It uses Firebase and Expo that uploads and queries photos stored on a real-time server.",
      imgUrl: projAya,
    },
  ];
  const personalProjects = [
    {
      title: "Netflix Clone",
      description:
        "This project is a streamlined version of Netflix's front end. React and CSS were used in its creation (Grid and Flexbox). To look up movies and display information, it searches The MovieDB API. The fundamental features of the original project are present in this one.",
      imgUrl: projNetflix,
    },
    {
      title: "Instagram Clone",
      description:
        "This project is a streamlined version of Netflix's front end. React and CSS were used in its creation (Grid and Flexbox). To look up movies and display information, it searches The MovieDB API. The fundamental features of the original project are present in this one.",
      imgUrl: projIg,
    },
    {
      title: "Focus Time App",
      description:
        "This project is a streamlined version of Netflix's front end. React and CSS were used in its creation (Grid and Flexbox). To look up movies and display information, it searches The MovieDB API. The fundamental features of the original project are present in this one.",
      imgUrl: projFocus,
    },
  ];
  return (
    <section className="projects">
      <Container>
        <Row>
          <Col>
            <h1>Projects</h1>
            <p>Take a look at some of my work.</p>
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
                <Tab.Pane eventKey="second">
                  These are my chosen personal projects I made during my free
                  time.
                  <Row className="project-image">
                    {personalProjects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Projects;

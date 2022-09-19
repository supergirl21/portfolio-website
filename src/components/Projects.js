import { Container, Row, Col, Tab } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import ProjectCard from "./ProjectCard";
// import colorSharp2 from "../assets/img/color-sharp2.png";/
import projImg1 from "../assets/img/netflix.png";
// import projImg2 from "../assets/img/instagram-screen.svg";
// import projImg3 from "../assets/img/project-img3.png";

function Projects() {
  const projects = [
    {
      title: "Netflix Clone",
      description:
        "This project is a streamlined version of Netflix's front end. React and CSS were used in its creation (Grid and Flexbox). To look up movies and display information, it searches The MovieDB API. The fundamental features of the original project are present in this one.",
      imgUrl: projImg1,
    },
    // {
    //   title: "Instagram Clone",
    //   description:
    //     "This project was built in React Native to hone my skills in creating mobile apps. It uses Firebase and Expo that uploads and queries photos stored on a real-time server.",
    //   imgUrl: projImg2,
    // },
    // {
    //   title: "Focus Time App",
    //   description:
    //     "This app project brings Pomodoro Technique and To Do List into one place, you can capture and organize tasks into your to-do lists, start a focus timer and focus on work & study, set reminders for important tasks and errands, and check the time spent at work.",
    //   imgUrl: projImg3,
    // },
  ];
  return (
    <section>
      <Container>
        <Row>
          <Col>
            <h1>Projects</h1>
            <p>
              Lorem Ipsum was originally taken from a Latin text by the Roman
              philosopher Cicero. But it has gone through significant changes
              over the centuries, with words being taken out, shortened, and
              added in. The word ‘lorem’, for example, isn’t a real Latin word,
              it’s a shortened version of the word ‘dolorem’, meaning pain. This
              makes the current dummy text impossible to translate into English.
              However, the original source was translated in 1914 to mean: “Nor
              is there anyone who loves or pursues or desires to obtain pain of
              itself, because it is pain, but occasionally circumstances occur
              in which toil and pain can procure him some great pleasure.”
            </p>
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
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 2</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content className="project-image">
                <Tab.Pane eventKey="first">
                  <Row className="project-image">
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      {/* <img
        className="background-img-right"
        src={colorSharp2}
        alt="background-img"
      /> */}
    </section>
  );
}
export default Projects;

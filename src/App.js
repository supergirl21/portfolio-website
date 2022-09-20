import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Testimonials from "./components/Testimonials";
import "bootstrap/dist/css/bootstrap.min.css";
import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <div className="App">
      <Banner />
      <NavBar />
      <Skills />
      {/* <Projects />
      <ProjectCard /> */}
      <Testimonials />
    </div>
  );
}

export default App;

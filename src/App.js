/* eslint-disable space-before-function-paren */
/* eslint-disable quotes */
/* eslint-disable semi */
import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Testimonials from "./components/Testimonials";
import "bootstrap/dist/css/bootstrap.min.css";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ProjectCard from "./components/ProjectCard";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import MailchimpForm from "./components/MailchimpForm";

function App() {
  return (
    <div className="App">
      <Banner />
      <NavBar />
      <Skills />
      <Projects />
      <ProjectCard />
      <Testimonials />
      <Contact />
      {/* <MailchimpForm /> */}
      <Footer />
    </div>
  );
}

export default App;

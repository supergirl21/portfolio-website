import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Testimonials from "./components/Testimonials";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      Hello
      <Banner />
      <NavBar />
      <Testimonials />
    </div>
  );
}

export default App;

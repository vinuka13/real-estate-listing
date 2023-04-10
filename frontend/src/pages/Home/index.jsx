import React, { Component } from "react";
import ChooseUs from "../../container/ChooseUs";
import ClientEx from "../../container/ClientEx";
import Hero from "../../container/Hero";
import OurServices from "../../container/OurServices";
import OurWork from "../../container/OurWork";
import Projects from "../../container/Projects";
import "./Home.css";

export class Home extends Component {
  render() {
    return (
      <div className="home">
        <Hero />
        <OurServices />
        <OurWork />
        <ChooseUs />
        <Projects />
        <ClientEx />
      </div>
    );
  }
}

export default Home;

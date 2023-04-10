import React, { Component } from "react";
import Heading from "../../components/Heading";
import CLIENTEXDATA from "../../data/ClientExData";
import SimpleSlider from "../../components/Slider";
import "./ClientEx.css";

export default class ClientEx extends Component {
  render() {
    return (
      <div className="clientEx" id="clientEx">
        <Heading heading="CLIENT EXPREINCE" />
        <SimpleSlider data={CLIENTEXDATA} className="clientEx__slider" />
      </div>
    );
  }
}

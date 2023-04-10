import React, { Component } from "react";
import "./PlainCard.css";

export default class PlainCard extends Component {
  render() {
    return (
      <div className="plainCard">
        <hr className="plainCard__line" />
        <div className="plainCard__text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

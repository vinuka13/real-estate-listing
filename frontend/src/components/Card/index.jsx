import React, { Component } from "react";
import "./Card.css";

export default class Card extends Component {
  render() {
    return (
      <div className={`card  ${this.props.className}`}>
        <img
          className="card__img"
          src={`/assets/${this.props.src}`}
          width="100%"
          alt="land"
        />
        <div className="card__text">
          <h2>{this.props.heading}</h2>
          <div>{this.props.text}</div>
        </div>
      </div>
    );
  }
}

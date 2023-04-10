import React, { Component } from "react";
import "./Hero.css";

export default class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <span></span>
        <img src="/assets/images/hero.jpg" alt="Hero" />
        <article>
          <h1>
            INVEST INTHE BEST
            <br></br>
            DEVELOPING SUBURBS
          </h1>
          <a href="/contact-us">
            <button className="hero__contactUs">CONTACT US</button>
          </a>
          <a href="/land-list">
            <button className="hero__ourLands">OUR LANDS</button>
          </a>
        </article>
      </div>
    );
  }
}

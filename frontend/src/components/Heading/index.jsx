import React, { Component } from "react";

export default class Heading extends Component {
  render() {
    return (
      <h1
        style={{
          fontSize: "2.5rem",
          paddingTop: "30px",
          textAlign: "center",
          margin: "0",
        }}
      >
        {this.props.heading}
      </h1>
    );
  }
}

import React, { Component } from "react";
import Heading from "../../components/Heading";
import Card from "../../components/Card";
import "./OurWork.css";
import CountUp from "react-countup";

export default class OurWork extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      window.scrollY > 1000
        ? this.setState({
            show: true,
          })
        : this.setState({
            show: false,
          });
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

  render() {
    return (
      <div className="ourWork" id="ourWork">
        <Heading heading="SOME OF OUR WORK" />
        <p className="ourWork__subHeading">
        We will let the number speak…
        </p>
        <div className="ourWork__cardContainer">
          <Card
            className="ourWork__card"
            src="icons/lands-sold.svg"
            heading="Lands Sold"
            text={
              this.state.show ? (
                <CountUp start={1} end={50} duration={2.75} delay={0.1} />
              ) : (
                ""
              )
            }
          />

          <Card
            className="ourWork__card"
            src="icons/lands-developed.svg"
            heading="Lands Developed"
            text={
              this.state.show ? (
                <CountUp start={1} end={60} duration={2.75} delay={0.1} />
              ) : (
                ""
              )
            }
          />
          <Card
            className="ourWork__card"
            src="icons/clients.svg"
            heading="Our Clients"
            text={
              this.state.show ? (
                <CountUp start={1} end={120} duration={2.75} delay={0.1} />
              ) : (
                ""
              )
            }
          />
        </div>
      </div>
    );
  }
}

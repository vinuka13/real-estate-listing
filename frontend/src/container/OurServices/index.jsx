import React, { Component } from "react";
import Card from "../../components/Card";
import Heading from "../../components/Heading/index";
import "./OurServices.css";

export default class OurServices extends Component {
  render() {
    return (
      <div className="ourServices" id="ourServices">
        <Heading heading="OUR SERVICES" />
        <p className="ourServices__subHeading">
        We provide services across a diverse spectrum. We will either buy or sell
         your property on your property,  develop your properties, manage your property 
         in line with your requirements, and we also provide real-estate consultancy in all your real-estate related issues.
        </p>
        <div className="ourServices__cardContainer">
          <Card
            className="ourServices__card"
            src="icons/sale.svg"
            heading="Land Sale"
            text="We offer you services in both buying and selling your property at the best price possible, be it that 
            you are looking for the perfect property for your dream home, for a future investment, or trying to sell a 
            land you own at the best possible price.  ."
          />
          <Card
            className="ourServices__card"
            src="icons/development.svg"
            heading="Property Development"
            text="It's one thing to buy or sell a land as it is, but we all know that with a fine touch here and there,
             the value increases for both the buyer and the seller. We will develop your land as you require to give 
             you the best possible value for your investment."
          />
          <Card
            className="ourServices__card"
            src="icons/consultency.svg"
            heading="Consultancy"
            text="With neatly two and half decades of experience in the field, we offer you the best real estate 
            consultancy in all aspects of a transaction from the legal advice to property development, to infrastructure.
            We promise to be impartial in our advice.."
          />
        </div>
      </div>
    );
  }
}

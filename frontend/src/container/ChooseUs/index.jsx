import React, { Component } from "react";
import Heading from "../../components/Heading";
import PlainCard from "../../components/PlainCard";
import "./ChooseUs.css";

export default class ChooseUs extends Component {
  render() {
    return (
      <div className="chooseUs">
        <Heading heading="WHY CHOOSE US..." />
        <p className="chooseUs__subHeading">
        We offer you the best real-estate deals in Kandy, and how do we guarantee that? Our founder
         has been doing this for the last 26 years of his life, and is truly passionate about it. Once
         he takes on your project, be it finding the perfect property or the perfect customer for your property,
          it will become his own project and he will give his best (which is an impressive input given his knowledge 
          and experience) to make sure you get the best deals..
        </p>
        <div className="chooseUs__cardContainer">
          <PlainCard
            heading="Experinces"
            text="Twenty five years in a field gives you a mass of knowledge and experience that is unparalleled 
            and we will be using every ounce of that to help you make your dream come true. "
          />
          <PlainCard
            heading="End To End Solution"
            text="We guarantee a service built on trust, maximum advantage for the client 
            and in line with the laws of the state and the wellbeing of the environment. We 
            take pride in being able to cater to the needs of each client, address their individuality and personal tastes"
          />
          <PlainCard
            heading="Untouched Markets"
            text="We strive to aim for untouched markets, places which do not only have current value but also 
            every appreciating value. What you get from us is not just good for today, it is good for all years to 
            come. Kandy has much to offer, from convenience to scenic beauty and we proudly claim that we’ll give you both"
          />
          <PlainCard
            heading="Custumor Relationship"
            text="We also take our relationship with you very seriously and like we said before, your dream is
             our dream too. We are equally excited to see you get a winning deal and we take immense pleasure in 
             helping others realize their real-estate dreams, while living our own dream:to work in real estate! 
             Great Property Holdings is beyond just a business. It's a passion"
          />
        </div>
      </div>
    );
  }
}

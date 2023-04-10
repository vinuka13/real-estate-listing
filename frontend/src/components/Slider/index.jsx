import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Slider.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: true,
    };
    return (
      <Slider {...settings} className={`carousel ${this.props.className}`}>
        {this.props.data.map((item) => {
          return (
            <div key={item.id} className="carousel__item">
              <h2>{item.heading}</h2>
              <article>{item.content}</article>
            </div>
          );
        })}
      </Slider>
    );
  }
}

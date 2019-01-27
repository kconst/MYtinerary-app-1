import React, { Component, Fragment } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const City = styled.img`
  height: 100px;
  width: 180px;
  padding: 0px 20px;
`;

class CitySlider extends Component {
  render() {
    const settings = {
      dots: true,
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "20px",
      slidesToShow: 1,
      speed: 500,
      rows: 2,
      slidesPerRow: 2
    };

    return (
      <div>
        <Slider {...settings}>
          <div>
            <City src={require("../images/bali.jpg")} />
          </div>
          <div>
            <City src={require("../images/barcelona.jpg")} />
          </div>
          <div>
            <City src={require("../images/beijing.jpg")} />
          </div>
          <div>
            <City src={require("../images/istanbul.jpg")} />
          </div>
          <div>
            <City src={require("../images/kathmandu.jpg")} />
          </div>
          <div>
            <City src={require("../images/lisbon.jpg")} />
          </div>
          <div>
            <City src={require("../images/london.jpg")} />
          </div>
          <div>
            <City src={require("../images/paris.jpg")} />
          </div>
          <div>
            <City src={require("../images/rio.jpg")} />
          </div>
          <div>
            <City src={require("../images/sanFran.jpg")} />
          </div>
          <div>
            <City src={require("../images/singapore.jpg")} />
          </div>
          <div>
            <City src={require("../images/sydney.jpg")} />
          </div>
        </Slider>
      </div>
    );
  }
}

export default CitySlider;

import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <div className="LogoWrapper">
          <img
            src={require("../images/MYtineraryLogo.png")}
            alt={"company logo"}
          />
        </div>
        <div className="TextWrapper">
          <p>
            Find your perfect trip, designed by insiders who know and love their
            cities.
          </p>

          <h4>Start browsing</h4>
        </div>

        <div className="ArrowWrapper">
          <Link to="/cities">
            <img src={require("../images/circled-right-2.png")} alt={"enter arrow"} />
          </Link>
        </div>
        <div className="TextWrapper">
          <p>Want to build your own MYtinerary?</p>
        </div>
        <div className="FooterWrapper">
          <img src={require("../images/homeIcon.png")} alt={"home icon"} />
        </div>
      </Fragment>
    );
  }
}

export default Home;

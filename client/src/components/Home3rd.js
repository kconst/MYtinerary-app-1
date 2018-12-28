import React, { Component } from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";

const LogoWrapper = styled.div`
  text-align: center;
`;

const Logo = styled.img`
  margin: 35px 0px;
  width: 80%;
  height: 10%;
`;

const Icon = styled.img`
  width: 100px;
  height: 100px;
`;

const TextWrapper = styled.div`
  text-align: center;
  p {
    font-size: 20px;
    padding: 5px 30px;
  }
  h4 {
    margin-top: 30px;
    margin-bottom: 8px;
  }
`;

const IconWrapper = styled.div`
  text-align: center;
  margin: 10px 0px;
`;

const FooterWrapper = styled.div`
  margin-top: 20px;
  text-align: center;
`;

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <LogoWrapper>
          <Logo
            src={require("../images/MYtineraryLogo.png")}
            alt={"company logo"}
          />
        </LogoWrapper>
        <TextWrapper>
          <p>
            Find your perfect trip, designed by insiders who know and love their
            cities.
          </p>

          <h4>Start browsing</h4>
        </TextWrapper>
        
          <IconWrapper>
          <Link to="/Cities">
            <Icon
              src={require("../images/circled-right-2.png")}
              alt={"enter"}
            />
            </Link>
          </IconWrapper>
        <TextWrapper>
          <p>Want to build your own MYtinerary?</p>
        </TextWrapper>
        <FooterWrapper>
          <Footer />
        </FooterWrapper>
      </div>
    );
  }
}

export default Home;

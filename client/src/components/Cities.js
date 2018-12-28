import React, { Component } from "react";
import City from "./City"


class Cities extends Component {
  state = {
cities:  [ {
  id: 1,
  name: "Bali",
  image: require("../images/bali.jpg")
  // , alt="Black and brown temples in Bali"
},
{
  id:2,
  name: "Barcelona",
  image: require("../images/barcelona.jpg")
  // , alt="Park Guell in Barcelona"
}, 
{
  id: 3,
  city: "Beijing",
  image: require("../images/beijing.jpg")
  // , alt="Tiananmen square in Beijing"
},
{
  id: 4,
  city: "Istanbul",
  image: require("../images/istanbul.jpg")
  // , alt="The Blue Mosque in Istanbul"
},
{
  id:5,
  city:"Kathmandu",
  image: require("../images/kathmandu.jpg")
  // , alt="Boudhanath Stupa in Kathmandu"
},
{
  id:6,
  city: "Lisbon",
  image: require("../images/lisbon.jpg")
  //  , alt="A yellow tram passing in between buildings"
},
{
  id: 7,
  city: "London",
  image: require("../images/london.jpg")
  // , alt="Big Ben in London"
}, 
{
  id: 8,
  city: "Paris",
  image: require("../images/paris.jpg")
  // , alt="Eiffel Tower at Paris"
},
{
  id: 9,
  city: "San Francsico",
  image: require("../images/sanFran.jpg")
  // , alt="Golden Gate Bridge at San Francisco"
},
{
  id: 10,
  city: "Singapore",
  image: require("../images/singapore.jpg")
  // , alt="Gardens by the Bay at Singapore during nighttime"
},
{
  id: 11,
  city: "Sydney",
  image: require("../images/sydney.jpg")
  // , alt="The Sydney Opera House"
},
{
  id:12,
  city: "Rio De Janeiro",
  image: require("../images/rio.jpg")
  // , alt="Christ Redeemer statue in Brazil"
}
]}
  
  render() {
    return (
      <div>
        <h1>City page</h1>
        <City cities = {this.state.cities} />
        <img src={require("../images/rio.jpg")}/>
      </div>
    );
  }
}

export default Cities;

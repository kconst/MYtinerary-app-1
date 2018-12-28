import React, { Component } from "react";




class City extends Component {
  render() {
    const { cities } = this.props;
    const cityList = cities.map(city => {
      return (
        <div className="city" key={city.id}>
          <div>City: {city.name}</div>
          <div>
            <img src={city.image} />
          </div>
        </div>
      );
    });
    return (<div>{cityList}</div>);
  }
}

export default City;

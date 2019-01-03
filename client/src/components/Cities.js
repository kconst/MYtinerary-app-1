import React, { Component, Fragment } from "react";
import axios from "axios";
// import City from "./City"

class Cities extends Component {
  state = {
    cities: [],
    isLoading: true,
    errors: ""
  };

  getCities() {
    axios
      .get("/api/cities")
      .then(response => {
        console.log(response);
        this.setState({
          cities: response.data,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.getCities();
  }

  render() {
    const { isLoading, cities } = this.state;
    return (
      <Fragment>
        <h1>Cities</h1>
        <div>
          {!isLoading ? (
            cities.map(city => {
              const { _id, name, country } = city;
              return (
                <div key={_id}>
                  <p>City name: {name}</p>
                  <p>Country: {country}</p>
                </div>
              );
            })
          ) : (
            <p>Loading cities..</p>
          )}
        </div>
      </Fragment>
    );
  }
}

export default Cities;

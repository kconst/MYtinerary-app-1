import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getCities } from "../actions/citiesActions";
import PropTypes from "prop-types";
import {DebounceInput} from 'react-debounce-input';

// import Hello from "./helloWorld";
// import City from "./City"

class Cities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  updateSearch(event) {
    this.setState({
      search: event.target.value
    });
  }

  componentDidMount() {
    this.props.getCities();
  }

  render() {
    console.log(this.props);
    let filteredCities = this.props.cities.cities.filter(city => {
      return city.name.toLowerCase().includes(this.state.search);
    });

    return (
      <Fragment>
        <nav className="search-bar">
          <div className="nav-wrapper">
            <form>
              <div className="input-field">
                <DebounceInput
                  debounceTimeout={200}
                  type="search"
                  placeholder="Enter city name"
                  value={this.state.search}
                  onChange={this.updateSearch.bind(this)}
                />
                <label className="label-icon">
                  <i className="material-icons search">search</i>
                </label>
              </div>
            </form>
          </div>
        </nav>
        <div className="cityList">
          {filteredCities.map(city => {
            return (
              <div key={city._id} className="city">
                <span>
                  {city.name}, {city.country}
                </span>
              </div>
            );
          })}
        </div>
      </Fragment>
    );
  }
}

Cities.propTypes = {
  getCities: PropTypes.func.isRequired,
  cities: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  cities: state.cityR
});

export default connect(
  mapStateToProps,
  { getCities }
)(Cities);

//connect to db without using redux
// state = {
//   cities: [],
//   isLoading: true,
//   errors: ""
// };

// getCities() {
//   axios
//     .get("/api/cities")
//     .then(response => {
//       console.log(response);
//       this.setState({
//         cities: response.data,
//         isLoading: false
//       });
//     })
//     .catch(error => this.setState({ error, isLoading: false }));
// }

// const { isLoading, cities } = this.state;
//     return (
//       <Fragment>
//         {/* <Hello /> */}
//         <h1>Cities</h1>
//         <div>
//           {!isLoading ? (
//             cities.map(city => {
//               const { _id, name, country } = city;
//               return (
//                 <div key={_id}>
//                   <p>City name: {name}</p>
//                   <p>Country: {country}</p>
//                 </div>
//               );
//             })
//           ) : (
//             <p>Loading cities..</p>
//           )}
//         </div>
//       </Fragment>
//     );

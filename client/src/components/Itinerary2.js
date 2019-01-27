// import React, { Component } from "react";
// import { GET_ITINERARY } from "../actions/types";
// import axios from "axios";
// import { connect } from "react-redux";
// import { getItineraries } from "../actions/itineraryActions";
// import PropTypes from "prop-types";

class Itinerary extends Component {
  state = {
    itineraries: []
  };

  componentDidMount() {
    // this.state.getItineraries()
    // const {match: {params}} = this.props;

    const city = this.props.match.params.city;
    console.log(city);
    axios.get(`/api/itineraries/${city}`).then(res => {
      console.log(res);
      this.setState({
        itineraries: res.data
      });
    });
  }

  getItineraries = city => {
    console.log("hello?");

    axios
      .get(`/api/itineraries/${city}`)
      .then(res => {
        console.log(res);
        this.setState({
          itineraries: res.data
        });
      })
      .catch(err => this.setState(err));
  };

  render() {
    const { itineraries } = this.state;
    const itineraryList = itineraries.length ? (
      itineraries.map(itinerary => {
        return (
          <div className="itinerary" key={itinerary._id}>
            <p>{itinerary.title}</p>
            {/* <img src = {itinerary.userImage}/> */}
          </div>
        );
      })
    ) : (
      <div>"No itineraries"</div>
    );
    return (
      <div>
        <h1>Itinerary</h1>
        {itineraryList}
      </div>
    );
  }
}

// export default Itinerary;

// state = {
//   itineraries: []
// };

// componentDidMount() {
//   this.state.getItinerary();
// }

// // console.log(this.state)

// getItinerary() {
//   axios.get("api/itineraries").then(response => {
//     console.log(response);
//     this.setState({
//       itineraries: response.data
//     });
//   });
// };
// render() {
//   return (
//     <Fragment>
//       <div>
//         <h1>Itinerary</h1>
//         {this.state.itineraries.map(it => {
//           const { _id, title, userName, userRating, cost } = it;
//           return (
//             <div key={_id}>
//               <p>Title: {title}</p>
//               <p>Username: {userName}</p>
//               <p>Rating: {userRating}</p>
//               <p>Cost: {cost}</p>
//             </div>
//           );
//         })}
//       </div>
//     </Fragment>
//   );
// }

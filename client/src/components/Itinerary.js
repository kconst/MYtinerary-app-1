import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getItinerary } from "../actions/itineraryActions";
import PropTypes from "prop-types";
import Activity from "./Activity";

class Itinerary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //itineraries: [],
      showComponent: ""
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
    // console.log("hi");
    const city = this.props.match.params.city;
    this.props.getItinerary(city);
  }

  handleToggle(event) {
    event.preventDefault();
    console.log(event.target.id);
    this.setState({
      showComponent: event.target.id
    });
  }

  render() {
    //console.log('i am the state' + this.state.itineraries)
    //console.log('i am the props' + this.props.itineraries)
    const { itineraries } = this.props.itineraries;
    return (
      <Fragment>
        {itineraries.map(result => {
          return (
            <div className="itinerary-container">
              <Fragment key={result._id}>
                <div className="itinerary-wrapper">
                  <div className="profile-figure">
                    <img
                      className="profileImage"
                      src={result.userImage}
                      alt="user"
                    />
                    <figcaption>{result.userName}</figcaption>
                  </div>
                  <div class="itinerary-text-wrapper">
                    <div className="itinerary-text-outer">
                      <h5>{result.title}</h5>
                    </div>
                    <div className="itinerary-text-inner">
                      <p>Likes: {result.userRating}</p>
                      <p>Duration: {result.duration}</p>
                      <p>Cost: {result.cost}</p>
                      <p>Hashtags: {result.hashtags}</p>
                    </div>
                  </div>
                 
                </div>
                <div>
                    <button
                      className="view"
                      id={result._id}
                      onClick={this.handleToggle}
                    >
                      View
                    </button>

                    {this.state.showComponent === result._id ? (
                      <Activity id={result._id} />
                    ) : null}
                  </div>
              </Fragment>
            </div>
          );
        })}
      </Fragment>
    );
  }
}

Itinerary.propTypes = {
  getItinerary: PropTypes.func.isRequired,
  itineraries: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  itineraries: state.itineraryR
});

export default connect(
  mapStateToProps,
  { getItinerary }
)(Itinerary);

//{   const { itineraries } = this.props.itineraries;
// const itineraryList = itineraries.length ? (
//   itineraries.map(itinerary => {
//     return (

//       <div className="itinerary" key={itinerary._id}>
//         <p>{itinerary.title}</p>
//         <img src={itinerary.userImage} alt="user image" />
//         <p>User Name: {itinerary.userName}</p>
//         <p>Rating: {itinerary.userRating}</p>
//         <p>Duration: {itinerary.duration}</p>
//         <p>Cost: {itinerary.cost}</p>
//         <p>Hashtags: {itinerary.hashtags}</p>
//         <Collapsible>
//           <Link to={`/itineraries/${itinerary.city}/${itinerary._id}`}>
//             <div>View All</div>
//           </Link>
//           {/* <CollapsibleItem>
//             <Activity />
//           </CollapsibleItem> */}
//         </Collapsible>
//       </div>
//     );
//   })
// ) : (
//   <div>
//     <p>No itineraries</p>
//   </div>
// );
// return (
//   <div>
//      <h5>Available MYtinerary</h5>
//     {itineraryList}
//      <div className="collapsible-body">
//           <Activity />
//         </div>
//   </div>
// );
//}

// return (
// <Fragment>
// <h5>Available MYtinerary</h5>
// <div className="itinerary">

// </div>
// </Fragment>
//   )

import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getActivity } from "../actions/activityActions";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import M from "materialize-css/dist/js/materialize.min.js";
// import "materialize-css/dist/css/materialize.min.css";

// import Slider from "react-animated-slider";
// import "react-animated-slider/build/horizontal.css";

class Activity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: []
    };
  }

  componentDidMount() {
    console.log(this.props);
    const id = this.props.id;
    this.props.getActivity(id);
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 3
      // cssEase: "linear"
    };

    const { activity } = this.props.activities;
    return (
      <Fragment>
        <Slider {...settings}>
          {activity.map(result => {
            return (
              <a className="slider" key={result._id}>
                <img src={result.activityImage} alt="" />
                <figcaption>{result.activityCaption}</figcaption>
              </a>
            );
          })}
        </Slider>
      </Fragment>
    );
  }
}

Activity.propTypes = {
  getActivity: PropTypes.func.isRequired,
  activities: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  activities: state.activityR
});

export default connect(
  mapStateToProps,
  { getActivity }
)(Activity);

// const { activity } = this.props.activities
// console.log(this.props);
// const activityList = activity.length ? (
//   activity.map(result => {
//     return (

//       <div className="carousel" key={result._id}>
//          {/* <Slider {...settings}>  */}
//         <img src = {result.activityImage}/>
//         {/* </Slider> */}
//       </div>
//     );
//   })
// ) : (
//   <div>
//     <p>No Activities Available</p>
//   </div>
// );

// return (
//   <div>
//     <h4>Activity page</h4>

//     {activityList}

//   </div>
// );

// {this.props.activities.activity.map(result => {
//   return (
//     <div className="carousel" key={result._id}>
//       <img src={result.activityImage} alt="" />
//     </div>
//   );
// })}

// const carouselImages = this.props.activities.activity.map(result => {
//   return (
//     <div className = "carousel" key={result._id}>
//       <img src={result.activityImage} alt="" />
//     </div>
//   );
// });
// return <Slider>{carouselImages}</Slider>;

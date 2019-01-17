import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchComment } from "../actions/commentActions";

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        comment: "",
        itinerary_id: ""
      }
    };
  }

  componentDidMount() {
    console.log(this.props);
    console.log(this.props.itinerary_id);
    this.props.fetchComment(this.props.itinerary_id);
  }

  render() {
    console.log(this.props.post);
    return (
      <div>
        {this.props.post.comment.map(result => {
          return (
            <div key={result._id}>
              <p>{result.comment}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  post: state.commentR
});

export default connect(
  mapStateToProps,
  { fetchComment }
)(CommentList);

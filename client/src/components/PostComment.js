import React, { Component, Fragment } from "react";
import { postComment, fetchComment } from "../actions/commentActions";
import { connect } from "react-redux";
import CommentList from "./FetchComment";

class CommentForm extends Component {
  constructor() {
    super();
    this.state = {
      post: {
        comment: "",
        itinerary_id: ""
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log(this.props.itinerary_id);
    // const itinerary_id = this.props.id;
    // this.props.postComment();
  }

  handleChange(e) {
    this.setState({
      post: {
        comment: e.target.value,
        itinerary_id: this.props.itinerary_id
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.props.postComment(this.state.post);
  }
  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="comment">
            Comments
            <textarea
              type="text"
              className="form-control"
              name="comment"
              value={this.state.comment}
              onChange={this.handleChange}
            />
            <CommentList itinerary_id={this.props.id} />
          </label>
          <button type="submit">ADD</button>
        </form>
      </Fragment>
    );
  }
}

export default connect(
  null,
  { postComment }
)(CommentForm);

// this.setState({
//   comment: "",
//   // itinerary_id: this.state.id
// });
// // alert('Comment submitted: ' + this.state.comment );
// // }
// const mapDispatchToProps = dispatch => {
//   return {
//     addComment: post => {
//       dispatch(postComment(post));
//     }
//   };
// };

// const mapStateToProps = state => ({
//   comment: state.commentR
// });

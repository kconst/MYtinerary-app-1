import React, { Component } from "react";
import uuidv1 from "uuid";  

class CommentForm extends Component {
  constructor() {
    super();
    this.state = {
      comment: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({comment: event.target.value});
    
  }

  handleSubmit(event) {
    event.preventDefault();
    const {comment} = this.state;
    const id = uuidv1();

    alert('Comment submitted: ' + this.state.comment );
  }


  render() {
         console.log(this.props);

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="comment">
          Comments
          <textarea type="text" className="form-control"  id="comment"  
    value={this.state.comment} onChange={this.handleChange}>
          </textarea>
        </label>
        <button type="submit">  
    ADD
    </button>  
       
      </form>
    );
  }
}

export default CommentForm;

import React, { Component } from "react";
import Activity from "./Activity";

export default class Toggle extends Component {
  state = {
    isToggle: false
  };

  isToggle = () => {
    this.setState({
      on: !this.state.on
    });
    // if (!this.state.isToggle) {
    //   this.setState({ isToggle: true });
    // } else {
    //   this.setState({ isToggle: false});
    // }
  };

  render() {
    //   const toggleState = this.state.isToggle ? "toggle-open" : "toggle-close";
    const { render } = this.props;
    return (
      <div>
        {render({
          on: this.state.on,
          isToggle: this.isToggle
        })}
      </div>
    );
  }
}

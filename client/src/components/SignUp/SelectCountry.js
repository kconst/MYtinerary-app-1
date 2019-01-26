import React, { Component } from "react";

class SelectCountry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCountry: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.target.name = e.target.value;
    this.setState({
      selectedCountry: ""
    });
  }

  render() {
    return (
      <div className="form-group">
        <div className="control-label">
          <label htmlFor={this.props.name}>{this.props.title}</label>
        </div>
        <select
          className="browser-default"
          onChange={this.props.handleChange}
          name={this.props.name}
        >
          <option value="">{this.props.placeholder}</option>
          {this.props.options.map(country => (
            <option
              key={country.name}
              value={country.name}
              options={country.name}
            >
              {country.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default SelectCountry;

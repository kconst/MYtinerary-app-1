import React, { Component } from "react";
import Input from "../SignUp/UserInput";
import ErrorMessage from "../SignUp/ErrorMessage";
import axios from "axios";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: true,
      fields: {
        username: "",
        password: ""
      },
      errors: {
        username: "",
        password: ""
      }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = e => {
    e.preventDefault();
    let value = e.target.value;
    let name = e.target.name;

    this.setState(
      prevState => {
        return {
          fields: {
            ...prevState.fields,
            [name]: value
          }
        };
      },
      () => console.log(this.state.fields)
    );

    const errors = this.state.errors;

    switch (name) {
      case "username":
        errors.username = value.length < 3 ? "min 2 characters required" : "";
        break;
      case "password":
        errors.password = value.length < 6 ? "min 6 characters required" : "";
        break;
      default:
        break;
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    const fields = this.state.fields;

    axios.post("api/createLogin", { fields }).then(res => {
      console.log(res.data);
      console.log(fields);
    });
  };

  render() {
    const { username, password } = this.state.fields;
    const enabled = username.length > 0 && password.length > 0;

    return (
      <div>
        <form onSubmit={this.handleSubmit} className="account-container">
          <Input
            type={"text"}
            value={this.state.fields.username}
            handleChange={this.handleInputChange}
            title={"Username"}
            name={"username"}
          />
          <ErrorMessage errorMsg={this.state.errors.username} />
          <Input
            type={"password"}
            value={this.state.fields.password}
            handleChange={this.handleInputChange}
            title={"Password"}
            name={"password"}
          />
          <ErrorMessage errorMsg={this.state.errors.password} />
          <div className="check">
            <label>
              <input type="checkbox" required />
              <span>Remember Me</span>
            </label>
          </div>
          <div className="createLogin">
            <button
              type="submit"
              disabled={!enabled}
              onSubmit={this.submitAccountForm}
            >
              OK
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;

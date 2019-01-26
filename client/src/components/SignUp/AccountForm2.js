import React, { Component, Fragment } from "react";
import axios from "axios";
import Select from "react-select";
import countryList from "react-select-country-list";
// import { Dropdown, NavItem, Button } from "react-materialize";
// import "materialize-css";
// import "materialize-css/dist/css/materialize.min.css";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = formErrors => {
  let valid = true;

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });
  return valid;
};

class AccountForm extends Component {
  constructor(props) {
    super(props);
    this.options = countryList().getData();
    this.state = {
      options: this.options,
      countrySelected: "",
      userName: "",
      password: "",
      email: "",
      firstName: "",
      lastName: "",
      formErrors: {
        userName: "",
        password: "",
        email: "",
        firstName: "",
        lastName: "",
        countrySelected: ""
      }
    };
  }

  handleOption = data => {
    console.log(this.state);
    this.setState({
      countrySelected: data
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      userName: this.state.userName,
      password: this.state.password,
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      countrySelected: this.state.countrySelected
    };

    axios.post("api/createAccount", { user }).then(res => {
      console.log("??");

      console.log(res.data);
      console.log(user);
    });

    if (formValid(this.state.formErrors)) {
      console.log(`
--SUBMITTING--
userName: ${this.state.userName}
password: ${this.state.password}
email: ${this.state.email}
firstName: ${this.state.firstName}
lastName: ${this.state.lastName}
countrySelected:${this.state.countrySelected}
`);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = event => {
    event.preventDefault();
    console.log(this.state);
    let formErrors = this.state.formErrors;
    const { name, value } = event.target;
    // const { data } = data;

    switch (name) {
      case "userName":
        formErrors.userName =
          value.length < 3 ? "min 2 characters required" : "";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "min 6 characters required" : "";
        break;
      case "email":
        formErrors.email =
          emailRegex.test(value) && value.length > 0 ? "" : "email not valid";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 2 ? "min 2 characters required" : "";
        break;
      case "firstName":
        formErrors.firstName =
          value.length < 2 ? "min 2 characters required" : "";
        break;
      // case "country":
      //   formErrors.country =
      //
      default:
        break;
    }

    this.setState(
      {
        formErrors,
        [name]: value
        // countrySelected: data
      },
      () => console.log(this.state)
    );
  };

  componentDidMount() {}
  render() {
    const {
      formErrors,
      userName,
      lastName,
      firstName,
      password,
      email
    } = this.state;
    const enabled =
      email.length > 0 &&
      userName.length > 0 &&
      lastName.length > 0 &&
      firstName.length > 0 &&
      password.length > 0;

    return (
      <Fragment>
        {/* <div className="account-avatar">
          <img src={require("../../images/avatar.png")} alt="avatar" />
          <figcaption>Add Photo</figcaption>
        </div> */}
        <form
          onSubmit={this.handleSubmit}
          className="account-container"
          noValidate
        >
          <div className="input-field">
            <div className="label-text">
              <label htmlFor="userName">Username</label>
            </div>
            <div className="input-text">
              <input
                type="text"
                className="inputText"
                value={this.state.userName}
                name="userName"
                onChange={this.handleChange}
                noValidate
              />
              {formErrors.userName.length > 0 && (
                <span className="errorMessage">{formErrors.userName}</span>
              )}
            </div>
          </div>
          <div className="input-field">
            <div className="label-text">
              <label htmlFor="password">Password</label>
            </div>
            <div className="input-text">
              <input
                type="password"
                className="inputText"
                value={this.state.password}
                name="password"
                onChange={this.handleChange}
                noValidate
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
          </div>
          <div className="input-field">
            <div className="label-text">
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-text">
              <input
                type="email"
                className="inputText"
                value={this.state.email}
                name="email"
                onChange={this.handleChange}
                noValidate
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
          </div>
          <div className="input-field">
            <div className="label-text">
              <label htmlFor="lastName">Last Name</label>
            </div>
            <div className="input-text">
              <input
                type="text"
                className=""
                value={this.state.lastName}
                name="lastName"
                onChange={this.handleChange}
                noValidate
              />
              {formErrors.lastName.length > 0 && (
                <span className="errorMessage">{formErrors.lastName}</span>
              )}
            </div>
          </div>
          <div className="input-field">
            <div className="label-text">
              <label htmlFor="firstName">First Name</label>
            </div>
            <div className="input-text">
              <input
                type="text"
                className=""
                value={this.state.firstName}
                name="firstName"
                onChange={this.handleChange}
                noValidate
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>
          </div>
          <div className="input-field">
            <div className="label-text">
              <label htmlFor="country">Country</label>
            </div>
            <div className="input-text">
              <Select
                options={this.state.options}
                value={this.state.countrySelected}
                onChange={this.handleOption}
                required
              />
            </div>
          </div>
          <div className="accountAgree">
            <label>
              <input type="checkbox" />
              <span>I agree to MYtinerary's Terms & Conditions</span>
            </label>
          </div>

          <div className="createAccount">
            <button
              type="submit"
              disabled={!enabled}
              onSubmit={this.handleSubmit}
            >
              OK
            </button>
          </div>
        </form>
      </Fragment>
    );
  }
}
export default AccountForm;

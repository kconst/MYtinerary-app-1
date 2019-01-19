import React, { Component, Fragment } from "react";
import $ from "jquery";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import axios from "axios";
// import {Row, Input} from "react-materialize";

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
    this.state = {
      cities: [],
      userName: "",
      password: "",
      email: "",
      firstName: "",
      lastName: "",
      country: "",
      formErrors: {
        userName: "",
        password: "",
        email: "",
        firstName: "",
        lastName: "",
        country: ""
      }
      // country: "select"
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      userName: this.state.userName,
      password: this.state.password,
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      country: this.state.country
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
      },
      () => console.log(this.state)
    );
  };

  componentDidMount() {
    var elems = document.querySelectorAll("select");
    M.FormSelect.init(elems);

    axios
      .get(`/api/cities`)
      .then(res => {
        console.log(res);
        return res.data;
      })
      .then(data => {
        const countriesAll = data.map(country => {
          return country.country;
        });
        console.log(countriesAll);
        // const countriesUnique = new Set(countriesAll);
        // console.log(countriesUnique);
        this.setState({
          cities: countriesAll
        });
      });
  }
  render() {
    const {
      cities,
      formErrors,
      userName,
      lastName,
      firstName,
      password,
      email
      // country
    } = this.state;
    const enabled =
      email.length > 0 &&
      userName.length > 0 &&
      lastName.length > 0 &&
      firstName.length > 0 &&
      password.length > 0;
    // country.length > 0;

    // console.log(cities);
    // const countriesOptions = cities.map(val => (
    //   <option key={val}>{val}</option>
    // ));

    return (
      <Fragment>
        <h4 className="accountPageHead">Create Account</h4>
        <div className="account-avatar">
          <img src={require("../images/avatar.png")} alt="avatar" />
          <figcaption>Add Photo</figcaption>
        </div>
        <form
          onSubmit={this.handleSubmit}
          className="account-container"
          noValidate
        >
          <div className="input-wrapper">
            <div className="label-text">
              <label htmlFor="userName">Username</label>
            </div>
            <div className="input-text">
              <input
                type="text"
                className=""
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
          <div className="input-wrapper">
            <div className="label-text">
              <label htmlFor="password">Password</label>
            </div>
            <div className="input-text">
              <input
                type="password"
                className=""
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
          <div className="input-wrapper">
            <div className="label-text">
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-text">
              <input
                type="email"
                className=""
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
          <div className="input-wrapper">
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
          <div className="input-wrapper">
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
          <div className="input-wrapper">
            <div className="label-text">
              <label htmlFor="country">Country</label>
            </div>

            <select>
              {cities.map(country => (
                <option>{country}</option>
              ))}
            </select>
          </div>

          <div className="accountAgree">
            <label>
              <input type="checkbox" />
              <span>I agree to MYtinerary's Terms & Conditions</span>
            </label>
            <div className="createAccount">
              <button
                type="submit"
                disabled={!enabled}
                onSubmit={this.handleSubmit}
              >
                OK
              </button>
            </div>
          </div>
        </form>
      </Fragment>
    );
  }
}
export default AccountForm;

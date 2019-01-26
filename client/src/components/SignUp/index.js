import React, { Component, Fragment } from "react";
import Input from "./UserInput";
import SelectCountry from "./SelectCountry";
import ErrorMessage from "./ErrorMessage";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { signUpRequest } from "../../actions/signupRequestActions";
// import M from "materialize-css/dist/js/materialize.min.js";
// import "materialize-css/dist/css/materialize.min.css";
// import { Row, Input } from "react-materialize";

const emailRegex = new RegExp(/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/);

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: true,
      countries: [],
      fields: {
        username: "",
        password: "",
        email: "",
        firstname: "",
        lastname: "",
        selectedCountry: ""
      },
      errors: {
        username: "",
        password: "",
        email: "",
        firstname: "",
        lastname: "",
        selectedCountry: ""
        // isChecked: ""
      }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitAccountForm = this.submitAccountForm.bind(this);
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(response => response.json())
      .then(json => this.setState({ countries: json }));
    // let elems = document.querySelectorAll("select");
    // M.FormSelect.init(elems, { inDuration: 300, outDuration: 225 });
  }

  handleInputChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    // const fields = this.state.fields;

    this.setState(
      // {
      //   fields: {
      //     [name]: value
      //   }
      // }
      prevState => {
        return {
          fields: {
            ...prevState.fields,
            [name]: value
          }
        };
      }
      // () => console.log(this.state.fields)
    );

    const errors = this.state.errors;

    switch (name) {
      case "username":
        errors.username = value.length < 3 ? "min 2 characters required" : "";
        break;
      case "password":
        errors.password = value.length < 6 ? "min 6 characters required" : "";
        break;
      case "email":
        errors.email =
          emailRegex.test(value) && value.length > 0 ? "" : "email not valid";
        break;
      case "lastname":
        errors.lastname = value.length < 3 ? "min 2 characters required" : "";
        break;
      case "firstname":
        errors.firstname = value.length < 3 ? "min 2 characters required" : "";
        break;
      case "isChecked":
        errors.isChecked = true
          ? "Please read Terms and Conditions and check box"
          : "";

      default:
        break;
      // case "selectedCountry":
      //   errors.selectedCountry =
    }
  }

  submitAccountForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      const fields = {};
      fields["username"] = "";
      fields["password"] = "";
      fields["email"] = "";
      fields["firstname"] = "";
      fields["lastname"] = "";
      fields["selectedCountry"] = "";

      this.setState({ fields: fields });
      alert("Data submitted");
    }

    //call the signUprequest function and store the userdata in this.props
    this.props.signUpRequest(this.state.fields);
    console.log(this.state.fields);
    console.log(this.state);
    console.log(this.props);
  }

  validateForm() {
    const fields = this.state.fields;
    const errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "You must enter at least a username or an email";
    }
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "You must enter at least a username or an email";
    }
    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "Please create a password";
    }

    if (!fields["firstname"]) {
      formIsValid = false;
      errors["firstname"] = "Please enter your first name";
    }
    if (!fields["lastname"]) {
      formIsValid = false;
      errors["lastname"] = "Please enter your last name";

      // if (!fields["selectedCountry"]) {
      //   formIsValid = false;
      //   errors["selectedCountry"] = "Please select a country";
      // }
    }
    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  render() {
    console.log(this.props);
    const {
      username,
      password,
      email,
      firstname,
      lastname,
      // selectedCountry
    } = this.state.fields;
    const enabled =
      email.length > 0 &&
      username.length > 0 &&
      lastname.length > 0 &&
      firstname.length > 0 &&
      password.length > 0 
      // selectedCountry.length > 0;

    return (
      <Fragment>
        <h4 className="SignUpPageHeader">Create Account</h4>
        {/* <div className="account-avatar">
        <img src={require("../../images/avatar.png")} alt="avatar" />
        <figcaption>Add Photo</figcaption>
      </div> */}

        <form className="account-container" onSubmit={this.submitAccountForm}>
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
          <Input
            type={"text"}
            value={this.state.fields.email}
            handleChange={this.handleInputChange}
            title={"Email"}
            name={"email"}
          />
          <ErrorMessage errorMsg={this.state.errors.email} />
          <Input
            type={"text"}
            value={this.state.fields.lastname}
            handleChange={this.handleInputChange}
            title={"Last Name"}
            name={"lastname"}
          />
          <ErrorMessage errorMsg={this.state.errors.lastname} />
          <Input
            type={"text"}
            value={this.state.fields.firstname}
            handleChange={this.handleInputChange}
            title={"First Name"}
            name={"firstname"}
          />
          <ErrorMessage errorMsg={this.state.errors.firstname} />
          <SelectCountry
            title={"Country"}
            placeholder={"Choose"}
            options={this.state.countries}
            value={this.state.selectedCountry}
            handleChange={this.handleInputChange}
            name={"selectedCountry"}
          />
          <div className="accountAgree">
            <label>
              <input type="checkbox" value="check" required />
              <span>I agree to MYtinerary's Terms & Conditions</span>
            </label>
          </div>
          <div className="createAccount">
            <button
              type="submit"
              disabled={!enabled}
              onSubmit={this.submitAccountForm}
              className="btn btn-primary btn-lg"
            >
              SIGN UP
            </button>
          </div>
        </form>
      </Fragment>
    );
  }
}

SignUpForm.propTypes = {
  signUpRequest: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  fields: state.signUpR
});

export default connect(
  mapStateToProps,
  { signUpRequest }
)(SignUpForm);

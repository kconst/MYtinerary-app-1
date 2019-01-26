import React, { Component } from "react";
import LoginForm from "./LoginForm";
import { NavLink } from "react-router-dom";

class LoginPage extends Component {
  render() {
    return (
      <div>
        <h4 className="loginPageHead">Login</h4>
        <LoginForm />

        <p className="login-text">
          Don't have a MYtinerary account yet? You should create one! It's
          totally free and only takes a minute.
        </p>
        <div className="createAccount">
          <NavLink to="/createAccount">Create Account</NavLink>
        </div>
      </div>
    );
  }
}

export default LoginPage;

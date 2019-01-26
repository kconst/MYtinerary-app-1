import React, { Component } from "react";


class AccountForm extends Component {
  render() {
    return (
      <div>
        <Formik
          //set up default values
          initialValues={{
            username: "",
            password: "",
            email: "",
            firstName: "",
            lastName: "",
            country: ""
          }}
          //handles submission
          onSubmit={(values, actions) => {
            console.log(values);
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              //stimulates delay of real request and after submit done, set submitting to false
              actions.setSubmitting(false);
            }, 1000);
          }}
          render={props => (
            <Form onSubmit={props.handleSubmit} className="account-create">
              <div className="input-wrapper">
                <div className="label-text">
                  <label htmlFor="username">Username</label>
                </div>
                <div className="input-text">
                  <input
                    type="text"
                    name="username"
                    onChange={props.handleChange}
                    value={props.values.username}
                  />
                </div>
              </div>
              <div className="input-wrapper">
                <div className="label-text">
                  <label htmlFor="password">Password</label>
                </div>
                <div className="input-text">
                  <input
                    type="text"
                    name="password"
                    onChange={props.handleChange}
                    value={props.values.password}
                  />
                </div>
              </div>
              <div className="input-wrapper">
                <div className="label-text">
                  <label htmlFor="email">Email</label>
                </div>
                <div className="input-text">
                  <input
                    type="email"
                    name="email"
                    onChange={props.handleChange}
                    value={props.values.email}
                  />
                </div>
              </div>
              <div className="input-wrapper">
                <div className="label-text">
                  <label htmlFor="firstName">First Name</label>
                </div>
                <div className="input-text">
                  <input
                    type="text"
                    name="firstName"
                    onChange={props.handleChange}
                    value={props.values.firstName}
                  />
                </div>
              </div>
              <div className="input-wrapper">
                <div className="label-text">
                  <label htmlFor="lastName">Last Name</label>
                </div>
                <div className="input-text">
                  <input
                    type="text"
                    name="lastName"
                    onChange={props.handleChange}
                    value={props.values.lastName}
                  />
                </div>
              </div>
              <div className="input-wrapper">
                <div className="label-text">
                  <label htmlFor="country">Country</label>
                </div>
                <div className="input-text">
                  <select
                    name="country"
                    onChange={props.handleChange}
                    value={props.values.country}
                  />
                </div>
              </div>
              <div className="input-wrapper">
                <div className="label-text">
                  <label htmlFor="country">Country</label>
                </div>
                <div className="input-text">
                  <select
                    name="country"
                    onChange={props.handleChange}
                    value={props.values.country}
                  />
                </div>
              </div>
            </Form>
          )}
        />
        <CountryList />
      </div>
    );
  }
}
export default AccountForm;

import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home3rd";
import Cities from "./components/Cities";
// import Error from "./components/Error";
import Login from "./components/Header/Login";
import SignUp from "./components/Header/SignUp";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Itinerary from "./components/Itinerary";
import SignUpForm from "./components/SignUp";
import LoginPage from "./components/Login";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/cities" component={Cities} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/itineraries/:city" component={Itinerary} />
          <Route path="/signUpPage" component={SignUpForm} />
          <Route path="/loginPage" component={LoginPage} />
          {/* <Route path="/itineraries/:itinerary_id" component={Activity} /> */}
          <Footer />
          {/* <Route component = {Error}/> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

// state = {
//   response: "",
//   post: "",
//   responseToPost: ""
// };

//   componentDidMount() {
//     this.callApi()
//       .then(res => this.setState({ response: res.express }))
//       .catch(err => console.log(err));
//   }

//   callApi = async () => {
//     const response = await fetch("/cities");
//     console.log(response);
//     const body = await response.json();
//     if (response.status !== 200) throw Error(body.message);
//     return body;

//   };

//   handleSubmit = async e => {
//     e.preventDefault();
//     const response = await fetch("/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({ post: this.state.post })
//     });
//     const body = await response.text();
//     this.setState({ responseToPost: body });
//     console.log(response);
//   };

/* <p>{this.state.response}</p>
          <form onSubmit={this.handleSubmit}> 
            <p>
              <strong>Post to Server:</strong>
            </p>
            <input
              type="text"
              value={this.state.post}
              onChange={e => this.setState({ post: e.target.value })}
            />
            <button type="submit">Submit</button>
          </form>
          <p>{this.state.responseToPost}</p> */

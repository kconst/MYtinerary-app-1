import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

class SideBar extends Component {
  componentDidMount() {
    let elems = document.querySelector(".sidenav");
    M.Sidenav.init(elems, {
      edge: "left",
      inDuration: 250
    });
  }

  render() {
    return (
      <div className="menu">
        <ul id="slide-out" className="sidenav">
          <li>
            <div className="user-view">
            <i className="material-icons medium">
            account_circle
          </i>
                <span className="white-text name">John Doe</span>
              <span className="white-text email">jdandturk@gmail.com</span>
            </div>
          </li>
          <li>
             <p>First Link</p> 
          </li>
          <li>
            <p>Second Link</p>
          </li>
          <li>
            <p>Third Link</p>
          </li>
        </ul>
        <span data-target="slide-out" className="sidenav-trigger">
          <i className="material-icons medium">menu</i>
        </span>
      </div>
    );
  }
}
export default SideBar;

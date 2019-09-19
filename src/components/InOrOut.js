import React, { Component } from "react";
import ButtonBar from "./ButtonBar";
import AvailableHouses from "./AvailableHouses";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Host from "./Host";
import SignOut from "./SignOut";

const firebase = require("firebase");
class InOrOut extends Component {
  render() {
    const user = firebase.auth().currentUser;
    console.log(user);
    if (user) {
      // User is signed in.
      return (
        <Router>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              backgroundColor: "#CDCDCD",
              padding: "15px 15px"
            }}
          >
            <Link to="/">
              <ButtonBar buttonName="Home" />
            </Link>
            <Link to="host">
              <ButtonBar buttonName="Host" />
            </Link>

            <Link to="/signout">
              <ButtonBar buttonName="Sign Out" />
            </Link>
          </div>
          <Route exact path="/" component={AvailableHouses} />
          <Route path="/host" component={Host} />
          <Route path="/signout" component={SignOut} />
        </Router>
      );
    } else {
      // No user is signed in.
      return (
        <Router>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              backgroundColor: "#CDCDCD",
              padding: "15px 15px"
            }}
          >
            <Link to="/">
              <ButtonBar buttonName="Home" />
            </Link>
            <Link to="host">
              <ButtonBar buttonName="Host" />
            </Link>

            <Link to="/signin">
              <ButtonBar buttonName="Sign In" />
            </Link>

            <Link to="/signup">
              <ButtonBar buttonName="Sign Up" />
            </Link>
          </div>
          <h1 style={{ textAlign: "center" }}>Please Log In To Rent or Host</h1>
          <Route exact path="/" component={AvailableHouses} />
          <Route path="/host" component={Host} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
        </Router>
      );
    }
  }
}

export default InOrOut;

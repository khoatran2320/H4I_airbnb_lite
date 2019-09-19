import React, { Component } from "react";
const firebase = require("firebase");

class SignOut extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
    this.state = {
      message: ""
    };
  }
  onClick = () => {
    firebase
      .auth()
      .signOut()
      .then(function() {
        this.setState({ message: "Log Out Successful" });
      })
      .catch(function(error) {
        this.setState({ message: "Log Out Failed" });
      });
  };
  render() {
    if (this.state.message === "") {
      return (
        <React.Fragment>
          <h1>Are you sure you want to sign out?</h1>
          <button onClick={this.onClick}>Sign Out</button>
        </React.Fragment>
      );
    } else
      return (
        <React.Fragment>
          <h1>{this.state.message}</h1>
        </React.Fragment>
      );
  }
}

export default SignOut;

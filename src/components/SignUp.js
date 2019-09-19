import React, { Component } from "react";
import Input from "@material-ui/core/Input";
const firebase = require("firebase");
class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.email);
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch(function(error) {
        // Handle Errors here.
        console.log(error);
        // ...
      });
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <Input
          type="text"
          placeholder="Enter Your Email"
          style={{ margin: "5px" }}
          name="email"
          onChange={this.onChange}
        />
        <Input
          type="text"
          placeholder="Password"
          style={{ margin: "5px" }}
          name="password"
          onChange={this.onChange}
        />
        <Input type="submit" style={{ margin: "5px" }} />
      </form>
    );
  }
}
export default SignUp;

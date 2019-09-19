import React, { Component } from "react";
import Input from "@material-ui/core/Input";
const firebase = require("firebase");
require("firebase/firestore");
class Host extends Component {
  constructor() {
    super();
    this.state = {
      propertyName: "",
      propertyType: "",
      propertyCost: "",
      propertyAddress: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit = e => {
    e.preventDefault();
    firebase
      .firestore()
      .collection("Renters")
      .add({
        propertyName: this.state.propertyName,
        propertyType: this.state.propertyType,
        propertyCost: this.state.propertyCost,
        propertyAddress: this.state.propertyAddress
      });
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    const user = firebase.auth().currentUser;

    if (user) {
      return (
        <form onSubmit={this.onSubmit}>
          <Input
            type="text"
            placeholder="Property Name"
            name="propertyName"
            style={{ margin: "5px" }}
            value={this.state.propertyName}
            onChange={this.onChange}
          />
          <Input
            type="text"
            placeholder="Property Type"
            name="propertyType"
            style={{ margin: "5px" }}
            value={this.state.propertyType}
            onChange={this.onChange}
          />
          <Input
            type="text"
            placeholder="Property Location"
            name="propertyAddress"
            style={{ margin: "5px" }}
            value={this.state.propertyAddress}
            onChange={this.onChange}
          />
          <Input
            type="text"
            placeholder="Property Cost"
            name="propertyCost"
            style={{ margin: "5px" }}
            value={this.state.propertyCost}
            onChange={this.onChange}
          />
          <Input type="submit" style={{ margin: "5px" }} />
        </form>
      );
    } else {
      return null;
    }
  }
}
export default Host;

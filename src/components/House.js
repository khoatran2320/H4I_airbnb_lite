import React, { Component } from "react";

const firebase = require("firebase");
require("firebase/firestore");
class House extends Component {
  constructor() {
    super();
    this.deleteRent = this.deleteRent.bind(this);
  }
  deleteRent = () => {
    firebase
      .firestore()
      .collection("Renters")
      .doc(this.props.id)
      .delete();
  };
  render() {
    if (firebase.auth().currentUser) {
      // User is signed in.
      return (
        <div
          style={{
            border: "2px solid black",
            margin: "2px 2px",
            padding: "5px"
          }}
        >
          <h3>{this.props.propertyName}</h3>
          <p>{this.props.propertyAddress}</p>
          <p>{this.props.propertyType}</p>
          <p>${this.props.propertyCost}/Night</p>
          <button onClick={this.deleteRent}>Rent</button>
        </div>
      );
    } else {
      // No user is signed in.
      return (
        <div
          style={{
            border: "2px solid black",
            margin: "2px 2px",
            padding: "5px"
          }}
        >
          <h4>{this.props.propertyName}</h4>
          <p>{this.props.propertyAddress}</p>
          <p>{this.props.propertyType}</p>
          <p>${this.props.propertyCost}/Night</p>
        </div>
      );
    }
  }
}

export default House;

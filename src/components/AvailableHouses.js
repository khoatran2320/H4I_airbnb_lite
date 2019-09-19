import React, { Component } from "react";
import House from "./House";

const firebase = require("firebase");
require("firebase/firestore");
class AvailableHouses extends Component {
  constructor() {
    super();
    this.state = {
      account: null
    };
  }
  componentDidMount = () => {
    firebase
      .firestore()
      .collection("Renters")
      .onSnapshot(e => {
        const notes = e.docs.map(_doc => {
          const data = _doc.data();
          data["id"] = _doc.id;
          return data;
        });

        this.setState({ account: notes });
      });
  };

  render() {
    if (this.state.account === null) return null;
    return this.state.account.map(n => (
      <House
        propertyCost={n.propertyCost}
        key={n.id}
        id={n.id}
        propertyType={n.propertyType}
        propertyName={n.propertyName}
        propertyAddress={n.propertyAddress}
      />
    ));
  }
}

export default AvailableHouses;

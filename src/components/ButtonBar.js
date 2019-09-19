import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class ButtonBar extends Component {
  render() {
    return (
      <Button color="primary" variant="outlined">
        {this.props.buttonName}
      </Button>
    );
  }
}

export default ButtonBar;

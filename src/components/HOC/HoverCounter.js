import React, { Component } from "react";
// HOC
import withCounter from "./withCounter";

class HoverCounter extends Component {
  render() {
    const myStyle = {
      backgroundColor: "steelblue",
      color: "white",
      padding: "20px"
    };
    const { count, incrementCount } = this.props;
    return (
      <div style={myStyle}>
        <h2 onMouseOver={incrementCount}>
          Has pasado por encima {count} veces
        </h2>
      </div>
    );
  }
}

export default withCounter(HoverCounter, 1);

import React, { Component } from "react";

export default class RefsExmp extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
    console.log(this.inputRef);
  }

  clickHandler = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    const miEstilo = {
      backgroundColor: "#00adb5",
      color: "white",
      padding: "30px"
    };
    return (
      <div style={miEstilo}>
        <input type='text' ref={this.inputRef} />
        <button onClick={this.clickHandler}>El Valor Actual es</button>
      </div>
    );
  }
}

import React, { Component } from "react";
import InputField from "./input";

class Form extends Component {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
    console.log("Submit");
  };

  renderButton(label) {
    return <button className="">{label}</button>;
  }

  renderInput(name, label, autoFocus, type = "text") {
    return (
      <InputField type={type} name={name} label={label} autoFocus={autoFocus} />
    );
  }
}

export default Form;

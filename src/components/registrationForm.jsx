import React from "react";
import Form from "./common/form";
import Joi from "@hapi/joi";

class RegistrationForm extends Form {
  state = {
    data: { name: "", email: "", contact: "" },
    errors: {}
  };

  schema = {
    name: Joi.string()
      .required()
      .label("Name"),
    email: Joi.string()
      .required()
      .label("Email"),
    contact: Joi.string()
      .required()
      .label("Contact")
  };

  doSubmit = () => {
    //Call server
    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <h1>Registration Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          <br />
          {this.renderInput("email", "Email", "password")}
          <br />
          {this.renderInput("contact", "Contact")}
          <br />
          {this.renderButton("Submit")}
        </form>
      </div>
    );
  }
}

export default RegistrationForm;

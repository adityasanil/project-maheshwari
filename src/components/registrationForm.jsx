import React, { Component } from "react";
import Input from "./common/input";

class RegistrationForm extends Component {
  state = {
    data: { name: "", email: "", contact: "" },
    errors: {}
  };

  validateForm = () => {
    const errors = {};
    const { data } = this.state;
    if (data.name.trim() === "") errors.name = "Name is required.";
    if (data.email.trim() === "") errors.email = "Email is required.";
    if (data.contact.trim() === "") errors.contact = "Contact is required.";
    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validateForm();
    console.log(errors);

    this.setState({ errors: errors || {} });
    if (errors) return;
    console.log("Submitted");
  };

  validateIndividualField = input => {
    if (input.name === "name") {
      if (input.value.trim() === "") return "Name is required";
    }
    if (input.name === "email") {
      if (input.value.trim() === "") return "Email is required";
    }
    if (input.name === "contact") {
      if (input.value.trim() === "") return "Contact is required";
    }
  };

  // handleChange = ({ currentTarget: input }) => {
  handleChange = e => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateIndividualField(e.currentTarget);
    if (errorMessage) errors[e.currentTarget.name] = errorMessage;
    else delete errors[e.currentTarget.name];

    const data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data, errors });
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <h1>Registration Form</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="name"
            label="Name"
            value={data.name}
            onChange={this.handleChange}
            error={errors.name}
          />
          <br />
          <Input
            name="email"
            label="Email"
            value={data.email}
            onChange={this.handleChange}
            error={errors.email}
          />
          <br />
          <Input
            name="contact"
            label="Contact"
            value={data.contact}
            onChange={this.handleChange}
            error={errors.contact}
          />
          <button type="submit" name="submit" className="">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;

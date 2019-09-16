import React, { Component } from "react";
import Joi from "@hapi/joi";
import Input from "./input";

class Form extends Component {
  state = {
    data: {},
    errors: {}
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validateForm();
    // console.log(errors);

    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };

  validateForm = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateIndividualField = input => {
    const obj = { [input.name]: input.value };
    const schema = { [input.name]: this.schema[input.name] };
    const { error } = Joi.validate(obj, schema);

    return error ? error.details[0].message : null;
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

  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;

    return (
      <Input
        type={type}
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderButton(label) {
    return (
      <button disabled={this.validateForm()} className="">
        {label}
      </button>
    );
  }
}

export default Form;

import React, { Component } from "react";
import Joi from '@hapi/joi';
import Input from "./input";
import Button from '@material-ui/core/Button';


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
    const errors = {};
    const { data } = this.state;
    if (data.name.trim() === "") errors.name = "Name is required.";
    if (data.email.trim() === "") errors.email = "Email is required.";
    if (data.contact.trim() === "") errors.contact = "Contact is required.";
    return Object.keys(errors).length === 0 ? null : errors;
    // const options = { abortEarly: false };
    // const { error } = Joi.validate(this.state.data, this.schema, options);
    // if (!error) return null;

    // const errors = {};
    // for (let item of error.details) errors[item.path[0]] = item.message;
    // return errors;
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
    // const obj = { [input.name]: input.value };
    // const schema = { [input.name]: this.schema[input.name] };
    // const { error } = Joi.validate(obj, schema);

    // return error ? error.details[0].message : null;
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
      //<button disabled={this.validateForm()} className="">
      //{label}
      //</button>
      <Button
        type="submit"
        color="primary"
        variant="outlined">
        {label}
      </Button>

    );
  }
}

export default Form;

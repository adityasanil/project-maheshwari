import React, { Component } from "react";
import Input from "./input";
import Selection from "./select";
import Button from "@material-ui/core/Button";
import Joi from "joi-browser";
import Date from "./date";
import { TextField } from "@material-ui/core";

class Form extends Component {
  state = {
    data: {},
    area: [],
    errors: {}
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validateForm();
    // console.log(errors);

    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
    // if(!errors) return;
    // window.alert("Signup Successful");
  };

  validateForm = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    // eslint-disable-next-line no-unused-vars
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateIndividualField = input => {
    const obj = { [input.name]: input.value };
    const schema = { [input.name]: this.schema[input.name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateIndividualField(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
  };

  handleMyAccountDetailChange = ({ currentTarget: input }) => {
    //const errors = { ...this.state.errors };
    //const errorMessage = this.validateIndividualField(input);
    //if (errorMessage) errors[input.name] = errorMessage;
    //else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data });
  };

  renderInput(name, label, type = "text", variant = "standard") {
    const { data, errors } = this.state;

    return (
      <Input
        type={type}
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
        variant={variant}
      />
    );
  }

  renderButton(label, color, variant, onClick) {
    return (
      <Button type="submit" color={color} variant={variant} onClick={onClick}>
        {label}
      </Button>
    );
  }

  renderSelection(name, label, options) {
    const { data, errors } = this.state;

    return (
      <Selection
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderDate(name, label, type) {
    const { data, errors } = this.state;

    return (
      <Date
        type={type}
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderParagraph(paragraphBody) {
    return <span>{paragraphBody}</span>;
  }

  renderPersonalDetailInput(name, type = "text") {
    const { data } = this.state;

    return (
      <TextField
        type={type}
        name={name}
        value={data[name]}
        required={true}
        onChange={this.handleMyAccountDetailChange}
        //error={errors[name]}
        variant="outlined"
        fullWidth
      />
    );
  }
}

export default Form;

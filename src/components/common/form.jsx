import React, { Component } from "react";
import Input from "./input";
import Selection from "./select";
import Button from "@material-ui/core/Button";
import Joi from "joi-browser";
import Date from './date'

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

  renderButton(label, color, variant) {
    return (
      <Button type="submit" color={color} variant={variant}>
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
}

export default Form;

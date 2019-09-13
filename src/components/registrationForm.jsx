import React from "react";
import Form from "./common/form";

class RegistrationForm extends Form {
  state = {
    data: { field: "" }
  };

  render() {
    return (
      <div>
        <h1>Registration Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("field1", "Field 1: ", true)}
          {this.renderInput("field2", "Field 2: ", false)}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default RegistrationForm;

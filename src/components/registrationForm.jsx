import React from "react";
import Form from "./common/form";
import { Divider, Typography } from "@material-ui/core";

class RegistrationForm extends Form {
  state = {
    data: {
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      contact: "",
      programmeApplied: "",
      mobileNumber: "",
      dob: "",
      lifeMembershipNumber: "",
      residentialAddress: "",
      residentialLandline: "",
      area: "",
      married: "",
      bloodGroup: "",
      companyName: "",
      product: "",
      comapanyWebsite: "",
      landlineNumber: "",
      businessIncorporationDate: "",
      facebookLink: "",
      linkedinLink: "",
      instagramLink: "",
      twitterLink: ""
    },
    errors: {}
  };

  doSubmit = () => {
    //Call server
    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <Typography align="center" variant="h4" color="primary">
          Signup
        </Typography>
        <Divider variant="Fullwidth" />
        <br />

        <form onSubmit={this.handleSubmit}>
          {this.renderInput("firstName", "First Name")}
          <br />
          {this.renderInput("middleName", "Middle Name")}
          <br />
          {this.renderInput("lastName", "Last Name")}
          <br />
          {this.renderInput("email", "Email", "email")}
          <br />
          {this.renderParagraph("Programme Applied for (choose any one)")}
          <br />
          {this.renderInput("contact", "Contact")}
          <br />
          {this.renderInput("dob", "", "date")}
          <br />
          {this.renderParagraph("Life Membership Number (If any)")}
          {this.renderInput("lifeMembershipNumber")}
          <br />
          {this.renderInput("residentialAddress", "Residential Address")}
          <br />
          {this.renderInput("residentialLandline", "Residential Landline")}
          <br />
          {this.renderInput("area", "Area")}
          <br />
          {this.renderInput("married", "Married")}
          <br />
          {this.renderInput("bloodGroup", "Blood Group")}
          <br />
          {this.renderInput("companyName", "Company Name")}
          <br />
          {this.renderInput("product", "Product/Service Lines")}
          <br />
          {this.renderInput("comapanyWebsite", "Comapany Website")}
          <br />
          {this.renderInput("landlineNumber", "Landline Number")}
          <br />
          {this.renderInput(
            "businessIncorporationDate",
            "Business Incorporation Date",
            "date"
          )}
          <br />
          {this.renderInput("facebookLink", "Facebook Link")}
          <br />
          {this.renderInput("linkedinLink", "LinkedIn Link")}
          <br />
          {this.renderInput("instagramLink", "Instagram Link")}
          <br />
          {this.renderInput("twitterLink", "Twitter Link")}
          <br />

          {this.renderButton("Submit")}
        </form>
      </div>
    );
  }
}

export default RegistrationForm;

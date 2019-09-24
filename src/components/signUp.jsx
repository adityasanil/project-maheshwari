import React from "react";
import { Grid } from "@material-ui/core";
import { Divider, Typography } from "@material-ui/core";
import Form from "./common/form";
import Joi from "joi-browser";

class Signup extends Form {
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
    area: [{ name: "Mumbai" }, { name: "Thane" }],
    errors: {}
  };

  schema = {
    firstName: Joi.string()
      .required()
      .label("First name"),
    middleName: Joi.string()
      .required()
      .label("Middle name"),
    lastName: Joi.string()
      .required()
      .label("Last name"),
    contact: Joi.string()
      .required()
      .label("Contact numeb"),
    email: Joi.string()
      .required()
      .label("Email Id name"),
    programmeApplied: Joi.string()
      .required()
      .label("Program"),
    mobileNumber: Joi.string()
      .required()
      .label("Contact name"),
    dob: Joi.string()
      .required()
      .label("Date of birth"),
    lifeMembershipNumber: Joi.string()
      .required()
      .label("Life membership number"),
    residentialAddress: Joi.string()
      .required()
      .label("Residential Address"),
    residentialLandline: Joi.string()
      .required()
      .label("Residential Landline"),
    area: Joi.string()
      .required()
      .label("Area"),
    married: Joi.string()
      .required()
      .label("Marital Status"),
    bloodGroup: Joi.string()
      .required()
      .label("Blood Group"),
    companyName: Joi.string()
      .required()
      .label("Company name"),
    product: Joi.string()
      .required()
      .label("Product/Service"),
    comapanyWebsite: Joi.string()
      .required()
      .label("Comapany Website"),
    landlineNumber: Joi.string()
      .required()
      .label("Landline number"),
    businessIncorporationDate: Joi.string()
      .required()
      .label("Business Incorporation Date"),
    facebookLink: Joi.string()
      .required()
      .label("Facebook Link"),
    linkedinLink: Joi.string()
      .required()
      .label("Linkedin Link"),
    instagramLink: Joi.string()
      .required()
      .label("Instagram Link"),
    twitterLink: Joi.string()
      .required()
      .label("Twitter Link")
  };

  doSubmit = () => {
    //Call server
    console.log("Submitted");
  };

  render() {
    return (
      <Grid container spacing={0} alignItems="center" justify="center">
        <Grid item xs={5}>
          <div>
            <Typography align="center" variant="h4" color="primary">
              Signup
            </Typography>
            <Divider variant="Fullwidth" />
            <br />

            <form onSubmit={this.handleSubmit}>
              {this.renderSelect("area", "Area", this.state.area)}
              <br />
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
              {this.renderInput("area", "Area", "Choose your area")}
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
        </Grid>
      </Grid>
    );
  }
}

export default Signup;

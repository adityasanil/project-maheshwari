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
      //mobileNumber: "",
      dob: "",
      lifeMembershipNumber: "",
      landlineNumber: "",
      residentialAddress: "",
      residentialLandline: "",
      companyName: "",
      product: "",
      comapanyWebsite: "",
      businessIncorporationDate: "",
      facebookLink: "",
      linkedinLink: "",
      instagramLink: "",
      twitterLink: ""
    },
    area: [{ name: "Andheri" }, { name: "Borivali" }, { name: "Ghatkopar" }, { name: "Goregaon" }, { name: "MadhyaMumbai" }, { name: "Malad" }, { name: "Mulund" }, { name: "SouthMumbai" }],
    married: [{ name: "Yes"}, { name: "No"}],
    bloodGroup:  [{ name: "B+" }, { name: "B-" }, { name: "AB+" }, { name: "AB-" }, { name: "O+" }, { name: "O-" }, { name: "A+" }, { name: "A-" }],
    programmeApplied: [{name: "Startup" }, {name: "WomenEmpowerment" }, {name: "B2BConnect" } ],
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
      .label("Contact number"),
    email: Joi.string()
      .required()
      .label("Email Id name"),
    programmeApplied: Joi.string()
      .required()
      .label("Program"),
    //mobileNumber: Joi.string()
      //.required()
      //.label("Contact name"),
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
    console.log(this.state.data)
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
              {this.renderInput("firstName", "First Name")}
              <br />
              {this.renderInput("middleName", "Middle Name")}
              <br />
              {this.renderInput("lastName", "Last Name")}
              <br />
              {this.renderInput("email", "Email", "email")}
              <br />
              {this.renderSelection("programmeApplied", "Program Applied for", this.state.programmeApplied )}
              <br />
              {this.renderInput("contact", "Contact")}
              <br />
              {this.renderDate("dob", "Date of Birth:", "date")}
              <br />
              {/*this.renderParagraph("Life Membership Number (If any)")*/}
              {this.renderInput("lifeMembershipNumber", "Life Membership Number (If any)" )}
              <br />
              {this.renderInput("residentialAddress", "Residential Address")}
              <br />
              {this.renderInput("residentialLandline", "Residential Landline")}
              <br />
              {this.renderSelection("area", "Area", this.state.area)}
              <br />
              {this.renderSelection("married", "Married", this.state.married)}
              <br />
              {this.renderSelection("bloodGroup", "Blood Group", this.state.bloodGroup)}
              <br />
              {this.renderInput("companyName", "Company Name")}
              <br />
              {this.renderInput("product", "Product/Service Lines")}
              <br />
              {this.renderInput("comapanyWebsite", "Comapany Website")}
              <br />
              {this.renderInput("landlineNumber", "Landline Number")}
              <br />
              {this.renderDate(
                "businessIncorporationDate",
                "Business Incorporation Date:",
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

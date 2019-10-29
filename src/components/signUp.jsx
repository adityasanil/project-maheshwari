import React from "react";
import { Grid, Box, List } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import brandLogo from "../assets/images/brandLogo.png";
import Form from "./common/form";
import Joi from "joi-browser";
import { register } from "../services/registerService";
import Footer from "./footer";

const styles = {
  root: {
    width: "90%",
    height: "auto"
  },
  image: {
    marginTop: "25px",
    width: "100%",
    maxWidth: "350px",
    height: "auto",
    "@media only screen and (max-width: 600px)": {
      marginTop: "0px"
    }
  },
  welcome: {
    padding: "8px",
    fontFamily: "Jura",
    fontSize: "26px",
    fontWeight: "600"
  },

  list: {
    maxHeight: 457,
    overflow: "auto",
    "@media only screen and (max-width: 600px)": {
      maxHeight: "100%"
    }
  }
};

class Signup extends Form {
  state = {
    data: {
      firstName: "",
      middleName: "",
      lastName: "",
      username: "",
      email: "",
      contact: "",
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

    area: [
      { name: "Andheri" },
      { name: "Borivali" },
      { name: "Ghatkopar" },
      { name: "Goregaon" },
      { name: "MadhyaMumbai" },
      { name: "Malad" },
      { name: "Mulund" },
      { name: "SouthMumbai" }
    ],

    married: [{ name: "Yes" }, { name: "No" }],

    bloodGroup: [
      { name: "B+" },
      { name: "B-" },
      { name: "AB+" },
      { name: "AB-" },
      { name: "O+" },
      { name: "O-" },
      { name: "A+" },
      { name: "A-" }
    ],

    industry: [
      { name: "Accounting" },
      { name: "Advertising" },
      { name: "Banking" },
      { name: "Chemicals" },
      { name: "Cosmetics" },
      { name: "Catering" },
      { name: "Electronics" },
      { name: "Engineering " },
      { name: "Entertainment" },
      { name: "Estate" },
      { name: "Fashion" },
      { name: "Finance" },
      { name: "Government" },
      { name: "Health" },
      { name: "HR" },
      { name: "Import/Export" },
      { name: "Investment" },
      { name: "IT" },
      { name: "Legal" },
      { name: "Tourism" },
      { name: "Marketing" },
      { name: "Medical" },
      { name: "Pharmaceuticals" },
      { name: "Photography" },
      { name: "Politics" },
      { name: "Printing" },
      { name: "Stock" },
      { name: "Wholesale" },
      { name: "Others" }
    ],

    programmeApplied: [
      { name: "Startup" },
      { name: "Women Empowerment" },
      { name: "B2B Connect" }
    ],

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
    username: Joi.string()
      .required()
      .label("Username"),
    contact: Joi.string()
      .required()
      .label("Contact number"),
    email: Joi.string()
      .required()
      .label("Email Id name"),
    programmeApplied: Joi.string()
      .required()
      .label("Program"),
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
    industry: Joi.string()
      .required()
      .label("Industry"),
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

  doSubmit = async () => {
    //Submit data to Server
    const { data } = this.state;
    // console.log(data);
    const response = await register(data);
    console.log(response);
    window.alert(
      "Data submitted Successfully !!\nNOTE: You cannot login until you recieve an approval from our team"
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <center>
          <Typography variant="h5" className={classes.welcome}>
            Welcome to our B2B Connect Platform
          </Typography>
        </center>
        <Grid container>
          <Grid item xs={12} lg={6} sm={12}>
            <Box>
              <Grid
                container
                justify="center"
                alignItems="center"
                direction="column"
              >
                <br />
                <div>
                  <img src={brandLogo} alt="logo" className={classes.image} />
                </div>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6} sm={12}>
            <Box>
              <Grid
                container
                justify="center"
                alignItems="center"
                direction="column"
              >
                <br />
                <div className={classes.root}>
                  <List className={classes.list}>
                    <form onSubmit={this.handleSubmit}>
                      <center>
                        <Typography
                          component="span"
                          style={{ paddingTop: "10px" }}
                          variant="body1"
                          // color="primary"
                        >
                          Register yourself here
                        </Typography>
                      </center>
                      {this.renderInput("firstName", "First Name")}
                      <br />
                      {this.renderInput("middleName", "Middle Name")}
                      <br />
                      {this.renderInput("lastName", "Last Name")}
                      <br />
                      {this.renderInput("username", "Username")}
                      <br />
                      {this.renderInput("email", "Email", "email")}
                      <br />
                      {this.renderSelection(
                        "programmeApplied",
                        "Program Applied for:  ",
                        this.state.programmeApplied
                      )}
                      <br />
                      {this.renderInput("contact", "Contact")}
                      <br />
                      {this.renderDate("dob", "Date of Birth:", "date")}
                      <br />
                      {this.renderInput(
                        "lifeMembershipNumber",
                        "Life Membership Number (If any)"
                      )}
                      <br />
                      {this.renderInput(
                        "residentialAddress",
                        "Residential Address"
                      )}
                      <br />
                      {this.renderInput(
                        "residentialLandline",
                        "Residential Landline"
                      )}
                      <br />
                      {this.renderSelection("area", "Area: ", this.state.area)}
                      <br />
                      {this.renderSelection(
                        "married",
                        "Married: ",
                        this.state.married
                      )}
                      <br />
                      {this.renderSelection(
                        "bloodGroup",
                        "Blood Group: ",
                        this.state.bloodGroup
                      )}
                      <br />
                      {this.renderSelection(
                        "industry",
                        "Industry you belong to: ",
                        this.state.industry
                      )}
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
                      {this.renderButton("Submit", "secondary", "contained")}
                    </form>
                  </List>
                  <br />
                </div>
              </Grid>
            </Box>
          </Grid>
          <Footer />
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Signup);

import React from "react";
import Button from "@material-ui/core/Button";
import { Grid, List, Typography, Box, Divider } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { loggedInUser } from "../services/getUsers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import http from "../services/httpService";
import Form from "./common/form";

const styles = {
  list: {
    maxHeight: 380,
    overflow: "auto",
    width: "100%",
    "@media only screen and (max-width: 600px)": {
      maxHeight: "100%"
    }
  },

  box: {
    marginLeft: 130,
    marginBottom: 40,
    width: "80%",
    minWidth: 280,
    "@media only screen and (max-width: 600px)": {
      marginLeft: 30
    }
  },

  heading: {
    padding: "10px",
    fontFamily: "Jura",
    fontWeight: 600
  },

  pageHeading: {
    padding: "20px"
  },

  detail: {
    marginLeft: 25,
    marginTop: 8,
    "@media only screen and (max-width: 600px)": {
      marginLeft: 10,
      fontSize: 11,
      marginTop: 15
    }
  },

  button: {
    marginLeft: 80,
    marginTop: 8,
    "@media only screen and (max-width: 600px)": {
      marginLeft: 15,
      fontSize: 10
    }
  }
};

class MyAccount extends Form {
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

    errors: {}
  };

  async componentDidMount() {
    try {
      const { data } = await loggedInUser();
      // console.log(data);
      this.setState({ data });
    } catch (error) {}
  }

  handleSave = async ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    // console.log(data);
    this.setState({ data });

    try {
      const { data: result } = await http.put(
        "http://localhost:3001/myAccount/" + this.state.data._id,
        data
      );
      toast.info("Updated successfully");
      console.log(result);
    } catch (error) {
      toast.error("Update failed!");
    }
  };
  x;
  render() {
    const { classes } = this.props;

    return (
      <div>
        <ToastContainer autoClose={2500} />
        <br />
        <br />
        <Grid container>
          <Box border={1} className={classes.box}>
            <Typography className={classes.heading} variant="h5" align="center">
              Personal Details
            </Typography>
            <Divider variant="middle" />
            <br />
            <List className={classes.list}>
              <form onSubmit={this.handleSubmit}>
                <Grid container>
                  <Grid item xs={3} lg={4} md={4}>
                    <Typography className={classes.detail}>
                      First Name
                    </Typography>
                  </Grid>
                  <Grid item xs={5} lg={5} md={4}>
                    {this.renderPersonalDetailInput("firstName", "First Name")}
                  </Grid>
                  <Grid item xs={4} lg={3} md={4}>
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={this.handleSave}
                      className={classes.button}
                    >
                      Save
                    </Button>
                  </Grid>
                </Grid>
                <br />
                <Grid container>
                  <Grid item xs={3} lg={4} md={4}>
                    <Typography className={classes.detail}>
                      Middle Name
                    </Typography>
                  </Grid>
                  <Grid item xs={5} lg={5} md={4}>
                    {this.renderPersonalDetailInput(
                      "middleName",
                      "Middle Name"
                    )}
                  </Grid>
                  <Grid item xs={4} lg={3} md={4}>
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={this.handleSave}
                      className={classes.button}
                    >
                      Save
                    </Button>
                  </Grid>
                </Grid>
                <br />
                <Grid container>
                  <Grid item xs={3} lg={4} md={4}>
                    <Typography className={classes.detail}>
                      Last Name
                    </Typography>
                  </Grid>
                  <Grid item xs={5} lg={5} md={4}>
                    {this.renderPersonalDetailInput("lastName", "Last Name")}
                  </Grid>
                  <Grid item xs={4} lg={3} md={4}>
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={this.handleSave}
                      className={classes.button}
                    >
                      Save
                    </Button>
                  </Grid>
                </Grid>
                <br />
                <Grid container>
                  <Grid item xs={3} lg={4} md={4}>
                    <Typography className={classes.detail}>
                      Program Applied
                    </Typography>
                  </Grid>
                  <Grid item xs={5} lg={5} md={4}>
                    {this.renderPersonalDetailInput(
                      "programmeApplied",
                      "Program Applied for:  ",
                      this.state.programmeApplied
                    )}
                  </Grid>
                  <Grid item xs={4} lg={3} md={4}>
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={this.handleSave}
                      className={classes.button}
                    >
                      Save
                    </Button>
                  </Grid>
                </Grid>
                <br />
                <Grid container>
                  <Grid item xs={3} lg={4} md={4}>
                    <Typography className={classes.detail}>Contact</Typography>
                  </Grid>
                  <Grid item xs={5} lg={5} md={4}>
                    {this.renderPersonalDetailInput("contact", "Contact")}
                  </Grid>
                  <Grid item xs={4} lg={3} md={4}>
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={this.handleSave}
                      className={classes.button}
                    >
                      Save
                    </Button>
                  </Grid>
                </Grid>
                <br />
                <Grid container>
                  <Grid item xs={3} lg={4} md={4}>
                    <Typography className={classes.detail}>
                      Date of Birth
                    </Typography>
                  </Grid>
                  <Grid item xs={5} lg={5} md={4}>
                    {this.renderPersonalDetailInput(
                      "dob",
                      "Date of Birth:",
                      "date"
                    )}
                  </Grid>
                  <Grid item xs={4} lg={3} md={4}>
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={this.handleSave}
                      className={classes.button}
                    >
                      Save
                    </Button>
                  </Grid>
                </Grid>
                <br />
                <Grid container>
                  <Grid item xs={3} lg={4} md={4}>
                    <Typography className={classes.detail}>
                      Life Membership Number
                    </Typography>
                  </Grid>
                  <Grid item xs={5} lg={5} md={4}>
                    {this.renderPersonalDetailInput(
                      "lifeMembershipNumber",
                      "Life Membership Number (If any)"
                    )}
                  </Grid>
                  <Grid item xs={4} lg={3} md={4}>
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={this.handleSave}
                      className={classes.button}
                    >
                      Save
                    </Button>
                  </Grid>
                </Grid>
                <br />
                <Grid container>
                  <Grid item xs={3} lg={4} md={4}>
                    <Typography className={classes.detail}>
                      Residential Address
                    </Typography>
                  </Grid>
                  <Grid item xs={5} lg={5} md={4}>
                    {this.renderPersonalDetailInput(
                      "residentialAddress",
                      "Residential Address"
                    )}
                  </Grid>
                  <Grid item xs={4} lg={3} md={4}>
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={this.handleSave}
                      className={classes.button}
                    >
                      Save
                    </Button>
                  </Grid>
                </Grid>
                <br />
                <Grid container>
                  <Grid item xs={3} lg={4} md={4}>
                    <Typography className={classes.detail}>
                      Residential Landline
                    </Typography>
                  </Grid>
                  <Grid item xs={5} lg={5} md={4}>
                    {this.renderPersonalDetailInput(
                      "residentialLandline",
                      "Residential Landline"
                    )}
                  </Grid>
                  <Grid item xs={4} lg={3} md={4}>
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={this.handleSave}
                      className={classes.button}
                    >
                      Save
                    </Button>
                  </Grid>
                </Grid>
                <br />
                <Grid container>
                  <Grid item xs={3} lg={4} md={4}>
                    <Typography className={classes.detail}>Area</Typography>
                  </Grid>
                  <Grid item xs={5} lg={5} md={4}>
                    {this.renderPersonalDetailInput(
                      "area",
                      "Area: ",
                      this.state.area
                    )}
                  </Grid>
                  <Grid item xs={4} lg={3} md={4}>
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={this.handleSave}
                      className={classes.button}
                    >
                      Save
                    </Button>
                  </Grid>
                </Grid>
                <br />
                <Grid container>
                  <Grid item xs={3} lg={4} md={4}>
                    <Typography className={classes.detail}>Married</Typography>
                  </Grid>
                  <Grid item xs={5} lg={5} md={4}>
                    {this.renderPersonalDetailInput(
                      "married",
                      "Married: ",
                      this.state.married
                    )}
                  </Grid>
                  <Grid item xs={4} lg={3} md={4}>
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={this.handleSave}
                      className={classes.button}
                    >
                      Save
                    </Button>
                  </Grid>
                </Grid>
                <br />
                <Grid container>
                  <Grid item xs={3} lg={4} md={4}>
                    <Typography className={classes.detail}>
                      Blood Group
                    </Typography>
                  </Grid>
                  <Grid item xs={5} lg={5} md={4}>
                    {this.renderPersonalDetailInput(
                      "bloodGroup",
                      "Blood Group: ",
                      this.state.bloodGroup
                    )}
                  </Grid>
                  <Grid item xs={4} lg={3} md={4}>
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={this.handleSave}
                      className={classes.button}
                    >
                      Save
                    </Button>
                  </Grid>
                </Grid>
                <br />
              </form>
            </List>
          </Box>
          {/* <Box border={1} className={classes.box}>
            <Typography className={classes.heading} variant="h5" align="center">
              Company Details
            </Typography>
            <Divider variant="middle" />
            <br />
            <List className={classes.list}>
              <form onSubmit={this.handleSubmit}>
                <Table className={classes.table} size="medium">
                  <TableRow>
                    <TableCell align="justify">
                      Industry you belong to
                    </TableCell>
                    <TableCell align="justify">
                      {this.renderPersonalDetailInput(
                        "industry",
                        "Industry you belong to: ",
                        this.state.industry
                      )}
                    </TableCell>
                    <TableCell align="justify">
                      {this.renderButton("Save", "secondary", "contained")}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="justify">Product/Service Lines</TableCell>
                    <TableCell align="justify">
                      {this.renderPersonalDetailInput(
                        "product",
                        "Product/Service Lines"
                      )}
                    </TableCell>
                    <TableCell align="justify">
                      {this.renderButton("Save", "secondary", "contained")}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="justify">Company Website</TableCell>
                    <TableCell align="justify">
                      {this.renderPersonalDetailInput(
                        "comapanyWebsite",
                        "Comapany Website"
                      )}
                    </TableCell>
                    <TableCell align="justify">
                      {this.renderButton("Save", "secondary", "contained")}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="justify">Landline Number</TableCell>
                    <TableCell align="justify">
                      {this.renderPersonalDetailInput(
                        "landlineNumber",
                        "Landline Number"
                      )}
                    </TableCell>
                    <TableCell align="justify">
                      {this.renderButton("Save", "secondary", "contained")}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="justify">
                      Business Incorporation Date
                    </TableCell>
                    <TableCell align="justify">
                      {this.renderPersonalDetailInput(
                        "businessIncorporationDate",
                        "Business Incorporation Date:"
                      )}
                    </TableCell>
                    <TableCell align="justify">
                      {this.renderButton("Save", "secondary", "contained")}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="justify">Facebook Link</TableCell>
                    <TableCell align="justify">
                      {this.renderPersonalDetailInput(
                        "facebookLink",
                        "Facebook Link"
                      )}
                    </TableCell>
                    <TableCell align="justify">
                      {this.renderButton("Save", "secondary", "contained")}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="justify">LinkedIn Link</TableCell>
                    <TableCell align="justify">
                      {this.renderPersonalDetailInput(
                        "linkedinLink",
                        "LinkedIn Link"
                      )}
                    </TableCell>
                    <TableCell align="justify">
                      {this.renderButton("Save", "secondary", "contained")}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="justify">Instagram Link</TableCell>
                    <TableCell align="justify">
                      {this.renderPersonalDetailInput(
                        "instagramLink",
                        "Instagram Link"
                      )}
                    </TableCell>
                    <TableCell align="justify">
                      {this.renderButton("Save", "secondary", "contained")}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="justify">Twitter Link</TableCell>
                    <TableCell align="justify">
                      {this.renderPersonalDetailInput(
                        "twitterLink",
                        "Twitter Link"
                      )}
                    </TableCell>
                    <TableCell align="justify">
                      {this.renderButton("Save", "secondary", "contained")}
                    </TableCell>
                  </TableRow>
                </Table>
              </form>
            </List>
          </Box> */}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(MyAccount);

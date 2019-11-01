import React from "react";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import { Grid, List, Typography, Box, Divider } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { loggedInUser } from "../services/getUsers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import http from "../services/httpService";
import Form from "./common/form";

const styles = {
  table: {
    // marginLeft: 80
    width: "100%"
  },

  list: {
    //marginLeft: 130,
    maxHeight: 380,
    width: "100%",
    overflow: "auto",
    "@media only screen and (max-width: 600px)": {
      maxHeight: "100%"
      //marginLeft: 30
    }
  },

  box: {
    marginLeft: 130,
    //marginTop: 10,
    marginBottom: 40,
    width: "80%",
    //margin: 70,
    "@media only screen and (max-width: 600px)": {
      maxHeight: "0%",
      marginLeft: 20
    }
  },

  heading: {
    padding: "10px",
    fontFamily: "Jura",
    fontWeight: 600
  },

  pageHeading: {
    padding: "20px"
    //paddingTop: "10",
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
      console.log(data);
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

  render() {
    const { classes } = this.props;

    return (
      <div>
        <ToastContainer autoClose={2500} />
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
                <Table className={classes.table} size="medium">
                  <TableRow>
                    <TableCell>First Name</TableCell>
                    <TableCell>
                      {this.renderPersonalDetailInput(
                        "firstName",
                        "First Name"
                      )}
                    </TableCell>
                    <TableCell>
                      <Button
                        color="secondary"
                        variant="contained"
                        onClick={this.handleSave}
                      >
                        Save
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="justify">Middle Name</TableCell>
                    <TableCell align="justify">
                      {this.renderPersonalDetailInput(
                        "middleName",
                        "Middle Name"
                      )}
                    </TableCell>
                    <TableCell>
                      <Button
                        color="secondary"
                        variant="contained"
                        onClick={this.handleSave}
                      >
                        Save
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="justify">Last Name</TableCell>
                    <TableCell align="justify">
                      {this.renderPersonalDetailInput("lastName", "Last Name")}
                    </TableCell>
                    <TableCell align="justify">
                      {this.renderButton("Save", "secondary", "contained")}
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell align="justify">Program Applied</TableCell>
                    <TableCell align="justify">
                      {this.renderPersonalDetailInput(
                        "programmeApplied",
                        "Program Applied for:  ",
                        this.state.programmeApplied
                      )}
                    </TableCell>
                    <TableCell align="justify">
                      {this.renderButton("Save", "secondary", "contained")}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="justify">Contact</TableCell>
                    <TableCell align="justify">
                      {this.renderPersonalDetailInput("contact", "Contact")}
                    </TableCell>
                    <TableCell align="justify">
                      {this.renderButton("Save", "secondary", "contained")}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="justify">Date of Birth</TableCell>
                    <TableCell align="justify">
                      {this.renderPersonalDetailInput(
                        "dob",
                        "Date of Birth:",
                        "date"
                      )}
                    </TableCell>
                    <TableCell align="justify">
                      {this.renderButton("Save", "secondary", "contained")}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="justify">
                      Life Membership Number
                    </TableCell>
                    <TableCell align="justify">
                      {this.renderPersonalDetailInput(
                        "lifeMembershipNumber",
                        "Life Membership Number (If any)"
                      )}
                    </TableCell>
                    <TableCell align="justify">
                      {this.renderButton("Save", "secondary", "contained")}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="justify">Residential Address</TableCell>
                    <TableCell align="justify">
                      {this.renderPersonalDetailInput(
                        "residentialAddress",
                        "Residential Address"
                      )}
                    </TableCell>
                    <TableCell align="justify">
                      {this.renderButton("Save", "secondary", "contained")}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="justify">Residential Landline</TableCell>
                    <TableCell align="justify">
                      {this.renderPersonalDetailInput(
                        "residentialLandline",
                        "Residential Landline"
                      )}
                    </TableCell>
                    <TableCell align="justify">
                      {this.renderButton("Save", "secondary", "contained")}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="justify">Area</TableCell>
                    <TableCell align="justify">
                      {this.renderPersonalDetailInput(
                        "area",
                        "Area: ",
                        this.state.area
                      )}
                    </TableCell>
                    <TableCell align="justify">
                      {this.renderButton("Save", "secondary", "contained")}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="justify">Married</TableCell>
                    <TableCell align="justify">
                      {this.renderPersonalDetailInput(
                        "married",
                        "Married: ",
                        this.state.married
                      )}
                    </TableCell>
                    <TableCell align="justify">
                      {this.renderButton("Save", "secondary", "contained")}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="justify">Blood Group</TableCell>
                    <TableCell align="justify">
                      {this.renderPersonalDetailInput(
                        "bloodGroup",
                        "Blood Group: ",
                        this.state.bloodGroup
                      )}
                    </TableCell>
                    <TableCell align="justify">
                      {this.renderButton("Save", "secondary", "contained")}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="justify">Area</TableCell>
                    <TableCell align="justify">
                      {this.renderPersonalDetailInput(
                        "area",
                        "Area: ",
                        this.state.area
                      )}
                    </TableCell>
                    <TableCell align="justify">
                      {this.renderButton("Save", "secondary", "contained")}
                    </TableCell>
                  </TableRow>
                </Table>
              </form>
            </List>
          </Box>
          <Box border={1} className={classes.box}>
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
          </Box>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(MyAccount);

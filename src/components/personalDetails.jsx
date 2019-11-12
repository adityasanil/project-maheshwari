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
    maxHeight: 450,
    overflow: "auto",
    width: "180%",
    "@media only screen and (max-width: 600px)": {
      maxHeight: "100%",
      width: "100%"
    }
  },

  box: {
    //marginLeft: 110,
    marginBottom: 40,
    width: "100%",
    minWidth: 380,  
    "@media only screen and (max-width: 600px)": {
      marginLeft: 30,
    }
  },

  heading: {
    padding: "20px",
    fontFamily: "Jura",
    fontWeight: 600,
    "@media only screen and (max-width: 600px)": {
      //marginLeft: 0,
      fontSize: 18,
    }
  },

  pageHeading: {
    padding: "20px",
  },

  detail:{
    marginLeft: 30,
    marginTop: 8,
    "@media only screen and (max-width: 600px)": {
      marginLeft: 15,
      fontSize: 16,
      marginTop: 0 ,
      marginBottom: 8   
    },
    "@media only screen and (min-width: 600px) and (max-width: 1024px)": {
      marginLeft: 15,
      fontSize: 16,
      marginTop: 0 ,
      marginBottom: 8   
    }
  },

  button:{
    marginLeft: 60,
    marginTop: 8,
    "@media only screen and (max-width: 600px)": {
      marginLeft:15,
      fontSize: 5,
      marginTop: 5
      //marginRight: 100,
    },
    "@media only screen and (min-width: 600px) and (max-width: 1024px)": {
      marginLeft:15,
      fontSize: 5,
      marginTop: 5   
    }
  },

  divider:{
    width: '180%', 
    marginLeft: '15px',
    "@media only screen and (max-width: 600px)": {
      width: '85%'
    },
    "@media only screen and (min-width: 600px) and (max-width: 1024px)": {
      width: '95%'   
    }
  },

  textFeild: {
    marginLeft: 5,
    marginBottom: 20,
    "@media only screen and (max-width: 600px)": {
      marginLeft: 15
    },
    "@media only screen and (min-width: 600px) and (max-width: 1024px)": {
      marginLeft: 15,
         
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
      residentialLandline: ""
    },

    errors: {}
  };

  renderSaveButton(){
    return(
      <Button
        color="secondary"
        variant="contained"
        onClick={this.handleSave}
        size="medium" 
      >
        Save
      </Button>
    );
  }

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
        <Grid container>
          <Box>
            <div>
              <Typography className={classes.heading} variant="h5">
                Personal Details
              </Typography>
            </div>
            <Divider className={classes.divider} /><br />
            {/* <br /> */}
            <List className={classes.list}>
              <form onSubmit={this.handleSubmit}>
                <Grid>
                  <Grid container> 
                    <Grid item xs={12} lg={2} sm={12} spacing={2}>
                      <Typography className={classes.detail}>
                        First Name
                      </Typography>
                    </Grid>
                    <Grid item xs={7} lg={6} sm={5}>
                      <div className={classes.textFeild}>
                        {this.renderPersonalDetailInput(
                            "firstName",
                            "First Name"
                          )}
                      </div>
                    </Grid>
                    <Grid item xs={5} lg={2} sm={7}>
                      <div className={classes.button}>
                        {this.renderSaveButton()}
                      </div>
                    </Grid>
                  </Grid>
                  <Grid container> 
                    <Grid item xs={12} lg={2} sm={12} spacing={2}>
                      <Typography className={classes.detail}>
                        Middle Name
                      </Typography>
                    </Grid>
                    <Grid item xs={7} lg={6} sm={5}>
                      <div className={classes.textFeild}>
                        {this.renderPersonalDetailInput(
                            "middleName",
                            "Middle Name"
                          )}
                      </div>
                    </Grid>
                    <Grid item xs={5} lg={2} sm={7}>
                      <div className={classes.button}>
                        {this.renderSaveButton()}
                      </div>
                    </Grid>
                  </Grid>
                  <Grid container> 
                    <Grid item xs={12} lg={2} sm={12} spacing={2}>
                      <Typography className={classes.detail}>
                        Last Name
                      </Typography>
                    </Grid>
                    <Grid item xs={7} lg={6} sm={5}>
                      <div className={classes.textFeild}>
                        {this.renderPersonalDetailInput(
                            "lastName",
                            "Last Name"
                          )}
                      </div>
                    </Grid>
                    <Grid item xs={5} lg={2} sm={7}>
                      <div className={classes.button}>
                        {this.renderSaveButton()}
                      </div>
                    </Grid>
                  </Grid>
                  <Grid container> 
                    <Grid item xs={12} lg={2} sm={12} spacing={2}>
                      <Typography className={classes.detail}>
                        Program Applied
                      </Typography>
                    </Grid>
                    <Grid item xs={7} lg={6} sm={5}>
                      <div className={classes.textFeild}>
                        {this.renderPersonalDetailInput(
                            "programmeApplied",
                            "Program Applied for:  ",
                            this.state.programmeApplied
                          )}
                      </div>
                    </Grid>
                    <Grid item xs={5} lg={2} sm={7}>
                      <div className={classes.button}>
                        {this.renderSaveButton()}
                      </div>
                    </Grid>
                  </Grid>
                  <Grid container> 
                    <Grid item xs={12} lg={2} sm={12} spacing={2}>
                      <Typography className={classes.detail}>
                        Contact
                      </Typography>
                    </Grid>
                    <Grid item xs={7} lg={6} sm={5}>
                      <div className={classes.textFeild}>
                        {this.renderPersonalDetailInput("contact", "Contact")}
                      </div>
                    </Grid>
                    <Grid item xs={5} lg={2} sm={7}>
                      <div className={classes.button}>
                        {this.renderSaveButton()}
                      </div>
                    </Grid>
                  </Grid>
                  <Grid container> 
                    <Grid item xs={12} lg={2} sm={12} spacing={2}>
                      <Typography className={classes.detail}>
                        Date of Birth
                      </Typography>
                    </Grid>
                    <Grid item xs={7} lg={6} sm={5}>
                      <div className={classes.textFeild}>
                        {this.renderPersonalDetailInput(
                            "dob",
                            "Date of Birth:",
                            "date"
                          )}
                      </div>
                    </Grid>
                    <Grid item xs={5} lg={2} sm={7}>
                      <div className={classes.button}>
                        {this.renderSaveButton()}
                      </div>
                    </Grid>
                  </Grid>
                  <Grid container> 
                    <Grid item xs={12} lg={2} sm={12} spacing={2}>
                      <Typography className={classes.detail}>
                        Life Membership Number
                      </Typography>
                    </Grid>
                    <Grid item xs={7} lg={6} sm={5}>
                      <div className={classes.textFeild}>
                        {this.renderPersonalDetailInput(
                            "lifeMembershipNumber",
                            "Life Membership Number (If any)"
                          )}
                      </div>
                    </Grid>
                    <Grid item xs={5} lg={2} sm={7}>
                      <div className={classes.button}>
                        {this.renderSaveButton()}
                      </div>
                    </Grid>
                  </Grid>
                  <Grid container> 
                    <Grid item xs={12} lg={2} sm={12} spacing={2}>
                      <Typography className={classes.detail}>
                        Residential Address
                      </Typography>
                    </Grid>
                    <Grid item xs={7} lg={6} sm={5}>
                      <div className={classes.textFeild}>
                        {this.renderPersonalDetailInput(
                            "residentialAddress",
                            "Residential Address"
                          )}
                      </div>
                    </Grid>
                    <Grid item xs={5} lg={2} sm={7}>
                      <div className={classes.button}>
                        {this.renderSaveButton()}
                      </div>
                    </Grid>
                  </Grid>
                  <Grid container> 
                    <Grid item xs={12} lg={2} sm={12} spacing={2}>
                      <Typography className={classes.detail}>
                        Residential Landline
                      </Typography>
                    </Grid>
                    <Grid item xs={7} lg={6} sm={5}>
                      <div className={classes.textFeild}>
                        {this.renderPersonalDetailInput(
                            "residentialLandline",
                            "Residential Landline"
                          )}
                      </div>
                    </Grid>
                    <Grid item xs={5} lg={2} sm={7}>
                      <div className={classes.button}>
                        {this.renderSaveButton()}
                      </div>
                    </Grid>
                  </Grid><br />
                  <Grid container> 
                    <Grid item xs={12} lg={2} sm={12} spacing={2}>
                      <Typography className={classes.detail}>
                        Area
                      </Typography>
                    </Grid>
                    <Grid item xs={7} lg={6} sm={5}>
                      <div className={classes.textFeild}>
                        {this.renderPersonalDetailInput(
                            "area",
                            "Area: ",
                            this.state.area
                          )}
                      </div>
                    </Grid>
                    <Grid item xs={5} lg={2} sm={7}>
                      <div className={classes.button}>
                        {this.renderSaveButton()}
                      </div>
                    </Grid>
                  </Grid>
                  <Grid container> 
                    <Grid item xs={12} lg={2} sm={12} spacing={2}>
                      <Typography className={classes.detail}>
                        Married
                      </Typography>
                    </Grid>
                    <Grid item xs={7} lg={6} sm={5}>
                      <div className={classes.textFeild}>
                        {this.renderPersonalDetailInput(
                            "married",
                            "Married: ",
                            this.state.married
                          )}
                      </div>
                    </Grid>
                    <Grid item xs={5} lg={2} sm={7}>
                      <div className={classes.button}>
                        {this.renderSaveButton()}
                      </div>
                    </Grid>
                  </Grid>
                  <Grid container> 
                    <Grid item xs={12} lg={2} sm={12} spacing={2}>
                      <Typography className={classes.detail}>
                        Blood Group
                      </Typography>
                    </Grid>
                    <Grid item xs={7} lg={6} sm={5}>
                      <div className={classes.textFeild}>
                        {this.renderPersonalDetailInput(
                            "bloodGroup",
                            "Blood Group: ",
                            this.state.bloodGroup
                          )}
                      </div>
                    </Grid>
                    <Grid item xs={5} lg={2} sm={7}>
                      <div className={classes.button}>
                        {this.renderSaveButton()}
                      </div>
                    </Grid>
                  </Grid><br />
                </Grid>
              </form>
            </List>
          </Box>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(MyAccount);

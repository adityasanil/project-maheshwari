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
      companyName: "",
      product: "",
      comapanyWebsite: "",
      businessIncorporationDate: "",
      landlineNumber: "",
    },

    errors: {}
  };

  renderSaveButton(){
    return(
      <Button
        color="secondary"
        variant="contained"
        onClick={this.handleSave} 
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
                Company Details
              </Typography>
            </div>
            <Divider className={classes.divider} /><br />
            {/* <br /> */}
            <List className={classes.list}>
              <form onSubmit={this.handleSubmit}>
                <Grid container> 
                    <Grid item xs={12} lg={2} sm={12} spacing={2}>
                      <Typography className={classes.detail}>
                        Company Name
                      </Typography>
                    </Grid>
                    <Grid item xs={7} lg={6} sm={5}>
                      <div className={classes.textFeild}>
                        {this.renderPersonalDetailInput(
                            "companyName",
                            "Company Name"
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
                        Product
                      </Typography>
                    </Grid>
                    <Grid item xs={7} lg={6} sm={5}>
                      <div className={classes.textFeild}>
                        {this.renderPersonalDetailInput(
                            "product",
                            "Product/Service Lines"
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
                        Company Website
                      </Typography>
                    </Grid>
                    <Grid item xs={7} lg={6} sm={5}>
                      <div className={classes.textFeild}>
                        {this.renderPersonalDetailInput(
                            "companyWebsite",
                            "Company Website"
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
                        Landline
                      </Typography>
                    </Grid>
                    <Grid item xs={7} lg={6} sm={5}>
                      <div className={classes.textFeild}>
                        {this.renderPersonalDetailInput(
                            "landlineNumber",
                            "Landline Number"
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
                        Business Incorporation Date
                      </Typography>
                    </Grid>
                    <Grid item xs={7} lg={6} sm={5}>
                      <div className={classes.textFeild}>
                        {this.renderPersonalDetailInput(
                            "businessIncorporationDate",
                            "Business Incorporation Date"
                          )}
                      </div>
                    </Grid>
                    <Grid item xs={5} lg={2} sm={7}>
                      <div className={classes.button}>
                        {this.renderSaveButton()}
                      </div>
                    </Grid>
                </Grid><br />                         
              </form>
            </List>
          </Box>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(MyAccount);

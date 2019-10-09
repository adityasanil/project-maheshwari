import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { Paper, Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";

const styles = {
  root: {
    //minWidth: 10,
    width: "100%",
    //marginTop: theme.spacing(3),
    //overflowX: 'auto',
    margin: "35px",
    marginTop: "0px"
  },

  table: {
    //minWidth: 10,
  },

  header: {
    padding: "25px",
    marginLeft: "10px"
  }
};

function createData(details, data) {
  return { details, data };
}

const rows = [
  createData("First Name", "First name of the user"),
  createData("Middle Name", "Middle name of the user"),
  createData("Last Name", "Last name of the user"),
  createData("Email", "Email id"),
  createData("Program Applied", "Program applied for"),
  createData("Contact", "Contact"),
  createData("Date of Birth", "DOB"),
  createData("Life Membership number", "Life membership number(if any)"),
  createData("Residential Address", "Address of the user"),
  createData("Residential Landline", "Landline Number"),
  createData("Area", "Area"),
  createData("Married", "Yes or No"),
  createData("Blood Group", "Blood Group of the user"),
  createData("Industry you belong to", "Industry name")
];

const rows2 = [
  createData("Company Name", "Name of the company"),
  createData("Product/Services Lines", "Services offered"),
  createData("Company Website", "Website URL"),
  createData("Business Incorporation Date", "Date"),
  createData("Facebook", "Facebook profile link"),
  createData("LinkedIn", "LinkedIn profile link"),
  createData("Instagram", "Instagram profile link"),
  createData("Twitter", "Twitter profile link")
];

class Details extends Component {
  state = {};

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container>
          <Typography variant="h5" className={classes.header} align="center">
            Personal Details:
          </Typography>
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.details}>
                    <TableCell scope="row">
                      <b>{row.details}</b>
                    </TableCell>
                    <TableCell align="left">{row.data}</TableCell>
                    <TableCell align="left">
                      <EditIcon />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>

        <Grid container>
          <Typography variant="h5" className={classes.header} align="center">
            Company Details:
          </Typography>
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableBody>
                {rows2.map(row => (
                  <TableRow key={row.details}>
                    <TableCell scope="row">
                      <b>{row.details}</b>
                    </TableCell>
                    <TableCell align="left">{row.data}</TableCell>
                    <TableCell align="left">
                      <EditIcon />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Details);

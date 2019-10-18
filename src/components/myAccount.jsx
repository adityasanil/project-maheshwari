import React, { Component } from "react";
import MaterialTable from "material-table";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    //minWidth: 10,
    width: "90%",
    //marginTop: theme.spacing(3),
    //overflow: 'scroll',
    margin: "60px",
    marginTop: "30px",

    "@media only screen and (max-width: 600px)": {
      width: "95%",
      margin: "10px",
      marginTop: "20px"
      //height: "30px",
      //marginBottom: "30px"
    }
  },

  table: {
    margin: "20px"

    //minWidth: 10,
  },

  header: {
    //padding: "25px",
    //marginLeft: "10px"
  }
};

class Details extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: "Details", field: "detail", editable: "never" },
        { title: "Data", field: "data", editable: "onUpdate" }
      ],

      data: [
        { detail: "First Name", data: "Jigar" },
        { detail: "Middle Name", data: "kamlesh" },
        { detail: "Last Name", data: "thakkar" },
        { detail: "Email", data: "jigar1198@gmail.com" },
        { detail: "Program applied for", data: "mulund" },
        { detail: "Contact", data: "0000000000000" },
        { detail: "Date of Birth", data: "01-01-1998" },
        { detail: "Life membership number", data: "12345" },
        { detail: "Residential Address", data: "mulund" },
        { detail: "Residential Landline", data: "1234567890" },
        { detail: "Area", data: "mulund" },
        { detail: "Married", data: "no" },
        { detail: "Blood Group", data: "A+" },
        { detail: "Industry you belong to", data: "IT" }
      ]
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid className={classes.root}>
        {/* <Paper className={classes.root}> */}
        <MaterialTable
          options={{
            search: false,
            headerStyle: {
              backgroundColor: "#000000",
              color: "white",
              padding: "10px",
              fontSize: "20px"
            }
          }}
          className={classes.table}
          title="Personal Details:"
          columns={this.state.columns}
          data={this.state.data}
          editable={{
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  {
                    const data = this.state.data;
                    const index = data.indexOf(oldData);
                    data[index] = newData;
                    this.setState({ data }, () => resolve());
                  }
                  resolve();
                }, 1000);
              })
          }}
        />
      </Grid>
    );
  }
}

export default withStyles(styles)(Details);

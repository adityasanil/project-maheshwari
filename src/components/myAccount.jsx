import React, { Component } from "react";
import MaterialTable from "material-table";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
// import { loggedInUser } from "../services/getUsers";

const styles = {
  root: {
    width: "90%",
    margin: "60px",
    marginTop: "30px",
    "@media only screen and (max-width: 600px)": {
      width: "95%",
      margin: "10px",
      marginTop: "20px"
    }
  },
  table: {
    margin: "20px"
  }
};

class Details extends Component {
  state = {
    userData: {}
  };
  async componentDidMount() {
    try {
      // const { data: userData } = await loggedInUser();
      // console.log(userData);
      // this.setState({ userData });
    } catch (error) {}
  }

  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: "Details", field: "detail", editable: "never" },
        { title: "Data", field: "data", editable: "onUpdate" }
      ],

      data: []
      // data: [
      //   { detail: "First Name", data: "Jigar" },
      //   { detail: "Middle Name", data: "kamlesh" },
      //   { detail: "Last Name", data: "thakkar" },
      //   { detail: "Email", data: "jigar1198@gmail.com" },
      //   { detail: "Program applied for", data: "mulund" },
      //   { detail: "Contact", data: "0000000000000" },
      //   { detail: "Date of Birth", data: "01-01-1998" },
      //   { detail: "Life membership number", data: "12345" },
      //   { detail: "Residential Address", data: "mulund" },
      //   { detail: "Residential Landline", data: "1234567890" },
      //   { detail: "Area", data: "mulund" },
      //   { detail: "Married", data: "no" },
      //   { detail: "Blood Group", data: "A+" },
      //   { detail: "Industry you belong to", data: "IT" }
      // ]
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
            paging: false,
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
          // data={this.state.data}
          data={query =>
            new Promise((resolve, reject) => {
              let url = "http://localhost:3001/users/aditya.sanil@somaiya.edu";
              // url += "per_page=" + query.pageSize;
              // url += "&page=" + (query.page + 1);
              fetch(url)
                .then(response => response.json())
                .then(data => {
                  console.log(data);
                  resolve({
                    data: data
                    // page: result.page - 1,
                    // totalCount: result.total
                  });
                });
            })
          }
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

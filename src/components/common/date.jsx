import React from "react";
import TextField from "@material-ui/core/TextField";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  cardStyle: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    color: "white",
    height: 20,
    padding: "5px"
  }
});

const Date = ({ name, label, value, onChange, error, type }) => {
  const classes = useStyles();

  return (
    <div className="">
      <label htmlFor={name}>{label}</label>
      <TextField
        value={value}
        onChange={onChange}
        type={type}
        id={name}
        name={name}
        fullWidth
        variant="standard"
        margin="dense"
      />
      {error && <Card className={classes.cardStyle}>{error}</Card>}
    </div>
  );
};

export default Date;

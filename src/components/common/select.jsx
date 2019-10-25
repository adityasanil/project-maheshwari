import React from "react";
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

const Selection = ({ name, label, options, error, ...rest }) => {
  const classes = useStyles();

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} {...rest}>
        <option value="" />
        {options.map(option => (
          <option key={option.name} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
      {error && <Card className={classes.cardStyle}>{error}</Card>}
    </div>
  );
};

export default Selection;

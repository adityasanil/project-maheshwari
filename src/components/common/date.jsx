import React from "react";
import TextField from "@material-ui/core/TextField";

const Date = ({ name, label, value, onChange, error, type }) => {
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
        //label={label}
        
      />
      {error && <div>{error}</div>}
    </div>
  );
};

export default Date;

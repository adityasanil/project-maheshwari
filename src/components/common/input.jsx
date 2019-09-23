import React from "react";
import TextField from "@material-ui/core/TextField";

const Input = ({ name, label, value, onChange, error, type }) => {
  return (
    <div className="">
      <TextField
        value={value}
        onChange={onChange}
        type={type}
        id={name}
        name={name}
        variant="standard"
        margin="dense"
        label={label}
      />
      {error && <div>{error}</div>}
    </div>
  );
};

export default Input;

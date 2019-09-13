import React from "react";

const InputField = ({ name, label, autoFocus }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input autoFocus={autoFocus} name={name} className="" />
    </div>
  );
};

export default InputField;

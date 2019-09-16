import React from "react";

const Input = ({ name, label, value, onChange, error }) => {
  return (
    <div className="">
      <label htmlFor={name}>{label}: </label>
      <input
        value={value}
        onChange={onChange}
        id={name}
        type="text"
        name={name}
        className=""
      />
      {error && <div>{error}</div>}
    </div>
  );
};

export default Input;

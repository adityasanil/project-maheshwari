import React from "react";

const Input = ({ name, label, value, onChange, error, type }) => {
  return (
    <div className="">
      <label htmlFor={name}>{label}: </label>
      <input
        value={value}
        onChange={onChange}
        type={type}
        id={name}
        name={name}
        className=""
      />
      {error && <div>{error}</div>}
    </div>
  );
};

export default Input;

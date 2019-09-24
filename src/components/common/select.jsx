import React from "react";

const Selection = ({ name, label, options, error, ...rest }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} {...rest}>
        <option value="" />
        {options.map(option => (
          <option value={option.name}>{option.name}</option>
        ))}
      </select>
      {error && <div>{error}</div>}
    </div>
  );
};

export default Selection;

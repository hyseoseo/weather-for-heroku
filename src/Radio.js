import React from "react";

const Radio = (props) => {
  const { id, value, name, show, onValueChange } = props;

  const handleChange = (event) => {
    const selected = event.target.value;
    onValueChange(selected);
  };

  return (
    <div className="radio-wrap">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        onChange={(e) => handleChange(e)}
      />
      <label htmlFor={id}>{show}</label>
    </div>
  );
};

export default Radio;

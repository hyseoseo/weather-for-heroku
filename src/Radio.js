import React from "react";

const Radio = (props) => {
  const { item, name, onValueChange } = props;

  const handleChange = (event) => {
    const selectedStyle = event.target.value;
    onValueChange(selectedStyle);
  };

  return (
    <div className="radio-wrap">
      <input
        type="radio"
        id={item.id}
        name={name}
        value={item.value}
        onChange={(e) => handleChange(e)}
      />
      <label for={item.id}>{item.show}</label>
    </div>
  );
};

export default Radio;

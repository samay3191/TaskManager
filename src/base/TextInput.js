import React from "react";
import PropTypes from "prop-types";

const TextInput = ({ value, onChange, placeHolder }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="m-1 leading-3">
      <input
        className="py-1 border border-gray-400 box-border outline-none rounded-lg px-2"
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeHolder}
      />
    </div>
  );
};

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextInput;

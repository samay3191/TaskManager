import React from "react";
import PropTypes from "prop-types";
import DOMPurify from 'dompurify';

const TextInput = ({ value, onChange, placeHolder }) => {
  const handleChange = (e) => {
    const val = DOMPurify.sanitize(e.target.value);
    onChange(val);
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

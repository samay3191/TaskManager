import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, onClick, disabled }) => {
  return (
    <div className="m-1 w-12">
      <button
        type="button"
        onClick={onClick}
        className={`bg-blue-800 h-full text-xs text-white rounded-lg py-2 px-3 leading-3 align-middle ${disabled ? "opacity-25" : ""}`}
        disabled={disabled}
      >
        {text}
      </button>
    </div>
  );
};

Button.defaultProps = {
  disabled: false
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
};

export default Button;

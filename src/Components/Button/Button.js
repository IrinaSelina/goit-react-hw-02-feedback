import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ callback, options }) => (
  <div className="button-list">
    {options.map((option) => (
      <button
        className="button-item"
        type="button"
        onClick={() => callback(option)}
        key={option}
      >
        {option}
      </button>
    ))}
  </div>
);
Button.propTypes = {
  callback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};
export default Button;

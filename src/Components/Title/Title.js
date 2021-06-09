import React from "react";
import PropTypes from "prop-types";
import "./Title.css";

const Title = ({ message }) => <h1 className="title-massage">{message}</h1>;
Title.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Title;

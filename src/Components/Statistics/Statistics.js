import React from "react";
import PropTypes from "prop-types";
import "./Statistics.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <ul>
      <li className="statistics-item">Good:{good}</li>
      <li className="statistics-item">Neutral:{neutral}</li>
      <li className="statistics-item">Bad:{bad}</li>
      <li className="statistics-item">Total:{total}</li>
      <li className="statistics-item">
        Positive feedback:{positivePercentage}%
      </li>
    </ul>
  </div>
);
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;

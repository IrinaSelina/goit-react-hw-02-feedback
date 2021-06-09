import React, { Component } from "react";
import Section from "../Section/Section";
import Title from "../Title/Title";
import Button from "../Button/Button";
import Statistics from "../Statistics/Statistics";
import Notification from "../Notification/Notification";

class Fedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    normal: 0,
  };
  buttonIncrement = (option) => {
    this.setState((prevtState) => ({
      [option]: prevtState[option] + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };
  countTotalFeedback = () => {
    this.setState((prevtState) => ({
      total: prevtState.good + prevtState.neutral + prevtState.bad,
    }));
  };
  countPositiveFeedbackPercentage = () => {
    this.setState((prevtState) => ({
      positivePercentage: Math.round(
        (prevtState.good / prevtState.total) * 100
      ),
    }));
  };

  render() {
    return (
      <Section>
        <Title message="Please leave feedback" />
        <Button
          callback={this.buttonIncrement}
          options={["good", "neutral", "bad"]}
        />
        <h2>Statistics</h2>
        {this.state.good === 0 &&
        this.state.bad === 0 &&
        this.state.neutral === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.state.total}
            positivePercentage={this.state.positivePercentage}
          />
        )}
      </Section>
    );
  }
}

export default Fedback;

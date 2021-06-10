import React, { Component } from "react";
import Section from "../Section";
import Title from "../Title";
import Button from "../Button";
import Statistics from "../Statistics";
import Notification from "../Notification";

class Feedback extends Component {
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
    const { good, bad, neutral, total, positivePercentage } = this.state;
    return (
      <Section>
        <Title message="Please leave feedback" />
        <Button
          callback={this.buttonIncrement}
          options={["good", "neutral", "bad"]}
        />
        <h2>Statistics</h2>
        {good === 0 && bad === 0 && neutral === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    );
  }
}

export default Feedback;

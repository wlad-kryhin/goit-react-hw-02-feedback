import { Component } from "react";
import "./App.css";
import Buttons from "./components/Buttons/Buttons";
import Section from "./components/Section/Section";
import Statics from "./components/Statics/Statics";
import Notification from "./components/Notification/Notification";
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedBack = (option) => {
    this.setState((state) => ({
      [option]: state[option] + 1,
    }));
  };

  totalFeedBack = () => {
    return Object.values(this.state).reduce((acc, option) => acc + option, 0);
  };
  totalPositiveFeedBack = () => {
    return Math.round((this.state.good / this.totalFeedBack()) * 100 || 0);
  };
  render() {
    const message = "No feedback given";
    return (
      <div className="container">
        <Section title="Please leave feedback">
          <div className="buttons__container">
            <Buttons
              options={Object.keys(this.state)}
              feedBack={this.handleFeedBack}
            />
          </div>
        </Section>
        <Section title="Statistics">
          {this.totalFeedBack() === 0 ? (
            <Notification text={message} />
          ) : (
            <Statics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              totalFeedback={this.totalFeedBack()}
              positiveFeedBack={this.totalPositiveFeedBack()}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;

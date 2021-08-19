import { Component } from "react";
import Buttons from "./components/Buttons/Buttons";
import Section from "./components/Section/Section";
import Statics from "./components/Statics/Statics";
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
    return (
      <div>
        <Section title="Please leave feedback">
          <Buttons
            options={Object.keys(this.state)}
            feedBack={this.handleFeedBack}
          />
        </Section>
        <Section title="Statistics">
          <Statics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            totalFeedback={this.totalFeedBack()}
            positiveFeedBack={this.totalPositiveFeedBack()}
          />
        </Section>
      </div>
    );
  }
}

export default App;

import React from "react";

const Scoreboard = React.createClass({
  propTypes: {
    positive: React.PropTypes.number,
    negative: React.PropTypes.number
  },

  percentage(value, total) {
    const p = (value / total) * 100;

    return p.toFixed(1);
  },

  render() {
    const {positive, negative} = this.props;

    const total = positive + negative;
    const positivePercentage = this.percentage(positive, total);
    const negativePercentage = this.percentage(negative, total);

    return (
      <div className="scoreboard">
            <div className="right aligned positive side">
                <span className="score">{positivePercentage}%</span>
                <span className="left aligned label">Positive ({positive})</span>
            </div>

            <div className="negative side">
                <span className="score">{negativePercentage}%</span>
                <span className="right aligned label">Negative ({negative})</span>
            </div>
        </div>
    );
  }
});

export default Scoreboard;

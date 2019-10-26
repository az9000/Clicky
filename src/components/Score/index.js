import React, { Component } from "react";

class Score extends Component {

  render() {
    return (
      <div className="col-3 offset-1">
        <h1>
          <span>Score: {this.props.score} | Total Score: {this.props.totalScore} </span>
        </h1>
      </div>
    );
  }
}

export default Score;

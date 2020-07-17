import React from 'react';
import './Question.css';

class Question extends React.Component {

  render() {

    return (
      <div className="BucketInfoDefault">
        <div>
          <div className="Question">{this.props.question}</div>
          <div className="Answer">{this.props.answer}</div>
        </div>
      </div>
    );
  }
}

export default Question;
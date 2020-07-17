import React from 'react';
import './PizzaQuestions.css';
import Question from "./Question"

import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import { questionsThunkAC } from "../redux/questionsFetchThunk";

class PizzaQuestions extends React.Component {
  static propTypes = {
    info: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.dispatch( questionsThunkAC(this.props.dispatch) );
  }

  render() {
    if ( this.props.info.status<=1 )
    return "загрузка...";

    if ( this.props.info.status===2 )
    return "ошибка загрузки данных";

    var questionsList = this.props.info.data.map((info) => <Question  key={info.id} question={info.question} answer={info.answer}/>)

    return (
    <div>{questionsList}
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    info: state.info,
  };
};

export default connect(mapStateToProps)(PizzaQuestions);
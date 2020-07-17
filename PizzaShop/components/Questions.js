import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import combinedReducer from '../redux/reducers.js';
import PizzaQuestions from './PizzaQuestions';

import './Questions.css';

let store=createStore(combinedReducer, applyMiddleware(thunk));

class Questions extends React.Component {
  

  render() {

    return (
      <Provider store={store}>
          <PizzaQuestions />
      </Provider>
    );
  }
}

export default Questions;
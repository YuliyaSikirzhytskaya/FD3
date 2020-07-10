import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import combinedReducer from '../redux/reducers.js';
import PizzaList from './PizzaList';

import './Pizza.css';

let store=createStore(combinedReducer, applyMiddleware(thunk));

class Pizza extends React.Component {
  

  render() {

    return (
      <Provider store={store}>
          <PizzaList />
      </Provider>
    );
  }
}

export default Pizza;
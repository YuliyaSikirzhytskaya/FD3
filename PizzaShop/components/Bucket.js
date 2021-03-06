import React from 'react';
import './Bucket.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import combinedReducer from '../redux/reducers.js';

import BucketList from './BucketList';

let store=createStore(combinedReducer, applyMiddleware(thunk));

class Bucket extends React.Component {

  render() {

    return (
      <Provider store={store}>
          <BucketList />
      </Provider>
    );
  }
}

export default Bucket;
"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Ishop3 from './components/ishop3';
import goodsArr from './goodsArr.json';

ReactDOM.render(
  <Ishop3 
    goods={goodsArr}
  />
  , document.getElementById('container') 
);

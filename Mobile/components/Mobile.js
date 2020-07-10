import React from 'react';
import MobileClient from './MobileClient';

import './Mobile.css';

class Mobile extends React.Component {
  

  render() {
   
    return (
      <div>
        <div>
        <input type="button" value="МТС"/>
        <input type="button" value="Velcom"/>
        
        </div>

      </div>
    );
  }
}

export default Mobile;
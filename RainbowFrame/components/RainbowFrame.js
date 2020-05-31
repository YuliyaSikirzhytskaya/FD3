import React from 'react';
import PropTypes from 'prop-types';

class RainbowFrame extends React.Component {

  static propTypes = {
    colors: PropTypes.string.isRequired,
  };
  
  render() {
    return (
      <div style={{border:"solid 10px "+ this.props.colors ,padding:"10px",textAlign:"center", fontSize:"40px"}}>
        {this.props.children}
      </div>
    );
  }
}

export default RainbowFrame;
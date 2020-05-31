import React from 'react';
import PropTypes from 'prop-types';
import './Br2jsx.css';

class Br2jsx extends React.Component {
    
    static propTypes = {
        str: PropTypes.string.isRequired,
      };
  
  render() {

    return (
      <div className="Br">
        {this.props.str.replace(/<(([a-z]+)\s*([^>]*))>/g,',').split(',').reduce((x, z) => [x,<br key={x}/>,z])}
      </div>
    );
  }
}

export default Br2jsx;
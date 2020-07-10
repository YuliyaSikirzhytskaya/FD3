import React from 'react';
import './PizzaInfoRow.css';

class PizzaInfoRow extends React.Component {

    render() {
        return (
          <div className="PizzInfoRow">
            {this.props.children}
          </div>
        );
      }
}

export default PizzaInfoRow;
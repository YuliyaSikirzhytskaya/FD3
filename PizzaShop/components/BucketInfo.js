import React from 'react';
import './BucketInfo.css';

class BucketInfo extends React.Component {

  render() {
    
    var totalPrice = Math.round(parseFloat(this.props.price).toFixed(2) * this.props.count*100)/100;

    return (
      <div>
        <div className="BucketInfoDefault">
          <div className="BucketInfoItem">{this.props.name}</div>
          <div className="BucketInfoItem">{this.props.count}</div>
          <div className="BucketInfoItem">{totalPrice + " руб."}</div>
        </div>
      </div>
    );
  }
}

export default BucketInfo;
import React from 'react';
import {voteEvents} from './events'

import './PizzaInfo.css';

const WorkMode1 = 1; // Default preview
const workMode2 = 2; // More informative preview

class PizzaInfo extends React.Component {

  bucketClicked = (EO) => {
    voteEvents.emit('bucketClicked',this.props.id, this.props.name, this.props.price);
  }

  render() {

    if(this.props.workMode == WorkMode1) {
      return (
        <div className="PizzaInfoDefault">
          <div className="PizzaName">{this.props.name}</div>
          <div className="PizzaImg"><img src={"../Resources/" + this.props.id + ".jpg"}></img></div>
          <div className="PizzaPrice">{this.props.price + ' руб.'}<input className="BucketButton" type={'button'} value={'В Корзину'} onClick={this.bucketClicked}/></div>
        </div>
      );
    }
    else {
      return (
        <div className='PopUp'>
          <div className="PizzaName">{this.props.name}</div>
          <div className="PizzaImg"><img src={"../Resources/" + this.props.id + ".jpg"}></img></div>
          <div className="PizzaPrice">{this.props.price + ' Руб.'}</div>
          <div className="PizzaContains">{this.props.contains}</div>
        </div>
      );
    }
  }
}

export default PizzaInfo;
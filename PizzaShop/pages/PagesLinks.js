import React from 'react';
import { NavLink } from 'react-router-dom';
import {voteEvents} from '../components/events';
import {BucketUpload,BucketUpdate} from '../components/BucketLoader'

import './PagesLinks.css';

class PagesLinks extends React.Component {
  
  state = {
    pizzaInBucket: new Array(),
    totalCount : 0
  }
  
  componentDidMount = () => {
    voteEvents.addListener('bucketClicked',this.bucketClicked);
    voteEvents.addListener('clearState',this.clear);
  };

  componentWillUnmount = () => {
    voteEvents.removeListener('bucketClicked',this.bucketClicked);
    voteEvents.removeListener('clearState',this.clear);
  }
  
  clear = (isClear) => {
    this.setState({pizzaInBucket:[]})
  }

  bucketClicked = (id,name,price) => {

    this.setState(previousState => {
      let pizzaInBucket = [... previousState.pizzaInBucket];
      var isNew = true;
      var bucketInfo = pizzaInBucket.find(x => x.id === id);
      if(bucketInfo == null || bucketInfo === undefined){
        bucketInfo = {
          "id":id,
          "name":name,
          "count":1,
          "price":price,
        }
        pizzaInBucket.push(bucketInfo);
      }
      else{
        bucketInfo.count = bucketInfo.count+1;
        isNew = false;
      }
      if(isNew){
        BucketUpload(bucketInfo);
      }
      else{
        BucketUpdate(bucketInfo);
      }

      return {pizzaInBucket: pizzaInBucket, totalCount: previousState.totalCount + 1};
    });
  }


  render() {

    return (
      <div className="Menu">
        <NavLink to="/" exact className="PageLink" activeClassName="ActivePageLink">Пиццы</NavLink>
        <NavLink to="/pizzaQuestions" className="PageLink" activeClassName="ActivePageLink">Вопросы и ответы</NavLink>
        <NavLink to="/bucket" className="PageLink" activeClassName="ActivePageLink">Корзина</NavLink>
      </div>
    );
    
  }

}
    
export default PagesLinks;
    
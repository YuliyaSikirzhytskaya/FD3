import React from 'react';
import { NavLink } from 'react-router-dom';
import {voteEvents} from '../components/events';

import './PagesLinks.css';

class PagesLinks extends React.Component {
  
  state = {
    pizzaInBucket: new Array()
  }
  
  componentDidMount = () => {
    voteEvents.addListener('bucketClicked',this.bucketClicked);
  };

  componentWillUnmount = () => {
    voteEvents.removeListener('bucketClicked',this.bucketClicked);
  }
  
  bucketClicked = (id) => {

    this.setState(previousState => {
      const pizzaInBucket = [... previousState.pizzaInBucket];
      pizzaInBucket.push(id);

      return {pizzaInBucket};
    });
  }


  render() {

    return (
      <div className="Menu">
        <NavLink to="/" exact className="PageLink" activeClassName="ActivePageLink">Пиццы</NavLink>
        <NavLink to="/pizzaQuestions" className="PageLink" activeClassName="ActivePageLink">Вопросы и ответы</NavLink>
        <NavLink to="/bucket" className="PageLink" activeClassName="ActivePageLink">Корзина - {this.state.pizzaInBucket.length}</NavLink>
      </div>
    );
    
  }

}
    
export default PagesLinks;
    
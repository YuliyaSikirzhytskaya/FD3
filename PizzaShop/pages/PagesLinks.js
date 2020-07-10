import React from 'react';
import { NavLink } from 'react-router-dom';

import './PagesLinks.css';

class PagesLinks extends React.Component {
          
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
    
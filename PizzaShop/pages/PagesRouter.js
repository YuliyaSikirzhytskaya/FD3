import React from 'react';
import { Route } from 'react-router-dom';

import Page_Pizza from './Page_Pizza';
import Page_PizzaQuestions from './Page_PizzaQuestions';
import Page_Bucket from './Page_Bucket';
import Page_PizzaInfo from './Page_PizzaInfo';

class PagesRouter extends React.Component {
          
  render() {

    return (
      <div>
        <Route path="/" exact component={Page_Pizza} />
        <Route path="/pizzaQuestions" component={Page_PizzaQuestions} />
        <Route path="/bucket" component={Page_Bucket} />
        <Route path="/pizza/:pid" component={Page_PizzaInfo} />
      </div>
    );
    
  }

}
    
export default PagesRouter;
    
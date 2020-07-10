import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import { pizzaThunkAC } from "../redux/pizzaFetchThunk";
import PizzaInfo from "./PizzaInfo";
import PizzaInfoRow from "./PizzaInfoRow";

class PizzaList extends React.PureComponent {

  static propTypes = {
    pizza: PropTypes.object.isRequired,
  };

  state = {
      workMode : 1
  }

  componentDidMount() {
    this.props.dispatch( pizzaThunkAC(this.props.dispatch) );
  }

  render() {

    if ( this.props.pizza.status<=1 )
      return "загрузка...";

    if ( this.props.pizza.status===2 )
      return "ошибка загрузки данных";

    var pizzaList = this.props.pizza.data.map((pizzaInfo) => <PizzaInfo workMode={this.state.workMode} name={pizzaInfo.name} key={pizzaInfo.id} id={pizzaInfo.id} price={pizzaInfo.price} contains={pizzaInfo.contains} />)
    var updatedPizzList = [];

    for(var i = 0; i<= Math.round(pizzaList.length/3); i++)
    {
        if((i+3)<pizzaList.length){
            updatedPizzList.push(<PizzaInfoRow key={i}>{pizzaList.slice(i, i+3)}</PizzaInfoRow>)
        }
        else{
            updatedPizzList.push(<PizzaInfoRow key={i}>{pizzaList.slice(i, pizzaList.length)}</PizzaInfoRow>)
        }
    }


    return (
      <div>
        {updatedPizzList}
      </div>
    );

  }

}

const mapStateToProps = function (state) {
  return {
    pizza: state.pizza,
  };
};

export default connect(mapStateToProps)(PizzaList);

const PIZZA_LOADING='PIZZA_LOADING';
const PIZZA_ERROR='PIZZA_ERROR';
const PIZZA_SET='PIZZA_SET';

const pizzaLoadingAC=function() {
  return {
    type: PIZZA_LOADING,
  };
}

const pizzaErrorAC=function() {
  return {
    type: PIZZA_ERROR,
  };
}

const pizzaSetAC=function(pizza) {
  return {
    type: PIZZA_SET,
    pizza:pizza,
  };
}

export {
    pizzaLoadingAC,PIZZA_LOADING,
    pizzaErrorAC,PIZZA_ERROR,
    pizzaSetAC,PIZZA_SET,
}

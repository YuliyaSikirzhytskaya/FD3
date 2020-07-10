import { PIZZA_LOADING, PIZZA_ERROR, PIZZA_SET } from './pizzaAC';

const initState={

  status: 0,
  data: null,

}

function pizzaReducer(state=initState,action) {
  switch (action.type) {

    case PIZZA_LOADING: {
      let newState={
        status:1,
        data:null,
      };
      return newState;
    }

    case PIZZA_ERROR: {
      let newState={
        status:2,
        data:null,
      };
      return newState;
    }

    case PIZZA_SET: {
      let newState={
        status:3,
        data:action.pizza,
      };
      return newState;
    }
    
    default:
      return state;
  }
}

export default pizzaReducer;

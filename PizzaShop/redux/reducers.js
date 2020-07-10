import { combineReducers } from 'redux';

import pizzaReducer from "./pizzaReducer";
import questionsReducer from './questionsReducer';

let combinedReducer=combineReducers({
    pizza: pizzaReducer,
    quiestions: questionsReducer,
});

export default combinedReducer;
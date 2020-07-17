import { combineReducers } from 'redux';

import pizzaReducer from "./pizzaReducer";
import questionsReducer from './questionsReducer';
import bucketReducer from './bucketReducer';

let combinedReducer=combineReducers({
    pizza: pizzaReducer,
    info: questionsReducer,
    bucket: bucketReducer,
});

export default combinedReducer;
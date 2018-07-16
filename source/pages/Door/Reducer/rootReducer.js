import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import doorReducer from './doorReducer';
const rootReducer = combineReducers({
    routing: routerReducer,
    doorReducer
});


export default rootReducer;
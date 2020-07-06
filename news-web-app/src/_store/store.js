import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import mainReducer from '../_reducers/mainReducer';

const middleware = [thunk];
const rootReducer = combineReducers({mainReducer})
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    ...(window.__REDUX_DEVTOOLS_EXTENSION__ ? [window.__REDUX_DEVTOOLS_EXTENSION__()]:[]) 
  )
);

export default store;
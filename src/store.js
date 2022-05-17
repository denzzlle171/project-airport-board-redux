import { configureStore } from '@reduxjs/toolkit';
import flightReducer from './flightList/flight.reducer';

const store = configureStore({
  reducer: {
    flight: flightReducer,
  },
});

export default store;


// import { combineReducers, createStore,  compose, applyMiddleware } from 'redux';
// import flightReducer from './flightList/flight.reducer';
// import thunk from 'redux-thunk'

// const reducer = combineReducers({
//   flight: flightReducer,
// });

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//   || compose;

// const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

// export default store

import { applyMiddleware, combineReducers, createStore } from 'redux';
import { cashReducer } from './cash-reducer';
import { customerReducer } from './customer-reducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';

export const store = createStore(
  combineReducers({
    cash: cashReducer,
    customers: customerReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk)),
);

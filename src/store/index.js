import { combineReducers, createStore } from 'redux';
import { cashReducer } from './cash-reducer';
import { customerReducer } from './customer-reducer';
import { composeWithDevTools } from '@redux-devtools/extension';

export const store = createStore(
  combineReducers({
    cash: cashReducer,
    customers: customerReducer,
  }),
  composeWithDevTools(),
);

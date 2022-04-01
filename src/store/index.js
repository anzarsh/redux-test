import { combineReducers, createStore } from 'redux';
import { cashReducer } from './cash-reducer';
import { customerReducer } from './customer-reducer';

export const store = createStore(combineReducers({
  cash: cashReducer,
  customer: customerReducer,
}));

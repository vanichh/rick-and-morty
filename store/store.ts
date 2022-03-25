import { createStore, compose } from 'redux';
import { rootReducer } from 'store/reducers/root-reducer';

const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const initStore = (initialState = {}) =>
  createStore(rootReducer, initialState, composeEnhancers());

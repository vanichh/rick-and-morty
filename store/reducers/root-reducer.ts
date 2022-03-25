import { combineReducers } from 'redux';
import { charactReducer } from 'store/reducers/charact';

export const rootReducer = combineReducers({
  character: charactReducer,
});


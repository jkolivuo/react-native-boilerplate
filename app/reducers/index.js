import { combineReducers } from 'redux';
import * as ActionTypes from '../actions';

function errorMessage(state = null, action) {
  const { type, error } = action;

  if (type === ActionTypes.RESET_ERRROR_MESSAGE) {
    return null;
  } if (error) {
    return action.error;
  }
  return state;
}

const rootReducer = combineReducers({
  errorMessage,
});

export default rootReducer;

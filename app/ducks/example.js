// @flow

import { createActions, handleActions } from 'redux-actions';

// types
export const types = {
  EXAMPLE: 'EXAMPLE/EXAMPLE',
};

// actions
const {
  example,
} = createActions(
  types.EXAMPLE,
);

// initialState
export const initialState = {
  isLoading: false,
  data: {},
  needsUpdate: false,
};

// reducer
export default handleActions(
  {
    [example]: state => Object.assign({}, state, { isLoading: true }),
  },
  initialState,
);

// selectors
export const getData = state => state.example.data;


// sagas

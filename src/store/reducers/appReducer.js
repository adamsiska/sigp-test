import { APP_ACTIONS } from '../../actions/actionTypes';

const initialState = {
  movies: [],
  selectedMovie: {},
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_ACTIONS.SET_MOVIES:
      return { ...state, movies: action.payload === undefined ? [] : action.payload };
    default:
      return state;
  }
};

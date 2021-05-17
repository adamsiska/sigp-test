import { APP_ACTIONS } from '../../actions/actionTypes';

const initialState = {
  testValue: 'success',
  laterValue: '',
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_ACTIONS.LATER_VALUE_SUCCESS:
      return { ...state, laterValue: action.payload };
    default:
      return state;
  }
};

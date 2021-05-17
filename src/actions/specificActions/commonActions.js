import { APP_ACTIONS } from '../actionTypes';

export const laterValueAsync = () => ({ type: APP_ACTIONS.LATER_VALUE });
export const laterValueSuccess = () => ({ type: APP_ACTIONS.LATER_VALUE_SUCCESS, payload: 'done' });

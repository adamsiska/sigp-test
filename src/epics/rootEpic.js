import { combineEpics } from 'redux-observable';
import { getDealyedValue } from './specificEpics/commonEpic';

export default combineEpics(
  getDealyedValue,
);

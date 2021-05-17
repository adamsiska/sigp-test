import { ofType } from 'redux-observable';
import { map, debounceTime } from 'rxjs/operators';
import { APP_ACTIONS } from '../../actions/actionTypes';
import { laterValueSuccess } from '../../actions/specificActions/commonActions';

export const getDealyedValue = (action$) => action$.pipe(
  ofType(APP_ACTIONS.LATER_VALUE),
  debounceTime(2000),
  map(laterValueSuccess),
);

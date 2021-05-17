import { createSelector } from 'reselect';

export const test = createSelector(
  (state) => state.app,
  ({ laterValue }) => {
    const select = laterValue;
    return select;
  },
);

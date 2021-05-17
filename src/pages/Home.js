import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { laterValueAsync } from '../actions/specificActions/commonActions';
import { test } from '../store/selectors';

export const Home = () => {
  const dispatch = useDispatch();
  const { testValue } = useSelector(state => state.app);
  const laterValue = useSelector(test);

  useEffect(() => {
    dispatch(laterValueAsync());
  }, [dispatch]);

  return (
    <div className="bg-red-500">
      Home
      <br />
      value from reducer -
{' '}
<span>{testValue}</span>
      <br />
      async value:
{' '}
<span>{laterValue}</span>
    </div>
  );
};

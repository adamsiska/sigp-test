import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';

const Routes = () => {
  return (
  <Switch>
      <Route
        path="/"
        exact
      >
        <Home />
      </Route>
      <Route
        path="/:id"
      >
        <MovieDetail />
      </Route>
  </Switch>
  );
};

export default Routes;

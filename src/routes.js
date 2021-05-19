import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Favorites } from './pages/Favorites.tsx';
import { Home } from './pages/Home.tsx';
import { MovieDetail } from './pages/MovieDetail';

export const Routes = () => {
  return (
  <Switch>
      <Route
        path="/"
        exact
      >
        <Home />
      </Route>
      <Route
        path="/favorites"
        exact
      >
        <Favorites />
      </Route>
      <Route
        path="/:id"
      >
        <MovieDetail />
      </Route>
  </Switch>
  );
};

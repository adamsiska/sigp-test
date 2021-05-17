import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from './layout';
import Routes from './routes';

export const App = () => {
  return (
    <Router>
      <Layout>
        <Routes />
      </Layout>
    </Router>
  );
};
